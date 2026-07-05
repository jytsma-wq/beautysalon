# Live SEO Readiness Check

Date: 2026-07-05
Time: 08:52 Asia/Tbilisi
Live site: `https://silkbeautysalon.online`
Branch: `codex/visibility-readiness-audit`
Mode: live public SEO readiness audit only

## Scope

This check confirms whether the live site is ready for Google Search Console indexing work and Google Business Profile work.

No website code, dependencies, DNS, deployments, Search Console requests, Bing submissions, Google Business Profile edits, public listing edits, or public claims were changed.

## Summary

Result: partial pass.

The live site is healthy from a broad crawlability perspective: all checked priority routes returned HTTP 200, no checked page exposes a visible `noindex`, the sitemap and robots.txt are public, the homepage `BeautySalon` JSON-LD parses, and no fake review/rating schema was found.

Do not proceed with broad indexing requests yet.

Blockers before indexing:

1. Live `/en/pricelist` still has no canonical tag and no hreflang alternates. Do not manually submit pricelist URLs for indexing until this is fixed and verified live.
2. Live `/en/beauty-salon-batumi` still contains a visible `Popular local searches` block. Review or approve this before using the page as a priority Search Console or Google Business Profile landing page.

## URL Checks

| URL | HTTP | Indexable | Noindex | Canonical | Hreflang | Title | Meta description | H1 | Book CTA | WhatsApp/contact CTA | Keyword-stuffing block | Old placeholder visible |
| --- | ---: | --- | --- | --- | ---: | --- | --- | ---: | --- | --- | --- | --- |
| `https://silkbeautysalon.online/en` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/ka` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/ru` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/tr` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/ar` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/he` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/beauty-salon-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | `Popular local searches` | No |
| `https://silkbeautysalon.online/en/botox-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/dermal-fillers-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/skin-treatment-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/nails-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/pricelist` | 200 | Yes, with metadata blocker | No | Missing | 0 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/en/book` | 200 | Yes | No | Expected | 7 | Yes | Yes | 1 | Yes | Yes | No | No |
| `https://silkbeautysalon.online/sitemap.xml` | 200 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `https://silkbeautysalon.online/robots.txt` | 200 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

## Canonical And Hreflang Result

| URL | User-declared canonical | Hreflang alternates | Result |
| --- | --- | ---: | --- |
| `/en` | `https://silkbeautysalon.online/en` | 7 | Pass |
| `/ka` | `https://silkbeautysalon.online/ka` | 7 | Pass |
| `/ru` | `https://silkbeautysalon.online/ru` | 7 | Pass |
| `/tr` | `https://silkbeautysalon.online/tr` | 7 | Pass |
| `/ar` | `https://silkbeautysalon.online/ar` | 7 | Pass |
| `/he` | `https://silkbeautysalon.online/he` | 7 | Pass |
| `/en/beauty-salon-batumi` | `https://silkbeautysalon.online/en/beauty-salon-batumi` | 7 | Pass, but content review needed |
| `/en/botox-batumi` | `https://silkbeautysalon.online/en/botox-batumi` | 7 | Pass |
| `/en/dermal-fillers-batumi` | `https://silkbeautysalon.online/en/dermal-fillers-batumi` | 7 | Pass |
| `/en/lip-fillers-batumi` | `https://silkbeautysalon.online/en/lip-fillers-batumi` | 7 | Pass |
| `/en/skin-treatment-batumi` | `https://silkbeautysalon.online/en/skin-treatment-batumi` | 7 | Pass |
| `/en/acne-treatment-batumi` | `https://silkbeautysalon.online/en/acne-treatment-batumi` | 7 | Pass |
| `/en/nails-batumi` | `https://silkbeautysalon.online/en/nails-batumi` | 7 | Pass |
| `/en/lashes-brows-batumi` | `https://silkbeautysalon.online/en/lashes-brows-batumi` | 7 | Pass |
| `/en/pricelist` | Missing | 0 | Blocker before manual indexing request |
| `/en/book` | `https://silkbeautysalon.online/en/book` | 7 | Pass |

Expected hreflang set on passing localized pages: `en`, `ka`, `ru`, `tr`, `ar`, `he`, `x-default`.

## Sitemap Result

Live sitemap: `https://silkbeautysalon.online/sitemap.xml`

| Check | Result |
| --- | --- |
| HTTP status | 200 |
| `<loc>` count | 516 |
| Missing checked localized SEO pages | 0 |
| Locale roots included | Yes |
| Important localized SEO pages included | Yes |
| Includes `/en/pricelist` | Yes |
| Includes `/en/book` | Yes |

Localized page groups checked in the sitemap across all six locales:

- `beauty-salon-batumi`
- `botox-batumi`
- `dermal-fillers-batumi`
- `lip-fillers-batumi`
- `skin-treatment-batumi`
- `acne-treatment-batumi`
- `nails-batumi`
- `lashes-brows-batumi`
- `pricelist`

## Robots Result

Live robots: `https://silkbeautysalon.online/robots.txt`

| Check | Result |
| --- | --- |
| HTTP status | 200 |
| Blocks all crawlers | No |
| Important pages blocked | No public block found |
| References sitemap | Yes |

Current public content:

```txt
User-Agent: *
Allow: /

Host: https://silkbeautysalon.online
Sitemap: https://silkbeautysalon.online/sitemap.xml
```

## Structured Data Result

Homepage checked: `https://silkbeautysalon.online/en`

| Check | Result |
| --- | --- |
| JSON-LD scripts | 1 |
| JSON-LD parse errors | 0 |
| Type found | `BeautySalon` |
| `name` present | Yes |
| `address` present | Yes |
| `telephone` present | Yes: `+995 577 34 57 67` |
| `url` present | Yes: `https://silkbeautysalon.online/en` |
| `aggregateRating` present | No |
| `Review` / review markup present | No |

## Phone And WhatsApp Consistency

| Item | Result |
| --- | --- |
| Main visible phone `+995 577 34 57 67` | Present on homepage visible text |
| WhatsApp channel | Present in homepage source |
| Old placeholder number `+995 599 123 456` visibly appears | No |
| Recommendation | Keep the main phone as the primary NAP number. Use WhatsApp `+995 577 28 68 55` only as a separate WhatsApp channel if owner-approved. |

## Expected SEO Release Match

Result: the live site partially matches the expected SEO release, but it is not ready for broad indexing work.

Matches:

- All checked priority routes return HTTP 200.
- Six locale roots are live.
- Main local SEO pages are live.
- Main local SEO pages, except `/en/pricelist`, have expected canonical and hreflang signals.
- Sitemap includes important localized SEO pages.
- Robots allows important pages.
- Homepage `BeautySalon` JSON-LD parses and excludes review/rating markup.
- Main phone is visible and the old placeholder phone is not visible in checked page text.

Mismatches / blockers:

1. `/en/pricelist` lacks canonical and hreflang on live.
2. `/en/beauty-salon-batumi` has a visible `Popular local searches` section that should be reviewed before priority indexing or GBP use.

## Blockers Before Indexing

Do not perform broad Google Search Console indexing requests yet.

Before indexing:

1. Fix or verify canonical and hreflang metadata for `/en/pricelist` and localized `/pricelist` routes.
2. Review or remove the visible `Popular local searches` block from `/{locale}/beauty-salon-batumi` if it is considered SEO-heavy visible content.
3. After those fixes are live, submit only canonical-ready URLs through Search Console.
4. Use Search Console recrawl requests to address stale snippets showing the old placeholder number, if those snippets still appear.

## Method

Live pages were fetched from the local audit environment with a browser-like user agent. The audit inspected HTTP status, rendered HTML source, visible text after stripping scripts/styles, meta tags, canonical tags, hreflang tags, title, description, H1 count, CTA link/text signals, sitemap entries, robots content, phone text, and JSON-LD parseability.
