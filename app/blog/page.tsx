import type { Metadata } from "next";
import { getSitio, metadatosDe } from "@/lib/contenido";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { PageHero } from "@/components/ui/PageHero";

export function generateMetadata(): Promise<Metadata> {
  return metadatosDe("blogIndice", "/blog");
}

export default async function BlogPage() {
  const s = await getSitio();
  const blog = s.blogIndice.hero;
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero eyebrow={blog.eyebrow} title={blog.title} intro={blog.intro} />
        <BlogIndex posts={s.entradas} />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
