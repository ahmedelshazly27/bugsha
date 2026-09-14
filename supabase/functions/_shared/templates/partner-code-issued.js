// The partner code, sent to a kitchen when ops issues it.
//
// Sent automatically by the partner-code-email function the moment a row lands
// in public.partner_invite_code (database trigger), and again on "Resend" from
// the ops console. Single use, one email address, 14-day expiry by default.

import { brand, button, esc, layout, panel } from './brand.js';

const MARKET_LABEL = { KW: 'Kuwait', EG: 'Egypt' };

function formatDate(value) {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return String(value ?? '');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kuwait' });
}

/**
 * @param {object} p
 * @param {string} p.code            BG-XXXX-XXXX
 * @param {string} p.tradingName
 * @param {string} [p.contactName]
 * @param {string} p.email           The address the code is bound to.
 * @param {string} p.market          'KW' | 'EG'
 * @param {string|Date} p.expiresAt
 * @param {string} p.deepLink        bugsha-partner://signup?code=…
 * @param {string} p.siteUrl
 * @returns {{subject:string, html:string, text:string}}
 */
export function partnerCodeIssuedEmail({ code, tradingName, contactName, email, market, expiresAt, deepLink, siteUrl }) {
  const subject = `Your Bugsha partner code for ${tradingName}`;
  const first = (contactName || '').trim().split(' ')[0];
  const expires = formatDate(expiresAt);

  const steps = [
    'Open the Bugsha Partner app and choose “I have a partner code”.',
    `Enter the code and sign in with this email address — ${email}. The application pre-fills from your request.`,
    'Upload your commercial licence, accept the partner contract and set your branch hours.',
    'List your first bundle. Your account activates on its own.',
  ];
  const stepRows = steps
    .map((s, i) => `<tr><td style="padding:6px 0;font-size:15px;line-height:1.6;color:${brand.ink900}"><span style="color:${brand.violet700};font-weight:700">${i + 1}.</span>&nbsp; ${esc(s)}</td></tr>`)
    .join('');

  const body = `
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500}">Partner code</div>
    <h1 style="margin:10px 0 14px;font-size:30px;line-height:1.18;font-weight:700;letter-spacing:-.03em;color:${brand.ink900}">${first ? `${esc(first)}, you’re in.` : 'You’re in.'}</h1>
    <p style="margin:0 0 18px">${esc(tradingName)} has a partner code. It opens sign-up in the Bugsha Partner app, works once, and is tied to this email address.</p>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 18px">
      <tr><td align="center" style="padding:26px 20px;border-radius:16px;background:${brand.violet700};color:${brand.paper}">
        <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.violet200}">Your partner code</div>
        <div style="margin-top:10px;font-family:'SF Mono',Menlo,Consolas,'Liberation Mono',monospace;font-size:34px;font-weight:700;letter-spacing:.12em">${esc(code)}</div>
        <div style="margin-top:10px;font-size:13px;color:${brand.violet200}">Expires ${esc(expires)} · single use</div>
      </td></tr>
    </table>
    ${panel([
      { label: 'Kitchen', value: tradingName },
      { label: 'Market', value: MARKET_LABEL[market] ?? market },
      { label: 'Sign in with', value: email },
    ])}
    <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${brand.ink500};margin-top:8px">What to do</div>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:10px 0 6px">${stepRows}</table>
    ${button(deepLink, 'Open in the Partner app')}
    <p style="margin:14px 0 0;color:${brand.ink500};font-size:14px">Don’t have the app yet, or the button does nothing on this device? Reply to this email and the partner team sends you the install link. Keep the code to yourself — anyone holding it can open the account.</p>
  `;

  const footer = `You’re getting this because ${esc(tradingName)} asked for a Bugsha partner code. If that wasn’t you, reply and tell us. ${esc(siteUrl)}/partners`;

  const text = [
    `Your Bugsha partner code for ${tradingName}`,
    '',
    `Code: ${code}`,
    `Expires: ${expires} · single use · tied to ${email}`,
    '',
    'What to do:',
    ...steps.map((s, i) => `${i + 1}. ${s}`),
    '',
    `Open in the Partner app: ${deepLink}`,
    '',
    'Don’t have the app yet? Reply to this email and the partner team sends you the install link.',
    `Keep the code to yourself — anyone holding it can open the account. ${siteUrl}/partners`,
  ].join('\n');

  return { subject, html: layout({ title: subject, preheader: `${code} · expires ${expires}`, body, footer }), text };
}
