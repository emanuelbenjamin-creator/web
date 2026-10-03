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

- `src/pages/index.astro`: la página; arma las secciones.
- `src/components/`: una sección por archivo.
- `src/layouts/Base.astro`: `<head>` con título, descripción, vista previa para redes y favicon.
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
| [VERIFICAR TARIFA VIGENTE DE META] | `src/components/secciones/Precios.astro` |

| Datos de la empresa en las páginas legales: [RAZÓN SOCIAL], [RUC], [DIRECCIÓN], [FECHA] y los demás corchetes | `src/pages/privacidad.astro`, `src/pages/terminos.astro`, `src/pages/libro-de-reclamaciones.astro` |
| Revisión legal: [BORRADOR: REVISAR CON UN ABOGADO…] | Privacidad y Términos (después de revisarlos, quitar `<AvisoBorrador />`) |
| Libro de Reclamaciones conectado a un servicio (numeración correlativa, registro y copia al consumidor) | `src/pages/libro-de-reclamaciones.astro` |

## Páginas

- Publicadas: portada, `/privacidad/`, `/terminos/`, `/libro-de-reclamaciones/` y la página 404.
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
