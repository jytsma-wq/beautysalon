# NL/FR/DE Technical Locale Audit

Date: 2026-08-02

Branch: `codex/i18n-nl-fr-de`

Preview: `http://127.0.0.1:4313/nl`

## Scope

This audit covers the technical implementation of Dutch (`nl`), French (`fr`), and German (`de`) as first-class locales. Editorial and native-language review is a separate content task and is not claimed by this report.

No production deployment, push to `main`, dependency update, analytics change, email behavior change, DNS change, or public profile change was made.

## Technical implementation

- Expanded the supported locale registry from six to nine locales.
- Added complete locale message files for `nl`, `fr`, and `de`, with the same message-key structure as English.
- Added locale flags and nine-language menu/switcher support.
- Added NL/FR/DE route generation, locale detection, routing guards, booking validation, formatting, Open Graph locale/font support, chatbot locale handling, and mobile CTA path handling.
- Added localized structured content for homepage sections, treatments, conditions, booking options, testimonials, local SEO pages, salon-space rental, chair rental, factual pages, and navigation.
- Added localized metadata, canonicals, hreflang alternates, and sitemap coverage where the existing search-index policy permits indexing.
- Preserved the existing deliberate search policy: treatment and condition catalog hubs are `noindex,follow`; the editorial blog remains English-canonical and non-English blog indexes remain `noindex,follow`.
- Localized homepage starting-price prefixes and visible country names without changing centralized prices or official structured business data.
- Changed the visible homepage language count from six to nine.
- Localized booking calendars, selected-date formatting, weekday labels, navigation labels, grid labels, and screen-reader day labels for all supported locales.

## Automated verification

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm test`: 439 passed, 12 skipped.
- `npm run validate:i18n`: passed for all eight non-English files; no missing keys and no failing translation problems.
- `npm run build`: passed; Next.js generated 834 static pages.
- `git diff --check`: passed.
- Focused calendar tests: NL, FR, and DE visual and accessible labels passed.
- Existing Playwright CLI suite could not launch because the local Playwright Chromium binary is not installed. This was a runner prerequisite failure before page loading, not an application test failure. The requested browser scenarios were executed in the connected in-app Chromium browser instead.

## Browser verification

Production preview was checked in the visible in-app browser at desktop and mobile sizes.

- Audited 63 NL/FR/DE core routes across homepage, booking, treatments, pricing, local service pages, contact, rental, download, international-client, FAQ, blog, and condition routes.
- Verified one H1, title, description, expected canonical, expected index policy, header/footer, booking link, no broken images, and no horizontal overflow on the checked routes.
- Verified all nine locale roots and NL/FR/DE booking routes return HTTP 200; `/api/health` returns 200.
- Verified `/api/csrf` returns 200 and sets a CSRF cookie.
- Verified the language switcher shows all nine locales and preserves a deep route when switching from `/nl/pricelist` to `/fr/pricelist`.
- Verified the mobile menu opens and closes and contains Salon Space Rental, Chair Rental, and Download App under the secondary menu.
- Verified Arabic and Hebrew remain RTL, open the mobile menu, retain localized booking links, and have no horizontal overflow.
- Verified the sticky mobile Book/WhatsApp bar is hidden at the top, appears after the hero, uses `/nl/book` and `https://wa.me/995577286855`, and hides over the protected Visit Us section.
- Verified NL/FR/DE contact and newsletter forms render required controls and localized submit labels without submitting data.
- Verified BeautySalon JSON-LD parses, contains the verified phone and postcode `6010`, and contains no `aggregateRating` or review markup.
- Verified sitemap coverage for NL/FR/DE core pages and a crawlable robots file that references the sitemap.
- Browser console warnings/errors: none.
- Hydration/framework overlay: none observed.

## Remaining handoff

The technical locale implementation is complete. Native/editorial review of Dutch, French, and German wording remains outside this engineering audit and can be applied later without changing locale architecture.
