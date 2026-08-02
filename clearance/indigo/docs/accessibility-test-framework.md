# Accessibility test framework

**Classification:** INDIGO — project scope, risk, evidence, and acceptance  
**Stamp:** `[ teacherbot@indigo ]`  
**Status:** Framework only. No audit has run.  
**Source:** `ACCESSIBILITY_BASELINE_ASSESSMENT.md` and its reader-seat ASSAY, 2026-08-01

## Purpose

Define the evidence required to measure portal accessibility. Do not claim a baseline or compliance before a recorded test run.

## Run record

Each run must record:

- Run identifier and date.
- Commit or filesystem revision.
- Generated page manifest and page count.
- Included and excluded paths with reasons.
- Operating systems, browsers, devices, and viewport sizes.
- Automated tools and exact versions.
- Assistive technologies and exact versions.
- Tester names or assigned seats.
- Test results, evidence paths, and known limits.

The page count comes from the run manifest. Do not copy a fixed count into later reports.

## Configured standards

The execution contract must name its accessibility targets before testing. Possible targets include WCAG and Section 508 requirements.

This framework does not select a current standard, certify compliance, or replace legal or accessibility-specialist review.

## Test layers

### 1. Document structure

- Validate HTML and report duplicate identifiers or invalid nesting.
- Confirm one descriptive page title and one primary heading.
- Confirm the document language.
- Check heading, list, table, landmark, and form semantics.
- Confirm source order remains meaningful without presentation CSS.

### 2. Text and non-text content

- Check informative images for useful alternatives.
- Check decorative images for empty alternatives.
- Give controls accessible names.
- Give charts, diagrams, animations, and ASCII art equivalent descriptions or data.
- Explain required technical language for the declared PRISM audience.

### 3. Color and visual presentation

- Measure text, large-text, control, focus, and graphical-object contrast against the configured standard.
- Record foreground, background, computed ratio, required ratio, and result.
- Confirm color is not the only carrier of clearance, status, error, or action meaning.
- Test zoom, reflow, text spacing, and high-contrast presentation.
- Record society-theme and light-shell results separately.

### 4. Keyboard and focus

- Reach every interactive control with a keyboard.
- Confirm a logical focus order and visible focus indicator.
- Confirm Enter and Space activate applicable controls.
- Confirm Escape closes applicable dialogs and menus.
- Provide an alternative to drag-and-drop and complex pointer gestures.
- Detect keyboard traps and unexpected focus movement.

### 5. Motion and timing

- Measure flashing content against the configured safety limit.
- Confirm decorative motion respects reduced-motion preferences.
- Provide pause, stop, or hide controls when the configured standard requires them.
- Confirm motion does not hide status or change context without notice.

### 6. Forms and input assistance

- Associate every control with its visible label and accessible name.
- Identify required inputs and explain accepted formats.
- Announce validation errors and identify affected controls.
- Provide useful correction guidance.
- Confirm success and failure states without relying on color alone.

### 7. Screen-reader and assistive-technology review

- Review headings, landmarks, links, forms, dialogs, tables, and live status.
- Confirm control role, name, state, value, and instructions.
- Test representative journeys with the assistive technologies named by the run contract.
- Record commands, observed output, barriers, and evidence.

### 8. Browser, device, and responsive review

- Use the browser and device matrix named by the run contract.
- Check representative mobile, tablet, and desktop viewports.
- Record horizontal overflow, clipped controls, hidden content, and touch-target problems.
- Separate browser-specific failures from shared failures.

## Required human review

Automated checks cannot determine whether satire hides instructions, content suits its PRISM audience, or a workflow remains understandable.

A human reviewer must:

- Complete each critical journey without a pointer.
- Review the page at its declared PRISM audience level.
- Confirm structure communicates the same meaning as clearance color.
- Check that institutional voice does not hide status, instructions, evidence, or limits.
- Review zoom, reflow, focus, motion, and assistive-technology output.

## Issue record

Each confirmed issue must include:

```text
issue_id
run_id
page
journey
standard_and_criterion
severity
affected_users
environment
steps_to_reproduce
expected_behavior
actual_behavior
evidence_path
suggested_remediation
owner
status
```

Free text may explain an issue. Evidence and reproduction steps must carry the finding.

## Severity

- **Critical:** blocks a core journey or access to essential content.
- **Major:** creates a substantial barrier or repeated loss of function.
- **Minor:** creates a limited barrier with an available path around it.
- **Observation:** requires human judgment or more evidence before classification.

## Acceptance record

A completed accessibility run must publish:

- The run record and page manifest.
- Machine-readable automated results.
- Human-readable issue summary.
- Manual keyboard and assistive-technology notes.
- Contrast measurements.
- Pass, fail, incomplete, and excluded counts.
- Known limits and untested areas.
- The exact rule used to determine the terminal status.

`INCOMPLETE` is not `PASS`. An empty issue list without a completed manifest and evidence is not a baseline.

## Known limits

- This file contains no test results.
- Automated testing detects only part of the accessibility surface.
- A future contract must select current standards, tools, environments, journeys, and acceptance thresholds.
- Legal compliance and lived accessibility require qualified human review beyond this framework.
