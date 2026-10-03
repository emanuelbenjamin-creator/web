// Idiomas del sitio. El idioma de cada página sale de su URL (Astro i18n:
// español en la raíz, inglés en /en/), así que los componentes no reciben el
// idioma por props: llaman a textos(Astro.currentLocale).
import { es } from './es';
import { en } from './en';

export type Idioma = 'es' | 'en';
export type Textos = typeof es;

const TEXTOS: Record<Idioma, Textos> = { es, en };

export const idiomaDe = (locale?: string): Idioma => (locale === 'en' ? 'en' : 'es');
export const textos = (locale?: string): Textos => TEXTOS[idiomaDe(locale)];

// Ancla de una sección de la portada en el idioma: "/#precios" o "/en/#pricing".
export const ancla = (t: Textos, id: keyof Textos['ids']) => `${t.inicio}#${t.ids[id]}`;
