import type { ReactNode } from "react";

type Variant = "primary" | "light" | "dark" | "text";

const shells: Record<Variant, string> = {
  primary: "bg-accent text-ink-inverse hover:bg-negro-profundo",
  light: "border border-blanco-calido/60 text-ink-inverse hover:bg-blanco-calido hover:text-ink",
  dark: "border border-line text-ink hover:bg-negro-profundo hover:text-ink-inverse",
  text: "",
};

const circles: Record<Variant, string> = {
  primary: "bg-blanco-calido text-accent",
  light: "bg-blanco-calido text-ink",
  dark: "bg-negro-profundo text-ink-inverse group-hover:bg-blanco-calido group-hover:text-ink",
  text: "border border-current",
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`size-4 ${className}`}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Píldora con la flecha en un círculo interno: el gesto del botón de Structure con la forma de DIPZ.
export function ArrowLink({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  if (variant === "text") {
    return (
      <a
        href={href}
        className={`group inline-flex items-center gap-3 type-label focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus ${className}`}
      >
        <span className="border-b border-current pb-0.5">{children}</span>
        <span className={`grid size-8 place-items-center rounded-pill ${circles.text}`}>
          <Arrow className="arrow-nudge" />
        </span>
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-pill py-2 pr-2 pl-6 type-label transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${shells[variant]} ${className}`}
    >
      {children}
      <span className={`grid size-10 place-items-center rounded-pill transition-colors duration-500 ${circles[variant]}`}>
        <Arrow className="arrow-nudge" />
      </span>
    </a>
  );
}
