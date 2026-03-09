# Changelog

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
