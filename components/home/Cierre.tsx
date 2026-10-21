import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/ArrowLink";
import { cierre } from "./content";

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 type-body text-ink placeholder:text-ink-muted focus:border-negro-profundo focus:outline-none focus-visible:outline-none";

export function Cierre() {
  return (
    <section id="contacto" data-nav="sand" className="frame bg-surface-alt py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <Reveal as="p" className="type-eyebrow text-ink-muted md:col-span-2">
          {cierre.eyebrow}
        </Reveal>
      </div>
      <Reveal as="h2" delay={0.1} className="mt-8 type-display-xl md:mt-16">
        {cierre.title}
      </Reveal>

      <div className="mt-12 border-t border-line pt-10 md:mt-20 md:grid md:grid-cols-6 md:gap-x-6 md:pt-12">
        <div className="md:col-span-3 md:pr-10">
          <Reveal as="p" delay={0.2} className="max-w-[480px] type-body-lg text-ink-muted">
            {cierre.paragraph}
          </Reveal>
          <Reveal delay={0.3} className="mt-10 grid max-w-[480px] grid-cols-2 gap-6">
            <div>
              <p className="type-caption tracking-[0.2em] text-ink-muted uppercase">Teléfono</p>
              <a href="tel:+528119841517" className="mt-1 block type-small hover:text-accent">{cierre.phone}</a>
            </div>
            <div>
              <p className="type-caption tracking-[0.2em] text-ink-muted uppercase">Showroom</p>
              <p className="mt-1 type-small">{cierre.showroom}</p>
            </div>
          </Reveal>
        </div>

        {/* Formulario de la mitad al margen, alineado arriba */}
        <Reveal delay={0.2} className="mt-16 md:col-span-3 md:mt-0">
          <form className="flex flex-col gap-8" action="#">
            <fieldset>
              <legend className="type-caption tracking-[0.2em] text-ink-muted uppercase">Soy</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {cierre.profiles.map((p) => (
                  <label key={p} className="cursor-pointer">
                    <input type="checkbox" name="perfil" value={p} className="peer sr-only" />
                    <span className="inline-block rounded-pill border border-line px-5 py-2.5 type-label transition-colors duration-300 peer-checked:border-negro-profundo peer-checked:bg-negro-profundo peer-checked:text-ink-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus hover:bg-blanco-calido">
                      {p}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            {[
              { name: "nombre", label: "Nombre", type: "text" },
              { name: "correo", label: "Correo electrónico", type: "email" },
              { name: "telefono", label: "Teléfono", type: "tel" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="type-caption tracking-[0.2em] text-ink-muted uppercase">{f.label}</span>
                <input name={f.name} type={f.type} className={field} />
              </label>
            ))}
            <label className="block">
              <span className="type-caption tracking-[0.2em] text-ink-muted uppercase">Mensaje</span>
              <textarea name="mensaje" rows={3} className={`${field} resize-none`} />
            </label>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-4 rounded-pill bg-accent py-2 pr-2 pl-6 type-label text-ink-inverse transition-colors duration-500 hover:bg-negro-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {cierre.primary}
                <span className="grid size-10 place-items-center rounded-pill bg-blanco-calido text-accent">
                  <Arrow className="arrow-nudge" />
                </span>
              </button>
              <a
                href="#"
                className="group inline-flex items-center gap-4 rounded-pill border border-line py-2 pr-2 pl-6 type-label transition-colors duration-500 hover:bg-negro-profundo hover:text-ink-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {cierre.secondary}
                <span className="grid size-10 place-items-center rounded-pill bg-negro-profundo text-ink-inverse group-hover:bg-blanco-calido group-hover:text-ink">
                  <Arrow className="arrow-nudge" />
                </span>
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
