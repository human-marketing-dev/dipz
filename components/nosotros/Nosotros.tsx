import { Arrow, ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { criterio, grupo, hero, marcas } from "./content";

export function NosotrosHero() {
  return (
    <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro}>
      <Reveal delay={0.3} className="mt-12 md:mt-20">
        <Media photo={hero.photo} preload sizes="100vw" aspect={21 / 9} label="Piamont" drawing="landscape" className="aspect-[4/3] md:aspect-[21/9]" />
      </Reveal>
    </PageHero>
  );
}

// Tres tiempos de la historia en filas con regla; la foto acompaña fija a la izquierda.
export function Grupo() {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {grupo.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {grupo.title}
        </Reveal>
      </div>

      <div className="mt-12 md:mt-20 md:grid md:grid-cols-6 md:gap-x-6">
        <div className="hidden md:col-span-2 md:block">
          <div className="sticky top-30">
            <Media photo={grupo.photo} sizes="33vw" aspect={4 / 5} label="Copelia" drawing="tower" className="aspect-[4/5]" />
          </div>
        </div>
        <ol className="border-t border-line md:col-span-4">
          {grupo.paragraphs.map((text, i) => (
            <Reveal as="li" key={grupo.steps[i]} delay={i * 0.1} className="grid gap-4 border-b border-line py-8 md:grid-cols-4 md:gap-6 md:py-12">
              <span className="type-eyebrow text-ink-muted">0{i + 1}</span>
              <div className="md:col-span-3">
                <h3 className="type-h3">{grupo.steps[i]}</h3>
                <p className="mt-4 max-w-[560px] type-body-lg text-ink-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Índice de reglas: número, regla en grande y su explicación en el último tercio.
export function Criterio() {
  return (
    <section data-nav="sand" className="frame bg-surface-alt py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {criterio.eyebrow}
        </Reveal>
        <div className="md:col-span-4">
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:mt-0 md:type-h1">
            {criterio.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[480px] type-body-lg text-ink-muted">
            {criterio.intro}
          </Reveal>
        </div>
      </div>

      <ol className="mt-12 border-t border-line md:mt-20">
        {criterio.rules.map((r, i) => (
          <Reveal as="li" key={r.name} delay={i * 0.08} className="group grid gap-4 border-b border-line py-8 md:min-h-[176px] md:grid-cols-6 md:items-center md:gap-6 md:py-10">
            <span className="type-eyebrow text-ink-muted">0{i + 1}</span>
            <h3 className="type-h2 md:col-span-3">{r.name}</h3>
            <p className="max-w-[420px] type-body text-ink-muted md:col-span-2">{r.text}</p>
          </Reveal>
        ))}
      </ol>
      <p className="mt-6 type-caption text-ink-muted">Criterios sujetos a validación</p>
    </section>
  );
}

export function Marcas() {
  return (
    <section data-nav="dark" className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-arena md:col-span-2">
          {marcas.eyebrow}
        </Reveal>
        <div className="md:col-span-4">
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:mt-0 md:type-h1">
            {marcas.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[560px] type-body-lg text-arena">
            {marcas.paragraph}
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-6">
        {marcas.groups.map((g, gi) => (
          <Reveal key={g.role} delay={0.1 + gi * 0.1}>
            <p className="type-caption tracking-[0.2em] text-arena uppercase">{g.role}</p>
            <ul className="mt-4 border-t border-blanco-calido/25">
              {g.brands.map((b) => (
                <li key={b.id} className="border-b border-blanco-calido/25">
                  {/* Al pasar, la fila se llena y el nombre se recorre, como en el pie */}
                  <a
                    href={`/unidades-de-negocio#${b.id}`}
                    className="group flex items-center justify-between gap-6 px-2 py-6 transition-[background-color,color,padding] duration-500 hover:bg-blanco-calido hover:pl-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <span>
                      <span className="block type-h3 md:type-h2">{b.name}</span>
                      <span className="mt-1 block type-caption tracking-[0.2em] text-arena uppercase group-hover:text-ink-muted">{b.tag}</span>
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-pill border border-blanco-calido/60 transition-colors duration-500 group-hover:border-negro-profundo group-hover:bg-negro-profundo group-hover:text-ink-inverse">
                      <Arrow className="arrow-nudge" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 md:mt-16">
        <ArrowLink href={marcas.link.href} variant="light">
          {marcas.link.label}
        </ArrowLink>
      </div>
    </section>
  );
}
