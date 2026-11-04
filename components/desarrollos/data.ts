import type { Photo } from "@/components/ui/Media";
import { desarrollos as home, photos, type Drawing } from "@/components/home/content";
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

// Contenido de /desarrollos y de cada /desarrollos/[slug]. Lo que dice "Por confirmar" sigue
// pendiente del cliente: estatus por proyecto, fechas de entrega, plantas, m² por tipología y
// puntos cercanos. Titular y texto de cada ficha son descriptivos (ronda 9, 4 nov 2026); el home
// conserva sus propios textos.

export const POR_CONFIRMAR = "Por confirmar";

export type Perfil = "vivir" | "invertir";

export type Amenidad = { name: string; photo?: Photo };

export type Proyecto = {
  slug: string;
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
  tipologias: { name: string; area: string; detail: string }[];
  cercanos: string[];
};

const p = (src: Photo["src"], alt: string, position?: string): Photo => ({ src, alt, position });
const [piamont, copelia, amelia] = home.projects;

export const proyectos: Proyecto[] = [
  {
    slug: piamont.id,
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
    cercanos: [POR_CONFIRMAR],
  },
  {
    slug: copelia.id,
    name: copelia.name,
    location: copelia.location,
    zone: copelia.zone,
    perfil: ["vivir", "invertir"],
    tipo: "Torre residencial",
    status: "En construcción y comercialización",
    entrega: POR_CONFIRMAR,
    surface: "170 a 565 m²",
    statement: "Torre residencial de 38 departamentos en Valle Oriente.",
    text: "Torre residencial en Valle Oriente, San Pedro Garza García. Departamentos de 170 a 565 m² en tipologías de dos y tres recámaras, con diez amenidades.",
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
    tipologias: [
      { name: "Dos recámaras", area: POR_CONFIRMAR, detail: POR_CONFIRMAR },
      { name: "Tres recámaras", area: POR_CONFIRMAR, detail: POR_CONFIRMAR },
    ],
    cercanos: [POR_CONFIRMAR],
  },
  {
    slug: amelia.id,
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
    heroPhoto: photos.ameliaTorre,
    cover: photos.ameliaTorre,
    gallery: [photos.ameliaTorre],
    amenidades: [],
    amenidadesTotal: 17,
    tipologias: [
      { name: "Tipología A", area: "43 m²", detail: POR_CONFIRMAR },
      { name: "Tipología B", area: "74 m²", detail: POR_CONFIRMAR },
    ],
    cercanos: ["Paseo Santa Lucía", POR_CONFIRMAR],
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
