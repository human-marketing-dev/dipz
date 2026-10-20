import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dipz — The Future of Real Estate",
    template: "%s | Dipz",
  },
  description: "Dipz desarrolla proyectos arquitectónicos pensados para durar.",
  icons: {
    icon: "/brand/dipz-monograma-negro.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col bg-surface text-ink type-body antialiased">
        {children}
      </body>
    </html>
  );
}
