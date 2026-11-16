// Textos de la calculadora de beneficis (/calculadora i /es/calculadora).
// Els avantatges només descriuen coses que les webs de Basalt Webs ja fan
// (vegeu content.ts → inclou, problema i sectors.ts → punts).
import type { Lang } from '../config/site';
import type { Tipus } from '../scripts/calc-cites';

// Comparativa de preus. Només preus públics, copiats de la web oficial el dia indicat.
// Si un preu no és públic, va a null i es mostra "no publicat". Revisa-ho abans de tocar-ho.
export const comparativa = {
  data: '2026-11-16',
  booksy: {
    url: 'https://biz.booksy.com/es-es/precios',
    mes: 34.99, // + IVA, 1 professional
    extra: 8, // + IVA per cada professional addicional
  },
  wix: {
    url: 'https://es.wix.com/pricing',
    desDe: 14, // pla Light, pagament anual, sense impostos
    finsA: 149, // pla Business Elite
    reserves: null, // la pàgina de preus no diu quin pla permet acceptar reserves
  },
};

const ca = {
  title: 'Calculadora de beneficis de les reserves en línia | Basalt Webs',
  description:
    'Calcula en 30 segons quants clients i quantes hores de telèfon perds sense reserves en línia, i quant et costa una web amb reserves. Gratuïta, per a perruqueries, estètica, fisios, tallers i cases rurals.',
  h1: 'Quant guanyes amb reserves en línia?',
  lede: 'Posa-hi els números del teu negoci i mira quants clients recuperes, quantes hores de telèfon t’estalvies i quan queda pagada la web.',
  tabs: { label: 'Tipus de calculadora', cites: 'Negoci amb cites', rural: 'Casa rural' },
  tipus: {
    label: 'Tipus de negoci',
    noms: {
      perruqueria: 'Perruqueria',
      estetica: 'Estètica',
      barberia: 'Barberia',
      fisio: 'Fisioteràpia',
      taller: 'Taller',
      altres: 'Altres',
    } as Record<Tipus, string>,
  },
  camps: {
    tr: { label: 'Trucades o missatges per demanar hora, cada setmana', unitat: '' },
    np: { label: 'Trucades que no pots agafar', ajuda: 'Perquè estàs atenent, amb les mans ocupades o amb el negoci tancat.', unitat: ' %' },
    ma: { label: 'D’aquestes, quantes acaben reservant en un altre lloc', unitat: ' %' },
    tq: { label: 'Tiquet mitjà per client', ajuda: 'Canvia en triar el tipus de negoci. Posa-hi el teu.', unitat: ' €' },
    mi: { label: 'Minuts que dediques a cada reserva per telèfon o WhatsApp', unitat: ' min' },
    on: { label: 'Clients que reservarien en línia', ajuda: 'La part de les reserves que deixaries de gestionar tu per telèfon.', unitat: ' %' },
  },
  exemple: 'Els valors de partida són un exemple. Canvia’ls pels del teu negoci.',
  resultat: 'El resultat',
  clients: 'Clients que ara perds a l’any',
  ingressos: 'Ingressos que podries recuperar a l’any',
  hores: 'Hores de telèfon que t’estalvies a l’any',
  web: 'Cost de la web a l’any',
  webDetall: (mes: number, unic: number) => `${mes} €/mes + IVA, o ${unic} € en un sol pagament`,
  net: 'Benefici net el primer any',
  perdua: 'Amb aquests números, encara no et compensa',
  pagada: (n: string) => `Amb <strong>${n}</strong> clients recuperats l’any, la web ja està pagada.`,
  barres: 'Cost de la web comparat amb els ingressos que recuperes',
  barraIngressos: 'Ingressos recuperats',
  barraCost: 'Cost de la web',
  hUnitat: 'h',
  veure: 'Veure el detall',
  cta: 'Demana la proposta per al teu negoci',
  compartir: 'Comparteix el resultat',
  copiat: 'Enllaç copiat',
  noCopiat: 'No s’ha pogut copiar. Copia l’adreça de la barra del navegador.',
  shareText: 'He calculat quant perdria el meu negoci sense reserves en línia:',
  nota: 'Càlcul orientatiu, amb 48 setmanes de feina l’any. Els resultats depenen dels números que hi posis; no són una estadística ni una promesa d’ingressos.',
  nota2: 'Calcula’l per a la teva casa',
  propostaCalc: (tipus: string, v: Record<string, number | string>, r: { clients: string; ingressos: string; hores: string; net: string }) =>
    `Calculadora (${tipus}): ${v.tr} trucades/setmana, ${v.np} % no agafades, ${v.ma} % reserven en un altre lloc, tiquet ${v.tq} €, ${v.mi} min per reserva, ${v.on} % en línia → ${r.clients} clients perduts/any, ${r.ingressos} recuperables/any, ${r.hores} h estalviades/any, benefici net ${r.net}.`,
  avantatges: {
    titol: 'El que no surt als números',
    llista: [
      { t: 'Reserves les 24 hores', d: 'Els clients demanen hora quan els va bé, també amb el negoci tancat.' },
      { t: 'Menys interrupcions', d: 'El client tria hora sol, i tu continues amb el que estaves fent.' },
      { t: 'Tu portes el panell', d: 'Canvies l’horari, els serveis i els dies de vacances, i la web s’actualitza al moment.' },
      { t: 'Una web pròpia a Google', d: 'Qui et busca troba la teva web, amb els serveis i els preus, no només un perfil d’Instagram.' },
      { t: 'Sense comissió ni permanència', d: 'No pagues res per reserva i et dones de baixa quan vulguis.' },
    ],
  },
  comp: {
    titol: 'Quant et costaria a l’any',
    servei: 'Servei',
    publicat: 'Preu publicat',
    any: 'A l’any, amb IVA',
    basalt: 'Basalt Webs, pla Reserves',
    basaltPreu: (mes: number, unic: number) => `${mes} €/mes + IVA, o ${unic} € en un sol pagament`,
    booksy: 'Booksy',
    booksyPreu: (mes: string, extra: number) => `${mes} €/mes + IVA per a 1 professional, i ${extra} € + IVA per cada professional més`,
    wix: 'Wix amb reserves',
    wixPreu: (a: number, b: number) => `Plans de ${a} € a ${b} €/mes + impostos (pagament anual). No diu quin pla accepta reserves.`,
    noPublicat: 'no publicat',
    font: 'font',
    consultats: (d: string) => `Preus consultats el ${d} a la web oficial de cada empresa.`,
    avis: 'Cada servei inclou coses diferents: aquí només es compara el preu que publiquen.',
  },
  ld: 'Calculadora de beneficis de les reserves en línia per a negocis amb cites i cases rurals.',
};

export type CalcDict = typeof ca;

const es: CalcDict = {
  title: 'Calculadora de beneficios de las reservas online | Basalt Webs',
  description:
    'Calcula en 30 segundos cuántos clientes y cuántas horas de teléfono pierdes sin reservas online, y cuánto cuesta una web con reservas. Gratuita, para peluquerías, estética, fisios, talleres y casas rurales.',
  h1: '¿Cuánto ganas con reservas online?',
  lede: 'Pon los números de tu negocio y mira cuántos clientes recuperas, cuántas horas de teléfono te ahorras y cuándo queda pagada la web.',
  tabs: { label: 'Tipo de calculadora', cites: 'Negocio con citas', rural: 'Casa rural' },
  tipus: {
    label: 'Tipo de negocio',
    noms: {
      perruqueria: 'Peluquería',
      estetica: 'Estética',
      barberia: 'Barbería',
      fisio: 'Fisioterapia',
      taller: 'Taller',
      altres: 'Otros',
    },
  },
  camps: {
    tr: { label: 'Llamadas o mensajes para pedir hora, cada semana', unitat: '' },
    np: { label: 'Llamadas que no puedes coger', ajuda: 'Porque estás atendiendo, con las manos ocupadas o con el negocio cerrado.', unitat: ' %' },
    ma: { label: 'De estas, cuántas acaban reservando en otro sitio', unitat: ' %' },
    tq: { label: 'Tique medio por cliente', ajuda: 'Cambia al elegir el tipo de negocio. Pon el tuyo.', unitat: ' €' },
    mi: { label: 'Minutos que dedicas a cada reserva por teléfono o WhatsApp', unitat: ' min' },
    on: { label: 'Clientes que reservarían online', ajuda: 'La parte de las reservas que dejarías de gestionar tú por teléfono.', unitat: ' %' },
  },
  exemple: 'Los valores de partida son un ejemplo. Cámbialos por los de tu negocio.',
  resultat: 'El resultado',
  clients: 'Clientes que ahora pierdes al año',
  ingressos: 'Ingresos que podrías recuperar al año',
  hores: 'Horas de teléfono que te ahorras al año',
  web: 'Coste de la web al año',
  webDetall: (mes, unic) => `${mes} €/mes + IVA, o ${unic} € en un solo pago`,
  net: 'Beneficio neto el primer año',
  perdua: 'Con estos números, todavía no te compensa',
  pagada: (n) => `Con <strong>${n}</strong> clientes recuperados al año, la web ya está pagada.`,
  barres: 'Coste de la web comparado con los ingresos que recuperas',
  barraIngressos: 'Ingresos recuperados',
  barraCost: 'Coste de la web',
  hUnitat: 'h',
  veure: 'Ver el detalle',
  cta: 'Pide la propuesta para tu negocio',
  compartir: 'Comparte el resultado',
  copiat: 'Enlace copiado',
  noCopiat: 'No se ha podido copiar. Copia la dirección de la barra del navegador.',
  shareText: 'He calculado cuánto perdería mi negocio sin reservas online:',
  nota: 'Cálculo orientativo, con 48 semanas de trabajo al año. Los resultados dependen de los números que pongas; no son una estadística ni una promesa de ingresos.',
  nota2: 'Calcúlalo para tu casa',
  propostaCalc: (tipus, v, r) =>
    `Calculadora (${tipus}): ${v.tr} llamadas/semana, ${v.np} % no cogidas, ${v.ma} % reservan en otro sitio, tique ${v.tq} €, ${v.mi} min por reserva, ${v.on} % online → ${r.clients} clientes perdidos/año, ${r.ingressos} recuperables/año, ${r.hores} h ahorradas/año, beneficio neto ${r.net}.`,
  avantatges: {
    titol: 'Lo que no sale en los números',
    llista: [
      { t: 'Reservas las 24 horas', d: 'Los clientes piden hora cuando les va bien, también con el negocio cerrado.' },
      { t: 'Menos interrupciones', d: 'El cliente elige hora solo, y tú sigues con lo que estabas haciendo.' },
      { t: 'Tú llevas el panel', d: 'Cambias el horario, los servicios y los días de vacaciones, y la web se actualiza al momento.' },
      { t: 'Una web propia en Google', d: 'Quien te busca encuentra tu web, con los servicios y los precios, no solo un perfil de Instagram.' },
      { t: 'Sin comisión ni permanencia', d: 'No pagas nada por reserva y te das de baja cuando quieras.' },
    ],
  },
  comp: {
    titol: 'Cuánto te costaría al año',
    servei: 'Servicio',
    publicat: 'Precio publicado',
    any: 'Al año, con IVA',
    basalt: 'Basalt Webs, plan Reservas',
    basaltPreu: (mes, unic) => `${mes} €/mes + IVA, o ${unic} € en un solo pago`,
    booksy: 'Booksy',
    booksyPreu: (mes, extra) => `${mes} €/mes + IVA para 1 profesional, y ${extra} € + IVA por cada profesional más`,
    wix: 'Wix con reservas',
    wixPreu: (a, b) => `Planes de ${a} € a ${b} €/mes + impuestos (pago anual). No dice qué plan acepta reservas.`,
    noPublicat: 'no publicado',
    font: 'fuente',
    consultats: (d) => `Precios consultados el ${d} en la web oficial de cada empresa.`,
    avis: 'Cada servicio incluye cosas distintas: aquí solo se compara el precio que publican.',
  },
  ld: 'Calculadora de beneficios de las reservas online para negocios con citas y casas rurales.',
};

export const calcDict: Record<Lang, CalcDict> = { ca, es };
