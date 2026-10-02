import { site, type Lang } from '../config/site';

export const rutes = {
  ca: { home: '/', avis: '/avis-legal', privacitat: '/politica-privacitat' },
  es: { home: '/es/', avis: '/es/aviso-legal', privacitat: '/es/politica-privacidad' },
} as const;

// `enLinia: false` mentre la web del client no estigui publicada:
// es mostra com a «aviat en línia» i sense enllaç.
export const exemples = [
  { id: 'sergi-moragas', nom: 'Sergi Moragas', tipus: { ca: 'Teràpia manual', es: 'Terapia manual' }, lloc: 'Camprodon', url: 'https://sergi-moragas.pages.dev', enLinia: true },
  { id: 'celbellesa', nom: 'Celbellesa', tipus: { ca: "Centre d'estètica", es: 'Centro de estética' }, lloc: 'Banyoles', url: 'https://celbellesa.pages.dev', enLinia: true },
  { id: 'mimat-ripoll', nom: "Mima't", tipus: { ca: 'Estètica', es: 'Estética' }, lloc: 'Ripoll', url: 'https://mimat-ripoll.pages.dev', enLinia: true },
  { id: 'latin-barber-olot', nom: 'Latin barber', tipus: { ca: 'Barberia', es: 'Barbería' }, lloc: 'Olot', url: 'https://latin-barber-olot.pages.dev', enLinia: false },
  { id: 'espai-essencial', nom: 'Espai Essencial', tipus: { ca: 'Massatges', es: 'Masajes' }, lloc: 'Olot', url: 'https://espai-essencial.pages.dev', enLinia: false },
  { id: 'maderonatur', nom: 'Maderonatur', tipus: { ca: 'Maderoteràpia', es: 'Maderoterapia' }, lloc: 'Banyoles', url: 'https://maderonatur.pages.dev', enLinia: true },
];

const ca = {
  meta: {
    title: 'Basalt Webs · Webs amb reserves per a negocis de proximitat',
    description:
      'Webs amb reserves en línia per a negocis de proximitat de tot Catalunya, fetes des de la Garrotxa. Proposta gratis i un sol pagament, sense quotes mensuals.',
  },
  nav: {
    demo: 'Prova-ho',
    exemples: 'Exemples',
    com: 'Com funciona',
    preu: 'Preu',
    faq: 'Preguntes',
    contacte: 'Contacte',
    saltar: 'Salta al contingut',
    idioma: 'Idioma',
    inici: 'Inici',
  },
  hero: {
    titol: 'Webs amb reserves per a negocis de proximitat',
    subtitol:
      "Els teus clients demanen hora des del mòbil, a qualsevol hora, i tu ho gestiones tot des d'un panell.",
    cta: 'Parlem per WhatsApp',
    secundari: 'Veure exemples',
    origen: 'Des de la Garrotxa, per a tot Catalunya',
    peuMobil: 'Pàgina de reserva de Celbellesa, Banyoles, amb les hores lliures',
  },
  problema: {
    titol: 'Quan estàs treballant, no pots agafar el telèfon.',
    text: 'I cada trucada perduda és un client que reserva en un altre lloc. Amb reserves en línia, el client tria hora quan li va bé, i tu continues amb el que estaves fent.',
    trucades: 'Trucades perdudes avui',
    perduda: 'Sense resposta',
  },
  demo: {
    titol: 'Prova-ho tu mateix',
    text: 'Fes una reserva al mòbil i mira com arriba al panell del negoci. Són deu segons.',
    etiqueta: 'Demostració',
    avis: "No es desa ni s'envia cap dada.",
    negoci: 'Barberia del Firal',
    passos: ['Tria el servei', 'Tria el dia', "Tria l'hora", 'Confirma'],
    serveis: [
      { nom: 'Tall de cabell', durada: '30 min' },
      { nom: 'Tall i barba', durada: '45 min' },
      { nom: 'Arreglar la barba', durada: '20 min' },
    ],
    ocupada: 'ocupada',
    confirmar: 'Confirmar reserva',
    triaAbans: 'Tria servei, dia i hora',
    confirmada: 'Reserva confirmada',
    confirmadaText: 'Rebràs un recordatori el dia abans.',
    altra: 'Fer-ne una altra',
    client: 'Tu (demostració)',
    panell: 'Panell del negoci',
    nova: 'Nova',
    reserves: 'reserves',
    novaArribada: 'Nova reserva al panell',
    clients: ['Marc P.', 'Laia R.', 'Jordi C.', 'Pere V.', 'Núria S.', 'Àlex M.', 'Toni G.'],
  },
  exemples: {
    titol: 'Webs que ja reben reserves',
    text: 'Negocis de Camprodon, Banyoles i Ripoll.',
    veure: 'Obrir la web',
    aviat: 'Aviat en línia',
    alt: 'Captura de la web de',
  },
  passos: {
    titol: 'Com funciona',
    llista: [
      { t: 'Et preparem una proposta gratis', d: 'Amb el nom del teu negoci i els teus serveis. La veus funcionant abans de decidir res.' },
      { t: 'La revisem junts', d: "L'adaptem fins que t'hi sentis còmode: textos, fotos, serveis, horaris i preus." },
      { t: 'La publiquem', d: 'La web surt a internet i comences a rebre reserves. Les veus totes al panell.' },
    ],
  },
  inclou: {
    titol: 'Què inclou',
    llista: [
      { t: 'Web pròpia adaptada al mòbil', d: 'Amb el teu nom, els teus serveis, les teves fotos i com arribar-hi.' },
      { t: 'Reserves en línia les 24 hores', d: 'Els clients demanen hora quan volen, fins i tot amb el negoci tancat.' },
      { t: 'Diversos clients alhora', d: "Si tens més d'una cadira, llitera o professional, cada franja accepta les reserves que hi càpiguen." },
      { t: 'Panell de gestió', d: "Veus les cites i canvies l'horari, els serveis i els dies de vacances tu mateix." },
      { t: 'Català i castellà', d: "La web en els dos idiomes, perquè t'entengui tothom." },
      { t: 'Avís legal i privacitat', d: 'Els textos legals preparats i enllaçats on toca.' },
    ],
  },
  preu: {
    titol: 'Un sol pagament',
    iva: '+ IVA',
    punts: ['Sense quotes mensuals', 'Sense permanència', 'Proposta gratis'],
    destacat: "La proposta és gratis i sense compromís: només pagues si t'agrada.",
    cta: 'Demana la teva proposta',
  },
  quisom: {
    titol: 'Arrels a la Garrotxa, clients a tot Catalunya',
    text: "Basalt Webs neix a la Garrotxa, terra de volcans i de gent treballadora, per ajudar els negocis de proximitat de tot Catalunya a tenir una web professional, a l'altura del seu ofici, que treballa per ells les 24 hores. Com el basalt: sòlida i feta per durar. T'atenem directament, sense intermediaris, i parlem el teu idioma.",
    signatura: `${site.persona}, de Basalt Webs`,
    peuFoto: 'Cingle de basalt de Castellfollit de la Roca',
    foto: 'Foto',
  },
  faq: {
    titol: 'Preguntes freqüents',
    llista: [
      { q: "Cal saber d'informàtica?", a: 'No. Si saps fer servir el WhatsApp, saps fer servir el panell. I si tens cap dubte, ens truques o ens escrius.' },
      { q: "Puc canviar l'horari jo mateix?", a: "Sí, des del panell. Pots canviar l'horari, els serveis i marcar els dies de vacances, i la web s'actualitza al moment." },
      { q: 'Què passa si un client arriba sense reserva?', a: 'Pots reservar part de la capacitat per als clients de carrer, perquè sempre et quedi lloc per a qui entra per la porta.' },
      { q: 'Hi ha quotes mensuals?', a: 'No. Pagues una sola vegada. Sense quotes mensuals i sense permanència.' },
    ],
  },
  contacte: {
    titol: 'Parlem del teu negoci',
    text: 'Escriu-nos per WhatsApp i et preparem una proposta gratis amb el teu nom i els teus serveis.',
    cta: 'Escriu per WhatsApp',
    correu: 'Correu electrònic',
  },
  peu: {
    avis: 'Avís legal',
    privacitat: 'Política de privacitat',
    origen: 'Fet a la Garrotxa, per a negocis de tot Catalunya',
    fotos: 'Fotos',
    a: 'a',
  },
};

export type Dict = typeof ca;

const es: Dict = {
  meta: {
    title: 'Basalt Webs · Webs con reservas para negocios de proximidad',
    description:
      'Webs con reservas online para negocios de proximidad de toda Cataluña, hechas desde la Garrotxa. Propuesta gratis y un solo pago, sin cuotas mensuales.',
  },
  nav: {
    demo: 'Pruébalo',
    exemples: 'Ejemplos',
    com: 'Cómo funciona',
    preu: 'Precio',
    faq: 'Preguntas',
    contacte: 'Contacto',
    saltar: 'Saltar al contenido',
    idioma: 'Idioma',
    inici: 'Inicio',
  },
  hero: {
    titol: 'Webs con reservas para negocios de proximidad',
    subtitol: 'Tus clientes piden hora desde el móvil, a cualquier hora, y tú lo gestionas todo desde un panel.',
    cta: 'Hablemos por WhatsApp',
    secundari: 'Ver ejemplos',
    origen: 'Desde la Garrotxa, para toda Cataluña',
    peuMobil: 'Página de reserva de Celbellesa, Banyoles, con las horas libres',
  },
  problema: {
    titol: 'Cuando estás trabajando, no puedes coger el teléfono.',
    text: 'Y cada llamada perdida es un cliente que reserva en otro sitio. Con reservas online, el cliente elige hora cuando le va bien, y tú sigues con lo que estabas haciendo.',
    trucades: 'Llamadas perdidas hoy',
    perduda: 'Sin respuesta',
  },
  demo: {
    titol: 'Pruébalo tú mismo',
    text: 'Haz una reserva en el móvil y mira cómo llega al panel del negocio. Son diez segundos.',
    etiqueta: 'Demostración',
    avis: 'No se guarda ni se envía ningún dato.',
    negoci: 'Barbería del Firal',
    passos: ['Elige el servicio', 'Elige el día', 'Elige la hora', 'Confirma'],
    serveis: [
      { nom: 'Corte de pelo', durada: '30 min' },
      { nom: 'Corte y barba', durada: '45 min' },
      { nom: 'Arreglo de barba', durada: '20 min' },
    ],
    ocupada: 'ocupada',
    confirmar: 'Confirmar reserva',
    triaAbans: 'Elige servicio, día y hora',
    confirmada: 'Reserva confirmada',
    confirmadaText: 'Recibirás un recordatorio el día antes.',
    altra: 'Hacer otra',
    client: 'Tú (demostración)',
    panell: 'Panel del negocio',
    nova: 'Nueva',
    reserves: 'reservas',
    novaArribada: 'Nueva reserva en el panel',
    clients: ['Marc P.', 'Laia R.', 'Jordi C.', 'Pere V.', 'Núria S.', 'Àlex M.', 'Toni G.'],
  },
  exemples: {
    titol: 'Webs que ya reciben reservas',
    text: 'Negocios de Camprodon, Banyoles y Ripoll.',
    veure: 'Abrir la web',
    aviat: 'Pronto en línea',
    alt: 'Captura de la web de',
  },
  passos: {
    titol: 'Cómo funciona',
    llista: [
      { t: 'Te preparamos una propuesta gratis', d: 'Con el nombre de tu negocio y tus servicios. La ves funcionando antes de decidir nada.' },
      { t: 'La revisamos juntos', d: 'La adaptamos hasta que te sientas cómodo: textos, fotos, servicios, horarios y precios.' },
      { t: 'La publicamos', d: 'La web sale a internet y empiezas a recibir reservas. Las ves todas en el panel.' },
    ],
  },
  inclou: {
    titol: 'Qué incluye',
    llista: [
      { t: 'Web propia adaptada al móvil', d: 'Con tu nombre, tus servicios, tus fotos y cómo llegar.' },
      { t: 'Reservas online 24 horas', d: 'Los clientes piden hora cuando quieren, incluso con el negocio cerrado.' },
      { t: 'Varios clientes a la vez', d: 'Si tienes más de una silla, camilla o profesional, cada franja acepta las reservas que quepan.' },
      { t: 'Panel de gestión', d: 'Ves las citas y cambias el horario, los servicios y los días de vacaciones tú mismo.' },
      { t: 'Catalán y castellano', d: 'La web en los dos idiomas, para que te entienda todo el mundo.' },
      { t: 'Aviso legal y privacidad', d: 'Los textos legales preparados y enlazados donde toca.' },
    ],
  },
  preu: {
    titol: 'Un solo pago',
    iva: '+ IVA',
    punts: ['Sin cuotas mensuales', 'Sin permanencia', 'Propuesta gratis'],
    destacat: 'La propuesta es gratis y sin compromiso: solo pagas si te gusta.',
    cta: 'Pide tu propuesta',
  },
  quisom: {
    titol: 'Raíces en la Garrotxa, clientes en toda Cataluña',
    text: 'Basalt Webs nace en la Garrotxa, tierra de volcanes y de gente trabajadora, para ayudar a los negocios de proximidad de toda Cataluña a tener una web profesional, a la altura de su oficio, que trabaja para ellos las 24 horas. Como el basalto: sólida y hecha para durar. Te atendemos directamente, sin intermediarios, y hablamos tu idioma.',
    signatura: `${site.persona}, de Basalt Webs`,
    peuFoto: 'Acantilado de basalto de Castellfollit de la Roca',
    foto: 'Foto',
  },
  faq: {
    titol: 'Preguntas frecuentes',
    llista: [
      { q: '¿Hace falta saber de informática?', a: 'No. Si sabes usar WhatsApp, sabes usar el panel. Y si tienes cualquier duda, nos llamas o nos escribes.' },
      { q: '¿Puedo cambiar el horario yo mismo?', a: 'Sí, desde el panel. Puedes cambiar el horario, los servicios y marcar los días de vacaciones, y la web se actualiza al momento.' },
      { q: '¿Qué pasa si un cliente llega sin reserva?', a: 'Puedes reservar parte de la capacidad para los clientes de calle, para que siempre te quede sitio para quien entra por la puerta.' },
      { q: '¿Hay cuotas mensuales?', a: 'No. Pagas una sola vez. Sin cuotas mensuales y sin permanencia.' },
    ],
  },
  contacte: {
    titol: 'Hablemos de tu negocio',
    text: 'Escríbenos por WhatsApp y te preparamos una propuesta gratis con tu nombre y tus servicios.',
    cta: 'Escribe por WhatsApp',
    correu: 'Correo electrónico',
  },
  peu: {
    avis: 'Aviso legal',
    privacitat: 'Política de privacidad',
    origen: 'Hecho en la Garrotxa, para negocios de toda Cataluña',
    fotos: 'Fotos',
    a: 'en',
  },
};

export const dict: Record<Lang, Dict> = { ca, es };
