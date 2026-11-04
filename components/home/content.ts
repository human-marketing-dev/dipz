import type { Photo } from "@/components/ui/Media";
import piamontAccesoSrc from "@/public/piamont/frontal-acceso-piamont.webp";
import piamontFachadaSrc from "@/public/piamont/fondo-fachada-piamont.webp";
import piamontAereoSrc from "@/public/piamont/aereo-piamont.webp";
import copeliaCiudadSrc from "@/public/copelia/render-ciudad-copelia.webp";
import copeliaFachadaSrc from "@/public/copelia/render-fachada-copelia.webp";
import copeliaTerrazaSrc from "@/public/copelia/amenidades-terraza-copelia.webp";
import copeliaDeptoSrc from "@/public/copelia/sala-comedor-departamento-copelia.webp";
import copeliaSalaEstarSrc from "@/public/copelia/amenidades-sala-de-estar-copelia.webp";
import piamontRooftopSrc from "@/public/piamont/amenidades-rooftop-piamont.webp";
import piamontPiscinaSrc from "@/public/piamont/amenidades-piscina-piamont.webp";
import ameliaTorreSrc from "@/public/amelia/amelia-render.webp";

// Textos del home, tomados de "Textos de la página de inicio DIPZ" (Human Marketing, octubre 2026).
// Las cifras, ciudades y publicaciones marcadas como pendientes siguen sujetas a confirmación del cliente.

export type Drawing = "tower" | "slab" | "interior" | "landscape" | "street";

// Fotos en /public (renders de cada desarrollo), importadas para que Media conozca sus medidas.
// Donde no hay foto todavía se usa el marcador de línea.
export const photos = {
  piamontAcceso: { src: piamontAccesoSrc, alt: "Acceso de Piamont al atardecer" },
  piamontFachada: { src: piamontFachadaSrc, alt: "Fachada de Piamont en Valle del Campestre" },
  piamontAereo: { src: piamontAereoSrc, alt: "Vista aérea de San Pedro Garza García con la Sierra Madre" },
  copeliaCiudad: { src: copeliaCiudadSrc, alt: "Copelia en el skyline de Valle Oriente" },
  copeliaFachada: { src: copeliaFachadaSrc, alt: "Fachada de Copelia", position: "70% center" },
  copeliaTerraza: { src: copeliaTerrazaSrc, alt: "Terraza de Copelia con vista a Valle Oriente" },
  copeliaDepto: { src: copeliaDeptoSrc, alt: "Sala comedor de un departamento en Copelia" },
  copeliaSalaEstar: { src: copeliaSalaEstarSrc, alt: "Sala de estar en las amenidades de Copelia", position: "60% center" },
  piamontRooftop: { src: piamontRooftopSrc, alt: "Rooftop de Piamont" },
  piamontPiscina: { src: piamontPiscinaSrc, alt: "Piscina de Piamont" },
  ameliaTorre: { src: ameliaTorreSrc, alt: "Torre Amelia Santa Lucía en el centro de Monterrey", position: "center 30%" },
};


// Video institucional entre Respaldo y Zero Gravity. Mientras no haya video se muestra el marcador;
// para activarlo, poner aquí el ID de YouTube (lo que va después de "v=" en el enlace).
export const video = {
  eyebrow: "Video institucional",
  title: "Conoce DIPZ",
  youtubeId: "",
};

export const hero = {
  eyebrow: "Grupo inmobiliario",
  title: "Elevamos la forma de vivir y de invertir.",
  subtitle:
    "Más de 20 años creando proyectos que generan valor para quienes invierten y elevan la vida de quienes los habitan.",
  primary: { label: "Ver desarrollos", href: "#desarrollos" },
  secondary: { label: "Invertir con DIPZ", href: "#rutas" },
};

export const respaldo = {
  eyebrow: "Respaldo",
  stats: [
    { prefix: "+", value: 20, unit: "años", text: "De trayectoria en el sector inmobiliario" },
    { prefix: "+", value: 400000, unit: "m²", text: "Construidos en México" },
    { prefix: "", value: 4, unit: "marcas", text: "Especializadas en desarrollo y operación" },
    { prefix: "", value: 2, unit: "países", text: "México y Estados Unidos" },
  ],
};

export const zeroGravity = {
  eyebrow: "Nuestra filosofía",
  title: "Zero Gravity",
  paragraph:
    "Desarrollar un proyecto, estructurar una inversión y administrar una propiedad exigen tiempo, conocimiento y operación constante. En DIPZ asumimos esa parte. Lo que llega a nuestros clientes es la otra: un patrimonio que crece, una propiedad que produce y una forma de vivir que se siente ligera.",
  // Misión, visión y valores (pedido del cliente, 3 nov 2026). Los textos de las etapas anteriores
  // (Originamos, Construimos, Operamos) no correspondían a estos títulos; estos son propuesta y
  // faltan por validar con el cliente.
  stagesTitle: "Lo que nos guía",
  stages: [
    {
      n: "01",
      name: "Misión",
      text: "Desarrollar y operar proyectos inmobiliarios que generen valor para quienes invierten y eleven la vida de quienes los habitan.",
    },
    {
      n: "02",
      name: "Visión",
      text: "Que cada propiedad que desarrollamos siga generando valor muchos años después de su entrega, en México y en Estados Unidos.",
    },
    {
      n: "03",
      name: "Valores",
      text: "Ubicación, calidad constructiva, continuidad después de la entrega e información clara para cada inversionista.",
    },
  ],
  logo: { src: "/brand/zero-gravity-logo.webp", width: 1200, height: 960 },
};

export const unidades = {
  eyebrow: "Nuestras marcas",
  title: "Distintas marcas. Un mismo propósito.",
  intro:
    "Cada marca del grupo se especializa en una etapa o en un territorio. Juntas cubren el ciclo completo: desarrollar, invertir y operar.",
  brands: [
    {
      id: "dipz-desarrollos",
      name: "DIPZ Desarrollos",
      tag: "México",
      title: "Desarrollamos el futuro de México.",
      text: "Identificamos oportunidades, estructuramos capital y desarrollamos proyectos en las ubicaciones de mayor valor del país. Veinte años de trayectoria respaldan cada decisión de inversión.",
      capabilities: ["Adquisición de tierra", "Desarrollo de proyectos", "Inversión y capital", "Generación de valor"],
      link: "Conocer DIPZ Desarrollos",
      drawing: "street" as Drawing,
      photo: photos.piamontAereo as Photo | undefined,
    },
    {
      id: "dipz-development",
      name: "DIPZ Development",
      tag: "Estados Unidos",
      title: "Bienes raíces sin fronteras.",
      text: "Desarrollamos e invertimos en ciudades estadounidenses de alto crecimiento, con la misma disciplina y el mismo criterio con el que construimos en México. Para el inversionista mexicano, una puerta de entrada a ese mercado sin tener que construirla por su cuenta.",
      capabilities: ["Adquisición de tierra", "Desarrollo y diseño", "Inversión y capital", "Valor a largo plazo"],
      link: "Conocer DIPZ Development",
      drawing: "slab" as Drawing,
      photo: photos.piamontRooftop as Photo | undefined,
    },
    {
      id: "amelia-living",
      name: "Amelia Living",
      tag: "Operación urbana",
      title: "Operamos propiedades. Creamos comunidad.",
      text: "Administramos y operamos propiedades en renta integrando hospitalidad, tecnología y servicio profesional. El propietario sigue su inversión en tiempo real desde su aplicación; el residente encuentra una vida urbana resuelta.",
      capabilities: ["Administración de propiedades", "Comunidad y cowork", "Wellness y experiencias", "Concierge y servicios"],
      link: "Conocer Amelia Living",
      drawing: "interior" as Drawing,
      photo: photos.ameliaTorre as Photo | undefined,
    },
    {
      id: "fresh-coco",
      name: "Fresh Coco",
      tag: "Hospitalidad y destinos",
      title: "Destinos que se viven de otra manera.",
      text: "Operamos propiedades en destinos turísticos, donde la hospitalidad, la naturaleza y la experiencia se unen para crear estancias memorables y activos que producen durante todo el año.",
      capabilities: ["Hospitalidad y estancias", "Destinos turísticos", "Experiencias y retreats", "F&B y lifestyle"],
      link: "Conocer Fresh Coco",
      drawing: "landscape" as Drawing,
      photo: photos.piamontPiscina as Photo | undefined,
    },
  ],
};

export const modelo = {
  eyebrow: "Cómo trabajamos",
  title: "Un ciclo que no se interrumpe.",
  paragraph:
    "Acompañamos cada proyecto desde que es una oportunidad hasta que es una propiedad en operación. Esa continuidad es lo que permite que la calidad se sostenga, que el activo produzca desde el primer día y que el propietario tenga un solo interlocutor en todo el proceso.",
  steps: [
    { n: "01", name: "Originamos", text: "Analizamos la zona, adquirimos la tierra y estructuramos el capital." },
    { n: "02", name: "Desarrollamos", text: "Diseñamos y construimos el proyecto." },
    { n: "03", name: "Entregamos", text: "El propietario recibe una propiedad lista para habitar o para producir." },
    { n: "04", name: "Operamos", text: "Amelia Living y Fresh Coco se hacen cargo de la operación, la ocupación y la experiencia." },
  ],
};

export const desarrollos = {
  eyebrow: "Portafolio",
  title: "Desarrollos activos",
  intro:
    "Tres proyectos en construcción y comercialización, en las zonas de mayor valor del área metropolitana de Monterrey.",
  link: { label: "Ver todos los desarrollos", href: "/desarrollos" },
  projects: [
    {
      id: "piamont",
      name: "Piamont",
      location: "Valle del Campestre, San Pedro Garza García",
      zone: "San Pedro",
      text: "Residencias donde la herencia italiana y las montañas de San Pedro se encuentran. Departamentos de 105 a 386 metros cuadrados, con speakeasy, rooftop, alberca y siete locales comerciales.",
      facts: [
        { label: "Superficies", value: "105 a 386 m²" },
        { label: "Amenidades", value: "Speakeasy, rooftop, alberca" },
        { label: "Comercio", value: "7 locales" },
      ],
      drawing: "slab" as Drawing,
      heroPhoto: photos.piamontAcceso,
      photo: photos.piamontFachada,
    },
    {
      id: "copelia",
      name: "Copelia",
      location: "Valle Oriente, San Pedro Garza García",
      zone: "Valle Oriente",
      text: "Torre residencial de 38 departamentos en el corazón de Valle Oriente. Residencias de 170 a 565 metros cuadrados, con diez amenidades y tipologías de dos y tres recámaras.",
      facts: [
        { label: "Departamentos", value: "38" },
        { label: "Superficies", value: "170 a 565 m²" },
        { label: "Amenidades", value: "10" },
      ],
      drawing: "tower" as Drawing,
      heroPhoto: photos.copeliaCiudad,
      photo: photos.copeliaFachada,
    },
    {
      id: "amelia-santa-lucia",
      name: "Amelia Santa Lucía",
      location: "Centro de Monterrey",
      zone: "Centro",
      text: "Torre de 19 niveles frente al Paseo Santa Lucía. 145 departamentos de 43 a 74 metros cuadrados, 17 amenidades y operación profesional a cargo de Amelia Living.",
      facts: [
        { label: "Departamentos", value: "145" },
        { label: "Superficies", value: "43 a 74 m²" },
        { label: "Operación", value: "Amelia Living" },
      ],
      drawing: "street" as Drawing,
      heroPhoto: photos.ameliaTorre,
      photo: photos.ameliaTorre,
    },
  ],
};

// La sección Alcance (mapa de ciudades) salió del home el 3 nov 2026; su texto vive ahora en
// Cómo trabajamos.
export const alcance = {
  eyebrow: "Alcance",
  paragraph:
    "Nuestra operación se concentra en Monterrey y San Pedro Garza García, con presencia en las principales ciudades de México y expansión hacia Estados Unidos.",
};

export const rutas = {
  eyebrow: "Por dónde empezar",
  title: "¿Qué estás buscando?",
  cards: [
    {
      n: "01",
      name: "Invertir",
      text: "Conoce cómo estructuramos cada oportunidad y qué modelos de inversión ofrecemos en México y en Estados Unidos.",
      link: "Hablar con un asesor",
      drawing: "street" as Drawing,
      photo: photos.copeliaTerraza as Photo | undefined,
    },
    {
      n: "02",
      name: "Vivir",
      text: "Explora los desarrollos disponibles y encuentra el que corresponde a tu forma de vivir.",
      link: "Ver desarrollos",
      drawing: "interior" as Drawing,
      photo: photos.copeliaDepto as Photo | undefined,
    },
    {
      n: "03",
      name: "Operar mi propiedad",
      text: "Si ya tienes una propiedad en renta, Amelia Living puede operarla para que produzca sin que tengas que administrarla.",
      link: "Conocer el modelo",
      drawing: "slab" as Drawing,
      photo: photos.copeliaSalaEstar as Photo | undefined,
    },
  ],
};

export const perspectivas = {
  eyebrow: "Blog",
  title: "Ideas sobre el futuro de los bienes raíces",
  intro:
    "Análisis, criterios de inversión y lecturas del mercado inmobiliario, desde la experiencia de quienes desarrollan y operan.",
  link: { label: "Ver todas las publicaciones", href: "#" },
  // Publicaciones de ejemplo: la estrategia editorial se define en la etapa de contenidos.
  posts: [
    { date: "Octubre 2026", category: "Inversión", title: "Publicación de ejemplo: cómo se estructura una inversión inmobiliaria en preventa", drawing: "street" as Drawing, photo: photos.piamontAcceso },
    { date: "Septiembre 2026", category: "Mercado", title: "Publicación de ejemplo: San Pedro y Valle Oriente, lectura del mercado residencial", drawing: "tower" as Drawing, photo: photos.copeliaCiudad },
    { date: "Agosto 2026", category: "Operación", title: "Publicación de ejemplo: renta administrada, qué recibe el propietario", drawing: "interior" as Drawing, photo: photos.ameliaTorre },
  ],
};

export const cierre = {
  eyebrow: "Trabajemos juntos",
  title: "Desarrollemos algo grande juntos.",
  paragraph:
    "Ya sea que busques invertir, desarrollar o expandir tu patrimonio, nos daría mucho gusto acompañarte en cada etapa del proceso.",
  primary: "Contáctanos",
  secondary: "Agendar una reunión",
  phone: "+52 81 1984 1517",
  showroom: "Río Guadalquivir 305, del Valle, San Pedro Garza García, 66220",
  profiles: ["Inversionista", "Comprador", "Propietario"],
};

// Menú del sitio. Contacto va aparte, como botón.
export const redes = [
  { name: "Instagram", handle: "@dipzmx", href: "https://www.instagram.com/dipzmx/" },
  { name: "Facebook", handle: "dipzmx", href: "https://www.facebook.com/dipzmx/" },
  { name: "LinkedIn", handle: "dipzmx", href: "https://www.linkedin.com/company/dipzmx/" },
];

// Botón flotante de WhatsApp: mismo número del teléfono de contacto.
export const whatsapp = {
  number: "528119841517",
  greeting: "Hola, somos DIPZ. ¿Te interesa invertir, comprar para vivir u operar tu propiedad? Escríbenos y te atiende un asesor.",
  message: "Hola, vengo del sitio de DIPZ y me gustaría recibir información.",
};

export const nav = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Zero Gravity", href: "/zero-gravity" },
  { label: "Unidades", href: "/unidades-de-negocio" },
  { label: "Desarrollos", href: "/desarrollos" },
];
