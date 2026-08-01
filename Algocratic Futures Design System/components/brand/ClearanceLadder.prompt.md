PRISM band ladder, canonical anatomy (`the-prism.html`). Rungs top-down UV→IR; gold spine on hover; `edge` (dashed) for INFRARED/ULTRAVIOLET; insert `<LadderHinge/>` between BLUE and GREEN.

```jsx
<ClearanceLadder rungs={[
  {band:"BLUE", role:"team lead / Scrum master", does:"Owns a team's process & delivery", chips:["facilitation notes","retro outcomes"]},
]} />
<LadderHinge/>
<ClearanceLadder rungs={[
  {band:"GREEN", role:"shipping engineer", does:<b>Owns a deployed product, end-to-end</b>, chips:["deployed product","CI/CD + runbook"]},
  {band:"INFRARED", role:"new intern", does:"Owns a guided micro-task", chips:["working setup","first commits"], edge:true},
]} />
```

Estate-plan variant: pass `banks` instead of `chips` for the right evidence column.
