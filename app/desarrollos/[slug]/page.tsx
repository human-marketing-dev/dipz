import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Amenidades, Concepto, FichaHero, Siguiente, Tipologias, Ubicacion } from "@/components/desarrollos/Ficha";
import { Galeria } from "@/components/desarrollos/Galeria";
import { getProyecto, proyectos } from "@/components/desarrollos/data";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/desarrollos/[slug]">): Promise<Metadata> {
  const p = getProyecto((await params).slug);
  if (!p) return {};
  return { title: p.name, description: p.text };
}

export default async function DesarrolloPage({ params }: PageProps<"/desarrollos/[slug]">) {
  const { slug } = await params;
  const p = getProyecto(slug);
  if (!p) notFound();
  const next = proyectos[(proyectos.indexOf(p) + 1) % proyectos.length];

  return (
    <>
      <Nav />
      <main className="flex-1">
        <FichaHero p={p} />
        <Concepto p={p} />
        {p.gallery.length > 1 && <Galeria photos={p.gallery} name={p.name} />}
        <Amenidades p={p} />
        {p.mostrarTipologias && <Tipologias p={p} />}
        <Ubicacion p={p} />
        <Cierre eyebrow={`Me interesa ${p.name}`} title={`Agenda una visita a ${p.name}.`} interes={p.name} />
        <Siguiente p={next} />
      </main>
      <Footer />
    </>
  );
}
