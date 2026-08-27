// Outbound email via Resend.
//
// Swapping providers means rewriting only `sendEmail` — Postmark, SendGrid and
// Mailgun all take the same shape. Sending never throws: a failed email must
// not cost us a signup that is already safely in the database.

export type OutboundEmail = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export function emailConfig() {
  return {
    apiKey: Deno.env.get('RESEND_API_KEY') ?? '',
    from: Deno.env.get('WAITLIST_FROM_EMAIL') ?? 'Bugsha <hello@bugsha.com>',
    admin: Deno.env.get('WAITLIST_ADMIN_EMAIL') ?? '',
    replyTo: Deno.env.get('WAITLIST_REPLY_TO') ?? '',
  };
}

export async function sendEmail(
  msg: OutboundEmail,
): Promise<{ sent: boolean; id?: string; error?: string }> {
  const { apiKey, from, replyTo } = emailConfig();

  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY is unset — skipping send to', msg.to);
    return { sent: false, error: 'RESEND_API_KEY unset' };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [msg.to],
        subject: msg.subject,
        html: msg.html,
        text: msg.text,
        ...(msg.replyTo || replyTo ? { reply_to: msg.replyTo ?? replyTo } : {}),
      }),
    });

    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      const error = payload?.message ?? `Resend responded ${res.status}`;
      console.error('[email] send failed:', error);
      return { sent: false, error };
    }
    return { sent: true, id: payload?.id };
  } catch (err) {
    console.error('[email] send threw:', err);
    return { sent: false, error: err instanceof Error ? err.message : String(err) };
  }
}
