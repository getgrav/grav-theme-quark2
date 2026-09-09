<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

class Quark2 extends Theme
{
    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0],
            'onTwigLoader'       => ['onTwigLoader', 0],
            'onTwigInitialized'  => ['onTwigInitialized', 0],
        ];
    }

    public function onThemeInitialized()
    {
    }

    public function onTwigLoader()
    {
        $locator = Grav::instance()['locator'];
        foreach ((array) $locator->findResources('theme://images') as $path) {
            $this->grav['twig']->addPath($path, 'images');
        }
    }

    public function onTwigInitialized()
    {
        $twig = $this->grav['twig'];

        $form_class_variables = [
            'form_button_outer_classes' => 'button-wrapper',
            'form_button_classes'       => 'contrast',
            'form_errors_classes'       => 'form-errors',
            'form_field_outer_classes'  => 'form-group',
            'form_field_outer_label_classes' => 'form-label-wrapper',
            'form_field_label_classes'  => 'form-label',
            'form_field_input_classes'  => 'form-input',
            'form_field_textarea_classes' => 'form-input',
            'form_field_select_classes' => 'form-select',
            'form_field_radio_classes'  => 'form-radio',
            'form_field_checkbox_classes' => 'form-checkbox',
        ];

        $twig->twig_vars = array_merge($twig->twig_vars, $form_class_variables);

        $twig->twig->addFunction(new \Twig\TwigFunction('q2_mix_white', [$this, 'mixWithWhite']));
        $twig->twig->addFunction(new \Twig\TwigFunction('q2_mix_alpha', [$this, 'mixWithAlpha']));
        $twig->twig->addFilter(new \Twig\TwigFilter('fa_icon', [$this, 'faIconClass']));
    }

    /**
     * Turn an icon value into the Font Awesome classes that render it.
     *
     * Icon values reach a template in several shapes. Admin Next's icon picker
     * stores a solid icon as `fa-house` and the other families as
     * `fa-brands fa-github`; a value typed by hand, or carried over from a
     * Grav 1 site, arrives bare (`house`) or in the old Font Awesome 4 form
     * (`fa fa-house`). The templates used to write `fa-solid fa-{{ icon }}`,
     * which turns a picked `fa-house` into `fa-solid fa-fa-house` and renders
     * nothing, so an icon disappeared the moment it was changed in the admin
     * (getgrav/grav-skeleton-onepage-site#20).
     *
     * @param string|null $icon
     * @return string
     */
    public function faIconClass(?string $icon): string
    {
        $icon = trim((string) $icon);
        if ($icon === '') {
            return '';
        }

        $families = [
            'fa-solid'   => 'fa-solid',   'fas' => 'fa-solid',
            'fa-regular' => 'fa-regular', 'far' => 'fa-regular',
            'fa-brands'  => 'fa-brands',  'fab' => 'fa-brands',
        ];

        $family = '';
        $name   = '';

        foreach (preg_split('/\s+/', $icon) ?: [] as $token) {
            if (isset($families[$token])) {
                $family = $families[$token];
                continue;
            }
            // A bare `fa` or `fa-classic` names the family without naming a
            // glyph, so it must not be mistaken for the icon name.
            if ($token === 'fa' || $token === 'fa-classic') {
                continue;
            }
            $name = preg_replace('/^fa-/', '', $token);
        }

        if ((string) $name === '') {
            return '';
        }

        return ($family !== '' ? $family : 'fa-solid') . ' fa-' . $name;
    }

    public function mixWithWhite(string $hex, int $pct): string
    {
        [$r, $g, $b] = $this->parseHex($hex);
        $f = max(0, min(100, $pct)) / 100;
        $mr = (int) round($r * $f + 255 * (1 - $f));
        $mg = (int) round($g * $f + 255 * (1 - $f));
        $mb = (int) round($b * $f + 255 * (1 - $f));
        return "rgb({$mr}, {$mg}, {$mb})";
    }

    public function mixWithAlpha(string $hex, int $pct): string
    {
        [$r, $g, $b] = $this->parseHex($hex);
        $a = round(max(0, min(100, $pct)) / 100, 2);
        return "rgba({$r}, {$g}, {$b}, {$a})";
    }

    private function parseHex(string $hex): array
    {
        $hex = ltrim($hex, '#');
        if (strlen($hex) === 3) {
            $hex = $hex[0].$hex[0].$hex[1].$hex[1].$hex[2].$hex[2];
        }
        if (strlen($hex) < 6) {
            return [0, 0, 0];
        }
        return [
            hexdec(substr($hex, 0, 2)),
            hexdec(substr($hex, 2, 2)),
            hexdec(substr($hex, 4, 2)),
        ];
    }
}
