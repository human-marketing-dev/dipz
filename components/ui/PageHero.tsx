import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Encabezado de las páginas internas: eyebrow y titular del margen al riel 2/3, entradilla en el
// último tercio alineada abajo. Es el mismo trazo de /desarrollos y /contacto.
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section data-nav="light" className="frame bg-surface pt-36 pb-12 md:pt-48 md:pb-20">
      <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
        <div className="md:col-span-4">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {eyebrow}
          </Reveal>
          <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
            {title}
          </Reveal>
        </div>
        <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-ink-muted md:col-span-2 md:mt-0">
          {intro}
        </Reveal>
      </div>
      {children}
    </section>
  );
}
