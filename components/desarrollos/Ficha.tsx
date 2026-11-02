import { Arrow } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { POR_CONFIRMAR, type Proyecto } from "./data";

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
        <Media photo={p.heroPhoto} preload label={`Render de ${p.name}`} drawing={p.drawing} tone="graphite" className="size-full" showCaption={false} />
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
                <dd className={`mt-1 type-small ${f.value === POR_CONFIRMAR ? "text-arena" : "text-blanco-calido"}`}>{f.value}</dd>
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
            {p.amenidadesTotal} espacios para vivir el edificio
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
            <Placeholder key={i} label="Amenidad por confirmar" drawing="interior" tone="sand" className="aspect-[4/3]" />
          ))}
        </Reveal>
      )}
    </section>
  );
}

export function Tipologias({ p }: { p: Proyecto }) {
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
            Plantas, superficies por tipología y disponibilidad por confirmar. Un asesor te comparte la información
            actualizada.
          </Reveal>
        </div>
      </div>

      {/* Índice de tipologías: planta a la izquierda, datos a la derecha, con regla entre filas */}
      <ol className="mt-12 border-t border-line md:mt-20">
        {p.tipologias.map((t, i) => (
          <li key={t.name} className="border-b border-line">
            <a
              href="#contacto"
              className="group grid gap-6 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:grid-cols-6 md:items-center md:py-10"
            >
              <span className="type-eyebrow text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              <Placeholder label={`Planta ${t.name}`} drawing="interior" tone="sand" className="aspect-[4/3] md:col-span-2" />
              <span className="md:col-span-2 md:pl-6">
                <span className="block type-h2 transition-colors duration-500 md:group-hover:text-accent">{t.name}</span>
                <span className="mt-4 grid grid-cols-2 gap-6 border-t border-line pt-4">
                  <span>
                    <span className="block type-caption tracking-[0.2em] text-ink-muted uppercase">Superficie</span>
                    <span className={`mt-1 block type-small ${pendiente(t.area)}`}>{t.area}</span>
                  </span>
                  <span>
                    <span className="block type-caption tracking-[0.2em] text-ink-muted uppercase">Distribución</span>
                    <span className={`mt-1 block type-small ${pendiente(t.detail)}`}>{t.detail}</span>
                  </span>
                </span>
              </span>
              <span className="flex md:justify-end">
                <span className="inline-flex items-center gap-4 rounded-pill border border-line py-2 pr-2 pl-6 type-label whitespace-nowrap transition-colors duration-500 group-hover:border-negro-profundo group-hover:bg-negro-profundo group-hover:text-ink-inverse">
                  Pedir planta
                  <span className="grid size-10 place-items-center rounded-pill bg-negro-profundo text-ink-inverse transition-colors duration-500 group-hover:bg-accent">
                    <Arrow className="arrow-nudge" />
                  </span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Ubicacion({ p }: { p: Proyecto }) {
  return (
    <section data-nav="dark" className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <div className="md:col-span-2">
          <Reveal as="p" className="type-eyebrow text-arena">
            Ubicación
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            {p.zone}
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 type-body-lg text-arena">
            {p.location}
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <p className="type-caption tracking-[0.2em] text-arena uppercase">Cerca de</p>
            <ul className="mt-3 border-t border-blanco-calido/25">
              {p.cercanos.map((c, i) => (
                <li key={i} className={`border-b border-blanco-calido/25 py-3 type-small ${c === POR_CONFIRMAR ? "text-arena" : ""}`}>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-12 md:col-span-4 md:mt-0">
          <Placeholder label="Mapa de ubicación por integrar" drawing="street" tone="dark" className="aspect-[16/10]" />
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
        <Media photo={p.cover} label={p.name} drawing={p.drawing} tone="graphite" className="size-full" showCaption={false} />
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
