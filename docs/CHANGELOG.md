# Changelog

## 2026-07-16

- Completed a production-preview audit of all `184` sitemap URLs and `432` same-origin links; every sitemap route returned HTTP `200`, no broken internal links or checked placeholder/trust claims were found, and priority desktop/mobile/RTL interaction checks reported no console, hydration, image, or horizontal-overflow failures.
- Added self-canonical, six-locale hreflang, and `x-default` metadata to the localized FAQ, accessibility, privacy, and terms pages; corrected locale-switcher URL generation so support pages no longer produce nested locale paths.
- Centralized the accessibility and terms contact addresses on the verified `info@silkbeautysalon.online` site configuration value, with focused metadata and locale-path regression tests.
- Verified menus, the six-language switcher, booking and contact UI validation, consent persistence, sticky mobile booking/WhatsApp behavior, Visit Us, pricing, homepage schema, hero priority hints, and CSRF rejection/validation boundaries; nine representative routes reported zero Axe WCAG A/AA violations.
- Added a branch-only index-quality policy that reduces the candidate sitemap from `528` currently observed live URLs to `184` focused URLs, preserves excluded routes with `noindex,follow`, and removes unsupported catalog, condition, category, duplicated editorial, and empty proof pages from search discovery.
- Reworked actively rendered About, visitor, consultation, local-service, media, offer, career, homepage, metadata, and schema content to use verified business facts; unverified staff, awards, press, device/product, patient-count, discount, emergency-support, and outcome claims are no longer emitted by the checked pages.
- Added a server-side client-message allowlist so dormant historic translation keys are not serialized into every route; local English homepage HTML decreased from approximately `241 KB` to `139,156` bytes without changing the visible design or six-locale navigation.
- Strengthened canonical service-hub links to pricing, booking, related services, and the approved WhatsApp channel; kept existing URLs, menu behavior, RTL, analytics, email, and dependencies unchanged.
- Added focused regression coverage for index policy, sitemap scope, noindex-follow metadata, factual six-locale content, client-message safety, schema exclusions, and canonical conversion links, plus a complete trust/index-quality audit.
- Verified the branch candidate with TypeScript, ESLint, `375` passing tests (`12` skipped), six-locale translation validation, a successful production build, and clean diff whitespace checks.
- Added a no-cost public search visibility survey covering branded, Botox, fillers, skin, acne, price, nails, lashes, and multilingual query samples; documented observed first-party page selection, competitor patterns, index lag, entity ambiguity, and prioritized trust/local-prominence actions without changing the website or public profiles.
- Prepared a branch-only SEO trust cleanup that withholds unverified testimonials and stock-photo before/after result cases, conditionally omits their homepage sections, and keeps the empty before/after route out of search discovery until verified consented cases exist.
- Removed unused schema helpers capable of generating fabricated aggregate ratings, review markup, or medical-study markup; the approved BeautySalon JSON-LD remains unchanged.
- Added regression coverage for empty verified-content sources, before/after noindex/sitemap behavior, stock-patient removal, conditional homepage rendering, and prohibited schema helpers.
- Added a no-cost Google Business and website trust strategy with an owner evidence gate for staff, credentials, awards, association membership, product brands, licensing, language, and emergency-support claims. No public profile edit or deployment was made.

## 2026-07-12

- Renamed the customer-facing Venue Rental label and English page heading to Salon Space Rental, aligned all six localized menu labels and the Chair Rental cross-link, and preserved the existing `/venue-rental-batumi` URL for link and SEO continuity.
- Moved Download App into the existing More navigation group and added a compact desktop More dropdown that mirrors the mobile secondary links without changing the core treatment navigation.
- Added a localized chair-rental enquiry page across all six supported languages, with individual suitability and written-term checks rather than unconfirmed public prices, equipment, employment, capacity, or licensing promises.
- Added Chair Rental to the More menu, footer information links, and localized sitemap; the treatment-focused sticky mobile booking bar remains excluded from rental pages.
- Added a localized salon venue-rental page for professional meetings, diploma/training sessions, and seminars/workshops across all six supported languages, using consultation-led availability inquiries without publishing unconfirmed prices, capacity, equipment, or certification claims.
- Added Salon Space Rental to the existing desktop utility navigation, mobile More menu, footer information links, and localized sitemap while preserving the established treatment menu and visual design.
- Added focused regression coverage for locale content, route metadata/rendering, navigation/footer links, sitemap inclusion, and exclusion of the treatment-focused sticky mobile booking bar on the rental page.

## 2026-07-09

- Requested a fresh Google Search Console recrawl for the indexed canonical English Botox page after the Botox query-intent release; Google accepted the URL into a priority crawl queue, with no quota or temporary-unavailable warning shown.
- Strengthened the local Botox page hierarchy by routing homepage Botox/anti-wrinkle highlights and the Botox/fillers safety guide directly to `/botox-batumi`, following safe local SEO service-hierarchy advice without changing visible design, prices, or public claims.
- Aligned the Botox local SEO pages with high-intent English, Georgian, Russian, Turkish, Arabic, and Hebrew query forms without restoring visible keyword-list blocks; added regression coverage and a focused Botox top-5 action plan.
- Prepared the Google Business Profile photo and review launch pack, confirmed the official Google review link and current Google review baseline, added first-photo upload planning, and kept review/photo launch blocked pending owner approval and real assets.
- Published owner-approved Google Business Profile service-only updates for Botox / anti-wrinkle, lip fillers, skin treatments, skin consultation, and acne service descriptions without prices or durations; Google marked the edits pending review, and pre-existing `Dermal fillers` duplicate cleanup remains a separate approval item.
- Updated SEO status documentation so the live `/pricelist`, `/{locale}/beauty-salon-batumi`, visible keyword-list, postal-code, and KA/TR query-copy fixes are no longer listed as active website-side blockers; remaining GSC, GBP, Bing, citation, native-review, and conversion backlog items stay tracked separately.
- Prepared a narrow Georgian/Turkish rendered service-copy release for the six priority Botox, lip-filler, and skin-treatment pages so owner-reported query forms appear naturally without visible keyword-list blocks or excessive repetition.

## 2026-07-05

- Aligned the owner-confirmed postal code `6010` across first-party website source, locale message files, BeautySalon JSON-LD source data, the booking confirmation email footer, local SEO address copy, and NAP/SEO documentation; previous `6000` references are documented as outdated/public-Google-display lag where relevant.
- Prepared the next safe SEO release by keeping the localized pricelist canonical/hreflang metadata fix, replacing the visible `Popular local searches` block on `/[locale]/beauty-salon-batumi` with localized customer-facing service navigation, and adding focused regression coverage for pricelist metadata, sitemap inclusion, and the content cleanup.
- Added a Google Search Console index coverage diagnosis for the 487 not-indexed URLs, classifying 485 discovered/not-indexed URLs, the expected non-www redirect, the expected root canonical alternate, stale HTTP/non-www robots warnings, priority URL status, and selective indexing recommendations.
- Updated the SEO monitoring baseline and reporting system with the current Phase 8 operating rhythm, verified Search Console baseline, GSC indexing follow-up plan, KPI cadence, 7/30/90-day action plan, and remaining GBP/Bing/citation/native-review approval gates.
- Updated the review generation and reply system with the current Phase 7 launch status, Google review-policy refresh, channel-specific rules, prohibited wording examples, native-language review caveats, and owner-approval gates.
- Updated the NAP citation consistency audit with the current Phase 6 public-listing pass, source-of-truth confirmation, `silkbeauty.ge` risk, Salonly/BeautyBook/Facebook findings, stale-phone snippet status, and owner-approved correction order.
- Updated the AI search readiness and query tracking log with the Phase 5 multilingual public visibility baseline, AI-style question samples, competitor/source notes, content gaps, and next actions.
- Updated the Bing Webmaster and IndexNow log with the current Phase 4 access result, live sitemap/robots checks, priority URL submission readiness, `/en/pricelist` hold status, crawl-report blockers, and recommendation-only IndexNow plan.
- Updated the Google Business Profile optimization log with the current Phase 3 access result, public Salonly/Facebook/secondary-domain findings, source-of-truth comparison, safe GBP recommendations, and owner-approval gates.
- Updated the Google Search Console indexing log with verified domain-property access, submitted-sitemap status, Pages/Performance report baselines, URL Inspection findings, and 9 accepted indexing requests.
- Refreshed the live SEO readiness check with current production route, canonical, hreflang, sitemap, robots, structured-data, phone, and pre-indexing blocker results.
- Added a fresh Google/AI SEO execution status update documenting live route rechecks, structured-data status, public SERP/citation findings, the `silkbeauty.ge` source-of-truth risk, account-side blockers, and immediate owner actions.

## 2026-07-04

- Updated the SEO monitoring baseline and reporting system with the Phase 8 operating rhythm, system baselines, keyword-group tracking, KPI source/cadence map, final execution report, and 7/30/90-day action plan.
- Updated the review generation and reply system with separate WhatsApp/SMS templates, explicit Botox/fillers and nails/lashes reply templates, review-check cadence, and launch checklist.
- Updated the NAP citation consistency audit with current Phase 6 public listing findings, stale-snippet verification, platform-specific mismatches, and prioritized correction actions.
- Updated the Bing Webmaster and IndexNow log with current Phase 4 access status, public sitemap/robots readiness, priority URL submission recommendations, crawl-report blockers, and IndexNow non-implementation evidence.
- Updated the Google Business Profile optimization log with the current Phase 3 access status, public citation notes, website source comparison, review-audit status, and owner-approval gates.
- Updated the Google Search Console indexing log with the current Phase 2 execution status, full priority URL public-readiness summary, account-access blockers, and indexing-request hold list.
- Added a live SEO readiness check documenting priority URL status, indexability, canonical/hreflang signals, sitemap/robots readiness, structured data, phone consistency, and pre-indexing blockers.
- Added a Google/Maps/Bing/AI-search execution baseline documenting fresh live route, sitemap, robots, structured-data, public-search, stale-snippet, account-access, and owner-approval status without changing public profiles or website code.
- Added the final SEO/AI search report summarizing completed website-side readiness work, account-side blockers, owner approvals, risks, and 7/30/90-day next actions.
- Replaced the older SEO keyword map with a full multilingual target-keyword matrix that maps owner-provided English, Georgian, Russian, Turkish, Arabic, and Hebrew queries to existing canonical pages without creating doorway pages or visible keyword stuffing.
- Added a Phase 10 SEO monitoring baseline and reporting cadence covering sitemap/robots status, access gaps, KPI groups, private metric placeholders, competitor tracking, and 7/30/90-day action plans.
- Added a Phase 9 ethical multilingual review-generation and reply system with SMS/WhatsApp, email, QR-card, follow-up, review-reply, privacy, and escalation SOP guidance.
- Added a Phase 8 NAP citation consistency audit documenting public listing findings, phone/social/booking-platform risks, and owner-approved correction priorities.
- Added a Phase 7 local SERP competitor analysis documenting multilingual query groups, recurring competitors, directory opportunities, Silk gaps, and review/photo quick wins.
- Added a Phase 6 AI-search readiness and query-tracking audit documenting answerability, citation readiness, multilingual public-search samples, competitor/source notes, and people-first improvement recommendations.
- Added a Phase 5 structured data validation log covering live JSON-LD parseability, schema types, review/rating exclusions, validator limitations, and follow-up cleanup recommendations.
- Added a Phase 4 Bing Webmaster Tools and IndexNow log documenting verification blockers, sitemap/priority URL readiness, and a separate owner-approved IndexNow implementation plan.
- Added a Phase 3 Google Search Console indexing log and prepared a narrow pricelist metadata fix so priority price-list pages expose canonical and hreflang metadata before indexing requests.
- Added a Phase 2 Google Business Profile optimization log with category recommendations, a compliant profile description draft, service plan, photo shot list, review workflow/templates, Q&A drafts, and a 12-week GBP post calendar.
- Added a Phase 1 Google/AI SEO access and source-of-truth audit documenting account availability, production source, live route health, NAP facts, and owner-approval gates.
- Added an online visibility readiness plan covering Google Search Console, Google Business Profile/Maps, Bing Webmaster/Bing Places, citations, reviews, AI-search readiness, and owner-approval gates.
- Added a multilingual SEO topic map for high-intent Batumi beauty searches across English, Georgian, Russian, Turkish, Arabic, and Hebrew.
- Added consultation-led local SEO landing routes for lip fillers, acne treatment, nails, and lashes/brows using the existing local SEO page template and existing treatment data.
- Corrected local SEO skin-treatment references to existing treatment slugs so related treatment cards resolve correctly.
- Added regression coverage for local SEO locale coverage, route/data alignment, treatment slug validity, and sitemap inclusion of the new local-intent routes.

## 2026-07-03

- Added a branch-only newsletter CSRF fix for staging validation: the footer now fetches a fresh `/api/csrf` token before posting to `/api/newsletter`, while the newsletter API remains strict against no-token requests.
- Added regression coverage for footer newsletter CSRF submission and strict newsletter API rejection paths, plus staging validation documentation for the Hostinger 503 follow-up.
- Removed the visible "Search phrases this page answers" keyword block from local SEO landing pages while keeping search phrases available for metadata.
- Corrected the stale Arabic footer phone placeholder to the shared visible phone number and added regression coverage for localized contact data.
- Added a localized homepage Visit Us section with real text address, shared opening-hours/contact data, Google Maps directions, and a lazy no-key Google Maps iframe near the lower conversion area.
- Updated the sticky mobile CTA to hide while protected lower-page sections are visible, preventing overlap with the Visit Us map/content on mobile.
- Optimized homepage hero image loading for LCP by switching the first slide image to explicit preload/eager/high fetch priority, lowering non-active slide priority, tightening responsive image sizes, and capping hero source images to 1920px without changing hero design or copy.
- Added a scroll-gated mobile-only sticky CTA bar with localized Book Now and WhatsApp actions, using the existing booking route and shared WhatsApp phone source while hiding on form routes and when the consent banner/footer is visible.
- Added compliant homepage `BeautySalon` JSON-LD built from shared site configuration, excluding review/rating markup and unverified geo coordinates.
- Added optional testimonial credibility metadata support for avatar URLs, treatment labels, review/treatment dates, and locale-specific quote overrides.
- Updated the homepage review carousel to show privacy-safe client display names and initials fallback avatars without adding fake photos or invented dates.
- Added focused testimonial regression tests for avatar metadata, initials fallback, treatment/date metadata, missing optional fields, and locale quote fallback behavior.
