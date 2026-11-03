"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { whatsapp } from "@/components/home/content";
import { Arrow } from "./ArrowLink";

function ChatIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9.5 9.5c0 2.5 2.5 5 5 5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.8-1.8l.8-1-1-2Z" />
    </svg>
  );
}

// Botón flotante de WhatsApp en dos pasos: el primer clic abre un chat pequeño con el saludo de un
// asesor (primero "escribiendo…", luego el mensaje); el segundo, en "Abrir WhatsApp", lleva a la app.
export function WhatsApp() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const toggle = () => {
    if (!open) setTyping(true);
    setOpen(!open);
  };
  const href = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;

  useEffect(() => {
    if (!open) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => setTyping(false), reduce ? 0 : 900);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={root} className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {/* Paso 1: chat pequeño que crece desde el botón */}
      <div
        id="whatsapp-chat"
        role="dialog"
        aria-label="Chat de WhatsApp con DIPZ"
        aria-hidden={!open}
        className={`w-[min(340px,calc(100vw-32px))] origin-bottom-right overflow-hidden rounded-sm border border-line bg-surface text-ink transition-[opacity,transform] duration-500 ease-[var(--ease-dipz)] motion-reduce:transition-none ${open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-90 opacity-0"}`}
      >
        <div className="flex items-center gap-3 bg-surface-inverse px-5 py-4 text-ink-inverse">
          <span className="grid size-10 place-items-center rounded-pill border border-blanco-calido/40">
            <Image src="/brand/dipz-wordmark-blanco.png" alt="" width={2640} height={1097} className="h-3 w-auto" />
          </span>
          <span className="flex-1">
            <span className="block type-label">Asesor DIPZ</span>
            <span className="block type-caption text-arena">{typing ? "Escribiendo…" : "En línea"}</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar chat"
            tabIndex={open ? 0 : -1}
            className="grid size-8 place-items-center rounded-pill text-arena transition-colors hover:text-blanco-calido focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className="size-4">
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
            </svg>
          </button>
        </div>

        <div className="bg-surface-alt px-5 py-6">
          <div className="w-fit max-w-[88%] rounded-sm bg-surface px-4 py-3">
            {typing ? (
              <span className="flex h-[22px] items-center gap-1" aria-label="Escribiendo">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="size-1.5 animate-bounce rounded-pill bg-ink-muted" style={{ animationDelay: `${d}ms` }} />
                ))}
              </span>
            ) : (
              <p className="animate-[fade-up_400ms_ease-out] type-small">{whatsapp.greeting}</p>
            )}
          </div>
        </div>

        {/* Paso 2: lleva a WhatsApp */}
        <div className="border-t border-line px-5 py-4">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between gap-4 rounded-pill bg-accent py-2 pr-2 pl-6 type-label text-ink-inverse transition-colors duration-500 hover:bg-negro-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Abrir WhatsApp
            <span className="grid size-10 place-items-center rounded-pill bg-blanco-calido text-accent">
              <Arrow className="arrow-nudge -rotate-45" />
            </span>
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="whatsapp-chat"
        aria-label={open ? "Cerrar chat de WhatsApp" : "Escríbenos por WhatsApp"}
        className={`flex h-14 items-center gap-3 rounded-pill pr-5 pl-4 type-label transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${open ? "bg-negro-profundo text-ink-inverse" : "bg-accent text-ink-inverse hover:bg-negro-profundo"}`}
      >
        <span className="relative size-6">
          <span className={`absolute inset-0 transition-[opacity,transform] duration-500 ${open ? "rotate-90 opacity-0" : "opacity-100"}`}>
            <ChatIcon />
          </span>
          <span className={`absolute inset-0 grid place-items-center transition-[opacity,transform] duration-500 ${open ? "opacity-100" : "-rotate-90 opacity-0"}`}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className="size-4">
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
            </svg>
          </span>
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
}
