import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { blog } from "@/components/blog/posts";
import { Cierre } from "@/components/home/Cierre";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: blog.intro,
};

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
