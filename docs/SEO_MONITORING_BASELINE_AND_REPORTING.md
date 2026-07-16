# SEO Monitoring Baseline And Reporting

Date: 2026-07-05
Phase: 8 - Reporting and operating rhythm
Branch: `codex/visibility-readiness-audit`
Mode: public technical baseline plus private-data access plan; no account settings changed

## Trust Baseline Update - 2026-07-16

- Branch-only cleanup removes unverified testimonials and stock-photo before/after cases from publishable data.
- The localized `/before-after` route is marked `noindex` and removed from the sitemap until verified same-client images, accurate treatment details, and publication consent exist.
- Dormant review-rating and medical-study schema helpers are removed; live BeautySalon JSON-LD remains the only approved local-business schema path and must continue to exclude reviews and `aggregateRating`.
- Staff, credential, award, association, product-brand, licensing, language, and 24/7-support claims remain an owner-evidence backlog. They are not new SEO assets until verified.
- Search Console and GBP account status was not refreshed in this pass because browser automation was unavailable. Existing dates and counts below remain historical snapshots, not a new account baseline.
- Next monitoring pass: recheck GSC indexing, pending GBP services, postal-code display, real review count, and photo count as soon as account-side browser access is restored.

## Public Visibility Survey - 2026-07-16

The dated public web-index survey is recorded in `docs/SEO_VISIBILITY_SURVEY_2026-07-16.md`.

- Branded discovery and `dermal fillers Batumi` are the strongest observed signals.
- Close Botox variants produced first-party results, but the exact `Botox Batumi` and `Botox price Batumi` samples did not return Silk in the first 20+ results reviewed.
- Lip fillers, skin treatments, microneedling, generic salon, prices, and English-speaking intent have partial visibility.
- Acne treatment, chemical peel, nails, lashes, and most sampled non-English head terms remain weak or absent.
- Georgian samples surfaced `silkbeauty.ge` rather than the canonical `.online` domain; ownership and intended use remain an owner-confirmation item.
- Exact Google rank, local-pack placement, GBP appearance, and AI Overview visibility were not claimed because the controlled in-app Google/Maps browser session was unavailable.
- Short recheck: 2026-07-23. Monthly same-query comparison: 2026-08-16.

## Index Quality Candidate - 2026-07-16

The implementation and evidence gates are documented in `docs/SEO_TRUST_AND_INDEX_QUALITY_AUDIT.md`. This is a local branch candidate and is not live.

- Current public sitemap observed on 2026-07-16: `528` URLs.
- Local candidate sitemap: `184` URLs.
- Priority localized service hubs, locale roots, pricelist, booking, rentals, and verified treatment details remain indexable.
- Low-confidence catalog, condition, category, duplicated editorial, and empty proof routes remain accessible but are `noindex,follow` and absent from the sitemap.
- Local-service pages now link directly to pricing, booking, related service hubs, and the approved separate WhatsApp number.
- Actively rendered pages and the client message payload no longer expose checked unverified staff, award, press, discount, patient-count, or product/device claims.
- English homepage HTML decreased from approximately `241 KB` to `139,156` bytes in the local production preview after pruning unused client message data.
- No Search Console, GBP, Bing, DNS, Hostinger, analytics, ad, or production action was taken.

Release gates remain owner review, verified treatment inventory, native review for the five non-English copy sets, controlled live QA, then selective recrawl of canonical priority URLs. Do not bulk-submit excluded URLs.

## Safety Rules Applied

- No Google, Bing, Hostinger, analytics, ads, social, or booking settings were changed.
- No private client data, credentials, tokens, or account screenshots are stored here.
- Metrics are not invented where account access is missing.
- Indexed pages, rankings, traffic, calls, bookings, WhatsApp clicks, and revenue are separate metrics and must not be blended into one "SEO success" number.
- Public search snippets are treated as approximate and can lag behind live website changes.

## Week 0 Baseline Summary

| Area | Current baseline | Confidence |
| --- | --- | --- |
| Production website | `https://silkbeautysalon.online` is live. | High |
| Locale roots | `/en`, `/ka`, `/ru`, `/tr`, `/ar`, `/he` returned HTTP 200 during this baseline check. | High |
| Sitemap | `https://silkbeautysalon.online/sitemap.xml` returned HTTP 200 and contains `516` `<loc>` entries. | High |
| Robots | `https://silkbeautysalon.online/robots.txt` returned HTTP 200, allows all crawlers, and references the sitemap. | High |
| Priority URLs in sitemap | Locale roots, `/en/book`, `/en/pricelist`, `/en/botox-batumi`, `/en/dermal-fillers-batumi`, `/en/lip-fillers-batumi`, `/en/acne-treatment-batumi`, `/en/nails-batumi`, `/en/lashes-brows-batumi` are present. | High |
| Public search discoverability sample | Public search and account-side checks surfaced some first-party pages, but non-brand multilingual visibility is still weak. | Medium; search samples vary. |
| Google Search Console | Domain property `sc-domain:silkbeautysalon.online` is verified. Sitemap is submitted and successful. Baseline: 20 clicks, 293 impressions, 6.8% CTR, average position 5, 9 indexed pages, 487 not indexed. | High for recorded GSC snapshot |
| Google Business Profile Insights | Not available / GBP profile not confirmed. | High access gap |
| Google Analytics / GTM | Account access not available; live tag not confirmed in Phase 1. | High access gap |
| Bing Webmaster Tools | Not available / not confirmed. | High access gap |
| Reviews | Official Google review link confirmed. Google review count is `0`; no Google average rating visible yet. Salonly/Facebook review signals are separate and are not the GBP baseline. | High for visible Google review state |
| Competitor snapshot | LAKmousse, Academy of Cosmetology, Heaven Nails, Sakura, Arna Sacman/Inna Kakhidze, 100doc, Madloba, Locate, Yandex Maps, Tripadvisor, Salonly. | Medium public-search baseline |

## Phase 8 Operating Rhythm Update - 2026-07-05 10:00 Asia/Tbilisi

This update consolidates the current Google/Maps/Bing/AI execution logs into one 90-day operating system. It is a documentation-only update. No website code, dependencies, deployments, Google Business Profile edits, Bing submissions, citation edits, review requests, or public profile changes were made.

### Current Reporting Baseline By System

| System | Current baseline | What is missing | Next action |
| --- | --- | --- | --- |
| Live website | Priority routes are crawlable. Sitemap and robots are public. Homepage `BeautySalon` JSON-LD parses and has no review/rating markup. Postal-code source alignment uses owner-confirmed `6010` in website source, schema, email templates, tests, and docs. `/pricelist` canonical/hreflang, `/{locale}/beauty-salon-batumi` cleanup, visible keyword-list removal, and KA/TR query-language alignment are resolved live. | WhatsApp CTA is missing on sampled local SEO service pages; track this as a conversion backlog item, not an SEO indexing blocker. | Continue scheduled GSC follow-ups and non-code local SEO account work. |
| Google Search Console | Domain property is verified. Sitemap was already submitted and reports `Success`. Baseline Performance: 20 clicks, 293 impressions, 6.8% CTR, average position 5. Pages: 9 indexed, 487 not indexed. URL Inspection/indexing requests were submitted for 9 ready URLs. Follow-up diagnosis found 485 discovered/not-indexed, 1 redirect, and 1 alternate-canonical URL. | Top pages, countries, and devices were not reliably extracted due Search Console UI tab issues. Priority discovered URLs need follow-up after Google processes the first 9 indexing requests. | Recheck indexing requests on 2026-07-12, inspect the two stale HTTP/non-www robots warnings, and pull top pages/countries/devices in the next account-side pass. |
| Website-side SEO blockers | `/pricelist` metadata, `/{locale}/beauty-salon-batumi` visible local-search cleanup, visible keyword-list removal, postal-code source/schema alignment, and KA/TR rendered service-copy alignment are live. | Google still needs time to crawl/index the updated URLs. | Do not bulk-submit; use the scheduled GSC follow-ups and selective URL Inspection only. |
| Google Business Profile | Owner-approved service-only edits were made on 2026-07-09. Botox / anti-wrinkle, lip fillers, skin treatments, skin consultation, and acne service descriptions were saved with no prices or durations; Google marked the edits pending review. Owner-confirmed postal code is `6010`; public Google Maps/Search may still show outdated `6000` until Google processes the display update. Official Google review link is confirmed and Google review baseline is `0` reviews / no visible average rating. | Public service visibility still needs recheck after Google review. `Dermal fillers` description is blocked by a pre-existing duplicate `Dermal Fillers` service unless owner approves duplicate cleanup. Hours, photos, Q&A, unanswered reviews, photo assets, and profile performance still need manual dashboard confirmation. | Recheck GBP services on 2026-07-10; do not change other profile fields without separate approval. |
| Bing Webmaster / Bing Places | No verified Bing access in this workspace. Public sitemap/robots are healthy. IndexNow is not implemented. | Bing verification, sitemap submission, URL submissions, crawl/indexing reports, SEO reports, backlinks, keyword performance, Places listing. | Verify Bing after GSC/GBP source of truth is stable; submit sitemap; consider IndexNow later as a separate approved task. |
| AI query baseline | Public search samples show weak non-brand first-party visibility. Google AI Overview / AI Mode and account-side local pack visibility were not available. | AI answer mentions, AI citations, stable Google local pack position, personalized/location-specific results. | Repeat controlled manual query checks monthly and after more priority URLs are indexed. |
| Citations/NAP | Website NAP is clear. `silkbeauty.ge`, Salonly, Facebook, BeautyBook, and map-platform risks are documented. Old placeholder phone is not visible in live HTML but still appears in stale snippets. | Confirmed GBP/Maps profile, Bing Places, Apple Maps, Yandex Maps, 2GIS, Salonly admin, Facebook canonical page, BeautyBook admin data. | Resolve `.online` versus `.ge` source-of-truth first, then prioritize GBP/Maps, Salonly, Facebook, BeautyBook, Bing Places, Apple Maps, and Yandex Maps after owner approval. |
| Reviews | Ethical multilingual request/reply SOP exists. No fake reviews or incentives were created. Official Google review link is confirmed. Google review baseline is `0` reviews / no visible average rating. | Recent review themes and unanswered reviews are not applicable until real Google reviews arrive. Staff launch approval and real-photo approval are still pending. | Owner approves SOP, photo assets, QR/link usage, staff roles, and starts requests only for real completed appointments. |

### Keyword Group Framework

Use `docs/SEO_KEYWORD_MAP.md` as the source of truth. Monthly reporting should group Search Console queries and manual checks by these intent groups instead of reading every query one by one.

| Intent group | Example queries | Primary monitoring target |
| --- | --- | --- |
| Beauty salon / broad local | beauty salon Batumi; best beauty salon Batumi; local-language equivalents | `/{locale}/beauty-salon-batumi` and locale root |
| Aesthetic salon / clinic | aesthetic salon Batumi; aesthetic clinic Batumi | `/{locale}/beauty-salon-batumi` with careful wording and no unverified medical claims |
| Botox / anti-wrinkle | Botox Batumi; Botox injections Batumi; anti-wrinkle injections Batumi | `/{locale}/botox-batumi` |
| Masseter Botox | masseter Botox Batumi | Treatment detail page or Botox page grouping |
| Botox price | Botox price Batumi; local-language price equivalents | `/{locale}/pricelist` plus Botox page |
| Dermal fillers | dermal fillers Batumi; fillers Batumi | `/{locale}/dermal-fillers-batumi` |
| Lip fillers | lip fillers Batumi; lip augmentation Batumi | `/{locale}/lip-fillers-batumi` |
| Skin treatments / skin care | skin treatments Batumi; skin care Batumi | `/{locale}/skin-treatment-batumi` |
| Acne / acne scars | acne treatment Batumi; acne scar treatment Batumi | `/{locale}/acne-treatment-batumi` |
| Microneedling | microneedling Batumi | Existing skin-treatment/treatment page grouping |
| Chemical peel | chemical peel Batumi | Existing skin-treatment/treatment page grouping |
| Nails / nail salon | nails Batumi; nail salon Batumi | `/{locale}/nails-batumi` |
| Manicure / pedicure | manicure Batumi; pedicure Batumi | `/{locale}/nails-batumi` and pricelist |
| Lashes | lashes Batumi; lash extensions Batumi; lash lift Batumi | `/{locale}/lashes-brows-batumi` |
| Brows | brow lamination Batumi; brows Batumi | `/{locale}/lashes-brows-batumi` |
| Prices | beauty salon prices Batumi; fillers prices Batumi; skin treatment prices Batumi | `/{locale}/pricelist` after canonical/hreflang is live |
| English/Russian speaking | English speaking beauty salon Batumi; Russian speaking beauty salon Batumi | `/{locale}/beauty-salon-batumi` and international-client content after spoken-language approval |
| Tourist intent | beauty salon for tourists Batumi | `/{locale}/beauty-salon-batumi`, `/{locale}/international-clients`, booking route |

### Monthly Tracking Process

1. Pull Search Console Performance data for the last 28 days and compare against the previous 28 days.
2. Pull Search Console Pages, Sitemaps, HTTPS, Manual actions, Security issues, Core Web Vitals, and Links summaries.
3. Pull Bing Webmaster Tools sitemap, indexing, crawl, SEO, backlink, and search-performance summaries if access exists.
4. Record Google Business Profile performance: views, calls, website clicks, directions, booking clicks if available, review count/rating, photo views, and unanswered reviews.
5. Record conversion metrics from privacy-safe sources: booking page visits, booking submissions, WhatsApp clicks, phone clicks, direction clicks, contact forms, and newsletter signups.
6. Re-run the manual multilingual query sample from `docs/SEO_KEYWORD_MAP.md`, using the same location/device context where possible.
7. Update competitor notes for local pack, organic, directories, review count, photo freshness, prices, multilingual content, and strong service pages.
8. Create a short decision log: what improved, what declined, what needs owner approval, what should be changed on the website, and what should wait.

## Current Indexed Pages

Google Search Console is now the authoritative indexed-page source for Google. Bing indexed-page counts still require Bing Webmaster Tools.

Current Google Search Console snapshot:

- Indexed pages: 9
- Not indexed pages: 487
- Sitemap discovered pages: 492
- Not-indexed breakdown: 485 `Discovered - currently not indexed`, 1 `Page with redirect`, 1 `Alternate page with proper canonical tag`
- Manual actions: no issues
- Security issues: no issues
- Core Web Vitals: not enough usage data for mobile or desktop
- HTTPS: 2 HTTPS URLs, 0 non-HTTPS URLs
- Breadcrumbs: 1 valid, 0 invalid

URL Inspection confirmed these English URLs as indexed: `/en`, `/en/botox-batumi`, `/en/dermal-fillers-batumi`, `/en/skin-treatment-batumi`, and `/en/book`. Indexing requests were submitted for the four new English SEO pages and five locale roots listed in `docs/GOOGLE_SEARCH_CONSOLE_INDEXING_LOG.md`. The detailed coverage diagnosis is in `docs/GSC_INDEX_COVERAGE_DIAGNOSIS.md`.

## Sitemap Status

Checked on 2026-07-04:

| Check | Result |
| --- | --- |
| `/sitemap.xml` HTTP status | 200 |
| Sitemap URL count | 516 `<loc>` entries |
| `/robots.txt` HTTP status | 200 |
| Robots crawl rule | `User-Agent: *` and `Allow: /` |
| Sitemap referenced in robots | Yes |
| Locale roots in sitemap | Yes |
| Priority local SEO pages in sitemap | Yes |

Priority route inclusion:

| URL path | In sitemap |
| --- | --- |
| `/en` | Yes |
| `/ka` | Yes |
| `/ru` | Yes |
| `/tr` | Yes |
| `/ar` | Yes |
| `/he` | Yes |
| `/en/book` | Yes |
| `/en/pricelist` | Yes |
| `/en/botox-batumi` | Yes |
| `/en/dermal-fillers-batumi` | Yes |
| `/en/lip-fillers-batumi` | Yes |
| `/en/acne-treatment-batumi` | Yes |
| `/en/nails-batumi` | Yes |
| `/en/lashes-brows-batumi` | Yes |

## Private Metrics Baseline

Do not estimate missing private metrics from public search snippets. Use account exports, logs, or privacy-safe aggregated reporting only.

| Metric | Current value | Required source |
| --- | --- | --- |
| Search impressions | 293 | Google Search Console Performance, 2026-06-12 to 2026-07-03 |
| Search clicks | 20 | Google Search Console Performance, 2026-06-12 to 2026-07-03 |
| CTR | 6.8% | Google Search Console Performance, 2026-06-12 to 2026-07-03 |
| Average position | 5 | Google Search Console Performance, 2026-06-12 to 2026-07-03 |
| Top queries | `silk beauty salon`, `skin treatment near me`, `silkbeauty`, `silk batumi`, `silk nails cootamundra` | Google Search Console Performance query tab |
| Top pages | Not reliably extracted in this pass | Google Search Console Performance pages tab |
| Indexed pages | Google: 9 indexed / 487 not indexed; Bing: not available | GSC Pages report and Bing Webmaster Tools |
| GBP profile views | Not available | Google Business Profile Performance |
| GBP calls | Not available | Google Business Profile Performance / call logs |
| GBP website clicks | Not available | Google Business Profile Performance |
| GBP directions clicks | Not available | Google Business Profile Performance |
| Booking clicks | Not available | GA4/GTM or booking logs |
| WhatsApp clicks | Not available | GA4/GTM event tracking after consent setup |
| Phone clicks | Not available | GA4/GTM event tracking after consent setup |
| Direction clicks | Not available | GBP Performance or website click tracking |
| Contact form submissions | Not available | App/backend logs and privacy-safe reporting |
| Newsletter signups | Not available | App/backend logs and privacy-safe reporting |
| Revenue | Not available | Owner private business records; do not store client data here |

## KPI Groups

### Search Visibility

Track:

- Impressions
- Clicks
- CTR
- Average position
- Indexed pages
- Priority page indexing status
- Query-language split where available
- Search appearance / rich result eligibility where available

Recommended segmentation:

- Brand queries: `Silk Beauty Salon`, `Silk Beauty Batumi`
- Local broad queries: `beauty salon Batumi`, `aesthetic salon Batumi`
- Injectables: `Botox Batumi`, `anti-wrinkle injections Batumi`, `dermal fillers Batumi`, `lip fillers Batumi`
- Skin: `skin treatment Batumi`, `acne treatment Batumi`, `microneedling Batumi`, `chemical peel Batumi`
- Beauty services: `nails Batumi`, `manicure Batumi`, `lashes Batumi`, `brows Batumi`
- Tourist/language: `English speaking beauty salon Batumi`, Russian/Turkish/Arabic/Hebrew equivalents

### Local Visibility

Track:

- Google Maps/profile views
- Calls
- Website clicks
- Direction requests
- Bookings from profile where available
- Review count
- Review rating
- Photo views if available
- Q&A count and unanswered questions
- Competitor review/photo gap

### Conversion

Track:

- Booking page visits
- Booking starts
- Booking submissions
- WhatsApp clicks
- Phone clicks
- Contact form submissions
- Directions clicks
- Newsletter signups
- Confirmed appointments
- Revenue only in private owner reporting, not public docs

### AI Search

Track manually:

- Appearance in AI Overviews / AI Mode where available
- Citations or mentions in AI answer tools where testable
- Whether answer summaries mention location, services, prices, booking, and languages correctly
- Competitor visibility in AI answers
- Content gaps that prevent Silk from being cited confidently

## KPI Source And Cadence

| KPI | Primary source | Cadence | Current status |
| --- | --- | --- | --- |
| Search impressions | Google Search Console Performance | Weekly for first month, monthly after | GSC baseline recorded: 293 impressions |
| Search clicks | Google Search Console Performance | Weekly for first month, monthly after | GSC baseline recorded: 20 clicks |
| CTR | Google Search Console Performance | Weekly for first month, monthly after | GSC baseline recorded: 6.8% |
| Average position | Google Search Console Performance | Weekly for first month, monthly after | GSC baseline recorded: 5 |
| Indexed pages | GSC Pages report and Bing Webmaster Tools | Weekly until stable, monthly after | Google baseline recorded; Bing pending |
| Top queries | GSC and Bing search performance | Monthly | GSC query sample recorded; Bing pending |
| Top pages | GSC and Bing search performance | Monthly | GSC pages tab needs next-pass extraction; Bing pending |
| GBP views | Google Business Profile Performance | Monthly | Pending GBP access |
| GBP calls | Google Business Profile Performance / call logs | Monthly | Pending GBP access |
| GBP website clicks | Google Business Profile Performance | Monthly | Pending GBP access |
| GBP direction requests | Google Business Profile Performance | Monthly | Pending GBP access |
| Booking clicks | GBP appointment link, GA4/GTM if configured, booking logs | Monthly | Pending access/tracking confirmation |
| Reviews count | GBP, Salonly, Facebook, other approved platforms | Weekly for first month, monthly after | Google baseline: `0`; external citation review baselines need owner/admin checks |
| Average rating | GBP and approved platforms | Weekly for first month, monthly after | Google baseline: no visible average rating yet |
| Photo views | GBP Performance if available | Monthly | Pending GBP access |
| Booking page visits | GA4/GTM or server logs with privacy-safe aggregation | Monthly | Pending analytics/reporting access |
| WhatsApp clicks | GA4/GTM consent-aware event if configured, or platform stats | Monthly | Pending tracking confirmation |
| Phone clicks | GA4/GTM consent-aware event if configured | Monthly | Pending tracking confirmation |
| Direction clicks | GBP Performance, website click tracking if configured | Monthly | Pending access/tracking confirmation |
| Form submissions | App/backend logs with no private client data in docs | Monthly | Pending reporting access |
| AI answer mentions | Manual query checks | Monthly | Baseline public samples documented; AI Overview/AI Mode unavailable |
| AI citations if visible | Manual AI Overview/AI Mode or AI answer tools | Monthly | Not available in this workspace |
| Competitor mentions | Manual query and local pack checks | Monthly | Baseline competitor set documented |
| Query-level notes | Manual tracker plus GSC/Bing query data | Monthly | Keyword map ready; GSC query sample recorded |

## Reporting Cadence

| Time | Report focus | Actions |
| --- | --- | --- |
| Week 0 | Baseline | Record sitemap, robots, public search samples, access gaps, competitor snapshot, and current technical readiness. |
| Week 1 | Indexing check | Check GSC/Bing verification, sitemap processing, URL inspection, manual indexing requests for priority canonical URLs. |
| Week 2 | Early Search Console data | Review first impressions/clicks/query data, indexing errors, mobile usability, canonical selection, and rich result warnings. |
| Week 4 | Ranking/query review | Compare priority query visibility, top pages, top queries, CTR opportunities, GBP actions, and local pack visibility. |
| Week 8 | Content adjustments | Review pages with impressions but low CTR/rank; improve titles/meta/intro/FAQ only where people-first and non-spammy. |
| Monthly | Operating report | Track KPIs, review/citation progress, GBP actions, competitor changes, and next content/citation priorities. |

## Monthly Report Template

Copy this table each month.

| Metric | Current month | Previous month | Change | Interpretation | Action |
| --- | ---: | ---: | ---: | --- | --- |
| GSC impressions |  |  |  |  |  |
| GSC clicks |  |  |  |  |  |
| CTR |  |  |  |  |  |
| Average position |  |  |  |  |  |
| Indexed pages |  |  |  |  |  |
| GBP views |  |  |  |  |  |
| GBP calls |  |  |  |  |  |
| GBP website clicks |  |  |  |  |  |
| GBP directions |  |  |  |  |  |
| Booking page visits |  |  |  |  |  |
| Booking submissions |  |  |  |  |  |
| WhatsApp clicks |  |  |  |  |  |
| Contact submissions |  |  |  |  |  |
| Reviews count |  |  |  |  |  |
| Reviews rating |  |  |  |  |  |
| AI answer mentions |  |  |  |  |  |

## Georgian/Turkish Query Copy Release - 2026-07-09

The six Georgian/Turkish priority service URLs were already inspected in Search Console and submitted for indexing. This release is limited to rendered page-copy alignment for the owner-reported query forms:

- Georgian: `ტუჩის ფილერი ბათუმში`, `ბოტოქსი ბათუმში`, `კანის მკურნალობა ბათუმში`, `კანის მოვლა ბათუმში`
- Turkish: `Batum’da dudak dolgusu`, `Batum’da botoks`, `Batum’da cilt tedavisi`, `Batum’da cilt bakımı`

Release scope:

- Keep the phrases in concise, natural page copy.
- Avoid visible keyword-list blocks.
- Avoid excessive exact-match repetition.
- Keep injectable/aesthetic wording consultation-led and non-promissory.
- Do not request new indexing in this release task.

Native Georgian/Turkish review is still recommended before reusing the same wording in Google Business Profile services, ads, printed material, or other off-site public profiles. Next GSC follow-up date for these six URLs remains 2026-07-14.

## Priority Query Tracking Template

Use a controlled location/device context where possible. Do not overinterpret one-off rankings.

The complete owner-provided multilingual keyword set is mapped in `docs/SEO_KEYWORD_MAP.md`. The shorter table below is the dashboard sample; use the full keyword map for monthly Search Console grouping and manual rank checks.

| Query | Language | Target page | Organic position | Local pack present | Silk in local pack | Competitors above Silk | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| beauty salon Batumi | English | `/en/beauty-salon-batumi` |  |  |  |  |  |
| Botox Batumi | English | `/en/botox-batumi` |  |  |  |  |  |
| where to get Botox in Batumi | English | `/en/botox-batumi` |  |  |  |  |  |
| lip fillers Batumi | English | `/en/lip-fillers-batumi` |  |  |  |  |  |
| acne treatment Batumi | English | `/en/acne-treatment-batumi` |  |  |  |  |  |
| nails Batumi | English | `/en/nails-batumi` |  |  |  |  |  |
| lashes Batumi | English | `/en/lashes-brows-batumi` |  |  |  |  |  |
| ბოტოქსი ბათუმი | Georgian | `/ka/botox-batumi` |  |  |  |  |  |
| ტუჩის ფილერი ბათუმი | Georgian | `/ka/lip-fillers-batumi` |  |  |  |  |  |
| ботокс Батуми | Russian | `/ru/botox-batumi` |  |  |  |  |  |
| филлеры губ Батуми | Russian | `/ru/lip-fillers-batumi` |  |  |  |  |  |
| Batum botoks | Turkish | `/tr/botox-batumi` |  |  |  |  |  |
| بوتوكس باتومي | Arabic | `/ar/botox-batumi` |  |  |  |  |  |
| בוטוקס בטומי | Hebrew | `/he/botox-batumi` |  |  |  |  |  |

## Competitor Snapshot

Current public-search competitor set from Phase 7:

- LAKmousse Beauty Bar
- Academy of Cosmetology / Olga Mikitchuk
- Heaven Nails Studio
- Sakura Beauty
- Arna Sacman / Inna Kakhidze cosmetology
- Aesthetic MED Clinic / Botox Batumi social profiles
- LuxElen / Aloe Vera / Rogo / other cosmetology clinics
- Mriya / Diamond / Nail Sector / Nail Lounge / manicure studios
- 100doc.ge
- Madloba.info
- Locate.ge
- Yandex Maps
- Tripadvisor
- Salonly
- Instagram, Facebook, TikTok, and travel/expat groups

Competitor monitoring fields:

- Review count/rating by platform.
- Photo count and freshness.
- Whether they have service pages.
- Whether they publish prices.
- Whether they support multiple languages.
- Whether GBP/category/service data looks complete.
- Whether directories outrank first-party websites.

## Critical Issues

1. Google Business Profile service edits are pending Google review; public service visibility needs recheck on 2026-07-10.
2. `Dermal fillers` GBP description is blocked by a pre-existing duplicate `Dermal Fillers` service; duplicate cleanup needs separate owner approval before deletion/merge.
3. GBP photos, Q&A, and review workflow launch are still pending real owner/customer input; Google review baseline is now recorded as `0` reviews / no visible average rating.
4. `silkbeauty.ge` is still a public source-of-truth risk and must be classified as official, legacy, or supporting before broad citation edits.
5. Google Search Console shows 485 `Discovered - currently not indexed` URLs. This is mostly a crawl/discovery queue for the large multilingual sitemap, but priority pages need follow-up.
6. Bing Webmaster Tools and Bing Places access are not confirmed.
7. Public search snippets may still show stale placeholder phone `+995 599 123 456` for at least one indexed result, even though live page/footer data uses the correct phone.
8. Booking, WhatsApp, calls, and form conversion tracking are not confirmed.
9. WhatsApp CTA is missing on sampled local SEO service pages; track as a conversion backlog item, not an SEO blocker.
10. Analytics mode must remain consent-aware and avoid duplicate GA4 pageviews.
11. External citation cleanup is still pending owner approval.
12. Native review remains needed for any future non-English public profile copy outside the owner-approved GBP service wording.

## Access Gaps

Needed to make the monitoring system complete:

- Search Console follow-up export for top pages, countries, devices, priority discovered URLs, and the two stale HTTP/non-www `Indexed, though blocked by robots.txt` examples.
- Google Business Profile Manager access.
- Google Analytics or GTM access if tracking is enabled.
- Bing Webmaster Tools access.
- Bing Places access.
- Facebook/Instagram/TikTok business admin access.
- Salonly and BeautyBook admin access.
- Booking/backend reporting access, with private client data excluded from public docs.

## Next 7-Day Action Plan

### Botox Batumi Visibility Sprint - 2026-07-09

The canonical English Botox page was confirmed indexed in Google Search Console and one fresh indexing request was submitted after the Botox query-copy release. GSC accepted the request and added the URL to a priority crawl queue.

Next monitoring focus:

- Recheck `botox batumi` in the same location/language context after recrawl.
- Watch whether Google refreshes stale snippets that previously showed outdated NAP details.
- Confirm Google Business Profile service edits for Botox / anti-wrinkle injections move from pending review to live.
- Add real owner-approved Botox/service photos to GBP before expecting stronger local-pack movement.
- Start the ethical review workflow only with real clients and without asking for keyword-stuffed reviews.

1. Recheck the 9 submitted GSC indexing requests on 2026-07-12 and record whether they moved from unknown/discovered/not indexed to indexed.
2. Inspect the two `Indexed, though blocked by robots.txt` examples in Search Console and confirm whether the stale HTTP/non-www URLs have cleared after recrawl.
3. Recheck the six Georgian/Turkish service-page GSC requests on 2026-07-14.
4. Owner confirms whether `silkbeautysalon.online` is the canonical public website and whether `silkbeauty.ge` should be legacy, redirecting, or supporting.
5. Confirm or claim Google Business Profile and record the current public state before edits.
6. Approve live use of the confirmed Google review link, QR workflow, staff roles, and photo/review launch process before sending any review requests.
7. Confirm Bing Webmaster Tools/Bing Places access and prefer GSC import if owner approves.
8. Review stale snippets showing `+995 599 123 456`; request reindexing only for pages that are canonical-ready.
9. Owner confirms real-world hours, public NAP, and separate WhatsApp number handling for all external citations.
10. Create a private monthly tracking sheet or dashboard that stores account exports without exposing account IDs, client data, or screenshots in repo docs.

## Next 30-Day Action Plan

1. Complete GBP NAP/category/service/photo setup after owner approval.
2. Submit sitemap to Bing Webmaster Tools after verification.
3. Correct or verify Salonly, Facebook, Instagram, and BeautyBook citation data.
4. Check Bing Places, Apple Maps, Yandex Maps, 2GIS, Madloba, Locate, and InfoBatumi for accurate or missing listings.
5. Start the ethical review request workflow for real completed appointments after SOP, channel, staff-role, and link/QR approval.
6. Add owner-approved real photos to GBP and priority citation profiles.
7. Create the first Week 2 and Week 4 monitoring reports using GSC last-28-days data and any available GBP/Bing exports.
8. Track priority queries manually across English, Georgian, Russian, Turkish, Arabic, and Hebrew using the same location/device context where possible.
9. Run native review of Georgian, Russian, Turkish, Arabic, and Hebrew profile/page copy before using it in public GBP services, printed materials, or paid campaigns.
10. Decide whether IndexNow implementation is worth a separate approved code task.

## Next 90-Day Action Plan

1. Build a stable monthly SEO/local visibility dashboard.
2. Compare query growth by language and service group.
3. Review pages with impressions but low CTR for title/meta improvements.
4. Improve content only where it answers real user questions and avoids keyword stuffing.
5. Continue photo and review growth ethically.
6. Review citation consistency across GBP, Bing, Apple, Yandex, 2GIS, Salonly, BeautyBook, Madloba, Locate, and InfoBatumi.
7. Re-run competitor/SERP analysis and compare review/photo/citation gaps.
8. Evaluate AI search visibility and whether Silk is cited correctly for Batumi beauty/aesthetic questions.
9. Reassess whether any new website content is needed, using Search Console evidence rather than adding thin pages.
10. Consider IndexNow only after Bing verification is stable and owner approves a separate implementation.
11. Compare booking, WhatsApp, phone, directions, and form-conversion trends only after privacy-safe tracking/reporting is confirmed.

## Phase 8 Final Report

### Docs Created Or Updated

- `docs/GOOGLE_AI_SEO_ACCESS_AND_SOURCE_AUDIT.md`
- `docs/GOOGLE_AI_SEO_EXECUTION_BASELINE.md`
- `docs/LIVE_SEO_READINESS_CHECK.md`
- `docs/GOOGLE_SEARCH_CONSOLE_INDEXING_LOG.md`
- `docs/GOOGLE_BUSINESS_PROFILE_OPTIMIZATION_LOG.md`
- `docs/BING_WEBMASTER_AND_INDEXNOW_LOG.md`
- `docs/STRUCTURED_DATA_VALIDATION_LOG.md`
- `docs/AI_SEARCH_READINESS_AND_QUERY_TRACKING.md`
- `docs/LOCAL_SERP_COMPETITOR_ANALYSIS.md`
- `docs/NAP_CITATION_CONSISTENCY_AUDIT.md`
- `docs/REVIEW_GENERATION_AND_REPLY_SYSTEM.md`
- `docs/SEO_KEYWORD_MAP.md`
- `docs/SEO_MONITORING_BASELINE_AND_REPORTING.md`

### Accounts Checked

| Account/tool | Status |
| --- | --- |
| Website production URL | Public checks completed. |
| GitHub repository / local branch | Available for documentation work. |
| Google Search Console | Domain property available and verified; sitemap and URL Inspection findings documented. |
| Google Business Profile Manager | Access not confirmed; no public profile edits made. |
| Google Analytics / GTM | Access not available in this phase; no tracking changes made. |
| Bing Webmaster Tools | Access not confirmed; no account-side action made. |
| Bing Places | Access not confirmed; no public listing edits made. |
| Hostinger dashboard | Not used for this Phase 8 reporting update. |
| Public citations/search results | Public checks documented; no third-party listing edits made. |

### Public Changes Made

None. This phase created and updated internal documentation only.

### Owner Approvals Needed

- Search Console follow-up access/session to export top pages, countries, devices, and inspect the stale robots anomaly examples.
- Google Business Profile approval before any further NAP, category, photo, Q&A, review-request launch, or post changes.
- Bing Webmaster Tools and Bing Places verification.
- Citation corrections on Salonly, Facebook, Instagram, BeautyBook, Apple Maps, Yandex Maps, 2GIS, Madloba, Locate, InfoBatumi, and any booking platforms.
- Review request SOP launch and official Google review link use.
- Native-language review before high-visibility Georgian, Russian, Turkish, Arabic, and Hebrew profile copy or printed materials.
- Any future website/code fixes for conversion backlog items such as missing WhatsApp CTA on sampled local SEO service pages.

### Urgent Issues

1. Recheck pending Google Business Profile service edits and public profile state.
2. Confirm whether `silkbeauty.ge` is official, legacy, redirecting, or supporting.
3. Inspect the Search Console `Indexed, though blocked by robots.txt` examples and recheck the 9 submitted indexing requests.
4. Recheck the six KA/TR service-page indexing requests on 2026-07-14.
5. Confirm Bing Webmaster access.
6. Do not bulk-submit the 485 discovered URLs; prioritize high-intent canonical-ready pages only after the scheduled follow-ups.
7. Investigate stale public snippets that still show `+995 599 123 456`.
8. Confirm Facebook canonical page/handle and whether the main phone and WhatsApp are displayed in separate fields.
9. Confirm Salonly and BeautyBook admin data, especially service mix, phone formatting, website link, booking link, and photos.
10. Keep missing WhatsApp CTA on sampled local SEO service pages in the conversion backlog.

### Next Check Date

- Next weekly check: 2026-07-12, or earlier when GBP/Bing access becomes available.
- Search Console indexing-request follow-up for older 9 requests: 2026-07-12.
- Search Console indexing-request follow-up for six KA/TR service-page requests: 2026-07-14.
- First monthly operating report: 2026-08-04.

## References

- Live site: `https://silkbeautysalon.online`
- Live sitemap: `https://silkbeautysalon.online/sitemap.xml`
- Live robots: `https://silkbeautysalon.online/robots.txt`
- Phase 1 source audit: `docs/GOOGLE_AI_SEO_ACCESS_AND_SOURCE_AUDIT.md`
- Live SEO readiness check: `docs/LIVE_SEO_READINESS_CHECK.md`
- Search Console log: `docs/GOOGLE_SEARCH_CONSOLE_INDEXING_LOG.md`
- GSC index coverage diagnosis: `docs/GSC_INDEX_COVERAGE_DIAGNOSIS.md`
- Google Business Profile log: `docs/GOOGLE_BUSINESS_PROFILE_OPTIMIZATION_LOG.md`
- Bing Webmaster log: `docs/BING_WEBMASTER_AND_INDEXNOW_LOG.md`
- AI search tracking: `docs/AI_SEARCH_READINESS_AND_QUERY_TRACKING.md`
- Keyword map: `docs/SEO_KEYWORD_MAP.md`
- Phase 7 competitor analysis: `docs/LOCAL_SERP_COMPETITOR_ANALYSIS.md`
- Phase 8 citation audit: `docs/NAP_CITATION_CONSISTENCY_AUDIT.md`
