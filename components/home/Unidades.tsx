import { ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { unidades } from "./content";

// Las cuatro marcas en columnas, una junto a otra: foto, marca, titular, texto, qué hace y enlace.
// Las columnas comparten las mismas alturas de foto y de reglas para leerse como un plano.
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

      <ul className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        {unidades.brands.map((b, i) => (
          <Reveal as="li" key={b.id} delay={i * 0.1} className="group flex flex-col">
            <a href={`/unidades-de-negocio#${b.id}`} tabIndex={-1} aria-hidden className="block overflow-hidden">
              <Media
                photo={b.photo}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                aspect={4 / 5}
                label={b.name}
                drawing={b.drawing}
                tone="graphite"
                className="aspect-[4/5] transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105"
              />
            </a>

            <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <h3 className="type-h3">{b.name}</h3>
              <span className="shrink-0 type-eyebrow text-ink-muted">0{i + 1}</span>
            </div>
            <p className="mt-4 type-caption tracking-[0.2em] text-ink-muted uppercase">{b.tag}</p>
            <p className="mt-4 type-body-lg">{b.title}</p>
            <p className="mt-4 type-small text-ink-muted">{b.text}</p>

            <ul className="mt-6 border-t border-line">
              {b.capabilities.map((c) => (
                <li key={c} className="border-b border-line py-2.5 type-small">
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 lg:mt-auto lg:pt-8">
              <ArrowLink href={`/unidades-de-negocio#${b.id}`} variant="dark">
                {b.link}
              </ArrowLink>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
