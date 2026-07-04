# Live SEO Readiness Check

Date: 2026-07-04
Time: 14:00 Asia/Tbilisi
Live site: `https://silkbeautysalon.online`
Branch: `codex/visibility-readiness-audit`
Mode: live public SEO readiness audit only

## Scope

This check confirms whether the live site is ready for Google Search Console indexing work and Google Business Profile work.

No website code, dependencies, DNS, deployments, Search Console requests, Bing submissions, Google Business Profile edits, public listing edits, or public claims were changed.

## Summary

The live site is mostly ready from a technical crawlability perspective: priority routes return HTTP 200, important SEO routes are in the sitemap, robots.txt allows crawling, most priority pages have expected canonicals and hreflang alternates, homepage BeautySalon JSON-LD parses, and no fake review/rating schema is present.

Two blockers remain before broad indexing requests:

1. Live `/en/pricelist` is missing canonical and hreflang tags. It should not be manually submitted for indexing until the metadata fix is live.
2. Live `/en/beauty-salon-batumi` contains a visible `Popular local searches` block. This should be reviewed as a possible SEO-heavy visible block before it is used as a flagship Search Console or Google Business Profile landing page.

Because of these mismatches, do not proceed with blanket indexing requests yet. Request indexing only for canonical-ready pages after verified Google Search Console access exists.

## URL Checks

| URL | HTTP | Indexable | Noindex | Canonical | Hreflang | Title | Meta description | H1 | Book CTA | WhatsApp/contact CTA | Keyword-stuffing block | Old placeholder visible |
| --- | ---: | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| `https://silkbeautysalon.online/en` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/ka` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/ru` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/tr` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/ar` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/he` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/beauty-salon-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | Possible issue: `Popular local searches` | No |
| `https://silkbeautysalon.online/en/botox-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/dermal-fillers-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/skin-treatment-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/nails-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/pricelist` | 200 | Yes | No | Missing | 0 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/book` | 200 | Yes | No | Expected | 7 | Yes | Yes | Yes | Yes | Yes | No | No |
| `https://silkbeautysalon.online/sitemap.xml` | 200 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `https://silkbeautysalon.online/robots.txt` | 200 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

## Canonical Details

| URL | User-declared canonical | Result |
| --- | --- | --- |
| `/en` | `https://silkbeautysalon.online/en` | Pass |
| `/ka` | `https://silkbeautysalon.online/ka` | Pass |
| `/ru` | `https://silkbeautysalon.online/ru` | Pass |
| `/tr` | `https://silkbeautysalon.online/tr` | Pass |
| `/ar` | `https://silkbeautysalon.online/ar` | Pass |
| `/he` | `https://silkbeautysalon.online/he` | Pass |
| `/en/beauty-salon-batumi` | `https://silkbeautysalon.online/en/beauty-salon-batumi` | Pass |
| `/en/botox-batumi` | `https://silkbeautysalon.online/en/botox-batumi` | Pass |
| `/en/dermal-fillers-batumi` | `https://silkbeautysalon.online/en/dermal-fillers-batumi` | Pass |
| `/en/lip-fillers-batumi` | `https://silkbeautysalon.online/en/lip-fillers-batumi` | Pass |
| `/en/skin-treatment-batumi` | `https://silkbeautysalon.online/en/skin-treatment-batumi` | Pass |
| `/en/acne-treatment-batumi` | `https://silkbeautysalon.online/en/acne-treatment-batumi` | Pass |
| `/en/nails-batumi` | `https://silkbeautysalon.online/en/nails-batumi` | Pass |
| `/en/lashes-brows-batumi` | `https://silkbeautysalon.online/en/lashes-brows-batumi` | Pass |
| `/en/pricelist` | Missing | Blocker before manual indexing request |
| `/en/book` | `https://silkbeautysalon.online/en/book` | Pass |

## Sitemap Result

Live sitemap: `https://silkbeautysalon.online/sitemap.xml`

| Check | Result |
| --- | --- |
| HTTP status | 200 |
| Content type | `application/xml` |
| `<loc>` count | 516 |
| Missing checked localized SEO pages | 0 |
| Includes `/en/pricelist` | Yes |
| Includes `/en/book` | Yes |

Important localized SEO pages checked in the sitemap across all six locales:

- `beauty-salon-batumi`
- `botox-batumi`
- `dermal-fillers-batumi`
- `lip-fillers-batumi`
- `skin-treatment-batumi`
- `acne-treatment-batumi`
- `nails-batumi`
- `lashes-brows-batumi`

## Robots Result

Live robots: `https://silkbeautysalon.online/robots.txt`

| Check | Result |
| --- | --- |
| HTTP status | 200 |
| Content type | `text/plain` |
| Blocks all crawlers | No |
| References sitemap | Yes |
| Important pages blocked | No public block found |

## Structured Data Result

Homepage checked: `https://silkbeautysalon.online/en`

| Check | Result |
| --- | --- |
| JSON-LD scripts | 1 |
| JSON-LD parse errors | 0 |
| Type found | `BeautySalon` |
| `name` present | Yes |
| `address` present | Yes |
| `telephone` present | Yes |
| `url` present | Yes |
| `aggregateRating` present | No |
| `Review` / review markup present | No |

Sampled service pages also had parseable JSON-LD with `BeautySalon`, `BreadcrumbList`, `Service`, and `FAQPage` types where expected. No sampled page contained `aggregateRating` or review markup.

## Phone And WhatsApp Consistency

| Item | Result |
| --- | --- |
| Main visible phone `+995 577 34 57 67` | Present |
| WhatsApp number `+995 577 28 68 55` | Present |
| Old placeholder number `+995 599 123 456` visibly appears | No |
| Recommendation | Keep the main phone as the primary NAP number. Use the WhatsApp number only as a separate WhatsApp channel unless owner approves otherwise. |

## Expected SEO Release Match

Result: live site partially matches the expected SEO release, but not completely.

Matches:

- Priority routes return HTTP 200.
- Six locale roots are live.
- Main local SEO pages are live.
- Main local SEO pages have canonical and hreflang tags.
- Sitemap includes important localized SEO pages.
- Robots allows important pages.
- Homepage BeautySalon JSON-LD parses and excludes review/rating markup.
- Main phone and WhatsApp are visible and the old placeholder number is not visible.

Mismatches / blockers:

1. `/en/pricelist` lacks canonical and hreflang on live.
2. `/en/beauty-salon-batumi` has a visible `Popular local searches` section that should be reviewed before priority indexing/GBP use.

## Blockers Before Indexing

Do not perform broad Google Search Console indexing requests yet.

Before indexing:

1. Verify the existing pricelist canonical/hreflang fix is merged and live.
2. Recheck `/en/pricelist` and localized `/pricelist` routes for canonical and hreflang.
3. Review or remove the visible `Popular local searches` block from `/en/beauty-salon-batumi` if it is considered SEO-heavy visible content.
4. After those fixes are live, submit only canonical-ready URLs through Search Console.
5. Use Search Console recrawl requests to address stale snippets showing the old placeholder number, if those snippets still appear.

## Commands / Method

Live pages were fetched with a public user agent from the local audit environment. The audit inspected HTTP status, rendered HTML source, visible text after stripping scripts/styles, meta tags, canonical tags, hreflang tags, title, description, H1, CTA link signals, sitemap entries, robots content, and JSON-LD parseability.
