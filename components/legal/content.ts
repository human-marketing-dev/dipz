// Textos legales entregados por el cliente (4 nov 2026), sin cambios de redacción salvo la marca,
// que en el sitio se escribe en mayúsculas (DIPZ).

export type LegalSection = { title: string; paragraphs?: string[]; list?: string[] };
export type LegalPage = { eyebrow: string; title: string; intro: string; sections: LegalSection[] };

export const terminos: LegalPage = {
  eyebrow: "Legal",
  title: "Términos y condiciones",
  intro:
    "Bienvenido al sitio web de DIPZ Desarrollos. Al navegar y utilizar este sitio, aceptas los siguientes términos y condiciones:",
  sections: [
    {
      title: "Información del sitio",
      paragraphs: [
        "La información publicada en este sitio tiene fines informativos y comerciales relacionados con los proyectos y servicios de DIPZ Desarrollos.",
      ],
    },
    {
      title: "Información de proyectos",
      paragraphs: [
        "Las características, imágenes, renders, amenidades, precios, disponibilidad y especificaciones de los desarrollos presentados pueden modificarse sin previo aviso.",
        "Las imágenes mostradas son ilustrativas y pueden variar respecto al producto final.",
      ],
    },
    {
      title: "Propiedad intelectual",
      paragraphs: [
        "Todo el contenido de este sitio web, incluyendo textos, fotografías, renders, logotipos y material gráfico, es propiedad de DIPZ Desarrollos o cuenta con autorización para su uso. Queda prohibida su reproducción total o parcial sin autorización previa.",
      ],
    },
    {
      title: "Formularios de contacto",
      paragraphs: [
        "La información proporcionada por los usuarios a través de formularios de contacto será utilizada únicamente para brindar información sobre nuestros proyectos, servicios y oportunidades de inversión.",
      ],
    },
    {
      title: "Enlaces externos",
      paragraphs: [
        "Este sitio puede contener enlaces a sitios de terceros. DIPZ Desarrollos no es responsable por el contenido o funcionamiento de dichos sitios.",
      ],
    },
    {
      title: "Modificaciones",
      paragraphs: ["DIPZ Desarrollos podrá actualizar estos términos y condiciones en cualquier momento sin previo aviso."],
    },
    {
      title: "Contacto",
      paragraphs: [
        "Para cualquier duda relacionada con este sitio web, puedes comunicarte con nosotros a través de nuestros canales oficiales de contacto.",
      ],
    },
  ],
};

export const privacidad: LegalPage = {
  eyebrow: "Legal",
  title: "Aviso de privacidad",
  intro:
    "En DIPZ Desarrollos valoramos y protegemos la privacidad de nuestros usuarios. La información personal proporcionada a través de este sitio web será utilizada únicamente para atender solicitudes de información, brindar asesoría sobre nuestros proyectos y mantener comunicación relacionada con nuestros servicios y oportunidades de inversión.",
  sections: [
    {
      title: "Información que recopilamos",
      paragraphs: [
        "Podemos recopilar datos como nombre, correo electrónico, número telefónico y cualquier otra información que el usuario proporcione voluntariamente mediante formularios de contacto o registro.",
      ],
    },
    {
      title: "Uso de la información",
      paragraphs: ["La información recopilada podrá utilizarse para:"],
      list: [
        "Dar seguimiento a solicitudes de información.",
        "Compartir detalles sobre proyectos y oportunidades inmobiliarias.",
        "Brindar atención personalizada a clientes e inversionistas.",
        "Mejorar la experiencia de navegación y el funcionamiento del sitio web.",
      ],
    },
    {
      title: "Protección de la información",
      paragraphs: [
        "Implementamos medidas razonables de seguridad para proteger la información proporcionada por nuestros usuarios y evitar accesos no autorizados.",
      ],
    },
    {
      title: "Compartición de datos",
      paragraphs: [
        "DIPZ Desarrollos no vende ni comercializa información personal de sus usuarios. Los datos únicamente podrán compartirse cuando sea requerido por la legislación aplicable o por autoridades competentes.",
      ],
    },
    {
      title: "Cookies y herramientas de análisis",
      paragraphs: [
        "Este sitio puede utilizar cookies y herramientas de análisis para comprender el comportamiento de navegación y mejorar la experiencia del usuario. Estas herramientas no recopilan información sensible.",
      ],
    },
    {
      title: "Enlaces externos",
      paragraphs: [
        "Nuestro sitio web puede contener enlaces a sitios de terceros. DIPZ Desarrollos no es responsable de las políticas de privacidad o contenido de dichos sitios.",
      ],
    },
    {
      title: "Actualizaciones",
      paragraphs: [
        "DIPZ Desarrollos podrá modificar esta Política de Privacidad en cualquier momento. Las actualizaciones serán publicadas en esta misma página.",
      ],
    },
    {
      title: "Contacto",
      paragraphs: [
        "Para cualquier duda relacionada con esta Política de Privacidad o el tratamiento de sus datos personales, puede comunicarse con nosotros a través de nuestros canales oficiales de contacto.",
      ],
    },
  ],
};
