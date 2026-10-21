import { Cierre } from "@/components/home/Cierre";
import { Desarrollos } from "@/components/home/Desarrollos";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Modelo } from "@/components/home/Modelo";
import { Nav } from "@/components/home/Nav";
import { Perspectivas } from "@/components/home/Perspectivas";
import { Presencia } from "@/components/home/Presencia";
import { Respaldo } from "@/components/home/Respaldo";
import { Rutas } from "@/components/home/Rutas";
import { Unidades } from "@/components/home/Unidades";
import { ZeroGravity } from "@/components/home/ZeroGravity";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Respaldo />
        <ZeroGravity />
        <Unidades />
        <Modelo />
        <Desarrollos />
        <Presencia />
        <Rutas />
        <Perspectivas />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
