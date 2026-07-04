# Changelog

## 2026-07-04

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
