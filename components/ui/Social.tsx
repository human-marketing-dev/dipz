import type { ReactNode } from "react";
import { redes } from "@/components/home/content";

// Íconos de línea fina (trazo 1.5, terminaciones redondeadas), con el dibujo de Lucide.
const icons: Record<string, ReactNode> = {
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  Facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  LinkedIn: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
};

export function SocialIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {icons[name]}
    </svg>
  );
}

// Fila de redes en píldoras redondas; `tone` según el fondo.
export function SocialLinks({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const shell =
    tone === "dark"
      ? "border-blanco-calido/60 hover:bg-blanco-calido hover:text-ink"
      : "border-line hover:border-negro-profundo hover:bg-negro-profundo hover:text-ink-inverse";
  return (
    <ul className={`flex gap-2 ${className}`}>
      {redes.map((r) => (
        <li key={r.name}>
          <a
            href={r.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`DIPZ en ${r.name}`}
            className={`grid size-10 place-items-center rounded-pill border transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${shell}`}
          >
            <SocialIcon name={r.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
