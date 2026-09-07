# One frame, many eras — consolidating the AlgoCratic site

## Context

The site now runs entirely on design system v0.2: one token layer, no gradients,
keyframes, shadows or stray hex in any shared stylesheet. That work is done and
merged (#17, #18).

What it exposed is that the *stylesheets* were the visible part of the problem. The
page-level inline styles hold roughly ten times more doctrine violation than the
shared sheets ever did, a quarter of the pages never reach the token layer at all,
and the system header — the thing that tells a reader where they are — is missing
from more pages than it appears on.

The goal is **consolidate and fix errors**, explicitly not "modernize". Modernizing
is incoherent here: v0.2 is organized by *eras*, and asks every artifact "what year
does this document think it is?" Picking a newer year is what the strata already do.

### The organizing idea

**The frame is Media/2026 and never changes. The content within it declares its own
era. The header is the seam where they meet.**

Rule 4 says strata are "never mixed within one artifact except deliberately, at the
cracks." The header *is* the crack — the one sanctioned overlap. A 2026 corporate
system displaying archived 198X terminal material or 1968 underground press is
exactly what a corporate archive viewer does, so "SYSTEM BEING ACCESSED" stops being
decoration and becomes literally true.

This resolves the consistency problem and the underground problem at once: the
underground is reached *through* the modern frame, as legacy access.

## Findings

Measured across the 87 in-scope pages (root, `clearance/`, `underground/`).

**The header is absent more often than present.**

| area | `chrome.js` | hand-rolled | none |
|---|---|---|---|
| root (17) | 13 | 4 | 0 |
| clearance (48) | 7 — index pages only | 1 | **40** |
| underground (22) | 0 | 8 | **14** |

The 40 clearance sub-pages are the ones students actually read, and they are dead
ends: no indication of where you are, no route home.

**Other measurements**

- **23 pages reach no shared stylesheet at all** — `about.html` and 22 under
  `underground/`. Not drifted from the system; never on it.
- **29 pages carry 5,231 lines of inline `<style>`**, containing **38 gradients,
  124 shadows, 42 keyframes, 168 `rgba()` and 773 hex values**.
- **0 of 87 declare a stratum.** Rule 4 is universally unobserved on the live site.
- **`data-clearance` carries two different meanings**, told apart only by casing:
  50 pages use it for a clearance level (`"yellow"`), 21 for a society and function
  (`"FUZZIES · YELLOW"`). Nothing can reliably read it.
- 10 of 87 have a skip link.

## Design

### 1. The frame

`static/chrome.js` already solves the hard parts — it inserts synchronously so there
is no layout shift, derives the site root from its own `src` so any depth works, and
writes every value through `textContent`. It is the right foundation; it just is not
on enough pages.

Extend it to render the frame in three parts and put it on all 87:

```
◭ ALGOCRATIC FUTURES™                              [FUZZIES ›]
GREEN CLEARANCE GUIDE
ARCHIVE VIEW · TERMINAL/198X
```

- **Brand** — home link. Unchanged.
- **System name** — what you are looking at. Unchanged.
- **Stratum line** — new. The frame naming the era of the material it is displaying.
  This is the crack, made explicit, and it satisfies Rule 4's declaration requirement
  without adding a metadata line to the document body.
- **Society chip** — becomes a link into `underground/societies/<name>.html`.

Two things leave the top of the page:

- The `SYSTEM BEING ACCESSED` label — the stratum line now says this better.
- The `teacherbot@green · function` receipt — moves to the provenance footer, the
  pattern already established in `static/entry.css` (`.entry-receipt`).

Net: four lines at the top become two, and both do work.

### 2. Split the conflated attribute

- `data-clearance` — the clearance level only (`yellow`, `infrared`, …)
- `data-society` — the society (`fuzzies`, `bancho`, `phreaks`, `memory-core`,
  `deep-algorithm`), which drives both the chip and its link
- `data-stratum` — `terminal/198x`, `media/2026`, `pelican/196x`, `comix/1968`
- `data-function` — unchanged; feeds the footer receipt

`chrome.js` renders the chip only when `data-society` is present, so pages that have
a clearance level but no society owner do not get a dead chip.

### 3. Stratum assignment

| stratum | pages |
|---|---|
| Terminal/198X | entry flow + clearance tree (~56) |
| Media/2026 | portal, kanban, metrics, products (4) |
| Pelican/196X | the-prism, orientation packet (2) |
| Comix/1968 | underground (22) |

`the-algorithm.html` keeps its green palette as a documented page-scoped variant of
Terminal, consistent with how its hero glow was already handled — an exception that
is legible rather than an oversight that looks like one.

### 4. Drain the inline styles

`static/entry.css` proved the pattern: 606 lines of shared components replaced
roughly 1,900 lines of per-page CSS across six pages, and the components take their
colour from `--band` so they work at any clearance.

Apply the same move per stratum. Where a rule appears on three or more pages it
becomes a shared component; where it is genuinely one page's own, it stays inline but
tokenised. The 773 hex values go here.

Do **not** rewrite markup that carries working interactive behaviour — `kanban.html`
(727 lines of inline style, a working board), `onboarding-v2.html` (four-phase flow),
`portal.html` (session dashboard). Those get doctrine cleanup in place, the treatment
already used on them once.

### 5. Rescue the orphans

The 23 orphans get `shell.css` plus their stratum layer. Five of them —
the society pages — become the destinations the new header chip links to, which is
what connects the underground to the live site rather than leaving it a separate
site that happens to share a domain.

### 6. Enforcement

A check script, run in CI and available locally, that fails on:

- any gradient, `@keyframes`, shadow, `rgba()` or raw hex in live CSS **or** in a
  page's inline `<style>`, outside a declared palette block or a rule carrying an
  approved-exception comment
- any page in scope without `data-stratum`
- any page in scope without the shared chrome
- any `data-clearance` value that is not a bare clearance level

Doctrine has now drifted back twice in this repo within a single session's history.
Consolidation without a check resets the clock rather than stopping it.

## Files

| file | change |
|---|---|
| `static/chrome.js` | three-part frame, society chip link, stratum line, receipt to footer |
| `static/shell.css` | header restyle; stratum-line and chip styles |
| `static/entry.css` | promote reusable pieces; provenance footer already lives here |
| new `static/strata/*.css` | one component layer per stratum |
| 87 pages | chrome tag with the four data attributes; inline styles drained |
| new `tools/check-doctrine.mjs` | the enforcement check |
| `docs/charter/portal-function-classification.md` | becomes the source of the society map |

## Sequencing

Each stage is independently shippable and independently revertible.

1. **Frame first** — `chrome.js` and the attribute split, on the 20 pages that already
   carry it. Nothing else can be verified until the frame is right.
2. **Coverage** — the frame onto the 40 clearance sub-pages. Biggest single
   navigation win; turns dead ends into pages that know where they are.
3. **Orphans** — `shell.css` and the frame onto the 23, society pages first.
4. **Stratum layers** — drain the inline styles, one stratum at a time.
5. **Enforcement** — the check script, once the tree is clean enough to pass it.

## Verification

Serve over HTTP on a fresh port each time — `file://` breaks relative paths and
renders pages unstyled, and browsers cache `@import`ed CSS hard.

1. **Frame present and correct on all 87.** Crawl the tree, assert every page renders
   one `.af-system-header`, that its stratum line matches the page's `data-stratum`,
   and that the society chip's href resolves to a file that exists.
2. **No dead ends.** Every clearance sub-page has a working route home.
3. **Doctrine.** The check script from stage 5 passes on the whole tree.
4. **No regressions from draining inline styles.** The A/B method that verified the
   `styles.css` prune: render each page against the old and new CSS and diff computed
   styles on every element. Anything that changes should be explainable.
5. **No horizontal overflow** on any page — the trap that caught `index.html` when its
   inline `box-sizing` reset went away.
6. **The interactive pages still work** — kanban board, onboarding four-phase flow,
   portal session, compliance gate, register/login round-trip.

## Out of scope

- `preview/` (5) and `docs/charter/` (6) — different audiences, own stylesheets.
  `preview/`'s go/no-go job is finished and it is a deletion candidate, but that is a
  separate decision.
- Any change to the v0.2 token values themselves. Rule 0 stands: produced artifacts
  outrank speculation.
- The reuse items still undrained from `codex/restyle-public-entry-flow`.
