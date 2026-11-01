// Textos del formulari de proposta (/proposta i /es/propuesta).
import type { PlanId } from '../config/site';

type Opcio = { id: string; label: string; nota?: string };

const ca = {
  meta: {
    title: 'Demana la teva proposta · Basalt Webs',
    description:
      'Tria el tipus de web, com vols pagar i l’estil que t’agrada. Et preparem una proposta gratis amb el nom i els serveis del teu negoci.',
  },
  tornar: "Torna a l'inici",
  titol: 'Demana la teva proposta',
  intro:
    'Quatre preguntes i et preparem una web de mostra amb el nom i els serveis del teu negoci. És gratis i sense compromís: només pagues si t’agrada.',
  passos: ['El negoci', 'La web', 'Ajustos', 'Estil', 'Les teves dades'],
  seguent: 'Següent',
  enrere: 'Enrere',
  negoci: {
    titol: 'Quin tipus de negoci tens?',
    opcions: [
      { id: 'perruqueria', label: 'Perruqueria o barberia' },
      { id: 'estetica', label: "Estètica, ungles o depilació" },
      { id: 'terapies', label: 'Massatges, fisio o teràpies' },
      { id: 'taller', label: 'Taller o altres serveis amb cita' },
      { id: 'allotjament', label: 'Casa rural, refugi o allotjament' },
      { id: 'altre', label: 'Un altre tipus de negoci' },
    ] as Opcio[],
  },
  pla: {
    titol: 'Quina web necessites?',
    plans: {
      reserves: { nom: 'Web amb reserves', desc: 'Els clients demanen hora des del mòbil i tu ho gestiones des d’un panell.' },
      basica: { nom: 'Web sense reserves', desc: 'Web professional amb serveis, fotos, horari i com arribar. Els clients et truquen o t’escriuen.' },
      allotjament: { nom: 'Web per a allotjaments', desc: 'Calendari de disponibilitat, preus per temporada i sol·licituds de reserva directes, sense comissions.' },
    } as Record<PlanId, { nom: string; desc: string }>,
    pagament: 'Com prefereixes pagar?',
    mensual: 'Quota mensual',
    mensualNota: 'Alta gratuïta · canvis inclosos · sense permanència',
    unic: 'Un sol pagament',
    unicNota: 'Pagues una vegada i la web és teva',
    mes: '/mes + IVA',
    ivaInclos: 'IVA inclòs',
    recomanat: 'La més triada',
  },
  ajustos: {
    titol: 'Necessites alguna cosa més?',
    ajuda: 'Marca el que t’interessi. Ho tindrem en compte a la proposta.',
    opcions: [
      { id: 'equip', label: 'Diverses persones o cadires atenent alhora', nota: 'Inclòs' },
      { id: 'idiomes', label: 'Anglès o francès, a més de català i castellà', nota: 'Ho valorem a la proposta' },
      { id: 'domini', label: 'Domini propi (.cat o .com)', nota: 'El pagues tu, uns 10–15 € l’any' },
      { id: 'google', label: 'Posar al dia la fitxa de Google', nota: 'Ho valorem a la proposta' },
      { id: 'logo', label: 'No tinc logo', nota: 'Ho valorem a la proposta' },
      { id: 'fotos', label: 'No tinc fotos bones del negoci', nota: 'T’ajudem a triar-ne' },
      { id: 'canvi', label: 'Ja tinc web i la vull canviar', nota: 'Ho valorem a la proposta' },
    ] as Opcio[],
  },
  estil: {
    titol: 'Quin estil t’agrada més?',
    ajuda: 'Són webs d’exemple. La teva tindrà els teus colors, el teu nom i les teves fotos.',
    veure: 'Veure l’exemple',
    opcions: [
      { id: 'clasic', label: 'Fosc i clàssic', nota: 'Barberia Basalto' },
      { id: 'editorial', label: 'Editorial i atrevit', nota: 'Garrotxa Hair' },
      { id: 'natural', label: 'Natural i tranquil', nota: 'Lava, centre d’estètica' },
      { id: 'calid', label: 'Càlid i rústic', nota: 'Mas Can Basalt, casa rural' },
      { id: 'decidiu', label: 'Decidiu vosaltres', nota: 'Us en proposem un segons el vostre negoci' },
    ] as Opcio[],
  },
  dades: {
    titol: 'On t’enviem la proposta?',
    negoci: 'Nom del negoci',
    nom: 'El teu nom',
    telefon: 'Telèfon o WhatsApp',
    correu: 'Correu electrònic',
    poblacio: 'Població',
    enllac: 'Instagram o fitxa de Google (si en tens)',
    enllacPh: 'instagram.com/elteunegoci',
    quan: 'Quan t’agradaria tenir-la?',
    quanOpcions: ['Com més aviat millor', 'Aquest mes', 'Més endavant, de moment miro'],
    comentaris: 'Alguna cosa més que ens vulguis dir? (opcional)',
    privacitat: 'He llegit i accepto la',
    privacitatEnllac: 'política de privacitat',
    opcional: 'opcional',
    enviar: 'Envia la sol·licitud',
    enviant: 'Enviant…',
  },
  resum: {
    titol: 'La teva tria',
    buit: 'Ves triant i aquí veuràs el resum.',
    proposta: 'Proposta gratis i sense compromís.',
  },
  errors: {
    tria: 'Tria una opció per continuar.',
    obligatori: 'Omple aquest camp.',
    telefon: 'Posa un telèfon vàlid (9 xifres).',
    correu: 'Aquest correu no sembla vàlid.',
    privacitat: 'Has d’acceptar la política de privacitat.',
  },
  fet: {
    titol: 'Rebut! Ens hi posem.',
    text: 'En 2–3 dies et contactem amb la teva web de mostra. Si vols anar més de pressa, envia’ns també el resum per WhatsApp.',
    whatsapp: 'Envia el resum per WhatsApp',
  },
  fallback: {
    titol: 'Gairebé fet',
    text: 'No hem pogut enviar el formulari des d’aquí. Envia’ns el resum per WhatsApp amb un clic i et contestem de seguida.',
    whatsapp: 'Envia-ho per WhatsApp',
  },
  wa: {
    hola: 'Hola! Vull demanar una proposta de web:',
  },
};

export type PropDict = typeof ca;

const es: PropDict = {
  meta: {
    title: 'Pide tu propuesta · Basalt Webs',
    description:
      'Elige el tipo de web, cómo quieres pagar y el estilo que te gusta. Te preparamos una propuesta gratis con el nombre y los servicios de tu negocio.',
  },
  tornar: 'Volver al inicio',
  titol: 'Pide tu propuesta',
  intro:
    'Cuatro preguntas y te preparamos una web de muestra con el nombre y los servicios de tu negocio. Es gratis y sin compromiso: solo pagas si te gusta.',
  passos: ['El negocio', 'La web', 'Ajustes', 'Estilo', 'Tus datos'],
  seguent: 'Siguiente',
  enrere: 'Atrás',
  negoci: {
    titol: '¿Qué tipo de negocio tienes?',
    opcions: [
      { id: 'perruqueria', label: 'Peluquería o barbería' },
      { id: 'estetica', label: 'Estética, uñas o depilación' },
      { id: 'terapies', label: 'Masajes, fisio o terapias' },
      { id: 'taller', label: 'Taller u otros servicios con cita' },
      { id: 'allotjament', label: 'Casa rural, refugio o alojamiento' },
      { id: 'altre', label: 'Otro tipo de negocio' },
    ],
  },
  pla: {
    titol: '¿Qué web necesitas?',
    plans: {
      reserves: { nom: 'Web con reservas', desc: 'Tus clientes piden hora desde el móvil y tú lo gestionas desde un panel.' },
      basica: { nom: 'Web sin reservas', desc: 'Web profesional con servicios, fotos, horario y cómo llegar. Los clientes te llaman o te escriben.' },
      allotjament: { nom: 'Web para alojamientos', desc: 'Calendario de disponibilidad, precios por temporada y solicitudes de reserva directas, sin comisiones.' },
    },
    pagament: '¿Cómo prefieres pagar?',
    mensual: 'Cuota mensual',
    mensualNota: 'Alta gratuita · cambios incluidos · sin permanencia',
    unic: 'Un solo pago',
    unicNota: 'Pagas una vez y la web es tuya',
    mes: '/mes + IVA',
    ivaInclos: 'IVA incluido',
    recomanat: 'La más elegida',
  },
  ajustos: {
    titol: '¿Necesitas algo más?',
    ajuda: 'Marca lo que te interese. Lo tendremos en cuenta en la propuesta.',
    opcions: [
      { id: 'equip', label: 'Varias personas o sillas atendiendo a la vez', nota: 'Incluido' },
      { id: 'idiomes', label: 'Inglés o francés, además de catalán y castellano', nota: 'Lo valoramos en la propuesta' },
      { id: 'domini', label: 'Dominio propio (.cat o .com)', nota: 'Lo pagas tú, unos 10–15 € al año' },
      { id: 'google', label: 'Poner al día la ficha de Google', nota: 'Lo valoramos en la propuesta' },
      { id: 'logo', label: 'No tengo logo', nota: 'Lo valoramos en la propuesta' },
      { id: 'fotos', label: 'No tengo buenas fotos del negocio', nota: 'Te ayudamos a elegirlas' },
      { id: 'canvi', label: 'Ya tengo web y la quiero cambiar', nota: 'Lo valoramos en la propuesta' },
    ],
  },
  estil: {
    titol: '¿Qué estilo te gusta más?',
    ajuda: 'Son webs de ejemplo. La tuya tendrá tus colores, tu nombre y tus fotos.',
    veure: 'Ver el ejemplo',
    opcions: [
      { id: 'clasic', label: 'Oscuro y clásico', nota: 'Barbería Basalto' },
      { id: 'editorial', label: 'Editorial y atrevido', nota: 'Garrotxa Hair' },
      { id: 'natural', label: 'Natural y tranquilo', nota: 'Lava, centro de estética' },
      { id: 'calid', label: 'Cálido y rústico', nota: 'Mas Can Basalt, casa rural' },
      { id: 'decidiu', label: 'Decidid vosotros', nota: 'Os proponemos uno según vuestro negocio' },
    ],
  },
  dades: {
    titol: '¿Dónde te enviamos la propuesta?',
    negoci: 'Nombre del negocio',
    nom: 'Tu nombre',
    telefon: 'Teléfono o WhatsApp',
    correu: 'Correo electrónico',
    poblacio: 'Población',
    enllac: 'Instagram o ficha de Google (si tienes)',
    enllacPh: 'instagram.com/tunegocio',
    quan: '¿Cuándo te gustaría tenerla?',
    quanOpcions: ['Cuanto antes mejor', 'Este mes', 'Más adelante, de momento miro'],
    comentaris: '¿Algo más que nos quieras decir? (opcional)',
    privacitat: 'He leído y acepto la',
    privacitatEnllac: 'política de privacidad',
    opcional: 'opcional',
    enviar: 'Enviar la solicitud',
    enviant: 'Enviando…',
  },
  resum: {
    titol: 'Tu elección',
    buit: 'Ve eligiendo y aquí verás el resumen.',
    proposta: 'Propuesta gratis y sin compromiso.',
  },
  errors: {
    tria: 'Elige una opción para continuar.',
    obligatori: 'Rellena este campo.',
    telefon: 'Pon un teléfono válido (9 cifras).',
    correu: 'Este correo no parece válido.',
    privacitat: 'Tienes que aceptar la política de privacidad.',
  },
  fet: {
    titol: '¡Recibido! Nos ponemos.',
    text: 'En 2–3 días te contactamos con tu web de muestra. Si quieres ir más rápido, envíanos también el resumen por WhatsApp.',
    whatsapp: 'Enviar el resumen por WhatsApp',
  },
  fallback: {
    titol: 'Casi listo',
    text: 'No hemos podido enviar el formulario desde aquí. Envíanos el resumen por WhatsApp con un clic y te contestamos enseguida.',
    whatsapp: 'Enviarlo por WhatsApp',
  },
  wa: {
    hola: '¡Hola! Quiero pedir una propuesta de web:',
  },
};

export const propDict = { ca, es };

// URL de cada estil d'exemple
export const estilsDemo: Record<string, { url: string; img: string }> = {
  clasic: { url: 'https://demobarberia.pages.dev/', img: '/img/estils/barberia.webp' },
  editorial: { url: 'https://perruqueriademo.pages.dev/', img: '/img/estils/perruqueria.webp' },
  natural: { url: 'https://centreesteticademo.pages.dev/', img: '/img/estils/estetica.webp' },
  calid: { url: 'https://demorural.pages.dev/ca/', img: '/img/estils/rural.webp' },
};
