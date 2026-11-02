"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/ArrowLink";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { proyectos } from "@/components/desarrollos/data";
import { cierre } from "@/components/home/content";

// Página de contacto. El correo, el horario del showroom y las redes siguen pendientes del cliente.

const POR_CONFIRMAR = "Por confirmar";

const intenciones = [
  { id: "invertir", label: "Invertir", hint: "Te compartimos los modelos de inversión disponibles en México y Estados Unidos." },
  { id: "vivir", label: "Comprar para vivir", hint: "Te mostramos los desarrollos y las unidades disponibles." },
  { id: "operar", label: "Operar mi propiedad", hint: "Amelia Living evalúa tu propiedad para operarla en renta." },
  { id: "otro", label: "Otro tema", hint: "Prensa, alianzas, proveedores o cualquier otro asunto." },
];

const canales = [
  { label: "Teléfono", value: cierre.phone, href: "tel:+528119841517" },
  { label: "Correo", value: POR_CONFIRMAR },
  { label: "Redes", value: POR_CONFIRMAR },
];

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 type-body text-ink placeholder:text-ink-muted focus:border-negro-profundo focus:outline-none";
const fieldLabel = "type-caption tracking-[0.2em] text-ink-muted uppercase";

export function ContactoHero() {
  return (
    <section data-nav="light" className="frame bg-surface pt-36 pb-12 md:pt-48 md:pb-20">
      <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
        <div className="md:col-span-4">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            Contacto
          </Reveal>
          <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
            Hablemos.
          </Reveal>
        </div>
        <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-ink-muted md:col-span-2 md:mt-0">
          {cierre.paragraph}
        </Reveal>
      </div>

      {/* Canales directos en barra, en tercios */}
      <Reveal delay={0.3}>
        <dl className="mt-12 grid gap-y-5 border-t border-line pt-5 sm:grid-cols-3 sm:gap-x-6 md:mt-20">
          {canales.map((c) => (
            <div key={c.label}>
              <dt className={fieldLabel}>{c.label}</dt>
              <dd className={`mt-1 type-h3 ${c.value === POR_CONFIRMAR ? "text-ink-muted" : ""}`}>
                {c.href ? (
                  <a href={c.href} className="transition-colors duration-300 hover:text-accent">
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

export function ContactoForm() {
  const [intencion, setIntencion] = useState(intenciones[0].id);
  const activa = intenciones.find((i) => i.id === intencion)!;
  const conDesarrollo = intencion === "invertir" || intencion === "vivir";

  return (
    <section id="formulario" data-nav="sand" className="frame bg-surface-alt py-16 md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        {/* Intención: el índice de la izquierda decide qué pide el formulario */}
        <div className="md:col-span-2">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            ¿Cómo te ayudamos?
          </Reveal>
          <Reveal delay={0.1}>
            <ul role="radiogroup" aria-label="Motivo de contacto" className="mt-6 border-t border-line">
              {intenciones.map((i, n) => {
                const on = i.id === intencion;
                return (
                  <li key={i.id} className="border-b border-line">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => setIntencion(i.id)}
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="type-eyebrow text-ink-muted">0{n + 1}</span>
                        <span className={`type-h3 transition-colors duration-500 ${on ? "text-ink" : "text-ink-muted group-hover:text-ink"}`}>
                          {i.label}
                        </span>
                      </span>
                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-pill border transition-colors duration-500 ${on ? "border-accent bg-accent text-ink-inverse" : "border-line text-ink"}`}
                        aria-hidden
                      >
                        <Arrow className={`size-3.5 transition-transform duration-500 ${on ? "" : "-rotate-45"}`} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <p className="mt-6 max-w-[360px] type-small text-ink-muted" aria-live="polite">
            {activa.hint}
          </p>
        </div>

        <Reveal delay={0.2} className="mt-14 md:col-span-3 md:col-start-4 md:mt-0">
          <form className="flex flex-col gap-8" action="#">
            <input type="hidden" name="motivo" value={activa.label} />
            {conDesarrollo && (
              <fieldset>
                <legend className={fieldLabel}>Desarrollo de interés</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...proyectos.map((p) => p.name), "Aún no sé"].map((name) => (
                    <label key={name} className="cursor-pointer">
                      <input type="checkbox" name="desarrollo" value={name} className="peer sr-only" />
                      <span className="inline-block rounded-pill border border-line px-5 py-2.5 type-label transition-colors duration-300 peer-checked:border-negro-profundo peer-checked:bg-negro-profundo peer-checked:text-ink-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus hover:bg-blanco-calido">
                        {name}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
            {intencion === "operar" && (
              <label className="block">
                <span className={fieldLabel}>Ubicación de tu propiedad</span>
                <input name="propiedad" type="text" className={field} />
              </label>
            )}
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
              {[
                { name: "nombre", label: "Nombre", type: "text", auto: "name" },
                { name: "telefono", label: "Teléfono", type: "tel", auto: "tel" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className={fieldLabel}>{f.label}</span>
                  <input name={f.name} type={f.type} autoComplete={f.auto} required className={field} />
                </label>
              ))}
            </div>
            <label className="block">
              <span className={fieldLabel}>Correo electrónico</span>
              <input name="correo" type="email" autoComplete="email" required className={field} />
            </label>
            <label className="block">
              <span className={fieldLabel}>Mensaje</span>
              <textarea name="mensaje" rows={4} className={`${field} resize-none`} />
            </label>
            <label className="flex items-start gap-3 type-small text-ink-muted">
              <input type="checkbox" name="privacidad" required className="mt-1 size-4 accent-[var(--accent)]" />
              <span>
                Acepto el{" "}
                <a href="#" className="underline underline-offset-4 hover:text-ink">
                  aviso de privacidad
                </a>
                .
              </span>
            </label>
            <div className="pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-4 rounded-pill bg-accent py-2 pr-2 pl-6 type-label text-ink-inverse transition-colors duration-500 hover:bg-negro-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                Enviar mensaje
                <span className="grid size-10 place-items-center rounded-pill bg-blanco-calido text-accent">
                  <Arrow className="arrow-nudge" />
                </span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Showroom() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cierre.showroom)}`;
  return (
    <section data-nav="dark" className="frame bg-surface-inverse py-16 text-ink-inverse md:py-30">
      <div className="md:grid md:grid-cols-6 md:gap-x-6">
        <div className="flex flex-col md:col-span-2">
          <Reveal as="p" className="type-eyebrow text-arena">
            Showroom
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 type-h2 md:type-h1">
            San Pedro Garza García
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-[360px] type-body-lg text-arena">
            {cierre.showroom}
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <dl className="border-t border-blanco-calido/25">
              {[
                { label: "Horario", value: POR_CONFIRMAR },
                { label: "Citas", value: "Previa cita con un asesor" },
              ].map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-6 border-b border-blanco-calido/25 py-4">
                  <dt className="type-caption tracking-[0.2em] text-arena uppercase">{r.label}</dt>
                  <dd className={`text-right type-small ${r.value === POR_CONFIRMAR ? "text-arena" : ""}`}>{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.4} className="mt-10 md:mt-auto md:pt-10">
            <a
              href={maps}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 rounded-pill border border-blanco-calido/60 py-2 pr-2 pl-6 type-label transition-colors duration-500 hover:bg-blanco-calido hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Cómo llegar
              <span className="grid size-10 place-items-center rounded-pill bg-blanco-calido text-ink">
                <Arrow className="arrow-nudge -rotate-45" />
              </span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-12 md:col-span-4 md:mt-0">
          <Placeholder label="Foto del showroom" drawing="interior" tone="dark" className="aspect-[16/10]" />
        </Reveal>
      </div>
    </section>
  );
}
