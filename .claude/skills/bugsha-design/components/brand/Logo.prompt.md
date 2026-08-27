The Bugsha identity lockup — the kerchief mark with the wordmark in live type (Archivo 600 / Alexandria for Arabic).

```jsx
<Logo size={28} />                         {/* app header, on violet */}
<Logo lockup="stacked" size={64} tm />     {/* splash, covers */}
<Logo lockup="mark" size={18} />           {/* favicon, partner avatar, tab bar */}
<Logo lang="ar" size={28} />               {/* Arabic wordmark */}
```

On a **white mark over a coloured field**, pass the field colour as `fold` (`<Logo color="#fff" fold="#5B21B6" foldOpacity={1} />`) — the default white fold is invisible on a white mark.

Rules: one colour only — white on violet, or violet on white. Clear space equals the mark's notch width. Minimum 14px mark-only, 24px with wordmark. The notch is a true cut-out, so never place a fill behind it; never recolour mark and wordmark differently; never outline.
