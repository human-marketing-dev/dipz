import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Modelo } from "@/components/home/Modelo";
import { Nav } from "@/components/home/Nav";
import { DosCaras, EnCadaUnidad, LoQueNoEs, ZeroGravityHero } from "@/components/zero-gravity/ZeroGravity";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("zeroGravity", "/zero-gravity");
}

export default async function ZeroGravityPage() {
  const { cierre, proceso } = (await getSitio()).zeroGravity;
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ZeroGravityHero />
        <DosCaras />
        {/* Cómo trabajamos: los pasos del home con título y texto propios */}
        <Modelo title={proceso.title} paragraph={proceso.paragraph} />
        <EnCadaUnidad />
        <LoQueNoEs />
        <Cierre eyebrow={cierre?.eyebrow} title={cierre?.title} />
      </main>
      <Footer />
    </>
  );
}
