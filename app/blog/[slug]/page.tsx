import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MasPublicaciones, PostBody, PostHero } from "@/components/blog/BlogPost";
import { getPost, posts } from "@/components/blog/posts";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
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
