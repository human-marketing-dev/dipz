import type { Metadata } from "next";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { Respaldo } from "@/components/home/Respaldo";
import { cierre } from "@/components/nosotros/content";
import { Criterio, Grupo, Marcas, NosotrosHero } from "@/components/nosotros/Nosotros";

export const metadata: Metadata = {
  title: "Nosotros: más de 20 años desarrollando en México",
  description:
    "DIPZ es un grupo inmobiliario de Monterrey con más de 20 años de trayectoria. Desarrollamos en México y Estados Unidos, y operamos lo que construimos.",
};

// Trayectoria (hitos) y Liderazgo quedan fuera hasta tener los datos del cliente.
export default function NosotrosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <NosotrosHero />
        <Grupo />
        <Respaldo />
        <Criterio />
        <Marcas />
        <Cierre eyebrow={cierre.eyebrow} title={cierre.title} />
      </main>
      <Footer />
    </>
  );
}
