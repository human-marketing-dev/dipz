"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { presencia } from "./content";
import { mexicoStates, mexicoViewBox } from "./mexico-map";

const [, , W, H] = mexicoViewBox.split(" ").map(Number);

// Mapa de puntos: una retícula de puntos recortada con la silueta de la república.
// Al pasar por una ciudad (en el mapa o en la lista) aparece su etiqueta.
function MapaMexico({
  active,
  onActive,
}: {
  active: number;
  onActive: (i: number) => void;
}) {
  const city = presencia.cities[active];
  const below = city.y < 60;
  return (
    <div className="relative">
      <svg viewBox={mexicoViewBox} className="w-full overflow-visible">
        <defs>
          <pattern
            id="mx-dots"
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="3.5"
              cy="3.5"
              r="1.7"
              className="fill-gris-grafito/50"
            />
          </pattern>
          <clipPath id="mx-clip">
            {mexicoStates.map((s) => (
              <path key={s.id} d={s.path} />
            ))}
          </clipPath>
        </defs>
        <rect
          width={W}
          height={H}
          fill="url(#mx-dots)"
          clipPath="url(#mx-clip)"
        />

        {/* La ciudad activa se dibuja al final para quedar encima (Monterrey y San Pedro se tocan) */}
        {presencia.cities
          .map((c, i) => ({ c, i }))
          .sort((a, b) => Number(a.i === active) - Number(b.i === active))
          .map(({ c, i }) => (
            <g
              key={c.name}
              role="button"
              tabIndex={0}
              aria-label={`${c.name}, ${c.state}`}
              onMouseEnter={() => onActive(i)}
              onFocus={() => onActive(i)}
              className="cursor-pointer outline-none"
            >
              <circle cx={c.x} cy={c.y} r="14" className="fill-transparent" />
              {i === active && (
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="6"
                  className="ping-dipz fill-accent"
                />
              )}
              <circle
                cx={c.x}
                cy={c.y}
                r={i === active ? 6 : 3.5}
                className={`transition-all duration-300 ${i === active ? "fill-accent" : "fill-negro-profundo"}`}
              />
            </g>
          ))}
      </svg>

      <span
        className="pointer-events-none absolute flex items-center gap-2 rounded-pill bg-negro-profundo py-1.5 pr-4 pl-3 type-caption whitespace-nowrap text-ink-inverse transition-[left,top] duration-500 ease-[var(--ease-dipz)]"
        style={{
          left: `${(city.x / W) * 100}%`,
          top: `${(city.y / H) * 100}%`,
          transform: `translate(-50%, ${below ? "16px" : "calc(-100% - 16px)"})`,
        }}
      >
        <span className="size-1.5 rounded-pill bg-accent" />
        {city.name}
        <span className="text-arena">{city.state}</span>
      </span>
    </div>
  );
}

export function Presencia() {
  const monterrey = presencia.cities.findIndex((c) => c.name === "Monterrey");
  const [active, setActive] = useState(monterrey);

  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <div className="md:col-span-3">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {presencia.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {presencia.title}
          </Reveal>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-[480px] type-body-lg text-ink-muted"
          >
            {presencia.paragraph}
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 border-t border-line sm:grid-cols-3 md:max-w-[560px]">
            {presencia.cities.map((c, i) => (
              <li key={c.name} className="border-b border-line">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-2 py-3 text-left type-small transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${i === active ? "text-ink" : "text-ink-muted hover:text-ink"}`}
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-pill transition-colors duration-300 ${i === active ? "bg-accent" : "bg-line/40"}`}
                  />
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Reveal
          delay={0.2}
          className="mt-12 md:col-span-3 md:col-start-4 md:mt-0 md:self-end"
        >
          <div className="md:max-w-[620px] md:ml-auto">
            <MapaMexico active={active} onActive={setActive} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
