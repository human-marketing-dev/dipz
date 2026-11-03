import { photos } from "@/components/home/content";

// Textos de /zero-gravity, del doc "DIPZ · Estructura, copys y SEO del sitio" (noviembre 2026).
// "Cómo trabajamos" reutiliza el bloque del home (components/home/Modelo.tsx), que se queda también
// en el home por decisión del 3 de noviembre de 2026. El caso completo de Amelia Santa Lucía queda fuera.

export const hero = {
  eyebrow: "Nuestra filosofía",
  title: "Zero Gravity",
  intro:
    "Desarrollar, invertir y administrar exigen tiempo, conocimiento y operación constante. Esa parte la asumimos nosotros.",
  photo: { ...photos.piamontRooftop, alt: "Rooftop de Piamont abierto al cielo de San Pedro Garza García" },
};

export const caras = {
  eyebrow: "Las dos caras",
  title: "Lo que asumimos, lo que recibes",
  quote: "Zero Gravity no significa que el trabajo desaparezca. Significa que cambia de lado.",
  headers: ["Lo que asumimos", "Lo que recibes"],
  rows: [
    ["Encontrar la tierra y estructurar el capital", "Acceso a proyectos en ubicaciones que sostienen su valor"],
    ["Diseñar, construir y cumplir plazos", "Una propiedad lista para habitar o para producir"],
    ["Administrar huéspedes, mantenimiento y cobranza", "Rendimiento y reportes, sin tener que operar"],
    ["Conocer otro mercado y su estructura legal", "Inversión en Estados Unidos sin construir esa capacidad por tu cuenta"],
  ],
};

export const enCadaUnidad = {
  eyebrow: "En cada unidad",
  title: "Una misma idea en cuatro terrenos",
  units: [
    {
      id: "dipz-desarrollos",
      name: "DIPZ Desarrollos",
      tag: "México",
      asumimos: "La complejidad de originar un proyecto en México.",
      recibes: "Patrimonio en una zona consolidada.",
    },
    {
      id: "dipz-development",
      name: "DIPZ Development",
      tag: "Estados Unidos",
      asumimos: "La barrera de invertir fuera del país.",
      recibes: "Participación en mercados de alto crecimiento.",
    },
    {
      id: "amelia-living",
      name: "Amelia Living",
      tag: "Ciudad",
      asumimos: "La operación diaria de tu propiedad en renta.",
      recibes: "Tu inversión a la vista, en tiempo real.",
    },
    {
      id: "fresh-coco",
      name: "Fresh Coco",
      tag: "Destino",
      asumimos: "La operación de tu propiedad en destino.",
      recibes: "Ingresos todo el año.",
    },
  ],
  link: { label: "Conocer las unidades", href: "/unidades-de-negocio" },
};

export const loQueNoEs = {
  eyebrow: "Lo que no es",
  title: "Ligero no significa frágil",
  paragraph:
    "Zero Gravity convive con veinte años de trayectoria y con proyectos pensados para durar. No es una promesa de que invertir sea fácil, sino de que la parte difícil la hace quien sabe hacerla.",
};

export const cierre = {
  eyebrow: "Trabajemos juntos",
  title: "Hablemos de tu siguiente inversión.",
};
