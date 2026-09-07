/* ============================================================
   ALGOCRATIC SHARED CHROME — the Media/2026 frame

   The frame is always Media/2026. The content inside it declares
   its own era. Rule 4 permits strata to meet "at the cracks", and
   this header is the crack: a 2026 system displaying archived
   198X terminal material or 1968 underground press, and saying so.

   Usage — place as the first thing inside <body>:

     <script src="../../static/chrome.js"
             data-system="GREEN Clearance Guide"
             data-stratum="terminal/198x"
             data-society="deep-algorithm"
             data-clearance="green"
             data-function="governance and clearance"></script>

   Attributes:

     data-system     what is being displayed. Falls back to <title>.
     data-stratum    the era of the CONTENT, not the frame. One of
                     media/2026, terminal/198x, pelican/196x,
                     comix/1968. Omit and no stratum line renders.
     data-society    which society owns this page's function. Drives
                     the chip and its link into the underground.
     data-clearance  the clearance LEVEL only -- yellow, infrared.
                     This used to carry "FUZZIES · YELLOW", conflating
                     level and society in one attribute told apart by
                     casing, which nothing could reliably read.
     data-function   feeds the footer receipt.

   Notes on the approach:

   - The header inserts synchronously at the parser's position, so
     there is no layout shift. A deferred script would paint once
     without the header and once with it.

   - The footer waits for DOMContentLoaded, because it needs the
     body parsed. It is below the fold, so deferring costs nothing.

   - The path back to the site root is derived from this script's
     own src, not configured per page. A page at any depth gets
     correct links with no data-root attribute to keep in sync.

   - Every value is written through textContent or setAttribute,
     never innerHTML, so a stray quote or angle bracket in a page's
     system name cannot break out into markup.

   - Pages should carry a <noscript> home link next to this tag;
     the header is navigation, and navigation should not depend on
     JavaScript.
   ============================================================ */

(function () {
  'use strict';

  var self = document.currentScript;
  if (!self) return; // no synchronous context; nothing safe to do

  // ../../static/chrome.js -> ../../  (works at any depth)
  var root = self.getAttribute('src').replace(/static\/chrome\.js.*$/, '');
  var d = self.dataset;

  /* The five societies, their display names, and the underground
     pages they own. File names are irregular -- banchos is plural,
     two use underscores -- so they are spelled out rather than
     derived from the key. */
  var SOCIETIES = {
    'fuzzies':        { name: 'FUZZIES',        page: 'societies/fuzzies.html' },
    'bancho':         { name: 'BANCHO',         page: 'societies/banchos.html' },
    'phreaks':        { name: 'PHREAKS',        page: 'societies/phreaks.html' },
    'memory-core':    { name: 'MEMORY CORE',    page: 'societies/memory_core.html' },
    'deep-algorithm': { name: 'DEEP ALGORITHM', page: 'societies/deep_algorithm.html' }
  };

  var STRATA = {
    'media/2026':   'MEDIA/2026',
    'terminal/198x': 'TERMINAL/198X',
    'pelican/196x': 'PELICAN/196X',
    'comix/1968':   'COMIX/1968'
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- header ---------- */

  var header = el('header', 'af-system-header');
  if (d.function) header.setAttribute('data-portal-function', d.function);
  if (d.stratum) header.setAttribute('data-content-stratum', d.stratum);

  var home = el('a', 'af-system-header__home');
  home.setAttribute('href', root + 'index.html');
  var mark = el('img', 'af-system-header__mark');
  mark.setAttribute('src', root + 'static/design-system/assets/AF_A_Eye.svg');
  mark.setAttribute('alt', '');
  home.appendChild(mark);
  home.appendChild(el('span', 'af-system-header__brand', 'Algocratic Futures™'));
  header.appendChild(home);

  var mid = document.createElement('div');
  mid.className = 'af-system-header__what';
  mid.appendChild(el('p', 'af-system-header__name', d.system || document.title));

  /* The frame naming the era of what it is showing. Media/2026 is
     the frame's own era, so that reads as live; anything older is
     the system displaying legacy material. */
  if (d.stratum && STRATA[d.stratum]) {
    var live = d.stratum === 'media/2026';
    mid.appendChild(el('p', 'af-system-header__stratum',
      (live ? 'Live system · ' : 'Archive view · ') + STRATA[d.stratum]));
  }
  header.appendChild(mid);

  /* The chip is a doorway. It renders only when a society owns this
     page, so no page gets a chip that goes nowhere. */
  if (d.society && SOCIETIES[d.society]) {
    var soc = SOCIETIES[d.society];
    var chip = el('a', 'af-system-header__society');
    chip.setAttribute('href', root + 'underground/' + soc.page);
    chip.appendChild(el('span', 'af-system-header__society-name', soc.name));
    chip.appendChild(el('span', 'af-system-header__society-go', '›'));
    header.appendChild(chip);
  }

  self.parentNode.insertBefore(header, self);

  /* ---------- footer receipt ---------- */

  if (!d.function && !d.clearance) return;

  function receipt() {
    var parts = [];
    if (d.receipt) parts.push(d.receipt);
    else if (d.function) parts.push('teacherbot@green · ' + d.function);
    if (d.clearance) parts.push('clearance: ' + d.clearance);
    if (d.stratum && STRATA[d.stratum]) parts.push('stratum: ' + STRATA[d.stratum]);

    var line = el('p', 'af-system-receipt', parts.join(' · '));

    /* Pages that already carry a provenance footer get the system
       receipt appended to it rather than a second footer stacked
       underneath. */
    var existing = document.querySelector('.entry-footer');
    if (existing) { existing.appendChild(line); return; }

    var foot = el('footer', 'af-system-footer');
    foot.appendChild(line);
    document.body.appendChild(foot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', receipt);
  } else {
    receipt();
  }
})();
