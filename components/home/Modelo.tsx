import { ArrowLink } from "@/components/ui/ArrowLink";
import { DrawLine } from "@/components/ui/DrawLine";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { modelo } from "./content";

export function Modelo() {
  return (
    <>
      <section data-nav="light" className="frame bg-surface py-16 md:py-30">
        <div className="md:grid md:grid-cols-6 md:gap-x-6">
          <div className="md:col-span-3">
            <Reveal as="p" className="type-eyebrow text-ink-muted">
              {modelo.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
              {modelo.title}
            </Reveal>
          </div>
          {/* Texto desde el riel 2/3, alineado arriba con el título */}
          <Reveal delay={0.2} className="mt-6 md:col-span-2 md:col-start-5 md:mt-10">
            <p className="type-body-lg text-ink-muted">{modelo.paragraph}</p>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-30">
          <DrawLine className="absolute top-[15px] right-0 left-0 hidden md:block" />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {modelo.steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.12} className="relative border-l border-line pl-5 md:border-none md:pl-0">
                <span className="relative z-10 hidden size-[31px] place-items-center rounded-pill border border-line bg-surface md:grid">
                  <span className="size-1.5 rounded-pill bg-negro-profundo" />
                </span>
                <span className="block type-eyebrow text-ink-muted md:mt-8">{s.n}</span>
                <h3 className="mt-4 type-h3">{s.name}</h3>
                <p className="mt-3 max-w-[280px] type-body text-ink-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Caso destacado a sangre: la vida dentro (en 06 va la fachada) */}
      <section data-nav="dark" className="relative flex min-h-[100dvh] items-end overflow-hidden bg-surface-inverse text-ink-inverse">
        <div className="absolute inset-0">
          <Media photo={modelo.caso.photo} label="Interior en operación, Amelia Santa Lucía" drawing="interior" tone="graphite" className="size-full" />
        </div>
        <div className="absolute inset-0 bg-negro-profundo/30 bg-gradient-to-t from-negro-profundo/90 via-negro-profundo/45 to-transparent" />
        <div className="frame relative w-full pb-12 md:grid md:grid-cols-6 md:items-end md:gap-x-6 md:pb-20">
          <div className="md:col-span-3">
            <Reveal as="p" className="type-eyebrow text-arena">
              {modelo.caso.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={0.1} className="mt-6 type-display-xl">
              {modelo.caso.title}
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mt-8 md:col-span-2 md:col-start-5 md:mt-0">
            <p className="type-body-lg text-arena">{modelo.caso.text}</p>
            <div className="mt-8">
              <ArrowLink href={modelo.caso.link.href} variant="light">
                {modelo.caso.link.label}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
