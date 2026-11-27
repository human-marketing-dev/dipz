import type { Metadata } from "next";
import Script from "next/script";
import { WhatsApp } from "@/components/ui/WhatsApp";
import { pageMetadata, SITE_URL } from "@/lib/site";
import { getSitio } from "@/lib/contenido";
import { fontVariables } from "./fonts";
import "./globals.css";

// Metadatos base del sitio y del home (título y descripción en Sanity: Configuración → SEO del
// sitio). El ícono y el ícono de Apple salen de app/icon.png y app/apple-icon.png; las imágenes
// para redes, de public/og/.
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = (await getSitio()).config;
  const base = pageMetadata({ description: seo.description, path: "/" });
  return {
    ...base,
    metadataBase: new URL(SITE_URL),
    title: { default: seo.title, template: "%s | DIPZ" },
    openGraph: { ...base.openGraph, title: seo.title },
    twitter: { ...base.twitter, title: seo.title },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fontVariables} h-full`}>
      <head>
        {/* Adobe Fonts: Commuters Sans (familia "commuters-sans") */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/vel2vmg.css" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip bg-surface text-ink type-body antialiased">
        {children}
        <WhatsApp />
        {/* Código de seguimiento de HubSpot (cuenta del cliente): ayuda a que HubSpot confíe en los
            envíos de formularios (cookie hubspotutk) y registra visitas de cada contacto. */}
        <Script id="hs-script-loader" src="https://js.hs-scripts.com/51097290.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
