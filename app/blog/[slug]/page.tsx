import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { getSitio } from "@/lib/contenido";
import { notFound } from "next/navigation";
import { MasPublicaciones, PostBody, PostHero } from "@/components/blog/BlogPost";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export async function generateStaticParams() {
  return (await getSitio()).entradas.map((p) => ({ slug: p.slug }));
}

const getPost = async (slug: string) => (await getSitio()).entradas.find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = await getPost((await params).slug);
  if (!p) return {};
  // Las entradas de ejemplo no se indexan ni van al sitemap hasta que se publiquen las reales.
  return pageMetadata({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, noindex: p.ejemplo });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { entradas: posts } = await getSitio();
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PostHero p={p} />
        <PostBody p={p} />
        <MasPublicaciones posts={posts.filter((x) => x.slug !== p.slug).slice(0, 3)} />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
