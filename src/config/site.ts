// Dades de l'empresa.
export const site = {
  nom: 'Basalt Webs',
  url: 'https://basaltwebs.pages.dev',
  persona: 'Jordi Reyes',
  // Mòbil amb prefix de país i sense espais ni signes, p. ex. 34612345678
  mobil: '34623202188',
  correu: 'info@basaltwebs.cat',
  titular: 'Jordi Reyes Fernández',
  nif: '46673015N',
  domicili: 'Olot (Girona)',
  // Quota mensual (opció recomanada) i alternativa de pagament únic
  preu: '29',
  preuUnic: '459',
  foto: {
    autor: 'Jesús Esteban',
    url: 'https://unsplash.com/photos/KZPJbeCAwEU',
  },
  textura: {
    autor: 'David Jorre',
    url: 'https://unsplash.com/photos/oQbLeq4nOek',
  },
};

export type Lang = 'ca' | 'es';

export function whatsapp(lang: Lang) {
  const text =
    lang === 'ca'
      ? "Hola! M'interessa una web amb reserves per al meu negoci."
      : 'Hola! Me interesa una web con reservas para mi negocio.';
  const num = site.mobil.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}

export function mobilVisible() {
  const d = site.mobil.replace(/\D/g, '');
  if (!d) return site.mobil;
  const local = d.startsWith('34') ? d.slice(2) : d;
  return local.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}
