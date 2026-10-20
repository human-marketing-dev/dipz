import { Reveal } from "@/components/ui/Reveal";
import { presencia } from "./content";
import { mexicoStates, mexicoViewBox } from "./mexico-map";

// Mapa de línea fina de la república con etiquetas en píldora sobre cada ciudad.
function MapaMexico() {
  return (
    <div className="relative">
      <svg viewBox={mexicoViewBox} className="w-full" aria-hidden>
        {mexicoStates.map((s) => (
          <path
            key={s.id}
            d={s.path}
            className={s.id === "nle" ? "fill-arena stroke-ink" : "fill-transparent stroke-ink-muted/60"}
            strokeWidth="0.75"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {presencia.cities.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="4" className="ping-dipz fill-accent" />
            <circle cx={c.x} cy={c.y} r="4" className="fill-accent" />
          </g>
        ))}
      </svg>

      {/* Etiquetas en HTML para que conserven su tamaño a cualquier ancho */}
      {presencia.cities.map((c) => (
        <span
          key={c.name}
          className="absolute flex -translate-x-1/2 -translate-y-[calc(100%+14px)] items-center gap-2 rounded-pill bg-negro-profundo py-1.5 pr-4 pl-3 type-caption whitespace-nowrap text-ink-inverse"
          style={{ left: `${(c.x / 793) * 100}%`, top: `${(c.y / 498) * 100}%` }}
        >
          <span className="size-1.5 rounded-pill bg-accent" />
          {c.name}
        </span>
      ))}
    </div>
  );
}

export function Presencia() {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:flex md:min-h-[100dvh] md:items-center md:py-30">
      <div className="w-full md:grid md:grid-cols-6 md:gap-x-6">
        <div className="md:col-span-2">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {presencia.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {presencia.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-ink-muted">
            {presencia.paragraph}
          </Reveal>
          <ul className="mt-10 border-t border-line">
            {presencia.cities.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between border-b border-line py-3">
                <span className="type-body">{c.name}</span>
                <span className="type-caption text-ink-muted">{c.state}</span>
              </li>
            ))}
            <li className="py-3 type-caption text-ink-muted">{presencia.pending}</li>
          </ul>
        </div>
        <Reveal delay={0.2} className="mt-12 md:col-span-4 md:col-start-3 md:mt-0 md:pl-10">
          <MapaMexico />
        </Reveal>
      </div>
    </section>
  );
}
