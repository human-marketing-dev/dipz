"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { presencia } from "./content";
import { mexicoStates, mexicoViewBox } from "./mexico-map";

const [, , W, H] = mexicoViewBox.split(" ").map(Number);

// Lienzo ampliado: el mapa al centro y una columna de etiquetas a cada lado.
const SIDE = 200;
const GAP = 24;
const TOP = -10;
const VW = W + SIDE * 2;
const VH = 580;
const lineEnd = { left: -GAP, right: W + GAP };

const pct = (x: number, y: number) => ({
  left: `${((x + SIDE) / VW) * 100}%`,
  top: `${((y - TOP) / VH) * 100}%`,
});

// Mapa de puntos: una retícula de puntos recortada con la silueta de la república.
// En escritorio todas las ciudades están rotuladas con líneas guía hacia los costados;
// al pasar por una, su línea se marca en verde. Monterrey es la sede.
function MapaMexico({ callouts }: { callouts: boolean }) {
  const [hover, setHover] = useState<number | null>(null);
  const viewBox = callouts ? `${-SIDE} ${TOP} ${VW} ${VH}` : mexicoViewBox;
  const id = callouts ? "mx-lg" : "mx-sm";

  return (
    <div className="relative">
      <svg viewBox={viewBox} className="w-full overflow-visible" aria-hidden>
        <defs>
          <pattern id={`${id}-dots`} width="7" height="7" patternUnits="userSpaceOnUse">
            <circle cx="3.5" cy="3.5" r="1.7" className="fill-gris-grafito/50" />
          </pattern>
          <clipPath id={`${id}-clip`}>
            {mexicoStates.map((s) => (
              <path key={s.id} d={s.path} />
            ))}
          </clipPath>
        </defs>
        <rect width={W} height={H} fill={`url(#${id}-dots)`} clipPath={`url(#${id}-clip)`} />

        {callouts &&
          presencia.cities.map((c, i) => {
            const end = lineEnd[c.label.side];
            const on = hover === i;
            return (
              <g key={c.name} className={`transition-colors duration-300 ${on ? "stroke-accent fill-accent" : "stroke-ink-muted/60 fill-ink-muted"}`}>
                <path
                  d={`M${c.x} ${c.y} V${c.label.y} H${end}`}
                  pathLength={1}
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-[1400ms] ease-[var(--ease-dipz)] group-data-[shown=true]/map:[stroke-dashoffset:0]"
                  style={{ transitionDelay: `${0.3 + i * 0.06}s` }}
                />
                <circle cx={end} cy={c.label.y} r="2.5" className="stroke-none" />
              </g>
            );
          })}

        {/* Monterrey (sede) se dibuja al final para quedar encima de San Pedro */}
        {[...presencia.cities.entries()].sort(([, a], [, b]) => Number(a.name === "Monterrey") - Number(b.name === "Monterrey")).map(([i, c]) => {
          const sede = c.name === "Monterrey";
          const on = hover === i || sede;
          return (
            <g
              key={c.name}
              onMouseEnter={callouts ? () => setHover(i) : undefined}
              onMouseLeave={callouts ? () => setHover(null) : undefined}
            >
              <circle cx={c.x} cy={c.y} r="12" className="fill-transparent" />
              {sede && <circle cx={c.x} cy={c.y} r="5" className="ping-dipz fill-accent" />}
              <circle
                cx={c.x}
                cy={c.y}
                r={on ? 5 : 4}
                className={`stroke-surface transition-all duration-300 ${on ? "fill-accent" : "fill-negro-profundo"}`}
                strokeWidth="1.5"
              />
            </g>
          );
        })}
      </svg>

      {callouts &&
        presencia.cities.map((c, i) => {
          const left = c.label.side === "left";
          const on = hover === i;
          return (
            <span
              key={c.name}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`absolute -translate-y-2.5 whitespace-nowrap ${left ? "-translate-x-full pr-3 text-right" : "pl-3"}`}
              style={pct(lineEnd[c.label.side], c.label.y)}
            >
              <span className={`block type-label uppercase transition-colors duration-300 ${on ? "text-accent" : "text-ink"}`}>
                {c.name}
              </span>
              <span className="block type-caption text-ink-muted">{c.state}</span>
            </span>
          );
        })}
    </div>
  );
}

export function Presencia() {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
        <div className="md:col-span-3">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {presencia.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {presencia.title}
          </Reveal>
        </div>
        <Reveal as="p" delay={0.2} className="mt-6 max-w-[480px] type-body-lg text-ink-muted md:col-span-3 md:col-start-4 md:mt-0">
          {presencia.paragraph}
        </Reveal>
      </div>

      {/* Escritorio: mapa al centro con todas las ciudades rotuladas */}
      <Reveal delay={0.2} className="group/map mx-auto mt-16 hidden max-w-[1040px] lg:block">
        <MapaMexico callouts />
      </Reveal>

      {/* Móvil y tableta: mapa con puntos y la lista debajo */}
      <div className="lg:hidden">
        <Reveal delay={0.2} className="mt-12">
          <MapaMexico callouts={false} />
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 border-t border-line sm:grid-cols-3">
          {presencia.cities.map((c) => (
            <li key={c.name} className="flex items-center gap-2 border-b border-line py-3 type-small text-ink">
              <span className={`size-1.5 shrink-0 rounded-pill ${c.name === "Monterrey" ? "bg-accent" : "bg-negro-profundo"}`} />
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
