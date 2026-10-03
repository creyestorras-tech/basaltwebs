# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of small neighbourhood businesses that work by appointment (beauty/aesthetics centres, massage and manual therapy, barbers, hairdressers) in Catalonia. They are not technical, run the business with their own hands, and evaluate Basalt Webs from their phone, often between clients. They need to trust that the person behind it is real, close and competent before they write on WhatsApp.

Secondary: the end customers of those businesses, who will book from their phone; they matter as the reason the product exists, not as visitors of this site.

## Product Purpose

Basalt Webs builds each business its own website with 24/7 online booking and a management panel (appointments, opening hours, services, holidays, capacity). The marketing site exists to make the owner understand the product in seconds, believe it works (real client sites), and start a WhatsApp conversation. Success = WhatsApp messages from qualified local businesses.

## Positioning

A one-person studio born in La Garrotxa (Olot) that works for neighbourhood businesses across Catalonia: direct treatment without intermediaries, Catalan first (and Spanish), a free tailored proposal before any commitment, and a single payment with no monthly fees or lock-in. Proof is the product itself: an interactive booking demo and three clearly labelled example sites in different styles.

## Operating Context

- First contact is WhatsApp (+34 623 202 188) or email (basaltwebs@gmail.com).
- Process: free proposal with the business name and services → review together and adapt → publish and start receiving bookings.
- Client sites are deployed on `*.pages.dev`; the booking panel lets the owner change hours, services, holidays and reserve capacity for walk-in customers, and handle several customers at once.

## Capabilities and Constraints

- Static Astro site on Cloudflare Pages, https://basaltwebs.pages.dev. No database, no forms, no cookies, no analytics.
- Catalan default (`/`), Spanish (`/es/`), CA | ES switch in the header.
- Price: single payment of 379 € + IVA. No monthly fees, no lock-in. The proposal is free and without commitment: the client only pays if they like it.
- Legal pages required (avís legal, política de privacitat). Holder: Jordi Reyes Fernández, NIF 46673015N, domicile Olot (Girona).
- Undecided: own domain (planned .cat), testimonials.

## Brand Commitments

- Name from the basalt of La Garrotxa (Castellfollit de la Roca columns). Spirit: Garrotxa roots, reach across Catalonia. The site must not describe the product as "simple/senzilla"; it is a professional website.
- No photos of people. Landscape/basalt imagery only (Unsplash/Pexels, credited).
- About signature: "Jordi Reyes, de Basalt Webs".
- Voice: close, direct, plain Catalan; serious and trustworthy, not a big-city agency.

## Evidence on Hand

- Example sites: three invented businesses (Barberia Tramuntana, Centre d'estètica Alba, Massatges Serena), each tagged «Exemple». They are not clients. No real business may appear on the site unless it is a confirmed client who agreed to it.
- Photo: Castellfollit de la Roca by Jesús Esteban (Unsplash), `src/assets/castellfollit.jpg`.
- No testimonials, ratings, client counts or booking statistics exist: never fabricate them.
- No device frames: no drawn phones or browsers anywhere; interface pieces float on their own.

## Product Principles

1. Understood in ten seconds: show the booking flow working rather than describe it.
2. Proof over promises: real client sites, real names, real towns.
3. Zero risk to say yes: free proposal, single payment, no fees, no lock-in.
4. Phone first: the owner reads this between clients on a phone.
5. Trust through closeness: a real person from La Garrotxa, speaking their language.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard navigation, meaningful alt text, `prefers-reduced-motion` respected. Audience includes non-technical and older owners: large tap targets, readable type sizes.
