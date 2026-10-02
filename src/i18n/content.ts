import { site, type Lang } from '../config/site';

export const rutes = {
  ca: { home: '/', avis: '/avis-legal', privacitat: '/politica-privacitat' },
  es: { home: '/es/', avis: '/es/aviso-legal', privacitat: '/es/politica-privacidad' },
} as const;

const ca = {
  meta: {
    title: 'Basalt Webs · Webs amb reserves per a negocis de proximitat',
    description:
      "Webs amb reserves en línia per a negocis de proximitat: barberies, centres d'estètica, teràpies, massatges i més. El primer mes és gratis.",
  },
  nav: {
    com: 'Com funciona',
    inclou: 'Què inclou',
    preus: 'Preus',
    faq: 'Preguntes',
    contacte: 'Contacte',
    saltar: 'Salta al contingut',
    idioma: 'Idioma',
  },
  hero: {
    etiqueta: 'Barberies · Estètica · Teràpies · Massatges',
    titol: 'Webs amb reserves per a negocis de proximitat',
    subtitol:
      "Els teus clients demanen hora des del mòbil, a qualsevol hora, i tu ho gestiones tot des d'un panell.",
    cta: 'Parlem per WhatsApp',
    secundari: 'Com funciona',
    nota: 'El primer mes és gratis',
  },
  problema: {
    etiqueta: 'El problema',
    titol: 'Quan estàs treballant, no pots agafar el telèfon.',
    text: 'I cada trucada perduda és un client que reserva en un altre lloc. Amb reserves en línia, el client tria hora quan li va bé, i tu continues amb el que estaves fent.',
    trucades: 'Trucades perdudes',
    avui: 'Avui',
    reserva: 'Nova reserva',
    reservaDetall: 'Dijous · 17:30 · Tall i barba',
  },
  passos: {
    etiqueta: 'Com funciona',
    titol: 'En tres passos, i sense complicacions',
    llista: [
      { t: 'Et preparo una proposta', d: 'Amb el nom del teu negoci, els teus serveis i el teu horari. La veus abans de decidir res.' },
      { t: 'La revisem junts', d: "Ho mirem plegats i l'adaptem fins que t'hi sentis còmode: textos, fotos, serveis i preus." },
      { t: 'La publiquem', d: 'La web surt a internet i comences a rebre reserves. Tu les veus totes al panell.' },
    ],
  },
  inclou: {
    etiqueta: 'Què inclou',
    titol: "Tot el que necessites per omplir l'agenda",
    llista: [
      { t: 'Web pròpia adaptada al mòbil', d: 'Amb el teu nom, els teus serveis, les teves fotos i com arribar-hi.' },
      { t: 'Reserves en línia les 24 hores', d: "Els clients demanen hora quan volen, fins i tot amb el negoci tancat." },
      { t: 'Panell de gestió', d: "Veus les cites i canvies l'horari, els serveis i els dies de vacances tu mateix." },
      { t: 'Català i castellà', d: 'La web en els dos idiomes, perquè t\'entengui tothom.' },
      { t: 'Avís legal i privacitat', d: 'Els textos legals preparats i enllaçats on toca.' },
      { t: 'Manteniment', d: 'Ens encarreguem que tot funcioni. Si cal canviar alguna cosa, ens ho dius.' },
    ],
  },
  preus: {
    etiqueta: 'Preus',
    titol: 'Preus clars, sense sorpreses',
    posada: 'Posada en marxa',
    posadaNota: 'Un sol pagament',
    manteniment: 'Manteniment',
    mes: 'al mes',
    mantenimentNota: 'Allotjament, actualitzacions i suport',
    destacat: 'El primer mes és gratis.',
    destacat2: 'Si no et porta reserves, no pagues res.',
    sensePermanencia: 'Sense permanència',
    cta: 'Demana la teva proposta',
  },
  quisom: {
    etiqueta: 'Qui som',
    titol: 'Tracte proper, siguis on siguis',
    text: "Basalt Webs neix a la Garrotxa per ajudar els negocis de proximitat a tenir una web professional, a l'altura del seu ofici, que treballa per ells les 24 hores. Treballem amb negocis de tot arreu, en persona o per videotrucada. T'atenem directament, sense intermediaris, i parlem el teu idioma.",
    signatura: `${site.persona}, de Basalt Webs`,
    peuFoto: 'Cingle de basalt de Castellfollit de la Roca',
    foto: 'Foto',
  },
  faq: {
    etiqueta: 'Preguntes freqüents',
    titol: 'El que sol preguntar la gent',
    llista: [
      { q: "Cal saber d'informàtica?", a: "No. Si saps fer servir el WhatsApp, saps fer servir el panell. I si tens cap dubte, ens truques o ens escrius." },
      { q: "Puc canviar l'horari jo mateix?", a: "Sí, des del panell. Pots canviar l'horari, els serveis i marcar els dies de vacances, i la web s'actualitza al moment." },
      { q: 'Què passa si un client arriba sense reserva?', a: "Cap problema. Pots reservar part de la capacitat per als clients de carrer, de manera que sempre et quedi lloc per a qui passa per la porta." },
      { q: 'Hi ha permanència?', a: 'No. Pagues mes a mes i ho pots deixar quan vulguis.' },
    ],
  },
  contacte: {
    etiqueta: 'Contacte',
    titol: 'Parlem del teu negoci',
    text: "Escriu-nos per WhatsApp i et preparem una proposta amb el teu nom i els teus serveis, sense compromís.",
    cta: 'Escriu per WhatsApp',
    correu: 'O per correu',
  },
  peu: {
    avis: 'Avís legal',
    privacitat: 'Política de privacitat',
    foto: 'Foto de',
    a: 'a',
  },
  mobilCta: 'WhatsApp',
};

export type Dict = typeof ca;

const es: Dict = {
  meta: {
    title: 'Basalt Webs · Webs con reservas para negocios de proximidad',
    description:
      "Webs con reservas online para negocios de proximidad: barberías, centros de estética, terapias, masajes y más. El primer mes es gratis.",
  },
  nav: {
    com: 'Cómo funciona',
    inclou: 'Qué incluye',
    preus: 'Precios',
    faq: 'Preguntas',
    contacte: 'Contacto',
    saltar: 'Saltar al contenido',
    idioma: 'Idioma',
  },
  hero: {
    etiqueta: 'Barberías · Estética · Terapias · Masajes',
    titol: 'Webs con reservas para negocios de proximidad',
    subtitol:
      'Tus clientes piden hora desde el móvil, a cualquier hora, y tú lo gestionas todo desde un panel.',
    cta: 'Hablemos por WhatsApp',
    secundari: 'Cómo funciona',
    nota: 'El primer mes es gratis',
  },
  problema: {
    etiqueta: 'El problema',
    titol: 'Cuando estás trabajando, no puedes coger el teléfono.',
    text: 'Y cada llamada perdida es un cliente que reserva en otro sitio. Con reservas online, el cliente elige hora cuando le va bien, y tú sigues con lo que estabas haciendo.',
    trucades: 'Llamadas perdidas',
    avui: 'Hoy',
    reserva: 'Nueva reserva',
    reservaDetall: 'Jueves · 17:30 · Corte y barba',
  },
  passos: {
    etiqueta: 'Cómo funciona',
    titol: 'En tres pasos, y sin complicaciones',
    llista: [
      { t: 'Te preparo una propuesta', d: 'Con el nombre de tu negocio, tus servicios y tu horario. La ves antes de decidir nada.' },
      { t: 'La revisamos juntos', d: 'La miramos juntos y la adaptamos hasta que te sientas cómodo: textos, fotos, servicios y precios.' },
      { t: 'La publicamos', d: 'La web sale a internet y empiezas a recibir reservas. Tú las ves todas en el panel.' },
    ],
  },
  inclou: {
    etiqueta: 'Qué incluye',
    titol: 'Todo lo que necesitas para llenar la agenda',
    llista: [
      { t: 'Web propia adaptada al móvil', d: 'Con tu nombre, tus servicios, tus fotos y cómo llegar.' },
      { t: 'Reservas online 24 horas', d: 'Los clientes piden hora cuando quieren, incluso con el negocio cerrado.' },
      { t: 'Panel de gestión', d: 'Ves las citas y cambias el horario, los servicios y los días de vacaciones tú mismo.' },
      { t: 'Catalán y castellano', d: 'La web en los dos idiomas, para que te entienda todo el mundo.' },
      { t: 'Aviso legal y privacidad', d: 'Los textos legales preparados y enlazados donde toca.' },
      { t: 'Mantenimiento', d: 'Nos encargamos de que todo funcione. Si hay que cambiar algo, nos lo dices.' },
    ],
  },
  preus: {
    etiqueta: 'Precios',
    titol: 'Precios claros, sin sorpresas',
    posada: 'Puesta en marcha',
    posadaNota: 'Un solo pago',
    manteniment: 'Mantenimiento',
    mes: 'al mes',
    mantenimentNota: 'Alojamiento, actualizaciones y soporte',
    destacat: 'El primer mes es gratis.',
    destacat2: 'Si no te trae reservas, no pagas nada.',
    sensePermanencia: 'Sin permanencia',
    cta: 'Pide tu propuesta',
  },
  quisom: {
    etiqueta: 'Quiénes somos',
    titol: 'Trato cercano, estés donde estés',
    text: 'Basalt Webs nace en la Garrotxa para ayudar a los negocios de proximidad a tener una web profesional, a la altura de su oficio, que trabaja para ellos las 24 horas. Trabajamos con negocios de todas partes, en persona o por videollamada. Te atendemos directamente, sin intermediarios, y hablamos tu idioma.',
    signatura: `${site.persona}, de Basalt Webs`,
    peuFoto: 'Acantilado de basalto de Castellfollit de la Roca',
    foto: 'Foto',
  },
  faq: {
    etiqueta: 'Preguntas frecuentes',
    titol: 'Lo que suele preguntar la gente',
    llista: [
      { q: '¿Hace falta saber de informática?', a: 'No. Si sabes usar WhatsApp, sabes usar el panel. Y si tienes cualquier duda, nos llamas o nos escribes.' },
      { q: '¿Puedo cambiar el horario yo mismo?', a: 'Sí, desde el panel. Puedes cambiar el horario, los servicios y marcar los días de vacaciones, y la web se actualiza al momento.' },
      { q: '¿Qué pasa si un cliente llega sin reserva?', a: 'Ningún problema. Puedes reservar parte de la capacidad para los clientes de calle, de modo que siempre te quede sitio para quien entra por la puerta.' },
      { q: '¿Hay permanencia?', a: 'No. Pagas mes a mes y lo puedes dejar cuando quieras.' },
    ],
  },
  contacte: {
    etiqueta: 'Contacto',
    titol: 'Hablemos de tu negocio',
    text: 'Escríbenos por WhatsApp y te preparamos una propuesta con tu nombre y tus servicios, sin compromiso.',
    cta: 'Escribe por WhatsApp',
    correu: 'O por correo',
  },
  peu: {
    avis: 'Aviso legal',
    privacitat: 'Política de privacidad',
    foto: 'Foto de',
    a: 'en',
  },
  mobilCta: 'WhatsApp',
};

export const dict: Record<Lang, Dict> = { ca, es };
