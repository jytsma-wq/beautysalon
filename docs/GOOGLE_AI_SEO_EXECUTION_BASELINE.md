# Google / Maps / Bing / AI Search Execution Baseline

Date: 2026-07-04
Time: 13:54 Asia/Tbilisi
Branch: `codex/visibility-readiness-audit`
Commit before this document: `ca66d75`
Mode: public verification and account-side execution planning only

## Scope

This document records the current Google Search Console, Google Business Profile, Bing, local SEO, and AI-search execution state for Silk Beauty Salon.

No website code, dependencies, DNS, Hostinger settings, Google settings, Bing settings, public profiles, reviews, photos, ads, analytics settings, or production deployment were changed in this pass.

## Source Of Truth

| Field | Value | Status |
| --- | --- | --- |
| Business name | Silk Beauty Salon | Source of truth for public profiles. Do not keyword-stuff the name. |
| Website | `https://silkbeautysalon.online` | Live and reachable. |
| Location | Zurab Gorgiladze 63, Batumi, Georgia | Confirmed in live site text and structured data. |
| Main phone | `+995 577 34 57 67` | Primary NAP phone for public listings unless owner approves otherwise. |
| WhatsApp | `+995 577 28 68 55` | Previously owner-corrected as a separate WhatsApp channel. Keep separate from primary phone unless owner approves a listing change. |
| Target languages | English, Georgian, Russian, Turkish, Arabic, Hebrew | Six-locale website structure is live. |
| Keyword map | `docs/SEO_KEYWORD_MAP.md` | Current keyword matrix commit: `9272419`. |
| Production source candidate | `origin/main` | Current local `origin/main`: `665cdf8`. |
| Current SEO docs branch | `codex/visibility-readiness-audit` | Current local HEAD before this doc: `ca66d75`. |

## What Was Executed In This Pass

Public checks were executed against the live site and public search results:

- Priority live route health.
- Sitemap and robots availability.
- Sitemap inclusion for priority SEO routes.
- Live homepage NAP and conversion markers.
- Live JSON-LD parseability on sampled routes.
- Canonical and hreflang checks for sampled priority pages.
- Public search samples for index visibility and stale snippet risks.
- Verification-tag presence checks without exposing token values.

Account-side dashboard actions were not executed because verified dashboard access was not available in this session:

- Google Business Profile edits.
- Google Search Console property verification, sitemap submission, URL Inspection, or indexing requests.
- Bing Webmaster Tools verification, sitemap submission, URL submission, or IndexNow setup.
- Google Analytics, Google Tag Manager, or profile-performance review.

## Public Live Route Baseline

Checked against `https://silkbeautysalon.online`.

| Route | HTTP | Notes |
| --- | ---: | --- |
| `/en` | 200 | Homepage live. |
| `/ka` | 200 | Locale root live. |
| `/ru` | 200 | Locale root live. |
| `/tr` | 200 | Locale root live. |
| `/ar` | 200 | Locale root live. |
| `/he` | 200 | Locale root live. |
| `/sitemap.xml` | 200 | XML sitemap live. |
| `/robots.txt` | 200 | Allows crawling and references sitemap. |
| `/en/book` | 200 | Booking page live. |
| `/en/pricelist` | 200 | Page live; canonical/hreflang still missing on live. |
| `/en/treatments` | 200 | Treatments page live. |
| `/en/about` | 200 | About page live. |
| `/en/faq` | 200 | FAQ page live. |
| `/en/beauty-salon-batumi` | 200 | Local broad-intent page live. |
| `/en/botox-batumi` | 200 | Botox local-intent page live. |
| `/en/dermal-fillers-batumi` | 200 | Fillers local-intent page live. |
| `/en/lip-fillers-batumi` | 200 | Lip fillers local-intent page live. |
| `/en/skin-treatment-batumi` | 200 | Skin treatment local-intent page live. |
| `/en/acne-treatment-batumi` | 200 | Acne local-intent page live. |
| `/en/nails-batumi` | 200 | Nails local-intent page live. |
| `/en/lashes-brows-batumi` | 200 | Lashes/brows local-intent page live. |

## Sitemap And Robots

| Check | Result |
| --- | --- |
| Sitemap URL | `https://silkbeautysalon.online/sitemap.xml` |
| Sitemap HTTP | 200 |
| Sitemap `<loc>` count | 516 |
| Priority sitemap missing count | 0 |
| Robots URL | `https://silkbeautysalon.online/robots.txt` |
| Robots HTTP | 200 |
| Blocks important pages | No public block found |
| References sitemap | Yes |

Priority checked paths are present in the sitemap:

- Locale roots: `/en`, `/ka`, `/ru`, `/tr`, `/ar`, `/he`
- Booking and price pages: `/en/book`, `/en/pricelist`
- Main SEO service pages: `/en/botox-batumi`, `/en/dermal-fillers-batumi`, `/en/lip-fillers-batumi`, `/en/skin-treatment-batumi`, `/en/acne-treatment-batumi`, `/en/nails-batumi`, `/en/lashes-brows-batumi`

## Live Homepage Signals

| Signal | Result |
| --- | --- |
| Main phone present | Yes |
| WhatsApp number present | Yes |
| Old placeholder phone `+995 599 123 456` in live `/en` HTML | No |
| Address present | Yes |
| Homepage popular prices marker | Present |
| Visit Us marker/address | Present |
| Google Search Console verification meta | Not detected |
| Bing verification meta | Not detected |
| GA4 public ID pattern | Detected; account access not available to confirm configuration |
| GTM public ID pattern | Not detected |
| `aggregateRating` | Not detected |
| Review schema markup | Not detected |

## Structured Data And Canonical Checks

Sampled pages were fetched live and their JSON-LD was parsed.

| URL | HTTP | Canonical | Hreflang alternates | JSON-LD types | JSON parse errors | `aggregateRating` |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| `/en` | 200 | 1 | 7 | `BeautySalon` | 0 | No |
| `/en/botox-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/en/dermal-fillers-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/en/lip-fillers-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/en/skin-treatment-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/en/acne-treatment-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/en/nails-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/en/lashes-brows-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/ka/lip-fillers-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/ru/botox-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/ar/acne-treatment-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |
| `/he/nails-batumi` | 200 | 1 | 7 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | 0 | No |

### Pricelist Canonical Gap

The live `/pricelist` pages are reachable and in the sitemap, but still lack canonical and hreflang tags on all six checked locale routes:

| Route | HTTP | Canonical count | Hreflang count | Noindex |
| --- | ---: | ---: | ---: | --- |
| `/en/pricelist` | 200 | 0 | 0 | No |
| `/ka/pricelist` | 200 | 0 | 0 | No |
| `/ru/pricelist` | 200 | 0 | 0 | No |
| `/tr/pricelist` | 200 | 0 | 0 | No |
| `/ar/pricelist` | 200 | 0 | 0 | No |
| `/he/pricelist` | 200 | 0 | 0 | No |

Recommendation: do not manually submit `/pricelist` pages in GSC/Bing URL inspection until the existing metadata fix is live and verified.

## Public Search Baseline

Public search samples show that Silk Beauty Salon pages are discoverable, but snippets vary and may lag behind the live site.

Observed discoverable pages include:

- `https://silkbeautysalon.online/en`
- `https://silkbeautysalon.online/en/beauty-salon-batumi`
- `https://silkbeautysalon.online/en/botox-batumi`
- `https://silkbeautysalon.online/en/dermal-fillers-batumi`
- `https://silkbeautysalon.online/en/skin-treatment-batumi`
- `https://silkbeautysalon.online/en/book`
- `https://silkbeautysalon.online/tr/before-after`

Important stale-snippet finding:

- Some public snippets still show the old placeholder phone `+995 599 123 456` for `/en` and `/en/book`.
- The same live pages currently show the correct visible phone in live HTML.
- Treat this as a recrawl/snippet lag issue unless a later live source check finds the old number again.

Competitor and citation signals appearing in public samples:

- Salonly Silk Beauty Salon listing appears for branded/local searches.
- LAKmousse appears strongly for broad beauty and service searches.
- Other map/directory/social competitors include Yandex Maps listings, Madloba, InfoBatumi, Tripadvisor, Instagram profiles, and nearby salons.

## Google Business Profile Execution Status

| Item | Status |
| --- | --- |
| GBP access confirmed | No |
| Correct GBP profile URL confirmed | No |
| Profile audited inside GBP Manager | No |
| Categories updated | No |
| Services updated | No |
| Photos uploaded | No |
| Q&A published | No |
| GBP posts published | No |
| Review link confirmed | No |
| Review workflow started | No |

Prepared but not published:

- Category recommendations.
- Service structure.
- Description draft.
- Photo shot list.
- Q&A drafts.
- 12-week GBP post calendar.
- Ethical multilingual review request and reply templates.

Owner approval required before any public GBP action:

1. Confirm or claim the correct GBP profile.
2. Confirm main phone, WhatsApp handling, address, hours, categories, services, and booking URL.
3. Approve real photo uploads.
4. Approve Q&A, posts, and review request workflow.
5. Confirm any medical/aesthetic/clinic wording and staff/certification claims before publishing.

## Google Search Console Execution Status

| Item | Status |
| --- | --- |
| URL-prefix property confirmed | No |
| Domain property confirmed | No |
| Verification completed | No |
| Sitemap submitted | No |
| URL Inspection completed | No |
| Indexing requests submitted | No |
| Pages report reviewed | No |
| Manual actions reviewed | No |
| Security issues reviewed | No |
| Core Web Vitals reviewed | No |
| HTTPS report reviewed | No |

Public site readiness:

- Sitemap is live and healthy.
- Robots allows crawling and references the sitemap.
- Priority service pages are live, canonicalized, hreflang-enabled, and parseable.
- `/pricelist` pages are live but should wait for canonical/hreflang fix before manual submission.

Recommended GSC execution order after owner-approved access:

1. Add/confirm Domain property for `silkbeautysalon.online`.
2. Prefer DNS TXT verification only with explicit owner approval.
3. Submit `https://silkbeautysalon.online/sitemap.xml`.
4. Inspect homepage and priority service pages.
5. Request indexing only for canonical-ready pages.
6. Request recrawl of pages whose snippets still show `+995 599 123 456`.
7. Review Pages, Sitemaps, Removals, Manual Actions, Security Issues, Core Web Vitals, HTTPS, and Links reports.

## Bing Webmaster Tools Execution Status

| Item | Status |
| --- | --- |
| Bing Webmaster access confirmed | No |
| Site verified | No |
| Sitemap submitted | No |
| Priority URLs submitted | No |
| Crawl/index reports reviewed | No |
| Bing Places status confirmed | No |
| IndexNow implemented | No |

Recommended Bing execution order after owner-approved access:

1. Sign in to Bing Webmaster Tools.
2. Import verified Google Search Console property if available.
3. Otherwise use an owner-approved verification method without exposing tokens.
4. Submit `https://silkbeautysalon.online/sitemap.xml`.
5. Submit only priority canonical URLs.
6. Review SEO reports, crawl errors, indexing, backlinks, and query data.
7. Consider IndexNow later as a separate approved implementation.

## AI Search Readiness Baseline

Website-side readiness is strong for machine-readable local answers:

- Clear business name, address, phone, email, hours, booking paths, and WhatsApp path.
- Service-specific local pages for Botox, dermal fillers, lip fillers, skin treatment, acne treatment, nails, and lashes/brows.
- Pricing and booking paths are visible.
- BeautySalon structured data is parseable and does not include review/rating markup.
- FAQPage markup exists on sampled service pages where visible FAQ content exists.
- Sitemap includes the important localized routes.

Remaining AI/search content gaps:

1. Native review of Georgian, Russian, Turkish, Arabic, and Hebrew copy before heavy promotion.
2. Owner-approved visible language/tourist appointment wording.
3. More concise "Before you book" and "Aftercare basics" content where medically/legally appropriate.
4. More real photos and verified profile/citation data.
5. Removal of stale public snippets through recrawl requests after GSC access.

## Local Citation Execution Status

No third-party listing changes were made.

Priority platforms to verify after owner approval:

- Google Business Profile / Google Maps.
- Bing Places.
- Salonly.
- Facebook.
- Instagram.
- TikTok, if actively used.
- Apple Maps.
- Yandex Maps.
- 2GIS.
- Madloba.
- Locate.ge.
- InfoBatumi.
- Tripadvisor or tourism/expat directories where relevant.
- Beauty booking platforms.

Citation correction priorities:

1. Ensure business name remains `Silk Beauty Salon`.
2. Ensure address is `Zurab Gorgiladze 63, Batumi, Georgia`.
3. Use `+995 577 34 57 67` as primary phone unless owner approves otherwise.
4. Use `+995 577 28 68 55` as WhatsApp only where a separate WhatsApp field/link exists.
5. Add website and booking link where allowed.
6. Use accurate services and categories without unsupported medical claims.
7. Upload only real owner-approved photos.

## Current Blockers

1. Verified GBP Manager access is not available.
2. Verified Google Search Console access is not available.
3. Verified Bing Webmaster Tools/Bing Places access is not available.
4. No Google review link is confirmed.
5. Public search snippets still show stale old phone on some results.
6. Live `/pricelist` pages still lack canonical/hreflang tags.
7. Private metrics are unavailable: GSC impressions/clicks, GBP views/actions, Bing indexing, GA4/GTM reports, calls, bookings, WhatsApp clicks, and revenue.

## Immediate Next Actions

### Owner / Account Actions

1. Open or delegate Google Business Profile Manager access.
2. Open or delegate Google Search Console access.
3. Open or delegate Bing Webmaster Tools and Bing Places access.
4. Confirm final public hours, category comfort, service list, and staff/language claims.
5. Confirm Google review link after GBP access.
6. Approve any public GBP/citation edits before publishing.

### Safe Dashboard Actions After Access

1. Verify GSC property and submit sitemap.
2. Inspect and request indexing for canonical-ready priority pages.
3. Do not submit `/pricelist` manually until canonical/hreflang fix is live.
4. Verify or claim GBP and update only owner-approved NAP/categories/services/photos/Q&A.
5. Verify Bing Webmaster Tools and submit sitemap.
6. Record all account-side actions in the relevant docs without tokens, credentials, or private account IDs.

### Code Tasks Requiring Separate Approval

1. Deploy or verify the existing `/pricelist` canonical/hreflang fix.
2. Add a safe public release marker for future live-source verification.
3. Consider IndexNow only as a separate owner-approved task after Bing setup.

## References

- Live site: `https://silkbeautysalon.online`
- Sitemap: `https://silkbeautysalon.online/sitemap.xml`
- Robots: `https://silkbeautysalon.online/robots.txt`
- Keyword map: `docs/SEO_KEYWORD_MAP.md`
- Final SEO report: `docs/FINAL_SEO_AI_SEARCH_REPORT.md`
- GSC log: `docs/GOOGLE_SEARCH_CONSOLE_INDEXING_LOG.md`
- GBP log: `docs/GOOGLE_BUSINESS_PROFILE_OPTIMIZATION_LOG.md`
- Bing log: `docs/BING_WEBMASTER_AND_INDEXNOW_LOG.md`
- Citation audit: `docs/NAP_CITATION_CONSISTENCY_AUDIT.md`
- Monitoring baseline: `docs/SEO_MONITORING_BASELINE_AND_REPORTING.md`
