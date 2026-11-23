"use client";

import { useState } from "react";

// Reproductor de YouTube con portada propia. El reproductor de YouTube elige una miniatura chica
// y la estira, por eso se veía pixeleada. Aquí se muestra la miniatura en máxima resolución
// (maxresdefault, 1280×720) y el reproductor se carga al dar clic, ya reproduciendo.
// Si el video no tiene miniatura en máxima resolución, YouTube responde con una imagen gris de
// 120×90; en ese caso se cambia a sddefault (640×480) y luego a hqdefault.
const calidades = ["maxresdefault", "sddefault", "hqdefault"];

export function VideoPlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [q, setQ] = useState(0);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
    );
  }

  const siguiente = () => setQ((n) => Math.min(n + 1, calidades.length - 1));

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir: ${title}`}
      className="group absolute inset-0 size-full cursor-pointer overflow-hidden bg-negro-profundo focus-visible:outline-2 focus-visible:-outline-offset-8 focus-visible:outline-focus"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- imagen externa de YouTube, sin optimizar */}
      <img
        key={calidades[q]}
        src={`https://i.ytimg.com/vi/${id}/${calidades[q]}.jpg`}
        alt=""
        loading="lazy"
        onLoad={(e) => e.currentTarget.naturalWidth <= 120 && siguiente()}
        onError={siguiente}
        className="size-full object-cover transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-[1.02]"
      />
      <span aria-hidden className="absolute inset-0 bg-negro-profundo/20 transition-colors duration-500 group-hover:bg-negro-profundo/10" />
      <span aria-hidden className="absolute inset-0 grid place-items-center">
        <span className="grid size-20 place-items-center rounded-pill bg-blanco-calido text-ink transition-colors duration-500 group-hover:bg-accent group-hover:text-ink-inverse md:size-24">
          <svg viewBox="0 0 16 16" fill="currentColor" className="ml-1 size-6">
            <path d="M4 2.5v11l9-5.5z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
