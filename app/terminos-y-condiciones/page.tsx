import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { terminos } from "@/components/legal/content";
import { Legal } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso del sitio web de DIPZ Desarrollos.",
};

export default function TerminosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Legal page={terminos} />
      </main>
      <Footer />
    </>
  );
}
