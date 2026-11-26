import { desarrollo, entrada } from "./documentos";
import { objetos } from "./objetos";
import { paginas } from "./paginas";

export const documentos = [...objetos, ...paginas, desarrollo, entrada];

// Páginas fijas: un documento cada una, con el mismo ID que su tipo.
export const SINGLETONS = paginas.map((p) => ({ id: p.name, title: p.title ?? p.name }));

// Tipos que no se pueden crear, duplicar ni borrar desde el Studio.
export const FIJOS = new Set([...SINGLETONS.map((s) => s.id), "desarrollo"]);
