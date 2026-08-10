# Draft PR: Prototype a PRISM clearance-guide return rail

## Status

Proposal only. This PR deliberately documents the return-rail prototype before applying it across the clearance guides.

## Summary

Add a small, consistent PRISM return rail to the existing clearance-guide subterminals. The rail gives learners a reliable way to see where they are, return to the Clearance Atlas, move to an adjacent capability band, and translate the fictional corporate role into the real work the guide develops.

## Why this is needed

The new Clearance Atlas makes the progression visible and gets a learner into a clearance subterminal. Once inside, however, the guides are mostly self-contained corridors: a learner can follow one guide's sequential pages, but cannot easily recover the wider progression, inspect adjacent levels, or understand how the current fictional role connects to a real creator workflow.

That creates three avoidable problems:

1. **Wayfinding disappears at the moment it matters.** The Atlas shows the whole PRISM spectrum, but the guide pages do not retain that map.
2. **The role can eclipse the purpose.** A learner may remember being a RED-clearance contributor without recognizing that the actual purpose is carrying one real feature through issue, branch, review, and merge.
3. **The Underground discoveries become one-way exits.** The higher-horizon links reward curiosity, but learners need an obvious, dependable path back to the public learning map.

The return rail makes the established pedagogical claim operational: clearance is a learning lens, not an access-control system.

## Persona and purpose

The rail must distinguish the in-world persona from the real learning purpose every time it appears.

| In-world persona | Real purpose |
| --- | --- |
| The clearance role, corporate title, and story framing. | The capability, evidence, and next action the learner is developing. |

Example for RED:

> **Persona:** RED-clearance Junior Innovation Contributor  
> **Purpose:** Carry one real feature through issue, branch, review, and merge.

This preserves the fiction as an engaging interface while preventing it from being mistaken for the learning outcome or a claim of real employment.

## Proposed prototype

Place a compact rail near the top of each guide, directly after the guide's existing corporate header. It should not replace any current orientation content or sequential PREVIOUS / NEXT controls.

### Rail contents

1. **Current position**
   - `Clearance Atlas › RED subterminal`
   - A clearly highlighted current band.

2. **PRISM band strip**
   - Small color links for the implemented subterminals: GRAY, INFRARED, RED, ORANGE, YELLOW, GREEN, and BLUE.
   - Current band is visually distinct and announced as the current page.
   - INDIGO, VIOLET, and ULTRAVIOLET remain discovery links to their existing Underground destinations, consistent with the Atlas.

3. **Translation line**
   - `Persona:` the fictional clearance role.
   - `Purpose:` the real capability being practiced.
   - `Evidence:` the artifact, commit trail, review, documentation, demo, or reflection a learner can show.

4. **Return action**
   - A persistent `Back to Clearance Atlas` link.
   - Adjacent `Previous band` and `Next band` links where those live subterminals exist.

5. **Clarity route**
   - A small PRISM link for learners who need the underlying capability model rather than more corporate framing.

### Example: INFRARED

> **Persona:** INFRARED probationary resource unit  
> **Purpose:** Establish a working environment, shared vocabulary, and first evidence of participation.  
> **Evidence:** A working setup, first commits, and a completed guided micro-task.

## How the prototype should be built

### Phase 1: establish the shared component

- Create one shared CSS file for the rail's layout, spectrum colors, current-band state, reduced-motion behavior, and narrow-screen wrapping.
- Use one small, repeated HTML block. This is a static site, so a transparent duplicated fragment is safer than introducing a build system or client-side injection.
- Keep the component semantic: `<nav aria-label="PRISM clearance navigation">`, labeled links, and visible current-page status.
- Avoid JavaScript. Navigation and interpretation should function when scripts are unavailable.

### Phase 2: prove it in the primary learning path

Prototype the rail on the INFRARED, RED, ORANGE, and YELLOW guide landing pages first. These are the clearest, sequential learning paths and provide the best test of whether the rail supports orientation without interrupting the existing guide flow.

### Phase 3: extend deliberately

- Add the rail to GRAY, GREEN, and BLUE after checking their more distinct legacy layouts.
- Add the same Atlas-return convention to any Underground discovery destination only where it clarifies the learner journey; do not turn the Underground into ordinary corporate navigation.
- Preserve the current Atlas as the single source of truth for horizon labels and discovery destinations.

## Non-goals

- No authentication, clearance enforcement, hidden information, or simulated access denial.
- No rewrite of the individual guide content in this prototype.
- No removal of existing PREVIOUS / NEXT lesson controls.
- No conversion of every Underground page into a public portal page.
- No claim that a fictional corporate role is a real internship or employment status.

## Acceptance criteria

- A learner can return from every prototyped guide to `clearance/index.html` in one action.
- A learner can identify the current capability band without relying on color alone.
- Every prototype includes a separate Persona and Purpose statement.
- Every prototype identifies at least one concrete form of evidence the learner can create or show.
- Existing guide links and sequential controls continue to work.
- The rail remains legible and usable on a narrow screen and with keyboard navigation.
- The rail provides access to public material without implying it is gated by clearance.

## Validation plan

1. Check every rail link and its corresponding Atlas destination.
2. Check keyboard focus order, current-page labeling, and readable contrast for all band colors.
3. Check the narrow-screen layout at the existing responsive breakpoint.
4. Walk the intended journey: Atlas → INFRARED guide → lesson page → Atlas → adjacent live band.
5. Confirm the Persona/Purpose copy never implies real employment or hides the practical learning outcome.

## User and developer impact

Learners gain orientation and a reliable recovery path without losing the corporate-fiction texture. Instructors and maintainers gain one reusable navigation pattern instead of repeatedly inventing local escape routes. Content creators gain clearer language for explaining what a fictional assignment developed in their real body of work.

## Suggested commit message

`docs: propose PRISM clearance-guide return rail`
