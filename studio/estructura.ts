import type { StructureResolver } from "sanity/structure";
import { SINGLETONS } from "./schemas/lista";

const pagina = (S: Parameters<StructureResolver>[0], id: string, title: string) =>
  S.listItem().title(title).id(id).child(S.document().schemaType(id).documentId(id).title(title));

// Menú del Studio: páginas fijas, los 3 desarrollos, el blog y la configuración general.
export const estructura: StructureResolver = (S) => {
  const p = (id: string) => {
    const s = SINGLETONS.find((x) => x.id === id)!;
    return pagina(S, s.id, s.title);
  };
  return S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Páginas")
        .child(
          S.list()
            .title("Páginas")
            .items([
              p("inicio"),
              p("nosotros"),
              p("zeroGravity"),
              p("unidadesNegocio"),
              p("desarrollosIndice"),
              p("contacto"),
              p("blogIndice"),
              S.divider(),
              p("avisoPrivacidad"),
              p("terminos"),
            ]),
        ),
      S.listItem()
        .title("Desarrollos")
        .child(
          S.documentTypeList("desarrollo")
            .title("Desarrollos")
            .defaultOrdering([{ field: "orden", direction: "asc" }])
            .initialValueTemplates([]),
        ),
      S.documentTypeListItem("entrada").title("Blog"),
      S.divider(),
      p("configuracion"),
    ]);
};
