# Lost Media Intake — 2026-08-01

## Status

**Archived for reconstruction. Not linked from the live site.** This intake preserves a batch of recovered old-site material and reference imagery exactly as received (apart from filename normalization where noted below). Treat the contents as source material, not production-ready pages or application code.

## Rebuild queue

- [ ] Assess and rebuild the **Open Loops / The Algorithm Battery** experience from `source/open-loops-the-algorithm-battery.html`.
- [ ] Assess and rebuild the **Ask the Algorithm** terminal/console from `source/ask-the-algorithm-console.html`.
- [ ] Assess and rebuild the **The Algorithm Deployment Manual** from `source/the-algorithm-manual.html`.
- [ ] Assess and place the **M4 learning: The Idea** lesson from `source/m4-learn-01-the-idea.html`.
- [ ] Reconcile and rebuild the **Persona Museum** experiences from `source/persona-museum.html` and `source/persona-museum-live.html`.
- [ ] Evaluate the **Dataman** prototype (`source/dataman_*.py`) and its historical visual references before deciding whether it returns as an interactive feature, a static exhibit, or an inspiration source.
- [ ] Assess and rebuild the **Robot Sandwich** introduction from `source/robot-sandwich-intro.html`.
- [ ] Review `source/PROJECT_INSTRUCTIONS_PROPOSED.md` before any substantial revival work; it may contain useful project framing but is not an active repository instruction file.
- [ ] Compare the orientation reference screenshot to the current welcome/orientation flow before any visual restoration.

## Contents

| Area | Archived material | Reconstruction intent |
| --- | --- | --- |
| Algorithm interfaces | `open-loops-the-algorithm-battery.html`, `ask-the-algorithm-console.html`, `the-algorithm-manual.html` | Restore the related interactive/reading experiences after dependency and accessibility review. |
| Learning and exhibition | `m4-learn-01-the-idea.html`, `persona-museum.html`, `persona-museum-live.html`, `robot-sandwich-intro.html` | Recover the lesson and museum content as coherent routes or exhibits. |
| Dataman | `dataman_ui.py`, `dataman_main.py`, `dataman_logic.py`, `dataman_data.py`; two Dataman photographs | Preserve the prototype and device references together for later adaptation. |
| Project context | `PROJECT_INSTRUCTIONS_PROPOSED.md` | Retain as a historical planning artifact, pending review. |
| Visual reference | `references/citizen-orientation-welcome-operative.png` | Reference only; compare against the current orientation page. |

## File handling

- The `source/` directory holds unmodified file contents from the supplied downloads. Two source names were normalized for portability: `Open loops — the_algorithm battery.html` → `open-loops-the-algorithm-battery.html`; `robot_sandwich_intro.html` → `robot-sandwich-intro.html`.
- The `references/` directory contains the supplied screenshots/photos without editing: the Citizen Orientation screen (2486 × 1408), Dataman packaging (1632 × 1224), and Dataman device (851 × 1200).
- Do not ship these pages directly. First inventory their dependencies, extract reusable content, bring markup and interaction up to the current site baseline, and perform accessibility and responsive checks.

## Intake provenance

Supplied locally on 2026-08-01. The original download and temporary clipboard locations are intentionally not retained in this repository; this directory is the durable project copy.
