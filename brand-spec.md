# Automatiza Studio: especificación de marca

Referencia de diseño para todas las páginas del sitio. Cuando algo cambie
(logo real, paleta elegida), se actualiza aquí primero.

## Identidad

- **Nombre:** Automatiza Studio · automatizastudio.com · hola@automatizastudio.com
- **Promesa:** "Tu negocio funcionando en automático: responde, vende, agenda y se administra solo, las 24 horas."
- **Logo:** de texto ("Automatiza" en negrita + "Studio" atenuado, separados por una línea fina), en `src/components/Encabezado.astro`. [LOGO DEFINITIVO PENDIENTE si se diseña uno.]
- **Tono:** español neutro, tuteo, frases cortas, sin tecnicismos. Se vende el resultado, no la herramienta.

## Dirección visual

- **Referencia elegida por el cliente:** portada de Hostinger Horizons (fondo oscuro con columnas de luz, titular centrado y vitrina con pestañas).
- **Paleta violeta (elegida por el cliente):**
  - fondo `#0A0B14`; superficies `#141625`, `#1C1F33` y `#0E0F1A`;
  - acento `#6A45F5`, con texto blanco (5.55:1);
  - acento como texto `#B3A6FF` (9.2:1);
  - brillo cálido `#FF8A4C` / `#FF5FA2`, solo en el fondo de la portada.
- **Texto:** principal `#F5F4FA`, secundario `#A9ACC2`.
- **Tipografías:**
  - Bricolage Grotesque en los titulares (500–600, tracking −0.03em);
  - Figtree en el texto (17 px);
  - ambas autoalojadas con @fontsource.
- **Formas:**
  - botones con 12 px de radio;
  - tarjetas con 16 px y la vitrina con 24 px;
  - las pestañas en píldora.
- **Excepción de color:** el verde de WhatsApp (`#25D366`) solo se usa en el botón flotante de WhatsApp.

## Recursos pendientes (no se inventan)

- Videos de demostración: [VIDEO PENDIENTE] ×3.
- Testimonios: [TESTIMONIO REAL PENDIENTE].
- Equipo o fundador: [NOMBRE Y EXPERIENCIA] y su foto.
- Imagen para redes (`public/og.png`, 1200×630).
- Datos de contacto: se completan en `src/datos/sitio.ts`.
