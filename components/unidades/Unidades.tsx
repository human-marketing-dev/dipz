import { Arrow, ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { conexion, hero, unidades, type Unidad } from "./content";

const pad = (n: number) => String(n).padStart(2, "0");

// Héroe con el índice de las cuatro marcas: cada fila baja a su sección.
export function UnidadesHero() {
  return (
    <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro}>
      <Reveal delay={0.3}>
        <ol className="mt-12 border-t border-line md:mt-20">
          {unidades.map((u, i) => (
            <li key={u.id} className="border-b border-line">
              <a
                href={`#${u.id}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:grid-cols-6 md:gap-6 md:py-6"
              >
                <span className="type-eyebrow text-ink-muted">{pad(i + 1)}</span>
                <span className="type-h3 transition-colors duration-500 md:col-span-3 md:type-h2 md:text-ink-muted md:group-hover:text-ink">{u.name}</span>
                <span className="hidden type-caption tracking-[0.2em] text-ink-muted uppercase md:block">{u.tag}</span>
                <span className="grid size-10 place-items-center justify-self-end rounded-pill border border-line transition-colors duration-500 group-hover:border-negro-profundo group-hover:bg-negro-profundo group-hover:text-ink-inverse">
                  <Arrow className="rotate-90" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </PageHero>
  );
}

// Cada marca en su sección: foto en la mitad y ficha en la otra; el lado alterna para que la
// página se lea como un recorrido y no como una lista de tarjetas.
export function UnidadSection({ u, n }: { u: Unidad; n: number }) {
  const alt = n % 2 === 1;
  return (
    <section
      id={u.id}
      data-nav={alt ? "sand" : "light"}
      className={`frame scroll-mt-20 py-16 md:py-30 ${alt ? "bg-surface-alt" : "bg-surface"}`}
    >
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal className={`md:sticky md:top-30 md:col-span-3 md:self-start ${alt ? "md:order-2" : ""}`}>
          <Media
            photo={u.photo}
            sizes="(min-width: 768px) 50vw, 100vw"
            aspect={4 / 5}
            label={u.name}
            drawing={u.drawing}
            tone="graphite"
            className="aspect-[4/3] md:aspect-[4/5]"
          />
        </Reveal>

        <div className={`mt-10 flex flex-col md:col-span-3 md:mt-0 ${alt ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
          <Reveal className="flex items-center justify-between border-b border-line pb-4">
            <span className="type-eyebrow text-ink-muted">{u.name}</span>
            <span className="type-eyebrow text-ink-muted">
              {pad(n)} / {pad(unidades.length)}
            </span>
          </Reveal>
          <Reveal as="p" delay={0.05} className="mt-8 type-caption tracking-[0.2em] text-ink-muted uppercase">
            {u.tag}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-4 type-h2 md:type-h1">
            {u.title}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex max-w-[520px] flex-col gap-4">
            {u.paragraphs.map((p) => (
              <p key={p} className="type-body-lg text-ink-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-10 border-t border-line">
              <div className="border-b border-line py-5">
                <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">Qué hacemos</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {u.capabilities.map((c) => (
                    <span key={c} className="rounded-pill border border-line px-4 py-1.5 type-small">
                      {c}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="border-b border-line py-5 md:grid md:grid-cols-3 md:gap-6">
                <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">Para quién</dt>
                <dd className="mt-2 type-small md:col-span-2 md:mt-0">{u.forWhom}</dd>
              </div>
            </dl>
          </Reveal>

          {u.note && (
            <Reveal as="p" delay={0.35} className="mt-6 max-w-[520px] type-small text-ink-muted">
              {u.note}
            </Reveal>
          )}

          <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ArrowLink href={u.cta.href} variant="dark">
              {u.cta.label}
            </ArrowLink>
            {u.pending && <span className="type-caption text-ink-muted">{u.pending}</span>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Diagrama: DIPZ arriba como criterio común, las dos ramas debajo. Líneas de 1px, como un plano.
export function Conexion() {
  const byId = Object.fromEntries(unidades.map((u) => [u.id, u]));
  const line = "bg-blanco-calido/30";
  return (
    <section data-nav="dark" className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-arena md:col-span-2">
          {conexion.eyebrow}
        </Reveal>
        <div className="md:col-span-4">
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:mt-0 md:type-h1">
            {conexion.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[560px] type-body-lg text-arena">
            {conexion.paragraph}
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.3} className="mt-16 md:mt-24">
        <div className="mx-auto w-fit rounded-pill border border-blanco-calido/60 px-10 py-5 text-center">
          <p className="type-h2">{conexion.root.name}</p>
          <p className="mt-1 type-caption tracking-[0.2em] text-arena uppercase">{conexion.root.role}</p>
        </div>
        <div className={`mx-auto h-12 w-px ${line}`} aria-hidden />
        {/* Travesaño entre los centros de las dos ramas */}
        <div className="relative hidden md:block" aria-hidden>
          <div className={`absolute top-0 right-[calc(25%-6px)] left-[calc(25%-6px)] h-px ${line}`} />
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-6">
          {conexion.groups.map((g) => (
            <div key={g.role}>
              <div className={`mx-auto hidden h-12 w-px md:block ${line}`} aria-hidden />
              <p className="text-center type-caption tracking-[0.2em] text-arena uppercase">{g.role}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.ids.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="flex h-full flex-col justify-between gap-4 rounded-sm sm:gap-8 border border-blanco-calido/30 p-5 transition-colors duration-500 hover:bg-blanco-calido hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:p-6"
                    >
                      <span className="type-caption tracking-[0.2em] text-arena uppercase">{byId[id].tag}</span>
                      <span className="type-h3">{byId[id].name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
