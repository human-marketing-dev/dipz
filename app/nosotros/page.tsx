import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { Respaldo } from "@/components/home/Respaldo";
import { Grupo, Marcas, NosotrosHero } from "@/components/nosotros/Nosotros";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("nosotros", "/nosotros");
}

// Trayectoria (hitos) y Liderazgo quedan fuera hasta tener los datos del cliente.
export default async function NosotrosPage() {
  const { cierre } = (await getSitio()).nosotros;
  return (
    <>
      <Nav />
      <main className="flex-1">
        <NosotrosHero />
        <Grupo />
        <Respaldo />
        <Marcas />
        <Cierre eyebrow={cierre?.eyebrow} title={cierre?.title} />
      </main>
      <Footer />
    </>
  );
}
