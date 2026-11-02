"use client";

import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { indice, perfiles, proyectos, type Perfil, type Proyecto } from "./data";

const CYCLE_MS = 1100;

// Una fila del índice: foto en dos tercios y ficha en el tercio restante. Al pasar el mouse
// la foto recorre la galería del proyecto, como hojear el book.
function Fila({ p, n, total }: { p: Proyecto; n: number; total: number }) {
  const [hover, setHover] = useState(false);
  const [frame, setFrame] = useState(0);
  const frames = p.gallery.length ? p.gallery : [undefined];

  useEffect(() => {
    if (!hover || frames.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setFrame((f) => (f + 1) % frames.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [hover, frames.length]);

  return (
    <li className="border-b border-line">
      <a
        href={`/desarrollos/${p.slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setFrame(0);
        }}
        className="group grid gap-6 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:grid-cols-6 md:py-12"
      >
        <div className="relative aspect-[4/3] overflow-hidden md:col-span-4 md:aspect-[16/9]">
          {frames.map((photo, i) => (
            <div
              key={i}
              aria-hidden={i !== frame}
              className={`absolute inset-0 transition-opacity duration-700 ${i === frame ? "opacity-100" : "opacity-0"}`}
            >
              <Media
                photo={photo}
                sizes="(min-width: 768px) 66vw, 100vw"
                aspect={16 / 9}
                label={p.name}
                drawing={p.drawing}
                tone="graphite"
                className="size-full transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105"
              />
            </div>
          ))}
          {frames.length > 1 && (
            <span className="absolute bottom-4 left-4 flex gap-1" aria-hidden>
              {frames.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 w-5 transition-colors duration-500 ${i === frame && hover ? "bg-blanco-calido" : "bg-blanco-calido/35"}`}
                />
              ))}
            </span>
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="type-eyebrow text-ink-muted">{p.zone}</span>
            <span className="type-eyebrow text-ink-muted">
              0{n} / 0{total}
            </span>
          </div>
          <h2 className="mt-6 type-h2 transition-colors duration-500 md:type-h1 md:group-hover:text-accent">{p.name}</h2>
          <p className="mt-3 type-small text-ink-muted">{p.location}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
            {[
              { label: "Tipo", value: p.tipo },
              { label: "Superficies", value: p.surface },
              { label: "Estatus", value: p.status },
              { label: "Entrega", value: p.entrega },
            ].map((f) => (
              <div key={f.label}>
                <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">{f.label}</dt>
                <dd className="mt-1 type-small">{f.value}</dd>
              </div>
            ))}
          </dl>

          <span className="mt-8 inline-flex items-center gap-4 self-start rounded-pill border border-line py-2 pr-2 pl-6 type-label transition-colors duration-500 group-hover:border-negro-profundo group-hover:bg-negro-profundo group-hover:text-ink-inverse md:mt-auto">
            Ver proyecto
            <span className="grid size-10 place-items-center rounded-pill bg-negro-profundo text-ink-inverse transition-colors duration-500 group-hover:bg-accent">
              <Arrow className="arrow-nudge" />
            </span>
          </span>
        </div>
      </a>
    </li>
  );
}

export function Indice() {
  const [perfil, setPerfil] = useState<Perfil | "todos">("todos");
  const lista = proyectos.filter((p) => perfil === "todos" || p.perfil.includes(perfil));

  return (
    <section data-nav="light" className="frame bg-surface pt-36 pb-16 md:pt-48 md:pb-30">
      <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
        <div className="md:col-span-4">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {indice.eyebrow}
          </Reveal>
          <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
            {indice.title}
          </Reveal>
        </div>
        <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-ink-muted md:col-span-2 md:mt-0">
          {indice.intro}
        </Reveal>
      </div>

      {/* Filtros: píldoras que se llenan de negro al activarse, con el conteo al lado */}
      <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-2 border-t border-line pt-6 md:mt-20">
        <span className="mr-4 type-caption tracking-[0.2em] text-ink-muted uppercase">Mostrar</span>
        {perfiles.map((f) => {
          const on = perfil === f.id;
          const count = proyectos.filter((p) => f.id === "todos" || p.perfil.includes(f.id)).length;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setPerfil(f.id)}
              className={`inline-flex items-center gap-2 rounded-pill border px-5 py-2.5 type-label transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${on ? "border-negro-profundo bg-negro-profundo text-ink-inverse" : "border-line hover:bg-surface-alt"}`}
            >
              {f.label}
              <span className={`type-caption ${on ? "text-arena" : "text-ink-muted"}`}>{count}</span>
            </button>
          );
        })}
      </Reveal>

      <ul className="mt-6 border-t border-line">
        {lista.map((p, i) => (
          <Fila key={p.slug} p={p} n={i + 1} total={lista.length} />
        ))}
      </ul>
    </section>
  );
}
