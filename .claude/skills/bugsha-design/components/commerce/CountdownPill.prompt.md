Time-remaining pill whose tone escalates on real clock time only.

```jsx
<CountdownPill minutesLeft={12} />
```

Urgency rules: >60m neutral, 15–60m time tone, <15m urgent tone + 2s pulse. Inventory scarcity never drives the tone.
