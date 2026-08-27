/**
 * Bugsha waitlist — progressive enhancement for the landing page.
 *
 * Drop this in after the page renders and it takes over any
 * <form class="waitlist-form"> on the page: posts to the Supabase edge
 * function, then swaps the form for the .waitlist-done success block the
 * stylesheet already defines. No dependencies, no build step.
 *
 *   <script>window.BUGSHA_WAITLIST_ENDPOINT = 'https://<ref>.supabase.co/functions/v1/waitlist-signup';</script>
 *   <script src="/waitlist.js" defer></script>
 *
 * The endpoint can also be set per-form with data-endpoint.
 */
(function () {
  'use strict';

  var ENDPOINT =
    (typeof window !== 'undefined' && window.BUGSHA_WAITLIST_ENDPOINT) || '';

  // The Kerchief: a square of cloth with its top corner turned down. White mark
  // on the violet panel, so the fold takes the panel colour at full opacity.
  var MARK =
    '<svg class="brand-mark" width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">' +
    '<path fill="#FFFFFF" d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"/>' +
    '<path fill="#5B21B6" d="M12.5 14h23L24 25.5 12.5 14Z"/>' +
    '</svg>';

  function el(html) {
    var t = document.createElement('div');
    t.innerHTML = html.trim();
    return t.firstChild;
  }

  function showDone(form, result) {
    var heading = result.alreadyOnList ? 'You are already on the list.' : 'You are on the list.';
    var detail = result.position
      ? 'You are #' + result.position + ' in line. We will email you before your city goes live.'
      : 'We will email you before your city goes live.';

    var done = el(
      '<div class="waitlist-done" role="status">' +
        MARK +
        '<div><strong></strong><span></span></div>' +
        '</div>',
    );
    done.querySelector('strong').textContent = heading;
    done.querySelector('span').textContent = detail;
    form.replaceWith(done);
  }

  function showError(form, message) {
    var slot = form.querySelector('.waitlist-error');
    if (!slot) {
      if (!message) return;
      slot = el('<p class="waitlist-error" role="alert"></p>');
      slot.style.cssText =
        'grid-column:1/-1;margin:2px 0 0;font-size:13.5px;color:#DDD6FE';
      form.appendChild(slot);
    }
    slot.textContent = message;
  }

  function fieldValue(form, names) {
    for (var i = 0; i < names.length; i++) {
      var node = form.querySelector('[name="' + names[i] + '"]');
      if (node && node.value) return node.value;
    }
    return '';
  }

  function onSubmit(event) {
    var form = event.target;
    if (!form || !form.classList || !form.classList.contains('waitlist-form')) return;

    event.preventDefault();
    event.stopPropagation();

    var endpoint = form.dataset.endpoint || ENDPOINT;
    if (!endpoint) {
      console.error('[waitlist] no endpoint configured');
      showError(form, 'Sign-up isn’t available right now.');
      return;
    }

    var emailInput =
      form.querySelector('input[type="email"]') || form.querySelector('input[name="email"]');
    var email = emailInput ? emailInput.value.trim() : '';
    if (!email) {
      showError(form, 'Please enter your email address.');
      if (emailInput) emailInput.focus();
      return;
    }

    var button = form.querySelector('button');
    var originalLabel = button ? button.textContent : '';
    if (button) {
      button.disabled = true;
      button.textContent = 'Joining…';
    }
    showError(form, '');

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        area: fieldValue(form, ['area', 'city']),
        company: fieldValue(form, ['company']), // honeypot
        source: form.dataset.source || 'landing-page',
        locale: document.documentElement.lang || undefined,
      }),
    })
      .then(function (res) {
        return res.json().catch(function () {
          return { ok: res.ok };
        });
      })
      .then(function (result) {
        if (result && result.ok) {
          showDone(form, result);
          return;
        }
        showError(form, (result && result.error) || 'Something went wrong. Please try again.');
      })
      .catch(function () {
        showError(form, 'Network hiccup — please try again.');
      })
      .finally(function () {
        if (button && button.isConnected) {
          button.disabled = false;
          button.textContent = originalLabel;
        }
      });
  }

  // Capture phase so this runs before any framework-level submit handler.
  document.addEventListener('submit', onSubmit, true);
})();
