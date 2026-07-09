# GSC Index Coverage Diagnosis

Date: 2026-07-05
Time: 10:15 Asia/Tbilisi
Property: `sc-domain:silkbeautysalon.online`
Mode: Google Search Console read-only diagnosis plus public live technical checks

## Georgian/Turkish Priority Query Copy Update - 2026-07-09

The six matching Georgian/Turkish service URLs were already inspected in Search Console and submitted for indexing before this release. This release only updates rendered website copy so the owner-reported query forms appear naturally without visible keyword-list blocks:

- `ტუჩის ფილერი ბათუმში`
- `ბოტოქსი ბათუმში`
- `კანის მკურნალობა ბათუმში`
- `კანის მოვლა ბათუმში`
- `Batum’da dudak dolgusu`
- `Batum’da botoks`
- `Batum’da cilt tedavisi`
- `Batum’da cilt bakımı`

No additional indexing requests should be made in this release task. Next check date for the six priority URLs remains 2026-07-14.

## Release-Branch Status Update - 2026-07-05

This diagnosis is now paired with a website-side release branch that prepares fixes for the two known indexing blockers:

| Blocker | Release-branch status | Live/Search Console status |
| --- | --- | --- |
| `/{locale}/pricelist` missing canonical/hreflang on live | Fix already exists in `4baa40c fix(seo): add pricelist canonical metadata`; this branch keeps it and adds all-locale regression coverage. | Still requires owner-approved live release and post-release verification before indexing requests. |
| `/{locale}/beauty-salon-batumi` visible `Popular local searches` block | Resolved in this branch by replacing the block with localized customer-facing service navigation. | Still requires owner-approved live release and post-release verification before indexing or GBP landing use. |

No new indexing requests were submitted while preparing this release branch.

Release-branch verification completed:

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm test` passed: 341 passed, 12 skipped.
- `npm run validate:i18n` passed with the existing Georgian extra-key note and no missing keys.
- `npm run build` passed.
- Local production preview confirmed all six `/pricelist` pages render self-canonical metadata, 7 hreflang alternates, no `noindex`, and sitemap inclusion.
- Local production preview confirmed `/en/beauty-salon-batumi`, `/ar/beauty-salon-batumi`, and `/he/beauty-salon-batumi` no longer render the visible `Popular local searches` phrase.
- Browser checks found no console errors, no hydration errors, and no horizontal overflow on sampled desktop and mobile/RTL routes.

## Safety Notes

- No website code was changed.
- No deployment was made.
- No dependencies were changed.
- No Google Business Profile changes were made.
- No verification tokens, account IDs, private screenshots, or credentials are recorded here.
- No indexing requests were submitted in this pass.
- The goal is classification, not panic: non-indexed URLs can be expected when a large multilingual sitemap has recently been discovered.

## Executive Summary

Google Search Console currently reports:

| Metric | Count |
| --- | ---: |
| Indexed pages | 9 |
| Not indexed pages | 487 |
| Sitemap discovered pages | 492 |

The `487` not-indexed URLs are not spread across many technical failures. They are concentrated in one reason:

- `485` URLs are `Discovered - currently not indexed`.
- `1` URL is `Page with redirect`.
- `1` URL is `Alternate page with proper canonical tag`.

No current Page indexing count was shown for 404, soft 404, server error, `noindex`, robots block, crawled-not-indexed, duplicate-without-canonical, or Google-selected-different-canonical reasons.

Conclusion: the index coverage issue is mostly a discovery/crawl queue issue for a large multilingual sitemap, not a sitewide crawl failure. The urgent action is to fix/verify the remaining live metadata blockers and monitor priority URLs, not submit all 487 URLs blindly.

## Not-Indexed Breakdown

| GSC reason | Count | Sample URLs from GSC | Classification | Priority | Recommended action |
| --- | ---: | --- | --- | --- | --- |
| `Discovered - currently not indexed` | 485 | `/ar`, `/ar/about`, `/ar/accessibility`, `/ar/beauty-salon-batumi`, `/ar/before-after`, `/ar/blog`, `/ar/blog/beauty-salon-batumi-guide`, `/ar/book` | Mixed. Expected for many newly discovered multilingual URLs; important pages inside the bucket still need monitoring. | P1 for priority pages; P2/P3 for long-tail and utility pages | Do not request indexing for all. Recheck priority URLs on 2026-07-12, request only canonical-ready high-priority URLs, and let lower-value/duplicate-like discovery queue settle naturally. |
| `Page with redirect` | 1 | `https://www.silkbeautysalon.online/` | Expected/harmless. The canonical host is non-www. | P3 | No fix needed if redirect remains stable. Keep non-www canonical host. |
| `Alternate page with proper canonical tag` | 1 | `https://silkbeautysalon.online/` | Expected/harmless. Root page declares canonical `https://silkbeautysalon.online/en`. | P3 | No fix needed unless owner wants root behavior changed later. |
| `Blocked by robots.txt` | 0 | None shown | Not currently a not-indexed issue. | None | No action. |
| `Crawled - currently not indexed` | 0 | None shown | Not currently an issue. | None | No action. |
| `Not found / 404` | 0 shown | None shown | Not currently an issue in GSC Page indexing. | None | No action. |
| `Excluded by noindex` | 0 shown | None shown | Not currently an issue in GSC Page indexing. | None | No action. |
| `Soft 404` | 0 shown | None shown | Not currently an issue in GSC Page indexing. | None | No action. |
| `Server error` | 0 shown | None shown | Not currently an issue in GSC Page indexing. | None | No action. |
| Duplicate without selected canonical / Google chose different canonical | 0 shown | None shown | Not currently shown as an issue. | None | No action. |

## Indexed But Appearance Warning

This warning is separate from the `487` not-indexed count.

| GSC warning | Count | Sample URLs | Last crawled | Classification | Recommended action |
| --- | ---: | --- | --- | --- | --- |
| `Indexed, though blocked by robots.txt` | 2 | `http://silkbeautysalon.online/`, `http://www.silkbeautysalon.online/` | 2026-05-14 and 2026-05-13 | Likely stale HTTP/non-www history. Public `robots.txt` now allows crawling and these URLs redirect toward HTTPS/canonical host. | Recheck in GSC after Google recrawls. Validate fix only if the warning persists after current redirects/robots have been processed. |

## Public Cross-Checks

Representative live checks were run against the samples from the GSC buckets.

| URL | HTTP | In sitemap | Canonical | Hreflang | Noindex | Result |
| --- | ---: | --- | --- | ---: | --- | --- |
| `https://silkbeautysalon.online/ar` | 200 | Yes | Self | 7 | No | Crawlable priority locale root; GSC says discovered/not indexed. |
| `https://silkbeautysalon.online/ar/about` | 200 | Yes | Self | 7 | No | Crawlable localized content page. |
| `https://silkbeautysalon.online/ar/accessibility` | 200 | Yes | Missing | 0 | No | Crawlable utility page but missing canonical/hreflang; low-priority cleanup. |
| `https://silkbeautysalon.online/ar/beauty-salon-batumi` | 200 | Yes | Self | 7 | No | Crawlable, but `beauty-salon-batumi` group remains held for visible content review. |
| `https://silkbeautysalon.online/ar/before-after` | 200 | Yes | Self | 7 | No | Crawlable localized content page. |
| `https://silkbeautysalon.online/ar/blog` | 200 | Yes | Self | 7 | No | Crawlable localized blog index. |
| `https://silkbeautysalon.online/ar/blog/beauty-salon-batumi-guide` | 200 | Yes | Self | 7 | No | Crawlable localized blog article. |
| `https://silkbeautysalon.online/ar/book` | 200 | Yes | Self | 7 | No | Crawlable localized booking route. |
| `https://silkbeautysalon.online/` | 200 | Yes | `https://silkbeautysalon.online/en` | 7 | No | Expected alternate canonical root. |
| `https://www.silkbeautysalon.online/` | 308 | No | N/A | N/A | N/A | Expected redirect to non-www. |
| `http://silkbeautysalon.online/` | 301 | No | N/A | N/A | N/A | Expected redirect to HTTPS. |
| `http://www.silkbeautysalon.online/` | 301 | No | N/A | N/A | N/A | Expected redirect chain to HTTPS/non-www. |

## Sitemap Structure

Live sitemap: `https://silkbeautysalon.online/sitemap.xml`

| Check | Result |
| --- | --- |
| `<loc>` count | 516 |
| Locale distribution | 86 URLs per locale across `en`, `ka`, `ru`, `tr`, `ar`, `he` |
| Main large groups | 228 treatment detail URLs, 60 condition URLs, 42 treatment category URLs, 18 blog article URLs |
| Priority local SEO groups present | Yes |
| Sitemap problem found | No broad omission found |

The sitemap size explains the large `Discovered - currently not indexed` bucket. Google has discovered many localized treatment, condition, category, blog, and utility URLs before deciding which to crawl and index.

## Priority URL Indexing Status

This table combines current GSC findings with live public technical checks. `Last crawl`, Google-selected canonical, mobile usability, and rich result status were not expanded for every priority URL in this pass because direct URL Inspection reloads were slow/unstable in the browser session. Where prior GSC URL Inspection gave a status, it is recorded below.

| URL group | GSC status | Live technical status | Action |
| --- | --- | --- | --- |
| `/en` | Indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | No request needed. |
| `/en/botox-batumi` | Indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | No request needed. |
| `/en/dermal-fillers-batumi` | Indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | No request needed. |
| `/en/skin-treatment-batumi` | Indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | No request needed. |
| `/en/book` | Indexed | 200, in sitemap, self-canonical, 7 hreflang, no noindex | No request needed. |
| `/en/lip-fillers-batumi` | Not indexed; previously unknown to Google; indexing requested on 2026-07-05 | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Recheck after 2026-07-12; do not submit again yet. |
| `/en/acne-treatment-batumi` | Not indexed; previously unknown to Google; indexing requested on 2026-07-05 | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Recheck after 2026-07-12; do not submit again yet. |
| `/en/nails-batumi` | Not indexed; previously unknown to Google; indexing requested on 2026-07-05 | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Recheck after 2026-07-12; do not submit again yet. |
| `/en/lashes-brows-batumi` | Not indexed; previously unknown to Google; indexing requested on 2026-07-05 | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Recheck after 2026-07-12; do not submit again yet. |
| `/ka`, `/ru`, `/tr`, `/ar`, `/he` | Not indexed; discovered/not indexed; indexing requested on 2026-07-05 | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Recheck after 2026-07-12; do not submit again yet. |
| `/{locale}/botox-batumi`, `/{locale}/dermal-fillers-batumi`, `/{locale}/skin-treatment-batumi` outside English | Not indexed or discovered/not indexed where inspected | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Wait for locale roots and English new service pages to settle; inspect selected high-priority pages next. |
| `/{locale}/lip-fillers-batumi`, `/{locale}/acne-treatment-batumi`, `/{locale}/nails-batumi`, `/{locale}/lashes-brows-batumi` outside English | Mostly unknown/not indexed where inspected | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Do not mass-submit. Inspect and request selected top-language/service combinations only after first follow-up. |
| `/{locale}/beauty-salon-batumi` | Held; not submitted | 200, in sitemap, self-canonical, 7 hreflang, no noindex | Source cleanup is prepared in this branch; hold indexing requests until released and verified live. |
| `/{locale}/pricelist` | Held; not submitted | 200, in sitemap, no noindex, but canonical and hreflang missing on live | Source metadata fix is prepared; verify live canonical/hreflang before any indexing request. |

## Canonical And Hreflang Findings

| Finding | Impact | Action |
| --- | --- | --- |
| Root `https://silkbeautysalon.online/` canonicalizes to `/en`. | Expected. Explains the single alternate-canonical GSC row. | No action. |
| `https://www.silkbeautysalon.online/` redirects to non-www. | Expected. Explains the single redirect GSC row. | No action if stable. |
| Priority service/local SEO pages generally expose self-canonical URLs and 7 hreflang alternates. | Good. Supports future indexing requests. | Keep monitoring. |
| Localized `/pricelist` pages return 200 and are in sitemap, but live canonical/hreflang are still missing. | Real blocker before manual indexing for price pages. | Release-branch fix is prepared; owner-approved live release and live verification are still required. |
| `/ar/accessibility` sample lacks canonical/hreflang. | Low-priority utility-page metadata gap. | Consider a later utility-page metadata cleanup if this appears across utility routes. Not urgent for local SEO. |

## URLs Recommended For Indexing Request

No new indexing requests were performed in this pass.

Recommended later, after the 2026-07-12 follow-up:

1. If not indexed yet, re-evaluate the 9 already requested URLs before requesting again:
   - `/en/lip-fillers-batumi`
   - `/en/acne-treatment-batumi`
   - `/en/nails-batumi`
   - `/en/lashes-brows-batumi`
   - `/ka`
   - `/ru`
   - `/tr`
   - `/ar`
   - `/he`
2. After those settle, inspect selected non-English high-intent service pages, starting with:
   - `/ka/botox-batumi`
   - `/ru/botox-batumi`
   - `/ru/lip-fillers-batumi`
   - `/tr/botox-batumi`
   - `/ar/botox-batumi`
   - `/he/botox-batumi`
3. Do not submit all service pages at once. Use Search Console quota carefully and prioritize pages with clear demand and clean metadata.

## URLs Intentionally Excluded Or Held

| URL group | Reason held |
| --- | --- |
| All `/{locale}/pricelist` pages | Missing canonical/hreflang on live; release-branch fix must be verified live first. |
| All `/{locale}/beauty-salon-batumi` pages | Source cleanup is prepared, but pages should stay held until the release is live and verified. |
| Bulk treatment/category/condition/blog pages | Large sitemap already discovered them; mass manual indexing is not appropriate. |
| Utility/legal pages such as accessibility/privacy/terms/download/careers | Lower SEO priority; inspect metadata later, but do not spend manual indexing quota now. |
| HTTP and `www` variants | Redirect/canonical variants, not canonical URLs. |

## Urgent Fixes

1. Owner-approved release and live verification of `/pricelist` canonical/hreflang metadata before requesting indexing for price pages.
2. Owner-approved release and live verification of the `/{locale}/beauty-salon-batumi` service-navigation cleanup before using those pages as priority landing pages.
3. Recheck the 9 already submitted indexing requests on 2026-07-12.
4. Inspect the two stale HTTP/non-www robots warnings again after Google recrawls; do not treat them as a current live robots failure.
5. Consider a separate low-priority utility metadata audit for routes such as `/ar/accessibility`.

## Next Check Date

Next GSC follow-up: 2026-07-12.

At that check:

1. Reopen Page indexing and compare indexed/not-indexed counts.
2. Check whether the 9 submitted URLs moved to indexed, crawled, or still discovered.
3. Inspect the two `Indexed, though blocked by robots.txt` examples.
4. Only request indexing for additional canonical-ready high-priority URLs.
5. Do not request indexing for `/{locale}/pricelist` or `/{locale}/beauty-salon-batumi` until their release-branch fixes are live and verified.
