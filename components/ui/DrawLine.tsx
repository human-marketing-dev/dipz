"use client";

import { useEffect, useRef, useState } from "react";

// Línea de 1px que se dibuja de izquierda a derecha con el scroll.
export function DrawLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.max(0, Math.min(1, (vh * 0.9 - r.top) / (vh * 0.5))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={ref} className={`h-px bg-line/25 ${className}`} aria-hidden>
      <div className="h-px origin-left bg-line" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
