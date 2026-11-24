import type { Metadata } from "next";
import { WhatsApp } from "@/components/ui/WhatsApp";
import { pageMetadata, SITE_URL } from "@/lib/site";
import { fontVariables } from "./fonts";
import "./globals.css";

const defaultTitle = "DIPZ | Grupo inmobiliario en Monterrey con más de 20 años";

// Metadatos base del sitio y del home. El ícono y el ícono de Apple salen de app/icon.png y
// app/apple-icon.png; las imágenes para redes, de public/og/.
const base = pageMetadata({
  description:
    "Desarrollamos y operamos proyectos inmobiliarios en México y Estados Unidos. Más de 20 años y 100,000 m² construidos. Piamont, Copelia y Amelia Santa Lucía.",
  path: "/",
});

export const metadata: Metadata = {
  ...base,
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: "%s | DIPZ" },
  openGraph: { ...base.openGraph, title: defaultTitle },
  twitter: { ...base.twitter, title: defaultTitle },
};

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
      </body>
    </html>
  );
}
