// Dades de l'empresa. Omple els camps entre claudàtors abans de publicar.
export const site = {
  nom: 'Basalt Webs',
  url: 'https://basaltwebs.pages.dev',
  persona: '[EL TEU NOM]',
  // Mòbil amb prefix de país i sense espais ni signes, p. ex. 34612345678
  mobil: '[MÒBIL]',
  correu: '[CORREU]',
  titular: '[TITULAR]',
  nif: '[NIF]',
  preuPosada: '[PREU]',
  preuManteniment: '[PREU]',
  comarques: ['Garrotxa', 'Ripollès', "Pla de l'Estany"],
  foto: {
    autor: 'Jesús Esteban',
    url: 'https://unsplash.com/photos/KZPJbeCAwEU',
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
