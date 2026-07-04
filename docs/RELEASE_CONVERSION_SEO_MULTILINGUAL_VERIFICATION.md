# Conversion, SEO, Performance, and Multilingual SEO Release Verification

Date: 2026-07-04
Branch: `release/conversion-seo-multilingual`
Base: `origin/main` at `0f13a58`
Merged work:
- `integration/conversion-seo-performance` at `3d38311`, which includes `029cc66`
- `codex/seo-multilingual-architecture` at `90409c3`

## Scope

This release branch combines the already-approved conversion, SEO, Visit Us, sticky CTA, testimonial credibility, schema, hero LCP, and multilingual SEO architecture work.

No deployment was performed.
No push to `main` was performed.
No dependency update was performed.
No `package-lock.json` was added.
Nodemailer security commit `44181ca` is not included.

## Verification Commands

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm test` passed: 44 files passed, 1 skipped; 337 tests passed, 12 skipped.
- `npm run validate:i18n` passed: all locale files valid; Georgian keeps 9 existing extra keys.
- `npm run build` passed: Next.js generated 537 pages.

## Local Production Preview

Preview URL used: `http://127.0.0.1:4305`

All required routes returned HTTP 200:
- `/en`
- `/ka`
- `/ru`
- `/tr`
- `/ar`
- `/he`
- `/en/book`
- `/en/treatments`
- `/en/pricelist`
- `/en/about`
- `/en/faq`
- `/en/botox-batumi`
- `/en/skin-treatment-batumi`
- `/en/lip-fillers-batumi`
- `/en/acne-treatment-batumi`
- `/en/nails-batumi`
- `/en/lashes-brows-batumi`
- `/ka/lip-fillers-batumi`
- `/ru/lip-fillers-batumi`
- `/tr/lip-fillers-batumi`
- `/ar/lip-fillers-batumi`
- `/he/lip-fillers-batumi`
- `/sitemap.xml`
- `/robots.txt`

## SEO Checks

- Sitemap includes all important localized local SEO routes for all six locales.
- `robots.txt` allows important pages and points to `https://silkbeautysalon.online/sitemap.xml`.
- Canonical links are present for homepage and priority local SEO pages.
- Hreflang alternates include `en`, `ka`, `ru`, `tr`, `ar`, `he`, and `x-default`.
- Homepage `BeautySalon` JSON-LD parses and excludes `aggregateRating` and review markup.
- Local SEO pages render parseable JSON-LD and do not render the old visible `Search phrases this page answers` keyword block.
- `/en/botox-batumi` and `/en/skin-treatment-batumi` no longer render that old visible SEO-heavy block.

## Feature Checks

- Homepage popular treatments and starting prices are visible.
- Visit Us section is visible with address text, phone, WhatsApp, lazy Google Maps iframe, and Get Directions link.
- Sticky mobile CTA appears after the hero and links to `/en/book` plus `https://wa.me/995577286855`.
- Sticky mobile CTA hides over the Visit Us protected section.
- Testimonial carousel controls are interactive.
- Language switcher exposes all six locale routes.
- Mobile menu opens and closes.
- Hero LCP behavior is preserved: first hero image is eager/high priority; non-active hero images are lazy/low priority; desktop hero image sizes remain `50vw`.

## Phone And WhatsApp

Source-of-truth visible phone: `+995 577 34 57 67`.
Source-of-truth WhatsApp phone: `+995 577 28 68 55`.

The difference is intentional and documented in `docs/MULTILINGUAL_SEO_TOPIC_MAP.md`.

The old placeholder phone number `+995 599 123 456` was not found in app source data, messages, public assets, or rendered local preview output. It remains only in historical docs/tests that document or assert its absence.

## Browser Verification

Checked:
- Desktop `/en`
- Mobile `/en`
- RTL `/ar`
- Desktop `/en/lip-fillers-batumi`
- Mobile `/ar/acne-treatment-batumi`
- Mobile `/he/lashes-brows-batumi`

Observed:
- No console errors.
- No hydration errors.
- No horizontal overflow.
- RTL pages use `dir="rtl"`.
- JSON-LD scripts parse.
- Visible design and hero composition remain unchanged.

## Remaining Risks

- Non-English SEO copy should still receive native speaker review before paid campaigns or heavy local SEO promotion.
- Existing historical docs mention prior live mismatch and placeholder phone findings for audit traceability.
- This branch is safe to push as a review branch, but should not be merged to `main` until owner approval is explicit.
