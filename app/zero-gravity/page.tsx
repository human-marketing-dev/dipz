import type { Metadata } from "next";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Modelo } from "@/components/home/Modelo";
import { Nav } from "@/components/home/Nav";
import { cierre } from "@/components/zero-gravity/content";
import { DosCaras, EnCadaUnidad, LoQueNoEs, ZeroGravityHero } from "@/components/zero-gravity/ZeroGravity";

export const metadata: Metadata = {
  title: "Zero Gravity: nuestra forma de desarrollar",
  description:
    "Originamos, desarrollamos y operamos cada proyecto para que quien invierte reciba un patrimonio que crece y una propiedad que produce, sin administrarla.",
};

export default function ZeroGravityPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ZeroGravityHero />
        <DosCaras />
        {/* Cómo trabajamos: el mismo bloque del home */}
        <div className="frame bg-surface" aria-hidden>
          <div className="border-t border-line" />
        </div>
        <Modelo />
        <EnCadaUnidad />
        <LoQueNoEs />
        <Cierre eyebrow={cierre.eyebrow} title={cierre.title} />
      </main>
      <Footer />
    </>
  );
}
