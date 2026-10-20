"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav } from "./content";

type Theme = "dark" | "light" | "sand";

// Las píldoras cambian según el fondo de la sección que tienen detrás.
const pill: Record<Theme, string> = {
  dark: "bg-blanco-calido text-ink hover:bg-arena",
  light: "bg-arena text-ink hover:bg-negro-profundo hover:text-ink-inverse",
  sand: "bg-blanco-calido text-ink hover:bg-negro-profundo hover:text-ink-inverse",
};

export function Nav() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const probe = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-nav]");
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= 40 && r.bottom > 40) {
          setTheme((s.dataset.nav as Theme) ?? "light");
          return;
        }
      }
    };
    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const shell = `rounded-pill px-4 py-2.5 type-label transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`;
  const logo = theme === "dark" && !open ? "/brand/dipz-wordmark-blanco.png" : "/brand/dipz-wordmark-negro.png";

  return (
    <>
      <header className="frame fixed inset-x-0 top-0 z-50 pt-6">
        <div className="grid grid-cols-2 items-center md:grid-cols-6 md:gap-x-6">
          <a href="#inicio" aria-label="DIPZ, inicio" className="justify-self-start">
            <Image src={logo} alt="DIPZ" width={2640} height={1097} preload className="h-7 w-auto md:h-8" />
          </a>

          <nav aria-label="Principal" className="hidden gap-0.5 md:col-span-3 md:col-start-3 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={`${shell} ${pill[theme]}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-self-end gap-0.5">
            <a href="#contacto" className={`${shell} hidden md:inline-flex ${theme === "dark" ? "bg-accent text-ink-inverse hover:bg-blanco-calido hover:text-ink" : "bg-negro-profundo text-ink-inverse hover:bg-accent"}`}>
              Contacto
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className={`${shell} md:hidden ${open ? "bg-negro-profundo text-ink-inverse" : pill[theme]}`}
            >
              {open ? "Cerrar" : "Menú"}
            </button>
            <a href="#desarrollos" className={`${shell} md:hidden ${pill[theme]} ${open ? "invisible" : ""}`}>
              Desarrollos
            </a>
          </div>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        className={`frame fixed inset-0 z-40 flex flex-col justify-end bg-surface pb-10 transition-opacity duration-500 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ul className="border-t border-line">
          {[...nav, { label: "Contacto", href: "#contacto" }].map((item) => (
            <li key={item.href} className="border-b border-line">
              <a href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-5 type-h2">
                {item.label}
                <span className="type-eyebrow text-ink-muted">Ir</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 type-eyebrow text-ink-muted">The future of real estate</p>
      </div>
    </>
  );
}
