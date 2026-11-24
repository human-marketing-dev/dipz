import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { blog } from "@/components/blog/posts";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "Blog de inversión y mercado inmobiliario",
  description:
    "Artículos de DIPZ sobre inversión inmobiliaria, preventa, renta administrada y el mercado residencial de Monterrey y San Pedro Garza García.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero eyebrow={blog.eyebrow} title={blog.title} intro={blog.intro} />
        <BlogIndex />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
