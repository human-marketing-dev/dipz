"use client";

import { useEffect, useState } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { desarrollos, hero } from "./content";

const SLIDE_MS = 6000;

export function Hero() {
  const projects = desarrollos.projects;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % projects.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [active, projects.length]);

  return (
    <section
      id="inicio"
      data-nav="dark"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-surface-inverse text-ink-inverse md:min-h-[760px]"
    >
      {/* Fondo: los tres desarrollos a sangre, con fundido cruzado */}
      {projects.map((p, i) => (
        <div
          key={p.id}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Media photo={p.heroPhoto} preload={i === 0} label={`Render de ${p.name}`} drawing={p.drawing} tone="graphite" className="size-full" showCaption={false} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-negro-profundo/90 via-negro-profundo/55 to-negro-profundo/35" />

      <div className="frame relative pt-32 pb-8 md:pb-10">
        <div className="md:grid md:grid-cols-6 md:gap-x-6">
          <div className="md:col-span-5">
            <Reveal as="p" className="type-eyebrow text-arena">
              {hero.eyebrow}
            </Reveal>
            <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="mt-8 md:mt-10 md:grid md:grid-cols-6 md:items-end md:gap-x-6">
          <Reveal delay={0.25} className="md:col-span-2">
            <p className="max-w-[420px] type-body-lg text-arena">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={0.35} className="mt-8 flex flex-wrap gap-3 md:col-span-4 md:mt-0 md:justify-end">
            <ArrowLink href={hero.primary.href}>{hero.primary.label}</ArrowLink>
            <ArrowLink href={hero.secondary.href} variant="light">
              {hero.secondary.label}
            </ArrowLink>
          </Reveal>
        </div>

        {/* Los desarrollos, visibles desde el primer pantallazo */}
        <Reveal delay={0.5} className="mt-10 border-t border-blanco-calido/25 pt-5 md:mt-14 md:grid md:grid-cols-6 md:gap-x-6">
          <p className="hidden type-eyebrow text-arena md:col-span-2 md:block">
            Desarrollos activos
            <span className="mt-2 block text-blanco-calido">
              0{active + 1} <span className="text-gris-grafito">/ 0{projects.length}</span>
            </span>
          </p>
          <ul className="grid grid-cols-3 gap-3 md:col-span-4 md:gap-6">
            {projects.map((p, i) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  <span className="relative block h-0.5 overflow-hidden bg-blanco-calido/20">
                    {i === active && (
                      <span
                        key={active}
                        className="progress-dipz absolute inset-y-0 left-0 w-full origin-left bg-blanco-calido"
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                      />
                    )}
                  </span>
                  <span className="mt-4 hidden overflow-hidden md:block">
                    <Media
                      photo={p.heroPhoto}
                      sizes="25vw"
                      label={p.name}
                      drawing={p.drawing}
                      tone="dark"
                      showCaption={false}
                      className="aspect-[16/7] transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-3 block type-caption tracking-[0.2em] text-arena uppercase">{p.zone}</span>
                  <span className={`mt-1 block type-label transition-colors duration-500 md:type-h3 ${i === active ? "text-blanco-calido" : "text-arena"}`}>
                    {p.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
