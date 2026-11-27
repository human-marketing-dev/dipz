import nodemailer from "nodemailer";

// Recibe los formularios del sitio (bloque de contacto y /contacto) y los manda por correo vía SMTP.
// Funciona con el SMTP de HubSpot o con el de cualquier proveedor de correo. Los datos viven en
// el archivo .env.local del servidor (nunca en el código):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS  → servidor y acceso SMTP
//   CONTACTO_PARA                                → a quién llega (varios separados por coma)
//   CONTACTO_DE (opcional)                       → remitente; si falta se usa SMTP_USER

const ETIQUETAS: Record<string, string> = {
  motivo: "Motivo",
  perfil: "Perfil",
  desarrollo: "Desarrollo de interés",
  propiedad: "Ubicación de la propiedad",
  nombre: "Nombre",
  correo: "Correo",
  telefono: "Teléfono",
  mensaje: "Mensaje",
  pagina: "Enviado desde",
};

const LIMITE = 5000;
const envios = new Map<string, number[]>();

// Límite sencillo contra abuso: 5 envíos por IP cada 10 minutos.
function permitido(ip: string) {
  const ahora = Date.now();
  const recientes = (envios.get(ip) ?? []).filter((t) => ahora - t < 10 * 60_000);
  if (recientes.length >= 5) return false;
  envios.set(ip, [...recientes, ahora]);
  return true;
}

const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Campo trampa: invisible para personas; si viene lleno es un bot. Se responde "ok" sin enviar.
  if (String(form.get("empresa_web") ?? "")) return Response.json({ ok: true });

  // Junta cada campo (los de casillas pueden venir repetidos).
  const datos: Record<string, string> = {};
  for (const clave of Object.keys(ETIQUETAS)) {
    const valores = form
      .getAll(clave)
      .map((v) => String(v).trim().slice(0, LIMITE))
      .filter(Boolean);
    if (valores.length) datos[clave] = valores.join(", ");
  }

  const correo = datos.correo ?? "";
  if (!datos.nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return Response.json({ ok: false, error: "datos" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (!permitido(ip)) return Response.json({ ok: false, error: "limite" }, { status: 429 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACTO_PARA, CONTACTO_DE } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACTO_PARA) {
    console.error("[contacto] Faltan variables SMTP en .env.local");
    return Response.json({ ok: false, error: "config" }, { status: 500 });
  }

  const puerto = Number(SMTP_PORT || 587);
  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: puerto,
    secure: puerto === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const filas = Object.entries(datos).map(([k, v]) => [ETIQUETAS[k], v] as const);
  const texto = filas.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${filas
    .map(
      ([k, v]) =>
        `<tr><td style="color:#666;vertical-align:top;white-space:nowrap"><strong>${k}</strong></td><td>${escapar(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;

  try {
    await transporte.sendMail({
      from: { name: "Sitio web DIPZ", address: CONTACTO_DE || SMTP_USER },
      to: CONTACTO_PARA,
      replyTo: { name: datos.nombre, address: correo },
      subject: `Nuevo contacto desde el sitio: ${datos.nombre}${datos.motivo ? ` (${datos.motivo})` : ""}`,
      text: texto,
      html,
    });
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[contacto] Error al enviar por SMTP", e);
    return Response.json({ ok: false, error: "envio" }, { status: 502 });
  }
}
