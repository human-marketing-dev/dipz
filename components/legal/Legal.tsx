import { ArrowLink } from "@/components/ui/ArrowLink";
import { PageHero } from "@/components/ui/PageHero";
import type { LegalPage } from "./content";

// Página legal: encabezado de página interna y una fila por apartado, título en el primer tercio
// y texto en los dos siguientes, con regla entre filas. Sin animaciones: es texto de consulta.
export function Legal({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <section data-nav="light" className="frame bg-surface pb-16 md:pb-30">
        <ol className="border-t border-line">
          {page.sections.map((s, i) => (
            <li key={s.title} className="border-b border-line py-8 md:grid md:grid-cols-6 md:gap-x-6 md:py-10">
              <div className="flex gap-4 md:col-span-2">
                <span className="type-eyebrow text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="type-h3">{s.title}</h2>
              </div>
              <div className="mt-4 max-w-[640px] md:col-span-3 md:col-start-3 md:mt-0">
                {s.paragraphs?.map((t) => (
                  <p key={t} className="type-body text-ink-muted [&+p]:mt-4">
                    {t}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 border-t border-line">
                    {s.list.map((t) => (
                      <li key={t} className="border-b border-line py-3 type-body text-ink-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 md:mt-16">
          <ArrowLink href="/contacto" variant="dark">
            Ir a contacto
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
