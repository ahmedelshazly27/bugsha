#!/usr/bin/env node
// Renders every waitlist email to emails/preview/*.html with sample data.
// No dependencies, no build step: node scripts/preview-emails.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { welcomeEmail } from '../supabase/functions/_shared/templates/welcome.js';
import { adminNotifyEmail } from '../supabase/functions/_shared/templates/admin-notify.js';
import { partnerRequestReceivedEmail } from '../supabase/functions/_shared/templates/partner-request-received.js';
import { partnerRequestNotifyEmail } from '../supabase/functions/_shared/templates/partner-request-notify.js';
import { partnerCodeIssuedEmail } from '../supabase/functions/_shared/templates/partner-code-issued.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'emails', 'preview');

const SAMPLE = {
  email: 'nour@example.com',
  area: 'Kuwait',
  siteUrl: 'https://bugsha.app',
  unsubscribeUrl: 'https://example.supabase.co/functions/v1/waitlist-unsubscribe?token=sample',
};

const emails = [
  ['welcome', welcomeEmail({ ...SAMPLE, position: 128 })],
  ['welcome-repeat', welcomeEmail({ ...SAMPLE, position: 128, alreadyOnList: true })],
  [
    'admin-notify',
    adminNotifyEmail({
      email: SAMPLE.email,
      area: SAMPLE.area,
      source: 'landing-page',
      referrer: 'https://bugsha.app/',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) Safari/605.1.15',
      total: 128,
      dashboardUrl: 'https://supabase.com/dashboard/project/example/editor',
    }),
  ],
  [
    'partner-request-received',
    partnerRequestReceivedEmail({ contactName: 'Yousef Al-Kandari', tradingName: 'Kuwait Bakehouse', market: 'KW', city: 'Hawalli', categories: ['bakery', 'sweets'], branchCount: 3, siteUrl: SAMPLE.siteUrl }),
  ],
  [
    'partner-request-notify',
    partnerRequestNotifyEmail({
      tradingName: 'Kuwait Bakehouse', legalName: 'Kuwait Bakehouse Co. W.L.L.', market: 'KW', city: 'Hawalli', categories: ['bakery', 'sweets'],
      contactName: 'Yousef Al-Kandari', contactPhone: '+965 5512 3456', contactEmail: 'yousef@kuwaitbakehouse.com', branchCount: 3, estDailySurplus: 'KD 25',
      referralSource: 'Founder network', source: 'site-partners', referrer: 'https://bugsha.app/partners', userAgent: 'Mozilla/5.0 (Macintosh) Safari/605.1.15',
      openTotal: 4, dashboardUrl: 'https://bugsha-ops.vercel.app/requests?id=sample',
    }),
  ],
  [
    'partner-code-issued',
    partnerCodeIssuedEmail({
      code: 'BG-4XB7-582G', tradingName: 'Kuwait Bakehouse', contactName: 'Yousef Al-Kandari', email: 'yousef@kuwaitbakehouse.com', market: 'KW',
      expiresAt: '2026-09-28T09:47:00Z', deepLink: 'bugsha-partner://signup?code=BG-4XB7-582G', siteUrl: SAMPLE.siteUrl,
    }),
  ],
];

await mkdir(outDir, { recursive: true });

for (const [name, mail] of emails) {
  await writeFile(join(outDir, `${name}.html`), mail.html, 'utf8');
  await writeFile(join(outDir, `${name}.txt`), `Subject: ${mail.subject}\n\n${mail.text}`, 'utf8');
  console.log(`${name.padEnd(16)} ${mail.subject}`);
}

console.log(`\n${emails.length} emails written to emails/preview/`);
