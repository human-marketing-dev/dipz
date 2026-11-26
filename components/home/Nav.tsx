import { getSitio } from "@/lib/contenido";
import { menuDe } from "@/lib/sanity";
import { NavMenu } from "./NavMenu";

// Menú del sitio: opciones desde Sanity (Configuración → Menú).
export async function Nav() {
  return <NavMenu {...menuDe(await getSitio())} />;
}
