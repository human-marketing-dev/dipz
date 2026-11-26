import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { Legal } from "@/components/legal/Legal";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("avisoPrivacidad", "/aviso-de-privacidad");
}

export default async function PrivacidadPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Legal page={(await getSitio()).avisoPrivacidad.contenido} />
      </main>
      <Footer />
    </>
  );
}
