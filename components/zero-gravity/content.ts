import copeliaAlbercaSrc from "@/public/copelia/amenidades-alberca-copelia.webp";

// Textos de /zero-gravity. Partieron del doc "DIPZ · Estructura, copys y SEO del sitio" y se ajustaron el
// 4 nov 2026 al registro del home y de nuevo el 4 nov (ronda 9) a un tono corporativo. Se evita
// "asumir" (el cliente lo encuentra ambiguo): se usa "se encarga de".
// "Cómo trabajamos" reutiliza el bloque del home (components/home/Modelo.tsx), que se queda también
// en el home por decisión del 3 de noviembre de 2026. El caso completo de Amelia Santa Lucía queda fuera.

export const hero = {
  eyebrow: "Nuestra filosofía",
  title: "Zero Gravity",
  intro:
    "Zero Gravity es el modelo de trabajo de DIPZ. El grupo se encarga del desarrollo, la estructuración de la inversión y la administración de cada propiedad, para que el cliente reciba los resultados sin intervenir en la operación.",
  photo: { src: copeliaAlbercaSrc, alt: "Alberca de Copelia abierta a la Sierra Madre y al cielo de Valle Oriente" },
};

export const caras = {
  eyebrow: "El modelo",
  title: "Responsabilidades de DIPZ y beneficios para el cliente",
  intro:
    "En cada etapa, DIPZ se encarga de los procesos que requieren especialización técnica, financiera y operativa. El cliente recibe un patrimonio administrado de forma profesional.",
  headers: ["DIPZ se encarga de", "El cliente recibe"],
  rows: [
    ["Identificación de la tierra y estructuración del capital", "Acceso a proyectos en ubicaciones de alto valor"],
    ["Diseño, construcción y cumplimiento de plazos", "Una propiedad lista para habitar o para generar rentas"],
    ["Administración de huéspedes, mantenimiento y cobranza", "Rendimientos y reportes periódicos, sin intervenir en la operación"],
    ["Conocimiento del mercado y del marco legal en Estados Unidos", "Inversión en Estados Unidos con el respaldo de un equipo especializado"],
  ],
};

export const enCadaUnidad = {
  eyebrow: "Unidades de negocio",
  title: "Zero Gravity en cada unidad",
  units: [
    {
      id: "dipz-desarrollos",
      name: "DIPZ Desarrollos",
      tag: "México",
      asumimos: "Originación y desarrollo de proyectos en México.",
      recibes: "Patrimonio en zonas consolidadas.",
    },
    {
      id: "dipz-development",
      name: "DIPZ Development",
      tag: "Estados Unidos",
      asumimos: "Estructuración de inversiones en Estados Unidos.",
      recibes: "Diversificación en un mercado de alto crecimiento.",
    },
    {
      id: "amelia-living",
      name: "Amelia Living",
      tag: "Zonas urbanas",
      asumimos: "Administración de propiedades en renta.",
      recibes: "Ingresos y reportes en tiempo real.",
    },
    {
      id: "fresh-coco",
      name: "Fresh Coco",
      tag: "Destinos turísticos",
      asumimos: "Operación de propiedades en destinos turísticos.",
      recibes: "Ingresos por renta durante todo el año.",
    },
  ],
  link: { label: "Conocer las unidades de negocio", href: "/unidades-de-negocio" },
};

// "Cómo trabajamos" en /zero-gravity: mismos pasos del home con título y texto propios (el home
// conserva los suyos).
export const proceso = {
  title: "Un proceso integral.",
  paragraph:
    "DIPZ participa en cada proyecto desde la adquisición del terreno hasta la administración de la propiedad. Esta integración permite mantener la calidad del inmueble, iniciar la operación desde la entrega y ofrecer al propietario un solo interlocutor.",
};

export const loQueNoEs = {
  eyebrow: "Respaldo",
  title: "Experiencia que respalda el modelo",
  paragraph:
    "El modelo Zero Gravity se sustenta en más de 20 años de experiencia en el sector y en equipos especializados en cada etapa: desarrollo, inversión y administración.",
};

export const cierre = {
  eyebrow: "Contacto",
  title: "Agenda una reunión con nuestro equipo.",
};
