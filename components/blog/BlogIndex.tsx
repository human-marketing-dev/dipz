"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { categorias, posts, type Post } from "./posts";

function Meta({ p, className = "" }: { p: Post; className?: string }) {
  return (
    <p className={`type-eyebrow text-ink-muted ${className}`}>
      <time dateTime={p.isoDate}>{p.date}</time>
      <span className="mx-3">/</span>
      {p.category}
    </p>
  );
}

// Listado: filtro por categoría en píldoras, la publicación más reciente destacada a lo ancho y el
// resto en una retícula de tres columnas.
export function BlogIndex() {
  const [cat, setCat] = useState("Todas");
  const list = posts.filter((p) => cat === "Todas" || p.category === cat);
  const [first, ...rest] = list;

  return (
    <section data-nav="light" className="frame bg-surface pb-16 md:pb-30">
      <div className="flex flex-wrap gap-2 border-t border-line pt-6" role="group" aria-label="Filtrar por categoría">
        {categorias.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`rounded-pill border px-4 py-2 type-label transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
              cat === c ? "border-negro-profundo bg-negro-profundo text-ink-inverse" : "border-line hover:border-negro-profundo"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {first && (
        <Reveal key={`${cat}-${first.slug}`} className="mt-10 md:mt-16">
          <a
            href={`/blog/${first.slug}`}
            className="group grid gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:grid-cols-6 md:items-end"
          >
            <div className="overflow-hidden md:col-span-4">
              <Media
                photo={first.photo}
                sizes="(min-width: 768px) 66vw, 100vw"
                aspect={16 / 9}
                label={first.category}
                drawing={first.drawing}
                tone="sand"
                showCaption={false}
                className="aspect-[16/9] transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-2">
              <Meta p={first} />
              <h2 className="mt-4 type-h2 transition-colors duration-500 group-hover:text-accent">{first.title}</h2>
              <p className="mt-4 type-body text-ink-muted">{first.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-4 type-label">
                Leer publicación
                <span className="grid size-10 place-items-center rounded-pill bg-negro-profundo text-ink-inverse transition-colors duration-500 group-hover:bg-accent">
                  <Arrow className="arrow-nudge" />
                </span>
              </span>
            </div>
          </a>
        </Reveal>
      )}

      {rest.length > 0 && (
        <ul className="mt-16 grid gap-12 border-t border-line pt-10 md:mt-24 md:grid-cols-3 md:gap-6">
          {rest.map((p, i) => (
            <Reveal as="li" key={`${cat}-${p.slug}`} delay={i * 0.1}>
              <a href={`/blog/${p.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
                <div className="overflow-hidden">
                  <Media
                    photo={p.photo}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    aspect={4 / 3}
                    label={p.category}
                    drawing={p.drawing}
                    tone="sand"
                    showCaption={false}
                    className="aspect-[4/3] transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105"
                  />
                </div>
                <Meta p={p} className="mt-5" />
                <h3 className="mt-3 type-h3 transition-colors duration-500 group-hover:text-accent">{p.title}</h3>
                <p className="mt-3 type-small text-ink-muted">{p.excerpt}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      )}

      {posts.some((p) => p.ejemplo) && <p className="mt-12 type-caption text-ink-muted">Publicaciones de ejemplo</p>}
    </section>
  );
}
