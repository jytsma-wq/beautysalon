# Changelog

## 2026-07-03

- Added a localized homepage Visit Us section with real text address, shared opening-hours/contact data, Google Maps directions, and a lazy no-key Google Maps iframe near the lower conversion area.
- Updated the sticky mobile CTA to hide while protected lower-page sections are visible, preventing overlap with the Visit Us map/content on mobile.
- Optimized homepage hero image loading for LCP by switching the first slide image to explicit preload/eager/high fetch priority, lowering non-active slide priority, tightening responsive image sizes, and capping hero source images to 1920px without changing hero design or copy.
- Added a scroll-gated mobile-only sticky CTA bar with localized Book Now and WhatsApp actions, using the existing booking route and shared WhatsApp phone source while hiding on form routes and when the consent banner/footer is visible.
- Added compliant homepage `BeautySalon` JSON-LD built from shared site configuration, excluding review/rating markup and unverified geo coordinates.
- Added optional testimonial credibility metadata support for avatar URLs, treatment labels, review/treatment dates, and locale-specific quote overrides.
- Updated the homepage review carousel to show privacy-safe client display names and initials fallback avatars without adding fake photos or invented dates.
- Added focused testimonial regression tests for avatar metadata, initials fallback, treatment/date metadata, missing optional fields, and locale quote fallback behavior.
