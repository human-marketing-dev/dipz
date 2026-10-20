"use client";

import { useState } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { unidades } from "./content";

type Brand = (typeof unidades.brands)[number];

function BrandBody({ b }: { b: Brand }) {
  return (
    <>
      <p className="type-eyebrow text-ink-muted">{b.tag}</p>
      <h3 className="mt-4 type-h2 md:max-w-[560px]">{b.title}</h3>
      <p className="mt-5 max-w-[480px] type-body text-ink-muted">{b.text}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {b.capabilities.map((c) => (
          <li key={c} className="rounded-pill border border-line px-4 py-1.5 type-small">
            {c}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ArrowLink href="#" variant="dark">
          {b.link}
        </ArrowLink>
      </div>
    </>
  );
}

export function Unidades() {
  const [active, setActive] = useState(0);
  const brands = unidades.brands;

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

      <div className="mt-12 border-t border-line md:mt-20 md:grid md:grid-cols-6 md:gap-x-6">
        {/* Pestañas verticales del margen al riel 1/3 */}
        <div role="tablist" aria-orientation="vertical" className="md:col-span-2 md:border-r md:border-line md:pr-6">
          {brands.map((b, i) => (
            <div key={b.name} className="border-b border-line">
              <button
                type="button"
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === active}
                aria-controls={`panel-${i}`}
                onClick={() => setActive(i)}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:py-6"
              >
                <span>
                  <span className={`block type-h3 transition-colors duration-500 ${i === active ? "text-ink" : "text-ink-muted group-hover:text-ink"}`}>
                    {b.name}
                  </span>
                  <span className="mt-1 block type-caption tracking-[0.2em] text-ink-muted uppercase">{b.tag}</span>
                </span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-pill border border-line transition-colors duration-500 ${i === active ? "bg-negro-profundo text-ink-inverse" : "text-ink"}`}
                  aria-hidden
                >
                  <span className="type-label">{i === active ? "–" : "+"}</span>
                </span>
              </button>
              {/* Móvil: acordeón */}
              {i === active && (
                <div className="pb-8 md:hidden">
                  <Placeholder label={b.name} drawing={b.drawing} tone="graphite" className="mb-6 aspect-[4/3]" />
                  <BrandBody b={b} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Escritorio: contenido del riel 1/3 al margen, con fundido cruzado */}
        <div className="relative hidden md:col-span-4 md:block md:pt-10">
          {brands.map((b, i) => (
            <div
              key={b.name}
              role="tabpanel"
              id={`panel-${i}`}
              aria-labelledby={`tab-${i}`}
              aria-hidden={i !== active}
              className={`grid grid-cols-2 gap-x-6 transition-opacity duration-700 ${i === active ? "relative opacity-100" : "pointer-events-none absolute inset-x-0 top-10 opacity-0"}`}
            >
              <Placeholder label={b.name} drawing={b.drawing} tone="graphite" className="aspect-[4/5]" />
              <div className="flex flex-col justify-end">
                <BrandBody b={b} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
