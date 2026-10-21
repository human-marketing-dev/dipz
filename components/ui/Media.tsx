"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, type ComponentProps } from "react";
import { Placeholder } from "./Placeholder";

export type Photo = { src: StaticImageData; alt: string; position?: string };

type MediaProps = ComponentProps<typeof Placeholder> & {
  photo?: Photo;
  sizes?: string;
  // Proporción ancho/alto de la caja. Si la foto es más ancha, object-cover la amplía para llenarla
  // y `sizes` se escala en la misma medida; si no, el navegador baja una versión chica y se pixelea.
  aspect?: number;
  // Para cajas medidas contra la ventana (paneles a pantalla completa): ancho en vw y alto en vh por
  // breakpoint, del más específico al general. Sustituye a `sizes`.
  fit?: { media?: string; vw: number; vh: number }[];
  preload?: boolean;
};

// En una ventana más angosta que ratio·vh/vw, la foto se ajusta a lo alto y desborda a los lados:
// mide ratio·vh de ancho.
function fitSizes(fit: NonNullable<MediaProps["fit"]>, ratio: number) {
  return fit
    .flatMap(({ media, vw, vh }) => [
      `${media ? `${media} and ` : ""}(max-aspect-ratio: ${Math.round((ratio * vh * 1000) / vw)}/1000) ${Math.ceil(ratio * vh)}vh`,
      `${media ? `${media} ` : ""}${vw}vw`,
    ])
    .join(", ");
}

// Fotografía a sangre con fundido de 1s al cargar; si aún no hay foto, el marcador de línea.
export function Media({ photo, sizes = "100vw", aspect, fit, preload, className = "", ...placeholder }: MediaProps) {
  const [loaded, setLoaded] = useState(false);
  if (!photo) return <Placeholder className={className} {...placeholder} />;
  const ratio = photo.src.width / photo.src.height;
  const crop = aspect ? Math.max(1, ratio / aspect) : 1;
  const cropSizes = fit
    ? fitSizes(fit, ratio)
    : crop > 1
      ? sizes.replace(/(\d+(?:\.\d+)?)vw/g, (_, n) => `${Math.ceil(Number(n) * crop)}vw`)
      : sizes;
  return (
    <div className={`relative overflow-hidden bg-negro-profundo ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={cropSizes}
        preload={preload}
        draggable={false}
        onLoad={() => setLoaded(true)}
        style={{ objectPosition: photo.position ?? "center" }}
        className={`object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
