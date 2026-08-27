// Internal ping so the team sees signups land in real time.

import { brand, esc, layout, panel } from './brand.js';

/**
 * @param {object} p
 * @param {string} p.email
 * @param {string} [p.city]
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
  city,
  source,
  referrer,
  userAgent,
  total,
  dashboardUrl,
  alreadyOnList = false,
}) {
  const kind = alreadyOnList ? 'Repeat signup' : 'New signup';
  const subject = `${kind}: ${email}${city ? ` (${city})` : ''}`;

  const body = `
    <div style="font-size:11px;font-weight:840;letter-spacing:.16em;text-transform:uppercase;color:${brand.muted}">${esc(kind)}</div>
    <h1 style="margin:10px 0 6px;font-size:25px;line-height:1.2;font-weight:800;letter-spacing:-.03em;color:${brand.ink};word-break:break-word">${esc(email)}</h1>
    ${
      total
        ? `<p style="margin:0;color:${brand.muted};font-size:14.5px">${esc(String(total))} ${total === 1 ? 'person is' : 'people are'} on the waitlist.</p>`
        : ''
    }

    ${panel([
      { label: 'Area', value: city },
      { label: 'Source', value: source },
      { label: 'Referrer', value: referrer },
      { label: 'User agent', value: userAgent },
    ])}

    <p style="margin:0"><a href="${esc(dashboardUrl)}" style="color:${brand.purple};font-weight:700;text-decoration:none">Open the waitlist table &rarr;</a></p>
  `;

  const text = [
    `${kind}: ${email}`,
    total ? `${total} on the waitlist.` : null,
    '',
    city ? `Area: ${city}` : null,
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
      preheader: `${city ? city + ' · ' : ''}${source || 'landing page'}`,
      body,
    }),
    text,
  };
}
