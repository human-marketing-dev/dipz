import { Arrow, ArrowLink } from "@/components/ui/ArrowLink";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { desarrollos } from "./content";

export function Desarrollos() {
  const total = desarrollos.projects.length;
  return (
    <section id="desarrollos" data-nav="dark" className="bg-surface-inverse text-ink-inverse md:grid md:grid-cols-[calc(var(--margin)+(100vw-2*var(--margin)+24px)/3)_1fr]">
      {/* Introducción fija, del margen al riel 1/3 */}
      <div className="pl-[var(--margin)] pr-6 pt-16 pb-12 md:sticky md:top-0 md:flex md:h-[100dvh] md:flex-col md:justify-between md:pt-40 md:pb-16">
        <div>
          <Reveal as="p" className="type-eyebrow text-arena">
            {desarrollos.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {desarrollos.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[360px] type-body-lg text-arena">
            {desarrollos.intro}
          </Reveal>
        </div>
        <Reveal delay={0.3} className="mt-10">
          <ArrowLink href={desarrollos.link.href} variant="light">
            {desarrollos.link.label}
          </ArrowLink>
        </Reveal>
      </div>

      {/* Paneles a sangre que se apilan al hacer scroll */}
      <div>
        {desarrollos.projects.map((p, i) => (
          <article
            key={p.id}
            id={p.id}
            className="group relative flex h-[88dvh] items-end overflow-hidden bg-negro-profundo md:sticky md:top-0 md:h-[100dvh]"
          >
            <a href="#" className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:-outline-offset-8 focus-visible:outline-focus" aria-label={`Ver ${p.name}`} />
            <div className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-dipz)] group-hover:scale-105">
              <Placeholder label={`Fachada de ${p.name}`} drawing={p.drawing} tone={i === 1 ? "dark" : "graphite"} className="size-full" captionClassName="top-24 right-6 md:right-12" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-negro-profundo/90 via-negro-profundo/35 to-negro-profundo/10 transition-colors duration-700 group-hover:bg-negro-profundo/30" />

            <div className="relative w-full px-6 pb-10 md:px-12 md:pb-16">
              <div className="flex items-center justify-between border-b border-blanco-calido/25 pb-4">
                <p className="type-eyebrow text-arena">{p.location}</p>
                <p className="type-eyebrow text-arena">
                  0{i + 1} / 0{total}
                </p>
              </div>
              <h3 className="mt-8 type-display-xl">{p.name}</h3>
              <div className="mt-8 gap-6 md:grid md:grid-cols-2 md:items-end">
                <p className="max-w-[480px] type-body text-arena">{p.text}</p>
                <div>
                  <dl className="grid grid-cols-3 gap-4 border-t border-blanco-calido/25 pt-4">
                    {p.facts.map((f) => (
                      <div key={f.label}>
                        <dt className="type-caption tracking-[0.12em] text-arena uppercase">{f.label}</dt>
                        <dd className="mt-1 type-small text-blanco-calido">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="relative z-20 mt-6 inline-flex items-center gap-4 rounded-pill bg-blanco-calido py-2 pr-2 pl-6 type-label text-ink transition-colors duration-500 group-hover:bg-accent group-hover:text-ink-inverse">
                    Ver proyecto
                    <span className="grid size-10 place-items-center rounded-pill bg-negro-profundo text-ink-inverse">
                      <Arrow className="arrow-nudge" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
