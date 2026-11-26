// Permite importar los módulos de contenido del sitio desde Node: cada `import x from "@/public/…webp"`
// se convierte en { src: "public/…webp" } (ruta relativa a la raíz del repositorio).
import { register } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

register(
  "data:text/javascript," +
    encodeURIComponent(`
      export async function load(url, context, next) {
        if (/\\.(webp|png|jpe?g)$/.test(url)) {
          const rel = decodeURIComponent(new URL(url).pathname).slice(${JSON.stringify(raiz)}.length + 1);
          return { format: "module", shortCircuit: true, source: "export default { src: " + JSON.stringify(rel) + " };" };
        }
        return next(url, context);
      }
    `),
  pathToFileURL("./"),
);

// Mismo truco para los módulos que tsx compila como CommonJS.
import Module from "node:module";
for (const ext of [".webp", ".png", ".jpg", ".jpeg"]) {
  Module._extensions[ext] = (m, filename) => {
    m.exports = { src: path.relative(raiz, filename) };
  };
}
