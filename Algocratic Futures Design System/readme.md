# Algocratic Futures™ Design System

**"The Algorithm provides. Everything you need. Nothing you want."**

Algocratic Futures™ ("Immersive Learning Experience") is the satirical retro-futurist corporate identity wrapping a real community-college CS program (Fayetteville Tech: CSC 289 Programming Capstone, CTS 285 Systems Analysis & Design). The fiction: a benevolent-menacing algorithmic megacorp whose "citizens" (students) advance through the **PRISM clearance spectrum** — a nine-band ROYGBIV+infrared+ultraviolet competency ladder — governed by **The Algorithm** (a real methodology repo: negotiate → freeze → execute → verify) and staffed via **GRAY collaboration** (Gather Review Aesthetic Yields). The tone is deadpan dystopian bureaucracy played completely straight; the pedagogy underneath is sincere.

## Sources

- Mounted folder `assets/` — brand marks (AF eye-triangle, AL-X flowchart logo, AF lettermark, heptagram), course banners, "The Algorithm Provides" poster PDF, product screenshots (Citizen Performance Trajectory Analysis report, agent-workflow UI).
- `uploads/teacherbotdashboard.html` — Teacherbot live ops dashboard (dark surface, source of `--ops-*` tokens).
- `../the-prism.html` — **canonical PRISM framework** (Angela Westmoreland, M.Ed., FTCC Instructional Support & QA): the CTI/CIT skills-progression ladder. Source of band hex, ladder anatomy (band+role cell, lens/course tags, "Module Zero +" chips, gold hover spine, dashed IR/UV edge bands, green hinge), and the Source Serif/Sans doc family. The original is preserved at `../underground/PRISM.html`.
- `uploads/algorithm-estate-plan.html` — ULTRAVIOLET plan-of-action doc; PRISM house style applied to a working document (band ladder w/ "banks" column, move cards, gold quotes).
- `uploads/AF_Posters_AlgorithymProvides.pdf` — propaganda poster (copy source; page raster failed, see caveats).
- Referenced but not attached: github.com/norrisaftcc/the-algorithm, PRISM 1.html (Angela Westmoreland, M.Ed.).

## Products / surfaces

1. **Corporate documents** — reports, compliance documentation, plans ("Citizen Performance Trajectory Analysis"). White paper, navy techno headings, satirical fine print. → `ui_kits/documents/`
2. **Teacherbot ops dashboard** — dark monitoring surface. → `ui_kits/teacherbot/`
3. **Course collateral** — retro-stripe banners, propaganda posters. → `assets/`, slides.
4. **Slides** — corporate-communications deck styles. → `slides/`

## CONTENT FUNDAMENTALS

- **Voice**: institutional bureaucracy written by a true believer. Departments are invented and over-specific: "Office of Retroactive Objective Assignment", "Bureau of Discrepancy Reconciliation", "Internal Nullification Services™". Add ™ to internal concepts (Sacred Workflow™, Algocratic Futures™).
- **Slogans**: imperative, soothing-menacing, footer-sized: "The Algorithm provides. Everything you need. Nothing you want." / "All paths lead to optimization. Even the wrong ones. Especially the wrong ones." / "Alignment is liberation. Submission is fulfillment." / "Definitely Not A Cult!" / "The Algorithm Loves You!"
- **Casing**: display headings ALL CAPS (techno face). Doc body is plain sentence case, competent and precise. Fine print is dense legalese parody.
- **Person**: the institution says "operatives", "citizens", "the ␥ \[subject\]". Working docs (dashboards, plans) address "you" directly and plainly.
- **Numbers & receipts**: everything is stamped, sourced, counted. `verified:` lines, mono timestamps ("Data pulled Fri Jul 31 2026, 7:11 AM"), source attributions under every claim. Honesty is a brand feature: "INCONCLUSIVE is not PASS."
- **Emoji**: never. Mono glyphs, counts, and band names do the work.
- **The joke rule**: structure is always real and rigorous; only the framing is dystopian. "Objectives Assigned: 3 · Objectives Completed: 4 · Variance: Documented".

## VISUAL FOUNDATIONS

- **Color**: two worlds. (1) Paper world: white/#FAF9F6, navy #16305F headings, GRAY #53565A secondary, silver hairlines, one gold #F0B82D glint per page. (2) Retro/ops world: charcoal #363E4A or near-black #0F1115 with cream #F2ECD9 and the stripe set. PRISM spectrum (infrared→ultraviolet, canonical hex in `tokens/colors.css`) is a *semantic* system — bands mean clearance/competency, never decoration. Max 1–2 background colors per artifact.
- **Type**: techno display (brand face ≈ Zekton class; **Michroma substituted**, ALL CAPS only, never body) + Titillium Web for everything else + JetBrains Mono for stamps/sources/ids. PRISM house docs additionally use Source Serif 4 / Source Sans 3.
- **Backgrounds**: flat solids. No gradients except the PRISM rail (thin 8px bar) and the heptagram gradient mark. Diagonal retro stripes (\~65–70°) with cream gaps are the signature banner motif.
- **Borders & structure**: 1px hairlines carry all structure (tables, rows, section rules). Left-edge 4–5px color spines mark move-cards and alarms. Radii 6–12px, small.
- **Shadows**: near-none. Flat panels + hairlines; `--shadow-card` is a whisper, `--shadow-pop` for dialogs only.
- **Motion**: restrained. 120–220ms opacity/transform fades, `--ease-brand`. No bounces. Dashboards: none.
- **Hover**: row wash to `--surface-tint`; links navy-shift; buttons darken one step.
- **Press**: darken further; no shrink.
- **Imagery**: none photographic. Brand marks, flowchart iconography, stripes. Screens are typographic.
- **Transparency/blur**: not used. Washes are 10% color tints (`--ops-urgent-wash`).
- **Cards**: white on `--surface-tint` page (or `--ops-panel` on dark), 1px hairline, radius 9–12px, generous 17–22px padding.
- **PRISM semantics**: warm bands (IR→YELLOW) are *makers*, graded on Bloom's cognitive lens; GREEN is the ship-it pivot (job-ready); cool bands (BLUE→UV) are *orchestrators*, graded on scope of ownership. INFRARED and ULTRAVIOLET render dashed — "the invisible ends." Each band banks evidence into "Module Zero +" chips.
- **The eye motif**: the AF eye-in-triangle mark watches from headers/footers. Heptagram (7-point star) is the secondary sigil — page numbers sit inside it in reports.

## ICONOGRAPHY

- No icon font and no SVG icon set exist in the sources. Iconography = **brand marks only** (`assets/brand/`): eye-triangle (A-Eye, plus "Definitely Not A Cult!" variant), AL-X flowchart mark, AF lettermark, heptagram (black / gradient / flowchart-nodes variants), plus full lockups (logo+wordmark).
- Status is shown with **8px color dots** (see `StatusDot`), not glyphs. Counts and mono strings replace icons ("held: N (UV)").
- Unicode: interpuncts `·` as separators, `×` (gold, italic) as the collaboration glyph, `→` in doctrine strings. No emoji, ever.
- If a UI genuinely needs utility icons, use Lucide (CDN) at 1.5px stroke to sit with Titillium — **flag any such use**; it is an extension of, not part of, the brand.

## Index

- `styles.css` → imports `tokens/{fonts,colors,typography,spacing,effects}.css`
- `assets/brand/` marks + logos · `assets/banners/` course banners · `assets/posters/` poster PDF
- `guidelines/` specimen cards (Design System tab)
- `components/core/` Button, Badge, Card, Input, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip
- `components/data/` DataTable, StatBar, KPI, StatusDot
- `components/brand/` ClearanceBadge, ClearanceLadder, StripeRail, BrandMark, FinePrint
- `ui_kits/teacherbot/` ops dashboard recreation · `ui_kits/documents/` corporate report
- `slides/` deck layouts (title / section / content / quote)
- `SKILL.md` — agent-facing usage guide

## Intentional additions

No component library existed in sources, so the component set is authored from the surfaces above. Brand-specific components (ClearanceBadge, ClearanceLadder, StripeRail, StatusDot, StatBar, FinePrint) are lifted directly from the estate plan, dashboard, and report screenshots.

## Caveats / substitutions

- **Display font substituted**: true brand face (Zekton/Nulshock-class) not provided → Michroma. Provide .woff2/.ttf to fix.
- Poster PDF page could not be rastered (vector-heavy; parser timeout) — text extracted; PDF copied to `assets/posters/`.
- No favicon/app-icon or photographic assets were provided.
