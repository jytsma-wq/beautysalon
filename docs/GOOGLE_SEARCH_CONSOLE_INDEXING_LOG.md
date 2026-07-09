# Google Search Console Indexing Log

Date: 2026-07-04
Phase: 3 - Google Search Console setup and indexing
Branch: `codex/visibility-readiness-audit`
Mode: Search Console execution log plus public technical readiness notes

## Current Status Note - 2026-07-05

Earlier notes in this file record that authenticated Search Console access was unavailable during the first 2026-07-04 pass. A later authenticated browser session became available on 2026-07-05. The current authoritative Search Console status is:

- Domain property: `sc-domain:silkbeautysalon.online`
- Sitemap: `https://silkbeautysalon.online/sitemap.xml`, submitted and successful
- Page indexing baseline: 9 indexed, 487 not indexed
- Not-indexed breakdown: 485 discovered/not-indexed, 1 redirect, 1 alternate-canonical URL
- Indexing requests already submitted: 9 targeted canonical-ready URLs

Do not use the older "GSC access unavailable" section as the current status. Keep it only as historical audit context.

### Website-Side Blocker Release Status

The next safe SEO release branch updates the website-side blockers before further indexing requests:

- `/{locale}/pricelist` metadata: local fix was already committed in `4baa40c fix(seo): add pricelist canonical metadata`; this release branch keeps it and adds all-locale regression coverage.
- `/{locale}/beauty-salon-batumi` visible content blocker: this release branch replaces the visible `Popular local searches` block with localized customer-facing service navigation.
- No new indexing requests should be made until these changes are owner-approved, released, and verified live.

### Georgian/Turkish Service Copy Release Note - 2026-07-09

The six Georgian/Turkish service URLs were already submitted through URL Inspection before this release. This task does not request additional indexing. The release only aligns rendered page copy so the owner-reported query forms appear naturally without visible keyword-list blocks:

- Georgian: `ტუჩის ფილერი ბათუმში`, `ბოტოქსი ბათუმში`, `კანის მკურნალობა ბათუმში`, `კანის მოვლა ბათუმში`
- Turkish: `Batum’da dudak dolgusu`, `Batum’da botoks`, `Batum’da cilt tedavisi`, `Batum’da cilt bakımı`

Next follow-up for these six URLs remains 2026-07-14.

## Index Coverage Diagnosis Update - 2026-07-05 10:15 Asia/Tbilisi

A follow-up Page indexing diagnosis was performed in the authenticated Search Console browser session. No DNS, website code, deployment, Google Business Profile, Bing, analytics, public listing, or verification changes were made. No additional indexing requests were submitted.

Detailed diagnosis: `docs/GSC_INDEX_COVERAGE_DIAGNOSIS.md`.

### Current Page Indexing Breakdown

| Reason | Source | Validation | Pages | Classification |
| --- | --- | --- | ---: | --- |
| Page with redirect | Website | Not started | 1 | Expected/harmless: `https://www.silkbeautysalon.online/` redirects to non-www. |
| Alternate page with proper canonical tag | Website | Not started | 1 | Expected/harmless: `https://silkbeautysalon.online/` canonicalizes to `/en`. |
| Discovered - currently not indexed | Google systems | Not started | 485 | Main issue. Mostly discovered multilingual sitemap URLs that Google has not crawled yet; prioritize monitoring, not bulk submission. |
| Blocked by robots.txt | Website | N/A | 0 | No current not-indexed issue. |
| Crawled - currently not indexed | Google systems | N/A | 0 | No current issue shown. |
| Indexed, though blocked by robots.txt | Website | Not started | 2 | Appearance warning, not part of the 487 not-indexed count. Examples are stale HTTP/non-www roots last crawled in May 2026. |

### Sample URLs Checked

| URL | GSC bucket | Public live check | Result |
| --- | --- | --- | --- |
| `https://silkbeautysalon.online/ar` | Discovered - currently not indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Crawlable; wait/recheck. |
| `https://silkbeautysalon.online/ar/about` | Discovered - currently not indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Crawlable; wait/recheck. |
| `https://silkbeautysalon.online/ar/accessibility` | Discovered - currently not indexed | 200, in sitemap, no noindex, missing canonical/hreflang | Low-priority utility metadata cleanup candidate. |
| `https://silkbeautysalon.online/ar/beauty-salon-batumi` | Discovered - currently not indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Hold indexing request until visible content review. |
| `https://silkbeautysalon.online/ar/book` | Discovered - currently not indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Crawlable; wait/recheck. |
| `https://www.silkbeautysalon.online/` | Page with redirect | 308 to `https://silkbeautysalon.online/` | Expected. |
| `https://silkbeautysalon.online/` | Alternate with canonical | 200, canonical `https://silkbeautysalon.online/en` | Expected. |
| `http://silkbeautysalon.online/` and `http://www.silkbeautysalon.online/` | Indexed, though blocked by robots.txt warning | 301 redirect chain to HTTPS/canonical host | Likely stale; recheck later. |

### Current Recommendation

Do not request indexing for all 487 URLs.

Recommended:

1. Recheck the 9 already requested URLs on 2026-07-12.
2. Keep `/{locale}/pricelist` held until live canonical/hreflang metadata is fixed and verified.
3. Keep `/{locale}/beauty-salon-batumi` held until the visible `Popular local searches` section is reviewed or cleaned.
4. After the 9 existing requests settle, inspect and request selected high-intent non-English service pages only, not the full sitemap.
5. Treat the HTTP/non-www robots warning as stale unless it persists after recrawl.

## Phase 2 Execution Update - 2026-07-05 09:36 Asia/Tbilisi

This update performed a real authenticated Google Search Console pass for the domain property. No DNS, verification token, website code, deployment, Google Business Profile, Bing, analytics, or public listing changes were made.

### Property Status

| Item | Status |
| --- | --- |
| Search Console access | Available in the in-app browser session |
| Property type | Domain property: `sc-domain:silkbeautysalon.online` |
| Verification method | Already verified before this session; method was not changed and no verification token/value was exposed |
| New property created | No |
| DNS changed | No |
| Verification token exposed | No |

### Sitemap Submission Result

`https://silkbeautysalon.online/sitemap.xml` was already submitted in Search Console.

| Sitemap | Type | Submitted | Last read | Status | Discovered pages |
| --- | --- | --- | --- | --- | ---: |
| `https://silkbeautysalon.online/sitemap.xml` | Sitemap | 2026-06-13 | 2026-06-21 | Success | 492 |

No duplicate sitemap was submitted.

### Search Console Report Baseline

| Report | Current finding |
| --- | --- |
| Overview performance | 20 total web search clicks |
| Page indexing | 9 indexed pages; 487 not indexed pages |
| Core Web Vitals | Not enough usage data for mobile or desktop in the last 90 days |
| HTTPS | 2 HTTPS URLs; 0 non-HTTPS URLs |
| Breadcrumbs | 1 valid, 0 invalid |
| Manual actions | No issues detected |
| Security issues | No issues detected |
| Links | Processing data; report says to check again later |

### Page Indexing Details

| Reason | Source | Validation | Pages |
| --- | --- | --- | ---: |
| Page with redirect | Website | Not started | 1 |
| Alternate page with proper canonical tag | Website | Not started | 1 |
| Discovered - currently not indexed | Google systems | Not started | 485 |
| Blocked by robots.txt | Website | N/A | 0 |
| Crawled - currently not indexed | Google systems | N/A | 0 |
| Indexed, though blocked by robots.txt | Website | Not started | 2 |

Follow-up: inspect examples for `Indexed, though blocked by robots.txt` in a separate pass. The public `robots.txt` currently allows crawling, so this may be stale data or non-public/old URL examples.

### Performance Baseline

Default visible period in Search Console: 2026-06-12 to 2026-07-03.

| Metric | Value |
| --- | ---: |
| Total clicks | 20 |
| Total impressions | 293 |
| Average CTR | 6.8% |
| Average position | 5 |

Top visible queries:

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| `silk beauty salon` | 0 | 6 |
| `skin treatment near me` | 0 | 2 |
| `silkbeauty` | 0 | 1 |
| `silk batumi` | 0 | 1 |
| `silk nails cootamundra` | 0 | 1 |

Top pages, countries, and devices were attempted but not reliably extracted because the Search Console UI did not switch the table tabs cleanly during this browser session. Re-run those tabs in the next account-side pass.

### URL Inspection Findings

Important: URL Inspection results below are real Search Console UI results from this session. URLs not listed as inspected were not successfully inspected in the account UI in this pass.

English URLs:

| URL | URL is on Google | Page indexing | Indexing allowed | Request indexing submitted |
| --- | --- | --- | --- | --- |
| `https://silkbeautysalon.online/en` | Yes | Page is indexed | N/A in indexed summary | No; already indexed |
| `https://silkbeautysalon.online/en/beauty-salon-batumi` | Not inspected in GSC | Held because Phase 1 found `Popular local searches` | N/A | No |
| `https://silkbeautysalon.online/en/botox-batumi` | Yes | Page is indexed | N/A in indexed summary | No; already indexed |
| `https://silkbeautysalon.online/en/dermal-fillers-batumi` | Yes | Page is indexed | N/A in indexed summary | No; already indexed |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | No | URL is unknown to Google | Yes after live test | Yes |
| `https://silkbeautysalon.online/en/skin-treatment-batumi` | Yes | Page is indexed | N/A in indexed summary | No; already indexed |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | No | URL is unknown to Google | Yes after live test | Yes |
| `https://silkbeautysalon.online/en/nails-batumi` | No | URL is unknown to Google | Yes after live test | Yes |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | No | URL is unknown to Google | Yes after live test | Yes |
| `https://silkbeautysalon.online/en/pricelist` | Not inspected in GSC | Held because Phase 1 found missing canonical/hreflang | N/A | No |
| `https://silkbeautysalon.online/en/book` | Yes | Page is indexed | N/A in indexed summary | No; already indexed |

Locale roots:

| URL | URL is on Google | Page indexing | Request indexing submitted |
| --- | --- | --- | --- |
| `https://silkbeautysalon.online/ka` | No | Discovered - currently not indexed | Yes |
| `https://silkbeautysalon.online/ru` | No | Discovered - currently not indexed | Yes |
| `https://silkbeautysalon.online/tr` | No | Discovered - currently not indexed | Yes |
| `https://silkbeautysalon.online/ar` | No | Discovered - currently not indexed | Yes |
| `https://silkbeautysalon.online/he` | No | Discovered - currently not indexed | Yes |

Georgian priority URLs:

| URL | URL is on Google | Page indexing | Request indexing submitted |
| --- | --- | --- | --- |
| `/ka/beauty-salon-batumi` | No | URL is unknown to Google | No; held for content review group |
| `/ka/botox-batumi` | No | Discovered - currently not indexed | No |
| `/ka/dermal-fillers-batumi` | No | Discovered - currently not indexed | No |
| `/ka/lip-fillers-batumi` | No | URL is unknown to Google | No |
| `/ka/skin-treatment-batumi` | No | Discovered - currently not indexed | No |
| `/ka/acne-treatment-batumi` | No | URL is unknown to Google | No |
| `/ka/nails-batumi` | No | URL is unknown to Google | No |
| `/ka/lashes-brows-batumi` | No | URL is unknown to Google | No |
| `/ka/pricelist` | No | Discovered - currently not indexed | No; held for pricelist metadata group |

Russian priority URLs:

| URL | URL is on Google | Page indexing | Request indexing submitted |
| --- | --- | --- | --- |
| `/ru/beauty-salon-batumi` | No | Discovered - currently not indexed | No; held for content review group |
| `/ru/botox-batumi` | No | Discovered - currently not indexed | No |
| `/ru/dermal-fillers-batumi` | No | Discovered - currently not indexed | No |
| `/ru/lip-fillers-batumi` | No | URL is unknown to Google | No |
| `/ru/skin-treatment-batumi` | No | Discovered - currently not indexed | No |
| `/ru/acne-treatment-batumi` | No | URL is unknown to Google | No |
| `/ru/nails-batumi` | No | URL is unknown to Google | No |
| `/ru/lashes-brows-batumi` | No | URL is unknown to Google | No |
| `/ru/pricelist` | No | Discovered - currently not indexed | No; held for pricelist metadata group |

Turkish priority URLs:

| URL | URL is on Google | Page indexing | Request indexing submitted |
| --- | --- | --- | --- |
| `/tr/beauty-salon-batumi` | No | Discovered - currently not indexed | No; held for content review group |
| `/tr/botox-batumi` | No | Discovered - currently not indexed | No |
| `/tr/dermal-fillers-batumi` | No | Discovered - currently not indexed | No |
| `/tr/lip-fillers-batumi` | No | URL is unknown to Google | No |
| `/tr/skin-treatment-batumi` | No | Discovered - currently not indexed | No |
| `/tr/acne-treatment-batumi` | No | URL is unknown to Google | No |
| `/tr/nails-batumi` | No | URL is unknown to Google | No |
| `/tr/lashes-brows-batumi` | No | URL is unknown to Google | No |
| `/tr/pricelist` | No | URL is unknown to Google | No; held for pricelist metadata group |

Arabic priority URLs:

| URL | URL Inspection result |
| --- | --- |
| `/ar/beauty-salon-batumi` | No; URL is unknown to Google |
| `/ar/botox-batumi` | Incomplete; Search Console UI timed out |
| `/ar/dermal-fillers-batumi` | No; Discovered - currently not indexed |
| `/ar/lip-fillers-batumi` | Incomplete; Search Console UI timed out |
| `/ar/skin-treatment-batumi` | Incomplete; Search Console UI timed out |
| `/ar/acne-treatment-batumi` | Incomplete; Search Console UI timed out |
| `/ar/nails-batumi` | Incomplete; Search Console UI timed out |
| `/ar/lashes-brows-batumi` | No; URL is unknown to Google |
| `/ar/pricelist` | Incomplete; Search Console UI timed out |

Hebrew priority URLs:

| URL group | URL Inspection result |
| --- | --- |
| `/he` | No; Discovered - currently not indexed; indexing requested |
| `/he/*` service and pricelist pages | Incomplete; Search Console UI ended with duplicate visible search controls after long inspection session |

### Indexing Requests Made

Indexing was requested only for canonical-ready/high-priority URLs that were not already indexed and were not part of the known blocker groups.

| URL | Result |
| --- | --- |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | Indexing requested |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | Indexing requested |
| `https://silkbeautysalon.online/en/nails-batumi` | Indexing requested |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | Indexing requested |
| `https://silkbeautysalon.online/ka` | Indexing requested |
| `https://silkbeautysalon.online/ru` | Indexing requested |
| `https://silkbeautysalon.online/tr` | Indexing requested |
| `https://silkbeautysalon.online/ar` | Indexing requested |
| `https://silkbeautysalon.online/he` | Indexing requested |

No indexing request was submitted for:

- Any `/pricelist` URL, because live `/en/pricelist` still lacks canonical/hreflang metadata.
- Any `/{locale}/beauty-salon-batumi` URL, because Phase 1 still flags visible `Popular local searches` content for review.
- Localized service pages beyond the locale roots, to avoid mass manual submission and because many are already in the sitemap/discovered state.

### Canonical / Mobile / Rich Result Notes

- Indexed English pages show HTTPS as valid where shown.
- Non-indexed URLs do not show enhancement/rich-result data in URL Inspection.
- Mobile usability was not shown in the inspected URL summaries.
- Google-selected canonical details were not expanded in this pass; the visible summaries for non-indexed pages often show `N/A` because they have not been crawled yet.
- Public Phase 1 checks still show self-canonical and hreflang for most priority pages except `/pricelist`.

### Next Check Date

Recommended next check: 2026-07-12, or earlier after:

1. `/pricelist` canonical/hreflang is fixed and live.
2. `Popular local searches` on `/{locale}/beauty-salon-batumi` is reviewed or approved.
3. Google has had time to process the 9 indexing requests submitted in this pass.

## Phase 2 Execution Update - 2026-07-04 14:02 Asia/Tbilisi

This update attempted the Google Search Console setup/indexing phase from the current environment.

Result: account-side Search Console execution is blocked because no verified Search Console connector, API session, or authenticated browser session was available in this workspace. No property was created, no verification method was changed, no sitemap was submitted, no URL Inspection requests were run, and no indexing requests were submitted.

What was completed instead:

- Rechecked all 61 requested priority URLs across English, Georgian, Russian, Turkish, Arabic, and Hebrew using public live HTML.
- Rechecked live sitemap and robots.txt.
- Confirmed public crawl/indexing signals for canonical-ready pages.
- Identified URLs that should be held before indexing requests.
- Recorded which metrics remain unavailable until verified GSC access exists.

### Current GSC Access Status

| Item | Status | Evidence / note |
| --- | --- | --- |
| Google Search Console access | Not confirmed / unavailable | No callable Search Console tool, verified API session, or authenticated GSC dashboard session was available. |
| Domain property for `silkbeautysalon.online` | Not confirmed | Requires verified GSC access. DNS TXT verification requires explicit owner approval. |
| URL-prefix property for `https://silkbeautysalon.online` | Not confirmed | Requires verified GSC access. |
| New property created | No | No account-side changes were made. |
| Verification method changed | No | No DNS, HTML file, meta tag, GA, or GTM verification change was made. |
| Verification token exposed | No | No token values were read, stored, or committed. |

### Current Sitemap Submission Status

| Sitemap | Public status | GSC submission status |
| --- | --- | --- |
| `https://silkbeautysalon.online/sitemap.xml` | HTTP 200, `application/xml`, 516 `<loc>` entries | Not submitted in this session because verified GSC access was unavailable. |

### Current Priority URL Readiness Summary

Public live checks covered:

- 61 priority URLs.
- 0 HTTP failures.
- 0 sitemap omissions.
- 0 visible old placeholder phone occurrences.
- 49 URLs ready for Search Console inspection and potential indexing request after access.
- 6 `/pricelist` URLs blocked from indexing requests until canonical/hreflang is live.
- 6 `/beauty-salon-batumi` URLs should be reviewed before indexing requests because they contain a visible `Popular local searches` block.

### URL Inspection And Indexing Request Plan

Important: the fields below are public-readiness findings, not real GSC URL Inspection output. GSC-only fields such as "URL is on Google", Google-selected canonical, crawl status, mobile usability, rich result eligibility, and indexing-request status are still unavailable.

| URL group | Public HTTP/indexability | User-declared canonical | Hreflang | In sitemap | GSC URL Inspection | Indexing request recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| Locale roots: `/en`, `/ka`, `/ru`, `/tr`, `/ar`, `/he` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Botox pages: `/{locale}/botox-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Dermal filler pages: `/{locale}/dermal-fillers-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Lip filler pages: `/{locale}/lip-fillers-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Skin treatment pages: `/{locale}/skin-treatment-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Acne treatment pages: `/{locale}/acne-treatment-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Nails pages: `/{locale}/nails-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Lashes/brows pages: `/{locale}/lashes-brows-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |
| Beauty salon pages: `/{locale}/beauty-salon-batumi` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Inspect after access, but hold indexing requests until the visible `Popular local searches` block is reviewed or approved. |
| Pricelist pages: `/{locale}/pricelist` | 200, no noindex | Missing | 0 alternates | Yes | Pending GSC access | Do not request indexing until canonical and hreflang are live. |
| English booking page: `/en/book` | 200, no noindex | Self-canonical | 7 alternates | Yes | Pending GSC access | Safe to inspect and request indexing after access. |

### Priority English URL Status

| URL | Public readiness | GSC URL Inspection | Indexing request |
| --- | --- | --- | --- |
| `https://silkbeautysalon.online/en` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/beauty-salon-batumi` | Hold for visible SEO-heavy block review | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/botox-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/dermal-fillers-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/skin-treatment-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/nails-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | Ready | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/pricelist` | Blocked: missing canonical/hreflang | Not inspected | Not submitted |
| `https://silkbeautysalon.online/en/book` | Ready | Not inspected | Not submitted |

### Priority Localized URL Status

| Locale | Ready for inspection/indexing after access | Hold for SEO-heavy block review | Blocked until canonical/hreflang fix |
| --- | --- | --- | --- |
| Georgian `/ka` | `/ka`, `/ka/botox-batumi`, `/ka/dermal-fillers-batumi`, `/ka/lip-fillers-batumi`, `/ka/skin-treatment-batumi`, `/ka/acne-treatment-batumi`, `/ka/nails-batumi`, `/ka/lashes-brows-batumi` | `/ka/beauty-salon-batumi` | `/ka/pricelist` |
| Russian `/ru` | `/ru`, `/ru/botox-batumi`, `/ru/dermal-fillers-batumi`, `/ru/lip-fillers-batumi`, `/ru/skin-treatment-batumi`, `/ru/acne-treatment-batumi`, `/ru/nails-batumi`, `/ru/lashes-brows-batumi` | `/ru/beauty-salon-batumi` | `/ru/pricelist` |
| Turkish `/tr` | `/tr`, `/tr/botox-batumi`, `/tr/dermal-fillers-batumi`, `/tr/lip-fillers-batumi`, `/tr/skin-treatment-batumi`, `/tr/acne-treatment-batumi`, `/tr/nails-batumi`, `/tr/lashes-brows-batumi` | `/tr/beauty-salon-batumi` | `/tr/pricelist` |
| Arabic `/ar` | `/ar`, `/ar/botox-batumi`, `/ar/dermal-fillers-batumi`, `/ar/lip-fillers-batumi`, `/ar/skin-treatment-batumi`, `/ar/acne-treatment-batumi`, `/ar/nails-batumi`, `/ar/lashes-brows-batumi` | `/ar/beauty-salon-batumi` | `/ar/pricelist` |
| Hebrew `/he` | `/he`, `/he/botox-batumi`, `/he/dermal-fillers-batumi`, `/he/lip-fillers-batumi`, `/he/skin-treatment-batumi`, `/he/acne-treatment-batumi`, `/he/nails-batumi`, `/he/lashes-brows-batumi` | `/he/beauty-salon-batumi` | `/he/pricelist` |

### GSC-Only Fields Still Pending

The following requested fields require verified Search Console access and could not be read from public HTML:

| Field | Current status |
| --- | --- |
| URL is on Google | Pending GSC access |
| Google-selected canonical | Pending GSC access |
| Last crawl / crawl status | Pending GSC access |
| Mobile usability | Pending GSC access |
| Rich result status as shown in GSC | Pending GSC access |
| Indexing request submitted | No |
| Pages report | Pending GSC access |
| Sitemaps report | Pending GSC access |
| Manual actions | Pending GSC access |
| Security issues | Pending GSC access |
| Core Web Vitals | Pending GSC access |
| HTTPS report | Pending GSC access |
| Links report | Pending GSC access |
| Performance baseline | Pending GSC access |

### Current Performance Baseline

No private Search Console performance data is available in this environment.

| Metric | Current value | Reason |
| --- | --- | --- |
| Total clicks | Not available | Requires verified GSC access |
| Total impressions | Not available | Requires verified GSC access |
| Average CTR | Not available | Requires verified GSC access |
| Average position | Not available | Requires verified GSC access |
| Top queries | Not available | Requires verified GSC access |
| Top pages | Not available | Requires verified GSC access |
| Countries | Not available | Requires verified GSC access |
| Devices | Not available | Requires verified GSC access |

### Next Check Date

Recommended next check: 2026-07-11, or earlier immediately after verified Search Console access is available and the live `/pricelist` canonical/hreflang issue is resolved.

## Safety Rules Applied

- No DNS records were changed.
- No Google Search Console property was created.
- No verification method was changed.
- No verification tokens, account details, private Search Console data, or screenshots were committed.
- No sitemap was submitted in Search Console because verified GSC access was not available.
- No URL Inspection requests were submitted because verified GSC access was not available.
- No non-canonical URL was submitted.

## Property Status

| Property | Status | Notes |
| --- | --- | --- |
| `https://silkbeautysalon.online` URL-prefix property | Not confirmed | No verified Search Console session or connector was available in this environment. |
| `silkbeautysalon.online` domain property | Not confirmed | Preferred property type, but it requires owner-approved DNS TXT verification. No DNS action was taken. |

Recommended setup:

1. Create or confirm a domain property for `silkbeautysalon.online`.
2. Prefer DNS TXT verification through Hostinger DNS, with explicit owner approval.
3. If DNS verification is not possible, use a URL-prefix property and either HTML file or meta-tag verification.
4. If meta-tag verification is used, set the token in Hostinger as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`; do not commit the token.

## Verification Status

| Method | Status | Notes |
| --- | --- | --- |
| DNS TXT | Not performed | Requires owner-approved DNS change. |
| HTML file | Not performed | Could be used for URL-prefix verification if owner approves. |
| HTML meta tag | Supported by code, not active on live | `src/app/layout.tsx` reads `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`; live `/en` did not expose a `google-site-verification` meta tag during the Phase 1 audit. |
| Google Analytics / GTM verification | Not confirmed | GA/GTM account access and live tags were not confirmed. |

## Sitemap Submission Status

| Sitemap | Public status | GSC submission status |
| --- | --- | --- |
| `https://silkbeautysalon.online/sitemap.xml` | HTTP 200, `application/xml`, 516 `<loc>` entries | Not submitted in this session because GSC access was unavailable. |

Google can also discover the sitemap from `robots.txt`, but Search Console submission is still recommended after property verification so processing and crawl errors are visible.

## Robots.txt Status

Checked: `https://silkbeautysalon.online/robots.txt`

Result:

```txt
User-Agent: *
Allow: /

Host: https://silkbeautysalon.online
Sitemap: https://silkbeautysalon.online/sitemap.xml
```

Findings:

- HTTP 200.
- Important pages are not blocked.
- Sitemap reference is present.
- No `Disallow: /` rule was found.

## Priority URL Inspection Status

Important: the table below is a public technical audit, not a Search Console URL Inspection result. GSC-only fields such as "URL is on Google", Google-selected canonical, crawl status, mobile usability, page resources, and rich result eligibility could not be read without verified GSC access.

All priority URLs below returned HTTP 200, were present in the sitemap, and had no live `noindex` signal.

| URL path | HTTP | In sitemap | Indexing allowed by public signals | Live user-declared canonical | Live hreflang | GSC inspected | Indexing requested |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| `/en` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/beauty-salon-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/botox-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/dermal-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/lip-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/skin-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/acne-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/nails-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/lashes-brows-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/en/pricelist` | 200 | Yes | Yes | Missing on live | Missing on live | Not inspected | No |
| `/ka` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/beauty-salon-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/botox-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/dermal-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/lip-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/skin-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/acne-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/nails-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/lashes-brows-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ka/pricelist` | 200 | Yes | Yes | Missing on live | Missing on live | Not inspected | No |
| `/ru` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/beauty-salon-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/botox-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/dermal-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/lip-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/skin-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/acne-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/nails-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/lashes-brows-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ru/pricelist` | 200 | Yes | Yes | Missing on live | Missing on live | Not inspected | No |
| `/tr` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/beauty-salon-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/botox-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/dermal-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/lip-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/skin-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/acne-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/nails-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/lashes-brows-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/tr/pricelist` | 200 | Yes | Yes | Missing on live | Missing on live | Not inspected | No |
| `/ar` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/beauty-salon-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/botox-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/dermal-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/lip-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/skin-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/acne-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/nails-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/lashes-brows-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/ar/pricelist` | 200 | Yes | Yes | Missing on live | Missing on live | Not inspected | No |
| `/he` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/beauty-salon-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/botox-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/dermal-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/lip-fillers-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/skin-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/acne-treatment-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/nails-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/lashes-brows-batumi` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |
| `/he/pricelist` | 200 | Yes | Yes | Missing on live | Missing on live | Not inspected | No |
| `/en/book` | 200 | Yes | Yes | Self | 7 alternates | Not inspected | No |

## Canonical Findings

Current live site:

- 55 priority URLs expose self-canonical URLs and six-locale plus `x-default` hreflang alternates.
- 6 priority URLs, the localized `/pricelist` pages, return HTTP 200 and are in the sitemap but do not expose canonical or hreflang tags on the live site.

Local branch action:

- A narrow SEO fix was prepared in `src/app/[locale]/pricelist/page.tsx` so the pricelist route uses the shared `buildSeoMetadata` helper.
- Regression coverage was added in `src/app/[locale]/pricelist/__tests__/metadata.test.ts`.
- Local production preview confirmed `/en/pricelist` now renders self-canonical metadata and `en`, `ka`, `ru`, `tr`, `ar`, `he`, and `x-default` alternates.
- Do not request indexing for `/en/pricelist`, `/ka/pricelist`, `/ru/pricelist`, `/tr/pricelist`, `/ar/pricelist`, or `/he/pricelist` until the canonical/hreflang fix is reviewed, approved, deployed, and verified live.

GSC-only canonical fields still pending:

- Google-selected canonical: not available without URL Inspection.
- User-declared canonical as seen by Google: not available without URL Inspection.

## Mobile Findings

GSC Mobile Usability data was not available because the property was not accessible.

Public technical status:

- The priority pages returned HTTP 200.
- No public `noindex` signal was detected.
- No public robots block was detected.

Required after GSC access:

1. Run URL Inspection live test for representative EN, KA, RU, TR, AR, HE pages.
2. Record Mobile Usability status for each inspected URL if Search Console reports it.
3. Check the Page Experience / Core Web Vitals reports after enough field data is available.

## Rich Result Findings

GSC rich result eligibility was not available because the property was not accessible.

Known site-side structured data status from prior audits:

- Homepage `BeautySalon` JSON-LD is present and parseable.
- Homepage does not include `aggregateRating` or `review` markup.
- Local SEO routes are designed to expose page-specific SEO/structured-data behavior where implemented.

Required after GSC access:

1. Check Enhancements / Rich results report if available.
2. Use the Rich Results Test or Schema Markup Validator for representative pages.
3. Do not add review/rating markup unless compliant review data and owner approval exist.

## Search Console Reports To Check

These reports were not checked because Search Console access was unavailable:

- Pages report.
- Sitemaps report.
- Removals.
- Manual actions.
- Security issues.
- Core Web Vitals.
- HTTPS report.
- Shopping/Product sections, only if Google shows them and if product listings become relevant.
- Links report for internal and external links.

## Errors And Warnings

| Severity | Finding | Action |
| --- | --- | --- |
| Blocker for account-side work | GSC property/access not confirmed. | Owner must provide or verify Search Console access. |
| Blocker for domain property | DNS TXT verification needs explicit owner approval. | Do not change DNS until approved. |
| Warning | Live `/pricelist` pages lack canonical/hreflang tags. | Local fix prepared; verify after deployment before URL Inspection submission. |
| Warning | No public release marker on live HTML. | Future optional code task can add a non-secret release marker. |
| Expected delay | Indexing is not immediate after sitemap submission or URL Inspection. | Recheck after several days and again after two weeks. |

## Local Verification

Commands/checks run:

- `npx vitest run src/app/[locale]/pricelist/__tests__/metadata.test.ts`
- `npm run typecheck`
- `npm run lint`
- `npm run validate:i18n`
- `npm test`
- `npm run build`
- Local production preview check for `/en/pricelist` canonical/hreflang output.

Results:

- Focused pricelist metadata test passed.
- Typecheck passed.
- Lint passed.
- i18n validation passed with the existing Georgian extra-key note and no missing keys.
- Full test suite passed: 338 passed, 12 skipped.
- Production build passed.
- Local production preview rendered the expected pricelist canonical and alternate link tags.

## Owner Actions Required

1. Confirm whether a Search Console property already exists.
2. If not, approve creating a domain property for `silkbeautysalon.online`.
3. Approve DNS TXT verification in Hostinger, or approve URL-prefix verification method.
4. Submit `https://silkbeautysalon.online/sitemap.xml` after verification.
5. Approve deployment of the pricelist metadata fix before requesting indexing for pricelist URLs.
6. Run URL Inspection for priority URLs and record GSC-only fields.

## Next Check Date

Next check date: 2026-07-11.

Expected indexing cadence:

- Sitemap discovery and processing may take from hours to days.
- URL Inspection requests are not instant indexing guarantees.
- New or recently changed pages may need several days or longer to settle in search results.

## References

- Google Search Console tools: https://search.google.com/search-console/about
- Google Search Console ownership verification: https://support.google.com/webmasters/answer/9008080
- Google sitemap submission guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Sitemaps report help: https://support.google.com/webmasters/answer/7451001
- Google recrawl / URL Inspection guidance: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
