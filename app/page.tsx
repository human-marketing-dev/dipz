import { Cierre } from "@/components/home/Cierre";
import { Desarrollos } from "@/components/home/Desarrollos";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Modelo } from "@/components/home/Modelo";
import { Nav } from "@/components/home/Nav";
import { Perspectivas } from "@/components/home/Perspectivas";
import { Respaldo } from "@/components/home/Respaldo";
import { Rutas } from "@/components/home/Rutas";
import { Unidades } from "@/components/home/Unidades";
import { Video } from "@/components/home/Video";
import { ZeroGravity } from "@/components/home/ZeroGravity";
import { organizationJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Respaldo />
        <Video />
        <ZeroGravity />
        <Unidades />
        <Modelo alcance />
        <Desarrollos />
        <Rutas />
        <Perspectivas />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
