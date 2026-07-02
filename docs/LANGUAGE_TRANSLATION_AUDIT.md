# Language Translation Audit

Date: 2026-07-02
Branch: `codex/homepage-popular-treatments`
Scope: message files, localized routes, shared treatment/condition data, homepage content, booking/contact/blog/before-after pages, and hardcoded visible copy.

## Verdict

The six-language structure is present, but the website is not fully translated yet.

The translation files pass key-parity validation, which means the locale JSON files are structurally complete. That does not mean every public page is fully translated. Several routes and shared data sources still render English copy on Georgian, Russian, Turkish, Arabic, and Hebrew pages.

## Checks Run

- `git status --short --branch`
- `npm run validate:i18n`
- Custom effective-message scan comparing non-English message values against `messages/en.json`
- Custom hardcoded visible-English source scan across `src/app/[locale]`, `src/components`, and `src/data`
- Custom treatment/condition data fallback scan against `treatmentContent` and `conditionContent`
- Duplicate JSON key scan for `messages/*.json`

## Structural Translation Status

- Supported locales are still `en`, `ka`, `ru`, `tr`, `ar`, and `he`.
- `npm run validate:i18n` passed.
- No missing message keys were reported for non-English locales.
- No duplicate JSON key paths were found in any message file.
- Georgian has nine extra keys not present in English:
  - `home.statistics`
  - `home.statistics.years`
  - `home.statistics.clients`
  - `home.statistics.satisfaction`
  - `home.statistics.awards`
  - `home.statistics.treatments`
  - `home.statistics.consultations`
  - `statistics.treatments`
  - `statistics.consultations`

## High-Confidence Message Gaps

These are effective translated message values that still contain English where the value appears user-facing.

### Arabic

Arabic has the largest message-level gap. High-confidence English leftovers include:

- `bookingPage.metadata.title`
- `bookingPage.metadata.description`
- `bookingPage.emailAddress`
- `bookingPage.emailPlaceholder`
- `bookingPage.serviceBotox`
- `bookingPage.serviceRejuvenation`
- `common.bookViaWhatsApp`
- `common.social`
- `footer.social`
- `footer.copyright`
- `footer.emailPlaceholder`
- `contactPage.emailAddress`
- `contactPage.emailPlaceholder`
- `contactPage.phonePlaceholder`
- `contactPage.bookViaWhatsApp`
- `contactPage.viewOnMap`
- `consultation.metaTitle`
- `conditionsPage.metaTitle`
- `aboutPage.storyP1`
- `aboutPage.team.ninoBio`
- `aboutPage.team.sophiaBio`
- `aboutPage.featuredInVogue`
- `blogPage.metaTitle`

### Georgian

Georgian is structurally complete, but at least these visible booking values remain English:

- `bookingPage.serviceBotox`
- `bookingPage.serviceRejuvenation`

### Russian

Russian is structurally complete, but these visible values remain English:

- `bookingPage.serviceBotox`
- `bookingPage.serviceRejuvenation`
- `common.social`

### Turkish

Turkish is structurally complete, but these visible values remain English:

- `nav.blog`
- `blog.title`
- `siteConfig.navigation.blog`
- `blogPage.metaTitle`
- `blogPage.breadcrumb`
- `bookingPage.serviceBotox`
- `bookingPage.serviceRejuvenation`
- `treatmentContent.laser-treatments.treatments.ipl-therapy.benefits[3]`

### Hebrew

Hebrew is structurally complete, but at least these visible booking values remain English:

- `bookingPage.serviceBotox`
- `bookingPage.serviceRejuvenation`

## Expected False Positives

The scans also found English-looking values that are acceptable or require owner/editor judgment before translation:

- Brand names: `Silk Beauty Salon`, `Silk Beauty`
- Treatment or product names: `Botox`, `SkinPen`, `Clear + Brilliant`, `Cutera`, `Candela`, `MOXI`, `Obagi`, `Endolift`, `BBL HERO`
- Contact handles and email addresses
- Social platform names: `Telegram`, `TikTok`, `Instagram`, `Facebook`, `LinkedIn`
- Keyboard names: `Escape`, `Tab`
- Person names
- International SEO phrases intentionally mixing terms such as `Botox Batumi`

## Shared Treatment And Condition Data

Condition content is covered well:

- Missing condition translation fields: `0` for every non-English locale.

Treatment detail content is not fully covered:

- Missing treatment translation fields: `54` per non-English locale.
- Affected locales: `ka`, `ru`, `tr`, `ar`, `he`.
- Affected treatment slugs:
  - `anti-wrinkle`
  - `masseter-botox`
  - `hyperhidrosis`
  - `migraine-treatment`
  - `lip-fillers`
  - `cheek-fillers`
  - `chin-fillers`
  - `jaw-fillers`
  - `tear-trough`
  - `non-surgical-rhinoplasty`
  - `marionette-lines`
  - `nasolabial-folds`
  - `temple-fillers`
  - `neck-rejuvenation`
  - `decolletage-treatment`
  - `hand-rejuvenation`
  - `hair-treatments`
  - `hair-extensions`
  - `nails`
  - `lashes`

Missing treatment fields by type:

- `faqs`: 16
- `howItWorks`: 18
- `aftercare`: 18
- `shortDescription`: 1
- `benefits`: 1

Because `getLocalizedTreatmentCategories(locale)` falls back to base English data when a translated field is missing, these gaps can appear directly on localized treatment detail pages.

## Hardcoded Source Gaps

The hardcoded source scan checked 121 source files and found 524 likely visible English strings. Many are expected source defaults, product names, or translated at render time, but these areas are real risks:

### `/[locale]/beauty-salon-batumi`

This route is English-first on all locales. Metadata, breadcrumb text, hero copy, section headings, body copy, service cards, local links, FAQ content, and CTAs are hardcoded in English.

### `/[locale]/international-clients`

The main page headings use `internationalPage` translations, but several rendered arrays are hardcoded in English:

- `pricingData`
- `timingData`
- `packagesData`
- `faqData`

These appear on all locale versions.

### `/[locale]/blog` and `/[locale]/blog/[slug]`

The blog shell uses translated UI labels, but fallback blog posts in `src/data/blog.ts` are English-only and are assigned to the requested locale. If localized database posts are missing, non-English blog routes show English article titles, excerpts, categories, and article HTML.

### `/[locale]/treatments/[slug]`

Treatment data is partially localized, but the detail template has hardcoded English UI labels and copy:

- `At a Glance`
- `Procedure Time`
- `Price From`
- `Results`
- `Downtime`
- `How It Works`
- `Benefits`
- `Aftercare`
- `Questions & Answers`
- `You Might Also Like`
- `Learn more`
- `Book Now`
- `Book This Treatment`
- the doctor quote and citation
- some image alt text and metadata fragments

### `/[locale]/before-after`

The page heading uses translations, but `EnhancedBeforeAfter` contains English-only gallery data, filters, treatment details, concern labels, result labels, durations, and patient story labels.

### `/[locale]/not-found`

The localized not-found page is English-only:

- `Page Not Found`
- `Sorry, we couldn't find the page...`
- `Go Home`
- `Contact Us`

It also links to `/en/contact-us` instead of preserving the active locale.

### `/[locale]/contact-us`

Most visible page text uses `contactPage`, but metadata and image alt text are hardcoded English. Client form error fallbacks can also show English if a server/API error does not return localized text.

### `/[locale]/book`

The visible form mostly uses `bookingPage`, but English fallback defaults remain in the client component. JSON-LD offer names use English treatment names. If any translation key is missing or a backend error passes through without localization, English can appear.

### Header/Menu

The header/menu uses `next-intl`, locale-specific fallbacks, and localized treatment/condition lookup. It looks broadly safe. Product and treatment brand names still appear in English where likely intentional.

### Homepage

The homepage is mostly localized through `homeEditorial`. The newly added `Popular treatments & starting prices` section has copy for all six locales and uses central treatment pricing data. No homepage-specific translation blocker was found, except expected product names such as `Fire & Ice Peel`.

## Priority

- P1: Arabic message file English leftovers, because visible public pages and metadata still contain English paragraphs and CTAs.
- P1: `/beauty-salon-batumi`, because it is a public localized route but renders English content across all locales.
- P1: Treatment detail fallback fields, because localized treatment pages can show English how-it-works, aftercare, and FAQ content.
- P1: Blog fallback posts, because localized blog routes can show English articles when localized database posts are unavailable.
- P2: `/international-clients` hardcoded pricing/package/timing/FAQ arrays.
- P2: `/before-after` hardcoded gallery data.
- P2: `/treatments/[slug]` hardcoded UI labels and quote.
- P2: `not-found` localization and locale-preserving links.
- P3: Metadata/image-alt English fragments and proper-name/product-name false positives.

## Recommended Fix Plan

1. Create a dedicated i18n cleanup branch.
2. Fix high-confidence message leftovers first, especially Arabic and booking labels.
3. Add a regression script/test that fails when non-English locale values exactly match English for selected high-risk namespaces.
4. Localize treatment detail template labels in `treatmentPage`.
5. Fill missing translated treatment detail fields for the 20 affected treatment slugs.
6. Move `/beauty-salon-batumi` hardcoded copy into messages or a localized content map.
7. Move `/international-clients` pricing/package/timing/FAQ labels into localized messages or localized data.
8. Decide whether blog fallback posts should be hidden per missing locale, translated, or explicitly marked as English.
9. Localize before/after gallery labels or limit that content to locales with approved translations.
10. Browser-test all six locale roots and key public routes after each small batch.

## Deployment Recommendation

Do not claim the site is fully translated yet. Deployment of unrelated technical changes can still be safe, but a public "six fully translated languages" claim should wait until the P1 and P2 items above are fixed and browser-verified.
