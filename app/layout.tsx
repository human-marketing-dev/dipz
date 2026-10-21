import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DIPZ | Grupo inmobiliario en Monterrey con más de 20 años",
    template: "%s | DIPZ",
  },
  description:
    "Desarrollamos y operamos proyectos inmobiliarios en México y Estados Unidos. Más de 20 años creando patrimonio para quienes invierten y para quienes habitan.",
  icons: {
    icon: "/brand/dipz-monograma-negro.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fontVariables} h-full`}>
      <head>
        {/* Adobe Fonts: Commuters Sans (familia "commuters-sans") */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/vel2vmg.css" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-ink type-body antialiased">
        {children}
      </body>
    </html>
  );
}
