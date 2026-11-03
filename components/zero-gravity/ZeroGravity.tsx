import { Arrow, ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWords } from "@/components/ui/ScrollWords";
import { caras, enCadaUnidad, hero, loQueNoEs } from "./content";

// Héroe a pantalla completa sobre el rooftop de Piamont: el cielo abierto es la imagen de la idea.
export function ZeroGravityHero() {
  return (
    <section
      data-nav="dark"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-surface-inverse text-ink-inverse md:min-h-[760px]"
    >
      <div className="absolute inset-0">
        <Media photo={hero.photo} preload label="Rooftop de Piamont" drawing="landscape" tone="graphite" className="size-full" showCaption={false} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro-profundo/90 via-negro-profundo/40 to-negro-profundo/20" />

      <div className="frame relative pt-32 pb-10 md:pb-16">
        <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
          <div className="md:col-span-4">
            <Reveal as="p" className="type-eyebrow text-arena">
              {hero.eyebrow}
            </Reveal>
            <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
              {hero.title}
            </Reveal>
          </div>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-arena md:col-span-2 md:mt-0">
            {hero.intro}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Dos columnas que se leen como un traspaso: a la izquierda lo que hacemos, a la derecha lo que
// recibe la persona. La flecha marca el cambio de lado.
export function DosCaras() {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {caras.eyebrow}
        </Reveal>
        <div className="md:col-span-4">
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:mt-0 md:type-h1">
            {caras.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-8 max-w-[720px] type-quote text-ink-muted">
            {caras.quote}
          </Reveal>
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <div className="hidden border-b border-line pb-4 md:grid md:grid-cols-6 md:gap-x-6">
          <p className="type-caption tracking-[0.2em] text-ink-muted uppercase md:col-span-3">{caras.headers[0]}</p>
          <p className="type-caption tracking-[0.2em] text-ink-muted uppercase md:col-span-3">{caras.headers[1]}</p>
        </div>
        <ol className="border-t border-line md:border-t-0">
          {caras.rows.map(([asumimos, recibes], i) => (
            <Reveal as="li" key={asumimos} delay={i * 0.08} className="group border-b border-line py-8 md:grid md:grid-cols-6 md:gap-x-6 md:py-10">
              <div className="md:col-span-3 md:flex md:items-start md:justify-between md:gap-6">
                <div>
                  <p className="type-caption tracking-[0.2em] text-ink-muted uppercase md:hidden">{caras.headers[0]}</p>
                  <p className="mt-2 max-w-[480px] type-h3 text-ink-muted md:mt-0">{asumimos}</p>
                </div>
                <span
                  aria-hidden
                  className="my-5 grid size-10 shrink-0 place-items-center rounded-pill border border-line transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink-inverse md:my-0"
                >
                  <Arrow className="rotate-90 md:rotate-0" />
                </span>
              </div>
              <div className="md:col-span-3">
                <p className="type-caption tracking-[0.2em] text-ink-muted uppercase md:hidden">{caras.headers[1]}</p>
                <p className="mt-2 type-h3 md:mt-0">{recibes}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EnCadaUnidad() {
  return (
    <section data-nav="sand" className="frame bg-surface-alt py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {enCadaUnidad.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {enCadaUnidad.title}
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-6">
        {enCadaUnidad.units.map((u, i) => (
          <Reveal as="li" key={u.id} delay={i * 0.1} className="flex flex-col border-t border-line pt-5">
            <span className="type-eyebrow text-ink-muted">{u.tag}</span>
            <a href={`/unidades-de-negocio#${u.id}`} className="mt-6 type-h3 transition-colors duration-500 hover:text-accent">
              {u.name}
            </a>
            <dl className="mt-8 flex flex-col gap-5">
              <div>
                <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">Asumimos</dt>
                <dd className="mt-1 type-body text-ink-muted md:min-h-13">{u.asumimos}</dd>
              </div>
              <div className="border-t border-line pt-5">
                <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">Recibes</dt>
                <dd className="mt-1 type-body">{u.recibes}</dd>
              </div>
            </dl>
          </Reveal>
        ))}
      </ul>

      <div className="mt-12 md:mt-16">
        <ArrowLink href={enCadaUnidad.link.href} variant="dark">
          {enCadaUnidad.link.label}
        </ArrowLink>
      </div>
    </section>
  );
}

export function LoQueNoEs() {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {loQueNoEs.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {loQueNoEs.title}
        </Reveal>
      </div>
      <ScrollWords text={loQueNoEs.paragraph} className="mt-10 type-statement md:mt-16 md:max-w-[1180px]" />
    </section>
  );
}
