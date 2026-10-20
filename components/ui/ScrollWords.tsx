"use client";

import { useEffect, useRef, useState } from "react";

// El texto pasa de arena a negro palabra por palabra mientras se hace scroll.
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const [lit, setLit] = useState(words.length);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Empieza cuando el párrafo entra por abajo y termina cuando su final llega a media pantalla.
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      setLit(Math.round(Math.max(0, Math.min(1, p)) * words.length));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [words.length]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className={`transition-colors duration-300 ${i < lit ? "text-ink" : "text-arena"}`}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
