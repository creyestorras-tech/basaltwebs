// Càlcul de la calculadora de beneficis per a negocis amb cites.
// Es fa servir igual al servidor (resultats sense JS) i al navegador.

export const SETMANES = 48;
export const IVA = 0.21;

export const TIPUS = ['perruqueria', 'estetica', 'barberia', 'fisio', 'taller', 'altres'] as const;
export type Tipus = (typeof TIPUS)[number];

// Tiquet mitjà per defecte de cada tipus. Són valors d'exemple que l'usuari ha de canviar
// pels seus; no són dades del sector. És l'única cosa que canvia en triar el tipus.
export const TIQUET: Record<Tipus, number> = {
  perruqueria: 30,
  estetica: 40,
  barberia: 18,
  fisio: 40,
  taller: 120,
  altres: 30,
};

// Valor del camp "negoci" del formulari /proposta per a cada tipus
export const NEGOCI_PROPOSTA: Record<Tipus, string> = {
  perruqueria: 'perruqueria',
  estetica: 'estetica',
  barberia: 'perruqueria',
  fisio: 'terapies',
  taller: 'taller',
  altres: 'altre',
};

// Lliscadors: clau curta (paràmetre de l'URL), rang i valor per defecte
export const CAMPS = {
  tr: { min: 5, max: 200, step: 5, def: 40 }, // trucades o missatges per setmana
  np: { min: 0, max: 60, step: 5, def: 20 }, // % que no pots agafar
  ma: { min: 0, max: 100, step: 5, def: 50 }, // % que reserva en un altre lloc
  tq: { min: 10, max: 200, step: 1, def: TIQUET.perruqueria }, // tiquet mitjà (€)
  mi: { min: 1, max: 10, step: 1, def: 3 }, // minuts per reserva
  on: { min: 0, max: 100, step: 5, def: 50 }, // % que reservaria en línia
} as const;
export type Camp = keyof typeof CAMPS;

export type Valors = { t: Tipus } & Record<Camp, number>;

export const PER_DEFECTE: Valors = {
  t: 'perruqueria',
  ...(Object.fromEntries(Object.entries(CAMPS).map(([k, c]) => [k, c.def])) as Record<Camp, number>),
};

export function costWeb(mes: number) {
  return Math.round(mes * 12 * (1 + IVA) * 100) / 100;
}

export function calcula(v: Valors, costAny: number) {
  const clients = Math.round(v.tr * (v.np / 100) * (v.ma / 100) * SETMANES);
  const ingressos = clients * v.tq;
  const hores = Math.round(((v.tr * v.mi) / 60) * SETMANES * (v.on / 100));
  const net = ingressos - costAny;
  const clientsMin = v.tq > 0 ? Math.ceil(costAny / v.tq) : 0;
  return { clients, ingressos, hores, net, clientsMin };
}

const clamp = (n: number, k: Camp) => {
  const c = CAMPS[k];
  const s = Math.round((n - c.min) / c.step) * c.step + c.min;
  return Math.min(c.max, Math.max(c.min, s));
};

// Llegeix els valors d'una URL (?t=perruqueria&tr=40&…). Si falta el tiquet, posa el del tipus.
export function llegeix(qs: URLSearchParams): Valors {
  const t = (TIPUS as readonly string[]).includes(qs.get('t') || '') ? (qs.get('t') as Tipus) : PER_DEFECTE.t;
  const v = { ...PER_DEFECTE, t, tq: TIQUET[t] };
  for (const k of Object.keys(CAMPS) as Camp[]) {
    const raw = qs.get(k);
    if (raw === null || raw.trim() === '') continue;
    const n = Number(raw);
    if (Number.isFinite(n)) v[k] = clamp(n, k);
  }
  return v;
}

export function aParams(v: Valors) {
  const qs = new URLSearchParams({ t: v.t });
  for (const k of Object.keys(CAMPS) as Camp[]) qs.set(k, String(v[k]));
  return qs.toString();
}
