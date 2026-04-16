/*
 * Quark 2 — appearance controller
 *
 * Order of precedence: user preference (localStorage) > theme-mode default >
 * OS preference. When the user picks "auto", we listen for OS changes and
 * swap data-theme live.
 *
 * The inline bootstrap in base.html.twig sets data-theme before first paint
 * to eliminate FOUC. This file handles the runtime toggling UI.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'quark2-theme';
  var root = document.documentElement;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }
  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyMode(mode) {
    var resolved = (mode === 'light' || mode === 'dark')
      ? mode
      : (systemPrefersDark() ? 'dark' : 'light');
    root.setAttribute('data-theme', resolved);
    root.setAttribute('data-theme-preference', mode === 'light' || mode === 'dark' ? mode : 'auto');
    root.classList.toggle('dark', resolved === 'dark');
  }

  function currentPreference() {
    return getStored() || root.getAttribute('data-theme-default') || 'auto';
  }

  function cyclePreference(pref) {
    // auto -> light -> dark -> auto
    if (pref === 'auto')  return 'light';
    if (pref === 'light') return 'dark';
    return 'auto';
  }

  function updateToggleLabel(button, pref) {
    if (!button) return;
    var labels = { auto: 'Auto', light: 'Light', dark: 'Dark' };
    button.setAttribute('aria-label', 'Appearance: ' + labels[pref]);
    button.setAttribute('title', 'Appearance: ' + labels[pref] + ' — click to cycle');
    button.setAttribute('data-mode', pref);
  }

  // React to OS changes when in auto mode
  if (window.matchMedia) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var handler = function () {
      if (currentPreference() === 'auto') applyMode('auto');
    };
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else if (mql.addListener) mql.addListener(handler);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    var pref = currentPreference();
    applyMode(pref);
    buttons.forEach(function (btn) {
      updateToggleLabel(btn, pref);
      btn.addEventListener('click', function () {
        var next = cyclePreference(currentPreference());
        setStored(next);
        applyMode(next);
        buttons.forEach(function (b) { updateToggleLabel(b, next); });
      });
    });
  });
})();
