import type { Metadata } from "next";
import type { Config } from "@/lib/sanity";

// Dominio de producción. Se puede cambiar sin tocar código con la variable NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dipz.mx").replace(/\/$/, "");

export const SITE_NAME = "DIPZ";
export const DEFAULT_OG_IMAGE = "/og/dipz.jpg";

type PageMeta = {
  title?: string; // sin " | DIPZ": lo agrega la plantilla del layout
  description: string;
  path: string; // ruta canónica, p. ej. "/nosotros"
  image?: string; // imagen para redes, 1200 × 630
  noindex?: boolean;
};

// Metadatos completos de una página: título, descripción, URL canónica, Open Graph y Twitter.
// Open Graph no se hereda campo por campo del layout, por eso cada página lo arma completo aquí.
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, noindex }: PageMeta): Metadata {
  const ogTitle = title ? `${title} | ${SITE_NAME}` : undefined;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_MX",
      siteName: SITE_NAME,
      url: path,
      ...(ogTitle ? { title: ogTitle } : {}),
      description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      ...(ogTitle ? { title: ogTitle } : {}),
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// Datos estructurados de la empresa (schema.org) para buscadores; se insertan en el home.
export const organizationJsonLd = (config: Config) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  telephone: config.contacto.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Río Guadalquivir 305, del Valle",
    addressLocality: "San Pedro Garza García",
    addressRegion: "Nuevo León",
    postalCode: "66220",
    addressCountry: "MX",
  },
  sameAs: config.redes.map((r) => r.href),
});
