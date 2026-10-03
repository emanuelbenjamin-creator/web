// Contenido de las páginas de cada rubro (/rubros/<rubro>/). Son ejemplos de
// lo que se puede automatizar, no casos de clientes.
export interface ContenidoRubro {
  seo: { titulo: string; descripcion: string };
  titulo: string;
  bajada: string;
  automatiza: { pilar: string; texto: string }[];
  momentos: { hora: string; texto: string }[];
}

export const CONTENIDO_RUBROS: Record<string, ContenidoRubro> = {
  clinicas: {
    seo: {
      titulo: 'Automatización con IA para clínicas dentales y estéticas | Automatiza Studio',
      descripcion: 'Agente de IA para WhatsApp que responde a tus pacientes, agenda citas en tu calendario y envía recordatorios para reducir las inasistencias.',
    },
    titulo: 'Automatización con IA para clínicas dentales y estéticas',
    bajada: 'Tus pacientes reciben respuesta al instante, reservan solos y no se olvidan de su cita. Tu recepción se dedica a atender a quien está en la clínica.',
    automatiza: [
      { pilar: 'Responde', texto: 'Precios, tratamientos, horarios y ubicación, respondidos al instante por WhatsApp e Instagram.' },
      { pilar: 'Agenda', texto: 'Reservas en tu calendario, con confirmación y recordatorio antes de cada cita.' },
      { pilar: 'Vende', texto: 'Mensajes a pacientes que no vuelven hace meses para su control o mantenimiento.' },
      { pilar: 'Administra', texto: 'Recordatorios de pago de tratamientos en cuotas y el resumen del día en tu WhatsApp.' },
    ],
    momentos: [
      { hora: '23:47', texto: 'Un paciente pregunta por una limpieza. El agente le responde y le agenda una cita para el día siguiente.' },
      { hora: '09:00', texto: 'Los pacientes del día reciben su recordatorio con la hora y la dirección.' },
      { hora: '20:00', texto: 'Te llega el resumen: citas atendidas, nuevas reservas y pagos pendientes.' },
    ],
  },
  consultorios: {
    seo: {
      titulo: 'Agenda automática y atención por WhatsApp para consultorios | Automatiza Studio',
      descripcion: 'Tus pacientes reservan, confirman y reprograman sus citas por WhatsApp, sin llamadas. Recordatorios automáticos y respuestas al instante.',
    },
    titulo: 'Agenda y atención automática para consultorios',
    bajada: 'Entre paciente y paciente ya no tienes que contestar mensajes: las reservas, los cambios de hora y las dudas frecuentes se resuelven solos.',
    automatiza: [
      { pilar: 'Responde', texto: 'Horarios, especialidades, costos de consulta y requisitos, respondidos por WhatsApp.' },
      { pilar: 'Agenda', texto: 'Reservas y reprogramaciones por WhatsApp, directo en tu calendario.' },
      { pilar: 'Agenda', texto: 'Confirmación al reservar y recordatorio antes de la consulta.' },
      { pilar: 'Administra', texto: 'La agenda del día siguiente en tu correo, cada noche.' },
    ],
    momentos: [
      { hora: '07:30', texto: 'Un paciente pide cambiar su cita. Elige otro horario libre y el calendario se actualiza solo.' },
      { hora: '12:15', texto: 'Mientras atiendes, el agente responde las consultas de precios y requisitos.' },
      { hora: '21:00', texto: 'Recibes la agenda de mañana, ya confirmada.' },
    ],
  },
  inmobiliarias: {
    seo: {
      titulo: 'CRM y agente de IA para inmobiliarias | Automatiza Studio',
      descripcion: 'Cada interesado de portales, anuncios y WhatsApp entra solo al CRM; el agente de IA lo califica por zona y presupuesto y agenda la visita con el asesor.',
    },
    titulo: 'CRM y agente de IA para inmobiliarias',
    bajada: 'Ningún interesado se enfría esperando respuesta: el agente lo atiende al momento, lo califica y le agenda la visita con el asesor indicado.',
    automatiza: [
      { pilar: 'Responde', texto: 'Respuestas inmediatas sobre precio, metraje y ubicación de cada inmueble.' },
      { pilar: 'Vende', texto: 'Cada interesado de portales, anuncios y WhatsApp entra solo a tu CRM, con su zona y presupuesto.' },
      { pilar: 'Agenda', texto: 'Visitas agendadas en el calendario del asesor, con confirmación y recordatorio.' },
      { pilar: 'Vende', texto: 'Seguimiento automático a quienes visitaron y todavía no deciden.' },
    ],
    momentos: [
      { hora: '22:10', texto: 'Llega un interesado desde un anuncio. El agente le pregunta zona y presupuesto, y le ofrece horarios de visita.' },
      { hora: '10:00', texto: 'El asesor tiene la visita en su calendario y la ficha del cliente en el CRM.' },
      { hora: '3 días después', texto: 'El cliente que visitó recibe un mensaje de seguimiento con opciones parecidas.' },
    ],
  },
  restaurantes: {
    seo: {
      titulo: 'Pedidos automáticos por WhatsApp para restaurantes y delivery | Automatiza Studio',
      descripcion: 'Agente de IA que muestra la carta, toma pedidos por WhatsApp, confirma la dirección y los pasa a cocina, también en hora punta.',
    },
    titulo: 'Pedidos por WhatsApp para restaurantes y delivery',
    bajada: 'En hora punta ningún pedido se pierde: el agente muestra la carta, toma el pedido, confirma la dirección y lo pasa a cocina.',
    automatiza: [
      { pilar: 'Responde', texto: 'La carta, los precios, el horario y las zonas de reparto, al instante.' },
      { pilar: 'Vende', texto: 'Pedidos tomados por WhatsApp, con dirección y forma de pago confirmadas.' },
      { pilar: 'Vende', texto: 'Mensajes a clientes frecuentes con promociones del día.' },
      { pilar: 'Administra', texto: 'Ventas del día y productos más pedidos en tu WhatsApp al cierre.' },
    ],
    momentos: [
      { hora: '13:05', texto: 'Llegan muchos pedidos a la vez. El agente atiende a todos y los envía a cocina en orden.' },
      { hora: '13:40', texto: 'Cada cliente recibe el aviso de que su pedido está en camino.' },
      { hora: '23:00', texto: 'Recibes el resumen de ventas del día.' },
    ],
  },
  academias: {
    seo: {
      titulo: 'Automatización de matrículas y atención para academias e institutos | Automatiza Studio',
      descripcion: 'Agente de IA que informa horarios y precios, califica a los interesados, envía el enlace de pago y recuerda la fecha de inicio de clases.',
    },
    titulo: 'Matrículas y atención automática para academias e institutos',
    bajada: 'En cada campaña de matrícula, el agente responde las mismas preguntas por ti, acompaña al interesado hasta el pago y le recuerda cuándo empieza.',
    automatiza: [
      { pilar: 'Responde', texto: 'Cursos, horarios, precios y requisitos, respondidos por WhatsApp e Instagram.' },
      { pilar: 'Vende', texto: 'Seguimiento a los interesados hasta que se matriculan, con el enlace de pago.' },
      { pilar: 'Agenda', texto: 'Clases de prueba o entrevistas agendadas sin llamadas.' },
      { pilar: 'Administra', texto: 'Recordatorios de pensiones y del inicio de clases.' },
    ],
    momentos: [
      { hora: '20:30', texto: 'Un padre pregunta por horarios. El agente le responde y le envía el enlace de matrícula.' },
      { hora: '2 días después', texto: 'Si no completó el pago, recibe un recordatorio amable.' },
      { hora: 'Inicio de clases', texto: 'Todos los matriculados reciben la fecha, el horario y lo que deben llevar.' },
    ],
  },
  tiendas: {
    seo: {
      titulo: 'Automatización para tiendas online: WhatsApp, carritos y stock',
      descripcion: 'Agente de IA que responde sobre stock y envíos, mensajes que recuperan carritos abandonados y tu tienda conectada con tus otros sistemas.',
    },
    titulo: 'Automatización para tiendas online y retail',
    bajada: 'Respondes al instante sobre stock y envíos, recuperas carritos abandonados y tu tienda se conecta con tu facturación y tu inventario.',
    automatiza: [
      { pilar: 'Responde', texto: 'Stock, tallas, precios y tiempos de envío, respondidos por WhatsApp e Instagram.' },
      { pilar: 'Vende', texto: 'Mensajes automáticos que recuperan carritos abandonados.' },
      { pilar: 'Conecta', texto: 'Cada venta de tu tienda online pasa sola a tu facturación y a tu inventario.' },
      { pilar: 'Administra', texto: 'Alertas cuando un producto está por agotarse.' },
    ],
    momentos: [
      { hora: '21:15', texto: 'Una clienta pregunta si hay su talla. El agente revisa el stock y le envía el enlace de compra.' },
      { hora: '22:00', texto: 'Alguien dejó su carrito a medias y recibe un recordatorio.' },
      { hora: '08:00', texto: 'Las ventas de la noche ya están facturadas y descontadas del inventario.' },
    ],
  },
  estudios: {
    seo: {
      titulo: 'Automatización para estudios contables y legales | Automatiza Studio',
      descripcion: 'Documentos que llegan por WhatsApp y se leen solos, recordatorios de vencimientos y cobros automáticos para estudios contables y legales.',
    },
    titulo: 'Automatización para estudios contables y legales',
    bajada: 'Menos horas persiguiendo documentos y copiando datos: tus clientes envían todo por WhatsApp, se lee solo y los vencimientos se recuerdan a tiempo.',
    automatiza: [
      { pilar: 'Administra', texto: 'Facturas y comprobantes que llegan por WhatsApp o correo y se registran solos.' },
      { pilar: 'Administra', texto: 'Recordatorios de vencimientos y de pago de honorarios a cada cliente.' },
      { pilar: 'Conecta', texto: 'La información pasa a tu sistema contable o a tus hojas de cálculo sin digitarla.' },
      { pilar: 'Responde', texto: 'Respuestas a las consultas frecuentes de tus clientes sobre plazos y documentos.' },
    ],
    momentos: [
      { hora: 'Día 1 del mes', texto: 'Tus clientes reciben el pedido de sus documentos del mes.' },
      { hora: 'Durante el mes', texto: 'Los comprobantes que envían se leen y se registran solos.' },
      { hora: 'Antes del vencimiento', texto: 'Quien todavía no envió su información recibe un recordatorio.' },
    ],
  },
  distribuidoras: {
    seo: {
      titulo: 'Automatización de pedidos, stock y cobranzas para distribuidoras | Automatiza Studio',
      descripcion: 'Pedidos de WhatsApp, llamadas y correo registrados solos en tu ERP, alertas de stock bajo y cobranzas automáticas para distribuidoras.',
    },
    titulo: 'Automatización de pedidos, stock y cobranzas para distribuidoras',
    bajada: 'Los pedidos llegan por donde sea y se registran solos en tu sistema. El stock bajo te avisa y las cobranzas se recuerdan sin que nadie las persiga.',
    automatiza: [
      { pilar: 'Conecta', texto: 'Pedidos de WhatsApp y correo registrados solos en tu ERP.' },
      { pilar: 'Administra', texto: 'Alertas de stock bajo antes de que te quedes sin producto.' },
      { pilar: 'Administra', texto: 'Recordatorios de pago a tus clientes antes y después del vencimiento.' },
      { pilar: 'Responde', texto: 'Precios, disponibilidad y estado del pedido, respondidos a tus clientes.' },
    ],
    momentos: [
      { hora: '07:00', texto: 'Un cliente envía su pedido por WhatsApp y queda registrado en el sistema.' },
      { hora: '11:00', texto: 'Un producto baja del mínimo y recibes la alerta para reponerlo.' },
      { hora: 'Fin de mes', texto: 'Los clientes con facturas por vencer reciben su recordatorio.' },
    ],
  },
  talleres: {
    seo: {
      titulo: 'Citas y avisos por WhatsApp para talleres y servicios técnicos',
      descripcion: 'Tus clientes reciben avisos automáticos del avance de su equipo o vehículo y agendan su cita por WhatsApp, sin llamar.',
    },
    titulo: 'Avisos y citas automáticas para talleres y servicios técnicos',
    bajada: 'Tus clientes saben en qué va su equipo o su auto sin llamar, y agendan su cita por WhatsApp. Tu equipo trabaja sin interrupciones.',
    automatiza: [
      { pilar: 'Responde', texto: 'Precios de referencia, horarios y servicios, respondidos por WhatsApp.' },
      { pilar: 'Agenda', texto: 'Citas de revisión o mantenimiento agendadas por WhatsApp.' },
      { pilar: 'Responde', texto: 'Avisos automáticos cuando el equipo o el vehículo está listo.' },
      { pilar: 'Vende', texto: 'Recordatorios del próximo mantenimiento a cada cliente.' },
    ],
    momentos: [
      { hora: '08:30', texto: 'Un cliente agenda su revisión por WhatsApp y recibe la confirmación.' },
      { hora: '16:00', texto: 'El trabajo está listo y el cliente recibe el aviso para recogerlo.' },
      { hora: '6 meses después', texto: 'Le llega el recordatorio de su próximo mantenimiento.' },
    ],
  },
};
