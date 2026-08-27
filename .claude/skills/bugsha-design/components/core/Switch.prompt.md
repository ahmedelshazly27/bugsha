Binary setting toggle for the settings list — notifications, marketing opt-in, partner auto-relist.

```jsx
<Switch checked={notif} onChange={setNotif} label="Notifications" />
```

Always pass `label` (localised) — the control is icon-free, so it is the only accessible name. Track is `--color-brand-primary` when on, `--color-border-default` when off.
