import { photos } from "@/components/home/content";

// Textos de /nosotros. Partieron del doc "DIPZ · Estructura, copys y SEO del sitio" y se ajustaron el
// 4 nov 2026 al registro del home: institucional, en frases declarativas y sin metáforas.
// Pendientes del cliente: hitos para "Nuestra historia", si se muestra al equipo directivo, unidades
// entregadas y m² en operación. Las cuatro reglas de "Cómo decidimos" se escribieron desde el brief
// y falta que el cliente las valide.

export const hero = {
  eyebrow: "Nosotros",
  title: "Desarrollamos en Monterrey desde hace más de 20 años.",
  intro:
    "DIPZ inició como desarrolladora en Monterrey. Hoy es un grupo de cuatro marcas que desarrolla proyectos en México y Estados Unidos y opera las propiedades que construye.",
  photo: { ...photos.piamontAereo, alt: "Vista aérea de Piamont en San Pedro Garza García con la Sierra Madre" },
};

export const grupo = {
  eyebrow: "Trayectoria",
  title: "De desarrolladora a grupo inmobiliario",
  // Tres tiempos del mismo párrafo, para leerlo como una secuencia.
  paragraphs: [
    "Durante dos décadas nos enfocamos en el desarrollo: adquisición de tierra, estructuración de capital y entrega de proyectos que conservan su valor en el tiempo.",
    "La relación con quien invierte continúa después de la entrega. Por eso incorporamos la operación: hoy administramos propiedades en renta en la ciudad y en destinos turísticos.",
    "A través de DIPZ Development llevamos el mismo modelo de desarrollo e inversión a Estados Unidos.",
  ],
  steps: ["Desarrollo", "Operación", "Expansión"],
  photo: photos.copeliaCiudad,
};

export const criterio = {
  eyebrow: "Nuestro criterio",
  title: "Cómo tomamos decisiones",
  intro: "Cuatro principios que aplicamos en cada proyecto, en todas las marcas del grupo.",
  rules: [
    {
      name: "Ubicación",
      text: "Cada proyecto parte de un análisis de la zona: su demanda, su crecimiento y el valor que puede sostener.",
    },
    {
      name: "Calidad constructiva",
      text: "Seleccionamos materiales y procesos en función del desempeño del proyecto a largo plazo.",
    },
    {
      name: "Continuidad",
      text: "Nuestras marcas de operación administran la propiedad después de la entrega. El cliente tiene un solo interlocutor en todo el proceso.",
    },
    {
      name: "Información",
      text: "Compartimos con cada inversionista cifras, plazos y reportes verificables.",
    },
  ],
};

export const marcas = {
  eyebrow: "Estructura del grupo",
  title: "Cuatro marcas, un mismo criterio",
  paragraph:
    "DIPZ Desarrollos y DIPZ Development desarrollan proyectos en México y Estados Unidos. Amelia Living opera propiedades en renta en la ciudad y Fresh Coco en destinos turísticos. DIPZ define el criterio común de las cuatro.",
  groups: [
    {
      role: "Desarrollo",
      brands: [
        { id: "dipz-desarrollos", name: "DIPZ Desarrollos", tag: "México" },
        { id: "dipz-development", name: "DIPZ Development", tag: "Estados Unidos" },
      ],
    },
    {
      role: "Operación",
      brands: [
        { id: "amelia-living", name: "Amelia Living", tag: "Ciudad" },
        { id: "fresh-coco", name: "Fresh Coco", tag: "Destino" },
      ],
    },
  ],
  link: { label: "Conocer las unidades de negocio", href: "/unidades-de-negocio" },
};

export const cierre = {
  eyebrow: "Trabajemos juntos",
  title: "Hablemos de tu siguiente inversión.",
};
