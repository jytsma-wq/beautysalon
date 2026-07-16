# SEO Trust And Google Business Strategy

Date: 2026-07-16
Branch: `codex/seo-trust-and-entity-cleanup`
Mode: website trust cleanup and strategy preparation; no deployment or public profile edit

## Executive Decision

The next useful SEO step is trust consolidation, not more keyword copy. The site already has localized service pages, internal links, canonical/hreflang metadata, sitemap coverage, and consultation-led Botox content. Publishing unsupported reviews, result photos, credentials, awards, or safety claims creates a larger ranking and compliance risk than a small keyword gap.

This branch therefore removes only content that has no defensible source in the repository:

- unverified homepage testimonials;
- stock-photo treatment-result comparisons;
- the indexable before/after gallery until real consented cases exist;
- dormant schema generators capable of emitting fabricated aggregate ratings, reviews, or medical-study markup.

No production deployment or Google Business Profile edit was made.

## Current Search Position

- Google can discover Silk's localized Botox page; discovery alone does not establish a stable generic-query ranking.
- The website has the correct technical foundation for the primary `Botox Batumi` topic: a dedicated canonical page, localized variants, sitemap inclusion, internal links, and consultation-led copy.
- Generic local visibility still depends heavily on Google Business Profile relevance, distance, prominence, real reviews, real photos, consistent citations, crawl/indexing progress, and verified business expertise.
- Search results can vary by location, device, language, personalization, and time. Top-five placement cannot be guaranteed.

## Evidence Gate For Website Claims

The following source fields must be confirmed by the owner before they are strengthened, reused in GBP, or treated as SEO trust evidence.

| Claim group | Current source examples | Evidence required | Action now |
| --- | --- | --- | --- |
| Team identities and roles | Nana Gviniashvili, Mariam Beridze, Ana Kalandadze, Elena Chikvaidze, Natia Tsiklauri | Owner confirmation, current role, permission to publish, and real portrait rights | Keep unchanged pending verification; do not reuse externally |
| Clinical/professional credentials | Medical aesthetic practitioner, registered nurse, certified practitioner, dermatology training | Certificate/license name, issuer, date, current status, and jurisdiction | Treat as unverified until evidence is recorded privately |
| Membership | Georgian Aesthetic Medicine Association | Current membership evidence and approved public wording | Do not repeat in GBP or new content |
| Awards/media | Award Winning, premier salon, featured in Georgian Fashion & Beauty Magazine | Award/publication name, date, and public source URL | Remove or rewrite in a separately approved content cleanup if unverified |
| Product/brand use | Allergan/Juvederm, Galderma/Restylane, Merz, iS Clinical, Obagi, Mesoestetic | Owner confirmation of current authentic products and permitted brand references | Do not add to GBP until confirmed |
| Safety/service claims | Georgian Ministry certification, licensed clinic, 24/7 emergency contact, EU standards | License/approval evidence and operational confirmation | High-priority owner verification; do not amplify |
| Languages | Staff language lists and tourist support | Staff-by-staff owner confirmation | Keep public language claims conservative until confirmed |

Evidence should not be committed if it contains personal identifiers, license numbers, signatures, private client information, or account credentials. Record only the approved public wording and a private evidence location.

## Google Business Profile Strategy

### Immediate, No-Cost Priorities

1. Recheck the six owner-approved service edits after Google's review period. Do not create duplicate service rows.
2. Resolve the existing `Dermal fillers` / `Dermal Fillers` duplicate only after owner approval and after confirming which row carries the correct description.
3. Confirm the public address displays postal code `6010`; keep website, GBP, Maps, and citations aligned.
4. Confirm the primary category remains `Beauty salon`. Add secondary categories only when the underlying service and eligibility are verified.
5. Upload a first batch of real, current, owner-approved location and work photos. No stock, AI-generated, or unconsented client images.
6. Start the ethical review workflow with real completed appointments and the official review link. No incentives, review gating, or requests limited to satisfied clients.
7. Reply to every genuine review with privacy-safe language and no disclosure of injectable or skin-treatment details.
8. Add no rental service/category to GBP until Google supports an accurate, non-misleading service classification and the owner approves the public wording.

### Profile Evidence To Capture Monthly

- public service list and duplicate status;
- profile views and search terms where available;
- website, booking, call, and direction actions;
- review count, rating, response status, and language;
- photo count and photo freshness;
- address/postal-code display;
- pending or rejected edits;
- category and hours consistency.

## Website SEO Strategy

### Next 7 Days

1. Owner reviews the evidence-gate table and confirms which staff, credentials, awards, product brands, language capabilities, and emergency-support claims are true and publishable.
2. Release the trust cleanup only after owner approval and visual verification.
3. Recheck Search Console indexing for the localized Botox and other priority service pages; submit only canonical, indexable URLs when needed.
4. Recheck GBP service publication and public postal code.
5. Collect ten real GBP photo candidates and obtain written consent where a person is identifiable.

### Next 30 Days

1. Replace generic stock imagery on high-intent service pages with real salon/location/treatment-environment photos where available.
2. Publish verified practitioner information with concise credentials and clear scope of practice; remove unsupported claims.
3. Obtain the first genuine Google reviews through the approved multilingual workflow.
4. Audit and correct the highest-value citations: Google Maps/GBP, Salonly, Facebook, Instagram, Bing Places, Apple Maps, and relevant Georgian directories.
5. Decide the owner-approved relationship between `silkbeautysalon.online` and `silkbeauty.ge`. Avoid competing first-party entities, duplicate listings, or conflicting NAP data.
6. Measure `Botox Batumi` and localized equivalents using the same location, device, and signed-out method; record organic and local-pack visibility separately.

### Next 90 Days

1. Build a real case-study library only from same-client images, written consent, accurate treatment details, and non-promissory captions.
2. Add verified FAQs based on real consultation questions and Search Console query data, not keyword lists.
3. Review GBP performance, Search Console clicks/impressions/queries, bookings, WhatsApp clicks, calls, and direction requests as separate KPIs.
4. Improve pages that gain impressions but have weak CTR; avoid changing pages that are still awaiting indexing without evidence.
5. Repeat competitor/local-pack checks and update the citation/review/photo plan.

## Account-Side Limitation

The in-app browser automation runtime was unavailable during this pass, so Search Console and Google Business Profile dashboards were not inspected or changed. Public/account status must not be inferred from old documentation. The next account-side pass should begin by rechecking pending GBP services, postal-code display, current review baseline, and the latest GSC indexing report.

## Release Gate

Before this branch can reach production:

- owner approves removal of the unverified testimonial/result sections;
- all tests and production build pass;
- desktop/mobile/RTL browser checks confirm no layout gaps or navigation regression;
- homepage JSON-LD remains parseable and contains no review/aggregateRating markup;
- production backup and rollback steps remain available.
