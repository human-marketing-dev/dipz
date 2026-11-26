# Sanity Studio de DIPZ

Editor de contenido del sitio. Se publica en **https://dipz.sanity.studio** (proyecto `jsqssfsb`, dataset `production`).
Es un proyecto aparte del sitio: tiene sus propias dependencias y no entra en el build de Next.js.

## Qué se puede editar

- **Páginas** (fijas, no se crean ni se borran): Inicio, Nosotros, Zero Gravity, Unidades de negocio, Desarrollos (índice), Contacto, Blog (índice), Aviso de privacidad, Términos.
- **Desarrollos**: Piamont, Copelia y Amelia Santa Lucía. Todos con las mismas secciones; no se crean nuevos.
- **Blog**: entradas (aquí sí se pueden crear).
- **Configuración general**: teléfono, showroom, redes, WhatsApp, bloque de contacto, menú, pie de página y SEO del inicio.

Los logos, colores y tipografías siguen en el código.

## Primera vez (en la Mac, carpeta `dipz-dev`)

Necesita Node 22.12 o más nuevo (`node -v`; si sale 20, correr `nvm install 22`).

```bash
cd ~/Files/human/dipz-dev
git pull
cd studio
npm install
npx sanity login          # abre el navegador: entrar con la cuenta de Sanity del proyecto
npm run cargar-contenido  # sube los textos y las 72 fotos actuales del sitio
npm run deploy            # publica el Studio en https://dipz.sanity.studio
```

`cargar-contenido` solo crea lo que todavía no existe, así que no pisa lo que ya se editó en el Studio.
Para volver al contenido inicial (el de `seed/`): `npm run cargar-contenido -- --reemplazar` (borra los cambios hechos en el Studio).

## Para desarrolladores

- Esquemas: `schemas/` (páginas en `paginas.ts`, desarrollos y blog en `documentos.ts`).
- `seed/contenido.ndjson`: el contenido inicial del sitio (noviembre 2026), el que sube `cargar-contenido`. Las fotos apuntan a `public/`.
- El sitio lee Sanity en `lib/contenido.ts` (una sola consulta, caché de 1 minuto); los tipos están en `lib/sanity.ts`.
- Probar el Studio en local: `npm run dev` (http://localhost:3333).
