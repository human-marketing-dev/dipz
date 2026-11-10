import Image from "next/image";
import { Arrow, ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { POR_CONFIRMAR, type Proyecto } from "./data";
import { projectTones } from "@/components/ui/projectTone";

// Secciones de la página de cada desarrollo, en el orden en que aparecen.

const pendiente = (v: string) => (v === POR_CONFIRMAR ? "text-ink-muted" : "");

export function FichaHero({ p }: { p: Proyecto }) {
  const ficha = [
    { label: "Tipo", value: p.tipo },
    { label: "Superficies", value: p.surface },
    { label: "Estatus", value: p.status },
    { label: "Entrega", value: p.entrega },
  ];
  return (
    <section
      data-nav="dark"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-surface-inverse text-ink-inverse md:min-h-[760px]"
    >
      <div className="absolute inset-0">
        <Media
          photo={p.heroPhoto}
          preload
          label={`Render de ${p.name}`}
          drawing={p.drawing}
          tone="graphite"
          className="size-full"
          showCaption={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro-profundo/90 via-negro-profundo/45 to-negro-profundo/30" />

      <div className="frame relative pt-32 pb-8 md:pb-10">
        <Reveal as="p" className="type-eyebrow text-arena">
          <a href="/desarrollos" className="hover:text-blanco-calido">
            Desarrollos
          </a>
          <span className="mx-3 text-gris-grafito">/</span>
          {p.zone}
        </Reveal>
        <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
          {p.name}
        </Reveal>
        <Reveal as="p" delay={0.2} className="mt-4 type-body-lg text-arena">
          {p.location}
        </Reveal>

        {/* Ficha rápida en barra, en cuartos */}
        <Reveal delay={0.3}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-blanco-calido/25 pt-5 md:mt-14 md:grid-cols-4">
            {ficha.map((f) => (
              <div key={f.label}>
                <dt className="type-caption tracking-[0.2em] text-arena uppercase">{f.label}</dt>
                <dd className={`mt-1 type-small ${f.value === POR_CONFIRMAR ? "text-arena" : "text-blanco-calido"}`}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Concepto({ p }: { p: Proyecto }) {
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          Concepto
        </Reveal>
        <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:col-span-4 md:mt-0 md:type-h1">
          {p.statement}
        </Reveal>
      </div>
      <div className="mt-10 md:mt-16 md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" delay={0.2} className="max-w-[560px] type-body-lg text-ink-muted md:col-span-2 md:col-start-3">
          {p.text}
        </Reveal>
        <Reveal delay={0.3} className="mt-10 md:col-span-2 md:mt-0">
          <dl className="border-t border-line">
            {p.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <dt className="type-caption tracking-[0.2em] text-ink-muted uppercase">{f.label}</dt>
                <dd className="text-right type-small">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Amenidades({ p }: { p: Proyecto }) {
  return (
    <section data-nav="sand" className="frame bg-surface-alt py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
        <div className="md:col-span-4">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            Amenidades
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {p.amenidadesTotal} amenidades
          </Reveal>
        </div>
        {p.amenidades.length < p.amenidadesTotal && (
          <Reveal as="p" delay={0.2} className="mt-6 type-small text-ink-muted md:col-span-2 md:mt-0 md:text-right">
            {p.amenidades.length
              ? `Mostramos ${p.amenidades.length} de ${p.amenidadesTotal}. Listado completo por confirmar.`
              : "Listado y fotografías por confirmar."}
          </Reveal>
        )}
      </div>

      {p.amenidades.length > 0 ? (
        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
          {p.amenidades.map((a, i) => (
            <Reveal as="li" key={a.name} delay={(i % 3) * 0.1} className="group">
              <div className="overflow-hidden">
                <Media
                  photo={a.photo}
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  aspect={4 / 3}
                  label={a.name}
                  drawing="interior"
                  tone="sand"
                  className="aspect-[4/3] transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-line pb-4">
                <h3 className="type-h3">{a.name}</h3>
                <span className="type-eyebrow text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      ) : (
        <Reveal delay={0.2} className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, i) => (
            <Placeholder
              key={i}
              label="Amenidad por confirmar"
              drawing="interior"
              tone="sand"
              className="aspect-[4/3]"
            />
          ))}
        </Reveal>
      )}
    </section>
  );
}

const numeros = ["", "Una", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];

// Índice de tipologías: número, planta grande (clic para verla completa) y, a la derecha, superficie,
// distribución y el botón para pedir información. El penthouse muestra sus dos niveles.
export function Tipologias({ p }: { p: Proyecto }) {
  const n = p.tipologias.length;
  return (
    <section data-nav="light" className="frame bg-surface py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          Tipologías
        </Reveal>
        <div className="md:col-span-4">
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:mt-0 md:type-h1">
            De {p.surface}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[480px] type-body-lg text-ink-muted">
            {numeros[n] ?? n} {n === 1 ? "tipología" : "tipologías"}. Un asesor te comparte disponibilidad y precios
            actualizados.
          </Reveal>
        </div>
      </div>

      <ol className="mt-12 border-t border-line md:mt-20">
        {p.tipologias.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            className="grid gap-8 border-b border-line py-10 md:grid-cols-6 md:gap-6 md:py-16"
          >
            <span className="type-eyebrow text-ink-muted">{String(i + 1).padStart(2, "0")}</span>

            <div className="flex flex-col gap-8 md:col-span-3">
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
                        sizes="(min-width: 768px) 50vw, 100vw"
                        style={{ maxWidth: pl.photo.src.width }} // sin agrandar plantas chicas más allá de su tamaño real
                        className="h-auto max-h-[560px] w-full object-contain object-left transition-opacity duration-500 hover:opacity-85"
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
                  <p className={`mt-1 type-small ${pendiente(t.detail ?? POR_CONFIRMAR)}`}>
                    {t.detail ?? POR_CONFIRMAR}
                  </p>
                )}
              </div>
              <ArrowLink href="#contacto" variant="dark" className="mt-8">
                Solicitar información
              </ArrowLink>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

// Ubicación en el color del proyecto (terracota, verde o azul talco), como en el home.
export function Ubicacion({ p }: { p: Proyecto }) {
  const t = projectTones[p.color];
  return (
    <section data-nav={t.link === "dark" ? "sand" : "dark"} className={`frame py-16 md:py-30 ${t.bg} ${t.body}`}>
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <div className="md:col-span-2">
          <Reveal as="p" className={`type-eyebrow ${t.eyebrow}`}>
            Ubicación
          </Reveal>
          <Reveal as="h2" delay={0.1} className={`mt-6 type-h2 md:type-h1 ${t.title}`}>
            {p.zone}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 type-body-lg">
            {p.location}
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <p className={`type-caption tracking-[0.2em] uppercase ${t.eyebrow}`}>Cerca de</p>
            <ul className={`mt-3 border-t ${t.line}`}>
              {p.cercanos.map((c, i) => (
                <li key={i} className={`border-b py-3 type-small ${t.line} ${c === POR_CONFIRMAR ? t.eyebrow : ""}`}>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4} className="mt-10">
            <ArrowLink href={p.mapa.url} variant={t.link}>
              Cómo llegar
            </ArrowLink>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-12 md:col-span-4 md:mt-0">
          {p.mapa.lat != null && p.mapa.lng != null ? (
            <iframe
              src={`https://maps.google.com/maps?q=${p.mapa.lat},${p.mapa.lng}&z=16&hl=es&output=embed`}
              title={`Mapa de ubicación de ${p.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[16/10] w-full border-0 bg-surface-alt"
            />
          ) : (
            <Placeholder
              label="Mapa de ubicación por integrar"
              drawing="street"
              tone="dark"
              className="aspect-[16/10]"
            />
          )}
        </Reveal>
      </div>
    </section>
  );
}

// Cierre de recorrido: el siguiente desarrollo como una franja a sangre que invita a seguir.
export function Siguiente({ p }: { p: Proyecto }) {
  return (
    <a
      href={`/desarrollos/${p.slug}`}
      data-nav="dark"
      className="group relative flex h-[60dvh] items-end overflow-hidden bg-negro-profundo text-ink-inverse focus-visible:outline-2 focus-visible:-outline-offset-8 focus-visible:outline-focus md:h-[70dvh]"
    >
      <div className="absolute inset-0 transition-transform duration-1000 ease-[var(--ease-dipz)] group-hover:scale-105">
        <Media
          photo={p.cover}
          label={p.name}
          drawing={p.drawing}
          tone="graphite"
          className="size-full"
          showCaption={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro-profundo/85 via-negro-profundo/40 to-negro-profundo/20 transition-colors duration-700 group-hover:bg-negro-profundo/30" />
      <div className="frame relative w-full pb-10 md:pb-16">
        <div className="flex items-center justify-between border-b border-blanco-calido/25 pb-4">
          <span className="type-eyebrow text-arena">Siguiente desarrollo</span>
          <span className="type-eyebrow text-arena">{p.zone}</span>
        </div>
        <div className="mt-8 flex items-end justify-between gap-6">
          <span className="type-display-xl">{p.name}</span>
          <span className="mb-2 grid size-14 shrink-0 place-items-center rounded-pill bg-blanco-calido text-ink transition-colors duration-500 group-hover:bg-accent group-hover:text-ink-inverse">
            <Arrow className="arrow-nudge" />
          </span>
        </div>
      </div>
    </a>
  );
}
