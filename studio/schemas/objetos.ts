import { type Rule, defineField, defineType, type FieldDefinition } from "sanity";

// Piezas que se repiten en varias páginas.

// Listas de largo fijo: se editan los elementos, pero no se agregan ni se quitan, porque el diseño
// depende de cuántos son (p. ej. las 4 marcas o las 4 cifras).
export const FIJA = { disableActions: ["add", "addBefore", "addAfter", "remove", "duplicate"] } as never;

export const texto = (name: string, title: string, extra: Partial<FieldDefinition> = {}) =>
  defineField({ name, title, type: "string", ...extra } as FieldDefinition);

export const parrafo = (name: string, title: string, extra: Partial<FieldDefinition> = {}) =>
  defineField({ name, title, type: "text", rows: 4, ...extra } as FieldDefinition);

export const lista = (name: string, title: string, extra: Partial<FieldDefinition> = {}) =>
  defineField({ name, title, type: "array", of: [{ type: "string" }], ...extra } as FieldDefinition);

export const parrafos = (name: string, title: string, extra: Partial<FieldDefinition> = {}) =>
  defineField({ name, title, type: "array", of: [{ type: "text", rows: 4 }], ...extra } as FieldDefinition);

export const foto = (name: string, title: string, extra: Partial<FieldDefinition> = {}) =>
  defineField({ name, title, type: "imagen", ...extra } as FieldDefinition);

// Grupo (pestaña) del documento con sus campos, para no repetir `group` en cada uno.
export const seccion = (name: string, title: string, fields: FieldDefinition[], description?: string) =>
  defineField({ name, title, type: "object", description, options: { collapsible: false }, fields } as FieldDefinition);

export const dibujos = [
  { title: "Torre", value: "tower" },
  { title: "Edificio horizontal", value: "slab" },
  { title: "Interior", value: "interior" },
  { title: "Paisaje", value: "landscape" },
  { title: "Calle", value: "street" },
];

export const dibujo = defineField({
  name: "drawing",
  title: "Ilustración de respaldo",
  description: "Dibujo de líneas que se muestra mientras no haya foto.",
  type: "string",
  options: { list: dibujos },
});

export const imagen = defineType({
  name: "imagen",
  title: "Imagen",
  type: "image",
  options: { hotspot: true },
  description: "Usa el punto de enfoque para elegir qué parte de la foto se conserva al recortarla.",
  fields: [
    defineField({
      name: "alt",
      title: "Descripción de la imagen",
      description: "Para buscadores y lectores de pantalla. En las galerías también se muestra como pie de foto.",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
});

export const enlace = defineType({
  name: "enlace",
  title: "Botón",
  type: "object",
  fields: [
    texto("label", "Texto"),
    texto("href", "Enlace", { description: "Ruta del sitio (p. ej. /desarrollos) o ancla (#rutas)." }),
  ],
});

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    texto("title", "Título para buscadores", { description: "Sin “| DIPZ”: se agrega solo.", validation: (r: Rule) => r.max(70) }),
    parrafo("description", "Descripción para buscadores", { rows: 3, validation: (r: Rule) => r.max(170) } as never),
  ],
});

export const dato = defineType({
  name: "dato",
  title: "Dato",
  type: "object",
  fields: [texto("label", "Etiqueta"), texto("value", "Valor")],
  preview: { select: { title: "value", subtitle: "label" } },
});

export const paso = defineType({
  name: "paso",
  title: "Paso",
  type: "object",
  fields: [texto("name", "Título"), parrafo("text", "Texto", { rows: 3 } as never)],
  preview: { select: { title: "name", subtitle: "text" } },
});

export const cierrePagina = defineType({
  name: "cierrePagina",
  title: "Bloque de contacto al final",
  type: "object",
  description: "Si se deja vacío se usan los textos generales del bloque de contacto (Configuración).",
  fields: [texto("eyebrow", "Antetítulo"), texto("title", "Título")],
});

export const objetos = [imagen, enlace, seo, dato, paso, cierrePagina];

// Página fija (singleton): cada sección es una pestaña del editor.
export const pagina = (name: string, title: string, secciones: FieldDefinition[]) =>
  defineType({
    name,
    title,
    type: "document",
    groups: secciones.map((s) => ({ name: s.name, title: s.title ?? s.name })),
    fields: secciones.map((s) => ({ ...s, group: s.name }) as FieldDefinition),
    preview: { prepare: () => ({ title }) },
  });

export const campoSeo = defineField({ name: "seo", title: "SEO", type: "seo" });
export const campoCierre = defineField({ name: "cierre", title: "Contacto al final", type: "cierrePagina" });
