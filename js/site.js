/*
 * Quark 2 — navigation, dropdowns, scroll state.
 */
(function () {
  'use strict';

  var body = document.body;

  // Mark nav items that have children so CSS can draw a caret
  document.querySelectorAll('.dropmenu li').forEach(function (li) {
    if (li.querySelector(':scope > ul')) li.classList.add('has-children');
  });

  // Click-to-open on touch devices (hover is flaky on iOS)
  var isTouch = matchMedia('(hover: none)').matches;
  if (isTouch) {
    document.querySelectorAll('.dropmenu li.has-children > a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var li = a.parentNode;
        if (!li.classList.contains('open')) {
          e.preventDefault();
          document.querySelectorAll('.dropmenu li.open').forEach(function (other) {
            if (other !== li && !other.contains(li)) other.classList.remove('open');
          });
          li.classList.add('open');
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropmenu')) {
        document.querySelectorAll('.dropmenu li.open').forEach(function (li) { li.classList.remove('open'); });
      }
    });
  }

  // Mobile menu toggle
  var toggle = document.getElementById('toggle');
  var overlay = document.getElementById('overlay');
  if (toggle && overlay) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      overlay.classList.toggle('open');
      document.body.classList.toggle('overlay-open');
    });
    overlay.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.classList.remove('active');
        overlay.classList.remove('open');
        document.body.classList.remove('overlay-open');
      }
    });
  }

  // Scroll state (for sticky header shadow + animated shrink)
  var lastScrolled = false;
  function onScroll() {
    var scrolled = window.scrollY > 8;
    if (scrolled !== lastScrolled) {
      body.classList.toggle('scrolled', scrolled);
      lastScrolled = scrolled;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth-scroll to #start for "angle-down" hero chevron
  var toStart = document.getElementById('to-start');
  if (toStart) {
    toStart.addEventListener('click', function () {
      var target = document.getElementById('start');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();
