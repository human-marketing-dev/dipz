import { photos } from "@/components/home/content";

// Textos de /nosotros, del doc "DIPZ · Estructura, copys y SEO del sitio" (noviembre 2026).
// Pendientes del cliente: hitos para "Nuestra historia", si se muestra al equipo directivo, unidades
// entregadas y m² en operación. Las cuatro reglas de "Cómo decidimos" se escribieron desde el brief
// y falta que el cliente las valide.

export const hero = {
  eyebrow: "Nosotros",
  title: "Desarrollamos en Monterrey desde hace más de 20 años.",
  intro:
    "Empezamos como desarrolladora regiomontana. Hoy somos un grupo de cuatro marcas que desarrolla en México y Estados Unidos, y que opera lo que construye.",
  photo: { ...photos.piamontAereo, alt: "Vista aérea de Piamont en San Pedro Garza García con la Sierra Madre" },
};

export const grupo = {
  eyebrow: "De desarrolladora a grupo",
  title: "De un proyecto a un grupo",
  // Tres tiempos del mismo párrafo, para leerlo como una secuencia.
  paragraphs: [
    "Durante dos décadas nuestro trabajo fue desarrollar: encontrar la tierra, estructurar el capital y entregar proyectos que sostuvieran su valor.",
    "Con el tiempo entendimos que la relación con quien invierte no termina en la entrega. Por eso sumamos la operación: hoy también administramos las propiedades, en la ciudad y en destinos turísticos.",
    "Y llevamos el mismo criterio a Estados Unidos.",
  ],
  steps: ["Desarrollar", "Operar", "Cruzar la frontera"],
  photo: photos.copeliaCiudad,
};

export const criterio = {
  eyebrow: "Nuestro criterio",
  title: "Cómo decidimos",
  intro: "Cuatro reglas que aplicamos en cada proyecto, sin importar la marca que lo lleve.",
  rules: [
    {
      name: "La ubicación va primero",
      text: "Antes de diseñar, estudiamos la zona: quién vive ahí, hacia dónde crece y qué valor puede sostener.",
    },
    {
      name: "Construimos para que dure",
      text: "Elegimos materiales y procesos pensando en cómo se verá el proyecto en diez años, no el día de la entrega.",
    },
    {
      name: "Seguimos después de entregar",
      text: "Cuando el proyecto lo requiere, nuestras marcas de operación se encargan de la propiedad. Un solo interlocutor de principio a fin.",
    },
    {
      name: "Hablamos con datos",
      text: "A quien invierte le mostramos cifras, plazos y reportes. Los adjetivos los dejamos a los demás.",
    },
  ],
};

export const marcas = {
  eyebrow: "Cómo se organiza el grupo",
  title: "Un criterio, cuatro marcas",
  paragraph:
    "DIPZ Desarrollos y DIPZ Development desarrollan el lugar, en México y en Estados Unidos. Amelia Living opera la experiencia en la ciudad. Fresh Coco la opera en el destino. DIPZ define el criterio con el que se hacen ambas cosas.",
  groups: [
    {
      role: "Desarrollan el lugar",
      brands: [
        { id: "dipz-desarrollos", name: "DIPZ Desarrollos", tag: "México" },
        { id: "dipz-development", name: "DIPZ Development", tag: "Estados Unidos" },
      ],
    },
    {
      role: "Operan la experiencia",
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
