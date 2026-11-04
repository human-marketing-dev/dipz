"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { whatsapp } from "@/components/home/content";

// Logotipo de WhatsApp (glifo oficial, relleno).
function WhatsAppGlyph({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Close({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className={className}>
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
    </svg>
  );
}

// Botón flotante de WhatsApp en dos pasos, con los colores de WhatsApp: el primer clic abre un chat
// pequeño con el saludo (primero "escribiendo…", luego el mensaje); el segundo, en "Iniciar chat",
// lleva a WhatsApp con un mensaje prellenado.
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
    <div ref={root} className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-4 md:right-6 md:bottom-6">
      {/* Paso 1: chat pequeño que crece desde el botón */}
      <div
        id="whatsapp-chat"
        role="dialog"
        aria-label="Chat de WhatsApp con DIPZ"
        aria-hidden={!open}
        className={`w-[min(340px,calc(100vw-32px))] origin-bottom-right overflow-hidden rounded-2xl bg-whatsapp-chat font-sans text-negro-profundo shadow-[0_12px_40px_rgb(25_25_24/0.25)] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-95 opacity-0"}`}
      >
        <div className="flex items-center gap-3 bg-whatsapp-dark px-4 py-3 text-blanco-calido">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blanco-calido">
            <Image src="/brand/dipz-wordmark-negro.png" alt="" width={2640} height={1097} className="h-3 w-auto" />
          </span>
          <span className="flex-1 leading-tight">
            <span className="block text-[15px] font-bold">DIPZ</span>
            <span className="block text-[12px] opacity-80">{typing ? "escribiendo…" : "en línea"}</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar chat"
            tabIndex={open ? 0 : -1}
            className="grid size-8 place-items-center rounded-full opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blanco-calido"
          >
            <Close />
          </button>
        </div>

        <div className="min-h-[120px] px-4 py-5">
          {/* Burbuja entrante con su colita, como en WhatsApp */}
          <div className="relative w-fit max-w-[85%] rounded-lg rounded-tl-none bg-blanco-calido px-3 py-2 shadow-[0_1px_1px_rgb(25_25_24/0.12)]">
            <span aria-hidden className="absolute top-0 -left-2 size-0 border-t-[10px] border-l-[8px] border-t-blanco-calido border-l-transparent" />
            {typing ? (
              <span className="flex h-5 items-center gap-1 px-1" aria-label="Escribiendo">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="size-1.5 animate-bounce rounded-full bg-gris-grafito/60" style={{ animationDelay: `${d}ms` }} />
                ))}
              </span>
            ) : (
              <div className="animate-[fade-up_300ms_ease-out]">
                <p className="text-[12px] font-bold text-whatsapp-dark">DIPZ</p>
                <p className="mt-0.5 text-[14px] leading-[20px]">{whatsapp.greeting}</p>
                <p className="mt-1 text-right text-[11px] text-gris-grafito/70">ahora</p>
              </div>
            )}
          </div>
        </div>

        {/* Paso 2: lleva a WhatsApp */}
        <div className="px-4 pb-4">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-[15px] font-bold text-blanco-calido transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark"
          >
            <WhatsAppGlyph className="size-5" />
            Iniciar chat
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="whatsapp-chat"
        aria-label={open ? "Cerrar chat de WhatsApp" : "Escríbenos por WhatsApp"}
        className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-blanco-calido shadow-[0_6px_20px_rgb(25_25_24/0.25)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark md:size-16"
      >
        <span className={`absolute transition-[opacity,transform] duration-300 ${open ? "scale-50 rotate-90 opacity-0" : "opacity-100"}`}>
          <WhatsAppGlyph className="size-7 md:size-8" />
        </span>
        <span className={`absolute transition-[opacity,transform] duration-300 ${open ? "opacity-100" : "scale-50 -rotate-90 opacity-0"}`}>
          <Close className="size-5" />
        </span>
      </button>
    </div>
  );
}
