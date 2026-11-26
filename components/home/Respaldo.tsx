import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { getSitio } from "@/lib/contenido";

export async function Respaldo() {
  const { respaldo } = (await getSitio()).inicio;
  return (
    <section data-nav="light" aria-label="Respaldo" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <p className="type-eyebrow text-ink-muted md:col-span-2">{respaldo.eyebrow}</p>
        {respaldo.nota && <p className="mt-4 type-caption text-ink-muted md:col-span-4 md:mt-0 md:text-right">{respaldo.nota}</p>}
      </div>
      <dl className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
        {respaldo.stats.map((s, i) => (
          <Reveal key={s.unit} delay={i * 0.1} className="border-t border-line pt-5">
            <dt className="sr-only">{s.text}</dt>
            <dd>
              <span className="flex items-baseline gap-2">
                <span className="type-h2 md:type-h1">
                  {s.prefix}
                  <CountUp value={s.value} />
                </span>
                <span className="type-body-lg text-ink-muted">{s.unit}</span>
              </span>
              <span className="mt-3 block max-w-[220px] type-small text-ink-muted">{s.text}</span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
