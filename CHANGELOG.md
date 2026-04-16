# v1.0.1
## 04/16/2026

1. [](#new)
    * Accent color is now a full color picker (any hex) and tints links, buttons, and focus rings
    * First-class styling for the `github-markdown-alerts` plugin — five alert types with accent stripe, icon, and title in both light and dark modes
    * `dark` class is now added to `<html>` in dark mode (alongside `data-theme`) for compatibility with class-based libraries
1. [](#improved)
    * Refined dark mode — brighter card surface, deeper canvas, and stronger contrast across the board
    * Polished navigation — better spacing, vertical dropdowns with a hover-bridge, distinct active vs. hover states, and a properly stacked mobile overlay
    * Polished blog listing — 3-column max grid (2 with sidebar), equal-height cards, 16:9 images, borderless drop-shadow surfaces
    * Refined typography — lighter `h1`, bolder `h2` with an accent bar, generous section spacing, scoped card-body headings
1. [](#bugfix)
    * Fixed numerous Pico CSS bleed-through issues affecting cards, navigation, buttons, and the mobile menu
    * Removed the non-functional `production-mode` setting (use Grav's site-wide asset pipeline instead)

# v1.0.0
## 04/15/2026

1. [](#new)
    * Initial release of Quark 2 — the modernized default theme for Grav 2.0
    * Built on PicoCSS v2 (classless variant), Cal.com-inspired design system
    * Cal Sans (display) + Inter (body) hosted locally as woff2
    * Font Awesome 7 free icon set (CDN by default, optional self-host)
    * Auto / Light / Dark appearance toggle with `localStorage` persistence and pre-paint bootstrap
    * Multi-level dropdown nav with hover and touch support
    * Sticky animated header that condenses on scroll
    * Full-page mobile navigation overlay
    * Page templates: default, blog, item, modular, error, comments
    * Modular sub-templates: hero, features, text, gallery
