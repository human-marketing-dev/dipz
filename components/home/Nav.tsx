"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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

  const shell = `whitespace-nowrap rounded-pill px-4 py-2.5 type-label transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus`;
  const logo = theme === "dark" && !open ? "/brand/dipz-wordmark-blanco.png" : "/brand/dipz-wordmark-negro.png";

  return (
    <>
      <header className="frame fixed inset-x-0 top-0 z-50 pt-6">
        <div className="flex items-center justify-between xl:grid xl:grid-cols-6 xl:gap-x-6">
          <a href="/" aria-label="DIPZ, inicio" className="justify-self-start">
            <Image src={logo} alt="DIPZ" width={2640} height={1097} preload className="h-7 w-auto md:h-8" />
          </a>

          <nav aria-label="Principal" className="hidden gap-0.5 xl:col-span-3 xl:col-start-3 xl:flex">
            {nav.map((item) => {
              const link = (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`${shell} inline-flex items-center gap-1.5 ${isCurrent(item.href) ? "bg-negro-profundo text-ink-inverse" : pill[theme]}`}
                >
                  {item.label}
                  {item.children && (
                    <svg aria-hidden viewBox="0 0 10 6" className="h-1.5 w-2.5 transition-transform duration-500 group-hover:rotate-180 group-focus-within:rotate-180">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </a>
              );
              if (!item.children) return link;
              // Submenú: se abre con hover o al llegar con el teclado (focus-within).
              return (
                <div key={item.href} className="group relative">
                  {link}
                  <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-[300px] rounded-sm border border-line bg-surface p-2 text-ink">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <a
                            href={c.href}
                            aria-current={pathname === c.href ? "page" : undefined}
                            className="flex items-baseline justify-between gap-6 rounded-sm px-4 py-3 transition-colors duration-300 hover:bg-surface-alt focus-visible:outline-2 focus-visible:outline-focus aria-[current=page]:bg-surface-alt"
                          >
                            <span className="type-label">{c.label}</span>
                            <span className="type-caption text-ink-muted">{c.detail}</span>
                          </a>
                        </li>
                      ))}
                      <li className="mt-2 border-t border-line pt-2">
                        <a href={item.href} className="block rounded-sm px-4 py-3 type-label text-ink-muted transition-colors duration-300 hover:bg-surface-alt hover:text-ink focus-visible:outline-2 focus-visible:outline-focus">
                          Ver todos los desarrollos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex justify-self-end gap-0.5">
            <a href="/contacto" className={`${shell} hidden md:inline-flex ${theme === "dark" ? "bg-accent text-ink-inverse hover:bg-blanco-calido hover:text-ink" : "bg-negro-profundo text-ink-inverse hover:bg-accent"}`}>
              Contacto
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className={`${shell} xl:hidden ${open ? "bg-negro-profundo text-ink-inverse" : pill[theme]}`}
            >
              {open ? "Cerrar" : "Menú"}
            </button>
            <a href="/desarrollos" className={`${shell} xl:hidden ${pill[theme]} ${open ? "invisible" : ""}`}>
              Desarrollos
            </a>
          </div>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        className={`frame fixed inset-0 z-40 flex flex-col justify-end bg-surface pb-10 transition-opacity duration-500 xl:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ul className="border-t border-line">
          {[...nav, { label: "Contacto", href: "/contacto" }].map((item) => (
            <li key={item.href} className="border-b border-line">
              <a href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-5 type-h2">
                {item.label}
                <span className="type-eyebrow text-ink-muted">Ir</span>
              </a>
              {"children" in item && item.children && (
                <ul className="-mt-2 pb-4">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <a href={c.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-2 type-body-lg">
                        {c.label}
                        <span className="type-caption text-ink-muted">{c.detail}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8 type-eyebrow text-ink-muted">The future of real estate</p>
      </div>
    </>
  );
}
