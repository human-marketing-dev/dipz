import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { Legal } from "@/components/legal/Legal";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("terminos", "/terminos-y-condiciones");
}

export default async function TerminosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Legal page={(await getSitio()).terminos.contenido} />
      </main>
      <Footer />
    </>
  );
}
