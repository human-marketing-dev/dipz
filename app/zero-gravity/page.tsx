import type { Metadata } from "next";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Modelo } from "@/components/home/Modelo";
import { Nav } from "@/components/home/Nav";
import { cierre, proceso } from "@/components/zero-gravity/content";
import { DosCaras, EnCadaUnidad, LoQueNoEs, ZeroGravityHero } from "@/components/zero-gravity/ZeroGravity";

export const metadata: Metadata = {
  title: "Zero Gravity: nuestro modelo de trabajo",
  description:
    "DIPZ se encarga del desarrollo, la inversión y la administración de cada proyecto, para que el cliente reciba los resultados sin intervenir en la operación.",
};

export default function ZeroGravityPage() {
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
        <Cierre eyebrow={cierre.eyebrow} title={cierre.title} />
      </main>
      <Footer />
    </>
  );
}
