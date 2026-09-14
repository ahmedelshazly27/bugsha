// Input hardening for the public partner-request endpoint.
//
// Mirrors the argument list of app.submit_application on the platform, so a
// request can become an application without a second form.

import { clean, MAX_EMAIL } from './validate.ts';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
export const MARKETS = ['KW', 'EG'] as const;
export const CATEGORIES = ['bakery', 'cafe', 'meals', 'grocery', 'sweets', 'other'] as const;
// Kuwait mobiles: 8 digits starting 5/6/9; Egypt mobiles: 01x + 8 digits. Landlines are accepted too.
const PHONE_RE: Record<string, RegExp> = {
  KW: /^(\+?965)?\s?[1-9]\d{7}$/,
  EG: /^(\+?20|0)?\s?1[0-25]\d{8}$|^(\+?20|0)?\s?[2-9]\d{7,8}$/,
};

export type PartnerRequestInput = {
  market?: string;
  legalName?: string;
  tradingName?: string;
  categories?: unknown;
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
  city?: string;
  branchCount?: unknown;
  estDailySurplus?: string;
  referralSource?: string;
  source?: string;
  locale?: string;
  /** Honeypot: real humans never fill this in. */
  website?: string;
};

export type ParsedPartnerRequest = {
  market: 'KW' | 'EG';
  legalName: string;
  tradingName: string;
  categories: string[];
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  city?: string;
  branchCount: number;
  estDailySurplus?: string;
  referralSource?: string;
  source?: string;
  locale?: string;
};

export function parsePartnerRequest(
  raw: unknown,
): { ok: true; value: ParsedPartnerRequest } | { ok: false; error: string; silent?: boolean } {
  if (typeof raw !== 'object' || raw === null) return { ok: false, error: 'Expected a JSON object.' };
  const i = raw as PartnerRequestInput;

  if (clean(i.website)) return { ok: false, error: 'ok', silent: true };

  const market = clean(i.market, 2)?.toUpperCase();
  if (!market || !(MARKETS as readonly string[]).includes(market)) return { ok: false, error: 'Choose Kuwait or Egypt.' };

  const legalName = clean(i.legalName, 160);
  if (!legalName) return { ok: false, error: 'Please enter the legal name on your licence.' };
  const tradingName = clean(i.tradingName, 120);
  if (!tradingName) return { ok: false, error: 'Please enter the name customers know you by.' };

  const cats = Array.isArray(i.categories) ? i.categories.map((c) => clean(c, 20)?.toLowerCase()).filter(Boolean) as string[] : [];
  const categories = [...new Set(cats)].filter((c) => (CATEGORIES as readonly string[]).includes(c));
  if (!categories.length) return { ok: false, error: 'Tell us what you make — pick at least one.' };

  const contactName = clean(i.contactName, 120);
  if (!contactName) return { ok: false, error: 'Please enter your name.' };

  const contactPhone = clean(i.contactPhone, 24)?.replace(/[\s()-]/g, '');
  if (!contactPhone || !PHONE_RE[market].test(contactPhone)) {
    return { ok: false, error: market === 'KW' ? 'That doesn’t look like a Kuwaiti phone number.' : 'That doesn’t look like an Egyptian phone number.' };
  }

  const contactEmail = clean(i.contactEmail, MAX_EMAIL)?.toLowerCase();
  if (!contactEmail || !EMAIL_RE.test(contactEmail)) return { ok: false, error: 'That email address doesn’t look right.' };

  const branchRaw = Number(i.branchCount ?? 1);
  const branchCount = Number.isFinite(branchRaw) ? Math.min(500, Math.max(1, Math.round(branchRaw))) : 1;

  return {
    ok: true,
    value: {
      market: market as 'KW' | 'EG',
      legalName,
      tradingName,
      categories,
      contactName,
      contactPhone,
      contactEmail,
      city: clean(i.city, 80),
      branchCount,
      estDailySurplus: clean(i.estDailySurplus, 40),
      referralSource: clean(i.referralSource, 120),
      source: clean(i.source, 60),
      locale: clean(i.locale, 12),
    },
  };
}
