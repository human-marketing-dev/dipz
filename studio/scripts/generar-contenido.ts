// Genera studio/seed/contenido.ndjson con TODO el contenido que hoy está en el código del sitio,
// en el formato de los esquemas del Studio. Las fotos quedan como "image@REPO/public/…" y
// cargar-contenido.mjs las cambia por la ruta real antes de subirlas.
//
// Se corre desde la raíz del repositorio:
//   npx tsx --import ./studio/scripts/webp-loader.mjs studio/scripts/generar-contenido.ts

import { writeFileSync, mkdirSync } from "node:fs";
import * as home from "../../components/home/content";
import * as nos from "../../components/nosotros/content";
import * as zg from "../../components/zero-gravity/content";
import * as uni from "../../components/unidades/content";
import { proyectos, indice, perfiles } from "../../components/desarrollos/data";
import { blog, posts } from "../../components/blog/posts";
import { privacidad, terminos } from "../../components/legal/content";

type Foto = { src: { src: string } | string; alt: string; position?: string } | undefined;

let n = 0;
const key = () => `k${(n++).toString(36).padStart(4, "0")}`;
const conKeys = <T extends object>(items: T[], _type?: string) =>
  items.map((x) => ({ _key: key(), ...(_type ? { _type } : {}), ...x }));

// "70% center" → punto de enfoque x = 0.7, y = 0.5
const eje = (v: string) => (v === "center" ? 0.5 : v === "top" || v === "left" ? 0 : v === "bottom" || v === "right" ? 1 : parseFloat(v) / 100);
function hotspot(position?: string) {
  if (!position) return undefined;
  const [x, y = "center"] = position.split(/\s+/);
  return { _type: "sanity.imageHotspot", x: eje(x), y: eje(y), width: 1, height: 1 };
}

function img(f: Foto) {
  if (!f) return undefined;
  const src = typeof f.src === "string" ? f.src.replace(/^\//, "public/") : f.src.src;
  const h = hotspot(f.position);
  return { _type: "imagen", _sanityAsset: `image@REPO/${src}`, alt: f.alt, ...(h ? { hotspot: h } : {}) };
}

const enlace = (l: { label: string; href: string }) => ({ _type: "enlace", ...l });
const sinN = <T extends { n?: string }>({ n: _n, ...r }: T) => r;

// ─── Configuración general ───
const configuracion = {
  _id: "configuracion",
  _type: "configuracion",
  seo: {
    title: "DIPZ | Grupo inmobiliario en Monterrey con más de 20 años",
    description:
      "Desarrollamos y operamos proyectos inmobiliarios en México y Estados Unidos. Más de 20 años y 100,000 m² construidos. Piamont, Copelia y Amelia Santa Lucía.",
  },
  contacto: { phone: home.cierre.phone, showroom: home.cierre.showroom, citas: "Previa cita con un asesor" },
  redes: { items: conKeys(home.redes, "red") },
  whatsapp: home.whatsapp,
  cierre: {
    eyebrow: home.cierre.eyebrow,
    title: home.cierre.title,
    paragraph: home.cierre.paragraph,
    primary: home.cierre.primary,
    secondary: home.cierre.secondary,
    profiles: home.cierre.profiles,
  },
  menu: {
    items: conKeys(
      [...home.nav.map(({ label, href }) => ({ label, href })), { label: "Contacto", href: "/contacto" }],
      "opcionMenu",
    ),
  },
  footer: { lema: "The future of real estate", copyright: "© 2026 DIPZ. Todos los derechos reservados." },
};

// ─── Inicio ───
const inicio = {
  _id: "inicio",
  _type: "inicio",
  hero: { ...home.hero, primary: enlace(home.hero.primary), secondary: enlace(home.hero.secondary) },
  respaldo: { eyebrow: home.respaldo.eyebrow, nota: "Cifras sujetas a confirmación", stats: conKeys(home.respaldo.stats, "cifra") },
  video: {
    eyebrow: home.video.eyebrow,
    title: home.video.title,
    youtubeId: home.video.youtubeId,
    anchoCompleto: home.video.anchoCompleto,
    portada: img({ src: home.video.portada, alt: "Video institucional de DIPZ" }),
  },
  zeroGravity: {
    eyebrow: home.zeroGravity.eyebrow,
    title: home.zeroGravity.title,
    paragraph: home.zeroGravity.paragraph,
    stagesTitle: home.zeroGravity.stagesTitle,
    stages: conKeys(home.zeroGravity.stages.map(sinN), "paso"),
  },
  unidades: {
    eyebrow: home.unidades.eyebrow,
    title: home.unidades.title,
    intro: home.unidades.intro,
    brands: conKeys(home.unidades.brands.map((b) => ({ ...b, photo: img(b.photo) })), "marca"),
  },
  modelo: {
    eyebrow: home.modelo.eyebrow,
    title: home.modelo.title,
    paragraph: home.modelo.paragraph,
    steps: conKeys(home.modelo.steps.map(sinN), "paso"),
    alcance: home.alcance.paragraph,
  },
  desarrollos: {
    eyebrow: home.desarrollos.eyebrow,
    title: home.desarrollos.title,
    intro: home.desarrollos.intro,
    link: enlace(home.desarrollos.link),
  },
  rutas: {
    eyebrow: home.rutas.eyebrow,
    title: home.rutas.title,
    cards: conKeys(home.rutas.cards.map((c) => ({ ...sinN(c), photo: img(c.photo) })), "ruta"),
  },
  blog: {
    eyebrow: home.perspectivas.eyebrow,
    title: home.perspectivas.title,
    intro: home.perspectivas.intro,
    link: enlace(home.perspectivas.link),
  },
};

const seo = (title: string, description: string) => ({ _type: "seo", title, description });

// ─── Nosotros ───
const nosotros = {
  _id: "nosotros",
  _type: "nosotros",
  seo: seo(
    "Nosotros: grupo inmobiliario con más de 20 años",
    "DIPZ es un grupo inmobiliario de Monterrey con más de 20 años de trayectoria. Desarrolla en México y Estados Unidos y administra propiedades en renta.",
  ),
  hero: { ...nos.hero, photo: img(nos.hero.photo) },
  grupo: { ...nos.grupo, photo: img(nos.grupo.photo) },
  marcas: {
    ...nos.marcas,
    groups: conKeys(nos.marcas.groups.map((g) => ({ role: g.role, brands: conKeys(g.brands, "marcaArea") })), "area"),
    link: enlace(nos.marcas.link),
  },
  cierre: { _type: "cierrePagina", ...nos.cierre },
};

// ─── Zero Gravity ───
const zeroGravity = {
  _id: "zeroGravity",
  _type: "zeroGravity",
  seo: seo(
    "Zero Gravity: nuestro modelo de trabajo",
    "DIPZ se encarga del desarrollo, la inversión y la administración de cada proyecto, para que el cliente reciba los resultados sin intervenir en la operación.",
  ),
  hero: { ...zg.hero, photo: img(zg.hero.photo) },
  caras: {
    eyebrow: zg.caras.eyebrow,
    title: zg.caras.title,
    intro: zg.caras.intro,
    headerIzquierda: zg.caras.headers[0],
    headerDerecha: zg.caras.headers[1],
    rows: conKeys(zg.caras.rows.map(([izquierda, derecha]) => ({ izquierda, derecha })), "fila"),
  },
  enCadaUnidad: { ...zg.enCadaUnidad, units: conKeys(zg.enCadaUnidad.units, "unidadZg"), link: enlace(zg.enCadaUnidad.link) },
  proceso: zg.proceso,
  loQueNoEs: zg.loQueNoEs,
  cierre: { _type: "cierrePagina", ...zg.cierre },
};

// ─── Unidades de negocio ───
const unidadesNegocio = {
  _id: "unidadesNegocio",
  _type: "unidadesNegocio",
  seo: seo(
    "Unidades de negocio: desarrollo y operación",
    "DIPZ Desarrollos, DIPZ Development, Amelia Living y Fresh Coco: las unidades del grupo para desarrollar en México y Estados Unidos y operar propiedades.",
  ),
  hero: uni.hero,
  unidades: { items: conKeys(uni.unidades.map((u) => ({ ...u, cta: enlace(u.cta), photo: img(u.photo) })), "unidad") },
};

// ─── Desarrollos ───
const etiqueta = (id: string) => perfiles.find((p) => p.id === id)!.label;
const desarrollosIndice = {
  _id: "desarrollosIndice",
  _type: "desarrollosIndice",
  seo: seo(
    "Desarrollos inmobiliarios en San Pedro y Monterrey",
    "Piamont, Copelia y Amelia Santa Lucía: los desarrollos de DIPZ en San Pedro Garza García y el centro de Monterrey.",
  ),
  hero: indice,
  filtros: { todos: etiqueta("todos"), vivir: etiqueta("vivir"), invertir: etiqueta("invertir") },
  cierre: { _type: "cierrePagina", eyebrow: "Asesoría", title: "Solicita información de nuestros desarrollos." },
};

const POR_CONFIRMAR = "Por confirmar";
const desarrollos = proyectos.map((p, i) => {
  const h = home.desarrollos.projects.find((x) => x.id === p.slug)!;
  return {
    _id: `desarrollo-${p.slug}`,
    _type: "desarrollo",
    name: p.name,
    slug: { _type: "slug", current: p.slug },
    orden: i + 1,
    color: p.color,
    location: p.location,
    zone: p.zone,
    perfil: p.perfil,
    tipo: p.tipo,
    status: p.status,
    ...(p.entrega === POR_CONFIRMAR ? {} : { entrega: p.entrega }),
    surface: p.surface,
    statement: p.statement,
    text: p.text,
    facts: conKeys(p.facts, "dato"),
    drawing: p.drawing,
    heroPhoto: img(p.heroPhoto),
    cover: img(p.cover),
    gallery: conKeys(p.gallery.map((g) => img(g)!)),
    amenidades: conKeys(p.amenidades.map((a) => ({ ...a, photo: img(a.photo) })), "amenidad"),
    amenidadesTotal: p.amenidadesTotal,
    cercanos: p.cercanos,
    mapa: p.mapa,
    mostrarTipologias: !!p.mostrarTipologias,
    tipologias: conKeys(
      p.tipologias.map((t) => ({
        ...t,
        ...(t.detail === POR_CONFIRMAR ? { detail: undefined } : {}),
        plantas: t.plantas && conKeys(t.plantas.map((pl) => ({ ...pl, photo: img(pl.photo) })), "planta"),
      })),
      "tipologia",
    ),
    home: { text: h.text, facts: conKeys(h.facts, "dato"), heroPhoto: img(h.heroPhoto), photo: img(h.photo) },
    seo: { _type: "seo", ...p.seo },
  };
});

// ─── Contacto ───
const contacto = {
  _id: "contacto",
  _type: "contacto",
  seo: seo(
    "Contacto y showroom en San Pedro Garza García",
    "Habla con DIPZ para invertir, comprar para vivir u operar tu propiedad. Showroom en San Pedro Garza García.",
  ),
  hero: { eyebrow: "Contacto", title: "Hablemos." },
  formulario: {
    motivos: conKeys(
      [
        { id: "invertir", label: "Invertir", hint: "Te compartimos los modelos de inversión disponibles en México y Estados Unidos." },
        { id: "vivir", label: "Comprar para vivir", hint: "Te mostramos los desarrollos y las unidades disponibles." },
        { id: "operar", label: "Operar mi propiedad", hint: "Amelia Living evalúa tu propiedad para operarla en renta." },
        { id: "otro", label: "Otro tema", hint: "Prensa, alianzas, proveedores o cualquier otro asunto." },
      ],
      "motivo",
    ),
  },
  showroom: { eyebrow: "Showroom", title: "San Pedro Garza García" },
};

// ─── Blog ───
const blogIndice = {
  _id: "blogIndice",
  _type: "blogIndice",
  seo: seo(
    "Blog de inversión y mercado inmobiliario",
    "Artículos de DIPZ sobre inversión inmobiliaria, preventa, renta administrada y el mercado residencial de Monterrey y San Pedro Garza García.",
  ),
  hero: blog,
};

const span = (text: string) => [{ _type: "span", _key: key(), text, marks: [] }];
const bloque = (style: string, text: string, extra = {}) => ({ _type: "block", _key: key(), style, markDefs: [], children: span(text), ...extra });

const entradas = posts.map((p) => ({
  _id: `entrada-${p.slug}`,
  _type: "entrada",
  title: p.title,
  slug: { _type: "slug", current: p.slug },
  excerpt: p.excerpt,
  category: p.category,
  date: p.isoDate,
  readingTime: p.readingTime,
  photo: img(p.photo),
  drawing: p.drawing,
  ejemplo: !!p.ejemplo,
  body: p.body.flatMap((b) =>
    b.type === "p"
      ? [bloque("normal", b.text)]
      : b.type === "h2"
        ? [bloque("h2", b.text)]
        : b.type === "quote"
          ? [bloque("blockquote", b.text)]
          : b.items.map((t) => bloque("normal", t, { listItem: "bullet", level: 1 })),
  ),
}));

// ─── Legales ───
const legal = (id: string, l: typeof privacidad, s: ReturnType<typeof seo>) => ({
  _id: id,
  _type: id,
  seo: s,
  contenido: { eyebrow: l.eyebrow, title: l.title, intro: l.intro, sections: conKeys(l.sections, "apartado") },
});

const docs = [
  configuracion,
  inicio,
  nosotros,
  zeroGravity,
  unidadesNegocio,
  desarrollosIndice,
  ...desarrollos,
  contacto,
  blogIndice,
  ...entradas,
  legal(
    "avisoPrivacidad",
    privacidad,
    seo("Aviso de privacidad", "Aviso de privacidad de DIPZ Desarrollos: qué datos recopilamos, para qué los usamos y cómo los protegemos."),
  ),
  legal("terminos", terminos, seo("Términos y condiciones", "Términos y condiciones de uso del sitio web de DIPZ Desarrollos.")),
];

// Quita campos vacíos (undefined) para no guardar basura en Sanity.
const limpio = (d: unknown) => JSON.stringify(d, (_k, v) => (v === undefined ? undefined : v));

mkdirSync(new URL("../seed/", import.meta.url), { recursive: true });
writeFileSync(new URL("../seed/contenido.ndjson", import.meta.url), docs.map(limpio).join("\n") + "\n");
console.log(`${docs.length} documentos en studio/seed/contenido.ndjson`);
