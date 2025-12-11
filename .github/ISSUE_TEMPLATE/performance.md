---
name: Performance Issue
about: Report performance problems, optimization opportunities, or speed issues
title: "[PERF] Brief description of performance issue"
labels: ["performance", "optimization", "needs-triage"]
assignees: ""
---

## Performance Issue Classification
**Severity:** [CRITICAL/MAJOR/MINOR]
**Priority:** [P0/P1/P2/P3]  
**Category:** [Loading/Runtime/Memory/Network/Animation/Rendering]
**Impact Scope:** [Single Page/Multiple Pages/Site-wide]

## Performance Problem Description
**Issue Summary:** [What specific performance issue is occurring]

**User Impact:** [How this affects user experience]

## Performance Metrics
### Current Performance (Before Fix)
**Page Load Time:** [X seconds]
**Time to Interactive (TTI):** [X seconds]
**First Contentful Paint (FCP):** [X seconds]
**Largest Contentful Paint (LCP):** [X seconds]
**Cumulative Layout Shift (CLS):** [X score]
**First Input Delay (FID):** [X milliseconds]

### Lighthouse Scores
**Performance Score:** [0-100]
**Accessibility Score:** [0-100]
**Best Practices Score:** [0-100]
**SEO Score:** [0-100]

## Environment Information
**Device Type:** [Desktop/Mobile/Tablet]
**Device Specs:** [CPU, RAM, Network connection]
**Browser:** [Chrome/Firefox/Safari/Edge + version]
**Operating System:** [Windows/macOS/Linux/iOS/Android]
**Network Conditions:** [WiFi/4G/3G/Slow 3G]

## Steps to Reproduce Performance Issue
1. [Navigate to specific page]
2. [Perform specific actions]
3. [Monitor performance using dev tools]
4. [Document slow behavior]

## Expected Performance Behavior
[What the performance should be according to web standards]

**Target Metrics:**
- **Page Load:** [Target time]
- **Time to Interactive:** [Target time]
- **Memory Usage:** [Target limit]
- **Frame Rate:** [Target FPS for animations]

## Actual Performance Behavior
[What actually happens - describe the performance degradation]

## Evidence Documentation
### Browser Dev Tools Analysis
**Network Tab Issues:**
- [ ] **Large resource files:** [File sizes and load times]
- [ ] **Blocking requests:** [Resources preventing page render]
- [ ] **Failed requests:** [404s, timeouts, etc.]
- [ ] **Unnecessary requests:** [Unused resources being loaded]

**Performance Tab Issues:**  
- [ ] **JavaScript execution time:** [Long-running scripts]
- [ ] **Rendering performance:** [Paint/layout issues]
- [ ] **Memory leaks:** [Growing heap size]
- [ ] **Animation frame drops:** [Non-smooth animations]

**Console Errors:**
```javascript
[Paste any performance-related console errors or warnings]
```

### Resource Analysis
**Large Files Identified:**
- [filename.js] - [X MB] - [Description of what it does]
- [filename.css] - [X MB] - [Critical or non-critical]
- [image.png] - [X MB] - [Optimization opportunity]

**Unused Resources:**
- [ ] **Unused CSS:** [Percentage and files]
- [ ] **Unused JavaScript:** [Percentage and files]
- [ ] **Unused Images:** [Files not displayed]

## Performance Impact Categories
### Loading Performance
- [ ] **Slow initial page load**
- [ ] **Blocking resources prevent rendering**
- [ ] **Large bundle sizes**
- [ ] **Unoptimized images**
- [ ] **Missing compression**

### Runtime Performance
- [ ] **Sluggish interactions**
- [ ] **Slow animations**
- [ ] **UI freezing**
- [ ] **Input lag**
- [ ] **Scroll performance issues**

### Memory Performance  
- [ ] **Memory leaks**
- [ ] **Excessive memory usage**
- [ ] **Garbage collection pauses**
- [ ] **Memory growth over time**

### Network Performance
- [ ] **Too many HTTP requests**
- [ ] **Unoptimized request waterfall**
- [ ] **Missing caching headers**
- [ ] **Inefficient API calls**

## Mobile Performance Impact
**iOS Safari Performance:**
- **Load Time:** [X seconds]
- **Interaction Delay:** [X milliseconds]  
- **Battery Impact:** [High/Medium/Low]
- **Heat Generation:** [Device gets warm/hot]

**Android Chrome Performance:**
- **Load Time:** [X seconds]
- **Interaction Delay:** [X milliseconds]
- **Memory Usage:** [X MB]
- **CPU Usage:** [High/Medium/Low]

## Specific Component Analysis
**Kanban Board Performance:**
- [ ] **Drag and drop lag:** [Milliseconds delay]
- [ ] **Card rendering issues:** [Slow to appear/update]
- [ ] **Column scrolling performance:** [Smooth/Janky]

**Authentication Forms:**
- [ ] **Form submission delay:** [Time to process]
- [ ] **Validation response time:** [Input feedback delay]

**Terminal Animations:**
- [ ] **Frame rate drops:** [Below 60fps]
- [ ] **Animation stuttering:** [Irregular timing]
- [ ] **Background animation impact:** [CPU usage]

## Optimization Opportunities Identified
### JavaScript Optimizations
- [ ] **Code splitting opportunities**
- [ ] **Lazy loading implementation**
- [ ] **Bundle size reduction**
- [ ] **Event listener optimization**
- [ ] **DOM manipulation efficiency**

### CSS Optimizations  
- [ ] **CSS file consolidation**
- [ ] **Unused CSS removal**
- [ ] **Critical CSS inlining**
- [ ] **Animation performance improvements**

### Image Optimizations
- [ ] **Image format conversion** (WebP, AVIF)
- [ ] **Image compression**
- [ ] **Responsive image implementation**
- [ ] **Lazy loading images**

### Network Optimizations
- [ ] **HTTP/2 implementation**
- [ ] **Resource preloading**
- [ ] **Caching strategy improvements**
- [ ] **CDN implementation**

## Proposed Solutions
**Primary Solution:** [Recommended approach to fix performance issue]

**Technical Implementation:**
```javascript
// Example of proposed optimization
[Code example showing improvement]
```

**Alternative Approaches:** [Other solutions considered]

**Performance Impact Estimate:**
- **Load Time Improvement:** [Expected reduction in seconds]
- **Memory Usage Reduction:** [Expected savings]
- **Bundle Size Reduction:** [Expected file size savings]

## Success Metrics for Fix
**Target Performance Improvements:**
- **Page Load Time:** [Current X sec → Target Y sec]
- **Lighthouse Performance Score:** [Current X → Target Y]
- **Memory Usage:** [Current X MB → Target Y MB]
- **User Interaction Response:** [Current X ms → Target Y ms]

## Testing Requirements
**Performance Testing Plan:**
1. **Before/After Metrics Collection**
2. **Multiple Device Testing**
3. **Network Condition Testing**
4. **Load Testing** (if applicable)
5. **Memory Profiling**

**Automated Performance Testing:**
- [ ] **Lighthouse CI integration**
- [ ] **WebPageTest automation**  
- [ ] **Performance budget alerts**

## Cross-Platform Impact
**Desktop Performance:** [Impact across different desktop browsers]
**Mobile Performance:** [Impact on iOS/Android devices]
**Tablet Performance:** [Impact on iPad/Android tablets]

## Business Impact
**User Experience Impact:** [How performance affects user satisfaction]
**Conversion Impact:** [Effect on user task completion]
**SEO Impact:** [Search engine ranking implications]
**Cost Impact:** [Server resources, bandwidth costs]

## Sprint Planning Information
**Estimated Effort:** [Development time required]
**Sprint Assignment:** [Which sprint should address this]
**Dependencies:** [Other work required first]
**Related Issues:** [Links to related performance issues]

## Additional Context
**Performance Monitoring:** [Tools and methods for ongoing monitoring]
**Research References:** [Links to performance best practices]
**Competitive Benchmarks:** [How other sites perform]

## Reporter Information  
**Performance Analyst:** [Name]
**Testing Method:** [Manual/Automated/User Report]
**Date Identified:** [YYYY-MM-DD]

## Algorithm Compliance
**Template Version:** Performance Issue v2.1
**Performance Standard:** Web Core Vitals Compliance v1.1
**Review Protocol:** THE ALGORITHM Performance Optimization Process

---
**Algorithm Reference:** GitHub Issue Standard Template v2.1 - Performance Optimization Protocol