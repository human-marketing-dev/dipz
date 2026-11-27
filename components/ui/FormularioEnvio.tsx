"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { enviarAHubspot } from "@/lib/hubspot";

// Envuelve los formularios del sitio: los manda a HubSpot (lib/hubspot.ts) y muestra el estado
// debajo, sin cambiar el diseño del formulario.

type Estado = "listo" | "enviando" | "enviado" | "error";

const MENSAJES: Record<Exclude<Estado, "listo">, string> = {
  enviando: "Enviando…",
  enviado: "Gracias. Recibimos tu mensaje y te contactaremos pronto.",
  error: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
};

export function FormularioEnvio({ className, children }: { className?: string; children: ReactNode }) {
  const [estado, setEstado] = useState<Estado>("listo");

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;
    const form = e.currentTarget;
    const datos = new FormData(form);
    // Campo trampa lleno = bot: se finge éxito sin enviar.
    if (String(datos.get("empresa_web") ?? "")) {
      form.reset();
      setEstado("enviado");
      return;
    }
    setEstado("enviando");
    try {
      if (!(await enviarAHubspot(datos))) throw new Error("HubSpot");
      form.reset();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  // data-hs-do-not-collect: que el código de seguimiento de HubSpot no capture el formulario por su
  // cuenta (ya lo enviamos nosotros; evitaría envíos duplicados).
  return (
    <form className={className} onSubmit={enviar} aria-busy={estado === "enviando"} data-hs-do-not-collect="true">
      {/* Campo trampa para bots: oculto a personas y lectores de pantalla */}
      <input type="text" name="empresa_web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {children}
      <p role="status" aria-live="polite" className={`type-small ${estado === "error" ? "text-terracota" : "text-ink-muted"} ${estado === "listo" ? "sr-only" : ""}`}>
        {estado === "listo" ? "" : MENSAJES[estado]}
      </p>
    </form>
  );
}
