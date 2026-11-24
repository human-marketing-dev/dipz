import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { terminos } from "@/components/legal/content";
import { Legal } from "@/components/legal/Legal";

export const metadata: Metadata = pageMetadata({
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso del sitio web de DIPZ Desarrollos.",
  path: "/terminos-y-condiciones",
});

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
