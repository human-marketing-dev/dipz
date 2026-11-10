"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Tipologia } from "./data";

const POR_CONFIRMAR = "Por confirmar"; // igual que en data.ts; no se importa para no cargar data.ts en el cliente

const pendiente = (v: string) => (v === POR_CONFIRMAR ? "text-ink-muted" : "");

// Tipologías en pestañas: una píldora por tipología (nombre y m²) y, debajo, la planta grande con sus
// datos. Las flechas del teclado mueven entre pestañas; en móvil la fila de pestañas se desliza.
export function TipologiasTabs({ tipologias }: { tipologias: Tipologia[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const t = tipologias[active];

  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + tipologias.length) % tipologias.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-12 md:mt-20">
      <div
        role="tablist"
        aria-label="Tipologías"
        onKeyDown={onKey}
        className="-mx-6 flex gap-2 overflow-x-auto border-b border-line px-6 pb-6 md:mx-0 md:flex-wrap md:px-0"
      >
        {tipologias.map((x, i) => {
          const on = i === active;
          return (
            <button
              key={x.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={on}
              aria-controls={`${id}-panel`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-baseline gap-3 rounded-pill border px-6 py-3 type-label whitespace-nowrap transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
                on
                  ? "border-negro-profundo bg-negro-profundo text-ink-inverse"
                  : "border-line text-ink hover:border-negro-profundo"
              }`}
            >
              {x.name}
              <span className={`type-caption ${on ? "text-ink-inverse/70" : "text-ink-muted"}`}>{x.area}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        className="grid gap-10 pt-10 md:grid-cols-6 md:gap-6 md:pt-16"
      >
        <div key={t.name} className="tab-fade flex flex-col gap-8 md:col-span-4">
          {t.plantas?.length ? (
            t.plantas.map((pl) => (
              <figure key={pl.photo.alt}>
                <a
                  href={pl.photo.src.src}
                  target="_blank"
                  rel="noopener"
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  <Image
                    src={pl.photo.src}
                    alt={pl.photo.alt}
                    sizes="(min-width: 768px) 66vw, 100vw"
                    style={{ maxWidth: pl.photo.src.width }} // sin agrandar plantas chicas más allá de su tamaño real
                    className="h-auto max-h-[620px] w-full object-contain object-left transition-opacity duration-500 hover:opacity-85"
                  />
                </a>
                {pl.label && (
                  <figcaption className="mt-3 type-caption tracking-[0.2em] text-ink-muted uppercase">
                    {pl.label}
                  </figcaption>
                )}
              </figure>
            ))
          ) : (
            <Placeholder label={`Planta ${t.name}`} drawing="interior" tone="sand" className="aspect-[4/3]" />
          )}
        </div>

        <div className="md:col-span-2 md:pl-6">
          <h3 className="type-h2">{t.name}</h3>
          <dl className="mt-6 border-t border-line pt-4">
            <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">Superficie</dt>
            <dd className={`mt-1 type-body-lg ${pendiente(t.area)}`}>{t.area}</dd>
          </dl>
          <div className="mt-6">
            <p className="type-caption tracking-[0.2em] text-ink-muted uppercase">Distribución</p>
            {t.features?.length ? (
              <ul className="mt-3 border-t border-line">
                {t.features.map((f) => (
                  <li key={f} className="border-b border-line py-3 type-small">
                    {f}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={`mt-1 type-small ${pendiente(t.detail ?? POR_CONFIRMAR)}`}>{t.detail ?? POR_CONFIRMAR}</p>
            )}
          </div>
          <ArrowLink href="#contacto" variant="dark" className="mt-8">
            Solicitar información
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}
