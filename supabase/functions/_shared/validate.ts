// Input hardening for the public signup endpoint.

/** Deliberately permissive but bounded — real delivery is the true validator. */
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

export const MAX_EMAIL = 254;
export const MAX_FIELD = 120;

export type SignupInput = {
  email: string;
  area?: string;
  source?: string;
  locale?: string;
  /** Honeypot: real humans never fill this in. */
  company?: string;
};

export type ParsedSignup = {
  email: string;
  area?: string;
  source?: string;
  locale?: string;
};

/** Trim, collapse whitespace and cap length. Returns undefined for empties. */
export function clean(value: unknown, max = MAX_FIELD): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.replace(/\s+/g, ' ').trim().slice(0, max);
  return trimmed.length ? trimmed : undefined;
}

export function parseSignup(
  raw: unknown,
): { ok: true; value: ParsedSignup } | { ok: false; error: string; silent?: boolean } {
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, error: 'Expected a JSON object.' };
  }
  const input = raw as SignupInput;

  // Honeypot tripped: answer as though it worked, but persist nothing.
  if (clean(input.company)) return { ok: false, error: 'ok', silent: true };

  const email = clean(input.email, MAX_EMAIL)?.toLowerCase();
  if (!email) return { ok: false, error: 'Please enter your email address.' };
  if (!EMAIL_RE.test(email)) return { ok: false, error: 'That email address doesn’t look right.' };

  return {
    ok: true,
    value: {
      email,
      area: clean(input.area),
      source: clean(input.source, 60),
      locale: clean(input.locale, 12),
    },
  };
}
