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
    <footer data-nav="dark" className="relative isolate overflow-hidden bg-verde-salvia px-6 pt-16 pb-6 text-ink-inverse md:px-[var(--margin)] md:pt-30">
      {/* Fondo: textura verde de la marca. Textura y logo van sin optimizar: la recompresión
          de next/image ensucia el grano y el relieve. */}
      <Image src="/brand/textura-verde-dipz.webp" alt="" fill unoptimized className="-z-10 object-cover" />

      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {columns.map((c) => (
          <div key={c.title}>
            <p className="type-eyebrow text-blanco-calido/80">{c.title}</p>
            <ul className="mt-5 border-t border-blanco-calido/30">
              {c.links.map((l) => (
                <li key={l.label} className="border-b border-blanco-calido/30">
                  {/* Al pasar, la fila se llena y el texto se recorre */}
                  <a
                    href={l.href}
                    className="block px-2 py-3 type-small transition-[background-color,color,padding] duration-500 hover:bg-blanco-calido hover:pl-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blanco-calido"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logotipo en relieve al centro. La imagen trae la misma textura de fondo: se recorta
          el aire del cuadro y sus orillas se desvanecen con una máscara para fundirse con el fondo. */}
      <div className="mx-auto mt-16 aspect-[2/1] w-full max-w-[840px] overflow-hidden [mask-image:radial-gradient(ellipse,black_60%,transparent_80%)] md:mt-24">
        <Image
          src="/brand/nuevo-fondo-logo-dipz.webp"
          alt="DIPZ, The future of real estate"
          width={2000}
          height={2000}
          unoptimized
          className="size-full object-cover"
        />
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-blanco-calido/30 pt-4 type-caption text-blanco-calido/80 md:mt-24 md:flex-row md:justify-between">
        <span>© 2026 DIPZ. Todos los derechos reservados.</span>
        <span className="tracking-[0.3em] uppercase">The future of real estate</span>
        <a href="#" className="hover:text-blanco-calido">Aviso de privacidad</a>
      </div>
    </footer>
  );
}
