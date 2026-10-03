import { RUBROS } from './rubros';

// Datos de contacto en un solo lugar. Todo lo que va entre [CORCHETES] lo
// completa Automatiza Studio antes de publicar.
export const SITIO = {
  nombre: 'Automatiza Studio',
  dominio: 'https://automatizastudio.com',
  correo: 'hola@automatizastudio.com',
  ciudad: '[CIUDAD]',
  whatsapp: '[NÚMERO]', // solo dígitos con código de país, por ejemplo 51987654321
  instagram: '[@USUARIO]',
  linkedin: '[PÁGINA]',
  agenda: '[ENLACE DE CALENDLY O SIMILAR]',
};

export const pendiente = (valor: string) => valor.startsWith('[');

// Enlace de WhatsApp con un mensaje ya escrito. Mientras falte el número,
// lleva al formulario de contacto (respaldo) para que ningún botón quede roto.
export function enlaceWhatsApp(mensaje = 'Hola, quiero automatizar mi negocio', respaldo = '/#contacto') {
  if (pendiente(SITIO.whatsapp)) return respaldo;
  return `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export function enlaceAgenda(respaldo = '/#contacto') {
  return pendiente(SITIO.agenda) ? respaldo : SITIO.agenda;
}

// Páginas internas ya construidas. Al crear una página nueva se agrega
// aquí, y los enlaces que apuntan a ella se activan solos (mientras tanto
// llevan a su sección de la portada o no se muestran, para que no haya 404).

// Los 5 pilares: la ruta de su página y una línea para el menú.
export const PILARES = [
  { id: 'responde', nombre: 'Responde', ruta: '/servicios/responde/', lema: 'Atención automática 24/7' },
  { id: 'vende', nombre: 'Vende', ruta: '/servicios/vende/', lema: 'Ningún cliente se pierde' },
  { id: 'agenda', nombre: 'Agenda', ruta: '/servicios/agenda/', lema: 'Citas sin llamadas' },
  { id: 'administra', nombre: 'Administra', ruta: '/servicios/administra/', lema: 'Menos Excel, más tiempo' },
  { id: 'conecta', nombre: 'Conecta', ruta: '/servicios/conecta/', lema: 'Tus sistemas, conectados' },
] as const;
export type IdPilar = (typeof PILARES)[number]['id'];

// Páginas internas ya construidas. Al crear una página nueva se agrega
// aquí, y los enlaces que apuntan a ella se activan solos (mientras tanto
// llevan a su sección de la portada o no se muestran, para que no haya 404).
export const PUBLICADAS = new Set<string>([
  '/privacidad/',
  '/terminos/',
  '/libro-de-reclamaciones/',
  '/precios/',
  '/nosotros/',
  '/contacto/',
  '/blog/',
  '/en/',
  ...PILARES.map((p) => p.ruta),
  ...RUBROS.map((r) => `/rubros/${r.id}/`),
]);
export const publicada = (ruta: string) => PUBLICADAS.has(ruta);

// [BORRA LAS QUE NO USES ANTES DE PUBLICAR]
export const TECNOLOGIAS = [
  'n8n', 'Make', 'API oficial de WhatsApp Business', 'OpenAI', 'Claude', 'Gemini', 'HubSpot',
  'Kommo', 'Google Workspace', 'Odoo', 'Shopify', 'WooCommerce', 'Supabase',
];
