#!/usr/bin/env node
// Renders every waitlist email to emails/preview/*.html with sample data.
// No dependencies, no build step: node scripts/preview-emails.mjs

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { welcomeEmail } from '../supabase/functions/_shared/templates/welcome.js';
import { adminNotifyEmail } from '../supabase/functions/_shared/templates/admin-notify.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'emails', 'preview');

const SAMPLE = {
  email: 'nour@example.com',
  city: 'Maadi',
  siteUrl: 'https://bugsha.com',
  unsubscribeUrl: 'https://example.supabase.co/functions/v1/waitlist-unsubscribe?token=sample',
};

const emails = [
  ['welcome', welcomeEmail({ ...SAMPLE, position: 128 })],
  ['welcome-repeat', welcomeEmail({ ...SAMPLE, position: 128, alreadyOnList: true })],
  [
    'admin-notify',
    adminNotifyEmail({
      email: SAMPLE.email,
      city: SAMPLE.city,
      source: 'landing-page',
      referrer: 'https://bugsha.com/',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) Safari/605.1.15',
      total: 128,
      dashboardUrl: 'https://supabase.com/dashboard/project/example/editor',
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
