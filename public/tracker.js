/**
 * Demand Validation Tracker — ~2KB minified
 * Zero cookies, zero third-party, GDPR compliant.
 * 
 * Auto-tracks: pageview, scroll depth, CTA clicks, time on page.
 * Manual: dvt.lead(email, surveyData), dvt.feedback(type, answers)
 * 
 * Config via <script data-project="UUID" data-api="https://api.jpsdeveloper.com">
 */
(function() {
  'use strict';

  const script = document.currentScript;
  const PROJECT_ID = script?.getAttribute('data-project') || '';
  const API = script?.getAttribute('data-api') || 'https://api.jpsdeveloper.com';

  if (!PROJECT_ID) {
    console.warn('[DVT] No data-project attribute found');
    return;
  }

  // Session ID (per-tab, not persistent)
  const SESSION_ID = crypto.randomUUID ? crypto.randomUUID() : 
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

  // UTM params
  const params = new URLSearchParams(window.location.search);
  const utm = {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
  };

  // --- Core send ---
  function send(endpoint, data) {
    const payload = { project_id: PROJECT_ID, ...data };
    
    // Use sendBeacon for reliability on page unload, fetch otherwise
    if (navigator.sendBeacon) {
      navigator.sendBeacon(`${API}${endpoint}`, JSON.stringify(payload));
    } else {
      fetch(`${API}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  }

  function event(type, metadata) {
    send('/events', {
      session_id: SESSION_ID,
      event_type: type,
      metadata: metadata || {},
      referrer: document.referrer || null,
      ...utm,
    });
  }

  // --- Pageview ---
  event('pageview', { page: window.location.pathname, title: document.title });

  // --- Scroll depth ---
  const scrollMarks = new Set();
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollPct = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      [25, 50, 75, 100].forEach(mark => {
        if (scrollPct >= mark && !scrollMarks.has(mark)) {
          scrollMarks.add(mark);
          event(`scroll_${mark}`, { depth: mark });
        }
      });
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- CTA clicks ---
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (el) {
      event('cta_click', {
        button: el.getAttribute('data-track'),
        text: el.textContent?.trim().substring(0, 100),
      });
    }
  });

  // --- Time on page ---
  const pageStart = Date.now();
  function sendTime() {
    const seconds = Math.round((Date.now() - pageStart) / 1000);
    if (seconds > 2) { // Ignore bounces < 2s
      event('time_on_page', { seconds, page: window.location.pathname });
    }
  }

  // Send on page hide (works on mobile too)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') sendTime();
  });
  window.addEventListener('pagehide', sendTime);

  // --- Public API ---
  window.dvt = {
    event: event,
    
    lead: function(email, surveyResponse, name) {
      send('/leads', {
        email: email,
        name: name || null,
        source: utm.utm_source ? 'ads' : (document.referrer ? 'referral' : 'organic'),
        survey_response: surveyResponse || {},
        referrer: document.referrer || null,
        ...utm,
      });
    },

    feedback: function(type, answers, questions) {
      send('/feedback', {
        type: type || 'survey',
        questions: questions || [],
        answers: answers,
      });
    },
  };
})();
