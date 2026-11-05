import type { Photo } from "@/components/ui/Media";
import { photos, type Drawing } from "@/components/home/content";

// Publicaciones del blog. Las tres actuales son de ejemplo: sirven para ver el listado y la entrada
// individual mientras se define la estrategia editorial. Cuando haya publicaciones reales, se
// sustituyen aquí (o se conecta un CMS) y se quita `ejemplo`.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // como se muestra
  isoDate: string; // para <time> y el orden
  readingTime: string;
  photo?: Photo;
  drawing: Drawing;
  ejemplo?: boolean;
  body: Block[];
};

export const blog = {
  eyebrow: "Blog",
  title: "Ideas sobre el futuro de los bienes raíces",
  intro:
    "Análisis, criterios de inversión y lecturas del mercado inmobiliario, desde la experiencia de quienes desarrollan y operan.",
};

export const posts: Post[] = [
  {
    slug: "como-se-estructura-una-inversion-en-preventa",
    title: "Cómo se estructura una inversión inmobiliaria en preventa",
    excerpt:
      "Qué revisar antes de invertir en un proyecto en preventa: la ubicación, el desarrollador, el esquema de pagos y los plazos de entrega.",
    category: "Inversión",
    date: "Octubre 2026",
    isoDate: "2026-10-15",
    readingTime: "5 min de lectura",
    photo: photos.piamontAcceso,
    drawing: "street",
    ejemplo: true,
    body: [
      {
        type: "p",
        text: "La preventa es la etapa en la que un desarrollo se comercializa antes o durante su construcción. Para el inversionista, representa la posibilidad de adquirir una propiedad a un precio inicial y obtener plusvalía conforme avanza la obra.",
      },
      {
        type: "p",
        text: "Para tomar una decisión informada, conviene revisar cuatro aspectos antes de firmar.",
      },
      { type: "h2", text: "1. La ubicación" },
      {
        type: "p",
        text: "La ubicación determina buena parte del valor de una propiedad en el largo plazo. Es recomendable analizar la demanda de la zona, su conectividad, los servicios cercanos y los proyectos de infraestructura previstos.",
      },
      { type: "h2", text: "2. El desarrollador" },
      {
        type: "p",
        text: "La trayectoria del desarrollador es la mejor referencia del cumplimiento esperado. Proyectos entregados, calidad constructiva y estructura financiera son indicadores a revisar.",
      },
      { type: "h2", text: "3. El esquema de pagos" },
      {
        type: "p",
        text: "Los esquemas de preventa suelen combinar un enganche, mensualidades durante la obra y un pago final a la entrega. Cada esquema tiene un efecto distinto en el rendimiento de la inversión.",
      },
      { type: "h2", text: "4. Los plazos" },
      {
        type: "p",
        text: "El contrato debe establecer con claridad la fecha estimada de entrega, las condiciones en caso de retraso y los documentos que recibirá el comprador.",
      },
      {
        type: "quote",
        text: "Una inversión en preventa se evalúa por la solidez del proyecto, no solo por el precio de entrada.",
      },
      {
        type: "list",
        items: [
          "Solicitar la documentación legal del terreno y los permisos de construcción.",
          "Revisar el avance de obra y el calendario de entrega.",
          "Comparar el precio por metro cuadrado con proyectos similares de la zona.",
          "Consultar las opciones de administración de la propiedad después de la entrega.",
        ],
      },
    ],
  },
  {
    slug: "san-pedro-y-valle-oriente-mercado-residencial",
    title: "San Pedro y Valle Oriente: lectura del mercado residencial",
    excerpt:
      "Las características que hacen de San Pedro Garza García y Valle Oriente dos de las zonas residenciales de mayor demanda en Monterrey.",
    category: "Mercado",
    date: "Septiembre 2026",
    isoDate: "2026-09-15",
    readingTime: "4 min de lectura",
    photo: photos.copeliaCiudad,
    drawing: "tower",
    ejemplo: true,
    body: [
      {
        type: "p",
        text: "San Pedro Garza García concentra una parte importante de la actividad corporativa, comercial y residencial del área metropolitana de Monterrey. Dentro del municipio, Valle Oriente se ha consolidado como una zona de usos mixtos con alta demanda de vivienda vertical.",
      },
      { type: "h2", text: "Factores de demanda" },
      {
        type: "list",
        items: [
          "Cercanía a centros corporativos, comerciales y educativos.",
          "Disponibilidad limitada de suelo para nuevos desarrollos.",
          "Servicios urbanos y seguridad que sostienen el valor de la zona.",
        ],
      },
      { type: "h2", text: "Vivienda vertical" },
      {
        type: "p",
        text: "La escasez de terrenos ha impulsado proyectos de vivienda vertical con amenidades compartidas. Este formato responde a compradores que buscan ubicación, servicios y menor mantenimiento.",
      },
      {
        type: "p",
        text: "Para el inversionista, la combinación de demanda sostenida y oferta limitada favorece la conservación del valor de la propiedad en el tiempo.",
      },
    ],
  },
  {
    slug: "renta-administrada-que-recibe-el-propietario",
    title: "Renta administrada: qué recibe el propietario",
    excerpt:
      "Cómo funciona la administración profesional de una propiedad en renta y qué información recibe el propietario sobre su inversión.",
    category: "Operación",
    date: "Agosto 2026",
    isoDate: "2026-08-15",
    readingTime: "4 min de lectura",
    photo: photos.ameliaTorre,
    drawing: "interior",
    ejemplo: true,
    body: [
      {
        type: "p",
        text: "La renta administrada es un modelo en el que un operador profesional se encarga de la gestión diaria de una propiedad: comercialización, atención a residentes o huéspedes, mantenimiento, cobranza y reportes.",
      },
      { type: "h2", text: "Servicios incluidos" },
      {
        type: "list",
        items: [
          "Comercialización y ocupación de la propiedad.",
          "Atención a residentes y huéspedes.",
          "Mantenimiento preventivo y correctivo.",
          "Cobranza y conciliación de ingresos.",
          "Reportes periódicos de desempeño.",
        ],
      },
      { type: "h2", text: "Información para el propietario" },
      {
        type: "p",
        text: "El propietario recibe reportes de ocupación, ingresos y gastos. En el caso de Amelia Living, esta información se consulta en tiempo real a través de una aplicación.",
      },
      {
        type: "quote",
        text: "El propietario conserva el patrimonio; la operación queda a cargo de un equipo especializado.",
      },
    ],
  },
];

export const categorias = ["Todas", ...Array.from(new Set(posts.map((p) => p.category)))];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
