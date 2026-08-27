// Internal ping so the team sees signups land in real time.

import { brand, esc, layout, panel } from './brand.js';

/**
 * @param {object} p
 * @param {string} p.email
 * @param {string} [p.area]
 * @param {string} [p.source]
 * @param {string} [p.referrer]
 * @param {string} [p.userAgent]
 * @param {number} [p.total]      Total live subscribers after this signup.
 * @param {string} p.dashboardUrl
 * @param {boolean} [p.alreadyOnList]
 * @returns {{subject:string, html:string, text:string}}
 */
export function adminNotifyEmail({
  email,
  area,
  source,
  referrer,
  userAgent,
  total,
  dashboardUrl,
  alreadyOnList = false,
}) {
  const kind = alreadyOnList ? 'Repeat signup' : 'New signup';
  const subject = `${kind}: ${email}${area ? ` (${area})` : ''}`;

  const body = `
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500}">${esc(kind)}</div>
    <h1 style="margin:10px 0 6px;font-size:25px;line-height:1.2;font-weight:700;letter-spacing:-.03em;color:${brand.ink900};word-break:break-word">${esc(email)}</h1>
    ${
      total
        ? `<p style="margin:0;color:${brand.ink500};font-size:14.5px">${esc(String(total))} ${total === 1 ? 'person is' : 'people are'} on the waitlist.</p>`
        : ''
    }

    ${panel([
      { label: 'Where', value: area },
      { label: 'Source', value: source },
      { label: 'Referrer', value: referrer },
      { label: 'User agent', value: userAgent },
    ])}

    <p style="margin:0"><a href="${esc(dashboardUrl)}" style="color:${brand.violet700};font-weight:600;text-decoration:none">Open the waitlist table &rarr;</a></p>
  `;

  const text = [
    `${kind}: ${email}`,
    total ? `${total} on the waitlist.` : null,
    '',
    area ? `Where: ${area}` : null,
    source ? `Source: ${source}` : null,
    referrer ? `Referrer: ${referrer}` : null,
    userAgent ? `User agent: ${userAgent}` : null,
    '',
    `Waitlist table: ${dashboardUrl}`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return {
    subject,
    html: layout({
      title: subject,
      preheader: `${area ? area + ' · ' : ''}${source || 'landing page'}`,
      body,
    }),
    text,
  };
}
