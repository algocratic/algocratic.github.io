Modal with scrim, mono kicker, right-aligned actions.

```jsx
<Dialog open={open} kicker="CONTRACT · proposed" title="Freeze and execute?" onClose={close}
  actions={<><Button variant="secondary" onClick={close}>Reopen</Button><Button onClick={freeze}>Freeze</Button></>}>
  Only humans freeze. Ambiguous assent does not open the gate.
</Dialog>
```
