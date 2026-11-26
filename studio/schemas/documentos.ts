import { type Rule, defineArrayMember, defineField, defineType } from "sanity";
import { dibujo, dibujos, foto, lista, parrafo, texto } from "./objetos";

// ─── Desarrollo ──────────────────────────────────────────────────────────────────────
// Piamont, Copelia y Amelia Santa Lucía. Son 3 documentos fijos: se editan, pero no se crean ni
// se borran desde el Studio, y todos tienen las mismas secciones.

const amenidad = defineArrayMember({
  type: "object",
  name: "amenidad",
  fields: [texto("name", "Nombre"), parrafo("description", "Descripción", { rows: 2 } as never), foto("photo", "Foto")],
  preview: { select: { title: "name", subtitle: "description", media: "photo" } },
});

const tipologia = defineArrayMember({
  type: "object",
  name: "tipologia",
  fields: [
    texto("name", "Nombre"),
    texto("area", "Superficie"),
    texto("subtitle", "Ubicación en la planta"),
    texto("detail", "Detalle"),
    lista("features", "Distribución"),
    defineField({
      name: "plantas",
      title: "Plantas",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "planta",
          fields: [foto("photo", "Plano"), texto("label", "Nivel"), texto("description", "Descripción")],
          preview: { select: { title: "label", media: "photo" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "name", subtitle: "area" } },
});

export const desarrollo = defineType({
  name: "desarrollo",
  title: "Desarrollo",
  type: "document",
  groups: [
    { name: "ficha", title: "Ficha", default: true },
    { name: "fotos", title: "Fotos" },
    { name: "amenidades", title: "Amenidades" },
    { name: "ubicacion", title: "Ubicación" },
    { name: "tipologias", title: "Tipologías" },
    { name: "inicio", title: "Inicio" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    texto("name", "Nombre", { group: "ficha", validation: (r: Rule) => r.required() } as never),
    defineField({
      name: "slug",
      title: "Dirección de la página",
      type: "slug",
      group: "ficha",
      readOnly: true,
      description: "Fija: /desarrollos/(esta dirección).",
    }),
    defineField({ name: "orden", title: "Orden", type: "number", group: "ficha", description: "Posición en el portafolio (1, 2, 3)." }),
    defineField({
      name: "color",
      title: "Color del proyecto",
      type: "string",
      group: "ficha",
      options: {
        list: [
          { title: "Terracota", value: "terracota" },
          { title: "Verde salvia", value: "verde-salvia" },
          { title: "Azul talco", value: "azul-talco" },
        ],
        layout: "radio",
      },
    }),
    texto("location", "Ubicación", { group: "ficha" } as never),
    texto("zone", "Zona (corta)", { group: "ficha", description: "Se muestra en el menú, p. ej. San Pedro." } as never),
    defineField({
      name: "perfil",
      title: "Perfil",
      type: "array",
      group: "ficha",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Para vivir", value: "vivir" },
          { title: "Para invertir", value: "invertir" },
        ],
      },
    }),
    texto("tipo", "Tipo", { group: "ficha" } as never),
    texto("status", "Estatus", { group: "ficha" } as never),
    texto("entrega", "Entrega", { group: "ficha", description: "Vacío: se muestra “Por confirmar”." } as never),
    texto("surface", "Superficies", { group: "ficha" } as never),
    texto("statement", "Titular", { group: "ficha" } as never),
    parrafo("text", "Texto", { group: "ficha" } as never),
    defineField({ name: "facts", title: "Datos (Concepto)", type: "array", group: "ficha", of: [{ type: "dato" }] }),
    defineField({ ...dibujo, group: "ficha" }),

    foto("heroPhoto", "Foto de portada", { group: "fotos" } as never),
    foto("cover", "Foto de tarjeta (índice de desarrollos)", { group: "fotos" } as never),
    defineField({
      name: "gallery",
      title: "Galería",
      type: "array",
      group: "fotos",
      of: [{ type: "imagen" }],
      options: { layout: "grid" },
    }),

    defineField({ name: "amenidades", title: "Amenidades", type: "array", group: "amenidades", of: [amenidad] }),
    defineField({
      name: "amenidadesTotal",
      title: "Total de amenidades",
      type: "number",
      group: "amenidades",
      description: "Cuántas tiene el proyecto en total (puede ser más que las que tienen foto).",
    }),

    lista("cercanos", "Cerca de", { group: "ubicacion" } as never),
    defineField({
      name: "mapa",
      title: "Mapa",
      type: "object",
      group: "ubicacion",
      fields: [
        defineField({ name: "url", title: "Enlace de Google Maps (botón “Cómo llegar”)", type: "url" }),
        defineField({ name: "lat", title: "Latitud", type: "number" }),
        defineField({ name: "lng", title: "Longitud", type: "number" }),
      ],
    }),

    defineField({
      name: "mostrarTipologias",
      title: "Mostrar tipologías",
      type: "boolean",
      group: "tipologias",
      description: "La sección de tipologías está oculta en el sitio por ahora; los datos se conservan.",
    }),
    defineField({ name: "tipologias", title: "Tipologías", type: "array", group: "tipologias", of: [tipologia] }),

    defineField({
      name: "home",
      title: "Tarjeta en el inicio",
      type: "object",
      group: "inicio",
      description: "Textos y fotos de este desarrollo en la sección Desarrollos del inicio.",
      fields: [
        parrafo("text", "Texto"),
        defineField({ name: "facts", title: "Datos", type: "array", of: [{ type: "dato" }] }),
        foto("heroPhoto", "Foto grande"),
        foto("photo", "Foto secundaria"),
      ],
    }),

    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
  orderings: [{ title: "Orden", name: "orden", by: [{ field: "orden", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "location", media: "heroPhoto" } },
});

// ─── Entrada del blog ────────────────────────────────────────────────────────────────
export const entrada = defineType({
  name: "entrada",
  title: "Entrada del blog",
  type: "document",
  fields: [
    texto("title", "Título", { validation: (r: Rule) => r.required() } as never),
    defineField({
      name: "slug",
      title: "Dirección de la página",
      type: "slug",
      description: "Se genera desde el título: /blog/(esta dirección).",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    parrafo("excerpt", "Resumen", { rows: 3, validation: (r: Rule) => r.required() } as never),
    texto("category", "Categoría", { description: "Por ejemplo Inversión. Sirve para los filtros del blog." } as never),
    defineField({
      name: "date",
      title: "Fecha",
      type: "date",
      options: { dateFormat: "DD/MM/YYYY" },
      validation: (r) => r.required(),
    }),
    texto("readingTime", "Tiempo de lectura", { description: "Por ejemplo “5 min de lectura”." } as never),
    foto("photo", "Foto principal"),
    defineField({ ...dibujo, options: { list: dibujos } }),
    defineField({
      name: "ejemplo",
      title: "Es de ejemplo",
      type: "boolean",
      description: "Muestra la nota “Publicación de ejemplo”. Quitar cuando sea una entrada real.",
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Párrafo", value: "normal" },
            { title: "Subtítulo", value: "h2" },
            { title: "Cita", value: "blockquote" },
          ],
          lists: [{ title: "Viñetas", value: "bullet" }],
          marks: { decorators: [], annotations: [] },
        }),
      ],
    }),
  ],
  orderings: [{ title: "Más recientes", name: "fecha", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "photo" } },
});
