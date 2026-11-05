import Link from "next/link";
import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import type { Block, Post } from "./posts";

// Encabezado de la entrada: ruta, titular y datos en una barra, y la foto a lo ancho del marco.
export function PostHero({ p }: { p: Post }) {
  return (
    <section data-nav="light" className="frame bg-surface pt-36 md:pt-48">
      <Reveal as="p" className="type-eyebrow text-ink-muted">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        <span className="mx-3">/</span>
        {p.category}
      </Reveal>
      <Reveal as="h1" delay={0.1} className="mt-6 max-w-[1100px] type-h1">
        {p.title}
      </Reveal>
      <Reveal delay={0.2}>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 md:mt-14 md:grid-cols-6">
          {[
            ["Publicado", <time key="t" dateTime={p.isoDate}>{p.date}</time>],
            ["Categoría", p.category],
            ["Lectura", p.readingTime],
          ].map(([label, value]) => (
            <div key={label as string}>
              <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">{label}</dt>
              <dd className="mt-1 type-small">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal delay={0.3} className="mt-10 md:mt-14">
        <Media
          photo={p.photo}
          preload
          sizes="100vw"
          aspect={21 / 9}
          label={p.category}
          drawing={p.drawing}
          tone="sand"
          showCaption={false}
          className="aspect-[4/3] md:aspect-[21/9]"
        />
      </Reveal>
    </section>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-12 type-h3 first:mt-0">{b.text}</h2>;
    case "quote":
      return <blockquote className="my-12 border-l border-accent pl-6 type-quote">{b.text}</blockquote>;
    case "list":
      return (
        <ul className="mt-6 border-t border-line">
          {b.items.map((t) => (
            <li key={t} className="border-b border-line py-3 type-body text-ink-muted">
              {t}
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-6 type-body-lg text-ink-muted first:mt-0">{b.text}</p>;
  }
}

// Cuerpo: el texto en una columna de lectura (riel 3 a 5); a la izquierda, fija, la vuelta al blog.
export function PostBody({ p }: { p: Post }) {
  return (
    <article data-nav="light" className="frame bg-surface py-16 md:grid md:grid-cols-6 md:gap-x-6 md:py-24">
      <div className="mb-10 md:col-span-2 md:mb-0">
        <div className="md:sticky md:top-32">
          <Link href="/blog" className="group inline-flex items-center gap-3 type-label">
            <span className="grid size-10 place-items-center rounded-pill border border-line transition-colors duration-500 group-hover:border-negro-profundo group-hover:bg-negro-profundo group-hover:text-ink-inverse">
              <Arrow className="rotate-180" />
            </span>
            Volver al blog
          </Link>
          {p.ejemplo && <p className="mt-6 type-caption text-ink-muted">Publicación de ejemplo</p>}
        </div>
      </div>
      <div className="max-w-[680px] md:col-span-3">
        {p.body.map((b, i) => (
          <BlockView key={i} b={b} />
        ))}
      </div>
    </article>
  );
}

// Más publicaciones: el resto del blog en filas, en oscuro como el bloque del home.
export function MasPublicaciones({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return (
    <section data-nav="dark" className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="type-eyebrow text-arena">Blog</p>
          <h2 className="mt-6 type-h2 md:type-h1">Más publicaciones</h2>
        </div>
        <Link href="/blog" className="hidden type-label underline underline-offset-4 hover:text-arena md:inline">
          Ver todas
        </Link>
      </div>
      <ul className="mt-12 border-t border-blanco-calido/20 md:mt-16">
        {posts.map((x) => (
          <li key={x.slug} className="border-b border-blanco-calido/20">
            <a
              href={`/blog/${x.slug}`}
              className="group grid gap-4 py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:grid-cols-6 md:items-center md:gap-6 md:py-10"
            >
              <span className="type-eyebrow text-arena md:col-span-2">
                <time dateTime={x.isoDate}>{x.date}</time>
                <span className="mx-3">/</span>
                {x.category}
              </span>
              <span className="type-h3 transition-transform duration-500 group-hover:translate-x-2 md:col-span-3">{x.title}</span>
              <span className="hidden justify-self-end md:block">
                <span className="grid size-10 place-items-center rounded-pill border border-blanco-calido/40 transition-colors duration-500 group-hover:border-blanco-calido group-hover:bg-blanco-calido group-hover:text-ink">
                  <Arrow className="arrow-nudge" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
