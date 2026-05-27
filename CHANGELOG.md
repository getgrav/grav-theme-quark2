# v1.0.4
## 05/27/2026

1. [](#bugfix)
    * Fixed Disqus comments failing to load when a page is opened directly in dark mode
1. [](#improved)
    * Form tabs now have a visible active state in dark mode and use a clean underlined nav style
    * Form toggles now match input field height and use the configured accent color for the selected option
    * Form submit and reset buttons no longer stretch the full container width and use a readable foreground color against the accent background
    * Form checkboxes and radios now pick up the configured accent color and have consistent sizing across light and dark modes
    * Form basic captcha now uses the theme palette, the verification image fills the field vertically, and the reload button is always visible
    * Form file upload (Dropzone) now renders with dark mode colors and a muted action button instead of an accent-styled pill
    * Form Filepond uploader panels, labels, and item action buttons now use the theme palette in dark mode

# v1.0.3
## 05/17/2026

1. [](#new)
    * Added admin blueprints for the `default`, `blog`, `item`, and `modular` page templates so every option is now editable from the admin panel
    * Added admin blueprints for the `hero`, `features`, `text`, and `gallery` modular sub-templates
1. [](#bugfix)
    * Fixed pagination rendering as empty on blog listings when the Pagination plugin is enabled
    * Fixed the sticky header flickering between its full and collapsed sizes when scrolled to right around the trigger point
    * Fixed a 500 error that could occur when a custom logo value was left in a malformed or empty state, now falls back to the default Grav logo

# v1.0.2
## 05/13/2026

1. [](#bugfix)
    * Fixed appearance toggle showing the same icon for two consecutive clicks when the OS preference matched the resolved theme — the icon now reflects your light/dark/auto choice rather than the resolved color scheme

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
