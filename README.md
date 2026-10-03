# Landing

Sitio estático hecho con [Astro](https://astro.build) y Tailwind CSS v4.

## Correrlo en local

Requiere Node 22.12 o más nuevo.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisarlo
npm run check    # revisa tipos y errores de Astro
```

## Estructura

- `src/pages/`: una ruta por página. `index.astro` y `en/index.astro` muestran la misma portada
  (`src/components/PaginaInicio.astro`) en cada idioma.
- `src/i18n/es.ts` y `src/i18n/en.ts`: todos los textos de la portada, menú y pie en cada idioma.
- `src/datos/`: datos del sitio (`sitio.ts`), pilares (`pilares.ts`), rubros (`rubros.ts` y
  `rubros-paginas.ts`) y preguntas frecuentes (`preguntas.ts`). Las páginas de pilares y rubros se generan
  desde ahí con una sola plantilla cada una.
- `src/content/blog/`: un archivo `.md` por artículo.
- `src/components/`: una sección por archivo.
- `src/layouts/Base.astro`: `<head>` con título, descripción, vista previa para redes, hreflang y favicon.
- `src/styles/global.css`: tokens de diseño (colores, tipografías) en `@theme`.
- `public/`: archivos que se sirven tal cual (favicon, imagen para redes, robots.txt).

## Despliegue en Vercel

1. En Vercel: **Add New → Project** e importar este repositorio.
2. Vercel detecta Astro solo (build `npm run build`, salida `dist`). **Deploy**.

Cada push a `main` publica el sitio y cada pull request tiene su vista previa.

## Antes de publicar: completa los [CORCHETES]

| Qué | Dónde |
|---|---|
| WhatsApp [NÚMERO], [CIUDAD], Instagram [@USUARIO], LinkedIn [PÁGINA], agenda [ENLACE DE CALENDLY O SIMILAR] | `src/datos/sitio.ts`: se cambian una vez y se actualiza todo el sitio. Mientras falte el número, los botones de WhatsApp llevan al formulario y el formulario abre el correo. |
| Herramientas que no uses: [BORRA LAS QUE NO USES ANTES DE PUBLICAR] | `TECNOLOGIAS` en `src/datos/sitio.ts` |
| [VIDEO PENDIENTE] ×3 | `src/components/secciones/Demos.astro` |
| [TESTIMONIO REAL PENDIENTE] ×3 | `src/components/secciones/Testimonios.astro` (solo testimonios reales, con permiso) |
| Respuesta de "¿Puedo cancelar cuando quiera?" | `src/datos/preguntas.ts` (quita `pendiente: true` cuando la definas) |
| [VERIFICAR TARIFA VIGENTE DE META] | `src/components/secciones/Precios.astro` y el artículo del blog |
| [NOMBRE Y EXPERIENCIA], [FOTO PENDIENTE] | `src/pages/nosotros.astro` |
| Datos de la empresa en las páginas legales: [RAZÓN SOCIAL], [RUC], [DIRECCIÓN], [FECHA] y los demás corchetes | `src/pages/privacidad.astro`, `src/pages/terminos.astro`, `src/pages/libro-de-reclamaciones.astro` |
| Revisión legal: [BORRADOR: REVISAR CON UN ABOGADO…] | Privacidad y Términos (después de revisarlos, quitar `<AvisoBorrador />`) |
| Libro de Reclamaciones conectado a un servicio (numeración correlativa, registro y copia al consumidor) | `src/pages/libro-de-reclamaciones.astro` |

## Páginas

- Publicadas:
  - portada en español (`/`) e inglés (`/en/`, precios en dólares);
  - los 5 pilares en `/servicios/<pilar>/` y los 9 rubros en `/rubros/<rubro>/`;
  - `/precios/`, `/nosotros/`, `/contacto/`;
  - `/blog/` con el artículo `/blog/cuanto-cuesta-chatbot-whatsapp-ia-peru-2026/`;
  - `/privacidad/`, `/terminos/`, `/libro-de-reclamaciones/` y la página 404.
- Las páginas internas existen solo en español. En `/en/` el menú y el pie llevan a las secciones de la
  portada en inglés.
- **Nuevo artículo del blog:** crea `src/content/blog/<url-del-articulo>.md` con `titulo`, `descripcion` y
  `fecha` arriba (copia el primero como modelo). Aparece solo en `/blog/` y en el mapa del sitio. Con
  `borrador: true` no se publica.
- Al crear una página nueva, agrega su ruta a `PUBLICADAS` en `src/datos/sitio.ts`: los enlaces del menú, el
  pie, la vitrina y los rubros que apuntan a ella se activan solos. Mientras tanto llevan a su sección de la
  portada o no se muestran, así que no hay enlaces rotos.
- `npm run revisar-enlaces` (después del build) comprueba que ningún enlace interno lleve a una página o
  sección que no existe.
- El mapa del sitio (`sitemap-index.xml`) se genera solo en cada build.

## Portada en un solo archivo

```sh
npm run build
npm run exportar   # crea exportado/automatiza-studio.html (CSS, JS y fuentes adentro)
```

## Skills

`.claude/skills/web-design-engineer/` es la skill
[web-design-engineer](https://github.com/ConardLi/garden-skills/tree/web-design-engineer-v1.3.0/skills/web-design-engineer)
de ConardLi/garden-skills, versión **1.3.0** (licencia MIT, incluida en la
carpeta). Claude Code la carga sola al trabajar en este repo y guía el
diseño de la landing: lectura del brief, sistema de diseño declarado antes
de programar, recetas de estilo y autoevaluación.

Para actualizarla a otra versión:

```sh
npx skills add ConardLi/garden-skills/tree/web-design-engineer-v<versión>/skills/web-design-engineer -a claude-code
```
