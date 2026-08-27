/**
 * Bugsha waitlist form.
 *
 * Uses the class names the landing page stylesheet already ships
 * (.waitlist-form, .waitlist-done, .brand-mark), so it drops into the existing
 * pre-launch section without any CSS changes.
 *
 *   <WaitlistForm
 *     endpoint={import.meta.env.VITE_WAITLIST_ENDPOINT}
 *     areas={['Maadi', 'Zamalek', 'Heliopolis']}
 *   />
 */
import { useState } from 'react';

const DEFAULT_ENDPOINT =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WAITLIST_ENDPOINT) || '';

export default function WaitlistForm({
  endpoint = DEFAULT_ENDPOINT,
  source = 'landing-page',
  // Replace with the real launch areas. Leave empty to hide the picker.
  areas = [],
  buttonLabel = 'Join the waitlist',
}) {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus('error');
      setError('Please enter your email address.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          city: city || undefined,
          company: company || undefined,
          source,
          locale: typeof document !== 'undefined' ? document.documentElement.lang : undefined,
        }),
      });
      const payload = await res.json().catch(() => ({ ok: res.ok }));

      if (payload?.ok) {
        setResult(payload);
        setStatus('done');
      } else {
        setStatus('error');
        setError(payload?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network hiccup — please try again.');
    }
  }

  if (status === 'done') {
    return (
      <div className="waitlist-done" role="status">
        <svg className="brand-mark" width="26" height="26" viewBox="410 230 380 340" aria-hidden="true">
          <path d="M600 250 770 400 600 550 430 400 600 250Z" fill="currentColor" />
        </svg>
        <div>
          <strong>{result?.alreadyOnList ? 'You’re already on the list' : 'You’re on the list'}</strong>
          <span>
            {result?.position
              ? `You’re #${result.position} in line. We’ll email you the moment Bugsha opens near you.`
              : 'We’ll email you the moment Bugsha opens near you.'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>

      {areas.length > 0 && (
        <label>
          <span>Your area</span>
          <select name="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Pick your area</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>
      )}

      {/* Honeypot — visually hidden, never filled by a human. */}
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Joining…' : buttonLabel}
      </button>

      {error && (
        <p role="alert" style={{ gridColumn: '1 / -1', margin: '2px 0 0', fontSize: 13.5, color: '#ff8a80' }}>
          {error}
        </p>
      )}
    </form>
  );
}
