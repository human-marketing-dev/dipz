"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/Social";
import { FormularioEnvio } from "@/components/ui/FormularioEnvio";
import { CORREO_CONTACTO, telHref, type Config } from "@/lib/sanity";

// Página de contacto.

// Textos desde Sanity (página Contacto y Configuración general).
type Encabezado = { eyebrow: string; title: string };
type Motivo = { id: string; label: string; hint: string };

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 type-body text-ink placeholder:text-ink-muted focus:border-negro-profundo focus:outline-none";
const fieldLabel = "type-caption tracking-[0.2em] text-ink-muted uppercase";

export function ContactoHero({
  hero,
  paragraph,
  contacto,
  redes,
}: {
  hero: Encabezado;
  paragraph: string;
  contacto: Config["contacto"];
  redes: Config["redes"];
}) {
  const correo = contacto.email || CORREO_CONTACTO;
  const canales = [
    { label: "Teléfono", value: contacto.phone, href: telHref(contacto.phone) },
    { label: "Correo", value: correo, href: `mailto:${correo}` },
    { label: "Redes", value: "redes" },
  ];
  return (
    <section data-nav="light" className="frame bg-surface pt-36 pb-12 md:pt-48 md:pb-20">
      <div className="md:grid md:grid-cols-6 md:items-end md:gap-x-6">
        <div className="md:col-span-4">
          <Reveal as="p" className="type-eyebrow text-ink-muted">
            {hero.eyebrow}
          </Reveal>
          <Reveal as="h1" delay={0.1} className="mt-6 type-display-xl">
            {hero.title}
          </Reveal>
        </div>
        <Reveal as="p" delay={0.2} className="mt-6 max-w-[420px] type-body-lg text-ink-muted md:col-span-2 md:mt-0">
          {paragraph}
        </Reveal>
      </div>

      {/* Canales directos en barra, en tercios */}
      <Reveal delay={0.3}>
        <dl className="mt-12 grid gap-y-5 border-t border-line pt-5 sm:grid-cols-3 sm:gap-x-6 md:mt-20">
          {canales.map((c) => (
            <div key={c.label}>
              <dt className={fieldLabel}>{c.label}</dt>
              <dd className="mt-1 type-h3 break-words">
                {c.value === "redes" ? (
                  <SocialLinks redes={redes} className="mt-1" />
                ) : c.href ? (
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

export function ContactoForm({ motivos: intenciones, proyectos }: { motivos: Motivo[]; proyectos: string[] }) {
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
          <FormularioEnvio className="flex flex-col gap-8">
            <input type="hidden" name="motivo" value={activa.label} />
            {conDesarrollo && (
              <fieldset>
                <legend className={fieldLabel}>Desarrollo de interés</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...proyectos, "Aún no sé"].map((name) => (
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
                <a href="/aviso-de-privacidad" target="_blank" className="underline underline-offset-4 hover:text-ink">
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
          </FormularioEnvio>
        </Reveal>
      </div>
    </section>
  );
}
