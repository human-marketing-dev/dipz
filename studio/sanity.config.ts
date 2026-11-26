import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { estructura } from "./estructura";
import { schemaTypes } from "./schemas";
import { FIJOS } from "./schemas/lista";

export default defineConfig({
  name: "dipz",
  title: "DIPZ",
  projectId: "jsqssfsb",
  dataset: "production",
  plugins: [structureTool({ structure: estructura }), visionTool()],
  schema: {
    types: schemaTypes,
    // Del botón "Crear" solo queda la entrada del blog.
    templates: (templates) => templates.filter((t) => !FIJOS.has(t.schemaType)),
  },
  document: {
    // Páginas y desarrollos: se editan y publican, pero no se duplican ni se borran.
    actions: (acciones, { schemaType }) =>
      FIJOS.has(schemaType)
        ? acciones.filter(({ action }) => !["duplicate", "delete", "unpublish"].includes(action ?? ""))
        : acciones,
    newDocumentOptions: (opciones, { creationContext }) =>
      creationContext.type === "global" ? opciones.filter((o) => !FIJOS.has(o.templateId)) : opciones,
  },
});
