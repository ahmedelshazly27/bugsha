// Bugsha email design tokens + shared layout.
//
// Values come from the design system (.claude/skills/bugsha-design/tokens/):
// the brand is Violet #5B21B6 and white, TWO COLOURS ONLY. Status and emphasis
// are carried by tint depth and weight, never by adding a hue — so everything
// below resolves to the violet ramp, the ink ramp, or white.
//
// Plain ESM JavaScript on purpose: this module is imported by the Deno edge
// functions AND by scripts/preview-emails.mjs under Node, with no build step
// in either direction. Keep it dependency-free.

export const brand = {
  name: 'Bugsha',
  tagline: 'Tonight’s best food is already made',

  // violet ramp — the brand colour
  violet900: '#2E1065',
  violet800: '#4C1D95',
  violet700: '#5B21B6',
  violet200: '#DDD6FE',
  violet100: '#EDE9FE',
  violet50: '#F5F3FF',

  // ink ramp — text and structure
  ink900: '#17141F',
  ink700: '#312B40',
  ink500: '#6B6579',
  ink400: '#9A94A8',
  ink200: '#E7E4EE',
  ink100: '#F1EFF6',

  paper: '#FFFFFF',
  canvas: '#F8F7FB',
};

// Archivo is the brand face. Most email clients ignore webfonts, so the
// fallback stack has to hold the design on its own.
const FONT =
  "'Archivo','Helvetica Neue',Helvetica,Arial,system-ui,sans-serif";

/** Escape a value for safe interpolation into HTML. */
export function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * The Kerchief: a square of cloth with its top corner turned down.
 *
 * One colour only. The turned-down corner is a lighter plane, never a cut-out,
 * so on a white mark over a coloured field the fold takes the field colour at
 * full opacity — otherwise the default white fold is invisible.
 */
export function kerchief(size = 30, { color = brand.paper, fold = brand.violet700, foldOpacity = 1 } = {}) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" role="presentation" aria-hidden="true" style="display:block">
      <path fill="${color}" d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"/>
      <path fill="${fold}" fill-opacity="${foldOpacity}" d="M12.5 14h23L24 25.5 12.5 14Z"/>
    </svg>`;
}

/** The full lockup: mark + wordmark in live type, one colour throughout. */
function lockup(size = 30, color = brand.paper, fold = brand.violet700) {
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td style="vertical-align:middle">${kerchief(size, { color, fold })}</td>
        <td style="vertical-align:middle;padding-left:${Math.round(size * 0.4)}px;font-family:${FONT};font-size:${Math.round(size * 1.24)}px;font-weight:600;letter-spacing:-.03em;line-height:1;color:${color}">${brand.name}</td>
      </tr>
    </table>`;
}

/** Table-based CTA so Outlook renders the fill. */
export function button(href, label, { bg = brand.violet700, fg = brand.paper } = {}) {
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:26px 0 6px">
    <tr><td align="center" bgcolor="${bg}" style="border-radius:8px">
      <a href="${esc(href)}" style="display:inline-block;padding:14px 26px;font-family:${FONT};font-size:15px;font-weight:600;letter-spacing:-.01em;color:${fg};text-decoration:none;border-radius:8px">${esc(label)}</a>
    </td></tr>
  </table>`;
}

/**
 * Wrap body HTML in the Bugsha shell: violet masthead, white card, footer.
 *
 * @param {object} opts
 * @param {string} opts.title      Used for <title>.
 * @param {string} opts.preheader  Hidden inbox-preview line.
 * @param {string} opts.body       Inner HTML.
 * @param {string} [opts.footer]   Extra footer HTML (unsubscribe, etc).
 */
export function layout({ title, preheader, body, footer = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet">
<!--[if mso]><style>body,table,td,a{font-family:Arial,Helvetica,sans-serif !important}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:${brand.canvas};-webkit-font-smoothing:antialiased">
<span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;mso-hide:all">${esc(preheader)}</span>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:${brand.canvas}">
  <tr><td align="center" style="padding:32px 16px">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="width:600px;max-width:100%;border-collapse:separate">

      <!-- masthead -->
      <tr><td style="background:${brand.violet700};border-radius:16px 16px 0 0;padding:26px 30px">
        ${lockup(30)}
      </td></tr>

      <!-- card -->
      <tr><td style="background:${brand.paper};padding:36px 30px 30px;font-family:${FONT};font-size:16px;line-height:1.62;color:${brand.ink900}">
        ${body}
      </td></tr>

      <!-- footer -->
      <tr><td style="background:${brand.paper};border-radius:0 0 16px 16px;border-top:1px solid ${brand.ink200};padding:22px 30px 28px;font-family:${FONT};font-size:12.5px;line-height:1.6;color:${brand.ink500}">
        <div style="font-weight:600;color:${brand.ink900};letter-spacing:-.02em">${brand.name}</div>
        <div style="margin-top:3px">${esc(brand.tagline)}</div>
        ${footer ? `<div style="margin-top:12px">${footer}</div>` : ''}
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/** Label/value detail block on a violet tint — a brand tint, not a third hue. */
export function panel(rows) {
  const cells = rows
    .filter((r) => r && r.value)
    .map(
      (r) => `<tr>
        <td style="padding:7px 0;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500};white-space:nowrap;vertical-align:top;width:120px">${esc(r.label)}</td>
        <td style="padding:7px 0 7px 14px;font-size:14.5px;color:${brand.ink900};vertical-align:top;word-break:break-word">${esc(r.value)}</td>
      </tr>`,
    )
    .join('');
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:${brand.violet50};border-radius:10px;padding:8px 18px;margin:22px 0">
    ${cells}
  </table>`;
}
