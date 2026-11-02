import type { Metadata } from "next";
import { ContactoForm, ContactoHero, Showroom } from "@/components/contacto/Contacto";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con DIPZ para invertir, comprar para vivir u operar tu propiedad. Showroom en San Pedro Garza García.",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ContactoHero />
        <ContactoForm />
        <Showroom />
      </main>
      <Footer />
    </>
  );
}
