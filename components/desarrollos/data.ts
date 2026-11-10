import type { Photo } from "@/components/ui/Media";
import { desarrollos as home, photos, type Drawing, type ProjectColor } from "@/components/home/content";
import piamontAcabadosSrc from "@/public/piamont/acabados-piamont.webp";
import piamontMontanasSrc from "@/public/piamont/fondo-montañas-piamont.webp";
import piamontPatioSrc from "@/public/piamont/patio-central-piamont.webp";
import piamontBarSrc from "@/public/piamont/amenidades-bar-piamont.webp";
import piamontDogParkSrc from "@/public/piamont/amenidades-dog-park-piamont.webp";
import piamontParqueSrc from "@/public/piamont/amenidades-parque-piamont.webp";
import piamontYogaSrc from "@/public/piamont/amenidades-yoga-deck-piamont.webp";
import copeliaAlbercaSrc from "@/public/copelia/amenidades-alberca-copelia.webp";
import copeliaAsadoresSrc from "@/public/copelia/amenidades-area-de-asadores-copelia.webp";
import copeliaGymSrc from "@/public/copelia/amenidades-gym-copelia.webp";
import copeliaJardinSrc from "@/public/copelia/amenidades-jardin-copelia.webp";
import copeliaJuegosSrc from "@/public/copelia/amenidades-sala-de-juegos-copelia.webp";
import ameliaLocalesSrc from "@/public/amelia/amelia-locales-render.webp";
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

export type Amenidad = { name: string; photo?: Photo };

export type Tipologia = {
  name: string;
  area: string;
  detail?: string;
  features?: string[];
  // Una o más plantas (el penthouse tiene dos niveles); label nombra el nivel.
  plantas?: { photo: Photo; label?: string }[];
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
  // La sección Tipologías solo se muestra en los proyectos con plantas reales (mostrarTipologias).
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
    ],
    amenidades: [
      { name: "Speakeasy", photo: p(piamontBarSrc, "Speakeasy de Piamont") },
      { name: "Rooftop", photo: photos.piamontRooftop },
      { name: "Alberca", photo: photos.piamontPiscina },
      { name: "Yoga deck", photo: p(piamontYogaSrc, "Yoga deck de Piamont") },
      { name: "Parque", photo: p(piamontParqueSrc, "Parque de Piamont") },
      { name: "Dog park", photo: p(piamontDogParkSrc, "Dog park de Piamont") },
    ],
    amenidadesTotal: 6,
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
    facts: copelia.facts,
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
        features: ["2 habitaciones con baño-vestidor", "Medio baño", "Cuarto de lavado"],
        plantas: [{ photo: p(copeliaTipoASrc, "Planta del departamento Tipo A de Copelia") }],
      },
      {
        name: "Tipo B",
        area: "206.80 m²",
        features: ["2 habitaciones con baño-vestidor", "Medio baño", "Cuarto de servicio", "Cuarto de TV"],
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
    facts: amelia.facts,
    drawing: amelia.drawing,
    heroPhoto: photos.ameliaDron,
    cover: photos.ameliaAcceso,
    gallery: [
      photos.ameliaDron,
      photos.ameliaFachada,
      photos.ameliaAcceso,
      p(ameliaLocalesSrc, "Locales comerciales en la planta baja de Amelia Santa Lucía"),
      photos.ameliaTorre,
    ],
    amenidades: [],
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
