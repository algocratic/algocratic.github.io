Dashboard bar row (name / mono figure / thin segmented bar / note). `dark` for ops surfaces.

```jsx
<StatBar dark name="claude-code sessions" fig="138.3k tokens · 61%"
  segments={[{pct:61,color:"var(--ops-series-1)"},{pct:17,color:"var(--ops-series-2)"}]}
  note="Two series max per bar." />
```
