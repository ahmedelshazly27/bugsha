// Confirmation sent to a kitchen that asked for a partner code.
//
// No commercial terms, no dates beyond "two working days", no history.

import { brand, esc, layout, panel } from './brand.js';

const MARKET_LABEL = { KW: 'Kuwait', EG: 'Egypt' };
const CATEGORY_LABEL = { bakery: 'Bakery', cafe: 'Café', meals: 'Meals', grocery: 'Co-op / grocery', sweets: 'Sweets', other: 'Other' };

/**
 * @param {object} p
 * @param {string} p.contactName
 * @param {string} p.tradingName
 * @param {string} p.market          'KW' | 'EG'
 * @param {string} [p.city]
 * @param {string[]} [p.categories]
 * @param {number} [p.branchCount]
 * @param {string} p.siteUrl
 * @returns {{subject:string, html:string, text:string}}
 */
export function partnerRequestReceivedEmail({ contactName, tradingName, market, city, categories = [], branchCount, siteUrl }) {
  const subject = `We got your request, ${tradingName}`;
  const where = [city, MARKET_LABEL[market] ?? market].filter(Boolean).join(', ');
  const cats = categories.map((c) => CATEGORY_LABEL[c] ?? c).join(', ');

  const steps = [
    'Someone from Bugsha reads every request. Expect a reply within two working days.',
    'If it’s a fit, you get a partner code by email — it opens sign-up in the Bugsha Partner app and is yours alone to use.',
    'Sign up with the code, upload your licence, accept the partner contract, set your branch hours — and list your first bundle.',
  ];
  const stepRows = steps
    .map((s, i) => `<tr><td style="padding:6px 0;font-size:15px;line-height:1.6;color:${brand.ink900}"><span style="color:${brand.violet700};font-weight:700">${i + 1}.</span>&nbsp; ${esc(s)}</td></tr>`)
    .join('');

  const body = `
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500}">Partner code request</div>
    <h1 style="margin:10px 0 14px;font-size:30px;line-height:1.18;font-weight:700;letter-spacing:-.03em;color:${brand.ink900}">Thanks, ${esc(contactName.split(' ')[0])}. We’ve got it.</h1>
    <p style="margin:0 0 16px">${esc(tradingName)} is in the queue. Partner accounts open with a code from us, so nothing happens until you hear back — and you will, within two working days.</p>
    ${panel([
      { label: 'Kitchen', value: tradingName },
      { label: 'Where', value: where },
      { label: 'You make', value: cats },
      { label: 'Branches', value: branchCount ? String(branchCount) : '' },
    ])}
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500};margin-top:8px">What happens next</div>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:10px 0 18px">${stepRows}</table>
    <p style="margin:0;color:${brand.ink500};font-size:14px">Questions in the meantime? Reply to this email — it reaches the partner team.</p>
  `;

  const text = [
    `Thanks, ${contactName}. We've got your request for ${tradingName}.`,
    '',
    'Partner accounts open with a code from us. Expect a reply within two working days.',
    '',
    `Kitchen: ${tradingName}`,
    `Where: ${where}`,
    cats ? `You make: ${cats}` : null,
    branchCount ? `Branches: ${branchCount}` : null,
    '',
    'What happens next:',
    ...steps.map((s, i) => `${i + 1}. ${s}`),
    '',
    `Questions? Reply to this email. ${siteUrl}/partners`,
  ].filter((l) => l !== null).join('\n');

  return { subject, html: layout({ title: subject, preheader: 'Partner accounts open with a code from us. We reply within two working days.', body }), text };
}
