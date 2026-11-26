import { cacheLife } from "next/cache";
import { pageMetadata } from "./site";
import { API, CONSULTA, conFotos, normalizar, type Crudo, type Sitio } from "./sanity";

// Lectura del contenido desde Sanity (solo en el servidor). Los tipos y ayudantes están en
// lib/sanity.ts, que también usan los componentes de cliente.
export async function getSitio(): Promise<Sitio> {
  "use cache";
  cacheLife("minutes");
  const url = new URL(API);
  url.searchParams.set("query", CONSULTA);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity respondió ${res.status}: ${await res.text()}`);
  const { result } = (await res.json()) as { result: Crudo };
  return normalizar(conFotos(result) as Crudo);
}

// Metadatos de una página fija a partir de su SEO en Sanity.
export async function metadatosDe(pagina: "nosotros" | "zeroGravity" | "unidadesNegocio" | "desarrollosIndice" | "contacto" | "blogIndice" | "avisoPrivacidad" | "terminos", path: string) {
  const { seo } = (await getSitio())[pagina];
  return pageMetadata({ title: seo?.title, description: seo?.description ?? "", path });
}
