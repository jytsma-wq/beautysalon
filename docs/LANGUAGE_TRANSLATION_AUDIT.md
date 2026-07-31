# Language Translation Audit

Date: 2026-07-31
Base branch: `main`
Base commit: `ff8e4a9`
Scope: public localized routes, message packs, treatment data, metadata, fallback content, accessibility labels, and Open Graph images.

## Verdict

The six-language implementation is structurally complete and no longer silently presents English fallback content as translated content.

Supported locales:

- English (`en`)
- Georgian (`ka`)
- Russian (`ru`)
- Turkish (`tr`)
- Arabic (`ar`, RTL)
- Hebrew (`he`, RTL)

Each message file now contains exactly 2,081 scalar values. All non-English files have exact key parity with English, no extra keys, and matching interpolation placeholders.

## Corrections Made

### Message packs

- Replaced confirmed English leftovers in booking, contact, footer, social, consultation, conditions, and about-page copy.
- Corrected mixed Arabic strings such as Arabic plus `minimal` and Arabic plus `delivers`.
- Corrected repeated booking labels for Botox and skin rejuvenation in all five non-English packs.
- Corrected high-confidence Georgian spelling, grammar, and literal-translation errors, including the anti-wrinkle treatment copy and repeated team/about copy.
- Corrected Turkish `downtime` leftovers, a Hebrew recovery-time typo, and a Hebrew team-label grammar error.
- Removed obsolete Georgian-only message keys and restored exact structural parity.
- Added localized treatment metadata and localized 404-page copy for all six languages.

### Treatment pages

- Localized treatment title metadata, descriptions, image alt text, duration labels, and price labels.
- Localized values such as `From ₾200`, `30 minutes`, `Initial treatment 60 minutes`, and `12-18 week program` for every supported locale.
- Prevented untranslated optional fields (`howItWorks`, aftercare, FAQ, and benefits) from falling back to English on non-English routes.
- Required treatment names and summaries remain visible in the selected language; optional detail sections are omitted when no approved translation exists.
- Added regression tests that reject English treatment-detail fallbacks and English price/duration notation.

### Routes and shared UI

- Localized the locale-level 404 page and preserved the active locale in its home and contact links.
- Stopped English fallback blog articles from being relabeled as Georgian, Russian, Turkish, Arabic, or Hebrew. English fallback articles are now English-only.
- Localized missing-blog metadata.
- Localized the mobile-menu screen-reader labels and the booking-confirmation email label.
- Replaced the hardcoded English Batumi page image alt text with localized copy.

### Open Graph and fonts

- Localized blog, treatment, and before/after share-card headings and subtitles.
- Added local Cormorant Garamond coverage for English, Turkish, and Russian.
- Added local Noto Sans coverage for Georgian, Arabic, and Hebrew so those scripts render correctly in generated share images.
- Replaced external build-time font downloads with local packages while preserving the website's Inter and DM Serif Display families.
- Included the required Open Graph font files in the standalone production output.

## Validation

- Translation structure: passed for all six locales.
- Missing keys: 0.
- Extra keys: 0.
- Placeholder mismatches: 0.
- TypeScript typecheck: passed.
- ESLint: passed.
- Vitest: 421 passed, 12 skipped.
- Production build: passed.
- Static pages generated: 561.
- Diff/whitespace check: passed.

## Editorial Boundary

Brand names, product names, platform names, email addresses, and internationally used terms such as Botox, WhatsApp, Fire & Ice Peel, and SkinPen remain unchanged where appropriate.

The protected owner dashboard and root-level pre-locale emergency pages are outside the public translation scope. Georgian, Arabic, and Hebrew should still receive a final native-speaker editorial review before the business describes the copy as professionally certified. This is an editorial quality recommendation, not a technical launch blocker.
