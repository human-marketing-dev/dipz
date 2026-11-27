// Envío de los formularios del sitio a un formulario "buzón" de HubSpot que nunca se muestra.
// HubSpot guarda el contacto en el CRM y manda el aviso por correo a quien esté configurado en ese
// formulario. Se envía desde el navegador del visitante (endpoint público, sin token) para que
// HubSpot vea su IP y navegador reales; enviado desde el servidor lo marcaba como spam.
// Portal ID y Form ID salen del código de inserción del formulario en HubSpot. No son secretos.
const HUBSPOT = {
  portalId: "51097290",
  formId: "8d35375a-91ed-4bd9-ac33-5ac465d9a81c",
  host: "api.hsforms.com", // región na1; para eu1 sería api-eu1.hsforms.com
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

function cookie(nombre: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${nombre}=`))
    ?.split("=")[1];
}

/** Manda el formulario a HubSpot. Devuelve true si HubSpot lo aceptó. */
export async function enviarAHubspot(form: FormData): Promise<boolean> {
  const valor = (clave: string) =>
    form
      .getAll(clave)
      .map((v) => String(v).trim().slice(0, LIMITE))
      .filter(Boolean)
      .join("; ");

  const nombre = valor("nombre");
  const correo = valor("correo");
  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) return false;

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

  const hutk = cookie("hubspotutk");
  const context = {
    ...(hutk ? { hutk } : {}),
    pageUri: window.location.href,
    pageName: document.title,
  };

  const res = await fetch(
    `https://${HUBSPOT.host}/submissions/v3/integration/submit/${HUBSPOT.portalId}/${HUBSPOT.formId}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fields, context }) },
  );
  if (!res.ok) console.error("[contacto] HubSpot rechazó el envío", res.status, await res.text());
  return res.ok;
}
