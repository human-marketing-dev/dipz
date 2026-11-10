import type { Photo } from "@/components/ui/Media";
import { photos, type Drawing } from "@/components/home/content";

// Textos de /unidades-de-negocio. Titulares, textos y capacidades de cada marca son los del home
// (components/home/content.ts) reescritos el 4 nov 2026 (ronda 9) en tono corporativo y descriptivo.
// Pendientes del cliente: si DIPZ Development ya opera o es una etapa por iniciar (si es por iniciar,
// el texto pasa a futuro y no se nombran ciudades), si Fresh Coco ya opera y en qué destinos, y si
// Amelia Santa Lucía es el primer desarrollo operado por Amelia Living. Las fotos son provisionales,
// las mismas del home.

export const hero = {
  eyebrow: "Unidades de negocio",
  title: "Desarrollo y operación inmobiliaria en México y Estados Unidos.",
  intro:
    "DIPZ se organiza en cuatro unidades de negocio. Dos se dedican al desarrollo de proyectos en México y Estados Unidos; dos, a la administración de propiedades en zonas urbanas y destinos turísticos.",
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
    title: "Desarrollo inmobiliario en México",
    paragraphs: [
      "Identificamos oportunidades, estructuramos el capital y desarrollamos proyectos residenciales y comerciales en Valle del Campestre, Valle Oriente y el centro de Monterrey. Su portafolio actual: Piamont, Copelia y Amelia Santa Lucía.",
    ],
    capabilities: ["Adquisición de tierra", "Desarrollo de proyectos", "Inversión y capital", "Comercialización"],
    forWhom: "Inversionistas patrimoniales y compradores que buscan certeza en una zona consolidada.",
    cta: { label: "Ver desarrollos", href: "/desarrollos" },
    photo: photos.piamontFachada,
    drawing: "street",
  },
  {
    id: "dipz-development",
    name: "DIPZ Development",
    tag: "Estados Unidos",
    title: "Desarrollo e inversión en Estados Unidos",
    paragraphs: [
      "Desarrollamos e invertimos en Estados Unidos con el mismo modelo que DIPZ aplica en México: un solo interlocutor desde la inversión hasta la operación de la propiedad.",
      "Para el inversionista mexicano, es una vía para participar en ese mercado con el respaldo de un equipo especializado.",
    ],
    capabilities: ["Adquisición de tierra", "Desarrollo y diseño", "Inversión y capital", "Estructuración para inversionistas mexicanos"],
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
    title: "Administración de propiedades en renta",
    paragraphs: [
      "Administramos y operamos propiedades en renta: atención a residentes y huéspedes, mantenimiento, ocupación, cobranza y reportes.",
      "El propietario consulta el desempeño de su inversión en tiempo real a través de una aplicación. El residente cuenta con servicios y amenidades administrados de forma profesional.",
    ],
    capabilities: ["Administración de propiedades", "Comunidad y cowork", "Wellness y experiencias", "Concierge y servicios"],
    forWhom: "Inversionistas de renta operada y residentes urbanos.",
    cta: { label: "Operar mi propiedad", href: "/contacto#formulario" },
    note: "Amelia Living es la marca operadora. Amelia Santa Lucía es el primer desarrollo que opera.",
    pending: "Por confirmar que es el primero",
    photo: photos.ameliaFachada,
    drawing: "interior",
  },
  {
    id: "fresh-coco",
    name: "Fresh Coco",
    tag: "Hospitalidad y destinos",
    title: "Operación en destinos turísticos",
    paragraphs: [
      "Operamos propiedades en renta en destinos turísticos para que generen ingresos sin que el propietario tenga que administrarlas.",
    ],
    capabilities: ["Hospitalidad y estancias", "Destinos turísticos", "Experiencias y retreats", "F&B y lifestyle"],
    forWhom: "Inversionistas en destino turístico y huéspedes.",
    cta: { label: "Hablar con un asesor", href: "/contacto#formulario" },
    pending: "Destinos y estatus de operación por confirmar",
    photo: photos.piamontPiscina,
    drawing: "landscape",
  },
];
