"use client";

import { useState, type FormEvent, type ReactNode } from "react";

// Envuelve los formularios del sitio: los manda a /api/contacto (que los envía por correo SMTP)
// y muestra el estado debajo, sin cambiar el diseño del formulario.

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
    datos.set("pagina", window.location.href);
    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", { method: "POST", body: datos });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  return (
    <form className={className} onSubmit={enviar} aria-busy={estado === "enviando"}>
      {/* Campo trampa para bots: oculto a personas y lectores de pantalla */}
      <input type="text" name="empresa_web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {children}
      <p role="status" aria-live="polite" className={`type-small ${estado === "error" ? "text-terracota" : "text-ink-muted"} ${estado === "listo" ? "sr-only" : ""}`}>
        {estado === "listo" ? "" : MENSAJES[estado]}
      </p>
    </form>
  );
}
