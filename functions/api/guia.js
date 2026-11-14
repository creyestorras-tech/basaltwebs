// Cloudflare Pages Function: descàrrega de la guia gratuïta (/guia-clients-google).
// Envia l'enllaç del PDF al correu de qui la demana i avisa info@basaltwebs.cat.
// Fa servir les mateixes variables que /api/proposta (BREVO_API_KEY, PROPOSTA_TO, PROPOSTA_FROM).
// Si l'enviament falla, la descàrrega continua funcionant: la pàgina mostra l'enllaç igualment.

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const clip = (s, n = 160) => String(s ?? '').trim().slice(0, n);

const PDF = { ca: '/guia/guia-clients-google.pdf', es: '/guia/guia-clientes-google.pdf' };

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

async function enviar(env, msg) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(msg),
  });
  if (!res.ok) throw new Error(`Brevo ${res.status}: ${await res.text()}`);
}

export async function onRequestPost({ request, env }) {
  const esForm = !(request.headers.get('content-type') || '').includes('application/json');
  let d = {};
  try {
    d = esForm ? Object.fromEntries((await request.formData()).entries()) : await request.json();
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }
  const lang = d.lang === 'es' ? 'es' : 'ca';
  const pdfUrl = new URL(PDF[lang], request.url).href;
  const fi = () => (esForm ? Response.redirect(pdfUrl, 303) : json({ ok: true, pdf: PDF[lang] }));

  // Trampa per a robots
  if (d.web2) return fi();

  const nom = clip(d.nom, 120);
  const correu = clip(d.correu);
  const negoci = clip(d.negoci, 120);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correu) || d.privacitat !== 'si') {
    return json({ ok: false, error: 'missing-fields' }, 422);
  }
  if (!env.BREVO_API_KEY) return fi();

  const from = env.PROPOSTA_FROM || 'info@basaltwebs.cat';
  const to = env.PROPOSTA_TO || 'info@basaltwebs.cat';
  const ca = lang === 'ca';

  try {
    await enviar(env, {
      sender: { name: 'Basalt Webs', email: from },
      to: [{ email: correu, ...(nom ? { name: nom } : {}) }],
      replyTo: { email: to, name: 'Basalt Webs' },
      subject: ca ? 'La teva guia: 5 coses per tenir més clients des de Google' : 'Tu guía: 5 cosas para tener más clientes desde Google',
      htmlContent: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#16181a">${
        ca
          ? `<p>Hola${nom ? ' ' + esc(nom) : ''},</p><p>Aquí tens la guia que has demanat:</p><p><a href="${esc(pdfUrl)}"><b>Descarrega «5 coses per tenir més clients des de Google» (PDF)</b></a></p><p>Si vols que t'ajudem a posar-ho en pràctica, et preparem una proposta de web gratis: <a href="https://basaltwebs.cat/proposta">basaltwebs.cat/proposta</a>.</p><p>Una salutació,<br>L'equip de Basalt Webs</p>`
          : `<p>Hola${nom ? ' ' + esc(nom) : ''},</p><p>Aquí tienes la guía que has pedido:</p><p><a href="${esc(pdfUrl)}"><b>Descarga «5 cosas para tener más clientes desde Google» (PDF)</b></a></p><p>Si quieres que te ayudemos a ponerlo en práctica, te preparamos una propuesta de web gratis: <a href="https://basaltwebs.cat/es/propuesta">basaltwebs.cat/es/propuesta</a>.</p><p>Un saludo,<br>El equipo de Basalt Webs</p>`
      }</div>`,
    });
  } catch (e) {
    console.error(e);
  }

  try {
    await enviar(env, {
      sender: { name: 'Web Basalt Webs', email: from },
      to: [{ email: to }],
      replyTo: { email: correu, ...(nom ? { name: nom } : {}) },
      subject: `Guia descarregada: ${negoci || correu}`,
      htmlContent: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#16181a"><p>Algú ha descarregat la guia gratuïta.</p><p><b>Nom:</b> ${esc(nom) || '—'}<br><b>Correu:</b> ${esc(correu)}<br><b>Negoci:</b> ${esc(negoci) || '—'}<br><b>Idioma:</b> ${lang.toUpperCase()}</p><p>És un contacte interessat: pots respondre aquest correu per oferir-li una proposta.</p></div>`,
    });
  } catch (e) {
    console.error(e);
  }

  return fi();
}

export function onRequestGet() {
  return json({ ok: false, error: 'method-not-allowed' }, 405);
}
