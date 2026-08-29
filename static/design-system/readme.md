# AlgoCratic Design System

Design system for **AlgoCratic Media**, "a tiny little division of AlgoCratic Futures™" — the satirical dystopian-corporate fiction layer wrapped around a real software-development curriculum (CTS-285 / CSC-289). Students are "Creators" running "Channels"; SHODANN is their AI "Channel Success Partner"; grades are framed as Exposure Units™ (XU) and clearance tiers. The satire targets the company and the system, never the student — and the design system encodes an explicit mechanism for **exiting the fiction** (plain type, no stratum) when the instructor speaks out of character.

**Version basis: AlgoCratic Design System v0.2** ("consolidated from the spike"), which supersedes the v0.1 visual identity guide. Five rules, one substrate declaration, zero exceptions.

## Sources provided
- Local codebase `algo_legacy_design/` (read-only mount), containing:
  - `algocratic-design-system-v0.2.html` + `algocratic-tokens.css` — the canonical token set and five rules (source of truth)
  - `algocratic-visual-style-guide.html` — v0.1, superseded; kept for archaeology
  - `four-perspectives-spike.html` — the design spike the system was consolidated from
  - `exemplar-web-media-stratum.html` — Media/2026 channel dashboard (screen column)
  - `exemplar-slides-pelican-stratum.html` — Day One deck (Pelican/196X, print column)
  - `probe4b-sim-assignment-page.html` — assignment document page (Pelican, print)
  - `week3-dataman-canvas-fragment.html` — Canvas RCE inline-styled fragment
  - `The PRISM · Algocratic Futures.html` (+ `_files/`) — saved from https://algocratic.github.io/the-prism.html; its `tokens/*.css` were NOT captured in the save (see Caveats)
  - `algo-to-canvas-compositor.skill`, `spike-to-system.skill`

## The five rules (v0.2, condensed)
0. **Produced artifacts outrank speculation.** Shipped badges/print are canon; digital conforms.
1. **Type stack:** five faces, five jobs, no exceptions (see VISUAL FOUNDATIONS).
2. **Color: screen ≠ print, both are real.** Every clearance level has a SCREEN value (canon) and a PRINT value (measured from badges). Declare your substrate, use that column.
3. **Pattern accretion:** `pattern(N) = pattern(N−1) @ 25–35% opacity + motif(N) @ 90%`. The badge remembers where you started. Motifs: INFRARED noise · RED stripes · ORANGE barcode · YELLOW chevrons · GREEN circuits · BLUE+ [REDACTED].
4. **Every artifact declares its stratum** — what year does this document think it is? Strata: **1968 Comix** (underground press, aged paper, Bangers), **196X Pelican** (corporate print, warm paper, Orbitron), **198X Terminal** (phosphor on near-black, mono only), **2026 Media** (badge language on screen). Never mixed within one artifact except deliberately, at the cracks. SHODANN's inset is the one stratum-independent element.
5. **Cobalt Confessions** (underground comix) has a fixed format spec; the art pipeline is swappable.

## CONTENT FUNDAMENTALS
- **Four voices**, each bound to a stratum: **Corporate** (confident, beautiful, slightly menacing, ™ density high), **SHODANN** (first-person, warm-surveillance, specific observations about *your* work), **Underground** (pulp noir; teaching payload rides in the dialogue; marked `frotz`/`plugh`), **Instructor OOC** (plain, direct, kind — the fiction stops).
- Corporate voice states reassurances "proactively and unprompted," which is the joke: *"Tiers reflect competency… and are in no way a recruitment structure, which is a thing we state proactively and unprompted."*
- Direct address: "you/your" to the Creator. SHODANN uses "I". Corporate uses "we" and the passive-menacing: *"Content that arrives by other means did not arrive. Thank you for your cooperation."*
- Trademark ™ liberally on invented nouns: Exposure Units™, Prompt Sovereignty™, Wellness™, Opportunity™, AlgoCratic Futures™.
- Title casing on invented proper nouns (Trusted Workflow, Channel Sunsetting, Off-Stream Moments); ALL-CAPS mono for metadata lines (`STRATUM=MEDIA/2026 · COLUMN=SCREEN · TOKENS=v0.2`), separated by `·`.
- Assessment language is always **delta, not level**: "dy/dx, never y"; *"The person who goes from terrible to okay beats the person who stays good."*
- **No emoji anywhere.** Unicode glyphs (`→ · ▲ [✓] ›`) do iconographic work.
- The satire is self-deprecating toward the institution: *"This document contains no jokes about your standing. It contains several about ours."*
- SHODANN example register: *"I noticed you stopped apologizing to the model. Good. It never minded, but you minded, and now you don't."*
- Instructor OOC register: *"If the analyst framing feels silly, keep the habit and drop the costume — the habit is what employers pay for."*

## VISUAL FOUNDATIONS
- **Color:** warm paper `#F5F0E6` pages with near-black ink `#1A1A22`; white cards; six-to-nine clearance colors in two columns (screen canon vs print-as-produced — never rounded, never mixed). Terminal stratum is phosphor `#00ff41` on `#0a0a10` with grid `#1a1a2e`. Comix uses aged paper `#EDE4CE`, cream panels `#fbf6ea`, caption yellow `#F4E04D`. Accents: SHODANN green `#1F7A5C`, amber `#B8860B`.
- **Type:** Orbitron 900 (display: level names, wordmarks, operative numbers), Saira Condensed 500–700 uppercase letterspaced (labels; CLEARANCE descriptors at .35em tracking), IBM Plex Sans (body, 15px/1.5), IBM Plex Mono (metadata, eyebrows, terminal, fine print), Bangers (underground titles ONLY, never corporate).
- **Backgrounds:** flat single-hue fields (badge language); no gradients anywhere; pattern-accretion SVG strips as the only ornament; the ink-dark hero band for guide covers; terminal-dark "cracks" deliberately interrupting light pages (older stratum showing through).
- **Borders/rules:** 1px hairline `#C4C4C4` panel borders and dividers; 1px dashed hairlines for list rows; 4px clearance-colored banner underline on documents; 2–3px ink borders on workflow steps; 2.5px ink borders on comix panels; SHODANN's 4px (6px on slides) green left-rule.
- **Radii:** small and utilitarian — 2–3px chips/tags, 5–6px cards/panels, 12px comix balloons. SHODANN inset is squared on the rule side (`0 5px 5px 0`).
- **Shadows:** rare; only lifting badge/tier artifacts off paper (`0 4px 14px rgba(26,26,34,.18)`). Cards are border-defined, not shadow-defined.
- **Layout:** centered shells (640px text measure, 820px documents, 1000px app, 1080px guides); documents are single-column with a banner; the media app is a 2fr/1fr card grid; sticky ink-dark nav with 3px underline-active tabs.
- **Animation:** effectively none — artifacts are print-minded. Hover states are color swaps (nav links turn clearance orange); no motion, no bounces. Respect that restraint.
- **Imagery:** no photography. All imagery is flat geometric SVG (badge patterns, orbit diagrams, trapezoids, unit-less growth charts). Color vibe warm, print-like.
- **Transparency/blur:** none. Opacity is used only inside the pattern accretion rule (ghost .25–.35 / motif .90) and for de-emphasized text on colored fields.
- **The crack motif:** a terminal-stratum panel deliberately embedded in a lighter-stratum page, mono phosphor text, marked `frotz`.

## ICONOGRAPHY
- **No icon font, no icon set, no emoji.** The system's "icons" are: (1) the two provided marks — `assets/AF_Logo_Eye.svg` (eye-in-A mark used by the PRISM site) and `assets/AF_A_Eye.svg`; (2) the inline geometric mark `assets/algocratic-mark.svg` (rect–diamond–rect column, 2.5px ink stroke) used on badges, mastheads, and document banners; (3) the five accretion patterns `assets/patterns/pattern-{infrared,red,orange,yellow,green}.svg`; (4) unicode glyphs as icons: `→` flow arrows, `·` separators, `▲` deltas, `[✓]`/`[ ]` mono checkboxes, `›` chevrons.
- Do not import Lucide/Heroicons/etc. — a generic icon set would break the print-era register. If a new pictogram is truly needed, draw it in the flat 2.5px-ink-stroke geometry of the mark.

## Products / surfaces represented
1. **Media channel dashboard** (Media/2026 stratum, screen column) — creator channel page: masthead with accretion strip, sticky nav, XU counter, Trusted Workflow, growth chart, SHODANN card, checklist. → `ui_kits/media_channel/`
2. **Pelican documents** (196X, print column) — assignment pages / official documents: clearance banner, pattern strip, deliverables checklist, assessment table, OOC note, mono fine print. → `ui_kits/pelican_documents/`
3. **The PRISM site** (algocratic.github.io) — public capability-ladder framework page: nine clearance bands, lens cards, assay card. → `ui_kits/prism_site/` (see Caveats: token values partially reconstructed)
4. **Slides** (Pelican deck language) → `slides/`

## Component inventory (derived, not invented)
No formal component library exists in the sources; these are the primitives that repeat across the produced artifacts, extracted verbatim: ClearanceChip, ClearanceBadge, PatternStrip, RuleTag, Eyebrow, Card, ShodannInset, OocNote, TerminalCrack, TrustedWorkflow, Checklist, XuCounter. Grouped under `components/{core,badges,voice,surfaces,workflow}/`.

### Intentional additions
- None beyond the extraction itself. No Toast/Avatar/Tabs/etc. were added.

## Index
- `styles.css` → `tokens/{fonts,colors,typography,spacing,effects}.css`
- `assets/` — marks, accretion patterns
- `components/` — React primitives (each with `.d.ts`, `.prompt.md`, card HTML)
- `ui_kits/media_channel/`, `ui_kits/pelican_documents/`, `ui_kits/prism_site/`
- `slides/` — six Pelican-deck slide types
- `guidelines/` — foundation specimen cards
- `SKILL.md` — agent skill entry point

## Caveats
- **Fonts are Google-Fonts proxies by design**: v0.2 itself names Orbitron as "the web proxy" for an unconfirmed production display face. No font binaries were provided; `tokens/fonts.css` imports from Google Fonts.
- **PRISM site tokens not captured**: the saved page references `tokens/{fonts,colors,typography,spacing,effects}.css` on algocratic.github.io which were not in the local save. The PRISM kit maps the nine `--prism-*` band colors to the canonical screen clearance column (well-grounded) but its `--af-*` neutrals (navy, gold, silver, slate, paper) are **reconstructed approximations** flagged in `ui_kits/prism_site/README.md`.
- Print values for INFRARED/GREEN/BLUE are ◇ extrapolated pending the designer's swatch export (v0.2's own note).
- BLUE+ accretion patterns are canonically [REDACTED]; none were drawn.
