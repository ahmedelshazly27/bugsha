import React from "react";

const cache = new Map();
const pending = new Map();
function loadGlyph(name){
  if (cache.has(name)) return Promise.resolve(cache.get(name));
  if (!pending.has(name)) pending.set(name, fetch(assetBase() + "assets/icons/" + name + ".svg")
    .then(r => r.ok ? r.text() : "")
    .then(t => { const inner = t.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, ""); cache.set(name, inner); return inner; })
    .catch(() => ""));
  return pending.get(name);
}
function assetBase(){
  const s=[...document.querySelectorAll('script[src]')].map(x=>x.getAttribute('src')).find(x=>x&&x.includes('_ds_bundle.js'));
  return s ? s.replace(/_ds_bundle\.js.*$/,'') : '/';
}
/** Lucide glyph, inlined so it inherits currentColor and the variant stroke width. */
export function Icon({ name, size = 20, strokeWidth, mirror = false, title, style, ...rest }) {
  const [svg, setSvg] = React.useState(cache.get(name) || null);
  React.useEffect(() => {
    let live = true;
    loadGlyph(name).then(v => { if (live) setSvg(v); });
    return () => { live = false; };
  }, [name]);
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeLinecap="round" strokeLinejoin="round"
      role={title ? "img" : "presentation"} aria-label={title} aria-hidden={title ? undefined : true}
      className={mirror ? "ds-icon-directional" : "ds-icon-no-mirror"}
      style={{ display: "block", flex: "none", strokeWidth: strokeWidth ?? "var(--icon-stroke,2)", ...style }}
      dangerouslySetInnerHTML={{ __html: svg || "" }} {...rest} />
  );
}
