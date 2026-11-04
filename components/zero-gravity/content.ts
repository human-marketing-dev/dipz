import { photos } from "@/components/home/content";

// Textos de /zero-gravity. Partieron del doc "DIPZ · Estructura, copys y SEO del sitio" y se ajustaron el
// 4 nov 2026 al registro del home: institucional, en frases declarativas y sin metáforas.
// "Cómo trabajamos" reutiliza el bloque del home (components/home/Modelo.tsx), que se queda también
// en el home por decisión del 3 de noviembre de 2026. El caso completo de Amelia Santa Lucía queda fuera.

export const hero = {
  eyebrow: "Nuestra filosofía",
  title: "Zero Gravity",
  intro:
    "Desarrollar un proyecto, estructurar una inversión y administrar una propiedad exigen tiempo, conocimiento y operación constante. En DIPZ asumimos esa parte.",
  photo: { ...photos.piamontRooftop, alt: "Rooftop de Piamont abierto al cielo de San Pedro Garza García" },
};

export const caras = {
  eyebrow: "El modelo",
  title: "Lo que asume DIPZ y lo que recibe el cliente",
  intro:
    "Zero Gravity es la forma en que el grupo distribuye el trabajo: DIPZ asume las etapas que exigen especialización y el cliente recibe sus resultados.",
  headers: ["DIPZ asume", "El cliente recibe"],
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
      asumimos: "La originación y el desarrollo de proyectos en México.",
      recibes: "Patrimonio en zonas consolidadas.",
    },
    {
      id: "dipz-development",
      name: "DIPZ Development",
      tag: "Estados Unidos",
      asumimos: "La estructuración de inversiones en Estados Unidos.",
      recibes: "Diversificación en un mercado de alto crecimiento.",
    },
    {
      id: "amelia-living",
      name: "Amelia Living",
      tag: "Ciudad",
      asumimos: "La operación diaria de propiedades en renta.",
      recibes: "Ingresos y reportes en tiempo real.",
    },
    {
      id: "fresh-coco",
      name: "Fresh Coco",
      tag: "Destino",
      asumimos: "La operación de propiedades en destinos turísticos.",
      recibes: "Ingresos durante todo el año.",
    },
  ],
  link: { label: "Conocer las unidades de negocio", href: "/unidades-de-negocio" },
};

export const loQueNoEs = {
  eyebrow: "Respaldo",
  title: "Una filosofía respaldada por la trayectoria",
  paragraph:
    "Zero Gravity se sostiene en más de 20 años de experiencia y en proyectos diseñados para conservar su valor. Cada etapa del proceso la resuelve el equipo con la especialización que requiere.",
};

export const cierre = {
  eyebrow: "Trabajemos juntos",
  title: "Hablemos de tu siguiente inversión.",
};
