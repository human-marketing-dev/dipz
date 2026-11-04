import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { unidades } from "./content";

// Las cuatro marcas en cards de foto, en una retícula de 2 × 2. La foto llena la card; encima, la
// marca y su titular. Al pasar el mouse (o con foco) la foto se acerca y sube el texto con lo que
// hace la marca. En móvil, sin hover, el texto se ve completo.
export function Unidades() {
  return (
    <section id="marcas" data-nav="sand" className="frame bg-surface-alt py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {unidades.eyebrow}
        </Reveal>
        <div className="md:col-span-4">
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:mt-0 md:type-h1">
            {unidades.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[480px] type-body-lg text-ink-muted">
            {unidades.intro}
          </Reveal>
        </div>
      </div>

      <ul className="mt-12 grid gap-6 md:mt-20 md:grid-cols-2">
        {unidades.brands.map((b, i) => (
          <Reveal as="li" key={b.id} delay={(i % 2) * 0.1}>
            <a
              href={`/unidades-de-negocio#${b.id}`}
              className="group relative isolate flex min-h-[520px] flex-col overflow-hidden bg-negro-profundo text-ink-inverse focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:aspect-[4/3] md:min-h-0"
            >
              <div className="absolute inset-0 -z-10 transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105 group-focus-visible:scale-105">
                <Media
                  photo={b.photo}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  aspect={4 / 3}
                  label={b.name}
                  drawing={b.drawing}
                  tone="graphite"
                  showCaption={false}
                  className="size-full"
                />
              </div>
              {/* Velo para que el texto se lea sobre cualquier foto; se oscurece al abrir la card */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro-profundo/95 via-negro-profundo/75 to-negro-profundo/20 md:from-negro-profundo/90 md:via-negro-profundo/45 md:to-negro-profundo/10 transition-colors duration-700 md:group-hover:bg-negro-profundo/35" />

              {/* Velo superior para que la etiqueta se lea sobre cielos claros */}
              <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-negro-profundo/55 to-transparent" />

              <div className="flex items-center justify-between p-6 md:p-8">
                <span className="rounded-pill border border-blanco-calido/60 px-3 py-1 type-caption tracking-[0.2em] uppercase">{b.tag}</span>
                <span className="type-eyebrow text-arena">
                  0{i + 1} / 0{unidades.brands.length}
                </span>
              </div>

              <div className="mt-auto p-6 md:p-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="type-h2">{b.name}</h3>
                    <p className="mt-2 type-body-lg text-arena">{b.title}</p>
                  </div>
                  <span className="sr-only">{b.link}</span>
                  <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-pill bg-blanco-calido text-ink transition-colors duration-500 group-hover:bg-accent group-hover:text-ink-inverse">
                    <Arrow className="arrow-nudge" />
                  </span>
                </div>

                {/* Detalle: siempre visible en móvil; en escritorio se despliega con hover o foco */}
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-dipz)] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="mt-5 border-t border-blanco-calido/25 pt-5 transition-opacity duration-700 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                      <p className="max-w-[520px] type-small text-blanco-calido/85">{b.text}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {b.capabilities.map((c) => (
                          <li key={c} className="rounded-pill border border-blanco-calido/40 px-3 py-1 type-caption">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
