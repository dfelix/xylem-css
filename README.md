<p align="center">
  <img src="docs/assets/logo.svg" alt="Xylem CSS" width="80">
</p>

<h1 align="center">Xylem CSS</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/xylem-css"><img src="https://img.shields.io/npm/v/xylem-css" alt="npm"></a>
  <a href="https://github.com/dfelix/xylem-css/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/xylem-css" alt="license"></a>
</p>

A very lightweight CSS framework with simple utilities, layout helpers, and minimal components. No JavaScript. No complex tooling. Just CSS.

[GitHub](https://github.com/dfelix/xylem-css) · [npm](https://www.npmjs.com/package/xylem-css)

## Install

```bash
npm install xylem-css
```

## Usage

Link directly:

```html
<link rel="stylesheet" href="node_modules/xylem-css/dist/xylem.css">
```

Or use the minified version:

```html
<link rel="stylesheet" href="node_modules/xylem-css/dist/xylem.min.css">
```

Import in a bundler:

```js
import 'xylem-css'
```

Via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/xylem-css/dist/xylem.min.css">
```

## What's included

### Layout

- `.container` — centered, max-width 960px wrapper
- `.row` — flex row with gap (`.row-nowrap`, `.row-center`, `.row-between`)
- `.stack` — vertical flex column (`.stack-sm`, `.stack-lg`)
- `.grid` — responsive auto-fill grid (customize minimum column width with `--xy-grid-min`)

### Components

- `.navbar` — flex navbar with brand, nav links, mobile toggle, and modifiers (`.navbar-bordered`, `.navbar-sticky`, `.navbar-collapse`, `.navbar-toggler`)
- `.dropdown` — CSS-only dropdown menu (`.dropdown-toggle`, `.dropdown-menu`, `.dropdown-end`, `.dropdown-divider`)
- `.card` — bordered card with image, body, footer, and shadow variant (`.card-shadow`)
- `.hero` — centered hero section (add `.hero-lg` for larger variant)
- `.avatar` — circular avatar image (`.avatar-sm`, `.avatar-lg`, `.avatar-toggle`)
- `.switch` — CSS-only toggle switch
- `.divider` — horizontal line with optional centered text label
- `.pagination` — page navigation links with active state
- `.badge` — inline pill badge (`.badge-primary`, `.badge-success`, `.badge-danger`, `.badge-warning`, `.badge-info`)
- `.progress` — progress bar with color variants (`.progress-success`, `.progress-danger`, `.progress-warning`, `.progress-info`)
- `.sidebar` — sticky sidebar navigation with sections (`.sidebar-brand`, `.sidebar-nav`, `.sidebar-section`)
- `.footer` — page footer with dark variant (`.footer-dark`, `.footer-brand`, `.footer-divider`, `.footer-bottom`)

### Forms

- Styled inputs, textareas, selects, checkboxes, radios
- Focus rings using the primary color
- Disabled states for all form elements
- Labels auto-detect inline context with checkboxes and radios

### Utilities

- Spacing — `.m-{0-5}`, `.p-{0-5}`, `.mt-{0-5}`, `.mb-{0-5}`, `.ml-{0-5}`, `.mr-{0-5}`, `.pt-{0-5}`, `.pb-{0-5}`, `.pl-{0-5}`, `.pr-{0-5}`, `.mx-auto`
- Flex — `.flex-1`, `.flex-auto`, `.flex-none`, `.items-{start,center,end,stretch}`, `.justify-{start,center,end,between}`, `.gap-{0-5}`
- Width — `.w-full`, `.max-w-full`
- Text — `.text-left`, `.text-center`, `.text-right`, `.text-xs`, `.text-sm`, `.text-md`, `.text-base`, `.text-lg`, `.text-muted`, `.text-primary`, `.text-success`, `.text-danger`, `.text-warning`, `.text-info`
- Font weight — `.font-light`, `.font-semibold`
- Typography — `.section-label` / `.overline` (uppercase muted label), `.display-number` (large light stat number), `.list-unstyled`, `.list-divided` (separator borders between items)
- Background — `.bg-subtle` (subtle background with border-radius)
- Meta — `.meta` (inline flex row for dates, authors, badges)
- Display — `.d-none`, `.d-block`, `.d-flex`, `.d-inline`, `.d-inline-block`
- Accessibility — `.sr-only` (screen reader only)
- Responsive — all display and spacing utilities support `-sm`, `-md`, `-lg` breakpoint variants (e.g., `.d-md-none`, `.p-lg-3`)

### Base styles

- CSS reset and box-sizing normalization
- Typography with responsive heading scale
- Styled links, buttons (`.button-primary`, `.button-success`, `.button-danger`, `.button-warning`, `.button-info`), lists, code, tables (`.table-striped`, `.table-hover`), `hr`
- Button outline variants (`.button-outline-primary`, `.button-outline-success`, `.button-outline-danger`, `.button-outline-warning`, `.button-outline-info`)
- Button modifiers: `.button-icon` (icon alignment), `.button-sq` (square icon-only), `.button-sm` (compact size)
- `::selection` and `accent-color` themed to primary
- `prefers-reduced-motion` respected — all animations and transitions are disabled

### CSS Layers

Xylem uses `@layer` to organize styles into `base`, `components`, and `utilities`. This means any custom CSS you write will automatically override framework styles without specificity battles. Utilities always beat components within the framework.

> **Note:** Bare `<button>` elements get a minimal reset (font, cursor). To apply the full styled look (uppercase, letter-spacing, border), add the `.button` class. Since the framework uses CSS layers, your own unlayered CSS will naturally override these defaults.

## Theming

Override CSS custom properties to theme the framework:

```css
:root {
  --xy-color-primary: #008080;
  --xy-color-primary-hover: #006666;
  --xy-color-text: #222;
  --xy-color-muted: #555;
  --xy-color-bg: #fff;
  --xy-color-bg-subtle: #f2f8f8;
  --xy-color-border: #cfd8d8;
  --xy-color-border-light: #e6eeee;
  --xy-radius: 4px;
}
```

Dark mode follows `prefers-color-scheme` automatically. To override manually:

```html
<!-- Force dark mode regardless of OS preference -->
<html data-theme="dark">

<!-- Force light mode regardless of OS preference -->
<html data-theme="light">
```

## Example

```html
<nav class="navbar navbar-bordered">
  <a class="navbar-brand" href="#">My Site</a>
  <ul class="navbar-nav">
    <li><a href="/" class="active">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<div class="container stack">
  <section class="hero">
    <h1>Welcome</h1>
    <p>A lightweight starting point.</p>
    <a class="button button-primary" href="#">Get Started</a>
  </section>

  <div class="row">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Card</h3>
        <p class="card-text">Simple and clean.</p>
      </div>
    </div>
  </div>
</div>
```

## Size

~25 KB minified, ~5 KB gzipped.

## Browser Support

Chrome 105+, Firefox 121+, Safari 15.4+.

## License

MIT
