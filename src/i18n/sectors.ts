// Pàgines de sector (/webs/<slug> i /es/webs/<slug>): una pàgina per ofici, pensada per sortir
// a Google quan un negoci busca "web per a <ofici> <zona>". Només s'hi descriuen funcions que
// les webs de Basalt Webs ja tenen. Cap xifra, client ni opinió inventada.
import type { Lang, PlanId } from '../config/site';

type Item = { t: string; d: string };
type Faq = { q: string; a: string };

export interface SectorText {
  slug: string;
  nom: string; // nom curt, per als enllaços entre sectors
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lede: string;
  dolorsTitol: string;
  dolors: Item[];
  funcionsTitol: string;
  funcions: Item[];
  demoTitol: string;
  demoText: string;
  faq: Faq[];
}

export interface Sector {
  id: string;
  pla: PlanId;
  negoci: string; // valor del camp "negoci" del formulari /proposta
  demo: { url: string; img?: string } | null;
  text: Record<Lang, SectorText>;
}

const faqComuns: Record<Lang, Faq[]> = {
  ca: [
    {
      q: 'Quant temps triga a estar feta?',
      a: 'Et preparem la proposta amb el teu nom i els teus serveis en pocs dies. Un cop la revises i ens dius que endavant, la publiquem.',
    },
    {
      q: 'I si després vull plegar?',
      a: 'Amb la quota mensual no hi ha permanència: et dones de baixa quan vulguis. Amb el pagament únic, la web és teva des del primer dia.',
    },
  ],
  es: [
    {
      q: '¿Cuánto tarda en estar hecha?',
      a: 'Te preparamos la propuesta con el nombre de tu negocio y tus servicios en pocos días. Cuando la revisas y nos das el visto bueno, la publicamos.',
    },
    {
      q: '¿Y si después quiero dejarlo?',
      a: 'Con la cuota mensual no hay permanencia: te das de baja cuando quieras. Con el pago único, la web es tuya desde el primer día.',
    },
  ],
};

export const sectors: Sector[] = [
  {
    id: 'perruqueria',
    pla: 'reserves',
    negoci: 'perruqueria',
    demo: { url: 'https://perruqueriademo.pages.dev/', img: '/img/estils/perruqueria.webp' },
    text: {
      ca: {
        slug: 'perruqueries',
        nom: 'Perruqueries',
        title: 'Web amb reserves per a perruqueries · Olot, Garrotxa i Catalunya | Basalt Webs',
        description:
          'Web pròpia per a la teva perruqueria amb reserva de cita en línia les 24 hores i panell per gestionar-ho tot. Alta gratuïta, sense permanència. Feta a la Garrotxa.',
        h1: 'Web amb reserves per a perruqueries',
        lede: 'Els teus clients demanen hora des del mòbil quan els va bé, fins i tot amb la perruqueria tancada. Tu continues tallant i veus les cites al panell.',
        dolorsTitol: 'El telèfon sona quan tens les mans ocupades',
        dolors: [
          { t: 'Trucades que no pots agafar', d: 'Amb un client a la cadira no pots respondre. Qui no t’agafa, sovint truca a la perruqueria del costat.' },
          { t: 'WhatsApps a deshora', d: 'Missatges a les onze de la nit per demanar hora per dissabte. Amb reserves en línia, el client tria sol.' },
          { t: 'Agenda en paper', d: 'Esborrats, gargots i dobles reserves. Al panell ho veus tot clar, també des del mòbil.' },
        ],
        funcionsTitol: 'Què tindrà la web de la teva perruqueria',
        funcions: [
          { t: 'Carta de serveis amb durada', d: 'Tall, color, metxes, pentinats… Cada servei ocupa el temps que toca a l’agenda.' },
          { t: 'Reserves segons les cadires', d: 'Si treballeu dues o tres persones alhora, cada franja accepta les reserves que hi càpiguen.' },
          { t: 'Horari i vacances des del panell', d: 'Tanques per vacances o canvies l’horari i la web s’actualitza al moment.' },
          { t: 'Avís de cada reserva nova', d: 'Reps un correu amb cada cita nova, amb el servei, el dia i l’hora.' },
        ],
        demoTitol: 'Mira una perruqueria funcionant',
        demoText: 'És una web de demostració amb un negoci inventat. Pots fer-hi una reserva de prova.',
        faq: [
          {
            q: 'Puc deixar lloc per als clients que entren sense cita?',
            a: 'Sí. Pots limitar quantes reserves en línia accepta cada franja perquè sempre et quedi lloc per a qui entra per la porta.',
          },
          ...faqComuns.ca,
        ],
      },
      es: {
        slug: 'peluquerias',
        nom: 'Peluquerías',
        title: 'Web con reservas para peluquerías · Olot, Garrotxa y Cataluña | Basalt Webs',
        description:
          'Web propia para tu peluquería con reserva de cita online las 24 horas y panel para gestionarlo todo. Alta gratuita, sin permanencia. Hecha en la Garrotxa.',
        h1: 'Web con reservas para peluquerías',
        lede: 'Tus clientes piden hora desde el móvil cuando les va bien, incluso con la peluquería cerrada. Tú sigues cortando y ves las citas en el panel.',
        dolorsTitol: 'El teléfono suena cuando tienes las manos ocupadas',
        dolors: [
          { t: 'Llamadas que no puedes coger', d: 'Con un cliente en el sillón no puedes contestar. Quien no te pilla, a menudo llama a la peluquería de al lado.' },
          { t: 'WhatsApps a deshora', d: 'Mensajes a las once de la noche para pedir hora el sábado. Con reservas online, el cliente elige solo.' },
          { t: 'Agenda en papel', d: 'Tachones, garabatos y reservas dobles. En el panel lo ves todo claro, también desde el móvil.' },
        ],
        funcionsTitol: 'Qué tendrá la web de tu peluquería',
        funcions: [
          { t: 'Carta de servicios con duración', d: 'Corte, color, mechas, peinados… Cada servicio ocupa el tiempo que toca en la agenda.' },
          { t: 'Reservas según los sillones', d: 'Si trabajáis dos o tres personas a la vez, cada franja acepta las reservas que quepan.' },
          { t: 'Horario y vacaciones desde el panel', d: 'Cierras por vacaciones o cambias el horario y la web se actualiza al momento.' },
          { t: 'Aviso de cada reserva nueva', d: 'Recibes un correo con cada cita nueva, con el servicio, el día y la hora.' },
        ],
        demoTitol: 'Mira una peluquería funcionando',
        demoText: 'Es una web de demostración con un negocio inventado. Puedes hacer una reserva de prueba.',
        faq: [
          {
            q: '¿Puedo dejar sitio para los clientes que entran sin cita?',
            a: 'Sí. Puedes limitar cuántas reservas online acepta cada franja para que siempre te quede sitio para quien entra por la puerta.',
          },
          ...faqComuns.es,
        ],
      },
    },
  },
  {
    id: 'estetica',
    pla: 'reserves',
    negoci: 'estetica',
    demo: { url: 'https://centreesteticademo.pages.dev/', img: '/img/estils/estetica.webp' },
    text: {
      ca: {
        slug: 'centres-estetica',
        nom: "Centres d'estètica",
        title: "Web amb reserves per a centres d'estètica · Garrotxa i Catalunya | Basalt Webs",
        description:
          "Web pròpia per al teu centre d'estètica, d'ungles o de depilació, amb reserva en línia de tractaments i panell de gestió. Alta gratuïta i sense permanència.",
        h1: "Web amb reserves per a centres d'estètica",
        lede: 'Facials, manicures, depilació, massatges: cada tractament amb la seva durada, i les clientes reserven quan els va bé sense haver de trucar.',
        dolorsTitol: 'Durant un tractament no pots agafar el telèfon',
        dolors: [
          { t: 'Cabina ocupada, telèfon sonant', d: 'No pots deixar una clienta a mig tractament per respondre. La següent truca a un altre centre.' },
          { t: 'Preus i tractaments que ningú troba', d: 'Si la carta només és a l’Instagram, costa trobar-la. A la web és clara i sempre al dia.' },
          { t: 'Forats a l’agenda', d: 'Una anul·lació d’última hora i la franja queda buida. Amb reserves en línia, algú altre la pot agafar.' },
        ],
        funcionsTitol: 'Què tindrà la web del teu centre',
        funcions: [
          { t: 'Carta de tractaments', d: 'Amb el nom, la durada i el preu de cada tractament, ordenats com vulguis.' },
          { t: 'Reserves per cabines o professionals', d: 'Si teniu més d’una cabina, cada franja accepta les reserves que hi càpiguen.' },
          { t: 'Panell senzill', d: 'Veus les cites del dia, canvies l’horari i marques vacances tu mateixa.' },
          { t: 'Català i castellà', d: 'La web en els dos idiomes, perquè t’entengui tothom.' },
        ],
        demoTitol: "Mira un centre d'estètica funcionant",
        demoText: 'És una web de demostració amb un negoci inventat. Pots fer-hi una reserva de prova.',
        faq: [
          {
            q: 'Hi puc posar els preus dels tractaments?',
            a: 'Sí. Cada tractament pot mostrar el preu i la durada, i els canviem sempre que ens ho demanis.',
          },
          ...faqComuns.ca,
        ],
      },
      es: {
        slug: 'centros-estetica',
        nom: 'Centros de estética',
        title: 'Web con reservas para centros de estética · Garrotxa y Cataluña | Basalt Webs',
        description:
          'Web propia para tu centro de estética, de uñas o de depilación, con reserva online de tratamientos y panel de gestión. Alta gratuita y sin permanencia.',
        h1: 'Web con reservas para centros de estética',
        lede: 'Faciales, manicuras, depilación, masajes: cada tratamiento con su duración, y las clientas reservan cuando les va bien sin tener que llamar.',
        dolorsTitol: 'Durante un tratamiento no puedes coger el teléfono',
        dolors: [
          { t: 'Cabina ocupada, teléfono sonando', d: 'No puedes dejar a una clienta a medio tratamiento para contestar. La siguiente llama a otro centro.' },
          { t: 'Precios y tratamientos que nadie encuentra', d: 'Si la carta solo está en Instagram, cuesta encontrarla. En la web está clara y siempre al día.' },
          { t: 'Huecos en la agenda', d: 'Una anulación de última hora y la franja queda vacía. Con reservas online, otra persona la puede coger.' },
        ],
        funcionsTitol: 'Qué tendrá la web de tu centro',
        funcions: [
          { t: 'Carta de tratamientos', d: 'Con el nombre, la duración y el precio de cada tratamiento, ordenados como quieras.' },
          { t: 'Reservas por cabinas o profesionales', d: 'Si tenéis más de una cabina, cada franja acepta las reservas que quepan.' },
          { t: 'Panel sencillo', d: 'Ves las citas del día, cambias el horario y marcas vacaciones tú misma.' },
          { t: 'Catalán y castellano', d: 'La web en los dos idiomas, para que te entienda todo el mundo.' },
        ],
        demoTitol: 'Mira un centro de estética funcionando',
        demoText: 'Es una web de demostración con un negocio inventado. Puedes hacer una reserva de prueba.',
        faq: [
          {
            q: '¿Puedo poner los precios de los tratamientos?',
            a: 'Sí. Cada tratamiento puede mostrar el precio y la duración, y los cambiamos siempre que nos lo pidas.',
          },
          ...faqComuns.es,
        ],
      },
    },
  },
  {
    id: 'barberia',
    pla: 'reserves',
    negoci: 'perruqueria',
    demo: { url: 'https://demobarberia.pages.dev/', img: '/img/estils/barberia.webp' },
    text: {
      ca: {
        slug: 'barberies',
        nom: 'Barberies',
        title: 'Web amb reserves per a barberies · Olot, Garrotxa i Catalunya | Basalt Webs',
        description:
          'Web pròpia per a la teva barberia amb reserva de tall i barba en línia les 24 hores, sense comissions per reserva. Alta gratuïta i sense permanència.',
        h1: 'Web amb reserves per a barberies',
        lede: 'Tall, barba, afaitat amb navalla. El client tria servei, dia i hora des del mòbil, i tu no has de deixar la màquina per agafar el telèfon.',
        dolorsTitol: 'Menys trucades, més talls',
        dolors: [
          { t: 'Cua a la porta, telèfon sonant', d: 'Quan la barberia és plena no dones l’abast. La reserva en línia ordena la feina.' },
          { t: 'Apps que cobren per reserva', d: 'Hi ha plataformes que cobren quota i a més comissió. Aquí pagues una quota fixa i prou.' },
          { t: 'Clients que no tornen', d: 'Si reservar és fàcil, el client repeteix. Si ha de trucar tres vegades, potser no.' },
        ],
        funcionsTitol: 'Què tindrà la web de la teva barberia',
        funcions: [
          { t: 'Serveis amb durada', d: 'Tall, tall i barba, afaitat… Cada servei ocupa el seu temps a l’agenda.' },
          { t: 'Diversos barbers alhora', d: 'Cada franja accepta tantes reserves com barbers treballant.' },
          { t: 'Lloc per als de sense cita', d: 'Pots reservar part de la capacitat per als clients que entren per la porta.' },
          { t: 'Panell al mòbil', d: 'Veus les cites del dia i canvies horaris i vacances en un moment.' },
        ],
        demoTitol: 'Mira una barberia funcionant',
        demoText: 'És una web de demostració amb un negoci inventat. Pots fer-hi una reserva de prova.',
        faq: [
          {
            q: 'Cobreu comissió per cada reserva?',
            a: 'No. Pagues la quota mensual o el pagament únic i prou, tant si reps deu reserves com si en reps cent.',
          },
          ...faqComuns.ca,
        ],
      },
      es: {
        slug: 'barberias',
        nom: 'Barberías',
        title: 'Web con reservas para barberías · Olot, Garrotxa y Cataluña | Basalt Webs',
        description:
          'Web propia para tu barbería con reserva de corte y barba online las 24 horas, sin comisiones por reserva. Alta gratuita y sin permanencia.',
        h1: 'Web con reservas para barberías',
        lede: 'Corte, barba, afeitado a navaja. El cliente elige servicio, día y hora desde el móvil, y tú no tienes que soltar la máquina para coger el teléfono.',
        dolorsTitol: 'Menos llamadas, más cortes',
        dolors: [
          { t: 'Cola en la puerta, teléfono sonando', d: 'Cuando la barbería está llena no das abasto. La reserva online ordena el trabajo.' },
          { t: 'Apps que cobran por reserva', d: 'Hay plataformas que cobran cuota y además comisión. Aquí pagas una cuota fija y ya está.' },
          { t: 'Clientes que no vuelven', d: 'Si reservar es fácil, el cliente repite. Si tiene que llamar tres veces, quizá no.' },
        ],
        funcionsTitol: 'Qué tendrá la web de tu barbería',
        funcions: [
          { t: 'Servicios con duración', d: 'Corte, corte y barba, afeitado… Cada servicio ocupa su tiempo en la agenda.' },
          { t: 'Varios barberos a la vez', d: 'Cada franja acepta tantas reservas como barberos trabajando.' },
          { t: 'Sitio para los de sin cita', d: 'Puedes reservar parte de la capacidad para los clientes que entran por la puerta.' },
          { t: 'Panel en el móvil', d: 'Ves las citas del día y cambias horarios y vacaciones en un momento.' },
        ],
        demoTitol: 'Mira una barbería funcionando',
        demoText: 'Es una web de demostración con un negocio inventado. Puedes hacer una reserva de prueba.',
        faq: [
          {
            q: '¿Cobráis comisión por cada reserva?',
            a: 'No. Pagas la cuota mensual o el pago único y ya está, tanto si recibes diez reservas como si recibes cien.',
          },
          ...faqComuns.es,
        ],
      },
    },
  },
  {
    id: 'rural',
    pla: 'allotjament',
    negoci: 'allotjament',
    demo: { url: 'https://demorural.pages.dev/ca/', img: '/img/estils/rural.webp' },
    text: {
      ca: {
        slug: 'cases-rurals',
        nom: 'Cases rurals',
        title: 'Web amb reserva directa per a cases rurals, sense comissions | Basalt Webs',
        description:
          'Web pròpia per a la teva casa rural o refugi amb calendari, preus per temporada i sol·licituds de reserva directa, connectada amb Booking i Airbnb. Sense comissions per reserva.',
        h1: 'Web amb reserva directa per a cases rurals',
        lede: 'Cada reserva que et fan per Booking o Airbnb et costa una comissió. Amb una web pròpia, el client que ja et coneix reserva directament amb tu.',
        dolorsTitol: 'Les plataformes et porten clients, però cobren cada reserva',
        dolors: [
          { t: 'Comissió a cada estada', d: 'Les plataformes cobren un percentatge de cada reserva. Els clients que repeteixen o que et troben per Google també el paguen.' },
          { t: 'Sense web, depens d’ells', d: 'Si algú busca el nom de la teva casa i només surt Booking, la reserva passa per Booking.' },
          { t: 'Calendaris que no lliguen', d: 'Portar diverses agendes a mà és com acabar amb dues famílies el mateix cap de setmana.' },
        ],
        funcionsTitol: 'Què tindrà la web de la teva casa',
        funcions: [
          { t: 'Calendari amb preus', d: 'Preus per temporada i ponts, estada mínima i preu total al moment, amb la taxa turística.' },
          { t: 'Sol·licitud de reserva directa', d: 'El client tria dates i envia la sol·licitud. Tu la confirmes i cobres la bestreta com vulguis.' },
          { t: 'Connexió amb Booking i Airbnb', d: 'Els calendaris es sincronitzen (iCal) perquè mai es reservi dues vegades el mateix dia.' },
          { t: 'Quatre idiomes', d: 'Català, castellà, anglès i francès, per al turista d’aquí i el de fora.' },
        ],
        demoTitol: 'Mira una casa rural funcionant',
        demoText: 'És una web de demostració amb una casa inventada. Pots triar dates i veure el preu.',
        faq: [
          {
            q: 'He de deixar Booking o Airbnb?',
            a: 'No. La web és un complement: les plataformes et continuen portant clients nous, i els que et troben pel teu nom reserven directament sense comissió.',
          },
          {
            q: 'Funciona si llogo per habitacions o tinc diversos apartaments?',
            a: 'Està pensada per a cases que es lloguen senceres. Si tens diversos apartaments o llogues per habitacions, ho adaptem en fer l’alta: explica’ns-ho a la proposta.',
          },
          ...faqComuns.ca,
        ],
      },
      es: {
        slug: 'casas-rurales',
        nom: 'Casas rurales',
        title: 'Web con reserva directa para casas rurales, sin comisiones | Basalt Webs',
        description:
          'Web propia para tu casa rural o refugio con calendario, precios por temporada y solicitudes de reserva directa, conectada con Booking y Airbnb. Sin comisiones por reserva.',
        h1: 'Web con reserva directa para casas rurales',
        lede: 'Cada reserva que te hacen por Booking o Airbnb te cuesta una comisión. Con una web propia, el cliente que ya te conoce reserva directamente contigo.',
        dolorsTitol: 'Las plataformas te traen clientes, pero cobran cada reserva',
        dolors: [
          { t: 'Comisión en cada estancia', d: 'Las plataformas cobran un porcentaje de cada reserva. Los clientes que repiten o que te encuentran por Google también lo pagan.' },
          { t: 'Sin web, dependes de ellos', d: 'Si alguien busca el nombre de tu casa y solo sale Booking, la reserva pasa por Booking.' },
          { t: 'Calendarios que no cuadran', d: 'Llevar varias agendas a mano es como acabar con dos familias el mismo fin de semana.' },
        ],
        funcionsTitol: 'Qué tendrá la web de tu casa',
        funcions: [
          { t: 'Calendario con precios', d: 'Precios por temporada y puentes, estancia mínima y precio total al momento, con la tasa turística.' },
          { t: 'Solicitud de reserva directa', d: 'El cliente elige fechas y envía la solicitud. Tú la confirmas y cobras la señal como quieras.' },
          { t: 'Conexión con Booking y Airbnb', d: 'Los calendarios se sincronizan (iCal) para que nunca se reserve dos veces el mismo día.' },
          { t: 'Cuatro idiomas', d: 'Catalán, castellano, inglés y francés, para el turista de aquí y el de fuera.' },
        ],
        demoTitol: 'Mira una casa rural funcionando',
        demoText: 'Es una web de demostración con una casa inventada. Puedes elegir fechas y ver el precio.',
        faq: [
          {
            q: '¿Tengo que dejar Booking o Airbnb?',
            a: 'No. La web es un complemento: las plataformas te siguen trayendo clientes nuevos, y los que te encuentran por tu nombre reservan directamente sin comisión.',
          },
          {
            q: '¿Funciona si alquilo por habitaciones o tengo varios apartamentos?',
            a: 'Está pensada para casas que se alquilan enteras. Si tienes varios apartamentos o alquilas por habitaciones, lo adaptamos al darte de alta: explícanoslo en la propuesta.',
          },
          ...faqComuns.es,
        ],
      },
    },
  },
  {
    id: 'fisio',
    pla: 'reserves',
    negoci: 'terapies',
    demo: null,
    text: {
      ca: {
        slug: 'fisioterapeutes',
        nom: 'Fisioterapeutes i teràpies',
        title: 'Web amb reserves per a fisioterapeutes i teràpies · Garrotxa | Basalt Webs',
        description:
          'Web pròpia per a la teva consulta de fisioteràpia, osteopatia, massatges o teràpies, amb reserva de sessions en línia i panell de gestió. Alta gratuïta.',
        h1: 'Web amb reserves per a fisioterapeutes i teràpies',
        lede: 'Durant una sessió no pots respondre el telèfon. Amb reserves en línia, els pacients demanen hora sols i tu ho veus tot al panell.',
        dolorsTitol: 'La consulta i el telèfon no van bé junts',
        dolors: [
          { t: 'Trucades durant les sessions', d: 'O atens el pacient o atens el telèfon. Les dues coses alhora no surten bé.' },
          { t: 'Pacients que busquen a Google', d: 'Qui busca fisioterapeuta a prop tria qui pot reservar fàcilment.' },
          { t: 'Canvis d’hora per WhatsApp', d: 'Cada canvi són quatre missatges. Amb l’agenda en línia, el pacient tria una altra hora lliure.' },
        ],
        funcionsTitol: 'Què tindrà la web de la teva consulta',
        funcions: [
          { t: 'Tipus de sessió amb durada', d: 'Primera visita, sessió de seguiment, massatge… Cada una amb el seu temps.' },
          { t: 'Diversos professionals', d: 'Si sou més d’un, cada franja accepta les reserves que hi càpiguen.' },
          { t: 'Horari i vacances', d: 'Ho canvies tu mateix des del panell i la web s’actualitza al moment.' },
          { t: 'Avís de cada reserva', d: 'Reps un correu amb cada sessió nova, amb el dia i l’hora.' },
        ],
        demoTitol: 'Prova com reserva un pacient',
        demoText: 'Fes una reserva de prova a la demostració de la portada i mira com arriba al panell.',
        faq: [
          {
            q: 'La web serveix per a osteòpates, psicòlegs o massatgistes?',
            a: 'Sí. Funciona per a qualsevol consulta que treballi amb cita i sessions de durada coneguda.',
          },
          ...faqComuns.ca,
        ],
      },
      es: {
        slug: 'fisioterapeutas',
        nom: 'Fisioterapeutas y terapias',
        title: 'Web con reservas para fisioterapeutas y terapias · Garrotxa | Basalt Webs',
        description:
          'Web propia para tu consulta de fisioterapia, osteopatía, masajes o terapias, con reserva de sesiones online y panel de gestión. Alta gratuita.',
        h1: 'Web con reservas para fisioterapeutas y terapias',
        lede: 'Durante una sesión no puedes contestar el teléfono. Con reservas online, los pacientes piden hora solos y tú lo ves todo en el panel.',
        dolorsTitol: 'La consulta y el teléfono no van bien juntos',
        dolors: [
          { t: 'Llamadas durante las sesiones', d: 'O atiendes al paciente o atiendes el teléfono. Las dos cosas a la vez no salen bien.' },
          { t: 'Pacientes que buscan en Google', d: 'Quien busca fisioterapeuta cerca elige a quien puede reservar fácilmente.' },
          { t: 'Cambios de hora por WhatsApp', d: 'Cada cambio son cuatro mensajes. Con la agenda online, el paciente elige otra hora libre.' },
        ],
        funcionsTitol: 'Qué tendrá la web de tu consulta',
        funcions: [
          { t: 'Tipos de sesión con duración', d: 'Primera visita, sesión de seguimiento, masaje… Cada una con su tiempo.' },
          { t: 'Varios profesionales', d: 'Si sois más de uno, cada franja acepta las reservas que quepan.' },
          { t: 'Horario y vacaciones', d: 'Lo cambias tú mismo desde el panel y la web se actualiza al momento.' },
          { t: 'Aviso de cada reserva', d: 'Recibes un correo con cada sesión nueva, con el día y la hora.' },
        ],
        demoTitol: 'Prueba cómo reserva un paciente',
        demoText: 'Haz una reserva de prueba en la demostración de la portada y mira cómo llega al panel.',
        faq: [
          {
            q: '¿La web sirve para osteópatas, psicólogos o masajistas?',
            a: 'Sí. Funciona para cualquier consulta que trabaje con cita y sesiones de duración conocida.',
          },
          ...faqComuns.es,
        ],
      },
    },
  },
  {
    id: 'taller',
    pla: 'reserves',
    negoci: 'taller',
    demo: null,
    text: {
      ca: {
        slug: 'tallers',
        nom: 'Tallers',
        title: 'Web amb cita prèvia per a tallers mecànics · Garrotxa i Catalunya | Basalt Webs',
        description:
          'Web pròpia per al teu taller amb cita prèvia en línia per a revisions, canvis d’oli i pneumàtics, i panell per organitzar la feina. Alta gratuïta i sense permanència.',
        h1: 'Web amb cita prèvia per a tallers',
        lede: 'Revisions, canvis d’oli, pneumàtics, pre-ITV: el client demana cita en línia i tu organitzes la feina sense deixar el cotxe a mitges.',
        dolorsTitol: 'Amb les mans brutes no s’agafa el telèfon',
        dolors: [
          { t: 'Trucades sota el cotxe', d: 'Quan estàs treballant, el telèfon espera. I el client que espera massa, truca a un altre taller.' },
          { t: 'Dies plens i dies buits', d: 'Amb cita prèvia repartida, la feina s’organitza millor al llarg de la setmana.' },
          { t: 'Sense web, sense Google', d: 'Qui busca taller a prop tria el que veu primer i el que li posa fàcil.' },
        ],
        funcionsTitol: 'Què tindrà la web del teu taller',
        funcions: [
          { t: 'Serveis amb temps previst', d: 'Canvi d’oli, revisió, pneumàtics… Cada servei ocupa el temps que li toca.' },
          { t: 'Places de treball', d: 'Si teniu diversos elevadors o mecànics, cada franja accepta les cites que hi càpiguen.' },
          { t: 'Horari i tancaments', d: 'Canvies l’horari o marques festius des del panell, i la web s’actualitza.' },
          { t: 'Com arribar-hi', d: 'Adreça, horari i telèfon ben visibles, també per a qui ve de fora.' },
        ],
        demoTitol: 'Prova com es demana una cita',
        demoText: 'Fes una reserva de prova a la demostració de la portada i mira com arriba al panell.',
        faq: [
          {
            q: 'Serveix per a tallers de motos o bicicletes?',
            a: 'Sí. Funciona per a qualsevol taller que treballi amb cita i serveis de durada aproximada.',
          },
          ...faqComuns.ca,
        ],
      },
      es: {
        slug: 'talleres',
        nom: 'Talleres',
        title: 'Web con cita previa para talleres mecánicos · Garrotxa y Cataluña | Basalt Webs',
        description:
          'Web propia para tu taller con cita previa online para revisiones, cambios de aceite y neumáticos, y panel para organizar el trabajo. Alta gratuita y sin permanencia.',
        h1: 'Web con cita previa para talleres',
        lede: 'Revisiones, cambios de aceite, neumáticos, pre-ITV: el cliente pide cita online y tú organizas el trabajo sin dejar el coche a medias.',
        dolorsTitol: 'Con las manos sucias no se coge el teléfono',
        dolors: [
          { t: 'Llamadas bajo el coche', d: 'Cuando estás trabajando, el teléfono espera. Y el cliente que espera demasiado, llama a otro taller.' },
          { t: 'Días llenos y días vacíos', d: 'Con cita previa repartida, el trabajo se organiza mejor a lo largo de la semana.' },
          { t: 'Sin web, sin Google', d: 'Quien busca taller cerca elige el que ve primero y el que se lo pone fácil.' },
        ],
        funcionsTitol: 'Qué tendrá la web de tu taller',
        funcions: [
          { t: 'Servicios con tiempo previsto', d: 'Cambio de aceite, revisión, neumáticos… Cada servicio ocupa el tiempo que le toca.' },
          { t: 'Puestos de trabajo', d: 'Si tenéis varios elevadores o mecánicos, cada franja acepta las citas que quepan.' },
          { t: 'Horario y cierres', d: 'Cambias el horario o marcas festivos desde el panel, y la web se actualiza.' },
          { t: 'Cómo llegar', d: 'Dirección, horario y teléfono bien visibles, también para quien viene de fuera.' },
        ],
        demoTitol: 'Prueba cómo se pide una cita',
        demoText: 'Haz una reserva de prueba en la demostración de la portada y mira cómo llega al panel.',
        faq: [
          {
            q: '¿Sirve para talleres de motos o bicicletas?',
            a: 'Sí. Funciona para cualquier taller que trabaje con cita y servicios de duración aproximada.',
          },
          ...faqComuns.es,
        ],
      },
    },
  },
];

export const sectorUi = {
  ca: {
    base: '/webs/',
    etiqueta: 'Webs per sector',
    proposta: 'Demana la teva proposta gratis',
    whatsapp: 'Parlem per WhatsApp',
    preuTitol: 'Preu clar, sense sorpreses',
    mes: '/mes + IVA',
    unic: 'o un sol pagament de',
    ivaInclos: 'IVA inclòs',
    punts: ['Alta gratuïta', 'Sense permanència', 'Sense comissions per reserva', 'Proposta gratis'],
    veureDemo: 'Obre la demostració',
    provaPortada: 'Prova la demostració',
    faqTitol: 'Preguntes freqüents',
    finalTitol: 'Et preparem la teva web, gratis i sense compromís',
    finalText: 'Explica’ns quin negoci tens i et fem una proposta amb el teu nom i els teus serveis. Només pagues si t’agrada.',
    altres: 'Altres sectors',
    calculadora: 'Calcula quant et costen les comissions',
    zona: 'Des de la Garrotxa, per a tot Catalunya',
  },
  es: {
    base: '/es/webs/',
    etiqueta: 'Webs por sector',
    proposta: 'Pide tu propuesta gratis',
    whatsapp: 'Hablemos por WhatsApp',
    preuTitol: 'Precio claro, sin sorpresas',
    mes: '/mes + IVA',
    unic: 'o un solo pago de',
    ivaInclos: 'IVA incluido',
    punts: ['Alta gratuita', 'Sin permanencia', 'Sin comisiones por reserva', 'Propuesta gratis'],
    veureDemo: 'Abre la demostración',
    provaPortada: 'Prueba la demostración',
    faqTitol: 'Preguntas frecuentes',
    finalTitol: 'Te preparamos tu web, gratis y sin compromiso',
    finalText: 'Cuéntanos qué negocio tienes y te hacemos una propuesta con tu nombre y tus servicios. Solo pagas si te gusta.',
    altres: 'Otros sectores',
    calculadora: 'Calcula cuánto te cuestan las comisiones',
    zona: 'Desde la Garrotxa, para toda Cataluña',
  },
} as const;
