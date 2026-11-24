import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { Indice } from "@/components/desarrollos/Indice";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export const metadata: Metadata = pageMetadata({
  title: "Desarrollos inmobiliarios en San Pedro y Monterrey",
  description:
    "Piamont, Copelia y Amelia Santa Lucía: los desarrollos de DIPZ en San Pedro Garza García y el centro de Monterrey.",
  path: "/desarrollos",
});

export default function DesarrollosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Indice />
        <Cierre eyebrow="Asesoría" title="Solicita información de nuestros desarrollos." />
      </main>
      <Footer />
    </>
  );
}
