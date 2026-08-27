// Confirmation email sent to someone who just joined the Bugsha waitlist.
//
// Voice and claims follow the live site: Bugsha has not launched anywhere yet,
// it is opening in Kuwait and Egypt, and waitlist members get access first.
// Nothing here may claim history or state commercial terms.

import { brand, button, esc, layout, panel } from './brand.js';

/**
 * @param {object} p
 * @param {string} p.email
 * @param {string} [p.area]          Where they are — "Kuwait" or "Egypt".
 * @param {number} [p.position]      Place in line, e.g. 128.
 * @param {string} p.siteUrl
 * @param {string} p.unsubscribeUrl
 * @param {boolean} [p.alreadyOnList] True when they signed up before.
 * @returns {{subject:string, html:string, text:string}}
 */
export function welcomeEmail({
  email,
  area,
  position,
  siteUrl,
  unsubscribeUrl,
  alreadyOnList = false,
}) {
  const subject = alreadyOnList
    ? 'You’re already on the Bugsha waitlist'
    : 'You’re on the Bugsha waitlist';

  const headline = alreadyOnList ? 'You’re already in.' : 'You’re in.';

  const opener = alreadyOnList
    ? 'Good news — this email was already on the list, so there’s nothing else for you to do. We’ve refreshed your details below.'
    : `Thanks for joining the ${brand.name} waitlist. We’re opening in Kuwait and Egypt, and we’ll tell you the moment kitchens near you start listing — early access, before the app opens publicly.`;

  const steps = [
    'We’re signing up bakeries, cafés and co-ops across Kuwait and Egypt.',
    'The moment kitchens near you start listing, you get an invite — before the app opens publicly.',
    'You reserve a surprise bundle, collect it at closing, and pay around a third of what’s inside.',
  ];

  const stepRows = steps
    .map(
      (step, i) => `<tr><td style="padding:6px 0;font-size:15px;line-height:1.6;color:${brand.ink900}">
        <span style="color:${brand.violet700};font-weight:700">${i + 1}.</span>&nbsp; ${esc(step)}
      </td></tr>`,
    )
    .join('');

  const body = `
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500}">Waitlist confirmed</div>
    <h1 style="margin:10px 0 14px;font-size:30px;line-height:1.18;font-weight:700;letter-spacing:-.03em;color:${brand.ink900}">${headline}</h1>
    <p style="margin:0 0 16px">${esc(opener)}</p>

    ${panel([
      { label: 'Email', value: email },
      { label: 'Where', value: area },
      { label: 'Your spot', value: position ? `#${position} in line` : '' },
    ])}

    <p style="margin:0 0 8px;font-weight:600;letter-spacing:-.01em">What happens next</p>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 4px">
      ${stepRows}
    </table>

    <p style="margin:18px 0 0;color:${brand.ink500};font-size:14.5px">
      ${esc(brand.tagline)} — it just needs someone to come get it.
    </p>

    ${button(siteUrl, 'See how Bugsha works')}
  `;

  const footer = `
    You’re getting this because you joined the ${brand.name} waitlist with ${esc(email)}.
    <a href="${esc(unsubscribeUrl)}" style="color:${brand.ink500};text-decoration:underline">Leave the waitlist</a>.
  `;

  const text = [
    headline.toUpperCase(),
    '',
    opener,
    '',
    `Email: ${email}`,
    area ? `Where: ${area}` : null,
    position ? `Your spot: #${position} in line` : null,
    '',
    'WHAT HAPPENS NEXT',
    ...steps.map((step, i) => `${i + 1}. ${step}`),
    '',
    `${brand.tagline} - it just needs someone to come get it.`,
    '',
    `See how Bugsha works: ${siteUrl}`,
    '',
    '---',
    `You are getting this because you joined the ${brand.name} waitlist with ${email}.`,
    `Leave the waitlist: ${unsubscribeUrl}`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return {
    subject,
    html: layout({
      title: subject,
      preheader: position
        ? `You’re #${position} in line — here’s what happens next.`
        : 'Here’s what happens next.',
      body,
      footer,
    }),
    text,
  };
}
