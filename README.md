# Quark 2 Theme

**Quark 2** is the new default theme for [Grav CMS](https://github.com/getgrav/grav) 2.0. It's a ground-up modernization of the venerable Quark theme that shipped with Grav 1.5 – 1.8, rebuilt on [Pico CSS](https://picocss.com), [Font Awesome 7](https://fontawesome.com), and a Cal.com-inspired design system. Quark 2 requires Grav 1.7+ and is the recommended foundation for building your own themes on Grav 2.0.

## Features

* Modernized Cal.com-inspired design system — monochrome palette, refined shadow hierarchy, generous whitespace
* [Pico CSS](https://picocss.com) v2 classless foundation — no framework grid, just semantic HTML + CSS custom properties
* **Cal Sans** display + **Inter** body fonts, hosted locally as woff2 (latin + latin-ext subsets)
* [Font Awesome 7](https://fontawesome.com) free icon set (CDN by default, with an option to self-host)
* **Auto / Light / Dark** appearance with `localStorage` persistence and OS-preference fallback — no flash-of-unstyled-content thanks to a pre-paint bootstrap
* Configurable **accent color** via the admin color picker — tints links, focus rings, primary buttons, and other filled accents
* Fully responsive with a full-page mobile navigation overlay
* Multi-level dropdown navigation with hover-bridge and touch support
* Sticky, animated header that condenses on scroll
* Full light-mode **and** dark-mode palettes for every component
* First-class support for the [`github-markdown-alerts`](https://github.com/getgrav/grav-plugin-github-markdown-alerts) plugin (replacing `markdown-notices`)
* Built-in support for on-page navigation (single-page sites)
* Multiple page template types out of the box

### Supported Page Templates

* Default view template `default.md`
* Error view template `error.md`
* Blog view template `blog.md`
* Blog item view template `item.md`
* Comments view template `comments.md`
* Modular view template `modular.md`
  * Features Modular view template `features.md`
  * Hero Modular view template `hero.md`
  * Text Modular view template `text.md`
  * Note: Gallery Modular view template `gallery.md` only works in concert with premium plugin [Lightbox Gallery](https://getgrav.org/premium/lightbox-gallery/docs)

# Installation

Installing the Quark 2 theme can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

The theme by itself is useful, but you may have an easier time getting up and running by installing a Grav 2.0 skeleton — several are being updated to ship with Quark 2.

## GPM Installation (Preferred)

The simplest way to install this theme is via the [Grav Package Manager (GPM)](https://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line). From the root of your Grav install type:

    bin/gpm install quark2

This will install the Quark 2 theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/quark2`.

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `quark2`. You can find these files either on [GitHub](https://github.com/getgrav/grav-theme-quark2) or via [GetGrav.org](https://getgrav.org/downloads/themes).

You should now have all the theme files under

    /your/site/grav/user/themes/quark2

## Default Options

Quark 2 comes with a few default options that can be set site-wide. These options are:

```yaml
enabled: true                 # Enable the theme
header-fixed: true            # Causes the header to be sticky at the top of the browser
header-animated: true         # Allows the fixed header to condense when scrolled
header-transparent: false     # Lets the header sit transparent over a hero, filling in once scrolled
sticky-footer: true           # Causes the footer to stay pinned to the bottom of short pages
theme-mode: auto              # Default appearance before the user makes a choice: auto | light | dark
accent-color: '#242424'       # Hex color used for links, focus rings, and filled accents (charcoal by default)
blog-page: '/blog'            # The route to the blog listing page, used for a blog-style layout with sidebar
custom_logo:                  # A custom logo instead of the default Grav mark (see below)
custom_logo_mobile:           # A custom logo to use for the mobile overlay
fontawesome:
  enabled: true               # Load Font Awesome 7 free
  local: false                # true = expect css/fontawesome/all.min.css in the theme; false = load from CDN
```

To make modifications, you can copy the `user/themes/quark2/quark2.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> [!IMPORTANT]
> Do not modify the `user/themes/quark2/quark2.yaml` file directly or your changes will be lost with any updates.

## Appearance (Light / Dark / Auto)

Quark 2 ships with a three-state appearance toggle in the header. The user's choice is stored in `localStorage` under `quark2-theme` and re-applied on subsequent visits. When the mode is **Auto**, the theme follows the operating system's `prefers-color-scheme` preference and reacts live to OS-level changes.

The default state for first-time visitors is controlled by the `theme-mode` option above.

A pre-paint inline script in `partials/base.html.twig` sets `data-theme` before the first browser paint, eliminating any flash between light and dark on initial load.

## Accent Color

The `accent-color` option accepts any hex color (picker available in the admin) and drives:

* `--q2-link` — text and underline color for links
* `--q2-accent` — filled accents (primary buttons, etc.)
* `--q2-focus-ring` — translucent focus outline, derived via `color-mix(in oklab, …, transparent)`

Dark mode lightens the accent slightly to keep it readable on the dark canvas. Leave the default `#242424` for the pure monochrome look.

## Custom Logos

To add a custom logo, put the logo file into the `user/themes/quark2/images/logo` folder. Standard image formats are supported (`.png`, `.jpg`, `.gif`, `.svg`, etc.). Then reference the logo via the YAML like so:

```yaml
custom_logo:
    - name: 'my-logo.png'
custom_logo_mobile:
    - name: 'my-mobile-logo.png'
```

Alternatively, you can use the drag-n-drop **Custom Logo** field in the Quark 2 theme options.

SVG logos are inlined and inherit `currentColor`, so they automatically adapt to light/dark mode when you set `fill="currentColor"` on their paths.

## Page Overrides

Quark 2 has the ability to allow pages to override some of the default options by letting the user set `body_classes` for any page. The theme will merge the combination of the defaults with any `body_classes` set. For example:

```yaml
body_classes: "header-transparent"
```

On a particular page will ensure that page has those options enabled (assuming they are false by default).

## Hero Options

The hero template allows some options to be set in the page frontmatter. This is used by the modular `hero` as well as the blog and item templates to provide a more dynamic header.

```yaml
hero_classes: text-light parallax overlay-dark-gradient hero-large
hero_image: road.jpg
hero_align: center
```

The `hero_image` should point to an image file in the current page folder. When a hero image is present, the theme automatically darkens the overlay and forces white text for legibility.

## Features Modular Options

The features modular template provides the ability to set a class on the features, as well as an array of feature items. For example:

```yaml
class: offset-box
features:
    - header: Crazy Fast
      text: "Performance is not just an afterthought, we baked it in from the start!"
      icon: fighter-jet
    - header: Easy to build
      text: "Simple text files means Grav is trivial to install, and easy to maintain"
      icon: database
    - header: Awesome Technology
      text: "Grav employs best-in-class technologies such as Twig, Markdown &amp; Yaml"
      icon: cubes
    - header: Super Flexible
      text: "From the ground up, with many plugin hooks, Grav is extremely extensible"
      icon: object-ungroup
    - header: Abundant Plugins
      text: "A vibrant developer community means over 200 themes available to download"
      icon: puzzle-piece
    - header: Free / Open Source
      text: "Grav is an open source project, so you can spend your money on other stuff"
      icon: money-bill
```

Icons use Font Awesome 7 free names — see the [Font Awesome icon gallery](https://fontawesome.com/icons?d=gallery&m=free).

## Text Modular Options

The text box provides a single option to control if any image found in the page folder should be left or right aligned:

```yaml
image_align: right
```

## Blog Listing Options

The blog listing template responds to a few per-page header options:

```yaml
show_breadcrumbs: true        # Show the breadcrumbs (requires the breadcrumbs plugin)
show_sidebar: false           # Show the sidebar with related posts, archives, etc.
show_pagination: true         # Show the pagination below the listing
```

When `show_sidebar` is true but no sidebar plugins are enabled, the sidebar gracefully collapses so the cards take the full width.

## Customization

### Custom CSS

The theme loads `css/custom.css` last. Any rules placed there win over the theme's own styles without needing `!important`. This is the safest place to add site-specific tweaks without modifying the theme itself (so you can still pull in theme updates).

### Design tokens

All colors, radii, and shadows are defined as CSS custom properties on `:root` and `:root[data-theme='dark']` in `css/theme.css` (prefix: `--q2-`). Override them in `custom.css` to re-skin without touching the theme source.

## License

MIT
