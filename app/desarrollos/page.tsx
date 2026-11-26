import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { Indice } from "@/components/desarrollos/Indice";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("desarrollosIndice", "/desarrollos");
}

export default async function DesarrollosPage() {
  const s = await getSitio();
  const { cierre } = s.desarrollosIndice;
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Indice indice={s.desarrollosIndice} proyectos={s.desarrollos} />
        <Cierre eyebrow={cierre?.eyebrow} title={cierre?.title} />
      </main>
      <Footer />
    </>
  );
}
