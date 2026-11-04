import { photos } from "@/components/home/content";

// Textos de /nosotros. Partieron del doc "DIPZ · Estructura, copys y SEO del sitio" y se ajustaron el
// 4 nov 2026 al registro del home y de nuevo el 4 nov (ronda 9) a un tono corporativo: frases
// descriptivas, en tercera persona cuando se presenta al grupo, sin metáforas.
// Pendientes del cliente: hitos para "Nuestra historia", si se muestra al equipo directivo, unidades
// entregadas y m² en operación. Las cuatro reglas de "Cómo decidimos" se escribieron desde el brief
// y falta que el cliente las valide.

export const hero = {
  eyebrow: "Nosotros",
  title: "Grupo inmobiliario con más de 20 años de trayectoria.",
  intro:
    "DIPZ es un grupo desarrollador e inmobiliario con sede en Monterrey. A través de cuatro unidades de negocio, desarrolla proyectos residenciales y comerciales en México y Estados Unidos, y administra propiedades en renta en zonas urbanas y destinos turísticos.",
  photo: { ...photos.piamontAereo, alt: "Vista aérea de Piamont en San Pedro Garza García con la Sierra Madre" },
};

export const grupo = {
  eyebrow: "Trayectoria",
  title: "Desarrollo, operación y expansión",
  // Tres tiempos del mismo párrafo, para leerlo como una secuencia.
  paragraphs: [
    "Durante más de dos décadas, DIPZ se ha especializado en el desarrollo inmobiliario: adquisición de tierra, estructuración de capital, diseño, construcción y comercialización de proyectos en Monterrey y San Pedro Garza García.",
    "Para dar servicio a sus clientes después de la entrega, el grupo incorporó la administración de propiedades a través de Amelia Living y Fresh Coco, en zonas urbanas y destinos turísticos.",
    "Con DIPZ Development, el grupo extiende su modelo de desarrollo e inversión a Estados Unidos.",
  ],
  steps: ["Desarrollo", "Operación", "Expansión"],
  photo: photos.copeliaCiudad,
};

export const criterio = {
  eyebrow: "Nuestro criterio",
  title: "Principios de inversión",
  intro: "Cuatro principios que orientan las decisiones de todas las unidades de negocio del grupo.",
  rules: [
    {
      name: "Ubicación",
      text: "Cada proyecto parte de un análisis de la zona: demanda, crecimiento y potencial de plusvalía.",
    },
    {
      name: "Calidad constructiva",
      text: "Materiales y procesos constructivos se seleccionan en función del desempeño del inmueble a largo plazo.",
    },
    {
      name: "Continuidad",
      text: "Las unidades de operación del grupo administran la propiedad después de la entrega, con un solo interlocutor para el cliente.",
    },
    {
      name: "Información",
      text: "Cada inversionista recibe información financiera, plazos de obra y reportes periódicos.",
    },
  ],
};

export const marcas = {
  eyebrow: "Estructura del grupo",
  title: "Unidades de negocio",
  paragraph:
    "El grupo se organiza en dos áreas. En desarrollo, DIPZ Desarrollos opera en México y DIPZ Development en Estados Unidos. En operación, Amelia Living administra propiedades en renta en zonas urbanas y Fresh Coco, propiedades en destinos turísticos.",
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
        { id: "amelia-living", name: "Amelia Living", tag: "Zonas urbanas" },
        { id: "fresh-coco", name: "Fresh Coco", tag: "Destinos turísticos" },
      ],
    },
  ],
  link: { label: "Conocer las unidades de negocio", href: "/unidades-de-negocio" },
};

export const cierre = {
  eyebrow: "Contacto",
  title: "Agenda una reunión con nuestro equipo.",
};
