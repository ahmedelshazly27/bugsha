/* @ds-bundle: {"format":4,"namespace":"SurplusKWDesignSystem_97ec90","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"BagCard","sourcePath":"components/commerce/BagCard.jsx"},{"name":"CountdownPill","sourcePath":"components/commerce/CountdownPill.jsx"},{"name":"CoverPlate","sourcePath":"components/commerce/CoverPlate.jsx"},{"name":"ImpactStat","sourcePath":"components/commerce/ImpactStat.jsx"},{"name":"MapPin","sourcePath":"components/commerce/MapPin.jsx"},{"name":"PaymentMethodRow","sourcePath":"components/commerce/PaymentMethodRow.jsx"},{"name":"PickupWindow","sourcePath":"components/commerce/PickupWindow.jsx"},{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"RedemptionCode","sourcePath":"components/commerce/RedemptionCode.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Banner","sourcePath":"components/core/Banner.jsx"},{"name":"BottomSheet","sourcePath":"components/core/BottomSheet.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/core/EmptyState.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ListRow","sourcePath":"components/core/ListRow.jsx"},{"name":"RatingStars","sourcePath":"components/core/RatingStars.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Stepper","sourcePath":"components/core/Stepper.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"TabBar","sourcePath":"components/core/TabBar.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"LedgerRow","sourcePath":"components/partner/LedgerRow.jsx"},{"name":"ListingStep","sourcePath":"components/partner/ListingStep.jsx"},{"name":"OrderRow","sourcePath":"components/partner/OrderRow.jsx"},{"name":"PartnerStat","sourcePath":"components/partner/PartnerStat.jsx"},{"name":"PayoutCard","sourcePath":"components/partner/PayoutCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"8cc5582d0b05","components/commerce/BagCard.jsx":"09a20cd7d50b","components/commerce/CountdownPill.jsx":"ffb6226a1d91","components/commerce/CoverPlate.jsx":"4af618b4ca3d","components/commerce/ImpactStat.jsx":"487fa6b1cf85","components/commerce/MapPin.jsx":"55078325cbe4","components/commerce/PaymentMethodRow.jsx":"d728327752d4","components/commerce/PickupWindow.jsx":"b9c340a6be35","components/commerce/PriceTag.jsx":"c2a93eb16fed","components/commerce/RedemptionCode.jsx":"c7d90c7e99b4","components/core/Badge.jsx":"6807765e87a2","components/core/Banner.jsx":"dd53ccdba750","components/core/BottomSheet.jsx":"3a9ae275f245","components/core/Button.jsx":"81f4e033bf99","components/core/Card.jsx":"ff4bac928954","components/core/Chip.jsx":"ccb464fd9065","components/core/Dialog.jsx":"d02d290a769c","components/core/EmptyState.jsx":"c1da661ecc0d","components/core/Icon.jsx":"e7bac3dc3d85","components/core/IconButton.jsx":"7786acb71e59","components/core/Input.jsx":"ba12db92db82","components/core/ListRow.jsx":"888dee9e50d9","components/core/RatingStars.jsx":"3755aed6f29f","components/core/SegmentedControl.jsx":"2cc7fb8df7ec","components/core/Skeleton.jsx":"da21f8674c2f","components/core/Stepper.jsx":"3b0564af0745","components/core/Switch.jsx":"28e833677d1d","components/core/TabBar.jsx":"d0dc4ab85f9b","components/core/Toast.jsx":"3748af230b66","components/partner/LedgerRow.jsx":"f0bc50ee8119","components/partner/ListingStep.jsx":"849c78fa0395","components/partner/OrderRow.jsx":"ab83e0a609f8","components/partner/PartnerStat.jsx":"34051a8574d2","components/partner/PayoutCard.jsx":"fb00f2598f02","ui_kits/bugsha/data.jsx":"5a67f148da41","ui_kits/bugsha/kit.jsx":"16122e9a360a","ui_kits/bugsha/screens.jsx":"b5e7c85440c2","ui_kits/cold-chain/kit.jsx":"01173c3f8cca","ui_kits/marketing/app.jsx":"150e14a5ce93","ui_kits/marketing/home.jsx":"934208cd5a08","ui_kits/marketing/pages.jsx":"5f9716c236d3","ui_kits/marketing/site-ui.jsx":"e5319ed4a7eb","ui_kits/partner/data.jsx":"1d51d6bc3e8f","ui_kits/partner/kit.jsx":"b2be2ffb1196","ui_kits/partner/screens.jsx":"adcdaa2efd3e","ui_kits/ticket/kit.jsx":"bbb085b9bbc6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SurplusKWDesignSystem_97ec90 = window.SurplusKWDesignSystem_97ec90 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The Bugsha lockup: the kerchief mark (a square of cloth, one corner turned back) plus the
 *  wordmark in live type. One colour only — white on violet, or violet/ink on white. The turned-down
 *  corner is a lighter plane (white at 42%), never a cut-out, so the mark never shows a hole. */
function Logo({
  lockup = "horizontal",
  lang = "en",
  size = 32,
  color = "currentColor",
  fold = "#FFFFFF",
  foldOpacity = 0.42,
  tm = false,
  style,
  ...rest
}) {
  const ar = lang === "ar";
  const word = ar ? "بقشة" : "Bugsha";
  const mark = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none",
      color
    },
    dangerouslySetInnerHTML: {
      __html: '<path fill="currentColor" d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"/><path fill="' + fold + '" fill-opacity="' + foldOpacity + '" d="M12.5 14h23L24 25.5 12.5 14Z"/>'
    }
  });
  if (lockup === "mark") return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": word,
    style: style
  }, rest), mark);
  const stacked = lockup === "stacked";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": word,
    style: {
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      alignItems: "center",
      gap: stacked ? size * 0.3 : size * 0.4,
      color,
      ...style
    }
  }, rest), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: ar ? "var(--font-arabic-display)" : "var(--font-display)",
      fontWeight: 600,
      fontSize: size * (ar ? 1.1 : 1.24),
      lineHeight: 1,
      letterSpacing: ar ? "0" : "-0.03em"
    }
  }, word, tm && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "0.04em",
      marginInlineStart: "0.06em",
      fontSize: "0.26em",
      fontWeight: 500
    }
  }, "\u2122")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/commerce/MapPin.jsx
try { (() => {
/** Price-bubble map marker. Selected pin inverts; sold-out pins stay visible but muted (honesty over FOMO). */
function MapPin({
  price,
  currency = "KD",
  decimals,
  selected,
  soldOut,
  style
}) {
  const dp = decimals ?? (currency === "KD" ? 3 : 2);
  return /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      display: "inline-block",
      padding: "6px var(--space-150)",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--weight-bold)",
      background: soldOut ? "var(--color-surface-sunken)" : selected ? "var(--color-surface-inverse)" : "var(--color-surface-raised)",
      color: soldOut ? "var(--color-text-tertiary)" : selected ? "var(--color-text-inverse)" : "var(--color-text-primary)",
      border: "var(--border-regular) solid " + (selected ? "var(--color-border-strong)" : "var(--color-border-default)"),
      boxShadow: "var(--elevation-2)",
      textDecoration: soldOut ? "line-through" : "none",
      ...style
    }
  }, currency + " " + Number(price).toFixed(dp));
}
Object.assign(__ds_scope, { MapPin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/MapPin.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceTag.jsx
try { (() => {
/** Deal price with struck original. KD always shows three decimals — the fils are the proof. */
function PriceTag({
  now,
  was,
  currency = "KD",
  decimals,
  size = "md",
  showPercent = true,
  style
}) {
  const dp = decimals ?? (currency === "KD" ? 3 : 2);
  const fmt = n => currency + " " + Number(n).toFixed(dp);
  const pct = was ? Math.round((1 - now / was) * 100) : null;
  const big = size === "lg";
  return /*#__PURE__*/React.createElement("span", {
    dir: "ltr",
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      gap: "var(--space-100)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: big ? "var(--text-numeric-xl-size)" : "var(--text-title-size)",
      lineHeight: 1,
      fontWeight: "var(--weight-bold)",
      whiteSpace: "nowrap",
      color: "var(--color-text-primary)"
    }
  }, fmt(now)), was != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-label-size)",
      color: "var(--color-text-tertiary)",
      textDecoration: "line-through"
    }
  }, fmt(was)), showPercent && pct != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-caption-size)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--color-deal)"
    }
  }, "\u2212", pct, "%"));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ["var(--color-surface-sunken)", "var(--color-text-secondary)"],
  fresh: ["var(--color-fresh-tint)", "var(--color-fresh)"],
  time: ["var(--color-time-tint)", "var(--color-time)"],
  urgent: ["var(--color-time-urgent-tint)", "var(--color-time-urgent)"],
  deal: ["var(--color-deal)", "var(--color-deal-on)"],
  info: ["var(--color-info-tint)", "var(--color-info)"],
  error: ["var(--color-error-tint)", "var(--color-error)"]
};
/** Small status label. Tone carries meaning: fresh = quality, time = window, urgent = last 15 min. */
function Badge({
  tone = "neutral",
  children,
  uppercase,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-50)",
      background: bg,
      color: fg,
      padding: "3px var(--space-100)",
      borderRadius: "var(--radius-chip)",
      fontSize: "var(--text-micro-size)",
      lineHeight: "var(--text-micro-line)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: uppercase ? "var(--tracking-caps)" : "var(--tracking-normal)",
      textTransform: uppercase ? "uppercase" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Neutral surface container. Every raised object in the system starts here. */
function Card({
  children,
  padded = true,
  interactive,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--color-surface-raised)",
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      boxShadow: "var(--elevation-card)",
      padding: padded ? "var(--space-200)" : 0,
      overflow: "hidden",
      cursor: interactive ? "pointer" : undefined,
      transition: "box-shadow var(--motion-duration-base) var(--motion-ease-brand)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cache = new Map();
const pending = new Map();
function loadGlyph(name) {
  if (cache.has(name)) return Promise.resolve(cache.get(name));
  if (!pending.has(name)) pending.set(name, fetch(assetBase() + "assets/icons/" + name + ".svg").then(r => r.ok ? r.text() : "").then(t => {
    const inner = t.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "");
    cache.set(name, inner);
    return inner;
  }).catch(() => ""));
  return pending.get(name);
}
function assetBase() {
  const s = [...document.querySelectorAll('script[src]')].map(x => x.getAttribute('src')).find(x => x && x.includes('_ds_bundle.js'));
  return s ? s.replace(/_ds_bundle\.js.*$/, '') : '/';
}
/** Lucide glyph, inlined so it inherits currentColor and the variant stroke width. */
function Icon({
  name,
  size = 20,
  strokeWidth,
  mirror = false,
  title,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(cache.get(name) || null);
  React.useEffect(() => {
    let live = true;
    loadGlyph(name).then(v => {
      if (live) setSvg(v);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : "presentation",
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    className: mirror ? "ds-icon-directional" : "ds-icon-no-mirror",
    style: {
      display: "block",
      flex: "none",
      strokeWidth: strokeWidth ?? "var(--icon-stroke,2)",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg || ""
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CountdownPill.jsx
try { (() => {
/** Time-remaining pill. Tone escalates by real time only — never by inventory, never faked.
 *  > 60 min neutral · 15–60 min time tone · < 15 min urgent tone with a slow 2s pulse. */
function CountdownPill({
  minutesLeft,
  label,
  format,
  state = "browse",
  style
}) {
  const urgent = minutesLeft != null && minutesLeft <= 15;
  const soon = minutesLeft != null && minutesLeft <= 60;
  const [bg, fg] = urgent ? ["var(--color-time-urgent-tint)", "var(--color-time-urgent)"] : soon ? ["var(--color-time-tint)", "var(--color-time)"] : state === "reserved" ? ["var(--color-fresh-tint)", "var(--color-fresh)"] : ["var(--color-surface-sunken)", "var(--color-text-secondary)"];
  const txt = label || (format ? format(minutesLeft) : minutesLeft >= 60 ? Math.floor(minutesLeft / 60) + "h " + minutesLeft % 60 + "m left" : minutesLeft + " min left");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-75)",
      background: bg,
      color: fg,
      padding: "4px var(--space-100)",
      borderRadius: "var(--radius-chip)",
      fontSize: "var(--text-caption-size)",
      fontWeight: "var(--weight-semibold)",
      border: "var(--border-card) solid transparent",
      animation: urgent ? "ds-pulse var(--motion-countdown-pulse-period) var(--motion-ease-out) infinite" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: state === "reserved" ? "timer" : "clock",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "auto",
    style: {
      whiteSpace: "nowrap"
    }
  }, txt));
}
Object.assign(__ds_scope, { CountdownPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CountdownPill.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CoverPlate.jsx
try { (() => {
const GLYPH = {
  bakery: "croissant",
  cafe: "coffee",
  meals: "utensils",
  grocery: "shopping-bag",
  other: "package"
};
/** Imagery policy in one component: a real partner/storefront photo when one exists, otherwise an
 *  honest category plate. Never a stock photo of food the bag may not contain. */
function CoverPlate({
  src,
  category = "other",
  height = 140,
  label,
  radius = "var(--radius-image)",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      borderRadius: radius,
      overflow: "hidden",
      background: src ? "var(--color-surface-sunken)" : "var(--color-brand-tint)",
      display: "grid",
      placeItems: "center",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 6,
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: GLYPH[category] || GLYPH.other,
    size: 28
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro-size)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase"
    }
  }, label)), children);
}
Object.assign(__ds_scope, { CoverPlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CoverPlate.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BagCard.jsx
try { (() => {
/** The core object of the marketplace. layout: "card" (browse grid), "row" (compact list), "hero" (featured). */
function BagCard({
  partner,
  title = "Surprise Bag",
  category = "other",
  cover,
  priceNow,
  priceWas,
  currency = "KD",
  day,
  from,
  to,
  distanceKm,
  bagsLeft,
  leftFormat,
  rating,
  ratingCount,
  tags = [],
  minutesLeft,
  countdownFormat,
  saved,
  layout = "card",
  onClick,
  style
}) {
  const row = layout === "row",
    hero = layout === "hero";
  const meta = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-150)",
      flexWrap: "wrap",
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate"
    }
  }, from, "\u2013", to)), distanceKm != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate"
    }
  }, distanceKm, " km")), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 13,
    style: {
      fill: "currentColor"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate"
    }
  }, rating.toFixed(1), ratingCount ? " (" + ratingCount + ")" : "")));
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: {
      display: row ? "flex" : "block",
      gap: "var(--space-150)",
      cursor: onClick ? "pointer" : undefined,
      background: "var(--color-surface-raised)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      border: "var(--border-card) solid var(--color-border-subtle)",
      boxShadow: "var(--elevation-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CoverPlate, {
    src: cover,
    category: category,
    label: !cover ? category : undefined,
    height: row ? 96 : hero ? 200 : 132,
    radius: "0",
    style: {
      width: row ? 96 : "100%",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      insetInlineStart: 8,
      top: 8,
      display: "flex",
      gap: 6
    }
  }, bagsLeft != null && bagsLeft <= 3 && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "urgent"
  }, leftFormat ? leftFormat(bagsLeft) : bagsLeft + " left"), day && !row && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, day)), saved != null && !row && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      insetInlineEnd: 8,
      top: 8,
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "var(--color-surface-raised)",
      display: "grid",
      placeItems: "center",
      color: saved ? "var(--color-deal)" : "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 16,
    style: {
      fill: saved ? "currentColor" : "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: row ? "var(--space-150) var(--space-150) var(--space-150) 0" : "var(--space-150)",
      display: "grid",
      gap: "var(--space-75)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-100)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: hero ? "var(--text-title-size)" : "var(--text-headline-size)",
      lineHeight: 1.25,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      minWidth: 0
    }
  }, partner), minutesLeft != null && /*#__PURE__*/React.createElement(__ds_scope.CountdownPill, {
    minutesLeft: minutesLeft,
    format: countdownFormat,
    style: {
      flex: "none"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label-size)",
      color: "var(--color-text-secondary)"
    }
  }, title), meta, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-100)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    now: priceNow,
    was: priceWas,
    currency: currency,
    size: hero ? "lg" : "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "neutral"
  }, t))))));
}
Object.assign(__ds_scope, { BagCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BagCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ImpactStat.jsx
try { (() => {
/** Post-pickup satisfaction, not a lecture. Facts only — no guilt copy, no CO2 abstractions the user can't feel. */
function ImpactStat({
  icon = "leaf",
  value,
  unit,
  label,
  tone = "fresh",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      padding: "var(--space-200)",
      borderRadius: "var(--radius-card)",
      background: tone === "fresh" ? "var(--color-fresh-tint)" : "var(--color-brand-tint)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      color: tone === "fresh" ? "var(--color-fresh)" : "var(--color-brand-primary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-numeric-xl-size)",
      lineHeight: 1,
      fontWeight: "var(--weight-bold)"
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-size)",
      marginInlineStart: 4
    }
  }, unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, label));
}
Object.assign(__ds_scope, { ImpactStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ImpactStat.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PaymentMethodRow.jsx
try { (() => {
const LABEL = {
  knet: ["KNET", "credit-card", "Opens your bank's page"],
  applepay: ["Apple Pay", "wallet", "Face ID"],
  card: ["Visa / Mastercard", "credit-card", "Saved card"]
};
/** Payment selector. KNET is listed first and always states that it redirects — the redirect is not a failure state. */
function PaymentMethodRow({
  method = "knet",
  selected,
  onSelect,
  detail,
  label: labelOverride,
  hint: hintOverride,
  style
}) {
  const [defLabel, icon, defHint] = LABEL[method] || LABEL.card;
  const label = labelOverride || defLabel,
    hint = hintOverride || defHint;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onSelect,
    "aria-pressed": selected,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-150)",
      minHeight: "var(--size-control-lg)",
      padding: "var(--space-150)",
      cursor: "pointer",
      textAlign: "start",
      background: "var(--color-surface-raised)",
      borderRadius: "var(--radius-control)",
      border: "1.5px solid " + (selected ? "var(--color-border-focus)" : "var(--color-border-default)"),
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-body-size)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, detail || hint)), selected && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18,
    style: {
      color: "var(--color-brand-primary)"
    }
  }));
}
Object.assign(__ds_scope, { PaymentMethodRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PaymentMethodRow.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PickupWindow.jsx
try { (() => {
/** Collect-between display. The window is a promise, so it is always shown in full — never truncated. */
function PickupWindow({
  day = "Tonight",
  from,
  to,
  note,
  size = "md",
  style
}) {
  const big = size === "lg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-100)",
      color: "var(--color-text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: big ? 20 : 16,
    style: {
      color: "var(--color-text-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: big ? "var(--text-body-lg-size)" : "var(--text-label-size)",
      fontWeight: "var(--weight-semibold)"
    }
  }, day, " ", /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate"
    }
  }, from, "\u2013", to)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, note)));
}
Object.assign(__ds_scope, { PickupWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PickupWindow.jsx", error: String((e && e.message) || e) }); }

// components/commerce/RedemptionCode.jsx
try { (() => {
/** The pickup screen. Readable at arm's length by staff; the confirm gesture is deliberate (swipe), never a tap. */
function RedemptionCode({
  code,
  partner,
  window: win,
  quantity = 1,
  state = "ready",
  onRedeem,
  bagLabel,
  slideLabel = "Slide when staff is ready",
  doneLabel = "Collected",
  style
}) {
  const done = state === "redeemed";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-200)",
      justifyItems: "center",
      padding: "var(--space-300)",
      background: done ? "var(--color-fresh-tint)" : "var(--color-surface-raised)",
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      boxShadow: "var(--elevation-card)",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label-size)",
      color: "var(--color-text-secondary)"
    }
  }, partner), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-code-size)",
      lineHeight: "var(--text-code-line)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.12em"
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    dir: "auto"
  }, quantity, " ", bagLabel || (quantity > 1 ? "bags" : "bag")), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr"
  }, win)), done ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--color-fresh)",
      fontWeight: "var(--weight-semibold)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 22
  }), " ", doneLabel) : /*#__PURE__*/React.createElement("button", {
    onClick: onRedeem,
    style: {
      width: "100%",
      minHeight: "var(--size-control-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-150)",
      cursor: "pointer",
      background: "var(--color-brand-primary)",
      color: "var(--color-text-on-brand)",
      border: "var(--border-card) solid var(--color-border-strong)",
      borderRadius: "var(--radius-control)",
      fontWeight: "var(--weight-semibold)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-control)",
      background: "var(--color-surface-raised)",
      color: "var(--color-text-primary)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18,
    mirror: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, slideLabel)));
}
Object.assign(__ds_scope, { RedemptionCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/RedemptionCode.jsx", error: String((e && e.message) || e) }); }

// components/core/Banner.jsx
try { (() => {
const MAP = {
  info: ["info", "var(--color-info-tint)", "var(--color-info)"],
  fresh: ["circle-check", "var(--color-fresh-tint)", "var(--color-fresh)"],
  time: ["clock", "var(--color-time-tint)", "var(--color-time)"],
  offline: ["wifi-off", "var(--color-surface-sunken)", "var(--color-text-secondary)"],
  error: ["triangle-alert", "var(--color-error-tint)", "var(--color-error)"]
};
/** Persistent inline message: offline, location off, pickup window changed. */
function Banner({
  tone = "info",
  title,
  children,
  action,
  style
}) {
  const [icon, bg, fg] = MAP[tone] || MAP.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-150)",
      padding: "var(--space-150)",
      background: bg,
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      color: fg,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-label-size)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      lineHeight: "var(--text-body-line)",
      color: "var(--color-text-secondary)"
    }
  }, children)), action && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--weight-semibold)",
      color: fg,
      alignSelf: "center"
    }
  }, action));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: "var(--size-control-sm)",
  md: "var(--size-control-md)",
  lg: "var(--size-control-lg)"
};
const PAD = {
  sm: "0 var(--space-150)",
  md: "0 var(--space-250)",
  lg: "0 var(--space-300)"
};
const FS = {
  sm: "var(--text-label-size)",
  md: "var(--text-body-size)",
  lg: "var(--text-body-lg-size)"
};
const TONE = {
  primary: {
    background: "var(--color-brand-primary)",
    color: "var(--color-text-on-brand)",
    border: "var(--border-card) solid var(--color-border-strong)"
  },
  secondary: {
    background: "var(--color-surface-raised)",
    color: "var(--color-text-primary)",
    border: "1px solid var(--color-border-default)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-text-primary)",
    border: "1px solid transparent"
  },
  deal: {
    background: "var(--color-deal)",
    color: "var(--color-deal-on)",
    border: "var(--border-card) solid var(--color-border-strong)"
  },
  danger: {
    background: "var(--color-error)",
    color: "#fff",
    border: "var(--border-card) solid transparent"
  }
};
/** The full button hierarchy. Primary is the single reserve/pay action per screen. */
function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  iconStart,
  iconEnd,
  loading,
  disabled,
  children,
  style,
  ...rest
}) {
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled || loading,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-100)",
      minHeight: H[size],
      height: H[size],
      padding: PAD[size],
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--font-body)",
      fontSize: FS[size],
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-normal)",
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--motion-duration-fast) var(--motion-ease-brand), background var(--motion-duration-fast) linear",
      transform: press ? "scale(var(--motion-press-scale))" : "none",
      ...TONE[variant],
      ...style
    }
  }, rest), iconStart && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: size === "sm" ? 16 : 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: loading ? 0.6 : 1
    }
  }, loading ? "…" : children), iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: size === "sm" ? 16 : 20,
    mirror: true
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter / cuisine / dietary chip. Selected state is filled, never merely tinted (glare legibility). */
function Chip({
  children,
  selected,
  icon,
  count,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-75)",
      height: 36,
      padding: "0 var(--space-150)",
      borderRadius: "var(--radius-chip)",
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--weight-medium)",
      cursor: "pointer",
      background: selected ? "var(--color-surface-inverse)" : "var(--color-surface-raised)",
      color: selected ? "var(--color-text-inverse)" : "var(--color-text-primary)",
      border: "1px solid " + (selected ? "var(--color-border-strong)" : "var(--color-border-default)"),
      transition: "background var(--motion-duration-fast) linear",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, count != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      opacity: .7
    }
  }, count));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
/** Centered confirm dialog — cancellations, refunds, "you're running late". */
function Dialog({
  open = true,
  title,
  body,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  tone = "primary",
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-300)",
      background: "var(--color-surface-overlay)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 340,
      background: "var(--color-surface-raised)",
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      boxShadow: "var(--elevation-raised)",
      padding: "var(--space-300)",
      display: "grid",
      gap: "var(--space-200)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title-size)",
      lineHeight: "var(--text-title-line)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-100)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone,
    fullWidth: true,
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/EmptyState.jsx
try { (() => {
/** No results, sold out, no reservations. Always offers one concrete next move. */
function EmptyState({
  icon = "shopping-bag",
  title,
  body,
  actionLabel,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: "var(--space-150)",
      padding: "var(--space-600) var(--space-300)",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-card)",
      background: "var(--color-surface-sunken)",
      color: "var(--color-text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title-size)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 280,
      color: "var(--color-text-secondary)",
      fontSize: "var(--text-body-size)"
    }
  }, body), actionLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onAction,
    style: {
      marginTop: "var(--space-100)"
    }
  }, actionLabel));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square 44pt-minimum icon-only control. Always pass a label — it becomes aria-label in both languages. */
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = 44,
  mirror,
  style,
  ...rest
}) {
  const tone = variant === "solid" ? {
    background: "var(--color-surface-inverse)",
    color: "var(--color-text-inverse)",
    border: "none"
  } : variant === "outline" ? {
    background: "var(--color-surface-raised)",
    color: "var(--color-text-primary)",
    border: "1px solid var(--color-border-default)"
  } : {
    background: "transparent",
    color: "var(--color-text-primary)",
    border: "none"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    style: {
      width: size,
      height: size,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-control)",
      cursor: "pointer",
      ...tone,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45),
    mirror: mirror
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/BottomSheet.jsx
try { (() => {
/** Modal sheet for bag detail, payment, filters. Drag handle + explicit close; never dismiss-only-by-drag. */
function BottomSheet({
  open = true,
  title,
  onClose,
  children,
  footer,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      alignItems: "end",
      background: "var(--color-surface-overlay)",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-raised)",
      borderStartStartRadius: "var(--radius-sheet)",
      borderStartEndRadius: "var(--radius-sheet)",
      boxShadow: "var(--elevation-sheet)",
      maxHeight: "92%",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      animation: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-200)",
      padding: "var(--space-150) var(--space-200)",
      borderBottom: "1px solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title-size)"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "auto",
      padding: "var(--space-200)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-200)",
      borderTop: "1px solid var(--color-border-subtle)",
      paddingBottom: "calc(var(--space-200) + var(--layout-safe-bottom) / 2)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text / search / numeric field. Label is always visible — placeholder-only fields fail in Arabic. */
function Input({
  label,
  icon,
  hint,
  error,
  suffix,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-75)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-100)",
      minHeight: "var(--size-control-md)",
      padding: "0 var(--space-150)",
      background: "var(--color-surface-raised)",
      borderRadius: "var(--radius-control)",
      border: "1px solid " + (error ? "var(--color-error)" : "var(--color-border-default)")
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: "var(--color-text-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "var(--text-body-size)"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label-size)",
      color: "var(--color-text-tertiary)"
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: error ? "var(--color-error)" : "var(--color-text-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ListRow.jsx
try { (() => {
/** One row of a settings / account list: leading icon, label, trailing value or control, optional chevron. */
function ListRow({
  icon,
  label,
  value,
  chevron,
  onClick,
  style
}) {
  const Tag = onClick ? "button" : "div";
  return /*#__PURE__*/React.createElement(Tag, {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-150)",
      width: "100%",
      minHeight: 52,
      padding: "var(--space-150) var(--space-200)",
      textAlign: "start",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid var(--color-border-subtle)",
      color: "var(--color-text-primary)",
      font: "inherit",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: "var(--color-text-secondary)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--weight-medium)"
    }
  }, label), typeof value === "string" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label-size)",
      color: "var(--color-text-secondary)"
    }
  }, value) : value, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    mirror: true,
    style: {
      color: "var(--color-text-tertiary)",
      flex: "none"
    }
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/core/RatingStars.jsx
try { (() => {
/** Rating display (compact) and post-pickup input (size lg + onRate). */
function RatingStars({
  value = 0,
  count,
  size = 14,
  onRate,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      ...style
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: onRate ? () => onRate(i) : undefined,
    style: {
      cursor: onRate ? "pointer" : "default",
      color: i <= Math.round(value) ? "var(--color-rating,var(--color-time))" : "var(--color-text-tertiary)",
      display: "grid",
      placeItems: "center",
      padding: onRate ? 6 : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size,
    style: {
      fill: i <= Math.round(value) ? "currentColor" : "none"
    }
  }))), count != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate",
      marginInlineStart: 6,
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, value.toFixed(1), " (", count, ")"));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Two-to-three way switch: list/map, EN/AR, tonight/tomorrow. */
function SegmentedControl({
  options,
  value,
  onChange,
  fullWidth,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      width: fullWidth ? "100%" : undefined,
      padding: 3,
      gap: 2,
      background: "var(--color-surface-sunken)",
      borderRadius: "var(--radius-control)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      ...style
    }
  }, rest), options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(o.value),
      style: {
        flex: fullWidth ? 1 : undefined,
        minHeight: 38,
        padding: "0 var(--space-200)",
        cursor: "pointer",
        borderRadius: "var(--radius-control)",
        border: "none",
        fontSize: "var(--text-label-size)",
        fontWeight: "var(--weight-semibold)",
        background: active ? "var(--color-surface-raised)" : "transparent",
        color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
        boxShadow: active ? "var(--elevation-1)" : "none",
        transition: "background var(--motion-duration-fast) var(--motion-ease-brand)"
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
/** Loading placeholder. Shimmer is a 1.4s opacity pulse — disabled under prefers-reduced-motion. */
function Skeleton({
  width = "100%",
  height = 16,
  radius = "var(--radius-xs)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width,
      height,
      borderRadius: radius,
      background: "var(--color-skeleton)",
      animation: "ds-pulse 1400ms var(--motion-ease-out) infinite",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stepper.jsx
try { (() => {
/** Quantity control for "how many bags". Never lets the user exceed bagsLeft. */
function Stepper({
  value,
  min = 1,
  max = 9,
  onChange,
  style
}) {
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-100)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-control)",
      padding: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: "Decrease quantity",
    size: 40,
    onClick: () => set(value - 1)
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      minWidth: 24,
      textAlign: "center",
      fontSize: "var(--text-body-lg-size)",
      fontWeight: "var(--weight-semibold)"
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: "Increase quantity",
    size: 40,
    onClick: () => set(value + 1)
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Binary setting toggle. 44pt target, label always passed for screen readers in both languages. */
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    "aria-label": label,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 46,
      height: 28,
      flex: "none",
      padding: 3,
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: "var(--radius-pill)",
      border: "none",
      opacity: disabled ? 0.5 : 1,
      background: checked ? "var(--color-brand-primary)" : "var(--color-border-default)",
      transition: "background var(--motion-duration-fast) var(--motion-ease-standard)",
      display: "flex",
      justifyContent: checked ? "flex-end" : "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      boxShadow: "0 1px 2px rgba(0,0,0,.2)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/TabBar.jsx
try { (() => {
/** Consumer app bottom navigation. 4 tabs max; badge only for state the user must act on. */
function TabBar({
  items,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      background: "var(--color-surface-raised)",
      borderTop: "1px solid var(--color-border-subtle)",
      padding: "var(--space-100) var(--space-100) var(--space-200)",
      gap: 2,
      ...style
    }
  }, items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      "aria-current": active ? "page" : undefined,
      style: {
        flex: 1,
        display: "grid",
        justifyItems: "center",
        gap: 4,
        minHeight: "var(--size-touch-min)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "relative",
        color: active ? "var(--color-text-primary)" : "var(--color-text-tertiary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22
    }), it.badge ? /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        position: "absolute",
        top: -6,
        insetInlineEnd: -10,
        minWidth: 16,
        height: 16,
        padding: "0 4px",
        borderRadius: 999,
        background: "var(--color-deal)",
        color: "var(--color-deal-on)",
        fontSize: 10,
        lineHeight: "16px",
        textAlign: "center"
      }
    }, it.badge) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro-size)",
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
const ICONS = {
  success: "circle-check",
  info: "info",
  warning: "triangle-alert",
  error: "triangle-alert"
};
const FG = {
  success: "var(--color-fresh)",
  info: "var(--color-info)",
  warning: "var(--color-time)",
  error: "var(--color-error)"
};
/** Transient confirmation. Lives 4s, bottom-anchored above the tab bar, never blocks the primary action. */
function Toast({
  tone = "success",
  children,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-150)",
      padding: "var(--space-150) var(--space-200)",
      background: "var(--color-surface-inverse)",
      color: "var(--color-text-inverse)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--elevation-raised)",
      fontSize: "var(--text-body-size)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone],
    size: 20,
    style: {
      color: FG[tone]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-semibold)",
      color: "var(--color-brand-primary)"
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/partner/LedgerRow.jsx
try { (() => {
/** One line of the PAFN-facing compliance ledger: listed → window → collected, with the attestation flag. */
function LedgerRow({
  orderId,
  listedAt,
  windowEnd,
  collectedAt,
  attested,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-numeric",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr 1fr 1fr auto",
      gap: "var(--space-200)",
      alignItems: "center",
      padding: "var(--space-100) var(--space-200)",
      fontSize: "var(--text-caption-size)",
      borderBottom: "1px solid var(--color-border-subtle)",
      background: "var(--color-partner-surface)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-semibold)"
    }
  }, orderId), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, listedAt), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, windowEnd), /*#__PURE__*/React.createElement("span", {
    style: {
      color: collectedAt ? "var(--color-text-primary)" : "var(--color-text-tertiary)"
    }
  }, collectedAt || "—"), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: attested ? "circle-check" : "triangle-alert",
    size: 16,
    style: {
      color: attested ? "var(--color-fresh)" : "var(--color-time)"
    },
    title: attested ? "Attested" : "Attestation missing"
  }));
}
Object.assign(__ds_scope, { LedgerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/LedgerRow.jsx", error: String((e && e.message) || e) }); }

// components/partner/ListingStep.jsx
try { (() => {
/** One step of the 60-second listing flow. Big targets, one decision per step, defaults pre-filled from last night. */
function ListingStep({
  index,
  total,
  title,
  hint,
  children,
  done,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--space-150)",
      padding: "var(--space-200)",
      background: "var(--color-partner-surface)",
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid " + (done ? "var(--color-fresh)" : "var(--color-border-subtle)"),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-150)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      width: 28,
      height: 28,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-chip)",
      background: done ? "var(--color-fresh)" : "var(--color-surface-sunken)",
      color: done ? "#fff" : "var(--color-text-secondary)",
      fontSize: "var(--text-caption-size)",
      fontWeight: "var(--weight-bold)"
    }
  }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  }) : index), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-headline-size)"
    }
  }, title), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, hint)), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      marginInlineStart: "auto",
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-tertiary)"
    }
  }, index, "/", total)), children);
}
Object.assign(__ds_scope, { ListingStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/ListingStep.jsx", error: String((e && e.message) || e) }); }

// components/partner/OrderRow.jsx
try { (() => {
/** One line on tonight's orders board. Status is readable from a metre away on a counter tablet. */
function OrderRow({
  code,
  customer,
  quantity = 1,
  pickupBy,
  status = "waiting",
  bagLabel,
  statusLabel,
  actionLabel = "Hand over",
  onCheckIn,
  style
}) {
  const tone = status === "collected" ? "fresh" : status === "late" ? "urgent" : "neutral";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-200)",
      padding: "var(--space-150) var(--space-200)",
      background: "var(--color-partner-surface)",
      borderBottom: "1px solid var(--color-border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-title-size)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.06em",
      minWidth: 96
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-body-size)"
    }
  }, customer), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate"
    }
  }, quantity), " ", bagLabel || (quantity > 1 ? "bags" : "bag"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    dir: "ltr",
    style: {
      unicodeBidi: "isolate"
    }
  }, pickupBy))), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone,
    uppercase: true
  }, statusLabel || status), status !== "collected" && /*#__PURE__*/React.createElement("button", {
    onClick: onCheckIn,
    style: {
      minHeight: "var(--size-control-md)",
      padding: "0 var(--space-200)",
      background: "var(--color-brand-primary)",
      color: "var(--color-text-on-brand)",
      border: "none",
      borderRadius: "var(--radius-control)",
      fontWeight: "var(--weight-semibold)",
      cursor: "pointer"
    }
  }, actionLabel), status === "collected" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 22,
    style: {
      color: "var(--color-fresh)"
    }
  }));
}
Object.assign(__ds_scope, { OrderRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/OrderRow.jsx", error: String((e && e.message) || e) }); }

// components/partner/PartnerStat.jsx
try { (() => {
/** Dashboard KPI tile. Density over expressiveness — partner side never decorates a number. */
function PartnerStat({
  label,
  value,
  sub,
  icon,
  tone = "neutral",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      padding: "var(--space-200)",
      background: "var(--color-partner-surface)",
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), label), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-title-lg-size)",
      lineHeight: 1.05,
      fontWeight: "var(--weight-bold)",
      whiteSpace: "nowrap",
      color: tone === "fresh" ? "var(--color-fresh)" : tone === "urgent" ? "var(--color-time-urgent)" : "var(--color-text-primary)"
    }
  }, value), sub && /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-micro-size)",
      color: "var(--color-text-tertiary)"
    }
  }, sub));
}
Object.assign(__ds_scope, { PartnerStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/PartnerStat.jsx", error: String((e && e.message) || e) }); }

// components/partner/PayoutCard.jsx
try { (() => {
/** Weekly payout summary — the number a franchise finance lead checks first. */
function PayoutCard({
  amount,
  currency = "KD",
  decimals,
  period,
  bags,
  nextDate,
  note,
  style
}) {
  const dp = decimals ?? (currency === "KD" ? 3 : 2);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-150)",
      padding: "var(--space-300)",
      background: "var(--color-partner-surface)",
      borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)",
      boxShadow: "var(--elevation-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-label-size)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "banknote",
    size: 18
  }), period), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-display-size)",
      lineHeight: 1,
      fontWeight: "var(--weight-bold)"
    }
  }, currency, " ", Number(amount).toFixed(dp)), /*#__PURE__*/React.createElement("span", {
    className: "ds-numeric",
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, note ?? `${bags} bundles sold · transfer ${nextDate}`));
}
Object.assign(__ds_scope, { PayoutCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/partner/PayoutCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bugsha/data.jsx
try { (() => {
// Bugsha app — copy tables and fixture data. Every string exists in both languages.
const T = {
  en: {
    dir: "ltr",
    nu: "en",
    loc: "Salmiya",
    change: "Change",
    search: "Search bakeries, cafés, co-ops",
    searchAr: false,
    all: "All",
    bakery: "Bakery",
    meals: "Meals",
    cafe: "Café",
    grocery: "Co-op",
    sweets: "Sweets",
    tonight: "Tonight near you",
    closing: "Closing soon",
    featured: "Worth the drive",
    bundles: n => `${n} bundles`,
    left: n => `${n} left`,
    one: "1 left",
    sold: "All claimed",
    list: "List",
    map: "Map",
    filters: "Filters",
    apply: "Show bundles",
    clear: "Clear",
    type: "Type",
    maxDist: "Max distance",
    maxPrice: "Max price",
    sort: "Sort by",
    sortOpts: [["closest", "Closest"], ["cheapest", "Cheapest"], ["ending", "Ending soonest"], ["value", "Best value"]],
    inside: "What's in the bundle",
    insideBody: "Whatever the kitchen made today and didn't sell. Contents change nightly — that's the point. Ask at the counter for allergens on any item.",
    collect: "Collecting",
    collectBody: "Show your code at the counter inside the pickup window. Drive-up lane is open.",
    worth: "Worth",
    save: "You keep",
    qty: "How many?",
    reserve: "Reserve",
    payKnet: "Pay with KNET",
    payApple: "Pay with Apple Pay",
    paying: "Opening your bank…",
    payNote: "You'll return here automatically.",
    window: "Collect between",
    code: "Show this at the counter",
    reserved: "Reserved",
    collected: "Collected. Enjoy it.",
    rate: "How was the bundle?",
    thanks: "Thanks — that helps the next person.",
    reviewPh: "Anything the kitchen should know? (optional)",
    sendReview: "Send",
    late: "Running late?",
    lateBody: "Tell them and they'll hold your bundle 15 extra minutes.",
    tell: "Tell the partner",
    told: "They know you're on the way.",
    cancel: "Cancel reservation?",
    cancelBody: "You'll be refunded to KNET within 3 working days.",
    keep: "Keep it",
    drop: "Cancel bundle",
    cancelled: "Bundle cancelled",
    tabs: ["Browse", "Map", "Orders", "Me"],
    active: "Active",
    past: "Past",
    noOrders: "No active bundles",
    noOrdersBody: "Reserve one and your code lands here.",
    browseCta: "Browse tonight",
    empty: "All bundles claimed tonight",
    emptyBody: "New bundles usually drop around 20:00.",
    notify: "Notify me at 20:00",
    notifyOn: "We'll ping you at 20:00",
    me: "Noura A.",
    member: "With Bugsha since March",
    impact: "Your rescue log",
    rescued: "bundles rescued",
    kept: "kept",
    co2: "kg CO₂e avoided",
    settings: "Settings",
    lang: "Language",
    theme: "Appearance",
    light: "Light",
    dark: "Dark",
    payment: "Payment methods",
    notifs: "Notifications",
    help: "Help & contact",
    terms: "Terms",
    howto: "How Bugsha works",
    steps: [["Find a bundle", "Kitchens post what's left at the end of the day, at about a third of the price."], ["Reserve it", "Pay in the app with KNET or Apple Pay. Your code appears straight away."], ["Collect it", "Show your code at the counter inside the window. That's it."]],
    got: "Got it",
    skip: "Skip",
    surprise: "Surprise Bundle",
    perDay: "Posted daily",
    partnerSince: "Bugsha partner",
    listedAt: "Listed",
    ratingOf: n => `${n} reviews`,
    dietary: ["Vegetarian option", "Contains dairy", "Contains nuts"],
    distance: "away",
    nearest: "Nearest first",
    pins: n => `${n} bundles on the map`,
    directions: "Directions",
    offline: "You're offline",
    offlineBody: "Your code still works — it's saved on this phone.",
    locTitle: "Show bundles near you?",
    locBody: "We use your location to sort by distance. Nothing is shared with partners.",
    locAllow: "Allow while using the app",
    locDeny: "Not now"
  },
  ar: {
    dir: "rtl",
    nu: "ar",
    loc: "السالمية",
    change: "بدّل",
    search: "دوّر على مخابز، كافيهات، جمعيات",
    searchAr: true,
    all: "الكل",
    bakery: "مخبز",
    meals: "وجبات",
    cafe: "كافيه",
    grocery: "جمعية",
    sweets: "حلويات",
    tonight: "الليلة قريب منك",
    closing: "قرب يخلص",
    featured: "تستاهل الطلعة",
    bundles: n => `${n} بقشة`,
    left: n => `باقي ${n}`,
    one: "باقي وحدة",
    sold: "خلصت",
    list: "قائمة",
    map: "خريطة",
    filters: "فلاتر",
    apply: "وريني البقش",
    clear: "مسح",
    type: "النوع",
    maxDist: "أبعد مسافة",
    maxPrice: "أعلى سعر",
    sort: "ترتيب حسب",
    sortOpts: [["closest", "الأقرب"], ["cheapest", "الأرخص"], ["ending", "قرب يخلص"], ["value", "أفضل قيمة"]],
    inside: "شنو داخل البقشة",
    insideBody: "اللي سواه المطبخ اليوم وما انباع. المحتويات تتغير كل ليلة — وهذي متعتها. إذا عندك حساسية من شي، اسأل عند الكاونتر.",
    collect: "الاستلام",
    collectBody: "وريهم الرمز عند الكاونتر داخل وقت الاستلام. ممر السيارات مفتوح.",
    worth: "القيمة",
    save: "توفّر",
    qty: "كم بقشة؟",
    reserve: "احجز",
    payKnet: "ادفع بكي-نت",
    payApple: "ادفع بـ Apple Pay",
    paying: "نفتح صفحة بنكك…",
    payNote: "بترجع لهني على طول.",
    window: "الاستلام بين",
    code: "وريهم هالرمز عند الكاونتر",
    reserved: "محجوزة",
    collected: "استلمتها. بالعافية!",
    rate: "شلون كانت البقشة؟",
    thanks: "شكرًا — هذا يساعد اللي بعدك.",
    reviewPh: "شي تحب المطبخ يعرفه؟ (اختياري)",
    sendReview: "أرسل",
    late: "متأخر؟",
    lateBody: "خبّرهم ويحفظون لك البقشة 15 دقيقة زيادة.",
    tell: "خبّر الشريك",
    told: "خبّرناهم إنك في الطريق.",
    cancel: "تلغي الحجز؟",
    cancelBody: "يرجع لك المبلغ على كي-نت خلال 3 أيام عمل.",
    keep: "خلّها",
    drop: "ألغِ البقشة",
    cancelled: "لغينا البقشة",
    tabs: ["تصفح", "خريطة", "طلباتي", "حسابي"],
    active: "نشطة",
    past: "السابقة",
    noOrders: "ما عندك بقش نشطة",
    noOrdersBody: "احجز وحدة ويطلع رمزك هني.",
    browseCta: "تصفح الليلة",
    empty: "خلصت بقش الليلة",
    emptyBody: "عادة البقش الجديدة تنزل حدود 20:00.",
    notify: "خبّرني الساعة 20:00",
    notifyOn: "بنخبرك الساعة 20:00",
    me: "نورة ع.",
    member: "مع بقشة من مارس",
    impact: "سجل إنقاذك",
    rescued: "بقشة انقذتها",
    kept: "وفّرتها",
    co2: "كجم CO₂e تفاديتها",
    settings: "الإعدادات",
    lang: "اللغة",
    theme: "المظهر",
    light: "فاتح",
    dark: "غامق",
    payment: "طرق الدفع",
    notifs: "الإشعارات",
    help: "المساعدة والتواصل",
    terms: "الشروط",
    howto: "شلون تشتغل بقشة",
    steps: [["دوّر على بقشة", "المطابخ تنشر اللي باقي عندها بآخر اليوم، بحدود ثلث السعر."], ["احجزها", "ادفع بالتطبيق كي-نت أو Apple Pay. ورمزك يطلع لك على طول."], ["استلمها", "وريهم الرمز عند الكاونتر داخل الوقت. وبس، خلصنا."]],
    got: "تمام",
    skip: "بعدين",
    surprise: "بقشة مفاجأة",
    perDay: "تنزل كل يوم",
    partnerSince: "شريك بقشة",
    listedAt: "نُشرت",
    ratingOf: n => `${n} تقييم`,
    dietary: ["فيه خيار نباتي", "يحتوي حليب", "يحتوي مكسرات"],
    distance: "بعيد",
    nearest: "الأقرب أول",
    pins: n => `${n} بقشة على الخريطة`,
    directions: "الاتجاهات",
    offline: "ما عندك اتصال",
    offlineBody: "رمزك يشتغل — محفوظ بهالجهاز.",
    locTitle: "نوريك البقش القريبة منك؟",
    locBody: "نستخدم موقعك بس للترتيب حسب المسافة. ولا نشارك شي مع الشركاء.",
    locAllow: "اسمح أثناء استخدام التطبيق",
    locDeny: "مو الحين"
  }
};
const BAGS = [{
  id: "b1",
  p: "Kuwait Bakehouse",
  pa: "مخبز الكويت",
  cat: "bakery",
  img: "tone-bakehouse",
  now: 2,
  was: 6.5,
  from: "21:30",
  to: "22:30",
  km: 1.4,
  left: 2,
  r: 4.7,
  rc: 218,
  m: 42,
  listed: "21:04",
  x: 26,
  y: 30
}, {
  id: "b2",
  p: "Beit Beirut",
  pa: "بيت بيروت",
  cat: "meals",
  img: "tone-mezze",
  now: 3,
  was: 9,
  from: "22:00",
  to: "23:00",
  km: 2.1,
  left: 5,
  r: 4.5,
  rc: 96,
  m: 88,
  listed: "20:58",
  x: 62,
  y: 46
}, {
  id: "b3",
  p: "Ubon Café",
  pa: "كافيه أوبون",
  cat: "cafe",
  img: "tone-cafe",
  now: 2.5,
  was: 7,
  from: "20:30",
  to: "21:30",
  km: 3.4,
  left: 1,
  r: 4.8,
  rc: 412,
  m: 11,
  listed: "21:02",
  x: 40,
  y: 68
}, {
  id: "b4",
  p: "Co-op Jabriya",
  pa: "جمعية الجابرية",
  cat: "grocery",
  img: "tone-coop",
  now: 1.5,
  was: 5,
  from: "20:00",
  to: "21:00",
  km: 0.8,
  left: 9,
  r: 4.2,
  rc: 77,
  m: 150,
  listed: "19:41",
  x: 74,
  y: 22
}, {
  id: "b5",
  p: "Sadu Sweets",
  pa: "حلويات السدو",
  cat: "sweets",
  img: "tone-bread",
  now: 2,
  was: 8,
  from: "21:00",
  to: "22:00",
  km: 4.6,
  left: 3,
  r: 4.9,
  rc: 61,
  m: 64,
  listed: "20:36",
  x: 18,
  y: 58
}];
const PAST = [{
  id: "p1",
  p: "Kuwait Bakehouse",
  pa: "مخبز الكويت",
  date: "2 Aug",
  dateAr: "2 أغسطس",
  now: 2,
  was: 6.5,
  rated: 5
}, {
  id: "p2",
  p: "Ubon Café",
  pa: "كافيه أوبون",
  date: "29 Jul",
  dateAr: "29 يوليو",
  now: 2.5,
  was: 7,
  rated: 4
}, {
  id: "p3",
  p: "Co-op Jabriya",
  pa: "جمعية الجابرية",
  date: "24 Jul",
  dateAr: "24 يوليو",
  now: 1.5,
  was: 5,
  rated: 5
}];
const catLabel = (t, c) => ({
  bakery: t.bakery,
  meals: t.meals,
  cafe: t.cafe,
  grocery: t.grocery,
  sweets: t.sweets
})[c] || c;
const mfmt = ar => m => ar ? m >= 60 ? `باقي ${Math.floor(m / 60)} س ${m % 60} د` : `باقي ${m} د` : m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m left` : `${m} min left`;
const kd = n => "KD " + Number(n).toFixed(3);
const sortBags = (bags, sort) => [...bags].sort((a, b) => sort === "cheapest" ? a.now - b.now : sort === "ending" ? a.m - b.m : sort === "value" ? b.was - b.now - (a.was - a.now) : a.km - b.km);
Object.assign(window, {
  BugshaT: T,
  BugshaBags: BAGS,
  BugshaPast: PAST,
  bugshaCat: catLabel,
  bugshaMfmt: mfmt,
  bugshaKd: kd,
  bugshaSort: sortBags
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bugsha/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bugsha/kit.jsx
try { (() => {
(function () {
  const NS = window.SurplusKWDesignSystem_97ec90;
  const {
    Button,
    IconButton,
    Icon,
    Chip,
    Input,
    SegmentedControl,
    TabBar,
    Toast,
    BottomSheet,
    Dialog,
    Banner,
    Card,
    Logo
  } = NS;
  const {
    BugshaT: T,
    BugshaBags: BAGS
  } = window;
  const {
    Browse,
    Search,
    Detail,
    MapTab,
    Orders,
    Order,
    Me
  } = window.BugshaScreens;
  function Howto({
    t
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 16
      }
    }, t.steps.map(([h, b], i) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        width: 28,
        height: 28,
        flex: "none",
        borderRadius: "var(--radius-chip)",
        background: "var(--color-brand-tint)",
        color: "var(--color-brand-primary)",
        display: "grid",
        placeItems: "center",
        fontWeight: 600
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, h), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-text-secondary)",
        fontSize: "var(--text-caption-size)"
      }
    }, b)))));
  }
  function App() {
    const [lang, setLang] = React.useState("en");
    const [dark, setDark] = React.useState(false);
    const t = T[lang],
      ar = lang === "ar";
    const [tab, setTab] = React.useState("browse");
    const [screen, setScreen] = React.useState("browse");
    const [filter, setFilter] = React.useState("all");
    const [sort, setSort] = React.useState("closest");
    const [maxPrice, setMaxPrice] = React.useState("3.000");
    const [bag, setBag] = React.useState(BAGS[0]);
    const [qty, setQty] = React.useState(1);
    const [method, setMethod] = React.useState("knet");
    const [paying, setPaying] = React.useState(false);
    const [order, setOrder] = React.useState(null);
    const [sel, setSel] = React.useState(0);
    const [sheet, setSheet] = React.useState(null);
    const [dialog, setDialog] = React.useState(null);
    const [toast, setToast] = React.useState(null);
    const [rated, setRated] = React.useState(0);
    const [told, setTold] = React.useState(false);
    const [offline, setOffline] = React.useState(false);
    const [notified, setNotified] = React.useState(false);
    React.useEffect(() => {
      document.body.dataset.theme = dark ? "dark" : "light";
      document.body.dir = t.dir;
    }, [dark, lang]);
    React.useEffect(() => {
      if (!toast) return;
      const id = setTimeout(() => setToast(null), 2600);
      return () => clearTimeout(id);
    }, [toast]);
    const go = o => {
      if (o.screen) setScreen(o.screen);
      if (o.bag) {
        setBag(o.bag);
        setQty(1);
      }
      if (o.tab) setTab(o.tab);
      if (o.sheet !== undefined) setSheet(o.sheet);
      if (o.dialog !== undefined) setDialog(o.dialog);
    };
    const pay = () => {
      setPaying(true);
      setTimeout(() => {
        setPaying(false);
        setOrder({
          bag,
          qty,
          code: "KW-" + (4800 + Math.floor(Math.random() * 99)),
          state: "ready"
        });
        setScreen("order");
        setTab("orders");
        setRated(0);
        setTold(false);
        setToast(ar ? "تم الحجز · رمزك جاهز" : "Reserved · your code is ready");
      }, 1200);
    };
    const reset = () => {
      setOrder(null);
      setScreen("browse");
      setTab("browse");
      setRated(0);
      setTold(false);
      setFilter("all");
      setOffline(false);
      setNotified(false);
    };
    const body = () => {
      if (screen === "order" && order) return /*#__PURE__*/React.createElement(Order, {
        t: t,
        ar: ar,
        order: order,
        go: go,
        rated: rated,
        told: told,
        onTell: () => {
          setTold(true);
          setToast(t.told);
        },
        onRedeem: () => {
          setOrder(o => ({
            ...o,
            state: "redeemed"
          }));
          setToast(t.collected);
        },
        onRate: v => {
          setRated(v);
        }
      });
      if (screen === "detail") return /*#__PURE__*/React.createElement(Detail, {
        t: t,
        ar: ar,
        b: bag,
        qty: qty,
        setQty: setQty,
        method: method,
        setMethod: setMethod,
        go: go,
        paying: paying,
        onPay: pay
      });
      if (screen === "search") return /*#__PURE__*/React.createElement(Search, {
        t: t,
        ar: ar,
        go: go
      });
      if (tab === "map") return /*#__PURE__*/React.createElement(MapTab, {
        t: t,
        ar: ar,
        go: go,
        sel: sel,
        setSel: setSel
      });
      if (tab === "orders") return /*#__PURE__*/React.createElement(Orders, {
        t: t,
        ar: ar,
        order: order,
        go: go,
        onOpen: () => setScreen("order")
      });
      if (tab === "me") return /*#__PURE__*/React.createElement(Me, {
        t: t,
        ar: ar,
        lang: lang,
        setLang: setLang,
        dark: dark,
        setDark: setDark,
        go: go
      });
      return /*#__PURE__*/React.createElement(Browse, {
        t: t,
        ar: ar,
        go: go,
        filter: filter,
        setFilter: setFilter,
        sort: sort
      });
    };
    const caption = screen === "detail" ? ar ? "تفاصيل البقشة" : "Bag detail" : screen === "order" ? ar ? "الرمز والاستلام" : "Code & redemption" : screen === "search" ? ar ? "بحث" : "Search" : tab === "map" ? t.map : tab === "orders" ? t.tabs[2] : tab === "me" ? t.tabs[3] : t.tabs[0];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bar"
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: lang,
      onChange: setLang,
      options: [{
        value: "en",
        label: "English"
      }, {
        value: "ar",
        label: "العربية"
      }]
    }), /*#__PURE__*/React.createElement(SegmentedControl, {
      value: dark ? "dark" : "light",
      onChange: v => setDark(v === "dark"),
      options: [{
        value: "light",
        label: t.light
      }, {
        value: "dark",
        label: t.dark
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setOffline(o => !o)
    }, offline ? ar ? "متصل" : "Online" : t.offline), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setSheet("howto")
    }, t.howto), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: reset
    }, ar ? "تصفير" : "Reset")), /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "phone",
      dir: t.dir
    }, /*#__PURE__*/React.createElement("div", {
      className: "scroll",
      key: screen + tab
    }, offline ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px 0"
      }
    }, /*#__PURE__*/React.createElement(Banner, {
      tone: "offline",
      title: t.offline
    }, t.offlineBody)) : null, body()), /*#__PURE__*/React.createElement(TabBar, {
      value: tab,
      onChange: v => {
        setTab(v);
        setScreen(v === "browse" ? "browse" : v === "orders" && order ? "order" : "browse");
      },
      items: t.tabs.map((l, i) => ({
        value: ["browse", "map", "orders", "me"][i],
        label: l,
        icon: ["house", "map", "shopping-bag", "user"][i],
        badge: i === 2 && order && order.state !== "redeemed" ? 1 : undefined
      }))
    }), toast ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        insetInline: 14,
        bottom: 92,
        zIndex: 60
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: "success"
    }, toast)) : null, /*#__PURE__*/React.createElement(BottomSheet, {
      open: sheet === "filters",
      title: t.filters,
      onClose: () => setSheet(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        fullWidth: true,
        onClick: () => setSheet(null)
      }, t.apply)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)"
      }
    }, t.type), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, [["bakery", t.bakery], ["meals", t.meals], ["cafe", t.cafe], ["grocery", t.grocery], ["sweets", t.sweets]].map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
      key: k,
      selected: filter === k,
      onClick: () => setFilter(filter === k ? "all" : k)
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)"
      }
    }, t.sort), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, t.sortOpts.map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
      key: k,
      selected: sort === k,
      onClick: () => setSort(k)
    }, l)))), /*#__PURE__*/React.createElement(Input, {
      label: t.maxPrice,
      value: maxPrice,
      onChange: e => setMaxPrice(e.target.value),
      suffix: "KD"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setFilter("all");
        setSort("closest");
      }
    }, t.clear))), /*#__PURE__*/React.createElement(BottomSheet, {
      open: sheet === "howto",
      title: t.howto,
      onClose: () => setSheet(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        fullWidth: true,
        onClick: () => setSheet(null)
      }, t.got)
    }, /*#__PURE__*/React.createElement(Howto, {
      t: t
    })), /*#__PURE__*/React.createElement(BottomSheet, {
      open: sheet === "location",
      title: t.locTitle,
      onClose: () => setSheet(null),
      footer: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Button, {
        fullWidth: true,
        onClick: () => {
          setSheet(null);
          setToast(ar ? "نرتّب حسب المسافة" : "Sorting by distance");
        }
      }, t.locAllow), /*#__PURE__*/React.createElement(Button, {
        fullWidth: true,
        variant: "ghost",
        onClick: () => setSheet(null)
      }, t.locDeny))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--color-text-secondary)"
      }
    }, t.locBody)), /*#__PURE__*/React.createElement(Dialog, {
      open: dialog === "cancel",
      title: t.cancel,
      body: t.cancelBody,
      tone: "danger",
      cancelLabel: t.keep,
      confirmLabel: t.drop,
      onCancel: () => setDialog(null),
      onConfirm: () => {
        setDialog(null);
        setOrder(null);
        setScreen("browse");
        setTab("browse");
        setToast(t.cancelled);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "cap"
    }, caption))));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bugsha/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bugsha/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Bugsha app — screens. Mounted by kit.jsx; exported on window because Babel scripts don't share scope.
(function () {
  const NS = window.SurplusKWDesignSystem_97ec90;
  const {
    Logo,
    Button,
    IconButton,
    Icon,
    Chip,
    Badge,
    Input,
    SegmentedControl,
    Stepper,
    RatingStars,
    BagCard,
    CoverPlate,
    PriceTag,
    CountdownPill,
    PickupWindow,
    PaymentMethodRow,
    RedemptionCode,
    ImpactStat,
    Banner,
    EmptyState,
    Card,
    MapPin
  } = NS;
  /* Switch and ListRow are new; fall back to a local copy until the bundle recompiles. */
  const Switch = NS.Switch || function Switch({
    checked,
    onChange,
    label
  }) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "switch",
      "aria-checked": !!checked,
      "aria-label": label,
      onClick: () => onChange(!checked),
      style: {
        width: 46,
        height: 28,
        flex: "none",
        padding: 3,
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        border: "none",
        background: checked ? "var(--color-brand-primary)" : "var(--color-border-default)",
        display: "flex",
        justifyContent: checked ? "flex-end" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: "var(--radius-pill)",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,.2)"
      }
    }));
  };
  const ListRow = NS.ListRow || function ListRow({
    icon,
    label,
    value,
    chevron,
    onClick
  }) {
    const Tag = onClick ? "button" : "div";
    return /*#__PURE__*/React.createElement(Tag, {
      onClick: onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-150)",
        width: "100%",
        minHeight: 52,
        padding: "var(--space-150) var(--space-200)",
        textAlign: "start",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid var(--color-border-subtle)",
        color: "var(--color-text-primary)",
        font: "inherit",
        cursor: onClick ? "pointer" : "default"
      }
    }, icon && /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      style: {
        color: "var(--color-text-secondary)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: "var(--text-label-size)",
        fontWeight: 500
      }
    }, label), typeof value === "string" ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label-size)",
        color: "var(--color-text-secondary)"
      }
    }, value) : value, chevron && /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16,
      mirror: true,
      style: {
        color: "var(--color-text-tertiary)",
        flex: "none"
      }
    }));
  };
  const {
    bugshaCat: catLabel,
    bugshaMfmt: mfmt,
    bugshaKd: kd,
    bugshaSort: sortBags,
    BugshaBags: BAGS,
    BugshaPast: PAST
  } = window;
  const Num = ({
    children,
    ...r
  }) => /*#__PURE__*/React.createElement("span", _extends({
    className: "ds-numeric",
    dir: "ltr"
  }, r), children);
  const H = ({
    children,
    size = "var(--text-headline-size)",
    ...r
  }) => /*#__PURE__*/React.createElement("strong", _extends({
    style: {
      fontSize: size,
      fontWeight: 600,
      letterSpacing: "-0.015em"
    }
  }, r), children);
  function SectionHead({
    title,
    meta
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(H, null, title), meta ? /*#__PURE__*/React.createElement(Num, {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, meta) : null);
  }

  /* ---------- browse ---------- */
  function Header({
    t,
    ar,
    onFilter,
    onSearch,
    onLoc,
    filter,
    setFilter,
    count
  }) {
    const cats = [["all", t.all], ["bakery", t.bakery], ["meals", t.meals], ["cafe", t.cafe], ["grocery", t.grocery], ["sweets", t.sweets]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--color-surface-brand)",
        color: "#fff",
        padding: "16px 16px 12px",
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      lang: ar ? "ar" : "en",
      size: 20,
      color: "#fff",
      fold: "var(--color-surface-brand)",
      foldOpacity: 1
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onLoc,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        fontSize: "var(--text-label-size)",
        fontWeight: 500,
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15
    }), t.loc, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onSearch,
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        minHeight: 40,
        padding: "0 12px",
        cursor: "pointer",
        borderRadius: "var(--radius-control)",
        background: "var(--color-surface-raised)",
        border: "none",
        color: "var(--color-text-secondary)",
        fontSize: "var(--text-label-size)",
        textAlign: "start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, t.search)), /*#__PURE__*/React.createElement(IconButton, {
      icon: "funnel",
      label: t.filters,
      onClick: onFilter,
      size: 40,
      style: {
        background: "rgba(255,255,255,.2)",
        color: "#fff",
        borderRadius: "var(--radius-control)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        overflow: "auto",
        marginInline: -16,
        padding: "0 16px"
      }
    }, cats.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setFilter(k),
      style: {
        flex: "none",
        minHeight: 32,
        padding: "0 13px",
        borderRadius: "var(--radius-chip)",
        cursor: "pointer",
        border: "none",
        fontSize: "var(--text-caption-size)",
        fontWeight: 600,
        background: filter === k ? "#fff" : "rgba(255,255,255,.18)",
        color: filter === k ? "var(--color-brand-primary)" : "#fff"
      }
    }, l))), /*#__PURE__*/React.createElement(Num, {
      style: {
        fontSize: "var(--text-caption-size)",
        opacity: .85
      }
    }, t.bundles(count), " \xB7 ", t.nearest));
  }
  function Browse({
    t,
    ar,
    go,
    filter,
    setFilter,
    sort
  }) {
    const pool = sortBags(filter === "all" ? BAGS : BAGS.filter(b => b.cat === filter), sort);
    const soon = pool.filter(b => b.m <= 45),
      rest = pool.filter(b => b.m > 45);
    const hero = rest[0] || soon[0];
    const card = b => /*#__PURE__*/React.createElement(BagCard, {
      key: b.id,
      partner: ar ? b.pa : b.p,
      title: t.surprise,
      category: b.cat,
      cover: `../../assets/photos/${b.img}.png`,
      priceNow: b.now,
      priceWas: b.was,
      from: b.from,
      to: b.to,
      distanceKm: b.km,
      bagsLeft: b.left,
      rating: b.r,
      ratingCount: b.rc,
      minutesLeft: b.m,
      countdownFormat: mfmt(ar),
      leftFormat: t.left,
      tags: [catLabel(t, b.cat)],
      onClick: () => go({
        screen: "detail",
        bag: b
      })
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      t: t,
      ar: ar,
      filter: filter,
      setFilter: setFilter,
      count: pool.length,
      onFilter: () => go({
        sheet: "filters"
      }),
      onSearch: () => go({
        screen: "search"
      }),
      onLoc: () => go({
        sheet: "location"
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 16px 24px",
        display: "grid",
        gap: 12
      }
    }, pool.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
      icon: "shopping-bag",
      title: t.empty,
      body: t.emptyBody,
      actionLabel: t.clear,
      onAction: () => setFilter("all")
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, soon.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
      title: t.closing,
      meta: "< 45 min"
    }), soon.map(b => /*#__PURE__*/React.createElement(BagCard, {
      key: b.id,
      layout: "row",
      partner: ar ? b.pa : b.p,
      title: t.surprise,
      category: b.cat,
      cover: `../../assets/photos/${b.img}.png`,
      priceNow: b.now,
      priceWas: b.was,
      from: b.from,
      to: b.to,
      distanceKm: b.km,
      bagsLeft: b.left,
      rating: b.r,
      minutesLeft: b.m,
      countdownFormat: mfmt(ar),
      leftFormat: t.left,
      onClick: () => go({
        screen: "detail",
        bag: b
      })
    }))) : null, hero ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
      title: t.tonight,
      meta: t.bundles(rest.length)
    }), rest.map(card)) : null), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 6,
        background: "var(--color-brand-tint)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement(H, {
      size: "var(--text-label-size)"
    }, t.howto), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-text-secondary)",
        fontSize: "var(--text-caption-size)"
      }
    }, t.steps[0][1]), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go({
        sheet: "howto"
      }),
      style: {
        justifySelf: "start",
        paddingInline: 0
      }
    }, t.howto, " \u2192"))));
  }

  /* ---------- search ---------- */
  function Search({
    t,
    ar,
    go
  }) {
    const [q, setQ] = React.useState("");
    const hits = q ? BAGS.filter(b => (ar ? b.pa : b.p).toLowerCase().includes(q.toLowerCase())) : BAGS.slice(0, 3);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 0,
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        padding: "14px 16px",
        background: "var(--color-surface-raised)",
        borderBottom: "1px solid var(--color-border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      mirror: true,
      onClick: () => go({
        screen: "browse"
      })
    }), /*#__PURE__*/React.createElement(Input, {
      autoFocus: true,
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: t.search,
      icon: "search",
      style: {
        flex: 1
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 16px",
        display: "grid",
        gap: 8
      }
    }, hits.map(b => /*#__PURE__*/React.createElement("button", {
      key: b.id,
      onClick: () => go({
        screen: "detail",
        bag: b
      }),
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        background: "none",
        border: "none",
        padding: "8px 0",
        cursor: "pointer",
        textAlign: "start"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `../../assets/photos/${b.img}.png`,
      alt: "",
      width: "48",
      height: "48",
      style: {
        borderRadius: "var(--radius-image)",
        objectFit: "cover",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        gap: 2,
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, ar ? b.pa : b.p), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, catLabel(t, b.cat), " \xB7 ", /*#__PURE__*/React.createElement(Num, null, b.km, " km"))), /*#__PURE__*/React.createElement(PriceTag, {
      now: b.now,
      was: b.was
    }))), q && !hits.length ? /*#__PURE__*/React.createElement(EmptyState, {
      icon: "search",
      title: t.empty,
      body: t.emptyBody
    }) : null));
  }

  /* ---------- detail ---------- */
  function Detail({
    t,
    ar,
    b,
    qty,
    setQty,
    method,
    setMethod,
    go,
    paying,
    onPay
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CoverPlate, {
      src: `../../assets/photos/${b.img}.png`,
      category: b.cat,
      height: 200,
      radius: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        insetInlineStart: 12,
        top: 14
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      variant: "solid",
      size: 38,
      mirror: true,
      onClick: () => go({
        screen: "browse"
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        insetInlineEnd: 12,
        top: 14,
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "share-2",
      label: "Share",
      variant: "solid",
      size: 38
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "heart",
      label: "Save",
      variant: "solid",
      size: 38
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        insetInlineStart: 16,
        bottom: 14,
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, catLabel(t, b.cat)), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, t.perDay))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "grid",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-title-lg-size)",
        fontWeight: 600,
        letterSpacing: "-0.02em"
      }
    }, ar ? b.pa : b.p), /*#__PURE__*/React.createElement(RatingStars, {
      value: b.r,
      count: b.rc
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.listedAt, " ", /*#__PURE__*/React.createElement(Num, null, b.listed), " \xB7 ", b.left <= 1 ? t.one : t.left(b.left))), /*#__PURE__*/React.createElement(CountdownPill, {
      minutesLeft: b.m,
      format: mfmt(ar)
    })), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(PickupWindow, {
      day: ar ? "الليلة" : "Tonight",
      from: b.from,
      to: b.to,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: "var(--text-label-size)",
        color: "var(--color-text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 15
    }), /*#__PURE__*/React.createElement(Num, null, b.km, " km"), " \xB7 ", ar ? "قطعة 10، السالمية" : "Block 10, Salmiya", /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        marginInlineStart: "auto",
        paddingInline: 0
      }
    }, t.directions)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.collectBody)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(H, null, t.inside), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--color-text-secondary)"
      }
    }, t.insideBody), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginTop: 2
      }
    }, t.dietary.map(d => /*#__PURE__*/React.createElement(Chip, {
      key: d
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12,
        padding: "14px 0",
        borderTop: "1px solid var(--color-border-subtle)",
        borderBottom: "1px solid var(--color-border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement(PriceTag, {
      now: b.now * qty,
      was: b.was * qty,
      size: "lg"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.worth, " ", /*#__PURE__*/React.createElement(Num, null, kd(b.was * qty)), " \xB7 ", t.save, " ", /*#__PURE__*/React.createElement(Num, null, kd((b.was - b.now) * qty)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 4,
        justifyItems: "end"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.qty), /*#__PURE__*/React.createElement(Stepper, {
      value: qty,
      max: b.left,
      onChange: setQty
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PaymentMethodRow, {
      method: "knet",
      selected: method === "knet",
      onSelect: () => setMethod("knet"),
      label: ar ? "كي-نت" : undefined,
      hint: ar ? "يفتح صفحة بنكك" : undefined
    }), /*#__PURE__*/React.createElement(PaymentMethodRow, {
      method: "applepay",
      selected: method === "applepay",
      onSelect: () => setMethod("applepay"),
      hint: ar ? "بصمة الوجه" : undefined
    })), paying ? /*#__PURE__*/React.createElement(Banner, {
      tone: "info",
      title: t.paying
    }, t.payNote) : null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      loading: paying,
      onClick: onPay
    }, method === "knet" ? t.payKnet : t.payApple, " \xB7 ", /*#__PURE__*/React.createElement(Num, null, kd(b.now * qty)))));
  }

  /* ---------- map tab ---------- */
  function MapTab({
    t,
    ar,
    go,
    sel,
    setSel
  }) {
    const b = BAGS[sel];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "100%",
        display: "grid",
        gridTemplateRows: "1fr auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        background: "var(--color-surface-sunken)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      },
      "aria-hidden": "true"
    }, [14, 32, 50, 68, 86].map(y => /*#__PURE__*/React.createElement("line", {
      key: y,
      x1: "0",
      y1: y,
      x2: "100",
      y2: y,
      stroke: "var(--color-border-subtle)",
      strokeWidth: ".6"
    })), [12, 34, 56, 78].map(x => /*#__PURE__*/React.createElement("line", {
      key: x,
      x1: x,
      y1: "0",
      x2: x,
      y2: "100",
      stroke: "var(--color-border-subtle)",
      strokeWidth: ".6"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M0 78 L34 78 L34 100",
      stroke: "var(--color-border-default)",
      strokeWidth: "1.6",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M56 0 L56 44 L100 44",
      stroke: "var(--color-border-default)",
      strokeWidth: "1.6",
      fill: "none"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        insetInline: 12,
        top: 12,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        minHeight: 40,
        padding: "0 12px",
        borderRadius: "var(--radius-control)",
        background: "var(--color-surface-raised)",
        boxShadow: "var(--elevation-card)",
        fontSize: "var(--text-label-size)",
        color: "var(--color-text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15
    }), t.loc), /*#__PURE__*/React.createElement(IconButton, {
      icon: "funnel",
      label: t.filters,
      variant: "solid",
      size: 40,
      onClick: () => go({
        sheet: "filters"
      })
    })), BAGS.map((x, i) => /*#__PURE__*/React.createElement("span", {
      key: x.id,
      style: {
        position: "absolute",
        insetInlineStart: `${x.x}%`,
        top: `${x.y}%`,
        transform: "translate(-50%,-50%)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setSel(i),
      "aria-label": ar ? x.pa : x.p,
      style: {
        all: "unset",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(MapPin, {
      price: x.now,
      selected: i === sel,
      soldOut: x.left === 0
    })))), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        insetInlineEnd: 12,
        bottom: 12
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "navigation",
      label: t.directions,
      variant: "solid",
      size: 40
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 12px 14px",
        background: "var(--color-surface-canvas)",
        borderTop: "1px solid var(--color-border-subtle)",
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Num, {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.pins(BAGS.length)), /*#__PURE__*/React.createElement(BagCard, {
      layout: "row",
      partner: ar ? b.pa : b.p,
      title: t.surprise,
      category: b.cat,
      cover: `../../assets/photos/${b.img}.png`,
      priceNow: b.now,
      priceWas: b.was,
      from: b.from,
      to: b.to,
      distanceKm: b.km,
      bagsLeft: b.left,
      rating: b.r,
      minutesLeft: b.m,
      countdownFormat: mfmt(ar),
      onClick: () => go({
        screen: "detail",
        bag: b
      })
    })));
  }

  /* ---------- orders ---------- */
  function Orders({
    t,
    ar,
    order,
    go,
    onOpen
  }) {
    const [tab, setTab] = React.useState("active");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 0,
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 16px 10px",
        background: "var(--color-surface-raised)",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(H, {
      size: "var(--text-title-size)"
    }, t.tabs[2]), /*#__PURE__*/React.createElement(SegmentedControl, {
      fullWidth: true,
      value: tab,
      onChange: setTab,
      options: [{
        value: "active",
        label: t.active
      }, {
        value: "past",
        label: t.past
      }]
    })), tab === "active" ? order ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onOpen,
      style: {
        all: "unset",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, ar ? order.bag.pa : order.bag.p), /*#__PURE__*/React.createElement(Badge, {
      tone: order.state === "redeemed" ? "fresh" : "time"
    }, order.state === "redeemed" ? t.collected : t.reserved)), /*#__PURE__*/React.createElement(PickupWindow, {
      day: ar ? "الليلة" : "Tonight",
      from: order.bag.from,
      to: order.bag.to
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Num, {
      style: {
        fontSize: "var(--text-title-size)",
        fontWeight: 600
      }
    }, order.code), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, t.code))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "28px 16px"
      }
    }, /*#__PURE__*/React.createElement(EmptyState, {
      icon: "shopping-bag",
      title: t.noOrders,
      body: t.noOrdersBody,
      actionLabel: t.browseCta,
      onAction: () => go({
        screen: "browse",
        tab: "browse"
      })
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "grid",
        gap: 8
      }
    }, PAST.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      padded: true,
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, ar ? p.pa : p.p), /*#__PURE__*/React.createElement(Num, {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, ar ? p.dateAr : p.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(RatingStars, {
      value: p.rated,
      size: 15
    }), /*#__PURE__*/React.createElement(PriceTag, {
      now: p.now,
      was: p.was
    }))))));
  }

  /* ---------- order + redemption ---------- */
  function Order({
    t,
    ar,
    order,
    go,
    onRedeem,
    onRate,
    rated,
    told,
    onTell
  }) {
    const b = order.bag,
      done = order.state === "redeemed";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 16px 24px",
        display: "grid",
        gap: 14,
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      mirror: true,
      onClick: () => go({
        screen: "browse",
        tab: "orders"
      })
    }), /*#__PURE__*/React.createElement(H, null, done ? t.collected : t.reserved), /*#__PURE__*/React.createElement(IconButton, {
      icon: "info",
      label: t.help
    })), !done ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        textAlign: "center",
        color: "var(--color-text-secondary)"
      }
    }, t.code) : null, /*#__PURE__*/React.createElement(RedemptionCode, {
      code: order.code,
      partner: ar ? b.pa : b.p,
      window: `${b.from}–${b.to}`,
      quantity: order.qty,
      state: order.state,
      onRedeem: onRedeem,
      bagLabel: ar ? "بقشة" : undefined,
      slideLabel: ar ? "اسحب لما الموظف يكون جاهز" : undefined,
      doneLabel: ar ? "تم الاستلام" : undefined
    }), !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CountdownPill, {
      minutesLeft: 26,
      state: "reserved",
      format: mfmt(ar),
      style: {
        justifySelf: "center"
      }
    }), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PickupWindow, {
      day: ar ? "الليلة" : "Tonight",
      from: b.from,
      to: b.to,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: "var(--text-label-size)",
        color: "var(--color-text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 15
    }), /*#__PURE__*/React.createElement(Num, null, b.km, " km"), " \xB7 ", ar ? "قطعة 10، السالمية" : "Block 10, Salmiya", /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      style: {
        marginInlineStart: "auto"
      }
    }, t.directions))), /*#__PURE__*/React.createElement(Banner, {
      tone: told ? "fresh" : "time",
      title: told ? t.told : t.late,
      action: told ? undefined : /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary",
        onClick: onTell
      }, t.tell)
    }, told ? undefined : t.lateBody), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go({
        dialog: "cancel"
      })
    }, t.drop)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "shopping-bag",
      value: 12,
      unit: ar ? "بقشة" : "bundles",
      label: t.rescued
    }), /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "wallet",
      value: "KD 41",
      tone: "brand",
      label: t.kept
    })), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 10,
        justifyItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label-size)",
        color: "var(--color-text-secondary)"
      }
    }, rated ? t.thanks : t.rate), /*#__PURE__*/React.createElement(RatingStars, {
      value: rated || 0,
      size: 28,
      onRate: onRate
    }), rated ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      placeholder: t.reviewPh,
      style: {
        width: "100%"
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, t.sendReview)) : null)));
  }

  /* ---------- me ---------- */
  function Me({
    t,
    ar,
    lang,
    setLang,
    dark,
    setDark,
    go
  }) {
    const [notif, setNotif] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 0,
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--color-surface-brand)",
        color: "#fff",
        padding: "18px 16px 20px",
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "var(--radius-control)",
        background: "rgba(255,255,255,.22)",
        display: "grid",
        placeItems: "center",
        fontWeight: 600,
        fontSize: 18
      }
    }, ar ? "ن" : "N"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-title-size)",
        fontWeight: 600
      }
    }, t.me), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        opacity: .85
      }
    }, t.member)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(H, null, t.impact), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "shopping-bag",
      value: 12,
      label: t.rescued
    }), /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "wallet",
      value: "KD 41",
      tone: "brand",
      label: t.kept
    }), /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "leaf",
      value: 26,
      label: t.co2
    })), /*#__PURE__*/React.createElement(H, null, t.settings), /*#__PURE__*/React.createElement(Card, {
      style: {
        display: "grid",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(ListRow, {
      icon: "languages",
      label: t.lang,
      value: /*#__PURE__*/React.createElement(SegmentedControl, {
        value: lang,
        onChange: setLang,
        options: [{
          value: "en",
          label: "EN"
        }, {
          value: "ar",
          label: "ع"
        }]
      })
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "moon",
      label: t.theme,
      value: /*#__PURE__*/React.createElement(SegmentedControl, {
        value: dark ? "dark" : "light",
        onChange: v => setDark(v === "dark"),
        options: [{
          value: "light",
          label: t.light
        }, {
          value: "dark",
          label: t.dark
        }]
      })
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "bell",
      label: t.notifs,
      value: /*#__PURE__*/React.createElement(Switch, {
        checked: notif,
        onChange: setNotif,
        label: t.notifs
      })
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "credit-card",
      label: t.payment,
      value: "KNET",
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "info",
      label: t.howto,
      chevron: true,
      onClick: () => go({
        sheet: "howto"
      })
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "circle-help",
      label: t.help,
      chevron: true
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "file-text",
      label: t.terms,
      chevron: true
    }))));
  }
  Object.assign(window, {
    BugshaScreens: {
      Browse,
      Search,
      Detail,
      MapTab,
      Orders,
      Order,
      Me,
      SectionHead,
      Num
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bugsha/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cold-chain/kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const mfmt = ar => m => ar ? m >= 60 ? "باقي " + Math.floor(m / 60) + " س " + m % 60 + " د" : "باقي " + m + " دقيقة" : m >= 60 ? Math.floor(m / 60) + "h " + m % 60 + "m left" : m + " min left";
  const RC = ar => ar ? {
    bagLabel: "كيس",
    slideLabel: "اسحب لما الموظف يكون جاهز",
    doneLabel: "تم الاستلام"
  } : {};
  const {
    Badge,
    Button,
    Chip,
    CountdownPill,
    PriceTag,
    PickupWindow,
    Icon,
    IconButton,
    Input,
    BagCard,
    SegmentedControl,
    TabBar,
    RatingStars,
    RedemptionCode,
    PaymentMethodRow,
    Stepper,
    Banner,
    ImpactStat,
    Card
  } = window.SurplusKWDesignSystem_97ec90;
  const COPY = {
    en: {
      dir: "ltr",
      loc: "Salmiya · 5 km",
      head: "12 bags live near Salmiya",
      sub: "Updated 21:06 · refreshed every 60s",
      search: "Search partners",
      inside: "Contents & handling",
      tabs: ["Bags", "Map", "Orders", "Me"],
      chain: "Chain of custody",
      reserve: "Reserve",
      code: "Order code",
      listed: "Listed",
      closes: "Closes",
      temp: "Held chilled ≤ 5°C",
      cert: "PAFN licence 2019/4471"
    },
    ar: {
      dir: "rtl",
      loc: "السالمية · ٥ كم",
      head: "١٢ كيس متاح قرب السالمية",
      sub: "آخر تحديث ٢١:٠٦ · يتحدث كل ٦٠ ثانية",
      search: "ابحث عن شريك",
      inside: "المحتويات والتداول",
      tabs: ["الأكياس", "خريطة", "طلباتي", "حسابي"],
      chain: "سلسلة العهدة",
      reserve: "احجز",
      code: "رمز الطلب",
      listed: "وقت الإدراج",
      closes: "يغلق",
      temp: "محفوظ مبرّد ≤ ٥°م",
      cert: "ترخيص الهيئة ٢٠١٩/٤٤٧١"
    }
  };
  const ROWS = [{
    p: "Kuwait Bakehouse",
    pa: "مخبز الكويت",
    c: "bakery",
    now: 2,
    was: 6.5,
    from: "21:30",
    to: "22:30",
    km: 1.4,
    left: 2,
    r: 4.7,
    rc: 218,
    m: 42,
    listed: "21:04"
  }, {
    p: "Beit Beirut",
    pa: "بيت بيروت",
    c: "meals",
    now: 3,
    was: 9,
    from: "22:00",
    to: "23:00",
    km: 2.1,
    left: 5,
    r: 4.5,
    rc: 96,
    m: 88,
    listed: "20:58"
  }, {
    p: "Co-op Jabriya",
    pa: "جمعية الجابرية",
    c: "grocery",
    now: 1.5,
    was: 5,
    from: "20:00",
    to: "21:00",
    km: 0.8,
    left: 9,
    r: 4.2,
    rc: 77,
    m: 150,
    listed: "19:41"
  }, {
    p: "Slider Station",
    pa: "سلايدر ستيشن",
    c: "meals",
    now: 2.5,
    was: 7,
    from: "22:30",
    to: "23:30",
    km: 3.4,
    left: 1,
    r: 4.8,
    rc: 412,
    m: 11,
    listed: "21:02"
  }];
  function Field({
    k,
    v,
    mono = true
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro-size)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: "var(--color-text-tertiary)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      className: mono ? "ds-numeric" : "",
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, v));
  }
  function Browse({
    t,
    ar
  }) {
    const [v, setV] = React.useState("list");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 2,
        background: "var(--color-surface-raised)",
        borderBottom: "1px solid var(--color-border-default)",
        padding: "18px 16px 12px",
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontWeight: 600,
        fontSize: "var(--text-label-size)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), t.loc), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      dir: "ltr",
      style: {
        unicodeBidi: "isolate",
        fontSize: "var(--text-micro-size)",
        color: "var(--color-fresh)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 12
    }), "21:06")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-title-lg-size)",
        lineHeight: "var(--text-title-lg-line)",
        fontWeight: 600,
        letterSpacing: 0
      }
    }, t.head), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.sub), /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: t.search
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      fullWidth: true,
      value: v,
      onChange: setV,
      options: [{
        value: "list",
        label: ar ? "قائمة" : "List"
      }, {
        value: "map",
        label: ar ? "خريطة" : "Map"
      }]
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "funnel",
      label: "Filter",
      variant: "outline"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        padding: "12px 16px 24px"
      }
    }, ROWS.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.p,
      style: {
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-card)",
        background: "var(--color-surface-raised)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-headline-size)",
        fontWeight: 600,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, ar ? b.pa : b.p), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      dir: "ltr",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        minWidth: 0,
        unicodeBidi: "isolate",
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)",
        whiteSpace: "nowrap",
        overflow: "hidden"
      }
    }, b.from, "\u2013", b.to, " \xB7 ", b.km, " km \xB7", /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 12,
      style: {
        fill: "currentColor"
      }
    }), b.r)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(PriceTag, {
      now: b.now,
      was: b.was
    }), /*#__PURE__*/React.createElement(CountdownPill, {
      format: mfmt(ar),
      minutesLeft: b.m
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 8,
        padding: "10px 14px",
        borderTop: "1px solid var(--color-border-subtle)",
        background: "var(--color-surface-canvas)"
      }
    }, /*#__PURE__*/React.createElement(Field, {
      k: t.listed,
      v: b.listed
    }), /*#__PURE__*/React.createElement(Field, {
      k: t.closes,
      v: b.to
    }), /*#__PURE__*/React.createElement(Field, {
      k: ar ? "متبقي" : "Left",
      v: b.left + ""
    }))))));
  }
  function Detail({
    t,
    ar
  }) {
    const b = ROWS[0];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 16px",
        borderBottom: "1px solid var(--color-border-default)",
        background: "var(--color-surface-raised)",
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      mirror: true
    }), /*#__PURE__*/React.createElement(CountdownPill, {
      format: mfmt(ar),
      minutesLeft: b.m
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-title-lg-size)",
        fontWeight: 600,
        letterSpacing: 0
      }
    }, ar ? b.pa : b.p), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(RatingStars, {
      value: b.r,
      count: b.rc
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "fresh"
    }, t.temp))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PickupWindow, {
      day: ar ? "الليلة" : "Tonight",
      from: b.from,
      to: b.to,
      size: "lg",
      note: ar ? "ممر السيارات مفتوح" : "Drive-up lane open"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Field, {
      k: t.listed,
      v: "21:04"
    }), /*#__PURE__*/React.createElement(Field, {
      k: ar ? "المسافة" : "Distance",
      v: b.km + " km"
    }), /*#__PURE__*/React.createElement(Field, {
      k: ar ? "متبقي" : "Bags left",
      v: b.left + ""
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-headline-size)",
        fontWeight: 600,
        marginBottom: 6
      }
    }, t.inside), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--color-text-secondary)"
      }
    }, ar ? "معجنات وخبز من إنتاج اليوم. تُحفظ في درجة حرارة الغرفة وتُسلَّم خلال ٩٠ دقيقة من الإغلاق." : "Same-day pastry and bread. Held at ambient, handed over within 90 minutes of window close.")), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, t.chain), [["21:04", ar ? "أدرج الشريك ٦ أكياس" : "Partner listed 6 bags"], ["21:06", ar ? "تأكيد التداول من المدير" : "Shift manager attested handling"], ["22:30", ar ? "إغلاق النافذة" : "Window closes"]].map(([time, label]) => /*#__PURE__*/React.createElement("div", {
      key: time,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)",
        width: 44
      }
    }, time), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: "var(--color-fresh)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label-size)"
      }
    }, label))), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: "var(--text-micro-size)",
        color: "var(--color-text-tertiary)"
      }
    }, t.cert)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PaymentMethodRow, {
      method: "knet",
      selected: true
    }), /*#__PURE__*/React.createElement(PaymentMethodRow, {
      method: "card"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      value: 1,
      max: b.left,
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true
    }, t.reserve, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric"
    }, "KD ", b.now.toFixed(3))))));
  }
  function Redeem({
    t,
    ar
  }) {
    const b = ROWS[0];
    const [done, setDone] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 16px",
        display: "grid",
        gap: 14,
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      mirror: true
    }), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-headline-size)",
        fontWeight: 600
      }
    }, t.code), /*#__PURE__*/React.createElement(IconButton, {
      icon: "info",
      label: "Help"
    })), /*#__PURE__*/React.createElement(RedemptionCode, _extends({}, RC(ar), {
      code: "KW-4821",
      partner: ar ? b.pa : b.p,
      window: b.from + "–" + b.to,
      quantity: 1,
      state: done ? "redeemed" : "ready",
      onRedeem: () => setDone(true)
    })), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      k: ar ? "رقم الطلب" : "Order",
      v: "KW-4821"
    }), /*#__PURE__*/React.createElement(Field, {
      k: ar ? "وقت الحجز" : "Reserved",
      v: "21:07"
    }), /*#__PURE__*/React.createElement(Field, {
      k: t.closes,
      v: "22:30"
    }), /*#__PURE__*/React.createElement(Field, {
      k: ar ? "المدفوع" : "Paid",
      v: "KD 2.000"
    })), /*#__PURE__*/React.createElement(Banner, {
      tone: "time",
      title: ar ? "باقي ٢٦ دقيقة" : "26 minutes left"
    }, ar ? "لو تأخرت، خبّر الشريك من هني." : "Running late? Tell the partner from here."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "shopping-bag",
      value: 12,
      unit: ar ? "وجبة" : "meals",
      label: ar ? "منذ مارس" : "since March"
    }), /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "wallet",
      value: "KD 41",
      tone: "brand",
      label: ar ? "وفّرتها" : "saved"
    })));
  }
  function App() {
    const [lang, setLang] = React.useState("en");
    const t = COPY[lang];
    const ar = lang === "ar";
    const [dark, setDark] = React.useState(false);
    const [tab, setTab] = React.useState("browse");
    React.useEffect(() => {
      document.body.dataset.theme = dark ? "dark" : "light";
      document.body.dir = t.dir;
    }, [dark, lang]);
    const frame = (el, cap, tb) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "phone",
      dir: t.dir
    }, /*#__PURE__*/React.createElement("div", {
      className: "scroll"
    }, el), /*#__PURE__*/React.createElement(TabBar, {
      value: tb,
      onChange: setTab,
      items: t.tabs.map((l, i) => ({
        value: ["browse", "map", "orders", "me"][i],
        label: l,
        icon: ["list", "map", "shopping-bag", "user"][i],
        badge: i === 2 ? 1 : undefined
      }))
    })), /*#__PURE__*/React.createElement("div", {
      className: "caption"
    }, cap));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        justifyContent: "center",
        padding: "16px 0 0"
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: lang,
      onChange: setLang,
      options: [{
        value: "en",
        label: "EN"
      }, {
        value: "ar",
        label: "ع"
      }]
    }), /*#__PURE__*/React.createElement(SegmentedControl, {
      value: dark ? "dark" : "light",
      onChange: v => setDark(v === "dark"),
      options: [{
        value: "light",
        label: "Light"
      }, {
        value: "dark",
        label: "Dark"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stagewrap"
    }, frame(/*#__PURE__*/React.createElement(Browse, {
      t: t,
      ar: ar
    }), "Browse", tab), frame(/*#__PURE__*/React.createElement(Detail, {
      t: t,
      ar: ar
    }), "Bag detail", tab), frame(/*#__PURE__*/React.createElement(Redeem, {
      t: t,
      ar: ar
    }), "Redemption", "orders")));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cold-chain/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.jsx
try { (() => {
// Bugsha marketing site — route table.
(function () {
  const ROUTES = {
    "/": () => window.SiteHome,
    "/how-it-works": () => window.SiteHowItWorks,
    "/partners": () => window.SitePartners,
    "/impact": () => window.SiteImpact
  };
  function App() {
    const route = window.useSiteRoute();
    const first = React.useRef(true);
    // Back/forward and direct hash edits land at the previous scroll offset; reset like a real page load.
    React.useEffect(() => {
      if (first.current) {
        first.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [route]);
    const Page = (ROUTES[route] || ROUTES["/"])();
    return /*#__PURE__*/React.createElement(Page, {
      key: route
    });
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/home.jsx
try { (() => {
// Bugsha marketing site — home page, ported from the website repo (app/page.tsx).
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const {
    SITE_ASSET: ASSET,
    SiteLink: A,
    Arrow,
    BrandMark,
    CookieReveal,
    DownloadSection,
    MotionProvider,
    ScreenPhone,
    SiteFooter,
    SiteHeader
  } = window;
  const bagBouquet = [{
    name: "baguette",
    start: .08,
    end: .36,
    x: -72,
    lift: 260,
    finalY: 2,
    rotateFrom: 1,
    rotateTo: -5,
    scaleFrom: .92,
    scaleTo: .98
  }, {
    name: "flatbread",
    start: .15,
    end: .44,
    x: 4,
    lift: 250,
    finalY: 10,
    rotateFrom: -2,
    rotateTo: 1,
    scaleFrom: .91,
    scaleTo: .97
  }, {
    name: "croissant",
    start: .24,
    end: .53,
    x: -54,
    lift: 220,
    finalY: 14,
    rotateFrom: 1,
    rotateTo: -3,
    scaleFrom: .93,
    scaleTo: 1
  }, {
    name: "coffee",
    start: .33,
    end: .61,
    x: 55,
    lift: 205,
    finalY: 17,
    rotateFrom: -2,
    rotateTo: 3,
    scaleFrom: .92,
    scaleTo: .98
  }, {
    name: "salad",
    start: .41,
    end: .69,
    x: 68,
    lift: 225,
    finalY: 14,
    rotateFrom: -1,
    rotateTo: 2,
    scaleFrom: .92,
    scaleTo: 1
  }, {
    name: "orange",
    start: .50,
    end: .76,
    x: 4,
    lift: 160,
    finalY: 18,
    rotateFrom: -1,
    rotateTo: 1,
    scaleFrom: .92,
    scaleTo: 1.02
  }];
  const appSteps = [{
    n: "01",
    kicker: "Discover",
    title: "See what is available tonight.",
    body: "Browse live bundles nearby with the pickup time, distance and original value clearly shown.",
    src: "browse-en.png"
  }, {
    n: "02",
    kicker: "Reserve",
    title: "Choose before it goes.",
    body: "Reserve and pay securely in the app. Your Bugsha stays held until the pickup window closes.",
    src: "detail-en.png"
  }, {
    n: "03",
    kicker: "Collect",
    title: "Show the code. Take it home.",
    body: "A simple collection code keeps pickup quick—no cash and no waiting around.",
    src: "code-en.png"
  }];
  const faqs = [["When does Bugsha launch?", "This is our first launch—Bugsha has not opened anywhere yet. We are signing up our first partner kitchens in Kuwait and Egypt now and will open city by city. Join the waitlist and we will email you before yours goes live; waitlist members get access first."], ["What is actually inside a Bugsha?", "Whatever that kitchen made today and has left at closing. You see the category, dietary tags and value before paying; the exact mix remains a nightly surprise."], ["Is the food safe?", "It is the same food prepared for sale earlier that day, packed by the kitchen team and collected within a clearly defined pickup window."], ["Can I choose the contents?", "You can filter by food type and dietary information, but the kitchen chooses the exact contents. That flexibility is what makes the value possible."], ["How do I pay?", "Reserve securely in the app with KNET, Apple Pay or card. Nothing is paid at the counter."]];
  function useBagScrollScene() {
    useEffect(() => {
      const section = document.querySelector("[data-bag-section]");
      const scene = section && section.querySelector(".bag-scene");
      if (!section || !scene) return;
      const clamp01 = v => Math.max(0, Math.min(1, v));
      const easeOutCubic = v => 1 - Math.pow(1 - v, 3);
      const easeInOutCubic = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
      const items = Array.from(section.querySelectorAll("[data-bag-item]")).map(node => ({
        node,
        start: Number(node.dataset.start || 0),
        end: Number(node.dataset.end || 1),
        x: Number(node.dataset.x || 0),
        lift: Number(node.dataset.lift || 0),
        finalY: Number(node.dataset.finalY || 0),
        rotateFrom: Number(node.dataset.rotateFrom || 0),
        rotateTo: Number(node.dataset.rotateTo || 0),
        scaleFrom: Number(node.dataset.scaleFrom || 1),
        scaleTo: Number(node.dataset.scaleTo || 1)
      }));
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let frameId = 0,
        motionScale = 1,
        layoutDirty = true,
        scrollDirty = true;
      let targetProgress = 0,
        renderedProgress = 0,
        previousTime = performance.now();
      const measure = () => {
        motionScale = scene.offsetWidth / 650;
        layoutDirty = false;
      };
      const getProgress = () => {
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        return clamp01(-rect.top / travel);
      };
      const render = progress => {
        const reactionLocal = clamp01((progress - .06) / .24);
        const reaction = reactionLocal > 0 && reactionLocal < 1 ? Math.sin(reactionLocal * Math.PI) : 0;
        scene.style.transform = `translate3d(0,${(reaction * 4).toFixed(2)}px,0) scale3d(1,${(1 - reaction * .015).toFixed(5)},1)`;
        section.style.setProperty("--bag-shadow-scale", (1 - reaction * .035).toFixed(4));
        section.style.setProperty("--bag-progress", progress.toFixed(4));
        const settleLocal = clamp01((progress - .76) / .12);
        const settleLift = settleLocal > 0 && settleLocal < 1 ? -Math.sin(settleLocal * Math.PI) * 2.2 * motionScale : 0;
        items.forEach((item, index) => {
          const local = clamp01((progress - item.start) / Math.max(.001, item.end - item.start));
          const riseProgress = easeInOutCubic(local);
          const detailProgress = easeOutCubic(local);
          const xProgress = easeInOutCubic(clamp01((local - .14) / .86));
          const x = item.x * xProgress * motionScale;
          const y = ((1 - riseProgress) * item.lift + item.finalY) * motionScale + settleLift * (1 - index * .04);
          const rotation = item.rotateFrom + (item.rotateTo - item.rotateFrom) * detailProgress;
          const scale = item.scaleFrom + (item.scaleTo - item.scaleFrom) * detailProgress;
          item.node.style.transform = `translate3d(-50%,${y.toFixed(2)}px,0) translate3d(${x.toFixed(2)}px,0,0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
          item.node.style.opacity = "1";
        });
      };
      const tick = time => {
        if (layoutDirty) measure();
        if (scrollDirty) {
          targetProgress = reduced ? 1 : getProgress();
          scrollDirty = false;
        }
        const elapsed = Math.min(48, Math.max(8, time - previousTime));
        previousTime = time;
        const blend = reduced ? 1 : 1 - Math.exp(-elapsed / 38);
        renderedProgress += (targetProgress - renderedProgress) * blend;
        if (Math.abs(targetProgress - renderedProgress) < .00008) renderedProgress = targetProgress;
        render(reduced ? 1 : renderedProgress);
        frameId = renderedProgress !== targetProgress || scrollDirty ? requestAnimationFrame(tick) : 0;
      };
      const schedule = () => {
        scrollDirty = true;
        if (!frameId) {
          previousTime = performance.now();
          frameId = requestAnimationFrame(tick);
        }
      };
      const handleResize = () => {
        layoutDirty = true;
        schedule();
      };
      measure();
      targetProgress = reduced ? 1 : getProgress();
      renderedProgress = targetProgress;
      render(renderedProgress);
      const ro = new ResizeObserver(handleResize);
      ro.observe(scene);
      window.addEventListener("scroll", schedule, {
        passive: true
      });
      window.addEventListener("resize", handleResize, {
        passive: true
      });
      return () => {
        cancelAnimationFrame(frameId);
        ro.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  }
  function useSharedTableScene() {
    useEffect(() => {
      const section = document.querySelector("[data-shared-story]");
      const media = section && section.querySelector("[data-shared-media]");
      const shade = section && section.querySelector("[data-shared-shade]");
      const intro = section && section.querySelector("[data-shared-intro]");
      const copy = section && section.querySelector("[data-shared-copy]");
      if (!section || !media || !shade || !intro || !copy) return;
      const clamp01 = v => Math.max(0, Math.min(1, v));
      const easeInOut = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let frameId = 0,
        startScale = .72,
        startY = 54;
      const measure = () => {
        const s = getComputedStyle(section);
        startScale = Number(s.getPropertyValue("--shared-start-scale")) || .72;
        startY = Number(s.getPropertyValue("--shared-start-y")) || 54;
      };
      const render = () => {
        frameId = 0;
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        const progress = reduced ? 1 : clamp01(-rect.top / travel);
        const mediaProgress = easeInOut(clamp01(progress / .72));
        const introProgress = easeInOut(clamp01(progress / .30));
        const copyProgress = easeInOut(clamp01((progress - .36) / .36));
        const scale = startScale + (1.035 - startScale) * mediaProgress;
        media.style.transform = `translate3d(0,${((1 - mediaProgress) * startY).toFixed(2)}px,0) scale(${scale.toFixed(5)})`;
        intro.style.opacity = (1 - introProgress).toFixed(4);
        intro.style.transform = `translate3d(-50%,${(-50 - introProgress * 18).toFixed(2)}%,0)`;
        copy.style.opacity = copyProgress.toFixed(4);
        copy.style.transform = `translate3d(0,${((1 - copyProgress) * 30).toFixed(2)}px,0)`;
        shade.style.opacity = (.12 + copyProgress * .46).toFixed(3);
      };
      const schedule = () => {
        if (!frameId) frameId = requestAnimationFrame(render);
      };
      const resize = () => {
        measure();
        schedule();
      };
      measure();
      render();
      window.addEventListener("scroll", schedule, {
        passive: true
      });
      window.addEventListener("resize", resize, {
        passive: true
      });
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", resize);
      };
    }, []);
  }
  function useAppStoryStep() {
    const [activeAppStep, setActiveAppStep] = useState(0);
    const activeStepRef = useRef(0);
    useEffect(() => {
      const appStory = document.querySelector("[data-app-story]");
      const device = appStory && appStory.querySelector(".app-story-device");
      if (!appStory) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let frameId = 0;
      const update = () => {
        frameId = 0;
        const rect = appStory.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / travel));
        const nextStep = Math.min(2, Math.floor(progress * 3));
        const arc = Math.sin(progress * Math.PI);
        if (!reduced) {
          appStory.style.setProperty("--app-orbit-y", `${((progress - .5) * -72).toFixed(2)}px`);
          appStory.style.setProperty("--app-orbit-rotate", `${(progress * 82).toFixed(2)}deg`);
          if (device) device.style.transform = `translate3d(0,${(-arc * 14).toFixed(2)}px,0) rotate(${((progress - .5) * -2).toFixed(2)}deg)`;
        }
        if (nextStep !== activeStepRef.current) {
          activeStepRef.current = nextStep;
          setActiveAppStep(nextStep);
        }
      };
      const schedule = () => {
        if (!frameId) frameId = requestAnimationFrame(update);
      };
      schedule();
      window.addEventListener("scroll", schedule, {
        passive: true
      });
      window.addEventListener("resize", schedule, {
        passive: true
      });
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      };
    }, []);
    return activeAppStep;
  }
  function Home() {
    const [openFaq, setOpenFaq] = useState(0);
    useBagScrollScene();
    useSharedTableScene();
    const activeAppStep = useAppStoryStep();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, null), /*#__PURE__*/React.createElement(MotionProvider, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
      className: "home-hero",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-hero-copy",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "live-dot"
    }), "LAUNCHING IN KUWAIT & EGYPT"), /*#__PURE__*/React.createElement("h1", null, "Tonight\u2019s best food is already made."), /*#__PURE__*/React.createElement("p", null, "Bugsha is opening in Kuwait and Egypt: surprise bundles from local bakeries, caf\xE9s and co-ops, freshly packed at closing and worth around three times what you pay. Join the waitlist and collect from the first night."), /*#__PURE__*/React.createElement("div", {
      className: "hero-actions"
    }, /*#__PURE__*/React.createElement(A, {
      className: "button button-primary",
      href: "/#waitlist"
    }, "Join the waitlist ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement(A, {
      className: "text-link",
      href: "/partners"
    }, "List your kitchen ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("div", {
      className: "hero-proof"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "~\u2153 price"), /*#__PURE__*/React.createElement("small", null, "of the counter")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "3\xD7"), /*#__PURE__*/React.createElement("small", null, "the value inside")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Pickup only"), /*#__PURE__*/React.createElement("small", null, "inside the window")))), /*#__PURE__*/React.createElement("div", {
      className: "hero-scene",
      "data-reveal": "scale"
    }, /*#__PURE__*/React.createElement("figure", {
      "data-scroll-media": "24"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-community-story.webp"),
      alt: "A woman using her phone outside a neighborhood caf\xE9"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hero-phone"
    }, /*#__PURE__*/React.createElement(ScreenPhone, {
      active: 0,
      screens: [{
        src: "browse-en.png",
        alt: "Bugsha browse screen"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      className: "hero-note"
    }, /*#__PURE__*/React.createElement(BrandMark, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Opening in"), " Kuwait & Egypt")))), /*#__PURE__*/React.createElement("section", {
      className: "mission-statement"
    }, /*#__PURE__*/React.createElement("span", {
      "data-reveal": true
    }, "GOOD FOOD SHOULD BE EATEN."), /*#__PURE__*/React.createElement("h2", {
      "data-reveal": true
    }, "We are building a nightly marketplace for the good food our cities\u2019 kitchens made\u2014but did not sell.")), /*#__PURE__*/React.createElement(CookieReveal, null), /*#__PURE__*/React.createElement("section", {
      className: "bag-story",
      id: "unpack",
      "data-bag-section": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "bag-pin"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bag-layout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bag-copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "A DIFFERENT SURPRISE EVERY NIGHT"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", null, "See what"), " ", /*#__PURE__*/React.createElement("span", null, "might be"), " ", /*#__PURE__*/React.createElement("em", null, "inside.")), /*#__PURE__*/React.createElement("p", null, "Tonight\u2019s bakery, caf\xE9 and grocery favourites\u2014packed at closing and ready for you."), /*#__PURE__*/React.createElement("div", {
      className: "bag-value-line"
    }, /*#__PURE__*/React.createElement("span", null, "Made today"), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Pick up tonight"), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Around 3\xD7 the value")), /*#__PURE__*/React.createElement("div", {
      className: "scroll-cue"
    }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Scroll to peek inside"))), /*#__PURE__*/React.createElement("div", {
      className: "bag-visual",
      role: "img",
      "aria-label": "A purple Bugsha bag unpacking a bouquet of fresh food as the page scrolls"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bag-sun",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bag-scene",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bag-back"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-animation-bag.webp"),
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      className: "bag-interior-shade"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bag-food-clip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bag-food-stage"
    }, bagBouquet.map(item => /*#__PURE__*/React.createElement("img", {
      key: item.name,
      className: `bag-item item-${item.name}`,
      src: ASSET(`bag-item-${item.name}.webp`),
      alt: "",
      "data-bag-item": true,
      "data-start": item.start,
      "data-end": item.end,
      "data-x": item.x,
      "data-lift": item.lift,
      "data-final-y": item.finalY,
      "data-rotate-from": item.rotateFrom,
      "data-rotate-to": item.rotateTo,
      "data-scale-from": item.scaleFrom,
      "data-scale-to": item.scaleTo,
      decoding: "async"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bag-front"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-animation-bag.webp"),
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      className: "bag-opening-contact"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bag-category-band",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", null, "BAKERIES"), /*#__PURE__*/React.createElement("i", null), " ", /*#__PURE__*/React.createElement("span", null, "CAF\xC9S"), /*#__PURE__*/React.createElement("i", null), " ", /*#__PURE__*/React.createElement("span", null, "CO-OPS"), /*#__PURE__*/React.createElement("i", null), " ", /*#__PURE__*/React.createElement("span", null, "LOCAL KITCHENS"), /*#__PURE__*/React.createElement("i", null), " ", /*#__PURE__*/React.createElement("span", null, "FRESH SURPRISES")))), /*#__PURE__*/React.createElement("section", {
      className: "app-story",
      "data-app-story": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-story-pin"
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-story-heading"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "THREE MOMENTS. ONE EASY PICKUP."), /*#__PURE__*/React.createElement("h2", null, "The app moves at your pace.")), /*#__PURE__*/React.createElement("div", {
      className: "app-story-layout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "app-story-device"
    }, /*#__PURE__*/React.createElement(ScreenPhone, {
      active: activeAppStep,
      screens: appSteps.map(s => ({
        src: s.src,
        alt: `${s.kicker} in the Bugsha app`
      }))
    })), /*#__PURE__*/React.createElement("div", {
      className: "app-story-copy"
    }, appSteps.map((step, index) => /*#__PURE__*/React.createElement("article", {
      className: activeAppStep === index ? "active" : "",
      key: step.n
    }, /*#__PURE__*/React.createElement("span", null, step.n, " / 03"), /*#__PURE__*/React.createElement("small", null, step.kicker), /*#__PURE__*/React.createElement("h3", null, step.title), /*#__PURE__*/React.createElement("p", null, step.body))))), /*#__PURE__*/React.createElement("div", {
      className: "app-story-progress"
    }, appSteps.map((step, index) => /*#__PURE__*/React.createElement("i", {
      className: activeAppStep === index ? "active" : "",
      key: step.n
    }))))), /*#__PURE__*/React.createElement("section", {
      className: "shared-story",
      "data-shared-story": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "shared-story-pin"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "shared-story-media",
      "data-shared-media": true
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-shared-meal.webp"),
      alt: "Friends sharing rescued food together around a table",
      loading: "lazy",
      decoding: "async"
    }), /*#__PURE__*/React.createElement("span", {
      className: "shared-story-shade",
      "data-shared-shade": true,
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      className: "shared-story-intro",
      "data-shared-intro": true
    }, /*#__PURE__*/React.createElement("span", null, "ONE PICKUP.", /*#__PURE__*/React.createElement("br", null), "A BETTER NIGHT.")), /*#__PURE__*/React.createElement("div", {
      className: "shared-story-copy",
      "data-shared-copy": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "GOOD FOOD, ENJOYED TOGETHER"), /*#__PURE__*/React.createElement("h2", null, "The best surprise is sharing it."), /*#__PURE__*/React.createElement("p", null, "Tonight\u2019s extra can become the thing everyone reaches for first."), /*#__PURE__*/React.createElement(A, {
      className: "button button-light",
      href: "/how-it-works"
    }, "See how Bugsha will work ", /*#__PURE__*/React.createElement(Arrow, null))))), /*#__PURE__*/React.createElement("section", {
      className: "local-story"
    }, /*#__PURE__*/React.createElement("figure", {
      "data-reveal": "scale",
      "data-scroll-media": "42"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-bakery-story.webp"),
      alt: "A local baker arranging fresh bread and pastries",
      loading: "lazy",
      decoding: "async"
    }), /*#__PURE__*/React.createElement("figcaption", null, "Made today \xB7 listed tonight")), /*#__PURE__*/React.createElement("div", {
      className: "local-story-copy",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "FROM LOCAL KITCHENS"), /*#__PURE__*/React.createElement("h2", null, "Real kitchens. Real food. One more chance to enjoy it."), /*#__PURE__*/React.createElement("p", null, "A Bugsha starts when a local kitchen has prepared more good food than the day needed. It ends when someone nearby collects it that same night."), /*#__PURE__*/React.createElement(A, {
      className: "text-link",
      href: "/impact"
    }, "Read what we are building ", /*#__PURE__*/React.createElement(Arrow, null)))), /*#__PURE__*/React.createElement("section", {
      className: "home-impact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "impact-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "WHAT ONE BUGSHA DOES"), /*#__PURE__*/React.createElement("h2", null, "Better value. Less waste."), /*#__PURE__*/React.createElement("p", null, "We have not opened yet, so there is nothing to boast about. Here is the arithmetic of a single pickup\u2014and what we intend to repeat every night.")), /*#__PURE__*/React.createElement("div", {
      className: "impact-numbers"
    }, /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "~2 meals"), /*#__PURE__*/React.createElement("span", null, "saved from the bin, per Bugsha")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "~0.5 kg"), /*#__PURE__*/React.createElement("span", null, "good food kept in the chain")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "~65%"), /*#__PURE__*/React.createElement("span", null, "less than the counter price")))), /*#__PURE__*/React.createElement("section", {
      className: "faq-section",
      id: "faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-heading",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "GOOD TO KNOW"), /*#__PURE__*/React.createElement("h2", null, "Questions, answered."), /*#__PURE__*/React.createElement("p", null, "If yours is not here, email us. We answer in Arabic and English.")), /*#__PURE__*/React.createElement("div", {
      className: "faq-list"
    }, faqs.map(([question, answer], index) => /*#__PURE__*/React.createElement("div", {
      className: `faq-item ${openFaq === index ? "open" : ""}`,
      key: question
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenFaq(openFaq === index ? -1 : index),
      "aria-expanded": openFaq === index,
      "aria-controls": `faq-answer-${index}`
    }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
      id: `faq-answer-${index}`
    }, /*#__PURE__*/React.createElement("p", null, answer)))))), /*#__PURE__*/React.createElement(DownloadSection, null)), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  Object.assign(window, {
    SiteHome: Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/pages.jsx
try { (() => {
// Bugsha marketing site — interior pages, ported from the repo
// (app/how-it-works/page.tsx, app/partners/page.tsx, app/impact/page.tsx).
(function () {
  const {
    SITE_ASSET: ASSET,
    SiteLink: A,
    Arrow,
    Phone,
    DownloadSection,
    MotionProvider,
    SiteFooter,
    SiteHeader
  } = window;
  const steps = [{
    n: "01",
    title: "Discover tonight’s Bugshas",
    body: "Open the app and browse live bundles nearby. Every listing shows the food category, pickup window, distance, original value and current price.",
    screen: "browse-en.png"
  }, {
    n: "02",
    title: "Reserve before it goes",
    body: "Choose a Bugsha, check dietary information and pay securely with KNET, Apple Pay or card. The exact contents remain a surprise.",
    screen: "detail-en.png"
  }, {
    n: "03",
    title: "Collect inside the window",
    body: "Head to the kitchen during its pickup time and show the four-digit collection code. The team hands over your Bugsha and confirms collection.",
    screen: "code-en.png"
  }];
  function HowItWorks() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, null), /*#__PURE__*/React.createElement(MotionProvider, null), /*#__PURE__*/React.createElement("main", {
      className: "interior-page"
    }, /*#__PURE__*/React.createElement("section", {
      className: "interior-hero process-hero"
    }, /*#__PURE__*/React.createElement("div", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "FOR CUSTOMERS"), /*#__PURE__*/React.createElement("h1", null, "Good food, found before it goes."), /*#__PURE__*/React.createElement("p", null, "Choose the place, category, price and pickup time. The exact mix stays a surprise until collection."), /*#__PURE__*/React.createElement(A, {
      className: "button button-primary",
      href: "/#waitlist"
    }, "Join the waitlist ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("figure", {
      className: "process-hero-image",
      "data-reveal": "scale",
      "data-scroll-media": "34"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-pickup-scene.webp"),
      alt: "A Bugsha customer collecting an order at a neighborhood caf\xE9",
      loading: "eager",
      decoding: "async"
    }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", null, "FROM OPEN TO RESERVED"), /*#__PURE__*/React.createElement("strong", null, "Usually under three minutes."), /*#__PURE__*/React.createElement("small", null, "Then collect inside the kitchen\u2019s pickup window.")))), /*#__PURE__*/React.createElement("section", {
      className: "process-detail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("h2", null, "Three clear steps. Nothing hidden but the surprise.")), /*#__PURE__*/React.createElement("div", {
      className: "process-detail-grid"
    }, steps.map(step => /*#__PURE__*/React.createElement("article", {
      key: step.n,
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "process-phone"
    }, /*#__PURE__*/React.createElement(Phone, {
      src: step.screen,
      alt: `${step.title} in the Bugsha app`
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, step.n, " / 03"), /*#__PURE__*/React.createElement("h3", null, step.title), /*#__PURE__*/React.createElement("p", null, step.body)))))), /*#__PURE__*/React.createElement("section", {
      className: "what-you-know"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "BEFORE YOU PAY"), /*#__PURE__*/React.createElement("h2", null, "A surprise should still feel informed.")), /*#__PURE__*/React.createElement("div", {
      className: "knowledge-grid"
    }, /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Pickup time"), /*#__PURE__*/React.createElement("p", null, "A fixed window so you know exactly when to arrive.")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "Food category"), /*#__PURE__*/React.createElement("p", null, "Bakery, caf\xE9, meals, sweets or co-op before you choose.")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Dietary notes"), /*#__PURE__*/React.createElement("p", null, "Relevant tags and allergen guidance supplied by the kitchen.")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "04"), /*#__PURE__*/React.createElement("h3", null, "Real value"), /*#__PURE__*/React.createElement("p", null, "The price you pay and the typical original value, side by side.")))), /*#__PURE__*/React.createElement("section", {
      className: "page-next",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "Are you a bakery, caf\xE9 or co-op?"), /*#__PURE__*/React.createElement("h2", null, "Turn tonight\u2019s surplus into tomorrow\u2019s regulars."), /*#__PURE__*/React.createElement(A, {
      className: "button button-dark",
      href: "/partners"
    }, "See Bugsha for businesses ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement(DownloadSection, null)), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  const benefits = [["List in under a minute", "Reuse a saved bundle, set quantity and pickup time, then publish."], ["Paid before arrival", "Customers reserve in the app, so the counter only handles collection."], ["Keep complete control", "You choose price, quantity, contents and when each listing closes."]];
  function Partners() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, null), /*#__PURE__*/React.createElement(MotionProvider, null), /*#__PURE__*/React.createElement("main", {
      className: "interior-page"
    }, /*#__PURE__*/React.createElement("section", {
      className: "partner-hero-page"
    }, /*#__PURE__*/React.createElement("figure", {
      "data-reveal": "scale",
      "data-scroll-media": "38"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-partner-bakery.webp"),
      alt: "A local baker handing a freshly packed order to a customer",
      loading: "eager",
      decoding: "async"
    }), /*#__PURE__*/React.createElement("figcaption", null, "Prepared today \xB7 discovered tonight")), /*#__PURE__*/React.createElement("div", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "BUGSHA FOR BUSINESSES"), /*#__PURE__*/React.createElement("h1", null, "Be one of the first kitchens on Bugsha."), /*#__PURE__*/React.createElement("p", null, "We are opening in Kuwait and Egypt and signing our first partner kitchens now. List tonight\u2019s surplus without changing your kitchen workflow\u2014Bugsha handles discovery, payment and the collection record."), /*#__PURE__*/React.createElement("a", {
      className: "button button-primary",
      href: "mailto:partners@bugsha.com"
    }, "Become a founding partner ", /*#__PURE__*/React.createElement(Arrow, null)))), /*#__PURE__*/React.createElement("section", {
      className: "partner-benefits"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "SIMPLE BY DESIGN"), /*#__PURE__*/React.createElement("h2", null, "A new sales channel, not a new operation.")), /*#__PURE__*/React.createElement("div", {
      className: "benefit-row"
    }, benefits.map(([title, body], index) => /*#__PURE__*/React.createElement("article", {
      key: title,
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "0", index + 1), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body))))), /*#__PURE__*/React.createElement("section", {
      className: "portal-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "portal-copy",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "THE PARTNER PORTAL"), /*#__PURE__*/React.createElement("h2", null, "Everything your team needs. Nothing in the way."), /*#__PURE__*/React.createElement("p", null, "Publish a Bugsha, see exactly what customers see, follow collections and keep an exportable inspection record for every order."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Saved bundle templates"), /*#__PURE__*/React.createElement("li", null, "Live quantity control"), /*#__PURE__*/React.createElement("li", null, "Weekly payout view"), /*#__PURE__*/React.createElement("li", null, "Branch-level inspection logs"))), /*#__PURE__*/React.createElement("div", {
      className: "portal-window",
      "data-reveal": "scale"
    }, /*#__PURE__*/React.createElement("div", {
      className: "browser-bar"
    }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "partner.bugsha.com")), /*#__PURE__*/React.createElement("img", {
      src: ASSET("partner-list-en.png"),
      alt: "Bugsha partner portal listing screen"
    }), /*#__PURE__*/React.createElement("div", {
      className: "portal-detail"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("partner-ledger-en.png"),
      alt: "Bugsha inspection log"
    })))), /*#__PURE__*/React.createElement("section", {
      className: "partner-model"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "THE MODEL"), /*#__PURE__*/React.createElement("h2", null, "You pay only when a Bugsha sells."), /*#__PURE__*/React.createElement("p", null, "No listing fee, no monthly subscription and no minimum volume.")), /*#__PURE__*/React.createElement("div", {
      className: "model-grid"
    }, /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "60 sec"), /*#__PURE__*/React.createElement("span", null, "to publish a saved bundle")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "Weekly"), /*#__PURE__*/React.createElement("span", null, "clear consolidated payouts")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "0 KD"), /*#__PURE__*/React.createElement("span", null, "listing or subscription fees")))), /*#__PURE__*/React.createElement("section", {
      className: "business-cta",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", null, "Open with us, not after us."), /*#__PURE__*/React.createElement("p", null, "Tell us about your kitchen and we will walk through it with you before your city goes live."), /*#__PURE__*/React.createElement("a", {
      className: "button button-light",
      href: "mailto:partners@bugsha.com"
    }, "partners@bugsha.com ", /*#__PURE__*/React.createElement(Arrow, null)))), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  function Impact() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, null), /*#__PURE__*/React.createElement(MotionProvider, null), /*#__PURE__*/React.createElement("main", {
      className: "interior-page"
    }, /*#__PURE__*/React.createElement("section", {
      className: "impact-hero-page"
    }, /*#__PURE__*/React.createElement("div", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "WHAT WE ARE BUILDING"), /*#__PURE__*/React.createElement("h1", null, "Good food, twice over."), /*#__PURE__*/React.createElement("p", null, "A better-value dinner for someone nearby and a little less waste in our cities\u2014without asking either side to compromise. This is our first launch, so nothing on this page is a claim about the past.")), /*#__PURE__*/React.createElement("div", {
      className: "impact-hero-number",
      "data-reveal": "scale"
    }, /*#__PURE__*/React.createElement("strong", null, "~2"), /*#__PURE__*/React.createElement("span", null, "meals rescued in every Bugsha"), /*#__PURE__*/React.createElement("img", {
      src: ASSET("bag-item-croissant.webp"),
      alt: ""
    }), /*#__PURE__*/React.createElement("img", {
      src: ASSET("bag-item-flatbread.webp"),
      alt: ""
    }))), /*#__PURE__*/React.createElement("section", {
      className: "impact-ledger"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "MEASURED, NOT VAGUE"), /*#__PURE__*/React.createElement("h2", null, "One pickup at a time."), /*#__PURE__*/React.createElement("p", null, "Every figure below is per-Bugsha arithmetic, not a total. From launch night we publish the running totals here, drawn from real collections rather than estimates.")), /*#__PURE__*/React.createElement("div", {
      className: "impact-ledger-grid"
    }, /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "~0.5 kg"), /*#__PURE__*/React.createElement("span", null, "good food kept in the chain, per Bugsha")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "~1.3 kg"), /*#__PURE__*/React.createElement("span", null, "estimated CO\u2082e avoided, per Bugsha")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "~65%"), /*#__PURE__*/React.createElement("span", null, "below the counter price")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("strong", null, "2 markets"), /*#__PURE__*/React.createElement("span", null, "Kuwait and Egypt at launch")))), /*#__PURE__*/React.createElement("section", {
      className: "impact-stories"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "story-bakery",
      "data-reveal": "scale",
      "data-scroll-media": "44"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-impact-kitchen.webp"),
      alt: "A bakery team packing fresh food for collection at closing time",
      loading: "lazy",
      decoding: "async"
    }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", null, "01"), "It begins with a kitchen that made more than today needed.")), /*#__PURE__*/React.createElement("figure", {
      className: "story-community",
      "data-reveal": "scale",
      "data-scroll-media": "36"
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-community-story.webp"),
      alt: "A customer using her phone outside a caf\xE9"
    }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", null, "02"), "It finds someone close enough to enjoy it tonight."))), /*#__PURE__*/React.createElement("section", {
      className: "impact-principles"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-intro",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "OUR APPROACH"), /*#__PURE__*/React.createElement("h2", null, "Make the better choice the easier one.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Value first"), /*#__PURE__*/React.createElement("p", null, "People return because the food and price are genuinely good\u2014not because they were made to feel guilty.")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "Local by default"), /*#__PURE__*/React.createElement("p", null, "Nearby pickup keeps the system simple and introduces customers to kitchens in their own neighbourhood.")), /*#__PURE__*/React.createElement("article", {
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Clear records"), /*#__PURE__*/React.createElement("p", null, "Every listing and collection carries a time, branch and staff attestation that partners can export.")))), /*#__PURE__*/React.createElement("section", {
      className: "page-next",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", null, "Bring Bugsha to your kitchen"), /*#__PURE__*/React.createElement("h2", null, "Your surplus can become someone\u2019s best find on our first night."), /*#__PURE__*/React.createElement(A, {
      className: "button button-dark",
      href: "/partners"
    }, "Become a founding partner ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement(DownloadSection, null)), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  Object.assign(window, {
    SiteHowItWorks: HowItWorks,
    SitePartners: Partners,
    SiteImpact: Impact
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/site-ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Bugsha marketing site — shared chrome, ported from the website repo (app/components/SiteUI.tsx).
// Class names and markup are verbatim; Next's <Link> is replaced by a hash router.
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  // window.__resources is populated by the standalone/partner bundler (inlined data URLs);
  // fall back to the project path so the page also works served from disk.
  const ASSET = f => window.__resources && window.__resources[f] || "../../assets/site/" + f;

  /* ---------------- hash router ---------------- */
  const routeOf = () => {
    const h = location.hash.replace(/^#/, "");
    return h.startsWith("/") ? h : "/";
  };
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 96,
      behavior: "smooth"
    });
  }
  function go(path) {
    const [p, id] = String(path).split("#");
    const route = !p || p === "/" ? "/" : p;
    if (route !== routeOf()) {
      location.hash = "#" + route;
      window.scrollTo(0, 0);
    }
    if (id) setTimeout(() => scrollToId(id), 80);
  }
  function useRoute() {
    const [r, setR] = useState(routeOf());
    useEffect(() => {
      const on = () => setR(routeOf());
      window.addEventListener("hashchange", on);
      return () => window.removeEventListener("hashchange", on);
    }, []);
    return r;
  }
  function A({
    href,
    children,
    className,
    onClick,
    ...rest
  }) {
    const handle = e => {
      if (onClick) onClick(e);
      if (String(href).startsWith("mailto:")) return;
      e.preventDefault();
      go(href);
    };
    return /*#__PURE__*/React.createElement("a", _extends({
      className: className,
      href: href,
      onClick: handle
    }, rest), children);
  }

  /* ---------------- primitives ---------------- */
  // The Kerchief: a square of cloth with one corner turned back. Same geometry as assets/mark.svg —
  // the fold is a lighter plane, never a cut-out, so the mark never shows a hole at small sizes.
  function BrandMark({
    inverse = false
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: `brand-mark ${inverse ? "inverse" : ""}`,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 48 48"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "var(--mark-fold,#fff)",
      fillOpacity: "var(--mark-fold-o,.42)",
      d: "M12.5 14h23L24 25.5 12.5 14Z"
    })));
  }
  function Arrow() {
    return /*#__PURE__*/React.createElement("span", {
      className: "arrow",
      "aria-hidden": "true"
    }, "\u2197");
  }
  const StatusBar = () => /*#__PURE__*/React.createElement("div", {
    className: "status-bar",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "island"
  }, /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", {
    className: "status-icons"
  }, /*#__PURE__*/React.createElement("b", null), /*#__PURE__*/React.createElement("b", null), /*#__PURE__*/React.createElement("b", null)));
  function Phone({
    src,
    className = "",
    alt = "Bugsha app screen",
    priority = false
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: `iphone ${className}`
    }, /*#__PURE__*/React.createElement("i", {
      className: "iphone-button action"
    }), /*#__PURE__*/React.createElement("i", {
      className: "iphone-button volume-up"
    }), /*#__PURE__*/React.createElement("i", {
      className: "iphone-button volume-down"
    }), /*#__PURE__*/React.createElement("i", {
      className: "iphone-button power"
    }), /*#__PURE__*/React.createElement("div", {
      className: "iphone-rail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iphone-bezel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iphone-screen"
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("img", {
      src: ASSET(src),
      alt: alt,
      loading: priority ? "eager" : "lazy",
      decoding: "async"
    })), /*#__PURE__*/React.createElement("span", {
      className: "screen-glass",
      "aria-hidden": "true"
    }))));
  }
  function ScreenPhone({
    screens,
    active = 0,
    className = ""
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: `iphone ${className}`
    }, /*#__PURE__*/React.createElement("i", {
      className: "iphone-button action"
    }), /*#__PURE__*/React.createElement("i", {
      className: "iphone-button volume-up"
    }), /*#__PURE__*/React.createElement("i", {
      className: "iphone-button volume-down"
    }), /*#__PURE__*/React.createElement("i", {
      className: "iphone-button power"
    }), /*#__PURE__*/React.createElement("div", {
      className: "iphone-rail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iphone-bezel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iphone-screen"
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      className: "screen-stack"
    }, screens.map((s, i) => /*#__PURE__*/React.createElement("img", {
      key: s.src,
      className: active === i ? "active" : "",
      src: ASSET(s.src),
      alt: s.alt,
      loading: i ? "lazy" : "eager",
      decoding: "async"
    })))), /*#__PURE__*/React.createElement("span", {
      className: "screen-glass",
      "aria-hidden": "true"
    }))));
  }

  /* ---------------- cookie reveal ---------------- */
  function CookieReveal() {
    const sectionRef = useRef(null);
    useEffect(() => {
      const section = sectionRef.current;
      if (!section) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let frameId = 0;
      const render = () => {
        frameId = 0;
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        const progress = reduced ? 1 : Math.max(0, Math.min(1, -rect.top / travel));
        const mobile = window.innerWidth <= 560;
        section.style.setProperty("--cookie-roll-x", `${(mobile ? 7 + progress * 86 : 6 + progress * 88).toFixed(3)}%`);
        section.style.setProperty("--cookie-roll-rotation", `${(progress * 1080).toFixed(2)}deg`);
        section.style.setProperty("--cookie-mask-right", `${((1 - progress) * 100).toFixed(3)}%`);
        section.style.setProperty("--cookie-line-progress", progress.toFixed(4));
      };
      const schedule = () => {
        if (!frameId) frameId = requestAnimationFrame(render);
      };
      render();
      window.addEventListener("scroll", schedule, {
        passive: true
      });
      window.addEventListener("resize", schedule, {
        passive: true
      });
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      };
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      className: "cookie-reveal",
      ref: sectionRef,
      "aria-label": "Good food deserves another chance"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cookie-reveal-pin"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cookie-reveal-kicker"
    }, "ONE SMALL CHOICE \xB7 ONE BETTER ENDING"), /*#__PURE__*/React.createElement("h2", {
      className: "cookie-message",
      "aria-label": "Good food deserves another chance."
    }, /*#__PURE__*/React.createElement("span", {
      className: "cookie-message-ghost",
      "aria-hidden": "true"
    }, "Good food deserves another chance."), /*#__PURE__*/React.createElement("span", {
      className: "cookie-message-fill",
      "aria-hidden": "true"
    }, "Good food deserves another chance.")), /*#__PURE__*/React.createElement("div", {
      className: "cookie-roll",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("img", {
      src: ASSET("bugsha-real-cookie.webp"),
      alt: "",
      loading: "lazy",
      decoding: "async"
    })), /*#__PURE__*/React.createElement("div", {
      className: "cookie-reveal-foot"
    }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Made today \xB7 picked up tonight"))));
  }

  /* ---------------- header / footer ---------------- */
  const navigation = [["/how-it-works", "How it works"], ["/partners", "For businesses"], ["/impact", "Our impact"]];
  function SiteHeader() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      let frameId = 0;
      const update = () => {
        frameId = 0;
        const next = window.scrollY > 24;
        setScrolled(c => c === next ? c : next);
      };
      const schedule = () => {
        if (!frameId) frameId = requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", schedule, {
        passive: true
      });
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("scroll", schedule);
      };
    }, []);
    useEffect(() => {
      if (!open) return;
      const esc = e => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", esc);
      return () => window.removeEventListener("keydown", esc);
    }, [open]);
    return /*#__PURE__*/React.createElement("header", {
      className: `site-header ${scrolled ? "scrolled" : ""}`
    }, /*#__PURE__*/React.createElement(A, {
      className: "brand",
      href: "/",
      "aria-label": "Bugsha home",
      onClick: () => setOpen(false)
    }, /*#__PURE__*/React.createElement(BrandMark, null), /*#__PURE__*/React.createElement("strong", null, "Bugsha")), /*#__PURE__*/React.createElement("nav", {
      id: "main-navigation",
      className: open ? "open" : "",
      "aria-label": "Main navigation"
    }, navigation.map(([href, label]) => /*#__PURE__*/React.createElement(A, {
      href: href,
      key: href,
      onClick: () => setOpen(false)
    }, label)), /*#__PURE__*/React.createElement(A, {
      href: "/#faq",
      onClick: () => setOpen(false)
    }, "FAQ")), /*#__PURE__*/React.createElement("div", {
      className: "nav-actions"
    }, /*#__PURE__*/React.createElement(A, {
      className: "button button-dark nav-cta",
      href: "/#waitlist"
    }, "Join the waitlist ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("button", {
      className: "menu-button",
      "aria-label": open ? "Close navigation" : "Open navigation",
      "aria-controls": "main-navigation",
      "aria-expanded": open,
      onClick: () => setOpen(!open)
    }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
  }
  function SiteFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "site-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-main"
    }, /*#__PURE__*/React.createElement(A, {
      className: "brand",
      href: "/"
    }, /*#__PURE__*/React.createElement(BrandMark, {
      inverse: true
    }), /*#__PURE__*/React.createElement("strong", null, "Bugsha")), /*#__PURE__*/React.createElement("p", null, "Good food belongs on a table, not in a bin. Built for tonight\u2019s surplus."), /*#__PURE__*/React.createElement("a", {
      className: "footer-email",
      href: "mailto:hello@bugsha.com"
    }, "hello@bugsha.com ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("div", {
      className: "footer-links"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, "Explore"), /*#__PURE__*/React.createElement(A, {
      href: "/how-it-works"
    }, "How it works"), /*#__PURE__*/React.createElement(A, {
      href: "/impact"
    }, "Our impact"), /*#__PURE__*/React.createElement(A, {
      href: "/#faq"
    }, "FAQ")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, "Business"), /*#__PURE__*/React.createElement(A, {
      href: "/partners"
    }, "For businesses"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:partners@bugsha.com"
    }, "Become a partner"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:hello@bugsha.com"
    }, "Support"))), /*#__PURE__*/React.createElement("div", {
      className: "footer-bottom"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Bugsha"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Food safety"), /*#__PURE__*/React.createElement("span", null, "Kuwait \xB7 Egypt")));
  }

  /* ---------------- reveal + media parallax ---------------- */
  function MotionProvider() {
    useEffect(() => {
      const root = document.documentElement;
      const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
      const media = Array.from(document.querySelectorAll("[data-scroll-media]")).map(frame => ({
        frame,
        image: frame.querySelector("img"),
        range: Number(frame.dataset.scrollMedia || 30)
      })).filter(i => Boolean(i.image));
      root.classList.add("motion-ready");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        nodes.forEach(n => n.classList.add("is-visible"));
        return () => {
          nodes.forEach(n => n.classList.remove("is-visible", "reveal-pending"));
          root.classList.remove("motion-ready");
        };
      }
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }), {
        threshold: .12,
        rootMargin: "0px 0px -7% 0px"
      });
      nodes.forEach(node => {
        if (node.getBoundingClientRect().top > window.innerHeight * .88) node.classList.add("reveal-pending");else node.classList.add("is-visible");
        observer.observe(node);
      });
      let frameId = 0;
      const renderMedia = () => {
        frameId = 0;
        const vh = window.innerHeight;
        const mobileScale = window.innerWidth <= 820 ? .55 : 1;
        media.forEach(item => {
          const rect = item.frame.getBoundingClientRect();
          if (rect.bottom < -vh * .25 || rect.top > vh * 1.25) return;
          const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
          const y = (.5 - progress) * item.range * mobileScale;
          item.image.style.transform = `translate3d(0,${y.toFixed(2)}px,0) scale(1.065)`;
        });
      };
      const scheduleMedia = () => {
        if (!frameId) frameId = requestAnimationFrame(renderMedia);
      };
      renderMedia();
      window.addEventListener("scroll", scheduleMedia, {
        passive: true
      });
      window.addEventListener("resize", scheduleMedia, {
        passive: true
      });
      return () => {
        cancelAnimationFrame(frameId);
        observer.disconnect();
        window.removeEventListener("scroll", scheduleMedia);
        window.removeEventListener("resize", scheduleMedia);
        nodes.forEach(n => n.classList.remove("is-visible", "reveal-pending"));
        root.classList.remove("motion-ready");
      };
    }, []);
    return null;
  }

  /* ---------------- waitlist panel (pre-launch consumer conversion) ---------------- */
  function DownloadSection() {
    const [email, setEmail] = useState("");
    const [area, setArea] = useState("");
    const [done, setDone] = useState(false);
    const submit = event => {
      event.preventDefault();
      if (email.trim()) setDone(true);
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "download-section",
      id: "waitlist"
    }, /*#__PURE__*/React.createElement("div", {
      className: "download-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "download-copy",
      "data-reveal": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow light"
    }, "LAUNCHING IN KUWAIT & EGYPT"), /*#__PURE__*/React.createElement("h2", null, "Be first in line."), /*#__PURE__*/React.createElement("p", null, "We are opening in Kuwait and Egypt. Join the waitlist and we will tell you the moment kitchens near you start listing\u2014early access, before the app opens publicly."), done ? /*#__PURE__*/React.createElement("div", {
      className: "waitlist-done",
      role: "status"
    }, /*#__PURE__*/React.createElement(BrandMark, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "You are on the list."), /*#__PURE__*/React.createElement("span", null, "We will email you before your city goes live."))) : /*#__PURE__*/React.createElement("form", {
      className: "waitlist-form",
      onSubmit: submit
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      required: true,
      value: email,
      onChange: e => setEmail(e.target.value),
      placeholder: "you@example.com",
      autoComplete: "email"
    })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Where"), /*#__PURE__*/React.createElement("select", {
      value: area,
      onChange: e => setArea(e.target.value)
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Choose country"), /*#__PURE__*/React.createElement("option", null, "Kuwait"), /*#__PURE__*/React.createElement("option", null, "Egypt"))), /*#__PURE__*/React.createElement("button", {
      className: "button button-light",
      type: "submit"
    }, "Join the waitlist ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("div", {
      className: "store-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "store-badge is-soon"
    }, /*#__PURE__*/React.createElement("small", null, "SOON ON THE"), /*#__PURE__*/React.createElement("strong", null, "App Store")), /*#__PURE__*/React.createElement("span", {
      className: "store-badge is-soon"
    }, /*#__PURE__*/React.createElement("small", null, "SOON ON"), /*#__PURE__*/React.createElement("strong", null, "Google Play")))), /*#__PURE__*/React.createElement("div", {
      className: "download-visual",
      "data-reveal": "scale"
    }, /*#__PURE__*/React.createElement(Phone, {
      src: "browse-en.png"
    }))));
  }
  Object.assign(window, {
    SITE_ASSET: ASSET,
    siteGo: go,
    useSiteRoute: useRoute,
    SiteLink: A,
    BrandMark,
    Arrow,
    Phone,
    ScreenPhone,
    CookieReveal,
    SiteHeader,
    SiteFooter,
    MotionProvider,
    DownloadSection
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/site-ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/partner/data.jsx
try { (() => {
// Partner portal — copy tables (EN + Kuwaiti Arabic) and fixture data.
(function () {
  const COPY = {
    en: {
      dir: "ltr",
      nav: ["Tonight", "List a bundle", "My bundles", "Payouts", "Inspection log", "Reviews", "Analytics", "Branches"],
      brand: "Bugsha · Partner",
      branch: "Kuwait Bakehouse",
      area: "Salmiya",
      switchBranch: "Switch branch",
      signedIn: "Yousef K. · Shift manager",
      tonight: "Tonight",
      closesIn: "Pickup closes in",
      live: "Bundles live",
      reserved: "Reserved",
      collected: "Collected",
      net: "Net tonight",
      listedAt: "listed 21:04",
      waiting: "waiting",
      ofBundles: "of 6 bundles",
      afterFee: "after commission",
      attested: "Handling attested at 21:06",
      attestedBody: "Yousef K. confirmed the bundles were packed within 90 minutes of close.",
      board: "Tonight's orders",
      handOver: "Hand over",
      done: "Collected",
      late: "Late",
      waitingS: "Waiting",
      listCta: "List tonight's bundles",
      pause: "Pause listing",
      paused: "Paused — hidden from customers",
      resume: "Resume",
      howMany: "How many bundles?",
      lastNight: "Last night: 6",
      sameAsLast: "Same as last night",
      next: "Next",
      window: "Pickup window",
      windowHint: "Default 21:30–22:30",
      priceStep: "Price & attestation",
      priceHint: "Worth KD 6.500 · you charge KD 2.000",
      price: "Price",
      worth: "Original value",
      attestLabel: "I confirm these bundles were packed today and are handed over inside the pickup window.",
      publish: n => `Publish ${n} bundles`,
      published: "Bundles live · 21:04",
      view: "View",
      preview: "Customer preview",
      previewNote: "Exactly what the customer sees.",
      bakedToday: "Baked today",
      bundles: "My bundles",
      bundlesNote: "Saved presets. One tap at close of shift.",
      schedule: "Runs",
      edit: "Edit",
      useNow: "Use now",
      payouts: "Payouts",
      nextPayout: "Next payout",
      thisWeek: "This week",
      bundlesSold: "bundles sold",
      arriving: "Arriving",
      bank: "NBK · ending 4417",
      history: "Payout history",
      period: "Period",
      gross: "Gross",
      fee: "Commission",
      netCol: "Net",
      status: "Status",
      paid: "Paid",
      pending: "Pending",
      ledger: "Inspection log",
      ledgerNote: "Every bundle keeps its own record. Export any period, per branch, on the spot.",
      allBranches: "All branches",
      last7: "Last 7 nights",
      export: "Export CSV",
      colOrder: "Order",
      colListed: "Listed",
      colCloses: "Window ends",
      colCollected: "Collected",
      colAttest: "Attested",
      reviews: "Reviews",
      avgTonight: "Average tonight",
      allTime: "All time",
      reviewsNote: "Reviews are a quality signal and inspection evidence at the same time.",
      branches: "Branches",
      staff: "Staff on this branch",
      notif: "Notifications",
      notifNew: "New reservation",
      notifNewSub: "Ping when a bundle is reserved",
      notifClose: "Window closing",
      notifCloseSub: "15 minutes before pickup closes",
      language: "Language",
      addBranch: "Add branch",
      active: "Active",
      closedTonight: "Closed tonight",
      liveListings: "Live tonight",
      noListings: "Nothing listed tonight yet",
      noListingsBody: "Publish a bundle and it shows up here — and in the app within seconds.",
      sold: "sold",
      remaining: "left",
      pauseOne: "Pause",
      resumeOne: "Resume",
      removeOne: "Remove",
      editOne: "Edit",
      newBundle: "New bundle",
      editBundle: "Edit bundle",
      nameEn: "Name (English)",
      nameAr: "Name (Arabic)",
      qtyLabel: "Bundles per night",
      windowLabel: "Pickup window",
      save: "Save",
      saveAdd: "Save bundle",
      del: "Delete",
      cancelEdit: "Cancel",
      savedToast: "Bundle saved",
      deletedToast: "Bundle deleted",
      removedToast: "Listing removed",
      pausedToast: "Listing paused — hidden from customers",
      resumedToast: "Listing live again",
      startFrom: "Start from a saved bundle",
      orBlank: "Or fill it in",
      savePreset: "Save these settings as a bundle",
      presetSaved: "Saved to My bundles",
      publishedFrom: n => n + " live · customers can reserve now",
      days: "Nights it runs",
      customWindow: "Custom",
      addBundle: "Add bundle",
      editorNote: "Changes apply the next time you publish. Tonight's live listings keep their own price.",
      impact: "Analytics",
      impactNote: "How the branch is performing on the numbers your operations team is judged on — sell-through, rescue volume, and the waste you stopped paying to throw away.",
      sellThrough: "Sell-through",
      sellThroughSub: "bundles sold vs listed",
      bestNight: "Best night",
      bestNightSub: "this month",
      avgPrice: "Average price",
      avgPriceSub: "per bundle, this month",
      photo: "Photo",
      photoNote: "Your storefront, counter or packaging — never a photo of the contents, since the bundle is a surprise.",
      uploadPhoto: "Upload photo",
      yourPhotos: "Your photos",
      noPhoto: "No photo",
      internal: "Internal — this month",
      bundlesRescued: "Bundles rescued",
      mealsDiverted: "Meals diverted from waste",
      kgFood: "Food kept in the chain",
      co2: "CO₂e avoided",
      disposalSaved: "Disposal cost avoided",
      ytd: "Year to date",
      perBranch: "By branch",
      claim: "Publishable claim",
      claimNote: "Generated from your verified ledger — every figure traces back to an attested order, so legal can sign it.",
      claimEn: "Kuwait Bakehouse rescued 1,284 meals from waste in 2026 — 642 kg of food kept out of landfill.",
      claimAr: "مخبز الكويت أنقذ 1,284 وجبة من الإسراف في 2026 — 642 كجم أكل ما وصل المكب.",
      copyClaim: "Copy claim",
      copied: "Copied",
      assets: "Co-branded assets",
      assetsNote: "Bilingual, print and social, your logo beside ours.",
      stickerName: "Window sticker · A5",
      stickerSub: "Arabic and English, for the door",
      socialName: "Social card · 1080×1080",
      socialSub: "Monthly number, ready to post",
      reportName: "CSR report · PDF",
      reportSub: "Month or year, per branch, with the ledger attached",
      receiptName: "Receipt line",
      receiptSub: "One line for your printed receipts",
      download: "Download",
      generate: "Generate",
      verified: "Verified against the inspection log",
      equivalents: "What that means",
      eqMeals: "meals a family of four could eat",
      eqDrives: "km driven in a car",
      eqWater: "litres of water not spent growing it",
      targetLabel: "Nights with zero waste",
      targetSub: "this month"
    },
    ar: {
      dir: "rtl",
      nav: ["الليلة", "أدرج بقشة", "البقش المحفوظة", "المستحقات", "سجل التفتيش", "التقييمات", "التحليلات", "الفروع"],
      brand: "بقشة · شريك",
      branch: "مخبز الكويت",
      area: "السالمية",
      switchBranch: "بدّل الفرع",
      signedIn: "يوسف ك. · مشرف الشفت",
      tonight: "الليلة",
      closesIn: "الاستلام يقفل بعد",
      live: "بقش منشورة",
      reserved: "محجوزة",
      collected: "تسلّمت",
      net: "صافي الليلة",
      listedAt: "نُشرت 21:04",
      waiting: "بالانتظار",
      ofBundles: "من 6 بقش",
      afterFee: "بعد العمولة",
      attested: "الإقرار مسجّل 21:06",
      attestedBody: "يوسف ك. أكد إن البقش عُبّئت خلال 90 دقيقة من الإغلاق.",
      board: "طلبات الليلة",
      handOver: "سلّمها",
      done: "تسلّمت",
      late: "متأخر",
      waitingS: "بالانتظار",
      listCta: "انشر بقش الليلة",
      pause: "وقّف النشر",
      paused: "موقوفة — ما تبيّن للزباين",
      resume: "رجّعها",
      howMany: "كم بقشة؟",
      lastNight: "أمس: 6",
      sameAsLast: "مثل أمس",
      next: "التالي",
      window: "وقت الاستلام",
      windowHint: "الافتراضي 21:30–22:30",
      priceStep: "السعر والإقرار",
      priceHint: "قيمتها KD 6.500 · تبيعها بـ KD 2.000",
      price: "السعر",
      worth: "القيمة الأصلية",
      attestLabel: "أقرّ إن هالبقش عُبّئت اليوم وتُسلّم داخل وقت الاستلام.",
      publish: n => `انشر ${n} بقش`,
      published: "البقش منشورة · 21:04",
      view: "شوفها",
      preview: "شكلها عند الزبون",
      previewNote: "هذا بالضبط اللي يشوفه الزبون.",
      bakedToday: "مخبوز اليوم",
      bundles: "البقش المحفوظة",
      bundlesNote: "إعدادات محفوظة. ضغطة واحدة بنهاية الشفت.",
      schedule: "تنشر",
      edit: "عدّل",
      useNow: "استخدمها الحين",
      payouts: "المستحقات",
      nextPayout: "التحويل الجاي",
      thisWeek: "هذا الأسبوع",
      bundlesSold: "بقشة مبيعة",
      arriving: "يوصل",
      bank: "الوطني · تنتهي 4417",
      history: "سجل التحويلات",
      period: "الفترة",
      gross: "الإجمالي",
      fee: "العمولة",
      netCol: "الصافي",
      status: "الحالة",
      paid: "محوّل",
      pending: "بالطريق",
      ledger: "سجل التفتيش",
      ledgerNote: "كل بقشة لها سجلها. صدّر أي فترة، ولأي فرع، على طول.",
      allBranches: "كل الفروع",
      last7: "آخر 7 ليالٍ",
      export: "تصدير CSV",
      colOrder: "الطلب",
      colListed: "نُشرت",
      colCloses: "يقفل",
      colCollected: "تسلّمت",
      colAttest: "الإقرار",
      reviews: "التقييمات",
      avgTonight: "معدل الليلة",
      allTime: "الكل",
      reviewsNote: "التقييم دليل جودة ودليل تفتيش بنفس الوقت.",
      branches: "الفروع",
      staff: "الشباب في هالفرع",
      notif: "التنبيهات",
      notifNew: "حجز جديد",
      notifNewSub: "نبّهني أول ما تُحجز بقشة",
      notifClose: "الوقت يقرب يخلص",
      notifCloseSub: "قبل 15 دقيقة من قفل الاستلام",
      language: "اللغة",
      addBranch: "أضف فرع",
      active: "شغّال",
      closedTonight: "مسكّر الليلة",
      liveListings: "منشورة الليلة",
      noListings: "ما نشرت شي الليلة",
      noListingsBody: "انشر بقشة وتطلع لك هني — وبالتطبيق بثواني.",
      sold: "مبيعة",
      remaining: "باقي",
      pauseOne: "وقّف",
      resumeOne: "رجّعها",
      removeOne: "احذف",
      editOne: "عدّل",
      newBundle: "بقشة جديدة",
      editBundle: "عدّل البقشة",
      nameEn: "الاسم (إنجليزي)",
      nameAr: "الاسم (عربي)",
      qtyLabel: "كم بقشة بالليلة",
      windowLabel: "وقت الاستلام",
      save: "احفظ",
      saveAdd: "احفظ البقشة",
      del: "احذف",
      cancelEdit: "إلغاء",
      savedToast: "انحفظت البقشة",
      deletedToast: "انحذفت البقشة",
      removedToast: "انشالت من المنشورة",
      pausedToast: "وقّفناها — ما تبيّن للزباين",
      resumedToast: "رجعت منشورة",
      startFrom: "ابدأ من بقشة محفوظة",
      orBlank: "أو عبّيها بنفسك",
      savePreset: "احفظ هالإعدادات كبقشة",
      presetSaved: "انحفظت في البقش المحفوظة",
      publishedFrom: n => n + " منشورة · الزباين يقدرون يحجزون الحين",
      days: "الليالي اللي تنشر فيها",
      customWindow: "غير",
      addBundle: "أضف بقشة",
      editorNote: "التعديل يشتغل بالنشر الجاي. البقش المنشورة الليلة تثبت على سعرها.",
      impact: "التحليلات",
      impactNote: "شلون أداء الفرع بالأرقام اللي يتحاسب عليها التشغيل — نسبة البيع، وكم بقشة انقذت، والإسراف اللي بطّلت تدفع عشان ترميه.",
      sellThrough: "نسبة البيع",
      sellThroughSub: "مبيعة من المنشورة",
      bestNight: "أفضل ليلة",
      bestNightSub: "هذا الشهر",
      avgPrice: "معدل السعر",
      avgPriceSub: "للبقشة، هذا الشهر",
      photo: "الصورة",
      photoNote: "محلك أو الكاونتر أو التغليف — مو صورة المحتويات، لأن البقشة مفاجأة.",
      uploadPhoto: "ارفع صورة",
      yourPhotos: "صورك",
      noPhoto: "بدون صورة",
      internal: "داخلي — هذا الشهر",
      bundlesRescued: "بقش انقذت",
      mealsDiverted: "وجبات ما وصلت الإسراف",
      kgFood: "أكل بقي بالسلسلة",
      co2: "CO₂e تفاديناه",
      disposalSaved: "تكلفة تخلّص وفّرتها",
      ytd: "من أول السنة",
      perBranch: "حسب الفرع",
      claim: "كلام تقدر تنشره",
      claimNote: "مولّد من سجلك الموثّق — كل رقم يرجع لطلب عليه إقرار، فالقانوني يقدر يعتمده.",
      claimEn: "Kuwait Bakehouse rescued 1,284 meals from waste in 2026 — 642 kg of food kept out of landfill.",
      claimAr: "مخبز الكويت أنقذ 1,284 وجبة من الإسراف في 2026 — 642 كجم أكل ما وصل المكب.",
      copyClaim: "انسخ النص",
      copied: "انتسخ",
      assets: "مواد مشتركة",
      assetsNote: "باللغتين، للطبع وللسوشال، شعارك جنب شعارنا.",
      stickerName: "ملصق واجهة · A5",
      stickerSub: "عربي وإنجليزي، للباب",
      socialName: "صورة سوشال · 1080×1080",
      socialSub: "رقم الشهر، جاهزة للنشر",
      reportName: "تقرير مسؤولية · PDF",
      reportSub: "شهر أو سنة، ولكل فرع، ومعه السجل",
      receiptName: "سطر الفاتورة",
      receiptSub: "سطر واحد تحطه على فواتيرك",
      download: "نزّلها",
      generate: "طلّعها",
      verified: "موثّق من سجل التفتيش",
      equivalents: "شنو يعني هالرقم",
      eqMeals: "وجبة تكفي عايلة من أربعة",
      eqDrives: "كم بالسيارة",
      eqWater: "لتر ماي ما انصرف عليه",
      targetLabel: "ليالٍ بصفر إسراف",
      targetSub: "هذا الشهر"
    }
  };
  const ORDERS = [{
    code: "KW-4821",
    customer: "Noura A.",
    customerAr: "نورة ع.",
    qty: 1,
    by: "22:30",
    status: "waiting"
  }, {
    code: "KW-4822",
    customer: "Rahul S.",
    customerAr: "راهول س.",
    qty: 2,
    by: "22:30",
    status: "late"
  }, {
    code: "KW-4823",
    customer: "Maria D.",
    customerAr: "ماريا د.",
    qty: 1,
    by: "22:30",
    status: "waiting"
  }, {
    code: "KW-4819",
    customer: "Mishari K.",
    customerAr: "مشاري ك.",
    qty: 1,
    by: "22:00",
    status: "collected"
  }];
  const PRESETS = [{
    id: "bakery",
    en: "Bakery mix",
    ar: "خليط المخبز",
    price: "2.000",
    worth: "6.500",
    window: "21:30–22:30",
    qty: 6,
    days: {
      en: "Sat–Thu",
      ar: "السبت–الخميس"
    },
    photo: "../../assets/photos/tone-bakehouse.png"
  }, {
    id: "savoury",
    en: "Savoury tray",
    ar: "صواني مالحة",
    price: "2.500",
    worth: "7.000",
    window: "22:00–23:00",
    qty: 4,
    days: {
      en: "Fri",
      ar: "الجمعة"
    },
    photo: "../../assets/photos/tone-mezze.png"
  }, {
    id: "sweets",
    en: "Sweets box",
    ar: "صندوق حلويات",
    price: "3.000",
    worth: "9.000",
    window: "21:00–22:00",
    qty: 3,
    days: {
      en: "Thu–Fri",
      ar: "الخميس–الجمعة"
    },
    photo: "../../assets/photos/tone-bread.png"
  }];
  const PAYOUTS = [{
    period: {
      en: "27 Jul – 2 Aug",
      ar: "27 يوليو – 2 أغسطس"
    },
    gross: "230.000",
    fee: "34.500",
    net: "195.500",
    paid: true
  }, {
    period: {
      en: "20 – 26 Jul",
      ar: "20 – 26 يوليو"
    },
    gross: "212.500",
    fee: "31.875",
    net: "180.625",
    paid: true
  }, {
    period: {
      en: "13 – 19 Jul",
      ar: "13 – 19 يوليو"
    },
    gross: "197.500",
    fee: "29.625",
    net: "167.875",
    paid: true
  }];
  const LEDGER = [{
    orderId: "KW-4821",
    listedAt: "21:04",
    windowEnd: "22:30",
    collectedAt: "22:11",
    attested: true
  }, {
    orderId: "KW-4822",
    listedAt: "21:04",
    windowEnd: "22:30",
    collectedAt: "22:26",
    attested: true
  }, {
    orderId: "KW-4823",
    listedAt: "21:04",
    windowEnd: "22:30",
    collectedAt: "",
    attested: true
  }, {
    orderId: "KW-4819",
    listedAt: "20:12",
    windowEnd: "22:00",
    collectedAt: "21:48",
    attested: true
  }, {
    orderId: "KW-4812",
    listedAt: "20:58",
    windowEnd: "22:30",
    collectedAt: "22:04",
    attested: true
  }, {
    orderId: "KW-4808",
    listedAt: "20:58",
    windowEnd: "22:30",
    collectedAt: "22:20",
    attested: true
  }];
  const REVIEWS = [{
    name: "Noura A.",
    nameAr: "نورة ع.",
    stars: 5,
    en: "Still warm. Two za'atar and a whole cake for KD 2.",
    ar: "لِسع حارّة. زعتر وكيكة كاملة بـ KD 2."
  }, {
    name: "Rahul S.",
    nameAr: "راهول س.",
    stars: 5,
    en: "Staff had it ready at the counter. In and out in a minute.",
    ar: "الطلب جاهز عند الكاونتر. دخلت وطلعت بدقيقة."
  }, {
    name: "Maria D.",
    nameAr: "ماريا د.",
    stars: 4,
    en: "Good value. Would like more savoury next time.",
    ar: "سعرها زين. أتمنى مالح أكثر المرة الجاية."
  }];
  const BRANCHES = [{
    en: "Salmiya · Block 10",
    ar: "السالمية · قطعة 10",
    live: true
  }, {
    en: "Shaab · Arabian Gulf St",
    ar: "الشعب · شارع الخليج العربي",
    live: true
  }, {
    en: "Jabriya · Block 4",
    ar: "الجابرية · قطعة 4",
    live: false
  }];
  const STAFF = [{
    en: "Yousef K.",
    ar: "يوسف ك.",
    role: {
      en: "Shift manager",
      ar: "مشرف شفت"
    }
  }, {
    en: "Anitha R.",
    ar: "أنيثا ر.",
    role: {
      en: "Counter",
      ar: "كاونتر"
    }
  }, {
    en: "Hassan M.",
    ar: "حسن م.",
    role: {
      en: "Counter",
      ar: "كاونتر"
    }
  }];
  const LISTINGS = [{
    id: "l1",
    en: "Bakery mix",
    ar: "خليط المخبز",
    price: "2.000",
    worth: "6.500",
    window: "21:30–22:30",
    qty: 6,
    sold: 3,
    live: true,
    photo: "../../assets/photos/tone-bakehouse.png"
  }];
  const IMPACT_BRANCHES = [{
    en: "Salmiya · Block 10",
    ar: "السالمية · قطعة 10",
    bundles: 312,
    meals: 624,
    kg: 156,
    co2: 398
  }, {
    en: "Shaab · Arabian Gulf St",
    ar: "الشعب · شارع الخليج العربي",
    bundles: 184,
    meals: 368,
    kg: 92,
    co2: 235
  }, {
    en: "Jabriya · Block 4",
    ar: "الجابرية · قطعة 4",
    bundles: 96,
    meals: 192,
    kg: 48,
    co2: 122
  }];
  const PHOTO_LIBRARY = ["tone-bakehouse", "tone-bread", "tone-mezze", "tone-cafe", "tone-coop", "tone-night"].map(n => "../../assets/photos/" + n + ".png");
  Object.assign(window, {
    PARTNER_PHOTOS: PHOTO_LIBRARY,
    PARTNER_IMPACT_BRANCHES: IMPACT_BRANCHES,
    PARTNER_LISTINGS: LISTINGS,
    PARTNER_COPY: COPY,
    PARTNER_ORDERS: ORDERS,
    PARTNER_PRESETS: PRESETS,
    PARTNER_PAYOUTS: PAYOUTS,
    PARTNER_LEDGER: LEDGER,
    PARTNER_REVIEWS: REVIEWS,
    PARTNER_BRANCHES: BRANCHES,
    PARTNER_STAFF: STAFF
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/partner/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/partner/kit.jsx
try { (() => {
// Partner portal — shell + app.
(function () {
  const {
    Logo,
    Icon,
    SegmentedControl,
    Badge
  } = window.SurplusKWDesignSystem_97ec90;
  const COPY = window.PARTNER_COPY;
  const ICONS = ["moon", "plus", "package", "banknote", "file-text", "star", "chart-column", "store"];
  function Shell({
    t,
    ar,
    view,
    setView,
    lang,
    setLang,
    liveQty,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      dir: t.dir,
      style: {
        display: "grid",
        gridTemplateColumns: "244px minmax(0,1fr)",
        minHeight: "100vh",
        background: "var(--color-surface-canvas)"
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        background: "var(--color-surface-inverse)",
        color: "var(--color-text-inverse)",
        padding: "18px 12px",
        display: "grid",
        alignContent: "start",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "2px 8px 16px"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      lockup: "mark",
      size: 24,
      color: "#fff",
      fold: "var(--color-surface-inverse)",
      foldOpacity: 1
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: "var(--text-label-size)"
      }
    }, t.brand)), /*#__PURE__*/React.createElement("button", {
      style: {
        display: "grid",
        gap: 2,
        textAlign: "start",
        padding: "10px 12px",
        marginBottom: 10,
        borderRadius: "var(--radius-control)",
        border: "1px solid rgba(255,255,255,.16)",
        background: "rgba(255,255,255,.06)",
        color: "inherit",
        cursor: "pointer",
        minHeight: 44
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, t.branch), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        opacity: .7
      }
    }, t.area, " \xB7 ", t.switchBranch)), t.nav.map((n, i) => /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => setView(i),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textAlign: "start",
        padding: "10px 12px",
        minHeight: 44,
        borderRadius: "var(--radius-control)",
        border: "none",
        cursor: "pointer",
        fontSize: "var(--text-body-size)",
        fontFamily: "inherit",
        fontWeight: view === i ? 600 : 400,
        background: view === i ? "rgba(255,255,255,.14)" : "transparent",
        color: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ICONS[i],
      size: 17
    }), /*#__PURE__*/React.createElement("span", null, n))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 24,
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: lang,
      onChange: setLang,
      options: [{
        value: "en",
        label: "EN"
      }, {
        value: "ar",
        label: "ع"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        padding: "10px 8px 0",
        borderTop: "1px solid rgba(255,255,255,.12)",
        fontSize: "var(--text-caption-size)",
        opacity: .75
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 15
    }), /*#__PURE__*/React.createElement("span", null, t.signedIn)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: "auto minmax(0,1fr)"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "12px 28px",
        borderBottom: "1px solid var(--color-border-subtle)",
        background: "var(--color-surface-raised)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "fresh"
    }, t.live, " \xB7 ", liveQty), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.closesIn, " ", /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      dir: "ltr",
      style: {
        unicodeBidi: "isolate",
        fontFamily: "var(--font-plex-mono), monospace"
      }
    }, "46 min \xB7 22:30"))), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: "var(--font-plex-mono), monospace",
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-tertiary)"
      }
    }, "21:44")), /*#__PURE__*/React.createElement("main", {
      style: {
        padding: "24px 28px 40px",
        display: "grid",
        alignContent: "start",
        gap: 18,
        maxWidth: "var(--layout-max-partner)"
      }
    }, children)));
  }
  function App() {
    const [lang, setLang] = React.useState("en");
    const t = COPY[lang];
    const ar = lang === "ar";
    const [view, setView] = React.useState(0);
    const [listings, setListings] = React.useState(window.PARTNER_LISTINGS);
    const [presets, setPresets] = React.useState(window.PARTNER_PRESETS);
    const [orders, setOrders] = React.useState(window.PARTNER_ORDERS);
    const store = {
      listings,
      setListings,
      presets,
      setPresets,
      orders,
      setOrders
    };
    React.useEffect(() => {
      document.documentElement.dir = t.dir;
      document.body.dir = t.dir;
    }, [lang]);
    const V = [window.PartnerTonight, window.PartnerListBundle, window.PartnerBundles, window.PartnerPayouts, window.PartnerLedger, window.PartnerReviews, window.PartnerImpact, window.PartnerBranches][view];
    const liveQty = listings.filter(l => l.live).reduce((n, l) => n + (l.qty - l.sold), 0);
    return /*#__PURE__*/React.createElement(Shell, {
      t: t,
      ar: ar,
      view: view,
      setView: setView,
      lang: lang,
      setLang: setLang,
      liveQty: liveQty
    }, /*#__PURE__*/React.createElement(V, {
      key: view + lang,
      t: t,
      ar: ar,
      lang: lang,
      setLang: setLang,
      store: store,
      onList: () => setView(1),
      onDone: () => setView(0)
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/partner/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/partner/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Partner portal — screens. Composes design-system components only.
(function () {
  const {
    Button,
    IconButton,
    Icon,
    Input,
    SegmentedControl,
    Stepper,
    Badge,
    Card,
    Banner,
    Chip,
    Switch,
    ListRow,
    OrderRow,
    PayoutCard,
    LedgerRow,
    PartnerStat,
    ListingStep,
    PickupWindow,
    Toast,
    RatingStars,
    EmptyState,
    ImpactStat
  } = window.SurplusKWDesignSystem_97ec90;
  const mono = "var(--font-plex-mono), monospace";
  const WINDOWS = ["21:30–22:30", "22:00–23:00", "22:30–23:30"];
  const DAYS = [["sat", "Sat", "السبت"], ["sun", "Sun", "الأحد"], ["mon", "Mon", "الاثنين"], ["tue", "Tue", "الثلاثاء"], ["wed", "Wed", "الأربعاء"], ["thu", "Thu", "الخميس"], ["fri", "Fri", "الجمعة"]];
  const uid = () => "b" + Math.random().toString(36).slice(2, 7);
  const H1 = ({
    children,
    sub
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-title-lg-size)",
      lineHeight: 1.25,
      fontWeight: 600,
      letterSpacing: 0,
      margin: 0
    }
  }, children), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-size)",
      lineHeight: 1.7,
      color: "var(--color-text-secondary)",
      maxWidth: "70ch"
    }
  }, sub));
  const Panel = ({
    title,
    action,
    children,
    pad
  }) => /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid var(--color-border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-headline-size)",
      fontWeight: 600
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: pad ? {
      padding: 16,
      display: "grid",
      gap: 12
    } : undefined
  }, children));
  const Th = ({
    children,
    align
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro-size)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--color-text-tertiary)",
      textAlign: align || "start"
    }
  }, children);
  const Field = ({
    label,
    children
  }) => /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--color-text-secondary)"
    }
  }, label), children);

  /* ---------------- Bundle editor (create + edit, shared by List a bundle and My bundles) ---------------- */
  function BundleEditor({
    t,
    ar,
    draft,
    onChange,
    onSave,
    onDelete,
    onCancel,
    withDays,
    saveLabel
  }) {
    const set = (k, v) => onChange({
      ...draft,
      [k]: v
    });
    const days = draft.days || [];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "var(--color-surface-overlay)"
      },
      dir: t.dir
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 520,
        maxHeight: "90vh",
        overflowY: "auto",
        background: "var(--color-surface-raised)",
        borderRadius: "var(--radius-card)",
        border: "1px solid var(--color-border-subtle)",
        boxShadow: "var(--elevation-raised)",
        padding: 20,
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-title-size)",
        fontWeight: 600
      }
    }, draft.isNew ? t.newBundle : t.editBundle), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: t.cancelEdit,
      onClick: onCancel
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: t.nameEn
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.en,
      onChange: e => set("en", e.target.value),
      placeholder: "Bakery mix"
    })), /*#__PURE__*/React.createElement(Field, {
      label: t.nameAr
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.ar,
      onChange: e => set("ar", e.target.value),
      placeholder: "\u062E\u0644\u064A\u0637 \u0627\u0644\u0645\u062E\u0628\u0632",
      dir: "rtl"
    })), /*#__PURE__*/React.createElement(Field, {
      label: t.price
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.price,
      onChange: e => set("price", e.target.value),
      suffix: "KD"
    })), /*#__PURE__*/React.createElement(Field, {
      label: t.worth
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.worth,
      onChange: e => set("worth", e.target.value),
      suffix: "KD"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: t.qtyLabel
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Stepper, {
      value: draft.qty,
      min: 1,
      max: 40,
      onChange: v => set("qty", v)
    }))), /*#__PURE__*/React.createElement(Field, {
      label: t.photo
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 88,
        height: 64,
        borderRadius: "var(--radius-image)",
        overflow: "hidden",
        background: "var(--color-surface-sunken)",
        border: "1px solid var(--color-border-subtle)",
        display: "grid",
        placeItems: "center",
        flex: "none"
      }
    }, draft.photo ? /*#__PURE__*/React.createElement("img", {
      src: draft.photo,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro-size)",
        color: "var(--color-text-tertiary)"
      }
    }, t.noPhoto)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/*",
      style: {
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0
      },
      onChange: e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = () => set("photo", r.result);
        r.readAsDataURL(f);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        minHeight: "var(--size-control-md)",
        padding: "0 var(--space-200)",
        borderRadius: "var(--radius-control)",
        border: "1px solid var(--color-border-strong)",
        cursor: "pointer",
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 16
    }), t.uploadPhoto)), draft.photo && /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => set("photo", null)
    }, t.del))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.yourPhotos), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, window.PARTNER_PHOTOS.map(p => /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: () => set("photo", p),
      style: {
        width: 56,
        height: 44,
        padding: 0,
        borderRadius: "var(--radius-image)",
        overflow: "hidden",
        cursor: "pointer",
        border: draft.photo === p ? "2px solid var(--color-surface-brand)" : "1px solid var(--color-border-subtle)",
        background: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        lineHeight: 1.6,
        color: "var(--color-text-tertiary)"
      }
    }, t.photoNote))), /*#__PURE__*/React.createElement(Field, {
      label: t.windowLabel
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, WINDOWS.map(w => /*#__PURE__*/React.createElement(Chip, {
      key: w,
      selected: draft.window === w,
      onClick: () => set("window", w)
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, w))))), withDays && /*#__PURE__*/React.createElement(Field, {
      label: t.days
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, DAYS.map(([k, en, arn]) => /*#__PURE__*/React.createElement(Chip, {
      key: k,
      selected: days.includes(k),
      onClick: () => set("days", days.includes(k) ? days.filter(x => x !== k) : [...days, k])
    }, ar ? arn : en)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        lineHeight: 1.6,
        color: "var(--color-text-tertiary)",
        maxWidth: "34ch"
      }
    }, t.editorNote), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, onDelete && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onDelete
    }, t.del), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onCancel
    }, t.cancelEdit), /*#__PURE__*/React.createElement(Button, {
      onClick: onSave,
      disabled: !draft.en && !draft.ar
    }, saveLabel || t.save)))));
  }
  const blankDraft = () => ({
    id: uid(),
    isNew: true,
    en: "",
    ar: "",
    price: "2.000",
    worth: "6.500",
    window: WINDOWS[0],
    qty: 6,
    photo: null,
    days: ["sat", "sun", "mon", "tue", "wed", "thu"]
  });
  const Thumb = ({
    src,
    w = 44,
    h = 44
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      flex: "none",
      borderRadius: "var(--radius-image)",
      overflow: "hidden",
      background: "var(--color-surface-sunken)",
      border: "1px solid var(--color-border-subtle)"
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }));

  /* ---------------- Tonight ---------------- */
  function Tonight({
    t,
    ar,
    store,
    onList
  }) {
    const {
      listings,
      setListings,
      orders,
      setOrders
    } = store;
    const [toast, setToast] = React.useState(null);
    const [editing, setEditing] = React.useState(null);
    const collect = code => {
      setOrders(o => o.map(r => r.code === code ? {
        ...r,
        status: "collected"
      } : r));
      setToast(code + " · " + t.done);
    };
    const waiting = orders.filter(o => o.status !== "collected").length;
    const done = orders.filter(o => o.status === "collected").length;
    const liveQty = listings.filter(l => l.live).reduce((n, l) => n + (l.qty - l.sold), 0);
    const patch = (id, p) => setListings(ls => ls.map(l => l.id === id ? {
      ...l,
      ...p
    } : l));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(H1, {
      sub: `${t.branch} · ${t.area}`
    }, t.tonight), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(PickupWindow, {
      day: t.tonight,
      from: "21:30",
      to: "22:30"
    }), /*#__PURE__*/React.createElement(Button, {
      iconStart: "plus",
      onClick: onList
    }, t.listCta))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,minmax(0,1fr))",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.live,
      value: String(liveQty),
      sub: t.listedAt,
      icon: "package"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.reserved,
      value: String(waiting),
      sub: t.ofBundles,
      icon: "shopping-bag",
      tone: "fresh"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.closesIn,
      value: "46 min",
      sub: "22:30",
      icon: "clock",
      tone: "urgent"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.net,
      value: "KD 24.000",
      sub: t.afterFee,
      icon: "banknote"
    })), /*#__PURE__*/React.createElement(Panel, {
      title: t.liveListings,
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        iconStart: "plus",
        onClick: onList
      }, t.addBundle)
    }, listings.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(EmptyState, {
      icon: "package",
      title: t.noListings,
      body: t.noListingsBody,
      action: /*#__PURE__*/React.createElement(Button, {
        onClick: onList
      }, t.listCta)
    })) : listings.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.id,
      style: {
        padding: "14px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gridTemplateColumns: "auto minmax(0,1.4fr) auto auto auto",
        gap: 14,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Thumb, {
      src: l.photo
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 4,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, ar ? l.ar || l.en : l.en || l.ar), !l.live && /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, t.pausedToast.split("—")[0].trim())), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono,
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, "KD ", l.price, " \xB7 ", l.window)), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono,
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)",
        whiteSpace: "nowrap"
      }
    }, l.sold, "/", l.qty, " ", t.sold, " \xB7 ", l.qty - l.sold, " ", t.remaining), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setEditing({
        ...l,
        isNew: false
      })
    }, t.editOne), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => {
        patch(l.id, {
          live: !l.live
        });
        setToast(l.live ? t.pausedToast : t.resumedToast);
      }
    }, l.live ? t.pauseOne : t.resumeOne), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => {
        setListings(ls => ls.filter(x => x.id !== l.id));
        setToast(t.removedToast);
      }
    }, t.removeOne))))), /*#__PURE__*/React.createElement(Banner, {
      tone: "fresh",
      title: t.attested
    }, t.attestedBody), /*#__PURE__*/React.createElement(Panel, {
      title: t.board,
      action: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 8,
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ds-numeric",
        style: {
          fontSize: "var(--text-caption-size)",
          color: "var(--color-text-secondary)"
        }
      }, done, "/", orders.length, " ", t.done.toLowerCase()))
    }, orders.map(o => /*#__PURE__*/React.createElement(OrderRow, {
      key: o.code,
      code: o.code,
      customer: ar ? o.customerAr : o.customer,
      quantity: o.qty > 1 ? o.qty : undefined,
      pickupBy: o.by,
      status: o.status,
      bagLabel: ar ? "بقشة" : o.qty > 1 ? "bundles" : "bundle",
      statusLabel: o.status === "collected" ? t.done : o.status === "late" ? t.late : t.waitingS,
      actionLabel: t.handOver,
      onCheckIn: () => collect(o.code)
    }))), editing && /*#__PURE__*/React.createElement(BundleEditor, {
      t: t,
      ar: ar,
      draft: editing,
      onChange: setEditing,
      onSave: () => {
        patch(editing.id, editing);
        setEditing(null);
        setToast(t.savedToast);
      },
      onDelete: () => {
        setListings(ls => ls.filter(x => x.id !== editing.id));
        setEditing(null);
        setToast(t.removedToast);
      },
      onCancel: () => setEditing(null)
    }), toast && /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      onClose: () => setToast(null)
    }, toast));
  }

  /* ---------------- List a bundle (functional publish) ---------------- */
  function ListBundle({
    t,
    ar,
    store,
    onDone
  }) {
    const {
      presets,
      setPresets,
      listings,
      setListings
    } = store;
    const [draft, setDraft] = React.useState(() => ({
      ...blankDraft(),
      en: "Bakery mix",
      ar: "خليط المخبز",
      photo: window.PARTNER_PHOTOS[0]
    }));
    const [step, setStep] = React.useState(1);
    const [toast, setToast] = React.useState(null);
    const [savedPreset, setSavedPreset] = React.useState(false);
    const set = (k, v) => setDraft(d => ({
      ...d,
      [k]: v
    }));
    const usePreset = p => {
      setDraft({
        ...blankDraft(),
        en: p.en,
        ar: p.ar,
        price: p.price,
        worth: p.worth,
        window: p.window,
        qty: p.qty,
        photo: p.photo
      });
      setStep(3);
    };
    const publish = () => {
      setListings(ls => [...ls, {
        id: uid(),
        en: draft.en,
        ar: draft.ar,
        price: draft.price,
        worth: draft.worth,
        window: draft.window,
        qty: draft.qty,
        photo: draft.photo,
        sold: 0,
        live: true
      }]);
      setToast(t.publishedFrom(draft.qty));
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, {
      sub: t.startFrom
    }, t.nav[1], " ", /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        color: "var(--color-text-tertiary)",
        fontSize: "var(--text-body-size)",
        fontFamily: mono
      }
    }, "\xB7 60s")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, presets.map(p => /*#__PURE__*/React.createElement(Chip, {
      key: p.id,
      onClick: () => usePreset(p)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap"
      }
    }, ar ? p.ar : p.en, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      },
      dir: "ltr"
    }, p.qty, "\xD7 KD ", p.price))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 320px",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ListingStep, {
      index: 1,
      total: 3,
      title: t.howMany,
      hint: t.lastNight,
      done: step > 1
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      value: draft.qty,
      min: 1,
      max: 40,
      onChange: v => set("qty", v)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        set("qty", 6);
        setStep(2);
      }
    }, t.sameAsLast), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setStep(2)
    }, t.next))), /*#__PURE__*/React.createElement(ListingStep, {
      index: 2,
      total: 3,
      title: t.window,
      hint: t.windowHint,
      done: step > 2
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, WINDOWS.map(w => /*#__PURE__*/React.createElement(Button, {
      key: w,
      variant: w === draft.window ? "primary" : "secondary",
      onClick: () => {
        set("window", w);
        setStep(3);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric"
    }, w))))), /*#__PURE__*/React.createElement(ListingStep, {
      index: 3,
      total: 3,
      title: t.priceStep,
      hint: t.priceHint
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: t.nameEn
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.en,
      onChange: e => set("en", e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: t.nameAr
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.ar,
      onChange: e => set("ar", e.target.value),
      dir: "rtl"
    })), /*#__PURE__*/React.createElement(Field, {
      label: t.price
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.price,
      onChange: e => set("price", e.target.value),
      suffix: "KD"
    })), /*#__PURE__*/React.createElement(Field, {
      label: t.worth
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft.worth,
      onChange: e => set("worth", e.target.value),
      suffix: "KD"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: t.photo
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, window.PARTNER_PHOTOS.map(p => /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: () => set("photo", p),
      style: {
        width: 56,
        height: 44,
        padding: 0,
        borderRadius: "var(--radius-image)",
        overflow: "hidden",
        cursor: "pointer",
        border: draft.photo === p ? "2px solid var(--color-surface-brand)" : "1px solid var(--color-border-subtle)",
        background: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }))), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/*",
      style: {
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0
      },
      onChange: e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = () => set("photo", r.result);
        r.readAsDataURL(f);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 44,
        padding: "0 12px",
        borderRadius: "var(--radius-control)",
        border: "1px solid var(--color-border-strong)",
        cursor: "pointer",
        fontSize: "var(--text-caption-size)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 15
    }), t.uploadPhoto)))), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontSize: "var(--text-label-size)",
        lineHeight: 1.7,
        color: "var(--color-text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      defaultChecked: true,
      style: {
        width: 20,
        height: 20,
        marginTop: 2,
        accentColor: "var(--color-surface-brand)"
      }
    }), t.attestLabel), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: publish
    }, t.publish(draft.qty)), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      disabled: savedPreset,
      onClick: () => {
        setPresets(ps => [...ps, {
          id: uid(),
          en: draft.en,
          ar: draft.ar,
          price: draft.price,
          worth: draft.worth,
          window: draft.window,
          qty: draft.qty,
          photo: draft.photo,
          days: {
            en: "Sat–Thu",
            ar: "السبت–الخميس"
          }
        }]);
        setSavedPreset(true);
        setToast(t.presetSaved);
      }
    }, savedPreset ? t.presetSaved : t.savePreset))))), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-label-size)",
        fontWeight: 600
      }
    }, t.preview), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 6,
        padding: 12,
        borderRadius: "var(--radius-card)",
        background: "var(--color-surface-canvas)"
      }
    }, draft.photo && /*#__PURE__*/React.createElement("img", {
      src: draft.photo,
      alt: "",
      style: {
        width: "100%",
        height: 96,
        objectFit: "cover",
        borderRadius: "var(--radius-image)",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("strong", null, t.branch), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, ar ? draft.ar || draft.en : draft.en || draft.ar), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)",
        fontFamily: mono
      }
    }, draft.window, " \xB7 1.4 km"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: "var(--text-title-size)",
        fontWeight: 700,
        fontFamily: mono
      }
    }, "KD ", draft.price), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono,
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-tertiary)",
        textDecoration: "line-through"
      }
    }, "KD ", draft.worth)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "fresh"
    }, t.bakedToday)), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono,
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, draft.qty, " \xD7 ", t.remaining)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        lineHeight: 1.7,
        color: "var(--color-text-secondary)"
      }
    }, t.previewNote))), toast && /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      action: t.view,
      onAction: onDone,
      onClose: () => setToast(null)
    }, toast));
  }

  /* ---------------- My bundles (create / edit / delete / publish) ---------------- */
  function Bundles({
    t,
    ar,
    store,
    onDone
  }) {
    const {
      presets,
      setPresets,
      setListings
    } = store;
    const [editing, setEditing] = React.useState(null);
    const [toast, setToast] = React.useState(null);
    const save = () => {
      setPresets(ps => {
        const row = {
          id: editing.id,
          en: editing.en,
          ar: editing.ar,
          price: editing.price,
          worth: editing.worth,
          window: editing.window,
          qty: editing.qty,
          photo: editing.photo,
          days: {
            en: (editing.days || []).map(d => DAYS.find(x => x[0] === d)[1]).join(", ") || "—",
            ar: (editing.days || []).map(d => DAYS.find(x => x[0] === d)[2]).join("، ") || "—"
          },
          dayKeys: editing.days
        };
        return editing.isNew ? [...ps, row] : ps.map(p => p.id === editing.id ? row : p);
      });
      setEditing(null);
      setToast(t.savedToast);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(H1, {
      sub: t.bundlesNote
    }, t.bundles), /*#__PURE__*/React.createElement(Button, {
      iconStart: "plus",
      onClick: () => setEditing(blankDraft())
    }, t.addBundle)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
        gap: 12
      }
    }, presets.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      padded: true,
      style: {
        display: "grid",
        gap: 10,
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Thumb, {
      src: p.photo,
      w: 52,
      h: 52
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-headline-size)",
        fontWeight: 600,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, ar ? p.ar || p.en : p.en || p.ar), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, p.qty, "\xD7"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 4,
        fontFamily: mono,
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric"
    }, "KD ", p.price, " \xB7 KD ", p.worth), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric"
    }, p.window)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        minWidth: 0,
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-tertiary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 14
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, t.schedule, " \xB7 ", ar ? p.days.ar : p.days.en)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 2,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setListings(ls => [...ls, {
          id: uid(),
          en: p.en,
          ar: p.ar,
          price: p.price,
          worth: p.worth,
          window: p.window,
          qty: p.qty,
          photo: p.photo,
          sold: 0,
          live: true
        }]);
        setToast(t.publishedFrom(p.qty));
      }
    }, t.useNow), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setEditing({
        ...p,
        isNew: false,
        days: p.dayKeys || ["sat", "sun", "mon", "tue", "wed", "thu"]
      })
    }, t.edit))))), editing && /*#__PURE__*/React.createElement(BundleEditor, {
      t: t,
      ar: ar,
      draft: editing,
      onChange: setEditing,
      withDays: true,
      saveLabel: editing.isNew ? t.saveAdd : t.save,
      onSave: save,
      onDelete: editing.isNew ? undefined : () => {
        setPresets(ps => ps.filter(x => x.id !== editing.id));
        setEditing(null);
        setToast(t.deletedToast);
      },
      onCancel: () => setEditing(null)
    }), toast && /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      action: t.view,
      onAction: onDone,
      onClose: () => setToast(null)
    }, toast));
  }

  /* ---------------- Payouts ---------------- */
  function Payouts({
    t,
    ar
  }) {
    const cols = "minmax(132px,1.5fr) minmax(80px,.9fr) minmax(80px,.9fr) minmax(80px,.9fr) auto";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, null, t.payouts), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "320px minmax(0,1fr)",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PayoutCard, {
      amount: 184.5,
      period: t.thisWeek,
      bags: 92,
      nextDate: ar ? "الأحد 9 أغسطس" : "Sun 9 Aug",
      note: ar ? "92 بقشة مبيعة · التحويل الأحد 9 أغسطس" : undefined
    }), /*#__PURE__*/React.createElement(Card, {
      padded: true,
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, t.arriving), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "credit-card",
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, t.bank)))), /*#__PURE__*/React.createElement(Panel, {
      title: t.history
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gridTemplateColumns: cols,
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Th, null, t.period), /*#__PURE__*/React.createElement(Th, null, t.gross), /*#__PURE__*/React.createElement(Th, null, t.fee), /*#__PURE__*/React.createElement(Th, null, t.netCol), /*#__PURE__*/React.createElement(Th, null, t.status)), window.PARTNER_PAYOUTS.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.period.en,
      style: {
        padding: "14px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gridTemplateColumns: cols,
        gap: 16,
        alignItems: "center",
        fontSize: "var(--text-body-size)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, ar ? p.period.ar : p.period.en), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, p.gross), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono,
        color: "var(--color-text-secondary)"
      }
    }, "\u2212", p.fee), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono,
        fontWeight: 700
      }
    }, p.net), /*#__PURE__*/React.createElement(Badge, {
      tone: p.paid ? "fresh" : "neutral"
    }, p.paid ? t.paid : t.pending)))))));
  }

  /* ---------------- Inspection log ---------------- */
  function Ledger({
    t,
    ar
  }) {
    const cols = "minmax(96px,1.1fr) minmax(72px,1fr) minmax(72px,1fr) minmax(72px,1fr) auto";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, {
      sub: t.ledgerNote
    }, t.ledger), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      selected: true
    }, t.last7), /*#__PURE__*/React.createElement(Chip, null, t.allBranches), /*#__PURE__*/React.createElement(Chip, null, t.branch), /*#__PURE__*/React.createElement("div", {
      style: {
        marginInlineStart: "auto"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconStart: "download"
    }, t.export))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gridTemplateColumns: cols,
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Th, null, t.colOrder), /*#__PURE__*/React.createElement(Th, null, t.colListed), /*#__PURE__*/React.createElement(Th, null, t.colCloses), /*#__PURE__*/React.createElement(Th, null, t.colCollected), /*#__PURE__*/React.createElement(Th, null, t.colAttest)), window.PARTNER_LEDGER.map(r => /*#__PURE__*/React.createElement(LedgerRow, _extends({
      key: r.orderId
    }, r))))));
  }

  /* ---------------- Reviews ---------------- */
  function Reviews({
    t,
    ar
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, {
      sub: t.reviewsNote
    }, t.reviews), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.avgTonight,
      value: "4.7",
      sub: "3 reviews",
      icon: "star",
      tone: "fresh"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.allTime,
      value: "4.6",
      sub: "418 reviews",
      icon: "star"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.collected,
      value: "92",
      sub: t.thisWeek,
      icon: "shopping-bag"
    })), /*#__PURE__*/React.createElement(Panel, {
      title: t.reviews
    }, window.PARTNER_REVIEWS.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.name,
      style: {
        padding: "14px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600
      }
    }, ar ? r.nameAr : r.name), /*#__PURE__*/React.createElement(RatingStars, {
      value: r.stars,
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-body-size)",
        lineHeight: 1.75,
        color: "var(--color-text-secondary)"
      }
    }, ar ? r.ar : r.en)))));
  }

  /* ---------------- Analytics (operations numbers; the marketing story lives in the pitch decks) ---------------- */
  function Impact({
    t,
    ar
  }) {
    const rows = window.PARTNER_IMPACT_BRANCHES;
    const cols = "minmax(140px,1.6fr) repeat(4,minmax(64px,.8fr))";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, {
      sub: t.impactNote
    }, t.impact), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        fontSize: "var(--text-caption-size)",
        color: "var(--color-text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 15,
      style: {
        color: "var(--color-fresh)"
      }
    }), /*#__PURE__*/React.createElement("span", null, t.verified)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,minmax(0,1fr))",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.sellThrough,
      value: "94%",
      sub: t.sellThroughSub,
      icon: "package",
      tone: "fresh"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.bundlesRescued,
      value: "592",
      sub: t.internal,
      icon: "shopping-bag"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.avgPrice,
      value: "KD 2.180",
      sub: t.avgPriceSub,
      icon: "banknote"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.bestNight,
      value: "Thu",
      sub: t.bestNightSub,
      icon: "moon"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,minmax(0,1fr))",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.mealsDiverted,
      value: "1,184",
      sub: t.internal,
      icon: "utensils"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.kgFood,
      value: "296 kg",
      sub: t.internal,
      icon: "leaf"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.disposalSaved,
      value: "KD 118",
      sub: t.internal,
      icon: "banknote"
    }), /*#__PURE__*/React.createElement(PartnerStat, {
      label: t.ytd,
      value: "1,284",
      sub: t.mealsDiverted,
      icon: "calendar"
    })), /*#__PURE__*/React.createElement(Panel, {
      title: t.perBranch
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gridTemplateColumns: cols,
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Th, null, t.branches), /*#__PURE__*/React.createElement(Th, null, t.bundlesRescued), /*#__PURE__*/React.createElement(Th, null, t.mealsDiverted), /*#__PURE__*/React.createElement(Th, null, t.kgFood), /*#__PURE__*/React.createElement(Th, null, t.co2)), rows.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.en,
      style: {
        padding: "13px 16px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "grid",
        gridTemplateColumns: cols,
        gap: 14,
        alignItems: "center",
        fontSize: "var(--text-body-size)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, ar ? b.ar : b.en), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, b.bundles), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, b.meals), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, b.kg), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontFamily: mono
      }
    }, b.co2))))));
  }

  /* ---------------- Branches ---------------- */
  function Branches({
    t,
    ar,
    lang,
    setLang
  }) {
    const [notifNew, setNotifNew] = React.useState(true);
    const [notifClose, setNotifClose] = React.useState(true);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, null, t.branches), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 340px",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: t.branches,
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        iconStart: "plus"
      }, t.addBranch)
    }, window.PARTNER_BRANCHES.map(b => /*#__PURE__*/React.createElement(ListRow, {
      key: b.en,
      icon: "store",
      label: ar ? b.ar : b.en,
      value: /*#__PURE__*/React.createElement(Badge, {
        tone: b.live ? "fresh" : "neutral"
      }, b.live ? t.active : t.closedTonight)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: t.staff
    }, window.PARTNER_STAFF.map(s => /*#__PURE__*/React.createElement(ListRow, {
      key: s.en,
      icon: "user",
      label: ar ? s.ar : s.en,
      value: ar ? s.role.ar : s.role.en
    }))), /*#__PURE__*/React.createElement(Panel, {
      title: t.notif
    }, /*#__PURE__*/React.createElement(ListRow, {
      icon: "bell",
      label: t.notifNew,
      sub: t.notifNewSub,
      value: /*#__PURE__*/React.createElement(Switch, {
        checked: notifNew,
        onChange: setNotifNew
      })
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "clock",
      label: t.notifClose,
      sub: t.notifCloseSub,
      value: /*#__PURE__*/React.createElement(Switch, {
        checked: notifClose,
        onChange: setNotifClose
      })
    })), /*#__PURE__*/React.createElement(Panel, {
      title: t.language,
      pad: true
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: lang,
      onChange: setLang,
      options: [{
        value: "en",
        label: "English"
      }, {
        value: "ar",
        label: "العربية"
      }]
    })))));
  }
  Object.assign(window, {
    PartnerTonight: Tonight,
    PartnerListBundle: ListBundle,
    PartnerBundles: Bundles,
    PartnerPayouts: Payouts,
    PartnerLedger: Ledger,
    PartnerReviews: Reviews,
    PartnerImpact: Impact,
    PartnerBranches: Branches
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/partner/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ticket/kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const mfmt = ar => m => ar ? m >= 60 ? "باقي " + Math.floor(m / 60) + " س " + m % 60 + " د" : "باقي " + m + " دقيقة" : m >= 60 ? Math.floor(m / 60) + "h " + m % 60 + "m left" : m + " min left";
  const RC = ar => ar ? {
    bagLabel: "كيس",
    slideLabel: "اسحب لما الموظف يكون جاهز",
    doneLabel: "تم الاستلام"
  } : {};
  const {
    Button,
    Chip,
    CountdownPill,
    PriceTag,
    Icon,
    IconButton,
    Input,
    SegmentedControl,
    TabBar,
    RatingStars,
    RedemptionCode,
    PaymentMethodRow,
    Stepper,
    Banner,
    ImpactStat,
    Badge
  } = window.SurplusKWDesignSystem_97ec90;
  const COPY = {
    en: {
      dir: "ltr",
      head: "TONIGHT / 04 AUG",
      sub: "12 CHITS OPEN · SALMIYA",
      search: "FIND A PARTNER",
      tabs: ["Chits", "Map", "Mine", "Me"],
      inside: "CONTENTS",
      insideBody: "Same-day bread and pastry. Mix decided by the kitchen at close. Allergen sheet per item at the counter.",
      reserve: "TAKE CHIT",
      code: "CHIT",
      collect: "COLLECT BETWEEN",
      paid: "PAID",
      worth: "WORTH",
      left: "LEFT"
    },
    ar: {
      dir: "rtl",
      head: "الليلة / ٤ أغسطس",
      sub: "١٢ قسيمة مفتوحة · السالمية",
      search: "دوّر على شريك",
      tabs: ["القسائم", "خريطة", "طلباتي", "حسابي"],
      inside: "المحتويات",
      insideBody: "خبز ومعجنات من اليوم. الخلطة يقررها المطبخ عند الإغلاق. ورقة المكوّنات متوفرة عند الكاونتر.",
      reserve: "خذ القسيمة",
      code: "قسيمة",
      collect: "الاستلام بين",
      paid: "مدفوع",
      worth: "القيمة",
      left: "متبقي"
    }
  };
  const CHITS = [{
    n: "01",
    p: "KUWAIT BAKEHOUSE",
    pa: "مخبز الكويت",
    now: 2,
    was: 6.5,
    from: "21:30",
    to: "22:30",
    km: 1.4,
    left: 2,
    m: 42
  }, {
    n: "02",
    p: "BEIT BEIRUT",
    pa: "بيت بيروت",
    now: 3,
    was: 9,
    from: "22:00",
    to: "23:00",
    km: 2.1,
    left: 5,
    m: 88
  }, {
    n: "03",
    p: "SLIDER STATION",
    pa: "سلايدر ستيشن",
    now: 2.5,
    was: 7,
    from: "22:30",
    to: "23:30",
    km: 3.4,
    left: 1,
    m: 11
  }, {
    n: "04",
    p: "CO-OP JABRIYA",
    pa: "جمعية الجابرية",
    now: 1.5,
    was: 5,
    from: "20:00",
    to: "21:00",
    km: 0.8,
    left: 9,
    m: 150
  }];
  function Row({
    c,
    ar,
    t
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 16px",
        borderBottom: "1.5px dashed var(--color-border-default)",
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 8,
        alignItems: "baseline",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric cap",
      style: {
        fontSize: 12,
        color: "var(--color-text-primary)"
      }
    }, c.n), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "var(--text-headline-size)",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, ar ? c.pa : c.p)), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: 1
      }
    }, c.now.toFixed(3))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap ds-numeric"
    }, c.from, "\u2013", c.to, " \xB7 ", c.km, " KM \xB7 ", c.left, " ", t.left), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric cap",
      style: {
        textDecoration: "line-through"
      }
    }, t.worth, " ", c.was.toFixed(3))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(CountdownPill, {
      format: mfmt(ar),
      minutesLeft: c.m
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary"
    }, t.reserve)));
  }
  function Browse({
    t,
    ar
  }) {
    const [f, setF] = React.useState("all");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 16px 14px",
        borderBottom: "1.5px solid var(--color-border-default)",
        background: "var(--color-surface-inverse)",
        color: "var(--color-text-inverse)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap",
      style: {
        color: "inherit",
        opacity: .75
      }
    }, "SURPLUS KW"), /*#__PURE__*/React.createElement("span", {
      className: "cap ds-numeric",
      style: {
        color: "inherit",
        opacity: .75
      }
    }, "21:06")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 34,
        lineHeight: "36px",
        marginTop: 12,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "inherit"
      }
    }, t.head), /*#__PURE__*/React.createElement("p", {
      className: "cap",
      style: {
        color: "inherit",
        opacity: .75,
        marginTop: 8
      }
    }, t.sub)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: t.search
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        overflow: "auto",
        padding: "0 16px 12px"
      }
    }, [["all", ar ? "الكل" : "ALL"], ["bakery", ar ? "مخبز" : "BAKERY"], ["meals", ar ? "وجبات" : "MEALS"], ["grocery", ar ? "جمعية" : "GROCERY"]].map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
      key: k,
      selected: f === k,
      onClick: () => setF(k),
      style: {
        flex: "none"
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      className: "dash"
    }), CHITS.map(c => /*#__PURE__*/React.createElement(Row, {
      key: c.n,
      c: c,
      ar: ar,
      t: t
    })), /*#__PURE__*/React.createElement("p", {
      className: "cap",
      style: {
        padding: "16px",
        textAlign: "center"
      }
    }, "NO PHOTOS. WHAT YOU SEE IS WHAT IS PRINTED."));
  }
  function Detail({
    t,
    ar
  }) {
    const c = CHITS[0];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px",
        borderBottom: "1.5px solid var(--color-border-default)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      mirror: true
    }), /*#__PURE__*/React.createElement("span", {
      className: "cap ds-numeric"
    }, t.code, " ", c.n), /*#__PURE__*/React.createElement(IconButton, {
      icon: "share-2",
      label: "Share"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 16px",
        display: "grid",
        gap: 6,
        borderBottom: "1.5px dashed var(--color-border-default)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 30,
        lineHeight: "32px",
        fontWeight: 800,
        letterSpacing: "-0.02em"
      }
    }, ar ? c.pa : c.p), /*#__PURE__*/React.createElement("span", {
      className: "cap ds-numeric"
    }, "BLOCK 10, SALMIYA \xB7 ", c.km, " KM"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(RatingStars, {
      value: 4.7,
      count: 218
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 16px",
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, t.paid), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: 52,
        lineHeight: 1,
        fontWeight: 700
      }
    }, c.now.toFixed(3))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 4,
        textAlign: "end"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, t.worth), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: 22,
        textDecoration: "line-through",
        color: "var(--color-text-secondary)"
      }
    }, c.was.toFixed(3)), /*#__PURE__*/React.createElement(Badge, {
      tone: "deal"
    }, "\u221269%"))), /*#__PURE__*/React.createElement("div", {
      className: "dash"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, t.collect), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: 28,
        fontWeight: 700
      }
    }, c.from, " \u2013 ", c.to), /*#__PURE__*/React.createElement(CountdownPill, {
      format: mfmt(ar),
      minutesLeft: c.m
    })), /*#__PURE__*/React.createElement("div", {
      className: "dash"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, t.inside), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-body-size)"
      }
    }, t.insideBody)), /*#__PURE__*/React.createElement("div", {
      className: "dash"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, "LISTED"), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric cap"
    }, "21:04")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, "ATTESTED BY"), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric cap"
    }, "SHIFT MGR \xB7 A.K.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, "LICENCE"), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric cap"
    }, "PAFN 2019/4471"))), /*#__PURE__*/React.createElement("div", {
      className: "dash"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PaymentMethodRow, {
      method: "knet",
      selected: true
    }), /*#__PURE__*/React.createElement(PaymentMethodRow, {
      method: "applepay"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      value: 1,
      max: c.left,
      onChange: () => {}
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true
    }, t.reserve, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric"
    }, c.now.toFixed(3))))));
  }
  function Redeem({
    t,
    ar
  }) {
    const c = CHITS[0];
    const [done, setDone] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1.5px solid var(--color-border-default)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      mirror: true
    }), /*#__PURE__*/React.createElement("span", {
      className: "cap"
    }, ar ? "قسيمتي" : "MY CHIT"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "info",
      label: "Help"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--color-surface-inverse)",
        color: "var(--color-text-inverse)",
        padding: "28px 16px",
        display: "grid",
        gap: 10,
        justifyItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cap",
      style: {
        color: "inherit",
        opacity: .7
      }
    }, ar ? c.pa : c.p), /*#__PURE__*/React.createElement("span", {
      className: "ds-numeric",
      style: {
        fontSize: 64,
        lineHeight: "64px",
        fontWeight: 700,
        letterSpacing: "0.02em"
      }
    }, "4821"), /*#__PURE__*/React.createElement("span", {
      className: "cap ds-numeric",
      style: {
        color: "inherit",
        opacity: .7
      }
    }, c.from, "\u2013", c.to, " \xB7 1 BAG \xB7 KD ", c.now.toFixed(3))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 16px",
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(RedemptionCode, _extends({}, RC(ar), {
      code: "KW-4821",
      partner: ar ? c.pa : c.p,
      window: c.from + "–" + c.to,
      quantity: 1,
      state: done ? "redeemed" : "ready",
      onRedeem: () => setDone(true)
    })), /*#__PURE__*/React.createElement(Banner, {
      tone: "time",
      title: ar ? "باقي ٢٦ دقيقة" : "26 MIN LEFT"
    }, ar ? "متأخر؟ خبّر الشريك." : "Running late? Tell the partner."), /*#__PURE__*/React.createElement("div", {
      className: "dash"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "receipt",
      value: 12,
      unit: ar ? "قسيمة" : "chits",
      label: ar ? "منذ مارس" : "since March"
    }), /*#__PURE__*/React.createElement(ImpactStat, {
      icon: "wallet",
      value: "41",
      unit: "KD",
      tone: "brand",
      label: ar ? "وفّرتها" : "kept"
    }))));
  }
  function App() {
    const [lang, setLang] = React.useState("en");
    const t = COPY[lang];
    const ar = lang === "ar";
    const [dark, setDark] = React.useState(false);
    const [tab, setTab] = React.useState("browse");
    React.useEffect(() => {
      document.body.dataset.theme = dark ? "dark" : "light";
      document.body.dir = t.dir;
    }, [dark, lang]);
    const frame = (el, cap, tb) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "phone",
      dir: t.dir
    }, /*#__PURE__*/React.createElement("div", {
      className: "scroll"
    }, el), /*#__PURE__*/React.createElement(TabBar, {
      value: tb,
      onChange: setTab,
      items: t.tabs.map((l, i) => ({
        value: ["browse", "map", "orders", "me"][i],
        label: l,
        icon: ["receipt", "map", "shopping-bag", "user"][i],
        badge: i === 2 ? 1 : undefined
      }))
    })), /*#__PURE__*/React.createElement("div", {
      className: "caption"
    }, cap));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        justifyContent: "center",
        padding: "16px 0 0"
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: lang,
      onChange: setLang,
      options: [{
        value: "en",
        label: "EN"
      }, {
        value: "ar",
        label: "ع"
      }]
    }), /*#__PURE__*/React.createElement(SegmentedControl, {
      value: dark ? "dark" : "light",
      onChange: v => setDark(v === "dark"),
      options: [{
        value: "light",
        label: "Paper"
      }, {
        value: "dark",
        label: "Carbon"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stagewrap"
    }, frame(/*#__PURE__*/React.createElement(Browse, {
      t: t,
      ar: ar
    }), "Browse", tab), frame(/*#__PURE__*/React.createElement(Detail, {
      t: t,
      ar: ar
    }), "Bag detail", tab), frame(/*#__PURE__*/React.createElement(Redeem, {
      t: t,
      ar: ar
    }), "Redemption", "orders")));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ticket/kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BagCard = __ds_scope.BagCard;

__ds_ns.CountdownPill = __ds_scope.CountdownPill;

__ds_ns.CoverPlate = __ds_scope.CoverPlate;

__ds_ns.ImpactStat = __ds_scope.ImpactStat;

__ds_ns.MapPin = __ds_scope.MapPin;

__ds_ns.PaymentMethodRow = __ds_scope.PaymentMethodRow;

__ds_ns.PickupWindow = __ds_scope.PickupWindow;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.RedemptionCode = __ds_scope.RedemptionCode;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.LedgerRow = __ds_scope.LedgerRow;

__ds_ns.ListingStep = __ds_scope.ListingStep;

__ds_ns.OrderRow = __ds_scope.OrderRow;

__ds_ns.PartnerStat = __ds_scope.PartnerStat;

__ds_ns.PayoutCard = __ds_scope.PayoutCard;

})();
