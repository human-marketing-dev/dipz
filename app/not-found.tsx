import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

// Página 404: misma cabecera de las páginas internas y salidas al inicio y a los desarrollos.
export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Error 404"
          title="Página no encontrada."
          intro="La dirección que buscas no existe o cambió. Puedes volver al inicio o conocer nuestros desarrollos."
        >
          <div className="mt-12 flex flex-wrap gap-3 md:mt-16">
            <ArrowLink href="/">Ir al inicio</ArrowLink>
            <ArrowLink href="/desarrollos" variant="dark">
              Ver desarrollos
            </ArrowLink>
          </div>
        </PageHero>
      </main>
      <Footer />
    </>
  );
}
