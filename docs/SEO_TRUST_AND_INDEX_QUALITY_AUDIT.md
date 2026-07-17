# SEO Trust And Index Quality Audit

Date: 2026-07-16

Branch: `codex/seo-trust-and-entity-cleanup`

Status: released to production `main` at `232a778` and live-verified on 2026-07-17

## Objective

Improve the quality of the URLs and business information presented to search engines without adding doorway pages, fake trust signals, unsupported medical claims, or a redesign.

The public site remains unchanged until the owner separately approves a controlled release.

## Main Finding

The site did not need more indexable pages. It needed a smaller, more defensible search surface.

- The live sitemap contained `528` URLs when checked on 2026-07-16.
- The local candidate sitemap contains `184` URLs.
- The reduction removes low-confidence catalog, condition, category, and duplicated editorial URLs from discovery while preserving their public routes.
- High-intent localized service hubs, locale roots, pricing, booking, rental pages, and verified treatment detail pages remain discoverable.

This is crawl prioritization, not a promise that Google or Bing will index or rank every remaining URL.

## Changes In The Candidate

### Search index policy

- Added one explicit index policy for treatment detail routes.
- Kept indexable treatment detail pages limited to currently supported service areas: anti-wrinkle, masseter Botox, hyperhidrosis, lip fillers, SkinPen microneedling, Fire & Ice Peel, nails, and lashes.
- Kept other treatment detail URLs accessible but set them to `noindex,follow` and removed them from the sitemap until the owner verifies that the service, copy, practitioner authority, and supporting evidence are current.
- Set treatment overview, condition overview, treatment category, and condition detail routes to `noindex,follow` while preserving their existing URLs and customer navigation.
- Limited blog discovery to English because the current translated blog inventory was cloned rather than independently reviewed localized editorial content.
- Removed deployment-time `lastModified` values that falsely implied every sitemap URL changed on each build.

### Trust and factual accuracy

- Removed unverified staff identities, founder claims, awards, press mentions, practitioner quotes, certifications, product/device claims, patient counts, international-client percentages, discounts, emergency-support claims, and guaranteed or exaggerated treatment language from actively rendered pages.
- Withheld testimonials and before/after cases until real source records, same-client evidence, treatment context, and publication consent are available.
- Kept review and aggregate-rating markup excluded.
- Replaced visible About, visitor, consultation, media, offer, and career copy with factual, reversible information or transparent unavailable-state copy.
- Kept the verified NAP, opening hours, six website locales, booking URL, primary phone, and separate approved WhatsApp channel unchanged.

### Search architecture and internal links

- Routed homepage service highlights and local-service navigation to the canonical localized service hubs.
- Added direct pricing, booking, related-service, and WhatsApp paths on local SEO service pages.
- Localized the Beauty Salon Batumi hub with concise factual copy for all six locales.
- Preserved all existing public URLs, menu structure, locale roots, RTL behavior, booking flow, and visual design.

### Client payload

- Added a server-side client-message allowlist so unused historic locale keys are not serialized into every page.
- The English homepage HTML measured approximately `241 KB` before the allowlist and `139,156` bytes after it in the local production preview.
- Dormant historic locale keys remain in source for compatibility, but they are not emitted in the checked public HTML. Deleting those keys should be a separate translation-inventory task.

## Candidate Sitemap Policy

| URL group | Route status | Sitemap status | Reason |
| --- | --- | --- | --- |
| Six locale roots | Indexable | Included | Core brand/local entry points |
| Local service hubs | Indexable | Included | High-intent, localized service pages |
| Pricelist and booking | Indexable | Included | Commercial and conversion intent |
| Verified treatment details | Indexable | Included | Supported service scope |
| Other treatment details | `noindex,follow` | Excluded | Owner/service evidence still required |
| Treatment overview/categories | `noindex,follow` | Excluded | Avoid competing catalog surfaces |
| Conditions and condition details | `noindex,follow` | Excluded | Avoid unsupported diagnosis/medical inventory |
| Blog | English indexable | English only | Other locale copies are not natively reviewed articles |
| Before/after | `noindex,follow` | Excluded | No verified consented cases available |
| Offers/media/careers | `noindex,follow` | Excluded | No current verified public inventory |

## Local Verification

- All checked locale roots and priority local-service routes returned HTTP `200`.
- Candidate sitemap returned HTTP `200` with `184` `<loc>` entries.
- Robots remained crawlable and continued to reference the sitemap.
- Priority local-service pages remained self-canonical and indexable.
- Catalog and unsupported-detail samples emitted `noindex,follow` as intended.
- Homepage, Arabic, and Hebrew previews showed no horizontal overflow.
- Mobile menu opened correctly and retained Salon Space Rental, Chair Rental, and Download App in More; the desktop More menu exposed the same routes.
- The language switcher exposed all six locale roots, and Arabic/Hebrew retained `dir="rtl"`.
- Sticky mobile booking and WhatsApp links remained functional.
- Twenty-five final production-preview route/API checks returned HTTP `200`, with no browser console or hydration errors in the checked desktop/mobile flows.
- No checked page emitted the prohibited placeholder phone, fake practitioner names, award/press claims, patient-count claims, or discount claims.
- Homepage JSON-LD remained parseable and excluded reviews and `aggregateRating`.
- A complete production-preview crawl checked all `184` sitemap URLs and `432` same-origin links with no non-200 sitemap routes or broken internal targets.
- FAQ, accessibility, privacy, and terms pages now emit self-canonical, six-locale hreflang, and `x-default` metadata.
- Locale-switcher path regression coverage prevents nested locale paths on localized support pages.
- Twenty-eight representative desktop/mobile/RTL renders passed without broken visible images, console errors, hydration errors, framework overlays, or horizontal overflow.
- Nine representative routes reported zero Axe WCAG A/AA violations.
- Newsletter, contact, and booking CSRF boundaries were checked with safe non-secret preview environment placeholders: missing tokens returned `403`, while valid tokens with invalid payloads returned `400`.

Final command results:

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm test`: `375` passed, `12` skipped.
- `npm run validate:i18n`: all six locale files valid; no missing keys.
- `npm run build`: passed; Next.js generated `549` static pages/routes without changing the narrower sitemap policy.
- `git diff --check`: passed.

## Remaining Risks And Evidence Gates

1. Public search caches can continue to show old copy until an approved release is deployed and crawlers revisit the affected URLs.
2. Historic unverified treatment and locale data still exists in source for route compatibility. It is excluded from search discovery and the checked client payload, but needs an owner-led catalog inventory before reactivation or deletion.
3. Practitioner identity, qualifications, licenses, certificates, product brands, awards, press coverage, and before/after claims require documentary evidence before publication.
4. New factual Georgian, Russian, Turkish, Arabic, and Hebrew copy needs native review before it is treated as final editorial copy.
5. Ownership and intended use of `silkbeauty.ge` remain unresolved. No redirect, DNS, or ownership action is authorized.
6. Real Google Business Profile photos, genuine customer reviews, accurate citations, and consistent business entities remain necessary for local prominence.
7. Rankings are not guaranteed; Search Console and local-pack movement must be measured after an approved release and recrawl.

## Recommended Release Sequence

1. Owner reviews this candidate and verifies the supported treatment inventory.
2. Native reviewers approve the five non-English factual copy sets.
3. Run a controlled release from the reviewed commit with the existing backup and rollback process.
4. Verify live routes, metadata, schema, sitemap, robots, menu, booking, WhatsApp, and RTL behavior.
5. Request recrawl only for the canonical high-intent pages whose live checks pass.
6. Monitor index coverage and query/page selection for at least four weeks before considering additional pages.

No account, DNS, ad, billing, Google Business Profile, Search Console, Bing, Hostinger, or production action was taken during this implementation pass.
