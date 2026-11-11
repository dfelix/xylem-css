# Changelog

## 0.3.1

### Fixed
- Inline `<code>` in a narrow table column no longer breaks into one character per line. 0.3.0 wrapped code with `overflow-wrap: anywhere`, which also lets table columns shrink below a word's width; `break-word` still wraps long code in text without that

## 0.3.0

Fixes found using Xylem in a real app, so it needs fewer local workarounds. Some defaults change: see Changed.

### Added
- Off-canvas sidebar on small screens: below 768px `.sidebar` slides in over the page when opened, from a `.sidebar-toggle` checkbox placed before it (no JavaScript) or the `.sidebar-open` class. `.sidebar-backdrop` dims the page and, as a label for the checkbox, closes it on tap. The page behind doesn't scroll while it's open
- `<details class="dropdown">` with a `<summary>` toggle: opens and closes on click and tap in every browser, including Safari on iPhone and iPad, and screen readers announce its state
- `--xy-control-height` and `--xy-control-height-sm`: text fields, selects and `.button` share one height so they line up in a row
- `.input-sm`: a text field or select the height of `.button-sm`
- `--xy-font-numeric`: the digit style for the whole page, form controls included (browsers reset it on inputs), e.g. `lining-nums` for a font like Raleway whose default digits rise and drop like lowercase
- `.table-scroll`: wraps a wide table so it scrolls sideways instead of widening the page
- Dropdown menus scroll when longer than the screen allows

### Fixed
- Form text is at least 16px on touch screens, so iPhone Safari no longer zooms the page when a field or select is tapped (selects were 11.2px)
- `<input>` without a `type` attribute (a text field) is now styled
- Children of `.row` no longer keep the bottom margin form controls have in stacked forms, which pushed them out of line with their neighbours
- `.card` no longer clips its content, which cut off dropdowns inside cards; `.card-img` is rounded to the card's corners instead
- Inline `<code>` wraps instead of widening the page on small screens
- List bullets and numbers sit inside the list instead of hanging outside its box, where they could be cut off or touch the screen edge; nested lists indent by one step (`ul`/`ol` get `padding-left: 1.5rem`; navbar, sidebar and pagination lists stay flush)
- Buttons show a focus ring for keyboard users; the hover colour alone was nearly invisible on filled buttons
- Disabled buttons no longer react to hover
- The `.navbar-toggle` checkbox is no longer `display: none` on small screens, so keyboard and screen reader users can reach it; its `.navbar-toggler` shows the focus ring. Docs and examples move the `aria-label` from the label to the checkbox
- A `.navbar-toggler` inside a `.row` stayed visible on wide screens (`.row > label` overrode it)
- `.avatar-toggle` sits centred next to text instead of on the baseline
- CI checks the build output; it compared `dist/`, which isn't committed, so the check could never fail

### Changed
- **Selects look like text fields** (text size, padding, height, focus ring, own arrow) instead of buttons (uppercase, small, letter-spaced), so they line up with inputs. This reverses the select styling from 0.2.5
- **Bare `<button>` gets a minimal reset again**, as the README and docs describe: font, line height and cursor. Add `.button` for the styled look. From 0.2.5 every `<button>` was styled, so icon buttons and custom controls had to undo it
- **`.button` has no bottom margin** and is `inline-flex`, centred, at least `--xy-control-height` tall (about 5px taller than before)
- Below 768px `.sidebar` is hidden off-screen instead of `display: none`. Pages that don't open it look the same
- The dashboard example uses the sliding sidebar on small screens instead of a second, shorter link list, a details avatar menu, and `.table-scroll` for its tables

## 0.2.6
- Select styles separated from the shared input and textarea rules

## 0.2.5
- Native `<select>` and `<button>` styled like the `.button` component; native select example in the docs

## 0.2.4
- Dark mode fixed for native controls; form docs reorganised

## 0.2.3
- Dark mode toggle and `color-scheme` fixed for native controls

## 0.2.2
- Number inputs, hero `.bg-subtle` example and form layout fixes in the docs; project page link in README and `package.json`

## 0.2.1
- Duplicate class attributes fixed in the blog example; built CSS copied to `docs/dist` for local preview and Pages; dark mode toggle in the docs; CI workflows

## 0.2.0

### Added
- `.grid` — responsive auto-fill grid with customizable `--xy-grid-min`
- `.divider` — horizontal line with optional centered text label
- `.pagination` — page navigation links with active state
- `.button-sm` — compact button size modifier
- `.display-number` — large light-weight number for stats and pricing
- `.bg-subtle` — subtle background utility with border-radius
- `.meta` — inline flex row for metadata (dates, authors, badges)
- `.list-divided` — separator borders between child items
- `.list-unstyled` — remove list bullets and padding
- `.section-label` / `.overline` — uppercase muted label utility
- `.footer-brand`, `.footer-divider`, `.footer-bottom` — footer helpers
- Text color utilities: `.text-primary`, `.text-success`, `.text-danger`, `.text-warning`, `.text-info`
- Font weight utilities: `.font-light`, `.font-semibold`
- Directional spacing: `.ml-{0-5}`, `.mr-{0-5}`, `.pl-{0-5}`, `.pr-{0-5}`
- Form styling for date, time, month, week input types
- Focus-visible styles on navbar, sidebar, dropdown, pagination, and footer links
- Example pages: blog, login, e-commerce

### Fixed
- Checkbox/radio labels now wrap correctly with `flex-wrap: wrap` and `align-items: baseline`
- Eliminated all unnecessary inline styles from documentation and examples
- ARIA attributes added to all progress bars and switches in examples

### Changed
- Renamed `.btn-sm` to `.button-sm` for naming consistency
- Button note in README corrected — bare `<button>` elements only get a minimal reset, not the full styled look
- Removed duplicate `@layer` declaration from source (build.js handles it)

## 0.1.0

Initial release.

- CSS reset and box-sizing normalization
- Typography with responsive heading scale
- Links, buttons (`.button-primary`), styled forms
- Switch component (CSS-only toggle)
- Navbar with brand, nav links, dropdown, avatar toggle
- Card component with image, body, footer, shadow variant
- Hero / Hero-lg sections
- Flex row and stack layout helpers
- Spacing, width, text, and display utilities
- Full theming via CSS custom properties
- Minified build output (`xylem.min.css`)
