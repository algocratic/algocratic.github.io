/* ============================================================
   ALGOCRATIC CLEARANCE GUIDES — one script, all bands.
   TOKENS=v0.2

   Replaces four near-identical per-band script.js files
   (clearance/{infrared,red,orange,yellow}/script.js), which
   differed only in tracker range, status wording and console
   flavour — but each hard-coded its band colour as a hex literal
   and assigned it to element.style.backgroundColor at runtime.
   Those inline assignments beat any stylesheet, so the old
   scripts would have silently overridden the v0.2 tokens. All
   colour now comes from CSS; this file sets no colour at all.

   MOTION: the old scripts drove five perpetual effects — a 3s
   tracker fluctuation, a 1.5-2s eye jitter, a width-based
   typewriter, character-by-character diagram typing, and a
   staggered process-step fade. v0.2 specifies "animation:
   effectively none", so none are reproduced.

   The tracker gag survives the de-animation: its value is still
   randomised, just once per page load instead of every three
   seconds. It still reads differently on every visit.
   ============================================================ */

(function () {
  'use strict';

  var BANDS = {
    infrared: {
      min: 5, max: 25,
      steps: [[10, 'CRITICAL'], [20, 'PROBATIONARY']],
      otherwise: 'ACCEPTABLE',
      access: 'INFRARED clearance page access logged.',
      notes: [
        'User activity monitored.',
        'Loyalty assessment in progress...',
        'THE ALGORITHM IS WATCHING.',
        'Behavioral pattern analysis active.',
        'Thought compliance verification initiated.'
      ]
    },
    red: {
      min: 25, max: 45,
      steps: [[30, 'MARGINAL'], [40, 'ACCEPTABLE']],
      otherwise: 'COMMENDABLE',
      access: 'RED clearance page access logged.',
      notes: [
        'User activity monitored.',
        'Loyalty assessment in progress...',
        'THE ALGORITHM IS WATCHING.',
        'Behavioral pattern analysis active.',
        'Thought compliance verification initiated.'
      ]
    },
    orange: {
      min: 45, max: 75,
      steps: [[55, 'MODERATE'], [65, 'OPTIMAL']],
      otherwise: 'EXEMPLARY',
      access: 'ORANGE clearance page access logged.',
      notes: [
        'System efficiency evaluation in progress...',
        'Technical implementation scan active.',
        'THE ALGORITHM OPTIMIZES.',
        'Architecture pattern analysis running.',
        'Evaluating implementation efficiency metrics.',
        'Technical competence assessment initialized.'
      ]
    },
    yellow: {
      min: 65, max: 90,
      steps: [[70, 'EFFECTIVE'], [80, 'STRATEGIC']],
      otherwise: 'VISIONARY',
      access: 'YELLOW clearance page access logged.',
      notes: [
        'Strategic alignment evaluation in progress...',
        'Reality perception filters active.',
        'THE ALGORITHM RECOGNIZES PATTERNS.',
        'Narrative optimization suggestions available.',
        'Strategic contradictions management monitor active.',
        'Perception management systems engaged.',
        'Multiple interpretation frameworks loaded.'
      ]
    }
  };

  function statusFor(band, value) {
    for (var i = 0; i < band.steps.length; i++) {
      if (value < band.steps[i][0]) return band.steps[i][1];
    }
    return band.otherwise;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var name = document.body.getAttribute('data-clearance');
    var band = BANDS[name];
    if (!band) return;

    /* -- Status tracker -----------------------------------------
       Matches the new .af-tracker__* names and every legacy family
       name (loyalty-/efficiency-/strategy-/compliance-), so pages
       work whether or not their markup has been renamed. */
    var bar = document.querySelector(
      '.af-tracker__bar, .loyalty-bar, .efficiency-bar, .strategy-bar, .compliance-bar'
    );
    var status = document.querySelector(
      '.af-tracker__status, .loyalty-status, .efficiency-status, .strategy-status, .compliance-status'
    );

    if (bar) {
      var value = band.min + Math.random() * (band.max - band.min);
      bar.style.width = value.toFixed(1) + '%';
      /* No backgroundColor assignment — the bar's colour is
         var(--band) in clearance.css, resolved from the SCREEN
         column for whatever [data-clearance] the body declares. */
      if (status) status.textContent = statusFor(band, value);
    }

    /* -- Monolith acknowledgement -------------------------------
       The one interaction kept: it is user-initiated, so it is a
       response rather than an animation. Toggles a class instead
       of assigning a hex colour. */
    var monolith = document.querySelector('.monolith-icon');
    if (monolith) {
      monolith.addEventListener('click', function () {
        monolith.classList.toggle('is-acknowledged');
      });
    }

    /* -- Surveillance flavour -----------------------------------
       Logged once at load. The old scripts ran this on a 10s
       setInterval that never cleared. */
    console.log(band.access + ' Timestamp: ' + new Date().toISOString());
    console.log(band.notes[Math.floor(Math.random() * band.notes.length)]);
  });
})();
