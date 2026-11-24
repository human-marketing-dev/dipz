import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { privacidad } from "@/components/legal/content";
import { Legal } from "@/components/legal/Legal";

export const metadata: Metadata = pageMetadata({
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de DIPZ Desarrollos: qué datos recopilamos, para qué los usamos y cómo los protegemos.",
  path: "/aviso-de-privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Legal page={privacidad} />
      </main>
      <Footer />
    </>
  );
}
