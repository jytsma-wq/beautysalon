# SEO Monitoring Baseline And Reporting

Date: 2026-07-04
Phase: 10 - Monitoring and reporting
Branch: `codex/visibility-readiness-audit`
Mode: public technical baseline plus private-data access plan; no account settings changed

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
| Public search discoverability sample | Public site search surfaced `/en`, `/en/beauty-salon-batumi`, `/en/botox-batumi`, `/en/dermal-fillers-batumi`, `/en/skin-treatment-batumi`, `/en/book`, and `/tr/before-after`. | Medium; search samples vary. |
| Google Search Console | Not available / not confirmed. | High access gap |
| Google Business Profile Insights | Not available / GBP profile not confirmed. | High access gap |
| Google Analytics / GTM | Account access not available; live tag not confirmed in Phase 1. | High access gap |
| Bing Webmaster Tools | Not available / not confirmed. | High access gap |
| Reviews | Google review count/rating not confirmed. Salonly public citation shows a small review footprint, but it is not a GBP baseline. | Medium |
| Competitor snapshot | LAKmousse, Academy of Cosmetology, Heaven Nails, Sakura, Arna Sacman/Inna Kakhidze, 100doc, Madloba, Locate, Yandex Maps, Tripadvisor, Salonly. | Medium public-search baseline |

## Current Indexed Pages

Authoritative indexed-page counts require Google Search Console and Bing Webmaster Tools.

Public search samples confirm that some Silk pages are discoverable in public search results, including:

- `https://silkbeautysalon.online/en`
- `https://silkbeautysalon.online/en/beauty-salon-batumi`
- `https://silkbeautysalon.online/en/botox-batumi`
- `https://silkbeautysalon.online/en/dermal-fillers-batumi`
- `https://silkbeautysalon.online/en/skin-treatment-batumi`
- `https://silkbeautysalon.online/en/book`
- `https://silkbeautysalon.online/tr/before-after`

This is not a full index count. Use Search Console Page indexing and Bing URL Inspection for the real baseline after access is available.

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

These fields must be filled after account access is available. Do not estimate them from public search snippets.

| Metric | Current value | Required source |
| --- | --- | --- |
| Search impressions | Not available | Google Search Console Performance |
| Search clicks | Not available | Google Search Console Performance |
| CTR | Not available | Google Search Console Performance |
| Average position | Not available | Google Search Console Performance |
| Top queries | Not available | Google Search Console Performance |
| Top pages | Not available | Google Search Console Performance |
| Indexed pages | Not available | GSC Pages report and Bing Webmaster Tools |
| GBP profile views | Not available | Google Business Profile Performance |
| GBP calls | Not available | Google Business Profile Performance / call logs |
| GBP website clicks | Not available | Google Business Profile Performance |
| GBP directions clicks | Not available | Google Business Profile Performance |
| Booking clicks | Not available | GA4/GTM or booking logs |
| WhatsApp clicks | Not available | GA4/GTM event tracking after consent setup |
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

## Priority Query Tracking Template

Use a controlled location/device context where possible. Do not overinterpret one-off rankings.

The complete owner-provided multilingual keyword set is mapped in `docs/SEO_KEYWORD_MAP.md`. The shorter table below is the dashboard sample; use the full keyword map for monthly Search Console grouping and manual rank checks.

| Query | Language | Target page | Organic position | Local pack present | Silk in local pack | Competitors above Silk | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| beauty salon Batumi | English | `/en/beauty-salon-batumi` |  |  |  |  |  |
| Botox Batumi | English | `/en/botox-batumi` |  |  |  |  |  |
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

1. Google Business Profile ownership/profile URL is still not confirmed.
2. Google Search Console access is not confirmed, so impressions/clicks/indexed-page data is missing.
3. Bing Webmaster Tools and Bing Places access are not confirmed.
4. Public search snippets still show stale placeholder phone `+995 599 123 456` for at least one indexed result, even though live page/footer data uses the correct phone.
5. Review count/rating baseline is not confirmed for Google.
6. Booking, WhatsApp, calls, and form conversion tracking are not confirmed.
7. Analytics mode must remain consent-aware and avoid duplicate GA4 pageviews.
8. External citation cleanup is still pending owner approval.
9. Non-English content should receive native review before heavy promotion or paid campaigns.

## Access Gaps

Needed to make the monitoring system complete:

- Google Search Console owner/delegated access.
- Google Business Profile Manager access.
- Google Analytics or GTM access if tracking is enabled.
- Bing Webmaster Tools access.
- Bing Places access.
- Facebook/Instagram/TikTok business admin access.
- Salonly and BeautyBook admin access.
- Booking/backend reporting access, with private client data excluded from public docs.

## Next 7-Day Action Plan

1. Confirm or claim Google Business Profile.
2. Confirm the official Google review link and public GBP URL.
3. Verify Google Search Console and submit `https://silkbeautysalon.online/sitemap.xml`.
4. Inspect priority URLs in Search Console and request indexing only for canonical, ready pages.
5. Review stale snippets showing `+995 599 123 456`; request reindexing after GSC access.
6. Confirm Bing Webmaster Tools/Bing Places access.
7. Owner approves the review request SOP and templates before staff use them.
8. Owner confirms real-world hours and exact public NAP for all external citations.

## Next 30-Day Action Plan

1. Complete GBP NAP/category/service/photo setup.
2. Submit sitemap to Bing Webmaster Tools.
3. Correct or verify Salonly, Facebook, Instagram, and BeautyBook citation data.
4. Start ethical review request workflow for real completed appointments.
5. Add owner-approved real photos to GBP and priority citation profiles.
6. Create the first Week 2 and Week 4 monitoring reports once GSC/GBP data starts appearing.
7. Track priority queries manually across English, Georgian, Russian, Turkish, Arabic, and Hebrew.
8. Decide whether IndexNow implementation is worth a separate approved code task.

## Next 90-Day Action Plan

1. Build a stable monthly SEO/local visibility dashboard.
2. Compare query growth by language and service group.
3. Review pages with impressions but low CTR for title/meta improvements.
4. Improve content only where it answers real user questions and avoids keyword stuffing.
5. Continue photo and review growth ethically.
6. Review citation consistency across GBP, Bing, Apple, Yandex, 2GIS, Salonly, BeautyBook, Madloba, Locate, and InfoBatumi.
7. Re-run competitor/SERP analysis and compare review/photo/citation gaps.
8. Evaluate AI search visibility and whether Silk is cited correctly for Batumi beauty/aesthetic questions.

## References

- Live site: `https://silkbeautysalon.online`
- Live sitemap: `https://silkbeautysalon.online/sitemap.xml`
- Live robots: `https://silkbeautysalon.online/robots.txt`
- Phase 1 source audit: `docs/GOOGLE_AI_SEO_ACCESS_AND_SOURCE_AUDIT.md`
- Phase 7 competitor analysis: `docs/LOCAL_SERP_COMPETITOR_ANALYSIS.md`
- Phase 8 citation audit: `docs/NAP_CITATION_CONSISTENCY_AUDIT.md`
