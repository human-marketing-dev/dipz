import type { Metadata } from "next";
import { Indice } from "@/components/desarrollos/Indice";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export const metadata: Metadata = {
  title: "Desarrollos",
  description:
    "Piamont, Copelia y Amelia Santa Lucía: los desarrollos de DIPZ en San Pedro Garza García y el centro de Monterrey.",
};

export default function DesarrollosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Indice />
        <Cierre eyebrow="Asesoría" title="Encontremos el desarrollo para ti." />
      </main>
      <Footer />
    </>
  );
}
