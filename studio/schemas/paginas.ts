import { defineArrayMember, defineField } from "sanity";
import {
  FIJA,
  campoCierre,
  campoSeo,
  dibujo,
  foto,
  lista,
  pagina,
  parrafo,
  parrafos,
  seccion,
  texto,
} from "./objetos";

const encabezado = (extra: ReturnType<typeof texto>[] = []) => [
  texto("eyebrow", "Antetítulo"),
  texto("title", "Título"),
  ...extra,
];

// IDs de las marcas: sirven de ancla en /unidades-de-negocio#… y no se editan.
const idMarca = texto("id", "Identificador", { readOnly: true, hidden: true } as never);

// ─── Inicio ──────────────────────────────────────────────────────────────────────────
export const inicio = pagina("inicio", "Inicio", [
  campoSeo,
  seccion("hero", "Portada", [
    ...encabezado([parrafo("subtitle", "Subtítulo")]),
    defineField({ name: "primary", title: "Botón principal", type: "enlace" }),
    defineField({ name: "secondary", title: "Botón secundario", type: "enlace" }),
  ]),
  seccion("respaldo", "Respaldo (cifras)", [
    texto("eyebrow", "Antetítulo"),
    texto("nota", "Nota", { description: "Texto pequeño a la derecha. Vacío para ocultarlo." }),
    defineField({
      name: "stats",
      title: "Cifras",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "cifra",
          fields: [
            texto("prefix", "Prefijo", { description: "Por ejemplo “+”." }),
            defineField({ name: "value", title: "Número", type: "number" }),
            texto("unit", "Unidad"),
            texto("text", "Texto"),
          ],
          preview: { select: { title: "value", subtitle: "unit" } },
        }),
      ],
    }),
  ]),
  seccion("video", "Video institucional", [
    ...encabezado(),
    texto("youtubeId", "ID de YouTube", { description: "Lo que va después de “v=” en el enlace del video." }),
    defineField({
      name: "anchoCompleto",
      title: "Ancho completo",
      description: "Activado: el video ocupa todo el ancho. Desactivado: dentro del marco, máximo 70% del alto.",
      type: "boolean",
    }),
    foto("portada", "Portada del video", { description: "Imagen que se ve antes de darle play (2560 × 1440)." }),
  ]),
  seccion("zeroGravity", "Zero Gravity", [
    ...encabezado([parrafo("paragraph", "Párrafo"), texto("stagesTitle", "Título de las etapas")]),
    defineField({ name: "stages", title: "Etapas", type: "array", options: FIJA, of: [{ type: "paso" }] }),
  ]),
  seccion("unidades", "Nuestras marcas", [
    ...encabezado([parrafo("intro", "Introducción")]),
    defineField({
      name: "brands",
      title: "Marcas",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "marca",
          fields: [
            idMarca,
            texto("name", "Nombre"),
            texto("tag", "Etiqueta"),
            texto("title", "Titular"),
            parrafo("text", "Texto"),
            lista("capabilities", "Capacidades"),
            texto("link", "Texto del enlace"),
            foto("photo", "Foto"),
            dibujo,
          ],
          preview: { select: { title: "name", subtitle: "tag", media: "photo" } },
        }),
      ],
    }),
  ]),
  seccion("modelo", "Cómo trabajamos", [
    ...encabezado([parrafo("paragraph", "Párrafo")]),
    defineField({ name: "steps", title: "Pasos", type: "array", options: FIJA, of: [{ type: "paso" }] }),
    parrafo("alcance", "Párrafo de alcance", { description: "Va al final de la sección, debajo de los pasos." }),
  ]),
  seccion(
    "desarrollos",
    "Desarrollos",
    [
      ...encabezado([parrafo("intro", "Introducción")]),
      defineField({ name: "link", title: "Botón", type: "enlace" }),
    ],
    "Los textos y fotos de cada desarrollo en el inicio se editan en Desarrollos → (proyecto) → pestaña “Inicio”.",
  ),
  seccion("rutas", "Por dónde empezar", [
    ...encabezado(),
    defineField({
      name: "cards",
      title: "Tarjetas",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "ruta",
          fields: [texto("name", "Título"), parrafo("text", "Texto"), texto("link", "Texto del enlace"), foto("photo", "Foto"), dibujo],
          preview: { select: { title: "name", media: "photo" } },
        }),
      ],
    }),
  ]),
  seccion(
    "blog",
    "Blog",
    [...encabezado([parrafo("intro", "Introducción")]), defineField({ name: "link", title: "Botón", type: "enlace" })],
    "Se muestran automáticamente las tres entradas más recientes del blog.",
  ),
]);

// ─── Nosotros ────────────────────────────────────────────────────────────────────────
export const nosotros = pagina("nosotros", "Nosotros", [
  campoSeo,
  seccion("hero", "Portada", [...encabezado([parrafo("intro", "Introducción")]), foto("photo", "Foto")]),
  seccion("grupo", "Trayectoria", [
    ...encabezado([parrafos("paragraphs", "Párrafos", { options: FIJA } as never)]),
    lista("steps", "Etapas", { options: FIJA } as never),
    foto("photo", "Foto"),
  ]),
  seccion("marcas", "Estructura del grupo", [
    ...encabezado([parrafo("paragraph", "Párrafo")]),
    defineField({
      name: "groups",
      title: "Áreas",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "area",
          fields: [
            texto("role", "Área"),
            defineField({
              name: "brands",
              title: "Marcas",
              type: "array",
              options: FIJA,
              of: [
                defineArrayMember({
                  type: "object",
                  name: "marcaArea",
                  fields: [idMarca, texto("name", "Nombre"), texto("tag", "Etiqueta")],
                  preview: { select: { title: "name", subtitle: "tag" } },
                }),
              ],
            }),
          ],
          preview: { select: { title: "role" } },
        }),
      ],
    }),
    defineField({ name: "link", title: "Botón", type: "enlace" }),
  ]),
  campoCierre,
]);

// ─── Zero Gravity ────────────────────────────────────────────────────────────────────
export const zeroGravity = pagina("zeroGravity", "Zero Gravity", [
  campoSeo,
  seccion("hero", "Portada", [...encabezado([parrafo("intro", "Introducción")]), foto("photo", "Foto")]),
  seccion("caras", "El modelo (tabla)", [
    ...encabezado([parrafo("intro", "Introducción")]),
    texto("headerIzquierda", "Encabezado columna izquierda"),
    texto("headerDerecha", "Encabezado columna derecha"),
    defineField({
      name: "rows",
      title: "Filas",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "fila",
          fields: [texto("izquierda", "DIPZ se encarga de"), texto("derecha", "El cliente recibe")],
          preview: { select: { title: "izquierda", subtitle: "derecha" } },
        }),
      ],
    }),
  ]),
  seccion("enCadaUnidad", "Zero Gravity en cada unidad", [
    ...encabezado(),
    defineField({
      name: "units",
      title: "Unidades",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "unidadZg",
          fields: [
            idMarca,
            texto("name", "Nombre"),
            texto("tag", "Etiqueta"),
            texto("asumimos", "DIPZ se encarga de"),
            texto("recibes", "El cliente recibe"),
          ],
          preview: { select: { title: "name", subtitle: "tag" } },
        }),
      ],
    }),
    defineField({ name: "link", title: "Botón", type: "enlace" }),
  ]),
  seccion(
    "proceso",
    "Cómo trabajamos",
    [texto("title", "Título"), parrafo("paragraph", "Párrafo")],
    "Los pasos son los mismos del inicio (Inicio → Cómo trabajamos).",
  ),
  seccion("loQueNoEs", "Respaldo", [...encabezado([parrafo("paragraph", "Párrafo")])]),
  campoCierre,
]);

// ─── Unidades de negocio ─────────────────────────────────────────────────────────────
export const unidadesNegocio = pagina("unidadesNegocio", "Unidades de negocio", [
  campoSeo,
  seccion("hero", "Portada", [...encabezado([parrafo("intro", "Introducción")])]),
  seccion("unidades", "Unidades", [
    defineField({
      name: "items",
      title: "Unidades",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "unidad",
          fields: [
            idMarca,
            texto("name", "Nombre (título grande)"),
            texto("tag", "Etiqueta"),
            texto("title", "Subtítulo"),
            parrafos("paragraphs", "Párrafos"),
            lista("capabilities", "Qué hacemos"),
            texto("forWhom", "Para quién"),
            defineField({ name: "cta", title: "Botón", type: "enlace" }),
            texto("note", "Nota"),
            texto("pending", "Pendiente", { description: "Aviso interno de dato por confirmar. Vacío para ocultarlo." }),
            foto("photo", "Foto"),
            dibujo,
          ],
          preview: { select: { title: "name", subtitle: "tag", media: "photo" } },
        }),
      ],
    }),
  ]),
  campoCierre,
]);

// ─── Desarrollos (índice) ────────────────────────────────────────────────────────────
export const desarrollosIndice = pagina("desarrollosIndice", "Desarrollos (índice)", [
  campoSeo,
  seccion("hero", "Portada", [...encabezado([parrafo("intro", "Introducción")])]),
  seccion("filtros", "Filtros", [
    texto("todos", "Todos"),
    texto("vivir", "Para vivir"),
    texto("invertir", "Para invertir"),
  ]),
  campoCierre,
]);

// ─── Contacto ────────────────────────────────────────────────────────────────────────
export const contacto = pagina("contacto", "Contacto", [
  campoSeo,
  seccion(
    "hero",
    "Portada",
    [...encabezado()],
    "El párrafo de la portada es el del bloque de contacto (Configuración).",
  ),
  seccion("formulario", "Formulario", [
    defineField({
      name: "motivos",
      title: "Motivos de contacto",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "motivo",
          fields: [texto("id", "Identificador", { readOnly: true, hidden: true } as never), texto("label", "Texto"), texto("hint", "Ayuda")],
          preview: { select: { title: "label", subtitle: "hint" } },
        }),
      ],
    }),
  ]),
  seccion("showroom", "Showroom", [
    ...encabezado(),
    foto("photo", "Foto del showroom", { description: "Mientras no haya foto se muestra la ilustración." }),
  ]),
]);

// ─── Blog (índice) ───────────────────────────────────────────────────────────────────
export const blogIndice = pagina("blogIndice", "Blog (índice)", [
  campoSeo,
  seccion("hero", "Portada", [...encabezado([parrafo("intro", "Introducción")])]),
]);

// ─── Textos legales ──────────────────────────────────────────────────────────────────
const legal = (name: string, title: string) =>
  pagina(name, title, [
    campoSeo,
    seccion("contenido", "Contenido", [
      ...encabezado([parrafo("intro", "Introducción")]),
      defineField({
        name: "sections",
        title: "Apartados",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "apartado",
            fields: [texto("title", "Título"), parrafos("paragraphs", "Párrafos"), lista("list", "Lista con viñetas")],
            preview: { select: { title: "title" } },
          }),
        ],
      }),
    ]),
  ]);

export const avisoPrivacidad = legal("avisoPrivacidad", "Aviso de privacidad");
export const terminos = legal("terminos", "Términos y condiciones");

// ─── Configuración general ───────────────────────────────────────────────────────────
export const configuracion = pagina("configuracion", "Configuración general", [
  seccion("seo", "SEO del sitio", [
    texto("title", "Título del inicio en buscadores"),
    parrafo("description", "Descripción del inicio en buscadores", { rows: 3 } as never),
  ]),
  seccion("contacto", "Datos de contacto", [
    texto("phone", "Teléfono", { description: "Como se muestra, p. ej. +52 81 1984 1517." }),
    texto("email", "Correo", { description: "Vacío: se muestra “Por confirmar”." }),
    texto("showroom", "Dirección del showroom"),
    texto("horario", "Horario del showroom", { description: "Vacío: se muestra “Por confirmar”." }),
    texto("citas", "Citas"),
  ]),
  seccion("redes", "Redes sociales", [
    defineField({
      name: "items",
      title: "Redes",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "red",
          fields: [texto("name", "Red"), texto("handle", "Usuario"), defineField({ name: "href", title: "Enlace", type: "url" })],
          preview: { select: { title: "name", subtitle: "handle" } },
        }),
      ],
    }),
  ]),
  seccion("whatsapp", "WhatsApp", [
    texto("number", "Número", { description: "Solo dígitos con lada de país, p. ej. 528119841517." }),
    parrafo("greeting", "Saludo en la burbuja"),
    parrafo("message", "Mensaje que se precarga en WhatsApp"),
  ]),
  seccion(
    "cierre",
    "Bloque de contacto",
    [
      ...encabezado([parrafo("paragraph", "Párrafo")]),
      texto("primary", "Botón principal"),
      texto("secondary", "Botón secundario"),
      lista("profiles", "Perfiles (Soy…)", { options: FIJA } as never),
    ],
    "Formulario al final de las páginas. Cada página puede cambiar su antetítulo y título.",
  ),
  seccion("menu", "Menú", [
    defineField({
      name: "items",
      title: "Opciones del menú",
      description: "Se pueden renombrar; las páginas a las que llevan son fijas.",
      type: "array",
      options: FIJA,
      of: [
        defineArrayMember({
          type: "object",
          name: "opcionMenu",
          fields: [texto("label", "Texto"), texto("href", "Página", { readOnly: true } as never)],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
  ]),
  seccion("footer", "Pie de página", [texto("lema", "Lema"), texto("copyright", "Derechos reservados")]),
]);

export const paginas = [
  inicio,
  nosotros,
  zeroGravity,
  unidadesNegocio,
  desarrollosIndice,
  contacto,
  blogIndice,
  avisoPrivacidad,
  terminos,
  configuracion,
];
