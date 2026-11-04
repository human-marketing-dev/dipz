import type { Photo } from "@/components/ui/Media";
import { photos, type Drawing } from "@/components/home/content";

// Textos de /unidades-de-negocio. Titulares, textos y capacidades de cada marca son los del home
// (components/home/content.ts), que el cliente toma como referencia de tono (4 nov 2026).
// Pendientes del cliente: si DIPZ Development ya opera o es una etapa por iniciar (si es por iniciar,
// el texto pasa a futuro y no se nombran ciudades), si Fresh Coco ya opera y en qué destinos, y si
// Amelia Santa Lucía es el primer desarrollo operado por Amelia Living. Las fotos son provisionales,
// las mismas del home.

export const hero = {
  eyebrow: "Unidades de negocio",
  title: "Cuatro marcas. Un mismo criterio.",
  intro:
    "Dos marcas desarrollan proyectos en México y Estados Unidos. Dos operan propiedades en la ciudad y en destinos turísticos. En conjunto cubren el ciclo completo de una propiedad.",
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
    title: "Desarrollamos el futuro de México",
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
    title: "Bienes raíces sin fronteras",
    paragraphs: [
      "Desarrollamos e invertimos en ciudades estadounidenses de alto crecimiento, con la misma disciplina y el mismo criterio con el que construimos en México.",
      "Para el inversionista mexicano, una puerta de entrada a ese mercado sin tener que construirla por su cuenta.",
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
    title: "Operamos propiedades. Creamos comunidad",
    paragraphs: [
      "Administramos y operamos propiedades en renta integrando hospitalidad, tecnología y servicio profesional: huéspedes, mantenimiento, ocupación, cobranza y reportes.",
      "El propietario sigue su inversión en tiempo real desde su aplicación; el residente encuentra una vida urbana resuelta.",
    ],
    capabilities: ["Administración de propiedades", "Comunidad y cowork", "Wellness y experiencias", "Concierge y servicios"],
    forWhom: "Inversionistas de renta operada y residentes urbanos.",
    cta: { label: "Operar mi propiedad", href: "/contacto#formulario" },
    note: "Amelia Living es la marca operadora. Amelia Santa Lucía es el primer desarrollo que opera.",
    pending: "Por confirmar que es el primero",
    photo: photos.ameliaTorre,
    drawing: "interior",
  },
  {
    id: "fresh-coco",
    name: "Fresh Coco",
    tag: "Hospitalidad y destinos",
    title: "Destinos que se viven de otra manera",
    paragraphs: [
      "Operamos propiedades en destinos turísticos, donde la hospitalidad, la naturaleza y la experiencia se unen para crear estancias memorables y activos que producen durante todo el año.",
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
  title: "Desarrollo y operación en un mismo grupo",
  paragraph:
    "Un proyecto puede iniciar con DIPZ como terreno y continuar con el grupo como propiedad en operación. Esa continuidad permite sostener la calidad y el valor del activo.",
  root: { name: "DIPZ", role: "Criterio común" },
  groups: [
    { role: "Desarrollo", ids: ["dipz-desarrollos", "dipz-development"] },
    { role: "Operación", ids: ["amelia-living", "fresh-coco"] },
  ],
};
