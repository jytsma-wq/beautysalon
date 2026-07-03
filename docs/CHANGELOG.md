# Changelog

## 2026-07-03

- Added compliant homepage `BeautySalon` JSON-LD built from shared site configuration, excluding review/rating markup and unverified geo coordinates.
- Added optional testimonial credibility metadata support for avatar URLs, treatment labels, review/treatment dates, and locale-specific quote overrides.
- Updated the homepage review carousel to show privacy-safe client display names and initials fallback avatars without adding fake photos or invented dates.
- Added focused testimonial regression tests for avatar metadata, initials fallback, treatment/date metadata, missing optional fields, and locale quote fallback behavior.
