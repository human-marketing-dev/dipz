import Image from "next/image";
import { cierre, desarrollos, nav, unidades } from "./content";

const columns = [
  { title: "Desarrollos", links: desarrollos.projects.map((p) => ({ label: p.name, href: `#${p.id}` })) },
  { title: "Marcas", links: unidades.brands.map((b) => ({ label: b.name, href: "#marcas" })) },
  { title: "Grupo", links: [...nav.slice(2), { label: "Contacto", href: "#contacto" }] },
  {
    title: "Contacto",
    links: [
      { label: cierre.phone, href: "tel:+528119841517" },
      { label: "Showroom en San Pedro", href: "#contacto" },
      { label: "Redes por confirmar", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer data-nav="dark" className="bg-surface-inverse px-6 pt-16 pb-6 text-ink-inverse md:pt-30">
      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {columns.map((c) => (
          <div key={c.title}>
            <p className="type-eyebrow text-arena">{c.title}</p>
            <ul className="mt-5 border-t border-blanco-calido/20">
              {c.links.map((l) => (
                <li key={l.label} className="border-b border-blanco-calido/20">
                  {/* Al pasar, la fila se llena y el texto se recorre */}
                  <a
                    href={l.href}
                    className="block px-2 py-3 type-small transition-[background-color,color,padding] duration-500 hover:bg-blanco-calido hover:pl-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Image
        src="/brand/dipz-wordmark-blanco.png"
        alt="DIPZ"
        width={2640}
        height={1097}
        className="mt-20 w-full md:mt-30"
      />

      <div className="mt-6 flex flex-col gap-2 border-t border-blanco-calido/20 pt-4 type-caption text-arena md:flex-row md:justify-between">
        <span>© 2026 DIPZ. Todos los derechos reservados.</span>
        <span className="tracking-[0.3em] uppercase">The future of real estate</span>
        <a href="#" className="hover:text-blanco-calido">Aviso de privacidad</a>
      </div>
    </footer>
  );
}
