// Cloudflare Pages Function: rep les sol·licituds del formulari /proposta
// i les envia per correu amb l'API de Brevo.
//
// Variables d'entorn (Cloudflare Pages → Settings → Variables and secrets):
//   BREVO_API_KEY  (obligatòria, secret) clau API de Brevo (no la clau SMTP)
//   PROPOSTA_TO    (opcional) on arriben les sol·licituds. Per defecte info@basaltwebs.cat
//   PROPOSTA_FROM  (opcional) remitent verificat a Brevo. Per defecte info@basaltwebs.cat

const MAX = { text: 200, llarg: 1000 };

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const clip = (s, n = MAX.text) => String(s ?? '').trim().slice(0, n);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

async function llegir(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return await request.json();
  const fd = await request.formData();
  const o = {};
  for (const [k, v] of fd.entries()) {
    if (k === 'ajustos') (o.ajustos ||= []).push(v);
    else o[k] = v;
  }
  return o;
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
  let d;
  try {
    d = await llegir(request);
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }

  // Trampa per a robots: si el camp ocult ve ple, fem veure que ha anat bé
  if (d.web2) return json({ ok: true });

  const lang = d.lang === 'es' ? 'es' : 'ca';
  const f = {
    negoci: clip(d.negoci),
    pla: clip(d.pla),
    pagament: clip(d.pagament),
    preu: clip(d.preu),
    ajustos: (Array.isArray(d.ajustos) ? d.ajustos : d.ajustos ? [d.ajustos] : []).map((a) => clip(a)).slice(0, 12),
    estil: clip(d.estil),
    nomNegoci: clip(d.nomNegoci),
    nom: clip(d.nom),
    telefon: clip(d.telefon, 30),
    correu: clip(d.correu, 160),
    poblacio: clip(d.poblacio),
    enllac: clip(d.enllac),
    quan: clip(d.quan),
    comentaris: clip(d.comentaris, MAX.llarg),
  };

  if (!f.nomNegoci || !f.nom || !f.telefon || !f.poblacio) {
    return json({ ok: false, error: 'missing-fields' }, 422);
  }
  const correuValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.correu);

  if (!env.BREVO_API_KEY) {
    // Encara no configurat: el formulari ofereix enviar-ho per WhatsApp
    return json({ ok: false, error: 'not-configured' }, 503);
  }

  const from = env.PROPOSTA_FROM || 'info@basaltwebs.cat';
  const to = env.PROPOSTA_TO || 'info@basaltwebs.cat';

  const files = [
    ['Negoci', f.nomNegoci],
    ['Tipus', f.negoci],
    ['Persona', f.nom],
    ['Telèfon', f.telefon],
    ['Correu', f.correu],
    ['Població', f.poblacio],
    ['Instagram / Google', f.enllac],
    ['Web', f.pla],
    ['Pagament', f.pagament ? `${f.pagament} (${f.preu})` : ''],
    ['Ajustos', f.ajustos.join(', ')],
    ['Estil', f.estil],
    ['Quan', f.quan],
    ['Comentaris', f.comentaris],
    ['Idioma', lang.toUpperCase()],
  ].filter(([, v]) => v);

  const tel = f.telefon.replace(/[^\d+]/g, '');
  const wa = `https://wa.me/${tel.replace(/^\+/, '').replace(/^(?=\d{9}$)/, '34')}`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#16181a">
<h2 style="margin:0 0 12px">Nova sol·licitud de proposta</h2>
<table cellpadding="6" style="border-collapse:collapse">${files
    .map(([k, v]) => `<tr><td style="color:#4c5156;vertical-align:top"><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>
<p style="margin-top:16px"><a href="${esc(wa)}">Obrir WhatsApp amb ${esc(f.nom)}</a></p></div>`;

  try {
    await enviar(env, {
      sender: { name: 'Web Basalt Webs', email: from },
      to: [{ email: to }],
      ...(correuValid ? { replyTo: { email: f.correu, name: f.nom } } : {}),
      subject: `Nova proposta: ${f.nomNegoci} (${f.poblacio})`,
      htmlContent: html,
    });
  } catch (e) {
    console.error(e);
    return json({ ok: false, error: 'send-failed' }, 502);
  }

  // Confirmació automàtica al client (si ha deixat correu). Si falla, no és greu.
  if (correuValid) {
    const ca = lang === 'ca';
    const cos = ca
      ? `<p>Hola ${esc(f.nom)},</p><p>Hem rebut la teva sol·licitud per a <b>${esc(f.nomNegoci)}</b>. En 2–3 dies et contactem amb una web de mostra feta amb el nom i els serveis del teu negoci. És gratis i sense compromís.</p><p>Si tens cap dubte, respon aquest correu o escriu-nos per WhatsApp al 623 202 188.</p><p>Fins aviat,<br>Basalt Webs</p>`
      : `<p>Hola ${esc(f.nom)},</p><p>Hemos recibido tu solicitud para <b>${esc(f.nomNegoci)}</b>. En 2–3 días te contactamos con una web de muestra hecha con el nombre y los servicios de tu negocio. Es gratis y sin compromiso.</p><p>Si tienes cualquier duda, responde a este correo o escríbenos por WhatsApp al 623 202 188.</p><p>Hasta pronto,<br>Basalt Webs</p>`;
    try {
      await enviar(env, {
        sender: { name: 'Basalt Webs', email: from },
        to: [{ email: f.correu, name: f.nom }],
        replyTo: { email: to, name: 'Basalt Webs' },
        subject: ca ? 'Hem rebut la teva sol·licitud · Basalt Webs' : 'Hemos recibido tu solicitud · Basalt Webs',
        htmlContent: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#16181a">${cos}</div>`,
      });
    } catch (e) {
      console.error(e);
    }
  }

  if (esForm) {
    return Response.redirect(new URL(lang === 'es' ? '/es/propuesta?enviado=1' : '/proposta?enviat=1', request.url), 303);
  }
  return json({ ok: true });
}

export function onRequestGet() {
  return json({ ok: false, error: 'method-not-allowed' }, 405);
}
