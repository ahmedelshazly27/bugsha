// Confirmation email sent to someone who just joined the Bugsha waitlist.

import { brand, button, esc, layout, panel } from './brand.js';

/**
 * @param {object} p
 * @param {string} p.email
 * @param {string} [p.city]
 * @param {number} [p.position]      Place in line, e.g. 128.
 * @param {string} p.siteUrl
 * @param {string} p.unsubscribeUrl
 * @param {boolean} [p.alreadyOnList] True when they signed up before.
 * @returns {{subject:string, html:string, text:string}}
 */
export function welcomeEmail({
  email,
  city,
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
    ? `Good news — this email was already on the list, so there’s nothing else for you to do. We’ve refreshed your details below.`
    : `Thanks for joining the ${brand.name} waitlist. When we open in your area, you’ll be among the first people we let in.`;

  const body = `
    <div style="font-size:11px;font-weight:840;letter-spacing:.16em;text-transform:uppercase;color:${brand.muted}">Waitlist confirmed</div>
    <h1 style="margin:10px 0 14px;font-size:30px;line-height:1.18;font-weight:800;letter-spacing:-.03em;color:${brand.ink}">${headline}</h1>
    <p style="margin:0 0 16px">${esc(opener)}</p>

    ${panel([
      { label: 'Email', value: email },
      { label: 'Area', value: city },
      {
        label: 'Your spot',
        value: position ? `#${position} in line` : '',
      },
    ])}

    <p style="margin:0 0 8px;font-weight:700;letter-spacing:-.01em">What happens next</p>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 4px">
      <tr><td style="padding:6px 0;font-size:15px;line-height:1.6;color:${brand.ink}">
        <span style="color:${brand.purple};font-weight:800">1.</span>&nbsp; We’re signing up bakeries, restaurants and grocers near you.
      </td></tr>
      <tr><td style="padding:6px 0;font-size:15px;line-height:1.6;color:${brand.ink}">
        <span style="color:${brand.purple};font-weight:800">2.</span>&nbsp; The moment there’s enough good food around you, we email you an invite.
      </td></tr>
      <tr><td style="padding:6px 0;font-size:15px;line-height:1.6;color:${brand.ink}">
        <span style="color:${brand.purple};font-weight:800">3.</span>&nbsp; You reserve a surprise bag, pick it up near closing, and pay a fraction of the price.
      </td></tr>
    </table>

    <p style="margin:18px 0 0;color:${brand.muted};font-size:14.5px">
      ${esc(brand.tagline)} — it just needs someone to come get it.
    </p>

    ${button(siteUrl, 'See how Bugsha works')}
  `;

  const footer = `
    You’re getting this because you joined the ${brand.name} waitlist with ${esc(email)}.
    <a href="${esc(unsubscribeUrl)}" style="color:${brand.muted};text-decoration:underline">Leave the waitlist</a>.
  `;

  const text = [
    headline.toUpperCase(),
    '',
    opener,
    '',
    `Email: ${email}`,
    city ? `Area: ${city}` : null,
    position ? `Your spot: #${position} in line` : null,
    '',
    'WHAT HAPPENS NEXT',
    '1. We are signing up bakeries, restaurants and grocers near you.',
    '2. The moment there is enough good food around you, we email you an invite.',
    '3. You reserve a surprise bag, pick it up near closing, and pay a fraction of the price.',
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
