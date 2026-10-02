---
name: Basalt Webs
description: A dressed basalt wall from Olot. Dark stone courses, lime-mortar reading courses, one lichen accent for action.
colors:
  basalt: "#131517"
  basalt-raised: "#1b1e21"
  slate: "#24282c"
  slate-edge: "#2e3337"
  bed: "#0c0d0e"
  mist: "#959a9e"
  mist-light: "#bfc3c6"
  chalk: "#f2f1ed"
  lime: "#e8e6e0"
  lime-face: "#f3f1ec"
  lime-bed: "#c9c5bb"
  joint-lime: "#a8a397"
  ink: "#16181a"
  ink-muted: "#4c5156"
  lichen: "#e3a12f"
  lichen-hi: "#f0b54a"
  lichen-ink: "#7f520c"
  ember: "#a3361f"
  bezel: "#0a0b0c"
typography:
  display:
    fontFamily: "Marcellus, 'Palatino Linotype', Palatino, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Marcellus, 'Palatino Linotype', Palatino, serif"
    fontSize: "clamp(2.25rem, 5.4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Marcellus, 'Palatino Linotype', Palatino, serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  title-text:
    fontFamily: "'Schibsted Grotesk Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "'Schibsted Grotesk Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.9vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Schibsted Grotesk Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Schibsted Grotesk Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1.4
rounded:
  stone: "2px"
  block: "3px"
  wall: "4px"
  panel: "6px"
spacing:
  joint: "2px"
  joint-lime: "3px"
  gutter: "clamp(16px, 4.4vw, 40px)"
  course: "clamp(88px, 12vw, 152px)"
  stone-pad: "clamp(24px, 3.4vw, 40px)"
  header: "64px"
  wrap: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.lichen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.block}"
    padding: "0 26px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.lichen-hi}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.block}"
    padding: "0 26px"
    height: "54px"
  stone-dark:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.stone}"
    padding: "{spacing.stone-pad}"
  stone-lime:
    backgroundColor: "{colors.lime-face}"
    textColor: "{colors.ink}"
    padding: "clamp(28px, 4vw, 44px) clamp(22px, 3vw, 36px)"
  wall-bed:
    backgroundColor: "{colors.bed}"
    rounded: "{rounded.wall}"
    padding: "{spacing.joint-lime}"
  nav-link:
    textColor: "{colors.mist}"
    padding: "10px 12px"
  tag-new:
    backgroundColor: "{colors.lichen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.block}"
    padding: "4px 9px"
---

# Design System: Basalt Webs

## Overview

**Creative North Star: "Pedra picada d'Olot"**

The site is a dressed basalt wall from La Garrotxa. Every section is a course of stone laid full width: dark basalt courses carry the claim, lime-mortar courses carry the reading. Inside a course, content is cut into stones separated by mortar joints of 2 to 3px, and those joints are the only grid the page has. Headlines are incised in a glyphic, stone-cut capital face; everything that is read at length is set in a sturdy grotesk. The wall is real material: dark stones show a photographic basalt grain plate under a flat wash, so no two stones read identical.

The palette is near-black stone, cool mist and warm lime, with one living colour on it: lichen (the Xanthoria that grows on old walls), which marks what the visitor can do and what just changed. The density is calm and large-type, tuned for a business owner reading on a phone between clients. Motion is one gesture: each block sets into the wall once, with a short rise and a fade, and stays.

The world refuses the SaaS split hero with a row of feature cards, colour gradients, glows, and pill-shaped controls on the wall.

**Key Characteristics:**
- One reading tone: lime courses carry the page; basalt is reserved for three courses only (hero, booking demo, contact). Same-tone neighbours are separated by a mortar joint.
- Mortar joints (2px on dark, 3px on lime) as the only grid: stones sit on a visible bed colour.
- Running bond: stone widths and positions offset between rows (7/5 then 5/7 spans; wider middle stone; dropped middle column).
- Square stones: corners of 2 to 4px, never pills.
- Photographic basalt grain plate under a flat wash on dark stones, each stone sampling a different patch.
- Lichen is the single accent, for actions and live state only.
- Marcellus for incised headlines, figures and times; Schibsted Grotesk for everything read.
- Blocks set in once: 10px rise + fade on a long ease-out; reduced motion keeps only the fade.

## Colors

Cold volcanic stone and warm lime mortar, punctured by a single lichen yellow.

### Primary
- **Xanthoria Lichen** (lichen): the only accent. Fill of every primary action (WhatsApp buttons, demo confirm), the skip link, focus rings, text selection on dark, the caret, the active language and the "new" tag in the demo panel. It always carries ink-coloured text, never chalk.
- **Sunlit Lichen** (lichen-hi): hover state of the lichen button only.
- **Lichen Ink** (lichen-ink): lichen darkened for use as text and marks on lime courses (step numerals, check marks, "visit site" links), where raw lichen would fail contrast.

### Tertiary
- **Ember** (ember): a narrow semantic ink for loss: the missed-call count and phone icons in the problem ledger. It depicts a lost customer and is used nowhere else.

### Neutral
- **Olot Basalt** (basalt): page ground and dark courses; also the theme colour and the wash tint over the grain plate.
- **Raised Basalt** (basalt-raised): panel headers and the footer rule; one step lighter than the ground.
- **Slate Block** (slate): stone faces in dark walls (under the grain plate) and demo panel rows.
- **Slate Edge** (slate-edge): hairline device rims, language divider, scrollbar thumb.
- **Mortar Bed** (bed): the darkest stone; shows through joints between dark stones and courses, under the header, and as the footer ground.
- **Mist** (mist): secondary text on dark: nav links, captions, labels, origin line.
- **Light Mist** (mist-light): lede and body copy on dark where chalk would be too loud.
- **Chalk** (chalk): primary text on dark.
- **Lime Mortar** (lime): ground of the light reading courses.
- **Lime Face** (lime-face): stone faces set into a lime wall (ledger rows, process steps, FAQ answers, badges).
- **Lime Bed** (lime-bed): joint between two lime courses; rim of the price plaque.
- **Lime Joint** (joint-lime): visible mortar between stones on lime courses and the FAQ course lines.
- **Ink** (ink): text on lime and on lichen.
- **Muted Ink** (ink-muted): secondary text on lime.
- **Device Bezel** (bezel): the black frame of depicted phones.

### Named Rules
**The Lichen Rule.** Lichen marks what can be done or what just happened (actions, focus, current, new). It never fills a large surface, never decorates a heading, and never appears as a second accent beside another hue.

**The Ink-on-Lichen Rule.** Anything set on lichen is ink, never chalk or white.

**The Two Courses Rule.** A section is either a basalt course or a lime course. On a lime course the chalk token is remapped to ink, so components read correctly on either. Basalt courses are limited to the hero, the booking demo and the contact close; every other section is lime, so the page never flips tone at random (dark stones may still sit inside a lime course, as in the price plaque and the "what is included" wall, and keep chalk text).

## Typography

**Icons:** Phosphor (regular, and bold for check and arrow), inlined as SVG through `src/components/Icon.astro`. One family, no hand-drawn paths.

**Display Font:** Marcellus (with Palatino Linotype, Palatino, serif)
**Body Font:** Schibsted Grotesk Variable (with Segoe UI, system-ui, sans-serif)

**Character:** Marcellus is a flared, glyphic capital face that reads as lettering cut into stone; Schibsted Grotesk is a dense, newsy grotesk that stays legible at small sizes on a phone. The serif speaks, the grotesk explains.

### Hierarchy
- **Display** (400, clamp(2.5rem, 5vw, 3.75rem), 1.04): the hero headline, held to 22ch so it sets in two lines on desktop; the contact headline uses up to 5.5rem.
- **Headline** (400, clamp(2.25rem, 5.4vw, 3.75rem), 1.06): section headings; balanced wrapping.
- **Title** (Marcellus 400, clamp(1.375rem, 2.2vw, 1.75rem), 1.15): names cut into stones: wall stones, example sites, the plaque quote.
- **Title Text** (Schibsted 650, 1.3125rem, 1.25): step and FAQ titles where the title is an instruction rather than a name.
- **Lede** (400, clamp(1.0625rem, 1.9vw, 1.25rem), 1.55): section intros, max 38rem, in light mist or muted ink.
- **Body** (400, 1.0625rem, 1.6): running text; legal pages cap at 46rem.
- **Label** (650, 0.8125rem): small metadata, language switch (tracked 0.06em), badges.

### Named Rules
**The Incised Figure Rule.** Prices, times, counts and contact values are set in Marcellus with tabular numerals: numbers are inscriptions, not UI.

**The One Weight Rule.** Marcellus has one weight (400). Hierarchy in the display face comes from size alone, never from faux bold.

## Layout

A single centred column (max 1200px) with a fluid gutter (clamp(16px, 4.4vw, 40px), never under 16px or the safe-area inset). Sections are full-bleed courses with generous vertical padding (clamp(88px, 12vw, 152px)); the hero course drops its bottom padding so the phone plaque is cut by the next course's top edge.

Inside a course, grouped content sits in a wall: a container filled with the bed colour and padded by one joint, with the stones laid in a grid whose gap is the joint (2px between dark stones and courses, 3px on lime). On wide screens two-column splits are asymmetric (1.35/1, 1.2/1, 1/1.25, 0.9/1.1), never 50/50. Running bond is achieved with offsets: a 12-column wall where rows alternate 7+5 and 5+7 spans, a three-step row of 4/5/4, and a works grid whose middle column drops 64px.

On phones every split stacks, walls become one stone per row, and the example sites become a horizontal snap-scroller that bleeds to the gutter. Breakpoints in use: 520, 640, 720, 760, 820, 900, 960 and 1040px; 900px is the main split point. Tap targets are at least 44px; buttons are 54px.

## Elevation & Depth

The wall itself is flat: depth comes from the mortar bed showing between stones and from the tone step between basalt, slate and bed, not from shadows. Buttons carry a stone bevel (a light inset top edge and a dark inset bottom edge) so they read as cut blocks. Real cast shadows are reserved for objects set into or onto the wall: the depicted phones, the demo panel, and the floating WhatsApp button on mobile. The sticky header is a basalt slab sitting on a 2px bed joint.

### Shadow Vocabulary
- **Block bevel** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.28) inset, 0 -2px 0 rgb(0 0 0 / 0.16) inset`): every solid button.
- **Set object** (`box-shadow: 0 0 0 1px #2e3337 inset, 0 40px 80px -30px rgb(0 0 0 / 0.75)`): phone plaque in the hero; the demo phone and panel use the same recipe at 30px/60px.
- **Floating action** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.28) inset, 0 10px 24px -8px rgb(0 0 0 / 0.55)`): the mobile WhatsApp button only.

### Named Rules
**The Mortar-Not-Shadow Rule.** Stones in a wall are separated by joints, never lifted by shadows. A shadow means the object is not part of the wall.

**The Flat Wash Rule.** The grain plate is always under a single-colour wash (basalt at 66 to 88%, slate at 72%); gradients are used only as that flat tint, never as a colour transition.

## Shapes

Square-cut. Stones round to 2px, buttons and tags to 3px, wall containers, plaques and photographs to 4px, the demo panel to 6px. Nothing on the wall is a pill or a circle. The single exception is depiction: phones drawn on the page keep device geometry (outer radius 34 to 44px, screen 27 to 35px), and the booking UI inside them is the client's product, with its own softer controls (9 to 12px). The brand mark is a hexagonal basalt column section with a lichen dot.

## Components

### Buttons
Cut blocks, heavy and certain.
- **Shape:** squared block (3px), 54px tall, 26px side padding, 12px icon gap, icon 21px.
- **Primary:** lichen fill with ink text at 650 weight, block bevel.
- **Hover / Focus:** hover lifts to sunlit lichen (fine pointers only); focus is a 2px lichen outline at 3px offset; press scales to 0.97 on a quick ease-out.
- **Line:** transparent block with a 1.5px inset rule in currentColor at 34%, hover fills with 7% currentColor. Works on both courses.
- **Large:** 60px tall, used inside the contact stone.
- **One label per intent:** every WhatsApp button says "Parlem per WhatsApp" / "Hablemos por WhatsApp" (header, hero, price, contact, floating button). The hero's secondary action is a text link with an arrow, not a second button.

### Stones (cards)
- **Dark stone:** slate wash over the grain plate, each stone offset to sample a different patch of the plate; 2px corners; padding clamp(24px, 3.4vw, 40px); Marcellus title and light mist body.
- **Lime stone:** lime face on a lime-joint bed with 3px joints; no corners, no shadow.
- **Wall:** the container is the mortar bed (bed or lime joint) with one joint of padding.

### Plaques
A stone set into the wall that carries a statement: basalt wash at 88% over the grain plate, 4px corners, a 2px lime-bed rim when set into a lime course. The hero phone is also treated as a plaque, cropped by the course below it.

### Navigation
Sticky basalt header, 64px, on a 2px bed joint. Links are mist at 0.9375rem/500, turning chalk on hover; they appear from 1040px. The CA | ES switch is a pair of 44px cells with a slate-edge divider, the current language in lichen. A compact lichen WhatsApp button (42px) appears from 640px. Below 760px a floating WhatsApp button rises in after the hero and hides at the contact course.

### Questions (FAQ)
All answers are visible: no accordion to tap open. Each question and answer is a lime-face stone in a lime-joint wall (3px joints), two columns from 760px, one on phones. Question in Schibsted 650, answer in muted ink.

### Booking demo (signature)
A depicted phone beside a slate panel. Choosing service, day and hour fills each step; confirming drops a new row into the panel's day list with a short settle (8px, 520ms) and a warm highlight that cools to its resting tone. Taken slots are drawn hatched and struck through, not hidden.

### Motion
One grammar: blocks set into the wall once as they enter view, rising 10px and fading in over 760ms on cubic-bezier(0.22, 1, 0.36, 1), staggered 70ms per stone. Press feedback uses cubic-bezier(0.23, 1, 0.32, 1) over 140ms. With reduced motion, the rise is dropped and only a 300ms fade remains.

## Do's and Don'ts

### Do:
- **Do** build every section as a full-width basalt or lime course, separating same-tone courses with a 2px joint.
- **Do** group content as stones on a visible mortar bed, joints of 2px on dark and 3px on lime.
- **Do** offset stone widths between rows (7/5 then 5/7, 4/5/4) so joints never line up vertically.
- **Do** put the photographic basalt grain plate under a flat wash on dark stones, and shift its position per stone.
- **Do** keep lichen for actions and live state, with ink text on it, and use lichen ink for marks on lime.
- **Do** set headlines, names and figures in Marcellus at 400; set everything read at length in Schibsted Grotesk.
- **Do** set blocks in once with a 10px rise and fade; fade only under reduced motion.

### Don't:
- **Don't** use a split hero with a row of feature cards.
- **Don't** use colour gradients or glows; the only gradient is a single-colour wash over the stone plate.
- **Don't** round stones, buttons or tags beyond 4px or make pill-shaped controls on the wall.
- **Don't** lift stones with shadows; shadows belong only to objects set onto the wall.
- **Don't** introduce a second accent hue; ember is reserved for depicting a lost customer.
- **Don't** fake bold in Marcellus.
- **Don't** use photos of people; imagery is basalt and landscape only.
