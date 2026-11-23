import type { Photo } from "@/components/ui/Media";
import { desarrollos as home, photos, type Drawing, type ProjectColor } from "@/components/home/content";
import piamontAcabadosSrc from "@/public/piamont/acabados-piamont.webp";
import piamontMontanasSrc from "@/public/piamont/fondo-montañas-piamont.webp";
import piamontPatioSrc from "@/public/piamont/patio-central-piamont.webp";
import piamontSpeakeasySrc from "@/public/piamont/amenidades-speakeasy-piamont.webp";
import piamontSpeakeasyCavaSrc from "@/public/piamont/speakeasy-cava-piamont.webp";
import piamontSpeakeasySalonSrc from "@/public/piamont/speakeasy-salon-piamont.webp";
import piamontRooftopSrc from "@/public/piamont/amenidades-rooftop-asador-piamont.webp";
import piamontRooftopComedorSrc from "@/public/piamont/rooftop-comedor-piamont.webp";
import piamontRooftopAlbercaSrc from "@/public/piamont/rooftop-alberca-piamont.webp";
import piamontRooftopSalaSrc from "@/public/piamont/rooftop-sala-piamont.webp";
import piamontJardinSrc from "@/public/piamont/amenidades-jardin-central-piamont.webp";
import piamontTerrazaSrc from "@/public/piamont/amenidades-terraza-piamont.webp";
import piamontTerrazaLoungeSrc from "@/public/piamont/terraza-lounge-piamont.webp";
import piamontLobbySrc from "@/public/piamont/lobby-recepcion-piamont.webp";
import piamontLobbyElevadoresSrc from "@/public/piamont/lobby-elevadores-piamont.webp";
import piamontDogParkSrc from "@/public/piamont/amenidades-dog-park-piamont.webp";
import piamontParqueSrc from "@/public/piamont/amenidades-parque-piamont.webp";
import piamontYogaSrc from "@/public/piamont/amenidades-yoga-deck-piamont.webp";
import copeliaAlbercaSrc from "@/public/copelia/amenidades-alberca-copelia.webp";
import copeliaAsadoresSrc from "@/public/copelia/amenidades-area-de-asadores-copelia.webp";
import copeliaGymSrc from "@/public/copelia/amenidades-gym-copelia.webp";
import copeliaJardinSrc from "@/public/copelia/amenidades-jardin-copelia.webp";
import copeliaJuegosSrc from "@/public/copelia/amenidades-sala-de-juegos-copelia.webp";
import ameliaLocalesSrc from "@/public/amelia/amelia-locales-render.webp";
import ameliaA0Src from "@/public/amelia/amenidades-art-lab-amelia.webp";
import ameliaA1Src from "@/public/amelia/amenidades-co-work-amelia.webp";
import ameliaA2Src from "@/public/amelia/amenidades-fit-happens-gimnasio-amelia.webp";
import ameliaA3Src from "@/public/amelia/amenidades-house-of-amelia-amelia.webp";
import ameliaA4Src from "@/public/amelia/amenidades-in-too-deep-alberca-amelia.webp";
import ameliaA5Src from "@/public/amelia/amenidades-reset-studio-amelia.webp";
import ameliaA6Src from "@/public/amelia/amenidades-sound-lab-amelia.webp";
import ameliaA7Src from "@/public/amelia/amenidades-suite-dreams-amelia.webp";
import ameliaA8Src from "@/public/amelia/amenidades-the-kickoff-amelia.webp";
import ameliaA9Src from "@/public/amelia/amenidades-the-meat-up-asadores-amelia.webp";
import ameliaLobbySrc from "@/public/amelia/lobby-principal-amelia.webp";
import ameliaLobby2Src from "@/public/amelia/lobby-secundario-amelia.webp";
import ameliaHouseComedorSrc from "@/public/amelia/house-of-amelia-comedor-amelia.webp";
import ameliaKickoffSalaSrc from "@/public/amelia/the-kickoff-sala-amelia.webp";
import ameliaSuiteVestidorSrc from "@/public/amelia/suite-dreams-vestidor-amelia.webp";
import ameliaTempoSrc from "@/public/amelia/plantas/planta-tempo-amelia.webp";
import ameliaWonderSrc from "@/public/amelia/plantas/planta-wonder-amelia.webp";
import ameliaJourneySrc from "@/public/amelia/plantas/planta-journey-amelia.webp";
import ameliaNova1Src from "@/public/amelia/plantas/planta-nova-1-amelia.webp";
import ameliaNova2Src from "@/public/amelia/plantas/planta-nova-2-amelia.webp";
import copeliaTipoASrc from "@/public/copelia/plantas/planta-tipo-a-copelia.webp";
import copeliaTipoBSrc from "@/public/copelia/plantas/planta-tipo-b-copelia.webp";
import copeliaTipoCSrc from "@/public/copelia/plantas/planta-tipo-c-copelia.webp";
import copeliaPh15Src from "@/public/copelia/plantas/planta-penthouse-nivel-15-copelia.webp";
import copeliaPh16Src from "@/public/copelia/plantas/planta-penthouse-roof-top-nivel-16-copelia.webp";

// Contenido de /desarrollos y de cada /desarrollos/[slug]. Lo que dice "Por confirmar" sigue
// pendiente del cliente: estatus por proyecto, fechas de entrega, plantas, m² por tipología y
// puntos cercanos. Titular y texto de cada ficha son descriptivos (ronda 9, 4 nov 2026); el home
// conserva sus propios textos.

export const POR_CONFIRMAR = "Por confirmar";

export type Perfil = "vivir" | "invertir";

export type Amenidad = { name: string; description?: string; photo?: Photo };

export type Tipologia = {
  name: string;
  area: string;
  // Ubicación del departamento en la planta (p. ej. "Departamento superior izquierda").
  subtitle?: string;
  detail?: string;
  features?: string[];
  // Una o más plantas (el penthouse tiene dos niveles); label nombra el nivel.
  plantas?: { photo: Photo; label?: string; description?: string }[];
};

export type Proyecto = {
  slug: string;
  color: ProjectColor;
  name: string;
  location: string;
  zone: string;
  perfil: Perfil[];
  tipo: string;
  status: string;
  entrega: string;
  surface: string;
  statement: string;
  text: string;
  facts: { label: string; value: string }[];
  drawing: Drawing;
  heroPhoto?: Photo;
  cover?: Photo;
  gallery: Photo[];
  amenidades: Amenidad[];
  amenidadesTotal: number;
  // La sección Tipologías se retiró de las fichas (20 nov 2026). Los datos se conservan (m² por
  // tipología, plantas); el rango de superficies y los nombres de tipologías se muestran en la ficha
  // rápida del hero y en los datos de Concepto. Para volver a mostrarla basta con renderizar
  // <Tipologias> en app/desarrollos/[slug]/page.tsx para los proyectos con mostrarTipologias.
  mostrarTipologias?: boolean;
  tipologias: Tipologia[];
  cercanos: string[];
  // Ubicación en Google Maps: el link que comparte el cliente (botón "Cómo llegar") y, si se tienen,
  // las coordenadas para el mapa embebido. Sin coordenadas se muestra el marcador del mapa.
  mapa: { url: string; lat?: number; lng?: number };
};

const p = (src: Photo["src"], alt: string, position?: string): Photo => ({ src, alt, position });
const [piamont, copelia, amelia] = home.projects;

export const proyectos: Proyecto[] = [
  {
    slug: piamont.id,
    color: piamont.color,
    name: piamont.name,
    location: piamont.location,
    zone: piamont.zone,
    perfil: ["vivir", "invertir"],
    tipo: "Residencial y comercial",
    status: "En construcción y comercialización",
    entrega: POR_CONFIRMAR,
    surface: "105 a 386 m²",
    statement: "Desarrollo residencial y comercial en Valle del Campestre.",
    text: "Proyecto de arquitectura de inspiración italiana en Valle del Campestre, San Pedro Garza García. Departamentos de 105 a 386 m², con speakeasy, rooftop, alberca y siete locales comerciales.",
    facts: piamont.facts,
    drawing: piamont.drawing,
    heroPhoto: photos.piamontAcceso,
    cover: photos.piamontFachada,
    gallery: [
      photos.piamontAcceso,
      p(piamontMontanasSrc, "Piamont con la Sierra Madre al fondo"),
      photos.piamontFachada,
      p(piamontPatioSrc, "Patio central de Piamont"),
      photos.piamontAereo,
      p(piamontAcabadosSrc, "Acabados de un departamento en Piamont"),
      p(piamontLobbySrc, "Lobby de Piamont con recepción"),
      p(piamontLobbyElevadoresSrc, "Vestíbulo de elevadores en el lobby de Piamont"),
      p(piamontRooftopComedorSrc, "Comedor del rooftop de Piamont con vista a la ciudad"),
      p(piamontRooftopSalaSrc, "Sala exterior del rooftop de Piamont"),
      p(piamontTerrazaLoungeSrc, "Terraza de Piamont con área de descanso"),
      p(piamontSpeakeasySalonSrc, "Salón del speakeasy de Piamont"),
      p(piamontSpeakeasyCavaSrc, "Cava del speakeasy de Piamont"),
    ],
    amenidades: [
      { name: "Speakeasy", photo: p(piamontSpeakeasySrc, "Barra del speakeasy de Piamont") },
      { name: "Rooftop", photo: p(piamontRooftopSrc, "Rooftop de Piamont con asador y vista a la Sierra Madre") },
      { name: "Alberca", photo: p(piamontRooftopAlbercaSrc, "Alberca del rooftop de Piamont al atardecer") },
      { name: "Jardín central", photo: p(piamontJardinSrc, "Jardín central de Piamont") },
      { name: "Terraza", photo: p(piamontTerrazaSrc, "Terraza de Piamont con vista a la Sierra Madre") },
      { name: "Yoga deck", photo: p(piamontYogaSrc, "Yoga deck de Piamont") },
      { name: "Parque", photo: p(piamontParqueSrc, "Parque de Piamont") },
      { name: "Dog park", photo: p(piamontDogParkSrc, "Dog park de Piamont") },
    ],
    amenidadesTotal: 8,
    tipologias: [
      { name: "Tipología A", area: "105 m²", detail: POR_CONFIRMAR },
      { name: "Tipología B", area: POR_CONFIRMAR, detail: POR_CONFIRMAR },
      { name: "Tipología C", area: "386 m²", detail: POR_CONFIRMAR },
    ],
    cercanos: [
      "Club Sierra Madre",
      "Club Palestino Libanés",
      "Club Alpino Chipinque",
      "Arboleda",
      "Palacio de Hierro",
      "Punto Valle",
      "La Nacional",
      "El Gaucho Arboleda",
      "JW Marriott",
      "Parque Ecológico Chipinque",
      "Parque Rufino Tamayo",
    ],
    mapa: { url: "https://maps.app.goo.gl/Eigaa2Tb8HLdygun8", lat: 25.6400237, lng: -100.3612533 },
  },
  {
    slug: copelia.id,
    color: copelia.color,
    name: copelia.name,
    location: copelia.location,
    zone: copelia.zone,
    perfil: ["vivir", "invertir"],
    tipo: "Torre residencial",
    status: "En construcción y comercialización",
    entrega: POR_CONFIRMAR,
    surface: "168 a 565 m²",
    statement: "Torre residencial de 38 departamentos en Valle Oriente.",
    text: "Torre residencial en Valle Oriente, San Pedro Garza García. Departamentos de 168 a 565 m² en tipologías de dos y tres recámaras, con diez amenidades.",
    facts: [...copelia.facts, { label: "Tipologías", value: "A, B, C y Penthouse" }],
    drawing: copelia.drawing,
    heroPhoto: photos.copeliaCiudad,
    cover: photos.copeliaFachada,
    gallery: [photos.copeliaCiudad, photos.copeliaFachada, photos.copeliaDepto, photos.copeliaTerraza],
    amenidades: [
      { name: "Alberca", photo: p(copeliaAlbercaSrc, "Alberca de Copelia") },
      { name: "Terraza", photo: photos.copeliaTerraza },
      { name: "Gimnasio", photo: p(copeliaGymSrc, "Gimnasio de Copelia") },
      { name: "Jardín", photo: p(copeliaJardinSrc, "Jardín de Copelia") },
      { name: "Área de asadores", photo: p(copeliaAsadoresSrc, "Área de asadores de Copelia") },
      { name: "Sala de juegos", photo: p(copeliaJuegosSrc, "Sala de juegos de Copelia") },
      { name: "Sala de estar", photo: photos.copeliaSalaEstar },
    ],
    amenidadesTotal: 10,
    mostrarTipologias: true,
    tipologias: [
      {
        name: "Tipo A",
        area: "168.18 m²",
        subtitle: "Departamento superior izquierda",
        features: ["2 habitaciones con baño-vestidor", "Medio baño", "Cuarto de lavado", "Terraza"],
        plantas: [{ photo: p(copeliaTipoASrc, "Planta del departamento Tipo A de Copelia") }],
      },
      {
        name: "Tipo B",
        area: "206.80 m²",
        subtitle: "Departamento superior derecha",
        features: ["2 habitaciones con baño-vestidor", "Medio baño", "Cuarto de servicio", "Cuarto de TV", "Terraza"],
        plantas: [{ photo: p(copeliaTipoBSrc, "Planta del departamento Tipo B de Copelia") }],
      },
      {
        name: "Tipo C",
        area: "376 m²",
        features: [
          "3 habitaciones con baño-vestidor",
          "Lavandería",
          "Área de trabajo",
          "Cuarto de servicio",
          "Área de TV",
        ],
        plantas: [{ photo: p(copeliaTipoCSrc, "Planta del departamento Tipo C de Copelia") }],
      },
      {
        name: "Penthouse",
        area: "565 m²",
        features: [
          "Penthouse con roof top",
          "3 habitaciones con baño-vestidor",
          "Medio baño",
          "Cuarto de servicio",
          "Cuarto de lavado",
        ],
        plantas: [
          { photo: p(copeliaPh15Src, "Planta del penthouse de Copelia, nivel 15"), label: "Nivel 15" },
          {
            photo: p(copeliaPh16Src, "Planta del roof top del penthouse de Copelia, nivel 16"),
            label: "Roof top · Nivel 16",
            description: "Roof top privado de los penthouses.",
          },
        ],
      },
    ],
    cercanos: [
      "Deportivo San Agustín",
      "Tennis Center",
      "Fashion Drive",
      "Plaza Fiesta San Agustín",
      "Auriga",
      "Metropolitan Center",
      "Hospital Zambrano",
      "La Torrada",
      "Botanero Moritas",
      "Parque Rufino Tamayo",
    ],
    mapa: { url: "https://maps.app.goo.gl/odRcEyE4brmi4Es46", lat: 25.6523329, lng: -100.3361708 },
  },
  {
    slug: amelia.id,
    color: amelia.color,
    name: amelia.name,
    location: amelia.location,
    zone: amelia.zone,
    perfil: ["invertir"],
    tipo: "Torre de departamentos operada",
    status: "En construcción y comercialización",
    entrega: POR_CONFIRMAR,
    surface: "43 a 74 m²",
    statement: "Torre de departamentos frente al Paseo Santa Lucía, operada por Amelia Living.",
    text: amelia.text,
    facts: [...amelia.facts, { label: "Tipologías", value: "Tempo, Wonder, Journey y Nova" }],
    drawing: amelia.drawing,
    heroPhoto: photos.ameliaDron,
    cover: photos.ameliaAcceso,
    gallery: [
      photos.ameliaDron,
      photos.ameliaFachada,
      photos.ameliaAcceso,
      p(ameliaLocalesSrc, "Locales comerciales en la planta baja de Amelia Santa Lucía"),
      photos.ameliaTorre,
      p(ameliaLobbySrc, "Lobby principal de Amelia Santa Lucía"),
      p(ameliaLobby2Src, "Lobby secundario con recepción y estacionamiento de bicicletas"),
      p(ameliaHouseComedorSrc, "Comedor de House of Amelia con vista a la ciudad"),
      p(ameliaKickoffSalaSrc, "Sala de estar de The Kickoff"),
      p(ameliaSuiteVestidorSrc, "Vestidor y área de trabajo de Suite Dreams"),
    ],
    // Descripciones redactadas a partir de los renders; House of Amelia, Sound Lab y
    // The Kickoff son supuestos por validar con el cliente.
    amenidades: [
      {
        name: "House of Amelia",
        description: "Salón de usos múltiples con cocina equipada y mesa para reuniones y eventos.",
        photo: p(ameliaA3Src, "Salón House of Amelia con cocina y barra en Amelia Santa Lucía"),
      },
      {
        name: "In Too Deep",
        description: "Terraza con alberca y camastros, con vista a la ciudad.",
        photo: p(ameliaA4Src, "Terraza con alberca In Too Deep en Amelia Santa Lucía"),
      },
      {
        name: "The Meat Up",
        description: "Terraza con asadores y mesas al aire libre.",
        photo: p(ameliaA9Src, "Terraza con asadores The Meat Up en Amelia Santa Lucía"),
      },
      {
        name: "Fit Happens",
        description: "Gimnasio con equipo de cardio y pesas.",
        photo: p(ameliaA2Src, "Gimnasio Fit Happens en Amelia Santa Lucía"),
      },
      {
        name: "Reset Studio",
        description: "Estudio para clases de yoga y pilates.",
        photo: p(ameliaA5Src, "Estudio de yoga y pilates Reset Studio en Amelia Santa Lucía"),
      },
      {
        name: "Co-Work",
        description: "Espacio de trabajo compartido con salas y escritorios.",
        photo: p(ameliaA1Src, "Espacio de trabajo Co-Work en Amelia Santa Lucía"),
      },
      {
        name: "Sound Lab",
        description: "Estudio para grabación de podcast y música.",
        photo: p(ameliaA6Src, "Estudio de grabación Sound Lab en Amelia Santa Lucía"),
      },
      {
        name: "Art Lab",
        description: "Taller para actividades de arte y manualidades.",
        photo: p(ameliaA0Src, "Taller de arte Art Lab en Amelia Santa Lucía"),
      },
      {
        name: "The Kickoff",
        description: "Área social con barra, pantalla y mesas.",
        photo: p(ameliaA8Src, "Área social The Kickoff con barra y mesas en Amelia Santa Lucía"),
      },
      {
        name: "Suite Dreams",
        description: "Habitación disponible en renta para visitas de los residentes.",
        photo: p(ameliaA7Src, "Recámara de Suite Dreams en Amelia Santa Lucía"),
      },
    ],
    amenidadesTotal: 17,
    mostrarTipologias: true,
    tipologias: [
      {
        name: "Tempo",
        area: "43 m²",
        features: ["1 recámara", "1 baño completo", "1 cajón de estacionamiento", "Balcón"],
        plantas: [{ photo: p(ameliaTempoSrc, "Planta del departamento Tempo de Amelia Santa Lucía") }],
      },
      {
        name: "Wonder",
        area: "46 m²",
        features: ["2 recámaras", "1 baño completo", "1 cajón de estacionamiento", "Balcón"],
        plantas: [{ photo: p(ameliaWonderSrc, "Planta del departamento Wonder de Amelia Santa Lucía") }],
      },
      {
        name: "Journey",
        area: "44.5 m²",
        features: ["1 recámara", "1 baño completo", "Balcón"],
        plantas: [{ photo: p(ameliaJourneySrc, "Planta del departamento Journey de Amelia Santa Lucía") }],
      },
      {
        name: "Nova I",
        area: "74 m²",
        features: ["2 recámaras", "2 baños completos", "1 cajón de estacionamiento", "Balcón"],
        plantas: [{ photo: p(ameliaNova1Src, "Planta del departamento Nova I de Amelia Santa Lucía") }],
      },
      {
        name: "Nova II",
        area: "74 m²",
        features: ["2 recámaras", "2 baños completos", "1 cajón de estacionamiento", "Balcón"],
        plantas: [{ photo: p(ameliaNova2Src, "Planta del departamento Nova II de Amelia Santa Lucía") }],
      },
    ],
    cercanos: [
      "Paseo Santa Lucía",
      "Barrio Antiguo",
      "Museo de Historia Mexicana",
      "Museo del Noreste (MUNE)",
      "Macroplaza",
      "MARCO",
      "Parque Fundidora",
      "Cintermex",
      "Arena Monterrey",
    ],
    mapa: { url: "https://maps.app.goo.gl/1bLaK2jsysK7e3Le9", lat: 25.6710279, lng: -100.3031354 },
  },
];

export const perfiles: { id: Perfil | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "vivir", label: "Para vivir" },
  { id: "invertir", label: "Para invertir" },
];

export const indice = {
  eyebrow: "Portafolio",
  title: "Desarrollos",
  intro: home.intro,
};

export function getProyecto(slug: string) {
  return proyectos.find((x) => x.slug === slug);
}
