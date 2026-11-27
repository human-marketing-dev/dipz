import type { Photo } from "@/components/ui/Media";

// Contenido del sitio desde Sanity (proyecto jsqssfsb, dataset production, editor en
// https://dipz.sanity.studio). El dataset es público: solo se lee lo publicado y no hace falta token.
//
// Todo el contenido se pide en una sola consulta y se guarda en caché con el perfil "minutes": lo
// que se publica en el Studio aparece en el sitio en uno o dos minutos, sin hacer deploy.
//
// SANITY_API_URL y NEXT_PUBLIC_SANITY_CDN solo se usan para pruebas locales con un servidor falso.

export const SANITY_PROJECT = "jsqssfsb";
export const SANITY_DATASET = "production";
export const API = process.env.SANITY_API_URL ?? `https://${SANITY_PROJECT}.api.sanity.io/v2025-02-19/data/query/${SANITY_DATASET}`;
export const SANITY_CDN = process.env.NEXT_PUBLIC_SANITY_CDN ?? "https://cdn.sanity.io";

export const CONSULTA = `{
  "config": *[_id == "configuracion"][0],
  "inicio": *[_id == "inicio"][0],
  "nosotros": *[_id == "nosotros"][0],
  "zeroGravity": *[_id == "zeroGravity"][0],
  "unidadesNegocio": *[_id == "unidadesNegocio"][0],
  "desarrollosIndice": *[_id == "desarrollosIndice"][0],
  "contacto": *[_id == "contacto"][0],
  "blogIndice": *[_id == "blogIndice"][0],
  "avisoPrivacidad": *[_id == "avisoPrivacidad"][0],
  "terminos": *[_id == "terminos"][0],
  "desarrollos": *[_type == "desarrollo" && defined(slug.current)] | order(orden asc),
  "entradas": *[_type == "entrada" && defined(slug.current)] | order(date desc)
}`;

// ─── Imágenes ────────────────────────────────────────────────────────────────────────
// Una imagen de Sanity guarda la referencia al archivo ("image-<id>-<ancho>x<alto>-<formato>"),
// el punto de enfoque y la descripción. Aquí se convierte en la `Photo` que usan los componentes.
type ImagenSanity = { asset?: { _ref?: string }; hotspot?: { x: number; y: number }; alt?: string };

function aFoto(img: ImagenSanity): Photo | undefined {
  const m = img.asset?._ref?.match(/^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/);
  if (!m) return undefined;
  const [, id, w, h, formato] = m;
  const pct = (n: number) => `${Math.round(n * 1000) / 10}%`;
  return {
    src: { src: `${SANITY_CDN}/images/${SANITY_PROJECT}/${SANITY_DATASET}/${id}-${w}x${h}.${formato}`, width: +w, height: +h },
    alt: img.alt ?? "",
    position: img.hotspot ? `${pct(img.hotspot.x)} ${pct(img.hotspot.y)}` : undefined,
  };
}

// Recorre el documento y cambia cada imagen por su `Photo`; una imagen sin archivo queda vacía
// (el componente muestra entonces la ilustración de respaldo).
export function conFotos(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(conFotos).filter((x) => x !== undefined);
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    if (o._type === "imagen" || (o.asset && typeof o.asset === "object")) return aFoto(o as ImagenSanity);
    return Object.fromEntries(Object.entries(o).map(([k, x]) => [k, conFotos(x)]));
  }
  return v;
}

const numerar = <T extends object>(items: T[] = []) => items.map((x, i) => ({ ...x, n: String(i + 1).padStart(2, "0") }));

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesAnio = (iso: string) => `${MESES[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

// ─── Tipos ───────────────────────────────────────────────────────────────────────────
export type ProjectColor = "terracota" | "verde-salvia" | "azul-talco";
export type Drawing = "tower" | "slab" | "interior" | "landscape" | "street";
export type Enlace = { label: string; href: string };
export type Dato = { label: string; value: string };
export type Paso = { n: string; name: string; text: string };
type Encabezado = { eyebrow: string; title: string };
type Seo = { title?: string; description?: string };
type Cierre = Partial<Encabezado>;

export type Config = {
  seo: { title: string; description: string };
  contacto: { phone: string; email?: string; showroom: string; citas?: string };
  redes: { name: string; handle: string; href: string }[];
  whatsapp: { number: string; greeting: string; message: string };
  cierre: Encabezado & { paragraph: string; primary: string; secondary: string; profiles: string[] };
  menu: Enlace[];
  footer: { lema: string; copyright: string };
};

export type Marca = {
  id: string;
  name: string;
  tag: string;
  title: string;
  text: string;
  capabilities: string[];
  link: string;
  drawing: Drawing;
  photo?: Photo;
};

export type Inicio = {
  seo?: Seo;
  hero: Encabezado & { subtitle: string; primary: Enlace; secondary: Enlace };
  respaldo: { eyebrow: string; nota?: string; stats: { prefix?: string; value: number; unit: string; text: string }[] };
  video: Encabezado & { youtubeId?: string; anchoCompleto?: boolean; portada?: Photo };
  zeroGravity: Encabezado & { paragraph: string; stagesTitle: string; stages: Paso[] };
  unidades: Encabezado & { intro: string; brands: Marca[] };
  modelo: Encabezado & { paragraph: string; steps: Paso[]; alcance?: string };
  desarrollos: Encabezado & { intro: string; link: Enlace };
  rutas: Encabezado & { cards: (Paso & { link: string; drawing: Drawing; photo?: Photo })[] };
  blog: Encabezado & { intro: string; link: Enlace };
};

export type Amenidad = { name: string; description?: string; photo?: Photo };
export type Tipologia = {
  name: string;
  area: string;
  subtitle?: string;
  detail?: string;
  features?: string[];
  plantas?: { photo?: Photo; label?: string; description?: string }[];
};
export type Perfil = "vivir" | "invertir";

export type Proyecto = {
  slug: string;
  name: string;
  color: ProjectColor;
  location: string;
  zone: string;
  perfil: Perfil[];
  tipo: string;
  status: string;
  entrega: string;
  surface: string;
  statement: string;
  text: string;
  facts: Dato[];
  drawing: Drawing;
  heroPhoto?: Photo;
  cover?: Photo;
  gallery: Photo[];
  amenidades: Amenidad[];
  amenidadesTotal: number;
  cercanos: string[];
  mapa: { url?: string; lat?: number; lng?: number };
  mostrarTipologias?: boolean;
  tipologias: Tipologia[];
  // Tarjeta del proyecto en la sección Desarrollos del inicio.
  home: { text: string; facts: Dato[]; heroPhoto?: Photo; photo?: Photo };
  seo: Seo;
};

// Texto enriquecido de Sanity (bloques) → los bloques simples que pinta la entrada del blog.
type BloqueSanity = { _type: string; style?: string; listItem?: string; children?: { text?: string }[] };
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

function aBloques(body: BloqueSanity[] = []): Block[] {
  const out: Block[] = [];
  for (const b of body) {
    if (b._type !== "block") continue;
    const text = (b.children ?? []).map((c) => c.text ?? "").join("");
    const prev = out[out.length - 1];
    if (b.listItem) {
      if (prev?.type === "list") prev.items.push(text);
      else out.push({ type: "list", items: [text] });
    } else if (b.style === "h2") out.push({ type: "h2", text });
    else if (b.style === "blockquote") out.push({ type: "quote", text });
    else if (text.trim()) out.push({ type: "p", text });
  }
  return out;
}

export const POR_CONFIRMAR = "Por confirmar";
// Correo de contacto si en Sanity el campo está vacío.
export const CORREO_CONTACTO = "contacto@dipz.mx";

export type Entrada = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  isoDate: string;
  date: string; // como se muestra: "Octubre 2026"
  readingTime?: string;
  photo?: Photo;
  drawing: Drawing;
  ejemplo?: boolean;
  body: Block[];
};

type ConSeo = { seo?: Seo; cierre?: Cierre };
type Pagina = Record<string, unknown> & ConSeo;

export type Nosotros = ConSeo & {
  hero: Encabezado & { intro: string; photo?: Photo };
  grupo: Encabezado & { paragraphs: string[]; steps: string[]; photo?: Photo };
  marcas: Encabezado & {
    paragraph: string;
    groups: { role: string; brands: { id: string; name: string; tag: string }[] }[];
    link: Enlace;
  };
};

export type ZeroGravityPagina = ConSeo & {
  hero: Encabezado & { intro: string; photo?: Photo };
  caras: Encabezado & { intro: string; headerIzquierda: string; headerDerecha: string; rows: { izquierda: string; derecha: string }[] };
  enCadaUnidad: Encabezado & { units: { id: string; name: string; tag: string; asumimos: string; recibes: string }[]; link: Enlace };
  proceso: { title: string; paragraph: string };
  loQueNoEs: Encabezado & { paragraph: string };
};

export type Unidad = {
  id: string;
  name: string;
  tag: string;
  title: string;
  paragraphs: string[];
  capabilities: string[];
  forWhom: string;
  cta: Enlace;
  note?: string;
  pending?: string;
  photo?: Photo;
  drawing: Drawing;
};

export type UnidadesPagina = ConSeo & {
  hero: Encabezado & { intro: string };
  unidades: { items: Unidad[] };
};

export type DesarrollosIndice = ConSeo & {
  hero: Encabezado & { intro: string };
  filtros: { todos: string; vivir: string; invertir: string };
};

export type BlogIndice = ConSeo & { hero: Encabezado & { intro: string } };

export type Legal = ConSeo & {
  contenido: Encabezado & { intro: string; sections: { title: string; paragraphs?: string[]; list?: string[] }[] };
};

export type Sitio = {
  config: Config;
  inicio: Inicio;
  nosotros: Nosotros;
  zeroGravity: ZeroGravityPagina;
  unidadesNegocio: UnidadesPagina;
  desarrollosIndice: DesarrollosIndice;
  contacto: Pagina;
  blogIndice: BlogIndice;
  avisoPrivacidad: Legal;
  terminos: Legal;
  desarrollos: Proyecto[];
  entradas: Entrada[];
};

export type Crudo = Record<string, unknown> & {
  config: Record<string, { items?: unknown[] } & Record<string, unknown>>;
  inicio: Record<string, Record<string, unknown>>;
  desarrollos: (Record<string, unknown> & { slug: { current: string } })[];
  entradas: (Record<string, unknown> & { slug: { current: string }; date: string })[];
};

export function normalizar(c: Crudo): Sitio {
  const { config: cf, inicio: ini } = c;
  return {
    ...(c as unknown as Sitio),
    config: {
      ...(cf as unknown as Config),
      redes: (cf.redes?.items ?? []) as Config["redes"],
      menu: (cf.menu?.items ?? []) as Config["menu"],
    },
    inicio: {
      ...(ini as unknown as Inicio),
      zeroGravity: { ...(ini.zeroGravity as Inicio["zeroGravity"]), stages: numerar(ini.zeroGravity?.stages as Paso[]) },
      modelo: { ...(ini.modelo as Inicio["modelo"]), steps: numerar(ini.modelo?.steps as Paso[]) },
      rutas: { ...(ini.rutas as Inicio["rutas"]), cards: numerar(ini.rutas?.cards as Inicio["rutas"]["cards"]) },
    },
    desarrollos: c.desarrollos.map((d) => {
      const p = d as unknown as Proyecto;
      return {
        ...p,
        slug: d.slug.current,
        entrega: p.entrega || POR_CONFIRMAR,
        facts: p.facts ?? [],
        gallery: p.gallery ?? [],
        amenidades: p.amenidades ?? [],
        cercanos: p.cercanos ?? [],
        tipologias: p.tipologias ?? [],
        mapa: p.mapa ?? {},
        seo: p.seo ?? {},
      };
    }),
    entradas: c.entradas.map((e) => ({
      ...(e as unknown as Entrada),
      slug: e.slug.current,
      isoDate: e.date,
      date: mesAnio(e.date),
      body: aBloques(e.body as BloqueSanity[]),
    })),
  };
}


// ─── Menú ────────────────────────────────────────────────────────────────────────────
export type NavItem = Enlace & { children?: (Enlace & { detail: string })[] };

// Opciones del menú (Configuración → Menú) sin Contacto, que va aparte como botón. Desarrollos lleva
// el submenú con los proyectos, en el orden del portafolio.
export function menuDe(s: Sitio) {
  const contacto = s.config.menu.find((m) => m.href === "/contacto")?.label ?? "Contacto";
  const nav: NavItem[] = s.config.menu
    .filter((m) => m.href !== "/contacto")
    .map((m) =>
      m.href === "/desarrollos"
        ? { ...m, children: s.desarrollos.map((d) => ({ label: d.name, href: `/desarrollos/${d.slug}`, detail: d.zone })) }
        : m,
    );
  return { nav, contacto };
}

// "+52 81 1984 1517" → "tel:+528119841517"
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

// Tarjetas de los desarrollos en el inicio (hero y sección Desarrollos): textos y fotos propios del inicio.
export type ProyectoInicio = ReturnType<typeof proyectosInicio>[number];
export function proyectosInicio(s: Sitio) {
  return s.desarrollos.map((p) => ({
    id: p.slug,
    color: p.color,
    name: p.name,
    location: p.location,
    zone: p.zone,
    drawing: p.drawing,
    text: p.home?.text ?? p.text,
    facts: p.home?.facts ?? p.facts,
    heroPhoto: p.home?.heroPhoto,
    photo: p.home?.photo,
  }));
}
