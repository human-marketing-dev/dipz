import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWords } from "@/components/ui/ScrollWords";
import { zeroGravity as zg } from "./content";

export function ZeroGravity() {
  return (
    <section id="zero-gravity" data-nav="light" className="frame relative overflow-hidden bg-surface pt-16 pb-16 md:pt-30 md:pb-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {zg.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-display-xl md:col-span-4 md:mt-0">
          {zg.title}
        </Reveal>
      </div>

      <ScrollWords text={zg.paragraph} className="mt-16 type-statement md:mt-40 md:max-w-[1180px]" />

      <div className="mt-20 md:mt-30">
        <p className="type-eyebrow text-ink-muted">{zg.stagesTitle}</p>
        <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-6">
          {zg.stages.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.12} className="border-t border-line pt-5">
              <span className="type-eyebrow text-ink-muted">{s.n}</span>
              <h3 className="mt-6 type-h3">{s.name}</h3>
              <p className="mt-3 max-w-[360px] type-body text-ink-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12">
          <ArrowLink href={zg.link.href} variant="text">
            {zg.link.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
