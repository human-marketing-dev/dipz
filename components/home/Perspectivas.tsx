"use client";

import { useRef, useState } from "react";
import { ArrowLink, Arrow } from "@/components/ui/ArrowLink";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { perspectivas } from "./content";

export function Perspectivas() {
  const listRef = useRef<HTMLUListElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section id="perspectivas" data-nav="dark" className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <div className="md:col-span-2 md:border-r md:border-blanco-calido/20 md:pr-10">
          <Reveal as="p" className="type-eyebrow text-arena">
            {perspectivas.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2">
            {perspectivas.title}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 type-body text-arena">
            {perspectivas.intro}
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <ArrowLink href={perspectivas.link.href} variant="light">
              {perspectivas.link.label}
            </ArrowLink>
          </Reveal>
        </div>

        <ul
          ref={listRef}
          className="relative mt-12 border-t border-blanco-calido/20 md:col-span-4 md:mt-0"
          onMouseMove={(e) => {
            const r = listRef.current!.getBoundingClientRect();
            setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
          }}
          onMouseLeave={() => setHover(null)}
        >
          {perspectivas.posts.map((p, i) => (
            <li key={p.title} className="border-b border-blanco-calido/20" onMouseEnter={() => setHover(i)}>
              <a href="#" className="group grid gap-4 py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:grid-cols-4 md:gap-6 md:py-10">
                <span className="type-eyebrow text-arena md:col-span-1">
                  {p.date}
                  <span className="mt-2 block text-gris-grafito">{p.category}</span>
                </span>
                <span className="type-h3 transition-transform duration-500 group-hover:translate-x-2 md:col-span-2">{p.title}</span>
                <span className="hidden justify-self-end md:block">
                  <span className="grid size-10 place-items-center rounded-pill border border-blanco-calido/40 transition-colors duration-500 group-hover:border-blanco-calido group-hover:bg-blanco-calido group-hover:text-ink">
                    <Arrow className="arrow-nudge" />
                  </span>
                </span>
              </a>
            </li>
          ))}

          {/* Miniatura que sigue al cursor */}
          <div
            aria-hidden
            className={`pointer-events-none absolute top-0 left-0 hidden w-64 transition-opacity duration-300 md:block ${hover === null ? "opacity-0" : "opacity-100"}`}
            style={{ transform: `translate(${pos.x + 24}px, ${pos.y - 80}px)` }}
          >
            {perspectivas.posts.map((p, i) => (
              <Placeholder
                key={p.title}
                label={p.category}
                drawing={p.drawing}
                tone="sand"
                showCaption={false}
                className={`aspect-[4/3] ${hover === i ? "block" : "hidden"}`}
              />
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}
