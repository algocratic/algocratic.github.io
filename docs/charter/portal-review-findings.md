# Deferred portal review findings

**Pass:** charter iteration 01  
**Reviewed:** 2026-08-01 17:00 EDT  
**Receipt:** `teacherbot@green`  
**Status:** Recorded only. Read and prioritize in a later iteration.

## Review boundary

This pass sampled existing portal pages without changing them. These findings do not expand the frozen charter scope.

Pages sampled:

- `index.html`
- `portal.html`
- `about.html`
- `products.html`
- `new_player_guide.html`
- `onboarding-v2.html`
- `clearance/index.html`
- `underground/index.html`

## Findings for later reading

1. The sampled pages predate the canonical Design System and use several independent visual systems.
2. Several pages use neon terminal colors instead of the canonical PRISM color tokens.
3. Several pages use PRISM-like colors decoratively rather than as capability or ownership semantics.
4. Existing pages use gradients beyond the two Design System exceptions: the PRISM rail and heptagram mark.
5. Existing pages use emoji as interface icons, although the Design System requires brand marks, status dots, or mono glyphs.
6. `about.html` links to `INDEX.HTM` and `website/clearance/`; neither target matches the repository layout.
7. `products.html` links to `careers.html`, which is absent from the repository root.
8. `clearance/index.html` contains `/website/...` paths that do not match disk-viewable repository paths.
9. `underground/index.html` identifies itself as a 404 page while also acting as underground navigation.
10. Several pages depend on remote Google Fonts; direct disk review therefore needs usable local fallback fonts.
11. Existing pages mix inline CSS, shared legacy CSS, and page-specific tokens.
12. The root `the-prism.html` is the modern canonical presentation; the prior root source is preserved byte-identically at `underground/PRISM.html`, and the byte-identical Design System upload remains removed.

## Deferred decisions

- Select the first existing portal pages for Design System conversion.
- Decide whether legacy terminal styling remains as a named surface or becomes archive material.
- Define a canonical navigation model before repairing individual links.
- Decide which interactive jokes remain functional requirements.
- Read these findings before assigning remediation.

No finding above was assayed or remediated during this pass.

## Sources, assumptions, and known limits

- Sources: the eight sampled portal files, the canonical PRISM upload, and the Algocratic Futures Design System.
- Assumption: source inspection is sufficient to record structural and design-system conflicts for later review.
- Known limit: this pass did not perform browser interaction, accessibility testing, or remediation on legacy pages.
- Known limit: automated browser control rejected local `file://` access during charter validation.
