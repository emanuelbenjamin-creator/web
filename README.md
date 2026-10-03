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
