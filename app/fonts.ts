import localFont from "next/font/local";

// Commuters Sans — titulares y etiquetas.
// OJO: son los archivos DEMO de Fontspring (sin acentos ni ñ). Reemplazar por la licencia completa antes de producción.
// La DEMO además dibuja un sello "DEMO" en vez de 4 + - / ! ( ) y otros signos. Mientras tanto, unicode-range
// limita Commuters a letras sin acento, dígitos sin el 4 y . , : ; ? — todo lo demás cae a Arimo.
// Al instalar la licencia completa, quitar `declarations`.
export const commuters = localFont({
  src: [
    { path: "./fonts/CommutersSans-thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/CommutersSans-extralight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/CommutersSans-light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/CommutersSans-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CommutersSans-semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/CommutersSans-bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/CommutersSans-extrabold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/CommutersSans-heavy.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-commuters",
  display: "swap",
  // (next/font exige el valor literal aquí, no una constante)
  declarations: [
    { prop: "unicode-range", value: "U+0020, U+002C, U+002E, U+0030-0033, U+0035-003B, U+003F, U+0041-005A, U+0061-007A" },
  ],
});

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
// <html lang="es" className={`${commuters.variable} ${arimo.variable} ${bodoni.variable}`}>
export const fontVariables = `${commuters.variable} ${arimo.variable} ${bodoni.variable}`;
