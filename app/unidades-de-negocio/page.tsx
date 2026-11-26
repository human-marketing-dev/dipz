import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { UnidadSection, UnidadesHero } from "@/components/unidades/Unidades";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("unidadesNegocio", "/unidades-de-negocio");
}

// Una sola página con un ancla por marca (#dipz-desarrollos, #dipz-development, #amelia-living,
// #fresh-coco). Si una marca necesita página propia, el ancla pasa a /unidades-de-negocio/<marca>.
export default async function UnidadesPage() {
  const { unidades: { items: unidades }, cierre } = (await getSitio()).unidadesNegocio;
  return (
    <>
      <Nav />
      <main className="flex-1">
        <UnidadesHero />
        {unidades.map((u, i) => (
          <UnidadSection key={u.id} u={u} n={i + 1} total={unidades.length} />
        ))}
        <Cierre eyebrow={cierre?.eyebrow} title={cierre?.title} />
      </main>
      <Footer />
    </>
  );
}
