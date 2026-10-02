# Basalt Webs

Web de Basalt Webs (https://basaltwebs.pages.dev). Astro estàtic, català (`/`) i castellà (`/es/`).

## Contingut

- Dades de l'empresa (mòbil, correu, titular, NIF, preu): `src/config/site.ts`.
- Textos en català i castellà, i llista d'exemples de clients: `src/i18n/content.ts`.
  Quan una web de client es publiqui, posa-hi `enLinia: true` i afegeix la captura a
  `src/assets/exemples/<id>.webp` (390 px d'amplada a 2x).
- La demostració interactiva és `src/components/Demo.astro`: no desa ni envia cap dada.

## Disseny

- `PRODUCT.md`: qui és el client i què ha de transmetre la web.
- `DESIGN.md`: el sistema visual («Pedra picada d'Olot»): colors, tipografies, junts, moviment.
- La skill de disseny Impeccable és a `.claude/skills/impeccable/`.

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Variable d'entorn: `NODE_VERSION=22`

## Desenvolupament

```bash
npm install
npm run dev
```

Fotos: Castellfollit de la Roca de Jesús Esteban i textura de basalt de David Jorre, Unsplash (llicència Unsplash).
