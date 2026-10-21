import localFont from "next/font/local";

// Commuters Sans (titulares y etiquetas) viene del kit de Adobe Fonts que carga app/layout.tsx.

// Arimo — texto corrido e interfaz (variable 400–700).
export const arimo = localFont({
  src: [
    { path: "./fonts/Arimo-VariableFont_wght.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/Arimo-Italic-VariableFont_wght.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-arimo",
  display: "swap",
});

// Bodoni Moda — acento editorial, sobre todo en itálica (variable 400–900).
export const bodoni = localFont({
  src: [
    { path: "./fonts/BodoniModa-VariableFont_opszwght.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/BodoniModa-Italic-VariableFont_opszwght.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-bodoni",
  display: "swap",
});

// Aplicar en <html> (no en <body>), para que las variables existan en :root:
// <html lang="es" className={`${arimo.variable} ${bodoni.variable}`}>
export const fontVariables = `${arimo.variable} ${bodoni.variable}`;
