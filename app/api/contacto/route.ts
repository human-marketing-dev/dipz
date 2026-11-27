import { cookies } from "next/headers";

// Recibe los formularios del sitio (bloque de contacto y /contacto) y los manda a un formulario
// "buzón" de HubSpot que nunca se muestra en el sitio. HubSpot guarda el contacto en el CRM y
// envía el aviso por correo a quien esté configurado en ese formulario.
// Usa el endpoint público de envío de formularios (no requiere token ni plan de pago).
// Portal ID y Form ID salen del código de inserción del formulario en HubSpot.
const HUBSPOT = {
  portalId: "",
  formId: "",
  region: "na1", // si el código de inserción dice region: "eu1", cambiar aquí
};

// Datos del sitio que HubSpot no trae como propiedad: van al inicio del Mensaje para que lleguen
// en el aviso por correo sin crear propiedades personalizadas.
const EXTRAS: Record<string, string> = {
  motivo: "Motivo",
  perfil: "Perfil",
  desarrollo: "Desarrollo de interés",
  propiedad: "Ubicación de la propiedad",
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
  const valor = (clave: string) =>
    form
      .getAll(clave)
      .map((v) => String(v).trim().slice(0, LIMITE))
      .filter(Boolean)
      .join("; ");

  const nombre = valor("nombre");
  const correo = valor("correo");
  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return Response.json({ ok: false, error: "datos" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "";
  if (!permitido(ip || "local")) return Response.json({ ok: false, error: "limite" }, { status: 429 });

  if (!HUBSPOT.portalId || !HUBSPOT.formId) {
    console.error("[contacto] Falta Portal ID / Form ID de HubSpot en app/api/contacto/route.ts");
    return Response.json({ ok: false, error: "config" }, { status: 500 });
  }

  const extras = Object.entries(EXTRAS)
    .map(([campo, etiqueta]) => (valor(campo) ? `${etiqueta}: ${valor(campo)}` : ""))
    .filter(Boolean);
  const message = [...extras, ...(extras.length && valor("mensaje") ? [""] : []), valor("mensaje")]
    .join("\n")
    .trim();

  // "Ana López García" → nombre "Ana", apellido "López García".
  const [firstname, ...resto] = nombre.split(/\s+/);
  const fields = [
    { name: "firstname", value: firstname },
    ...(resto.length ? [{ name: "lastname", value: resto.join(" ") }] : []),
    { name: "email", value: correo },
    ...(valor("telefono") ? [{ name: "phone", value: valor("telefono") }] : []),
    ...(message ? [{ name: "message", value: message }] : []),
  ];

  let pagina = "";
  try {
    pagina = new URL(valor("pagina")).href;
  } catch {}
  const hutk = (await cookies()).get("hubspotutk")?.value;
  const context = {
    ...(hutk ? { hutk } : {}),
    ...(pagina ? { pageUri: pagina, pageName: new URL(pagina).pathname } : {}),
    ...(ip ? { ipAddress: ip } : {}),
  };

  const host = HUBSPOT.region === "na1" ? "api.hsforms.com" : `api-${HUBSPOT.region}.hsforms.com`;
  try {
    const res = await fetch(
      `https://${host}/submissions/v3/integration/submit/${HUBSPOT.portalId}/${HUBSPOT.formId}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fields, context }) },
    );
    if (!res.ok) {
      console.error("[contacto] HubSpot rechazó el envío", res.status, await res.text());
      return Response.json({ ok: false, error: "envio" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[contacto] No se pudo contactar a HubSpot", e);
    return Response.json({ ok: false, error: "envio" }, { status: 502 });
  }
}
