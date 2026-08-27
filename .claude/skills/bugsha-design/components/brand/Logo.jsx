import React from "react";
/** The Bugsha lockup: the kerchief mark (a square of cloth, one corner turned back) plus the
 *  wordmark in live type. One colour only — white on violet, or violet/ink on white. The turned-down
 *  corner is a lighter plane (white at 42%), never a cut-out, so the mark never shows a hole. */
export function Logo({ lockup = "horizontal", lang = "en", size = 32, color = "currentColor",
  fold = "#FFFFFF", foldOpacity = 0.42, tm = false, style, ...rest }) {
  const ar = lang === "ar";
  const word = ar ? "بقشة" : "Bugsha";
  const mark = (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true"
      style={{ display: "block", flex: "none", color }}
      dangerouslySetInnerHTML={{ __html:
        '<path fill="currentColor" d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"/><path fill="' + fold + '" fill-opacity="' + foldOpacity + '" d="M12.5 14h23L24 25.5 12.5 14Z"/>' }} />
  );
  if (lockup === "mark") return <span role="img" aria-label={word} style={style} {...rest}>{mark}</span>;
  const stacked = lockup === "stacked";
  return (
    <span role="img" aria-label={word} style={{ display: "inline-flex", flexDirection: stacked ? "column" : "row",
      alignItems: "center", gap: stacked ? size * 0.3 : size * 0.4, color, ...style }} {...rest}>
      {mark}
      <span style={{ position: "relative", fontFamily: ar ? "var(--font-arabic-display)" : "var(--font-display)",
        fontWeight: 600, fontSize: size * (ar ? 1.1 : 1.24), lineHeight: 1,
        letterSpacing: ar ? "0" : "-0.03em" }}>{word}{tm && <span style={{ position: "absolute",
        top: "0.04em", marginInlineStart: "0.06em", fontSize: "0.26em", fontWeight: 500 }}>™</span>}</span>
    </span>
  );
}
