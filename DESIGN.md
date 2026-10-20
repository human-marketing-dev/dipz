# Dipz — Design system

Dipz es una desarrolladora de proyectos arquitectónicos. Lema: **THE FUTURE OF REAL ESTATE**. La identidad es sobria y arquitectónica: tonos tierra cálidos, mucho aire, geometría de líneas y curvas concéntricas.

Este archivo es la fuente de reglas de marca para cualquier UI de Dipz. Los valores viven en `app/dipz-tokens.css`. No escribas hex, tamaños de fuente ni radios sueltos en los componentes: usa siempre los tokens y clases de abajo.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `app/dipz-tokens.css` | Variables CSS (`:root`), `@theme` de Tailwind v4 y las clases de texto `type-*` |
| `app/fonts.ts` | Commuters Sans, Arimo y Bodoni Moda con `next/font/local` |
| `app/fonts/*.woff2` | Archivos de fuente |
| `public/brand/*.png` | Logotipo, monograma y patrón (PNG transparente) |
| `tailwind.config.v3.ts` | Solo para proyectos en Tailwind v3 |

## Integración (Next.js App Router)

1. Copia `app/dipz-tokens.css`, `app/fonts.ts`, `app/fonts/` y `public/brand/` al proyecto.
2. En `app/globals.css`, después de `@import "tailwindcss";`, agrega `@import "./dipz-tokens.css";`.
3. En `app/layout.tsx`, aplica las variables de fuente en `<html>` (no en `<body>`) y los colores base en `<body>`:

```tsx
import { fontVariables } from "./fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVariables}>
      <body className="bg-surface text-ink type-body antialiased">{children}</body>
    </html>
  );
}
```

Para Tailwind v3: usa `tailwind.config.v3.ts` como `tailwind.config.ts`, y en `dipz-tokens.css` borra el bloque `@theme inline` y los `@utility` (conserva el `:root`). En v3 las clases `type-*` las aporta el plugin del config, y `py-30` no existe: usa `py-[120px]`.

## Color

| Token | Clase Tailwind | Valor | Uso |
| --- | --- | --- | --- |
| `surface` | `bg-surface` | `blanco-calido` #F2F0EB | Fondo por defecto de páginas y tarjetas |
| `surface-alt` | `bg-surface-alt` | `arena` #C9C1B4 | Secciones alternas, fichas de proyecto, formularios |
| `surface-inverse` | `bg-surface-inverse` | `negro-profundo` #191918 | Héroe oscuro, pie de página, galerías |
| `ink` | `text-ink` | `negro-profundo` #191918 | Texto principal |
| `ink-muted` | `text-ink-muted` | `gris-grafito` #514D47 | Texto secundario, metadatos, pies de foto |
| `ink-inverse` | `text-ink-inverse` | `blanco-calido` #F2F0EB | Texto sobre `surface-inverse` y sobre `accent` |
| `accent` | `bg-accent` / `text-accent` | `terracota` #9D5129 | Botón primario, enlaces, foco |
| `accent-alt` | `bg-accent-alt` | `verde-salvia` #687665 | Bloques de color, mapas, estado "disponible" |
| `line` | `border-line` | `gris-grafito` #514D47 | Bordes de 1px y divisores |
| `focus` | `outline-focus` | `terracota` #9D5129 | Anillo de foco |

Reglas:
- Usa los tokens de rol (`surface`, `ink`, `accent`…) en los componentes. Los nombres de paleta (`bg-terracota`, `bg-arena`…) también existen, pero son para bloques decorativos.
- `terracota` es el único acento fuerte: un acento por vista, nunca como fondo de grandes áreas de texto.
- `verde-salvia` no se combina con `terracota` en el mismo componente.
- Contraste: `verde-salvia` sobre `blanco-calido` (4.2:1) y `terracota` sobre `arena` (3.2:1) solo para texto de 24px o más.
- Nunca negro puro (`#000`) ni blanco puro (`#fff`).

## Tipografía

| Clase | Familia | Tamaño / interlínea | Peso | Uso |
| --- | --- | --- | --- | --- |
| `type-display` | Commuters | 64 / 68 | 600, MAYÚSCULAS | Titular del héroe, uno por página |
| `type-h1` | Commuters | 44 / 50 | 600, MAYÚSCULAS | Título de página |
| `type-h2` | Commuters | 32 / 38 | 600 | Títulos de sección, nombres de proyecto |
| `type-h3` | Commuters | 22 / 28 | 600 | Subtítulos |
| `type-eyebrow` | Commuters | 12 / 16, tracking 0.3em | 400, MAYÚSCULAS | Etiqueta sobre titulares y el lema |
| `type-body-lg` | Arimo | 18 / 28 | 400 | Entradilla |
| `type-body` | Arimo | 16 / 26 | 400 | Texto corrido |
| `type-small` | Arimo | 14 / 22 | 400 | Fichas técnicas, notas |
| `type-label` | Arimo | 14 / 20, tracking 0.04em | 700 | Botones, campos, navegación |
| `type-caption` | Arimo | 12 / 18 | 400 | Pies de foto, legales (en `text-ink-muted`) |
| `type-quote` | Bodoni Moda itálica | 36 / 44 | 400 | Frase de marca, una por sección como máximo |
| `type-accent` | Bodoni Moda itálica | 22 / 30 | 400 | Palabra de acento junto a un titular |

- Familias sueltas: `font-display` (Commuters), `font-sans` (Arimo), `font-serif` (Bodoni).
- Bodoni nunca para párrafos ni interfaz.
- Los tamaños son de escritorio. En móvil reduce `type-display` y `type-h1` (por ejemplo `type-h1 md:type-display` en el héroe) en lugar de inventar tamaños nuevos.
- Combinación típica de héroe: `type-eyebrow` → `type-display` → `type-accent` → `type-body-lg`.
- **Commuters es la versión DEMO de Fontspring**: no trae acentos ni ñ (esos caracteres caen a Arimo). Hasta tener la licencia completa, evita títulos en Commuters con tildes o ñ visibles o acéptalo como provisional.

## Espaciado

Retícula de base 8. Los tokens equivalen a la escala por defecto de Tailwind, así que usa las clases normales:

| Token | Valor | Tailwind | Uso |
| --- | --- | --- | --- |
| `space-1` | 4px | `1` | Ícono y texto |
| `space-2` | 8px | `2` | Dentro de componentes compactos |
| `space-3` | 16px | `4` | Relleno de botones y campos; entre párrafos |
| `space-4` | 24px | `6` | Relleno de tarjetas; margen lateral en móvil |
| `space-5` | 40px | `10` | Entre bloques de una sección |
| `space-6` | 64px | `16` | Entre secciones en móvil |
| `space-7` | 120px | `30` | Entre secciones en escritorio |

El aire generoso es parte de la marca: las secciones llevan `py-16 md:py-30`.

## Forma

- Fotografía, bloques de color y secciones: esquinas rectas (`rounded-none`), como un plano.
- Botones y etiquetas: píldora (`rounded-pill`), que retoma los remates redondeados del logotipo.
- Campos de formulario y tarjetas pequeñas: `rounded-sm` (4px).
- Bordes de 1px en `border-line`. Sin sombras.
- Foco: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`.

Botón primario de referencia:

```tsx
<button className="rounded-pill bg-accent px-6 py-4 text-ink-inverse type-label focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
  Agendar visita
</button>
```

## Logotipo y patrón

| Archivo | Uso |
| --- | --- |
| `/brand/dipz-logo-negro.png` | Logotipo principal (DIPZ + lema) sobre `surface` / `surface-alt` |
| `/brand/dipz-logo-blanco.png` | Logotipo sobre `surface-inverse` o fotografía oscura |
| `/brand/dipz-monograma-negro.png` | Monograma D: favicon, avatares, espacios pequeños, sobre fondos claros |
| `/brand/dipz-monograma-blanco.png` | Monograma sobre fondos oscuros |
| `/brand/dipz-patron-monograma.png` | Textura de fondo para portadas y separadores, sobre `surface`; una vez por página |

- Usa `next/image` con `alt="Dipz"`. Los PNG tienen mucho margen transparente; recórtalos o ajusta con `object-contain`.
- No cambies los colores del logotipo, no lo deformes, no le pongas sombra. Sobre `terracota` o `verde-salvia` solo la versión blanca y en tamaño grande.
- Espacio libre alrededor del logotipo: al menos la altura del lema.

## Contenido y tono

- Calma y seguridad, como un arquitecto que explica un plano: frases cortas y concretas, sin superlativos vacíos ("el mejor", "único", "de lujo").
- **Tú** en web y redes; **usted** en fichas y documentos formales. Sin emoji.
- "Dipz" en texto corrido; "DIPZ" solo dentro del logotipo.
- El lema siempre en inglés y en MAYÚSCULAS, con `type-eyebrow`.

## Iconografía

La marca aún no tiene set de íconos propio. Usa íconos de línea fina (trazo 1.5px, terminaciones redondeadas, p. ej. Lucide con `strokeWidth={1.5}`) en `text-ink` o `text-ink-muted`. Sin emoji ni íconos rellenos.
