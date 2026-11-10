import type { Metadata } from "next";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { Respaldo } from "@/components/home/Respaldo";
import { cierre } from "@/components/nosotros/content";
import { Grupo, Marcas, NosotrosHero } from "@/components/nosotros/Nosotros";

export const metadata: Metadata = {
  title: "Nosotros: grupo inmobiliario con más de 20 años de trayectoria",
  description:
    "DIPZ es un grupo inmobiliario de Monterrey con más de 20 años de trayectoria. Desarrolla proyectos en México y Estados Unidos y administra propiedades en renta.",
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
        <Marcas />
        <Cierre eyebrow={cierre.eyebrow} title={cierre.title} />
      </main>
      <Footer />
    </>
  );
}
