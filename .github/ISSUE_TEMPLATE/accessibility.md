---
name: Accessibility Issue
about: Report accessibility barriers or WCAG compliance violations
title: "[A11Y] Brief description of accessibility issue"  
labels: ["accessibility", "a11y", "wcag", "needs-triage"]
assignees: ""
---

## Accessibility Issue Classification
**WCAG 2.1 Level:** [A/AA/AAA violation]
**WCAG Principle:** [Perceivable/Operable/Understandable/Robust]
**Success Criterion:** [e.g., 2.1.1, 2.4.3, 4.1.2]
**Severity:** [CRITICAL/MAJOR/MINOR]
**Priority:** [P0/P1/P2/P3]

## Affected User Groups
- [ ] **Screen reader users (NVDA, JAWS, VoiceOver, TalkBack)**
- [ ] **Keyboard-only navigation users**
- [ ] **Voice control users**
- [ ] **Switch navigation users**
- [ ] **Low vision users**
- [ ] **Color blind users**  
- [ ] **Users with cognitive disabilities**
- [ ] **Users with motor disabilities**
- [ ] **Users with hearing disabilities**

## Accessibility Barrier Description
**Issue Summary:** [What accessibility barrier exists]

**User Impact:** [How this prevents or impairs access for disabled users]

## Location Information
**Page/Component:** [Specific URL or component affected]
**Element Type:** [Button, link, form, image, etc.]
**CSS Selector:** [If known - helps developers locate the issue]

## WCAG Success Criterion Details
**Criterion Number:** [e.g., 2.4.1]
**Criterion Name:** [e.g., "Bypass Blocks"]
**Level:** [A/AA/AAA]
**Current Compliance:** [Pass/Fail]

## Assistive Technology Impact
### Screen Reader Testing
**NVDA (Windows):**
- [ ] **Tested** - [Pass/Fail] - [Details of interaction]

**JAWS (Windows):**  
- [ ] **Tested** - [Pass/Fail] - [Details of interaction]

**VoiceOver (macOS/iOS):**
- [ ] **Tested** - [Pass/Fail] - [Details of interaction]

**TalkBack (Android):**
- [ ] **Tested** - [Pass/Fail] - [Details of interaction]

### Keyboard Navigation Testing
- [ ] **Tab navigation:** [Pass/Fail] - [Details]
- [ ] **Arrow key navigation:** [Pass/Fail] - [Details] 
- [ ] **Enter/Space activation:** [Pass/Fail] - [Details]
- [ ] **Escape key functionality:** [Pass/Fail] - [Details]
- [ ] **Focus management:** [Pass/Fail] - [Details]

### Other Assistive Technology
**Voice Control (Dragon, Voice Control):**
- [ ] **Tested** - [Pass/Fail] - [Details]

**Switch Navigation:**
- [ ] **Tested** - [Pass/Fail] - [Details]

## Steps to Reproduce
**With Assistive Technology:**
1. [Launch specific assistive technology]
2. [Navigate to specific page]  
3. [Attempt specific interaction]
4. [Observe accessibility barrier]

**With Keyboard Only:**
1. [Start keyboard navigation]
2. [Use specific key combinations]
3. [Attempt to reach/activate element]
4. [Document failure point]

## Expected Accessible Behavior
[What should happen for users with disabilities according to WCAG guidelines]

## Actual Barrier Behavior  
[What actually happens that creates the accessibility barrier]

## Visual Evidence
**Screenshots:** [Visual documentation of the issue]
**Screen Reader Output:** [Text announced by screen readers]
**Keyboard Focus Screenshots:** [Show focus indicator problems]

## Technical Analysis
**HTML Issues:**
```html
<!-- Current problematic code -->
[Paste relevant HTML that has accessibility issues]
```

**Missing Attributes:**
- [ ] **alt text** missing on images
- [ ] **aria-label** missing on controls  
- [ ] **aria-describedby** missing for descriptions
- [ ] **role** attribute needed
- [ ] **aria-expanded** missing on collapsible elements
- [ ] **aria-live** missing for dynamic content

**Semantic Issues:**
- [ ] **Non-semantic HTML** (divs instead of buttons)
- [ ] **Improper heading hierarchy**
- [ ] **Missing form labels**
- [ ] **Insufficient color contrast**
- [ ] **Keyboard traps**

## Automated Testing Results
**axe-core Results:**
```
[Paste axe-core accessibility scan results]
```

**WAVE Tool Results:**
```
[Paste WAVE tool findings]
```

**Lighthouse Accessibility Score:** [Score/100]

## Manual Testing Details
**Test Environment:**
- **Operating System:** [Windows/macOS/Linux]
- **Browser:** [Chrome/Firefox/Safari/Edge + version]
- **Screen Reader:** [NVDA/JAWS/VoiceOver + version]
- **Testing Date:** [YYYY-MM-DD]

## Color Contrast Analysis
**Text Color:** [Hex code]
**Background Color:** [Hex code]  
**Contrast Ratio:** [Measured ratio]
**WCAG Requirement:** [4.5:1 for normal text, 3:1 for large text]
**Compliance Status:** [Pass/Fail]

## Proposed Remediation
**Technical Solution:** [Specific code changes needed]

**HTML Improvements:**
```html
<!-- Suggested accessible HTML -->
[Provide corrected HTML example]
```

**ARIA Enhancements:**
```html
<!-- Proper ARIA implementation -->
[Show correct ARIA usage]
```

**Alternative Solutions:** [Other approaches to consider]

## Business Impact
**User Base Affected:** [Percentage of users who rely on accessibility]
**Legal Compliance:** [ADA/Section 508/AODA requirements]
**Risk Level:** [Legal risk assessment]

## Testing Verification
**How to verify the fix:**
1. [Specific testing steps with assistive technology]
2. [Automated testing commands to run]
3. [Manual verification checklist]

## Related Accessibility Issues
**Dependent Issues:** [Links to related accessibility problems]
**Blocked Issues:** [What this blocks]
**Pattern Issues:** [If this represents a site-wide pattern]

## Sprint Planning
**Sprint Assignment:** [Which sprint should fix this]
**Estimated Effort:** [Development time estimate]
**Dependencies:** [Other work that must be completed first]

## Compliance Tracking
**WCAG Audit Item:** [Reference to accessibility audit]
**Section 508 Requirement:** [If applicable]
**Legal Requirement:** [Specific legal compliance need]

## Reporter Information
**Accessibility Auditor:** [Name]
**Assistive Technology User:** [If reported by actual user]
**Testing Method:** [Automated/Manual/User feedback]
**Date Reported:** [YYYY-MM-DD]

## Algorithm Compliance
**Template Version:** Accessibility Issue v2.1
**WCAG Reference Standard:** 2.1 Level AA
**Review Protocol:** THE ALGORITHM Accessibility Triage Process

---
**Algorithm Reference:** GitHub Issue Standard Template v2.1 - Accessibility Compliance Protocol