// Revisa que todos los enlaces internos del build lleven a una página o a
// una sección que existe. Uso: npm run build && npm run revisar-enlaces
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';

async function paginas(dir) {
  const salida = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const ruta = path.join(dir, e.name);
    if (e.isDirectory()) salida.push(...(await paginas(ruta)));
    else if (e.name.endsWith('.html')) salida.push(ruta);
  }
  return salida;
}

const existe = (ruta) => stat(ruta).then(() => true, () => false);
const ids = new Map(); // archivo -> Set de ids
async function idsDe(archivo) {
  if (!ids.has(archivo)) {
    const html = await readFile(archivo, 'utf8');
    ids.set(archivo, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return ids.get(archivo);
}
async function archivoDe(ruta) {
  const limpia = ruta.split('?')[0];
  for (const c of [path.join(DIST, limpia), path.join(DIST, limpia, 'index.html')]) {
    if ((await existe(c)) && (await stat(c)).isFile()) return c;
  }
  return null;
}

const errores = [];
let revisados = 0;
for (const pagina of await paginas(DIST)) {
  const html = await readFile(pagina, 'utf8');
  for (const [, valor] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (!valor.startsWith('/') && !valor.startsWith('#')) continue;
    revisados += 1;
    const [ruta, ancla] = valor.split('#');
    const destino = ruta ? await archivoDe(ruta) : pagina;
    if (!destino) {
      errores.push(`${pagina}: ${valor} (no existe la página)`);
    } else if (ancla && !(await idsDe(destino)).has(ancla)) {
      errores.push(`${pagina}: ${valor} (no existe la sección #${ancla})`);
    }
  }
}

if (errores.length) {
  console.error(`${errores.length} enlaces rotos:\n${errores.join('\n')}`);
  process.exit(1);
}
console.log(`${revisados} enlaces internos revisados, ninguno roto.`);
