"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Media, type Photo } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";

// Galería horizontal: en escritorio la sección se fija y el scroll vertical recorre las fotos
// de izquierda a derecha; en móvil es un carrusel nativo con snap.
export function Galeria({ photos, name }: { photos: Photo[]; name: string }) {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      const o = outer.current;
      const t = track.current;
      if (!o || !t || !mq.matches) {
        setShift(0);
        return;
      }
      const r = o.getBoundingClientRect();
      const travel = o.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -r.top / Math.max(1, travel)));
      const distance = t.scrollWidth - t.clientWidth;
      setShift(progress * distance);
      setCurrent(Math.round(progress * (photos.length - 1)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [photos.length]);

  return (
    <section
      ref={outer}
      data-nav="light"
      aria-label={`Galería de ${name}`}
      className="relative bg-surface md:h-[var(--galeria-h)]"
      style={{ "--galeria-h": `${100 + photos.length * 45}dvh` } as CSSProperties}
    >
      <div className="py-16 md:sticky md:top-0 md:flex md:h-[100dvh] md:flex-col md:justify-center md:overflow-hidden md:py-0">
        <div className="frame flex items-end justify-between">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            Galería
          </Reveal>
          <p className="type-eyebrow text-ink-muted" aria-hidden>
            0{current + 1} / 0{photos.length}
          </p>
        </div>

        <div
          ref={track}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:snap-none md:gap-6 md:overflow-visible md:px-[var(--margin)] [&::-webkit-scrollbar]:hidden"
          style={{ transform: `translate3d(${-shift}px, 0, 0)` }}
        >
          {photos.map((ph, i) => {
            const ratio = ph.src.width / ph.src.height;
            return (
              <figure key={i} className="shrink-0 snap-start">
                <div className="h-[56vh] md:h-[64vh]" style={{ aspectRatio: String(Math.min(Math.max(ratio, 0.75), 1.9)) }}>
                  <Media photo={ph} sizes="(min-width: 768px) 75vw, 90vw" label={ph.alt} className="size-full" />
                </div>
                <figcaption className="mt-3 flex gap-3 type-caption text-ink-muted">
                  <span>0{i + 1}</span>
                  <span>{ph.alt}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
