import type { MetadataRoute } from "next";
import { posts } from "@/components/blog/posts";
import { proyectos } from "@/components/desarrollos/data";
import { SITE_URL } from "@/lib/site";

// sitemap.xml. Las entradas de blog marcadas como ejemplo quedan fuera hasta que se publiquen las reales.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/desarrollos", priority: 0.9 },
    ...proyectos.map((p) => ({ path: `/desarrollos/${p.slug}`, priority: 0.9 })),
    { path: "/nosotros", priority: 0.7 },
    { path: "/zero-gravity", priority: 0.7 },
    { path: "/unidades-de-negocio", priority: 0.7 },
    { path: "/contacto", priority: 0.8 },
    { path: "/blog", priority: 0.5 },
    ...posts.filter((p) => !p.ejemplo).map((p) => ({ path: `/blog/${p.slug}`, priority: 0.5 })),
    { path: "/aviso-de-privacidad", priority: 0.2 },
    { path: "/terminos-y-condiciones", priority: 0.2 },
  ];
  return pages.map(({ path, priority }) => ({ url: `${SITE_URL}${path === "/" ? "" : path}`, priority }));
}
