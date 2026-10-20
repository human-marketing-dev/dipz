"use client";

import Image from "next/image";
import { useState, type ComponentProps } from "react";
import { Placeholder } from "./Placeholder";

export type Photo = { src: string; alt: string; position?: string };

type MediaProps = ComponentProps<typeof Placeholder> & {
  photo?: Photo;
  sizes?: string;
  preload?: boolean;
};

// Fotografía a sangre con fundido de 1s al cargar; si aún no hay foto, el marcador de línea.
export function Media({ photo, sizes = "100vw", preload, className = "", ...placeholder }: MediaProps) {
  const [loaded, setLoaded] = useState(false);
  if (!photo) return <Placeholder className={className} {...placeholder} />;
  return (
    <div className={`relative overflow-hidden bg-negro-profundo ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        draggable={false}
        onLoad={() => setLoaded(true)}
        style={{ objectPosition: photo.position ?? "center" }}
        className={`object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
