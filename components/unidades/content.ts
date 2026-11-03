import type { Photo } from "@/components/ui/Media";
import { photos, type Drawing } from "@/components/home/content";

// Textos de /unidades-de-negocio, del doc "DIPZ · Estructura, copys y SEO del sitio" (noviembre 2026).
// Pendientes del cliente: si DIPZ Development ya opera o es una etapa por iniciar (si es por iniciar,
// el texto pasa a futuro y no se nombran ciudades), si Fresh Coco ya opera y en qué destinos, y si
// Amelia Santa Lucía es el primer desarrollo operado por Amelia Living. Las fotos son provisionales,
// las mismas del home.

export const hero = {
  eyebrow: "Unidades de negocio",
  title: "Cuatro marcas. Un mismo criterio.",
  intro:
    "Dos marcas desarrollan el lugar, en México y en Estados Unidos. Dos operan la experiencia, en la ciudad y en el destino. Juntas cubren el ciclo completo de una propiedad.",
};

export type Unidad = {
  id: string;
  name: string;
  tag: string;
  title: string;
  paragraphs: string[];
  capabilities: string[];
  forWhom: string;
  cta: { label: string; href: string };
  note?: string;
  pending?: string;
  photo?: Photo;
  drawing: Drawing;
};

export const unidades: Unidad[] = [
  {
    id: "dipz-desarrollos",
    name: "DIPZ Desarrollos",
    tag: "México",
    title: "Desarrollamos en México",
    paragraphs: [
      "Identificamos oportunidades, estructuramos capital y desarrollamos proyectos en las ubicaciones de mayor valor del país. Veinte años de trayectoria respaldan cada decisión de inversión.",
    ],
    capabilities: ["Adquisición de tierra", "Desarrollo de proyectos", "Inversión y capital", "Generación de valor"],
    forWhom: "Inversionistas patrimoniales y compradores que buscan certeza en una zona consolidada.",
    cta: { label: "Ver desarrollos", href: "/desarrollos" },
    photo: photos.piamontFachada,
    drawing: "street",
  },
  {
    id: "dipz-development",
    name: "DIPZ Development",
    tag: "Estados Unidos",
    title: "Invertir en Estados Unidos, sin empezar de cero",
    paragraphs: [
      "Desarrollamos e invertimos en ciudades estadounidenses de alto crecimiento, con el mismo criterio con el que construimos en México.",
      "Para el inversionista mexicano es una forma de diversificar fuera del país sin tener que conocer el mercado, la estructura legal ni la operación a distancia.",
    ],
    capabilities: ["Adquisición de tierra", "Desarrollo y diseño", "Inversión y capital", "Valor a largo plazo"],
    forWhom: "Inversionistas mexicanos que buscan diversificar en dólares.",
    cta: { label: "Hablar con un asesor", href: "/contacto#formulario" },
    pending: "Estatus de operación por confirmar",
    photo: photos.piamontRooftop,
    drawing: "slab",
  },
  {
    id: "amelia-living",
    name: "Amelia Living",
    tag: "Operación urbana",
    title: "Operamos tu propiedad en renta",
    paragraphs: [
      "Administramos y operamos propiedades en renta integrando hospitalidad, tecnología y servicio profesional. Nos encargamos de huéspedes, mantenimiento, ocupación, cobranza y reportes.",
      "El propietario sigue su inversión en tiempo real desde su aplicación; el residente encuentra una vida urbana resuelta.",
    ],
    capabilities: ["Administración de propiedades", "Comunidad y cowork", "Wellness y experiencias", "Concierge y servicios"],
    forWhom: "Inversionistas de renta operada y residentes urbanos.",
    cta: { label: "Operar mi propiedad", href: "/contacto#formulario" },
    note: "Amelia Living es la marca que opera. Amelia Santa Lucía es el primer desarrollo que opera.",
    pending: "Por confirmar que es el primero",
    photo: photos.ameliaTorre,
    drawing: "interior",
  },
  {
    id: "fresh-coco",
    name: "Fresh Coco",
    tag: "Hospitalidad y destinos",
    title: "Tu propiedad en destino, operada",
    paragraphs: [
      "Operamos propiedades en destinos turísticos con el mismo modelo que en la ciudad.",
      "El dueño tiene un activo que genera ingresos durante todo el año sin administrarlo a distancia; el huésped, una estancia que recuerda.",
    ],
    capabilities: ["Hospitalidad y estancias", "Destinos turísticos", "Experiencias y retreats", "F&B y lifestyle"],
    forWhom: "Inversionistas en destino turístico y huéspedes.",
    cta: { label: "Hablar con un asesor", href: "/contacto#formulario" },
    pending: "Destinos y estatus de operación por confirmar",
    photo: photos.piamontPiscina,
    drawing: "landscape",
  },
];

export const conexion = {
  eyebrow: "Cómo se conectan",
  title: "Desarrollar el lugar, operar la experiencia",
  paragraph:
    "Un proyecto puede empezar con nosotros como terreno y seguir con nosotros como propiedad en operación. Esa continuidad es la que permite que el valor se sostenga.",
  root: { name: "DIPZ", role: "El criterio común" },
  groups: [
    { role: "Desarrollan el lugar", ids: ["dipz-desarrollos", "dipz-development"] },
    { role: "Operan la experiencia", ids: ["amelia-living", "fresh-coco"] },
  ],
};
