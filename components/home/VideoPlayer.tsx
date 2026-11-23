"use client";

import { useEffect, useRef, useState } from "react";

// Reproductor de YouTube con portada propia; el reproductor se carga al dar clic, ya reproduciendo.
// Portada: primero la imagen nuestra (video.portada en content.ts, p. ej. /video/portada.webp,
// idealmente 2560×1440 o más). Si ese archivo no existe, se usa la miniatura de YouTube en la mayor
// resolución disponible: maxresdefault (1280×720), sddefault (640×480) o hqdefault. Cuando YouTube no
// tiene una calidad responde con una imagen gris de 120×90, y se pasa a la siguiente.
const calidades = ["maxresdefault", "sddefault", "hqdefault"];

export function VideoPlayer({ id, title, portada }: { id: string; title: string; portada?: string }) {
  const [playing, setPlaying] = useState(false);
  const [q, setQ] = useState(0);
  const img = useRef<HTMLImageElement>(null);

  // Si la imagen falló (o llegó la gris de 120×90) antes de que React se conectara, onError/onLoad no se
  // dispara: se revisa al montar.
  useEffect(() => {
    const el = img.current;
    if (el?.complete && el.naturalWidth <= 120) setQ((n) => (n === 0 ? 1 : n));
  }, []);

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

  const fuentes = [...(portada ? [portada] : []), ...calidades.map((c) => `https://i.ytimg.com/vi/${id}/${c}.jpg`)];
  const siguiente = () => setQ((n) => Math.min(n + 1, fuentes.length - 1));

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir: ${title}`}
      className="group absolute inset-0 size-full cursor-pointer overflow-hidden bg-negro-profundo focus-visible:outline-2 focus-visible:-outline-offset-8 focus-visible:outline-focus"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- con respaldo a imágenes externas de YouTube */}
      <img
        ref={img}
        key={fuentes[q]}
        src={fuentes[q]}
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
