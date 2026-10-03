// Genera la portada como un solo archivo HTML (CSS, JavaScript, fuentes y
// favicon incluidos) a partir del build: exportado/automatiza-studio.html.
// Uso: npm run build && npm run exportar
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { build } from 'esbuild';

const DIST = 'dist';
const SALIDA = 'exportado/automatiza-studio.html';

const archivo = (ruta) => path.join(DIST, ruta.replace(/^\//, ''));
const dataUri = async (ruta, tipo) => `data:${tipo};base64,${(await readFile(archivo(ruta))).toString('base64')}`;

let html = await readFile(path.join(DIST, 'index.html'), 'utf8');

// 1. Hojas de estilo: adentro, con las fuentes latin y latin-ext como data URI
//    (las de otros alfabetos no hacen falta en español).
for (const [etiqueta, href] of [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g)].map((m) => [m[0], m[1]])) {
  let css = await readFile(archivo(href), 'utf8');
  css = css.replace(/@font-face\{[^}]*vietnamese[^}]*\}/g, '');
  for (const fuente of new Set(css.match(/\/_astro\/[^)"']+\.woff2/g) ?? [])) {
    css = css.replaceAll(fuente, await dataUri(fuente, 'font/woff2'));
  }
  html = html.replace(etiqueta, () => `<style>${css}</style>`);
}

// 2. Scripts externos: empaquetados (con lo que importan) y puestos adentro
//    como módulos, que igual que antes corren cuando la página terminó de
//    cargar. Si dos componentes generan el mismo script, va una sola vez.
const vistos = new Set();
for (const [etiqueta, src] of [...html.matchAll(/<script type="module" src="([^"]+)"><\/script>/g)].map((m) => [m[0], m[1]])) {
  const { outputFiles } = await build({ entryPoints: [archivo(src)], bundle: true, format: 'esm', minify: true, write: false });
  const codigo = outputFiles[0].text;
  html = html.replace(etiqueta, () => (vistos.has(codigo) ? '' : `<script type="module">${codigo}</script>`));
  vistos.add(codigo);
}

// 3. Favicon.
html = html.replace('href="/favicon.svg"', `href="${await dataUri('/favicon.svg', 'image/svg+xml')}"`);

const restantes = [...html.matchAll(/(?:src|href)="\/_astro\/[^"]+"/g)].map((m) => m[0]);
if (restantes.length) throw new Error(`Quedaron recursos sin incluir: ${restantes.join(', ')}`);

await mkdir(path.dirname(SALIDA), { recursive: true });
await writeFile(SALIDA, html);
console.log(`${SALIDA}: ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB, un solo archivo.`);
