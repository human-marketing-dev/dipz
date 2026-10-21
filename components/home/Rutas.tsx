"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { rutas } from "./content";

// Índice editorial: tres filas con regla, como una lista de servicios. La foto de la izquierda
// cambia según la ruta activa; la fila activa queda en tinta y las demás en gris.
export function Rutas() {
  const [active, setActive] = useState(0);

  return (
    <section id="rutas" data-nav="light" className="frame border-t border-line/30 bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {rutas.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {rutas.title}
        </Reveal>
      </div>

      <div className="mt-12 md:mt-20 md:grid md:grid-cols-6 md:gap-x-6">
        {/* Foto de la ruta activa, del margen al riel 1/3 */}
        <div className="relative hidden md:col-span-2 md:block">
          <div className="sticky top-30 aspect-[4/5]">
            {rutas.cards.map((c, i) => (
              <div
                key={c.n}
                className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                aria-hidden={i !== active}
              >
                <Media photo={c.photo} sizes="33vw" aspect={4 / 5} label={c.name} drawing={c.drawing} tone="sand" showCaption={!c.photo} className="size-full" />
              </div>
            ))}
            <span className="absolute bottom-4 left-4 rounded-pill bg-blanco-calido px-3 py-1 type-caption text-ink">
              {rutas.cards[active].n} / 0{rutas.cards.length}
            </span>
          </div>
        </div>

        <ol className="border-t border-line md:col-span-4">
          {rutas.cards.map((c, i) => (
            <li key={c.n} className="border-b border-line">
              <a
                href="#contacto"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid gap-4 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:grid-cols-4 md:gap-6 md:py-12"
              >
                <Media photo={c.photo} sizes="100vw" aspect={4 / 3} label={c.name} drawing={c.drawing} tone="sand" showCaption={!c.photo} className="aspect-[4/3] md:hidden" />
                <span className="type-eyebrow text-ink-muted">{c.n}</span>
                <span className="md:col-span-3">
                  <span
                    className={`block type-h2 transition-colors duration-500 md:type-h1 ${i === active ? "text-ink" : "text-ink md:text-ink-muted/60 md:group-hover:text-ink"}`}
                  >
                    {c.name}
                  </span>
                  <span className="mt-5 block max-w-[480px] type-body text-ink-muted">{c.text}</span>
                  <span className="mt-8 flex">
                    <span className="inline-flex items-center gap-4 rounded-pill border border-line py-2 pr-2 pl-6 type-label whitespace-nowrap transition-colors duration-500 group-hover:border-negro-profundo group-hover:bg-negro-profundo group-hover:text-ink-inverse">
                      {c.link}
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-pill transition-colors duration-500 ${i === active ? "bg-accent text-ink-inverse" : "bg-negro-profundo text-ink-inverse"}`}
                      >
                        <Arrow className="arrow-nudge" />
                      </span>
                    </span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
