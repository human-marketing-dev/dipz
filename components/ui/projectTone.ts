import type { ProjectColor } from "@/components/home/content";

// Color de cada desarrollo y el texto que va encima: blanco sobre terracota y verde, negro sobre
// azul talco (el blanco no se lee sobre un fondo tan claro). Lo usan la sección Desarrollos del home
// y el bloque Ubicación de cada ficha.
export const projectTones: Record<
  ProjectColor,
  { bg: string; eyebrow: string; title: string; body: string; line: string; link: "light" | "dark" }
> = {
  terracota: {
    bg: "bg-terracota",
    eyebrow: "text-blanco-calido/80",
    title: "text-blanco-calido",
    body: "text-blanco-calido",
    line: "border-blanco-calido/30",
    link: "light",
  },
  "verde-salvia": {
    bg: "bg-verde-salvia",
    eyebrow: "text-blanco-calido/80",
    title: "text-blanco-calido",
    body: "text-blanco-calido",
    line: "border-blanco-calido/30",
    link: "light",
  },
  "azul-talco": {
    bg: "bg-azul-talco",
    eyebrow: "text-negro-profundo/70",
    title: "text-negro-profundo",
    body: "text-negro-profundo",
    line: "border-negro-profundo/25",
    link: "dark",
  },
};
