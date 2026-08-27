A settings / account list row — leading icon, label, trailing value or inline control.

```jsx
<Card style={{ overflow: "hidden" }}>
  <ListRow icon="languages" label="Language" value={<SegmentedControl … />} />
  <ListRow icon="credit-card" label="Payment methods" value="KNET" chevron />
</Card>
```

Rows carry their own bottom hairline, so stack them inside a `Card` with `overflow:hidden`. The chevron mirrors in RTL; the leading icon does not.
