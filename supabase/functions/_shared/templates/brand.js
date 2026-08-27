// Bugsha email design tokens + shared layout.
//
// Plain ESM JavaScript on purpose: this module is imported by the Deno edge
// functions AND by scripts/preview-emails.mjs under Node, with no build step
// in either direction. Keep it dependency-free.

export const brand = {
  name: 'Bugsha',
  tagline: 'Tonight’s best food is already made',
  ink: '#1b1720',
  purple: '#5B21B6',
  plum: '#1d102a',
  cream: '#f5f0e8',
  canvas: '#faf8fb',
  muted: '#6d6673',
  line: '#e8e3e8',
  gold: '#f3bd36',
  lilac: '#ceb4f7',
  white: '#ffffff',
};

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";

/** Escape a value for safe interpolation into HTML. */
export function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** The Bugsha mark, inlined as SVG so it needs no image hosting. */
function mark(size = 30, fill = brand.white) {
  return `<svg width="${size}" height="${size}" viewBox="410 230 380 340" role="presentation" aria-hidden="true" style="display:block">
      <path d="M600 250 770 400 600 550 430 400 600 250Z" fill="${fill}"/>
      <path d="M509 345h182l-91 91-91-91Z" fill="${brand.purple}" opacity=".55"/>
    </svg>`;
}

/**
 * Bulletproof-ish CTA button. Table-based so Outlook renders the fill.
 */
export function button(href, label, { bg = brand.purple, fg = brand.white } = {}) {
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:26px 0 6px">
    <tr><td align="center" bgcolor="${bg}" style="border-radius:13px">
      <a href="${esc(href)}" style="display:inline-block;padding:14px 26px;font-family:${FONT};font-size:15px;font-weight:700;letter-spacing:-.01em;color:${fg};text-decoration:none;border-radius:13px">${esc(label)}</a>
    </td></tr>
  </table>`;
}

/**
 * Wrap body HTML in the Bugsha shell: purple masthead, cream card, footer.
 *
 * @param {object} opts
 * @param {string} opts.title      Preheader-adjacent title, used for <title>.
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
<!--[if mso]><style>body,table,td,a{font-family:Arial,Helvetica,sans-serif !important}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:${brand.canvas};-webkit-font-smoothing:antialiased">
<span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;mso-hide:all">${esc(preheader)}</span>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:${brand.canvas}">
  <tr><td align="center" style="padding:32px 16px">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="width:600px;max-width:100%;border-collapse:separate">

      <!-- masthead -->
      <tr><td style="background:${brand.purple};border-radius:20px 20px 0 0;padding:26px 30px">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="34" style="vertical-align:middle">${mark(30)}</td>
            <td style="vertical-align:middle;padding-left:10px;font-family:${FONT};font-size:19px;font-weight:800;letter-spacing:-.02em;color:${brand.white}">${brand.name}</td>
          </tr>
        </table>
      </td></tr>

      <!-- card -->
      <tr><td style="background:${brand.white};padding:36px 30px 30px;font-family:${FONT};font-size:16px;line-height:1.62;color:${brand.ink}">
        ${body}
      </td></tr>

      <!-- footer -->
      <tr><td style="background:${brand.white};border-radius:0 0 20px 20px;border-top:1px solid ${brand.line};padding:22px 30px 28px;font-family:${FONT};font-size:12.5px;line-height:1.6;color:${brand.muted}">
        <div style="font-weight:700;color:${brand.ink};letter-spacing:-.01em">${brand.name}</div>
        <div style="margin-top:3px">${esc(brand.tagline)}</div>
        ${footer ? `<div style="margin-top:12px">${footer}</div>` : ''}
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/** Soft highlight panel used for "here's what we saved" style detail blocks. */
export function panel(rows) {
  const cells = rows
    .filter((r) => r && r.value)
    .map(
      (r) => `<tr>
        <td style="padding:7px 0;font-size:10px;font-weight:840;letter-spacing:.16em;text-transform:uppercase;color:${brand.muted};white-space:nowrap;vertical-align:top;width:120px">${esc(r.label)}</td>
        <td style="padding:7px 0 7px 14px;font-size:14.5px;color:${brand.ink};vertical-align:top;word-break:break-word">${esc(r.value)}</td>
      </tr>`,
    )
    .join('');
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:${brand.cream};border-radius:15px;padding:8px 18px;margin:22px 0">
    ${cells}
  </table>`;
}
