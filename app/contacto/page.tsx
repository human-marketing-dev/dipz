import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { getSitio } from "@/lib/contenido";
import { ContactoForm, ContactoHero } from "@/components/contacto/Contacto";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

type ContactoPagina = {
  hero: { eyebrow: string; title: string };
  formulario: { motivos: { id: string; label: string; hint: string }[] };
};

export async function generateMetadata(): Promise<Metadata> {
  const { contacto } = await getSitio();
  return pageMetadata({ ...contacto.seo, description: contacto.seo?.description ?? "", path: "/contacto" });
}

export default async function ContactoPage() {
  const s = await getSitio();
  const c = s.contacto as unknown as ContactoPagina;
  const { config } = s;
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ContactoHero hero={c.hero} paragraph={config.cierre.paragraph} contacto={config.contacto} redes={config.redes} />
        <ContactoForm motivos={c.formulario.motivos} proyectos={s.desarrollos.map((d) => d.name)} />
      </main>
      <Footer />
    </>
  );
}
