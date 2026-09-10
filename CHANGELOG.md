# v1.1.13
## 09/10/2026

1. [](#bugfix)
    * Meta tag content was escaped twice, so a description containing `&` or a space showed up as `&amp;amp;` and `&#x20;` in the page source. The theme's copy of the metadata partial is gone and Grav core's is used instead, which also adds the `<link rel="alternate" type="text/markdown">` tag for Grav 2.1's Markdown output
1. [](#improved)
    * The theme now requires Grav 2.1.0 or later

# v1.1.12
## 09/09/2026

1. [](#bugfix)
    * Icons chosen in the admin now render. The icon picker saves a value with the `fa-` prefix already on it, and the templates added a second one, so a changed icon silently disappeared while the ones shipped with a skeleton kept working. Feature, menu and page icons all accept whatever form the value arrives in. Thanks to @UnixxSH [getgrav/grav-skeleton-onepage-site#20](https://github.com/getgrav/grav-skeleton-onepage-site/issues/20)

# v1.1.11
## 08/13/2026

1. [](#bugfix)
    * The appearance toggle's tooltip and screen-reader label are now translatable, instead of always appearing in English ([#23](https://github.com/getgrav/grav-theme-quark2/issues/23))
    * Every other screen-reader label in the theme, covering the menus, breadcrumbs, pagination and post navigation, is now translatable too

# v1.1.10
## 08/04/2026

1. [](#bugfix)
    * Dropdown menus near the right edge of the window no longer run off-screen, and nested sub-menus now open toward whichever side has room ([#22](https://github.com/getgrav/grav-theme-quark2/issues/22))
    * Removed the stray horizontal scrollbar that off-screen dropdown panels were adding to every page
    * The theme no longer ships a rule that kept custom logos out of your site's git repository ([#21](https://github.com/getgrav/grav-theme-quark2/issues/21))

# v1.1.9
## 08/02/2026

1. [](#bugfix)
    * The active menu item is no longer white-on-white in dark mode while the header sits over a hero
    * Removed a hairline of page background that showed above the hero in light mode before scrolling

# v1.1.8
## 08/02/2026

1. [](#new)
    * Restored the `header-dark` and `header-light` body classes from the original Quark theme, so you can pick a readable header colour when it sits over a hero image
2. [](#bugfix)
    * The `header-transparent` option now actually lets the hero show through the header, instead of only clearing the header's own background ([#21](https://github.com/getgrav/grav-theme-quark2/issues/21))
    * The Features module's `Layout` option now controls the column count as its description says, giving 4 / 3 / 2 columns for Small and 3 / 2 / 1 for Standard ([#20](https://github.com/getgrav/grav-theme-quark2/pull/20))

# v1.1.7
## 07/30/2026

1. [](#improved)
    * Forum Pro's own headings now use Cal Sans along with the rest of the theme. The forum falls back to the body font when a theme hands it no display face, which left a forum page title looking lighter than the headings sitting under it

# v1.1.6
## 07/20/2026

1. [](#new)
    * Restored the full set of hero classes from the original Quark theme, so `hero-fullscreen`, the hero size options, `text-light`/`text-dark`, `title-h1h2`, and the image overlays all work again ([#18](https://github.com/getgrav/grav-theme-quark2/issues/18)).
2. [](#bugfix)
    * The hero background parallax effect now works again; it was lost when the theme was rebuilt for Grav 2.0 ([#17](https://github.com/getgrav/grav-theme-quark2/issues/17)).

# v1.1.5
## 07/17/2026

1. [](#new)
    * Tag lists now respect an optional `filterend` limit so you can cap how many tags are shown ([#219](https://github.com/getgrav/grav-theme-quark/issues/219))
2. [](#bugfix)
    * The `image_align: left` option on modular text sections now moves the image to the left instead of leaving it on the right ([#16](https://github.com/getgrav/grav-theme-quark2/issues/16))

# v1.1.4
## 07/14/2026

1. [](#bugfix)
    * The login plugin's admin-style panels now follow dark mode instead of staying light, so the login, forgot, and reset forms match the rest of the theme in dark mode ([#14](https://github.com/getgrav/grav-theme-quark2/issues/14))

# v1.1.3
## 07/09/2026

1. [](#bugfix)
    * Custom SVG logos are now inlined so they follow light and dark mode like the built-in logo, instead of staying a fixed color

# v1.1.2
## 06/24/2026

1. [](#bugfix)
    * Pagination buttons no longer show list-item markers
    * On-page menu items now highlight as active on modular pages

# v1.1.1
## 06/12/2026

1. [](#improved)
    * Headings and body text now read their fonts from CSS variables, so the display and sans-serif fonts can be changed from custom.css without editing the theme

# v1.1.0
## 06/01/2026

1. [](#improved)
    * Moved the theme's CSS foundation to Blades CSS, the actively maintained successor to the now-dormant Pico CSS, with no change to the look or layout
    * Added a small npm build so the CSS base can be refreshed with `npm install && npm run build` instead of swapping files by hand
    * Tightened the spacing inside dropdown menus so longer menus stay compact and no longer run off the bottom of the screen
1. [](#bugfix)
    * Fixed the PHP Debug Bar message text being unreadable in light mode
    * Fixed the third-level dropdown menu sitting slightly too high next to the item that opens it

# v1.0.5
## 05/28/2026

1. [](#bugfix)
    * Restored the oklab color-mixing across the theme that was temporarily switched to sRGB in 1.0.4 — links, accents, focus rings, alert backgrounds, and hero gradients are back to their original tints
1. [](#new)
    * Added two Twig helpers, `q2_mix_white(hex, pct)` and `q2_mix_alpha(hex, pct)`, that return pre-resolved `rgb()` / `rgba()` strings for sites that need to feed third-party widgets a color value their parser can understand
    * Documented an optional `#disqus_thread` override block in the README for sites running Disqus via JSComments, where the embed's older color parser cannot read modern `color-mix()` results in dark mode

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
