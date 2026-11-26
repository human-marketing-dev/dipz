import { getSitio } from "@/lib/contenido";
import { WhatsAppBoton } from "./WhatsAppBoton";

// Botón flotante de WhatsApp: número y textos desde Sanity (Configuración → WhatsApp).
export async function WhatsApp() {
  const { config } = await getSitio();
  return <WhatsAppBoton whatsapp={config.whatsapp} />;
}
