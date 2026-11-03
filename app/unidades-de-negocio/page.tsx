import type { Metadata } from "next";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { unidades } from "@/components/unidades/content";
import { Conexion, UnidadSection, UnidadesHero } from "@/components/unidades/Unidades";

export const metadata: Metadata = {
  title: "Unidades de negocio: desarrollo y operación",
  description:
    "DIPZ Desarrollos, DIPZ Development, Amelia Living y Fresh Coco: cuatro marcas para desarrollar en México y Estados Unidos y operar propiedades en renta y en destino.",
};

// Una sola página con un ancla por marca (#dipz-desarrollos, #dipz-development, #amelia-living,
// #fresh-coco). Si una marca necesita página propia, el ancla pasa a /unidades-de-negocio/<marca>.
export default function UnidadesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <UnidadesHero />
        {unidades.map((u, i) => (
          <UnidadSection key={u.id} u={u} n={i + 1} />
        ))}
        <Conexion />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
