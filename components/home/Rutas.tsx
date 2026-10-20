import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { rutas } from "./content";

export function Rutas() {
  return (
    <section id="rutas" data-nav="light" className="frame border-t border-line/30 bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {rutas.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {rutas.title}
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3">
        {rutas.cards.map((c, i) => (
          <Reveal as="li" key={c.n} delay={i * 0.12}>
            {/* La tarjeta se invierte a negro-profundo al pasar el cursor */}
            <a
              href="#contacto"
              className="group flex h-full flex-col border border-line bg-surface transition-colors duration-500 hover:bg-negro-profundo hover:text-ink-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <div className="overflow-hidden">
                <Media
                  photo={c.photo}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  label={c.name}
                  drawing={c.drawing}
                  tone="sand"
                  showCaption={false}
                  className="aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <span className="type-eyebrow text-ink-muted transition-colors duration-500 group-hover:text-arena">{c.n}</span>
                <h3 className="mt-6 type-h2">{c.name}</h3>
                <p className="mt-4 max-w-[360px] flex-1 type-body text-ink-muted transition-colors duration-500 group-hover:text-arena">{c.text}</p>
                <span className="mt-10 flex items-center justify-between border-t border-current/20 pt-5 type-label">
                  {c.link}
                  <span className="grid size-10 place-items-center rounded-pill border border-current transition-colors duration-500 group-hover:border-accent group-hover:bg-accent">
                    <Arrow className="arrow-nudge" />
                  </span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
