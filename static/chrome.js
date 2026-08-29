/* ============================================================
   ALGOCRATIC SHARED CHROME

   The af-system-header block was hand-copied into every page that
   carried it. The site has no build step, so any change to the
   header meant editing every one of those files, and they had
   already drifted into two dialects.

   Usage — place where the header should appear, as the first thing
   inside <body>:

     <script src="../../static/chrome.js"
             data-system="ORANGE Clearance Guide"
             data-clearance="DEEP ALGORITHM · VIOLET"
             data-receipt="teacherbot@green · governance and clearance"
             data-function="governance and clearance"></script>

   Notes on the approach:

   - This runs synchronously at the parser's position and inserts
     the header before itself, so there is no layout shift. A
     deferred script or a DOMContentLoaded handler would paint the
     page once without the header and once with it.

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

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var d = self.dataset;

  var header = el('header', 'af-system-header');
  if (d.function) header.setAttribute('data-portal-function', d.function);

  var home = el('a', 'af-system-header__home');
  home.setAttribute('href', root + 'index.html');
  var mark = el('img', 'af-system-header__mark');
  mark.setAttribute('src', root + 'static/design-system/assets/AF_A_Eye.svg');
  mark.setAttribute('alt', '');
  home.appendChild(mark);
  home.appendChild(el('span', 'af-system-header__brand', 'Algocratic Futures™'));
  header.appendChild(home);

  var mid = document.createElement('div');
  mid.appendChild(el('p', 'af-system-header__label', d.label || 'System being accessed'));
  mid.appendChild(el('p', 'af-system-header__name', d.system || document.title));
  header.appendChild(mid);

  var meta = el('div', 'af-system-header__meta');
  if (d.clearance) meta.appendChild(el('span', 'af-system-header__clearance', d.clearance));
  if (d.receipt) meta.appendChild(el('span', 'af-system-header__receipt', d.receipt));
  header.appendChild(meta);

  self.parentNode.insertBefore(header, self);
})();
