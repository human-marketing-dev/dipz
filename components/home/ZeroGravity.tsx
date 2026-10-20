import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWords } from "@/components/ui/ScrollWords";
import { zeroGravity as zg } from "./content";

// Isométrico de línea: la torre suspendida sobre su huella. "Nosotros cargamos el peso, tú ganas altura."
function FloatingTower() {
  const floors = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg viewBox="0 0 320 420" fill="none" stroke="currentColor" strokeWidth="1" className="w-full max-w-[320px] text-ink" aria-hidden>
      {/* Huella en el terreno */}
      <path d="M160 360 260 302 160 244 60 302Z" className="text-ink-muted" stroke="currentColor" strokeDasharray="3 4" />
      {/* Líneas de altura */}
      <path d="M60 302V230M160 360V288M260 302V230" className="text-ink-muted" stroke="currentColor" strokeDasharray="3 4" />
      {/* Volumen */}
      <path d="M160 288 260 230V60L160 2 60 60v170Z" />
      <path d="M60 60 160 118 260 60M160 118v170" />
      {floors.map((f) => (
        <g key={f}>
          <path d={`M60 ${78 + f * 17} 160 ${136 + f * 17} 260 ${78 + f * 17}`} />
        </g>
      ))}
      <path d="M110 89v170M210 89v170" />
    </svg>
  );
}

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

      {/* Declaración en Bodoni, sobre el patrón del monograma (una vez por página) */}
      <div className="relative mt-20 md:mt-40 md:grid md:grid-cols-6 md:gap-x-6">
        <Image
          src="/brand/dipz-patron-monograma.png"
          alt=""
          width={8000}
          height={4500}
          className="pointer-events-none absolute -top-24 left-1/3 hidden w-2/3 opacity-50 mix-blend-multiply md:block"
        />
        <Reveal className="relative hidden md:col-span-2 md:block">
          <FloatingTower />
        </Reveal>
        <Reveal delay={0.1} className="relative md:col-span-4 md:self-end">
          <blockquote className="type-quote text-ink md:max-w-[640px]">
            <span className="block">Nosotros cargamos el peso.</span>
            <span className="block text-accent">Tú ganas altura.</span>
          </blockquote>
        </Reveal>
      </div>

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
