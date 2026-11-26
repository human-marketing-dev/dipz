// Sube a Sanity el contenido actual del sitio (studio/seed/contenido.ndjson) con todas sus fotos.
//
//   npm run cargar-contenido              → crea solo lo que todavía no existe en Sanity
//   npm run cargar-contenido -- --reemplazar  → sobrescribe TODO con lo del código (borra lo editado en el Studio)
//
// Usa la sesión de `npx sanity login`; no hace falta token.

import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const studio = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const raiz = path.resolve(studio, "..");
const reemplazar = process.argv.includes("--reemplazar");

const semilla = readFileSync(path.join(studio, "seed/contenido.ndjson"), "utf8");
const conRutas = semilla.replaceAll("image@REPO/", `image@${pathToFileURL(raiz).href}/`);
const tmp = path.join(studio, "seed/.import-contenido.ndjson");
writeFileSync(tmp, conRutas);

console.log(reemplazar ? "Reemplazando el contenido de Sanity con el del código…" : "Cargando el contenido (sin tocar lo que ya existe)…");
const r = spawnSync(
  "npx",
  ["sanity", "dataset", "import", tmp, "--dataset", "production", reemplazar ? "--replace" : "--missing"],
  { cwd: studio, stdio: "inherit", shell: process.platform === "win32" },
);
rmSync(tmp, { force: true });
process.exit(r.status ?? 1);
