// Internal ping to the partner team when a kitchen asks for a code.

import { brand, esc, layout, panel } from './brand.js';

const MARKET_LABEL = { KW: 'Kuwait', EG: 'Egypt' };

/**
 * @param {object} p
 * @param {string} p.tradingName
 * @param {string} p.legalName
 * @param {string} p.market
 * @param {string} [p.city]
 * @param {string[]} [p.categories]
 * @param {string} p.contactName
 * @param {string} p.contactPhone
 * @param {string} p.contactEmail
 * @param {number} [p.branchCount]
 * @param {string} [p.estDailySurplus]
 * @param {string} [p.referralSource]
 * @param {string} [p.source]
 * @param {string} [p.referrer]
 * @param {string} [p.userAgent]
 * @param {number} [p.openTotal]     Requests still in status "new" after this one.
 * @param {string} p.dashboardUrl
 * @param {boolean} [p.repeat]       True when this email has asked before.
 */
export function partnerRequestNotifyEmail({ tradingName, legalName, market, city, categories = [], contactName, contactPhone, contactEmail, branchCount, estDailySurplus, referralSource, source, referrer, userAgent, openTotal, dashboardUrl, repeat = false }) {
  const kind = repeat ? 'Repeat partner request' : 'New partner request';
  const subject = `${kind}: ${tradingName} (${MARKET_LABEL[market] ?? market}${city ? `, ${city}` : ''})`;

  const body = `
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500}">${esc(kind)}</div>
    <h1 style="margin:10px 0 6px;font-size:25px;line-height:1.2;font-weight:700;letter-spacing:-.03em;color:${brand.ink900};word-break:break-word">${esc(tradingName)}</h1>
    <p style="margin:0;color:${brand.ink500};font-size:14.5px">${esc(legalName)}${openTotal ? ` · ${esc(String(openTotal))} request${openTotal === 1 ? '' : 's'} waiting for a code` : ''}</p>
    ${panel([
      { label: 'Where', value: [city, MARKET_LABEL[market] ?? market].filter(Boolean).join(', ') },
      { label: 'Makes', value: categories.join(', ') },
      { label: 'Contact', value: `${contactName} · ${contactPhone} · ${contactEmail}` },
      { label: 'Branches', value: branchCount ? String(branchCount) : '' },
      { label: 'Surplus / night', value: estDailySurplus },
      { label: 'Heard via', value: referralSource },
      { label: 'Source', value: source },
      { label: 'Referrer', value: referrer },
      { label: 'User agent', value: userAgent },
    ])}
    <p style="margin:0"><a href="${esc(dashboardUrl)}" style="color:${brand.violet700};font-weight:600;text-decoration:none">Open the request and issue a code &rarr;</a></p>
  `;

  const text = [
    `${kind}: ${tradingName} (${legalName})`,
    `Where: ${[city, MARKET_LABEL[market] ?? market].filter(Boolean).join(', ')}`,
    `Makes: ${categories.join(', ')}`,
    `Contact: ${contactName} · ${contactPhone} · ${contactEmail}`,
    branchCount ? `Branches: ${branchCount}` : null,
    estDailySurplus ? `Surplus / night: ${estDailySurplus}` : null,
    referralSource ? `Heard via: ${referralSource}` : null,
    source ? `Source: ${source}` : null,
    openTotal ? `${openTotal} request(s) waiting for a code.` : null,
    '',
    `Issue a code: ${dashboardUrl}`,
  ].filter((l) => l !== null).join('\n');

  return { subject, html: layout({ title: subject, preheader: `${contactName} · ${contactPhone}`, body }), text };
}
