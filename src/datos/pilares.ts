// Contenido de las páginas de cada pilar (/servicios/<pilar>/). Las
// herramientas solo se nombran en las preguntas frecuentes; en el resto se
// habla de resultados.
import type { IdPilar } from './sitio';

export interface ContenidoPilar {
  seo: { titulo: string; descripcion: string };
  titulo: string;
  bajada: string;
  incluye: { titulo: string; texto: string }[];
  pasos: { titulo: string; texto: string }[];
  plan: 'responde' | 'vende-agenda' | 'empresa';
  preguntas: { pregunta: string; respuesta: string }[];
}

export const CONTENIDO_PILARES: Record<IdPilar, ContenidoPilar> = {
  responde: {
    seo: {
      titulo: 'Agente de IA para WhatsApp: chatbot con IA para tu negocio',
      descripcion:
        'Agente de IA para WhatsApp, Instagram y tu web: responde las 24 horas con la información de tu negocio, toma pedidos y pasa a una persona cuando hace falta.',
    },
    titulo: 'Un agente de IA que responde tu WhatsApp las 24 horas',
    bajada:
      'Responde precios y preguntas frecuentes, toma pedidos y califica a los interesados en WhatsApp, Instagram, Facebook y el chat de tu web. Con la información real de tu negocio, y pasando la conversación a tu equipo cuando hace falta.',
    incluye: [
      { titulo: 'Todos tus canales', texto: 'WhatsApp, Instagram, Facebook y el chat de tu web, atendidos por el mismo agente.' },
      { titulo: 'Responde con tu información', texto: 'Lo entrenamos con tus catálogos, precios, políticas y manuales, para que conteste con datos reales y no invente.' },
      { titulo: 'Toma pedidos y reservas', texto: 'Arma el pedido, confirma los datos del cliente y lo registra donde lo necesitas.' },
      { titulo: 'Califica a los interesados', texto: 'Hace las preguntas clave y te avisa cuando alguien está listo para comprar.' },
      { titulo: 'Pasa a una persona', texto: 'Cuando la consulta lo requiere, deriva la conversación a tu equipo con todo el contexto.' },
      { titulo: 'Disponible siempre', texto: 'Responde de noche, los fines de semana y en feriados, al instante.' },
    ],
    pasos: [
      { titulo: 'Conectamos tus canales', texto: 'WhatsApp con la API oficial, Instagram, Facebook y el chat de tu web.' },
      { titulo: 'Entrenamos al agente', texto: 'Con tu catálogo, precios, horarios, políticas y las preguntas que más te hacen.' },
      { titulo: 'Lo pruebas antes', texto: 'Revisas sus respuestas y ajustamos el tono antes de que hable con tus clientes.' },
      { titulo: 'Sale en vivo y mejora', texto: 'Cada mes lo afinamos con las conversaciones reales.' },
    ],
    plan: 'responde',
    preguntas: [
      {
        pregunta: '¿El agente puede inventar respuestas?',
        respuesta:
          'Está diseñado para no hacerlo: usa una técnica llamada RAG, que busca la respuesta en los documentos de tu negocio antes de contestar. Si la información no está, lo dice y pasa la conversación a una persona.',
      },
      {
        pregunta: '¿Qué pasa cuando el cliente quiere hablar con una persona?',
        respuesta: 'El agente avisa a tu equipo y le pasa la conversación con todo lo que el cliente ya dijo, para que nadie tenga que repetir nada.',
      },
      {
        pregunta: '¿Funciona solo en WhatsApp?',
        respuesta: 'No. El mismo agente puede atender Instagram, Facebook y el chat de tu web.',
      },
      {
        pregunta: '¿Necesito la API oficial de WhatsApp?',
        respuesta:
          'Para que el agente responda solo y de forma estable, sí: es la vía autorizada por Meta y reduce el riesgo de que bloqueen tu número. Te acompañamos en todo el proceso para activarla.',
      },
    ],
  },
  vende: {
    seo: {
      titulo: 'CRM para pymes con seguimiento automático | Automatiza Studio',
      descripcion:
        'CRM para pymes que se llena solo: cada contacto de WhatsApp, redes y tu web entra al embudo y recibe seguimiento automático. Recupera clientes y cotizaciones.',
    },
    titulo: 'Un CRM que se llena solo y no deja enfriar a ningún cliente',
    bajada:
      'Cada persona que te escribe por WhatsApp, redes, tu web o tus anuncios de Meta entra sola a tu CRM. El seguimiento por WhatsApp y correo sigue hasta cerrar la venta.',
    incluye: [
      { titulo: 'Todos los contactos en un lugar', texto: 'WhatsApp, redes, formularios de tu web y anuncios de Meta entran solos a tu embudo de ventas.' },
      { titulo: 'Seguimiento automático', texto: 'Mensajes por WhatsApp y correo en los momentos que definas, hasta que el cliente responda o compre.' },
      { titulo: 'Recuperación de oportunidades', texto: 'Clientes antiguos, carritos abandonados y cotizaciones sin respuesta reciben un nuevo contacto automático.' },
      { titulo: 'Prospección con IA', texto: 'Buscamos posibles clientes según tu perfil ideal y preparamos mensajes personalizados para contactarlos.' },
      { titulo: 'Todo a la vista', texto: 'Ves en qué etapa está cada oportunidad y cuáles necesitan atención hoy.' },
    ],
    pasos: [
      { titulo: 'Diseñamos tu embudo', texto: 'Las etapas reales de tu venta, de “nuevo contacto” a “venta cerrada”.' },
      { titulo: 'Conectamos tus canales', texto: 'WhatsApp, redes, tu web y tus anuncios envían cada contacto al CRM sin que nadie lo copie.' },
      { titulo: 'Programamos el seguimiento', texto: 'Mensajes y tiempos que tú apruebas, que se detienen cuando el cliente responde.' },
      { titulo: 'Vendes con todo a la vista', texto: 'Tu equipo ve cada oportunidad y recibe avisos de las que necesitan atención.' },
    ],
    plan: 'vende-agenda',
    preguntas: [
      {
        pregunta: '¿Necesito tener un CRM?',
        respuesta: 'No. Si ya usas uno, como HubSpot o Kommo, lo conectamos. Si no tienes, implementamos uno a la medida de tu forma de vender.',
      },
      {
        pregunta: '¿Los mensajes de seguimiento no molestan a los clientes?',
        respuesta:
          'Tú apruebas el tono, la frecuencia y cuándo se detienen. Además, en WhatsApp solo se escribe a quien aceptó recibir mensajes de tu negocio, como exige Meta.',
      },
      {
        pregunta: '¿Qué es la prospección con IA?',
        respuesta:
          'Buscamos empresas o personas que encajan con tu cliente ideal y preparamos mensajes personalizados para contactarlas, respetando las reglas de cada canal.',
      },
    ],
  },
  agenda: {
    seo: {
      titulo: 'Agenda automática por WhatsApp con recordatorios',
      descripcion:
        'Reservas automáticas desde WhatsApp o tu web, conectadas a tu calendario, con confirmaciones y recordatorios para reducir las inasistencias.',
    },
    titulo: 'Citas que se agendan, confirman y recuerdan solas',
    bajada:
      'Tus clientes reservan desde WhatsApp o tu web, directo en Google Calendar. Las confirmaciones, los recordatorios y los cambios de hora se resuelven solos, sin llamadas.',
    incluye: [
      { titulo: 'Reservas desde WhatsApp o tu web', texto: 'El cliente elige servicio, día y hora en una conversación o desde un enlace.' },
      { titulo: 'Conectado a Google Calendar', texto: 'Solo se ofrecen los horarios libres, y cada cita queda en tu calendario.' },
      { titulo: 'Confirmaciones al instante', texto: 'El cliente recibe la confirmación con los datos de su cita en el momento.' },
      { titulo: 'Recordatorios', texto: 'Avisos antes de la cita para que falten menos.' },
      { titulo: 'Cambios sin llamadas', texto: 'Si el cliente no puede, elige otra hora por WhatsApp y el calendario se actualiza solo.' },
    ],
    pasos: [
      { titulo: 'Definimos tus reglas', texto: 'Servicios, duración, horarios de atención y quién atiende cada cita.' },
      { titulo: 'Conectamos tu calendario', texto: 'Google Calendar y el canal por donde tus clientes reservan.' },
      { titulo: 'Configuramos los avisos', texto: 'Confirmaciones y recordatorios con el tono de tu negocio.' },
      { titulo: 'Tus clientes reservan solos', texto: 'Y tu equipo se dedica a atender.' },
    ],
    plan: 'vende-agenda',
    preguntas: [
      {
        pregunta: '¿Funciona con mi calendario?',
        respuesta: 'Trabajamos con Google Calendar. Si usas otro sistema de reservas, revisamos en el diagnóstico cómo conectarlo.',
      },
      {
        pregunta: '¿Puedo poner reglas de horarios y anticipación?',
        respuesta: 'Sí: horarios de atención, duración de cada servicio, tiempo mínimo para reservar y quién atiende.',
      },
      {
        pregunta: '¿Qué pasa si el cliente quiere cambiar la hora?',
        respuesta: 'Lo pide por WhatsApp, elige un horario libre y la cita se mueve sola en tu calendario.',
      },
    ],
  },
  administra: {
    seo: {
      titulo: 'Automatización de procesos: facturas, reportes y cobranzas',
      descripcion:
        'Automatización de procesos: lectura de facturas, reportes de ventas, caja e inventario que llegan solos, conciliaciones, alertas de stock y cobranzas.',
    },
    titulo: 'Menos Excel: facturas, reportes y cobranzas en automático',
    bajada:
      'Leemos tus facturas y comprobantes, armamos los reportes de ventas, caja e inventario y recordamos los pagos por ti. La información te llega sola por correo o WhatsApp.',
    incluye: [
      { titulo: 'Lectura automática de documentos', texto: 'Facturas, comprobantes y otros documentos se leen y se registran sin digitarlos.' },
      { titulo: 'Reportes que llegan solos', texto: 'Ventas, caja e inventario en tu correo o WhatsApp, con la frecuencia que elijas.' },
      { titulo: 'Conciliaciones', texto: 'Comparamos tus registros, por ejemplo ventas y pagos recibidos, y te avisamos de las diferencias.' },
      { titulo: 'Alertas de stock', texto: 'Te avisamos cuando un producto está por agotarse.' },
      { titulo: 'Cobranzas y recordatorios de pago', texto: 'Tus clientes reciben recordatorios antes y después del vencimiento.' },
    ],
    pasos: [
      { titulo: 'Mapeamos tus tareas', texto: 'Vemos qué hace tu equipo a mano cada día, cada semana y cada mes.' },
      { titulo: 'Automatizamos el registro', texto: 'Los documentos se leen y los datos se guardan solos donde corresponde.' },
      { titulo: 'Programamos reportes y alertas', texto: 'Qué indicadores ver, cada cuánto y a quién le llegan.' },
      { titulo: 'Recibes todo a tiempo', texto: 'En tu correo o WhatsApp, sin armar un solo Excel.' },
    ],
    plan: 'empresa',
    preguntas: [
      {
        pregunta: '¿Qué documentos se pueden leer?',
        respuesta: 'Facturas, boletas, comprobantes y otros documentos en PDF o en foto. En el diagnóstico revisamos tus formatos reales.',
      },
      {
        pregunta: '¿Puedo elegir qué incluye cada reporte?',
        respuesta: 'Sí. Definimos juntos qué indicadores ver, cada cuánto y por dónde te llegan.',
      },
      {
        pregunta: '¿Se conecta con mi sistema de facturación o contabilidad?',
        respuesta: 'En la mayoría de casos, sí: de eso se encarga el pilar Conecta. Lo revisamos en el diagnóstico.',
      },
    ],
  },
  conecta: {
    seo: {
      titulo: 'Integración de sistemas: CRM, ERP, facturación y tienda online',
      descripcion:
        'Integración de sistemas: conectamos tu CRM, ERP, facturación electrónica, tienda online y Excel para que la información fluya sola, sin copiar y pegar.',
    },
    titulo: 'Tus sistemas conectados, sin copiar y pegar datos',
    bajada:
      'Unimos los sistemas que ya usas —CRM, ERP, facturación electrónica, tienda online, Excel y correo— para que la información pase de uno a otro sola.',
    incluye: [
      { titulo: 'Integración entre tus sistemas', texto: 'CRM, ERP como Odoo, facturación electrónica, tiendas como Shopify o WooCommerce, Google Workspace, Excel y bases de datos.' },
      { titulo: 'Flujos automáticos', texto: 'Pedidos, clientes, facturas y stock pasan de un sistema a otro sin que nadie intervenga.' },
      { titulo: 'Sistemas propios', texto: 'Si tu empresa tiene un sistema a medida, lo conectamos a través de su API.' },
      { titulo: 'Asistente de IA interno', texto: 'Tu equipo consulta la información de la empresa en segundos, desde un chat.' },
    ],
    pasos: [
      { titulo: 'Revisamos tus sistemas', texto: 'Qué usas hoy y cómo se mueve la información entre áreas.' },
      { titulo: 'Diseñamos los flujos', texto: 'Qué dato pasa de dónde a dónde, y en qué momento.' },
      { titulo: 'Los construimos y probamos', texto: 'Con datos reales y junto a tu equipo, antes de activarlos.' },
      { titulo: 'Los vigilamos', texto: 'Monitoreamos que todo funcione y te avisamos si algo se detiene.' },
    ],
    plan: 'empresa',
    preguntas: [
      {
        pregunta: '¿Con qué sistemas se conecta?',
        respuesta:
          'Con los más usados por las empresas —CRM como HubSpot o Kommo, ERP como Odoo, facturación electrónica, Shopify, WooCommerce, Google Workspace, Excel y bases de datos— y con sistemas propios que tengan API.',
      },
      {
        pregunta: '¿Tengo que cambiar de sistema?',
        respuesta: 'No. Trabajamos con lo que ya usas: la idea es que tus sistemas se hablen, no reemplazarlos.',
      },
      {
        pregunta: '¿Qué es un asistente de IA interno?',
        respuesta:
          'Un chat para tu equipo que responde con la información de tu empresa —procedimientos, precios, stock, políticas—, para que nadie pierda tiempo buscándola.',
      },
      {
        pregunta: '¿Qué pasa si una integración falla?',
        respuesta: 'Monitoreamos los flujos como parte del soporte mensual y te avisamos si algo se detiene, mientras lo resolvemos.',
      },
    ],
  },
};
