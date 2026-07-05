# Online Visibility Readiness Plan

Date: 2026-07-04
Branch: `codex/visibility-readiness-audit`
Business: Silk Beauty Salon
Website: `https://silkbeautysalon.online`
Address: Zurab Gorgiladze 63, Batumi, Georgia

## Source-Of-Truth Business Facts

- Business name: Silk Beauty Salon
- Visible NAP phone for public listings: `+995 577 34 57 67`
- WhatsApp: `+995 577 28 68 55`
- Website: `https://silkbeautysalon.online`
- Email: `info@silkbeautysalon.online`
- Address: Zurab Gorgiladze 63, Batumi, Adjara 6010, Georgia
- Target languages: English, Georgian, Russian, Turkish, Arabic, Hebrew

The WhatsApp number is treated as owner-approved because the owner previously corrected it as `+995 577 28 68 55`. For Google Business Profile, Bing Places, and NAP citations, use the visible NAP phone as the main public phone unless the owner explicitly approves using the WhatsApp number as the primary listing phone.

## Hard Rules

- Do not create fake reviews, fake photos, fake staff, fake certifications, or fake awards.
- Do not add aggregate rating or review schema unless review data is confirmed compliant and owner-approved.
- Do not buy links, mass-generate low-quality pages, or create thin doorway pages.
- Do not expose account access, verification tokens, private Search Console data, Business Profile details, or API keys in repository files.
- Do not change DNS, billing, ownership, public listings, or production code without owner approval.

## Current Technical Readiness

Live checks performed on 2026-07-04:

- `/en`, `/ka`, `/ru`, `/tr`, `/ar`, `/he`: HTTP 200.
- Priority English local SEO pages: HTTP 200.
- `/sitemap.xml`: HTTP 200, XML content type, 516 `<loc>` entries.
- `/robots.txt`: HTTP 200, allows crawling and references `https://silkbeautysalon.online/sitemap.xml`.
- Homepage `BeautySalon` JSON-LD: present and parseable.
- Homepage `aggregateRating` and `review` JSON-LD: absent.
- Homepage includes visible phone, WhatsApp link, Visit Us, and pricing.
- New local SEO pages for lip fillers, acne treatment, nails, and lashes/brows are included in the sitemap.

## Public Search Snapshot

Public search results already surface several Silk pages, including:

- `https://silkbeautysalon.online/en`
- `https://silkbeautysalon.online/en/beauty-salon-batumi`
- `https://silkbeautysalon.online/en/book`
- `https://silkbeautysalon.online/en/botox-batumi`
- `https://silkbeautysalon.online/en/dermal-fillers-batumi`
- `https://silkbeautysalon.online/en/skin-treatment-batumi`

Important discrepancy:

- Public search/web cache snippets still show stale content in some results, including old phone `+995 599 123 456` and the former visible keyword block `Search phrases this page answers`.
- Direct live fetch and browser checks against `https://silkbeautysalon.online` show the corrected production site.
- Action: use Search Console URL Inspection after ownership verification to request recrawl for affected URLs.

Public citation note:

- Salonly appears to list Silk Beauty Salon at Zurab Gorgiladze street 63 with phone `577345767`.
- Salonly service descriptions, worker count, reviews, and categories should be owner-reviewed before using them as authoritative facts or mirroring them into Google/Bing listings.

## Phase 1: Entity And Fact Governance

Goal: make search engines and AI systems see one consistent business entity.

Actions:

1. Use the exact NAP everywhere:
   - Name: Silk Beauty Salon
   - Address: Zurab Gorgiladze 63, Batumi, Adjara 6010, Georgia
   - Main phone: `+995 577 34 57 67`
   - Website: `https://silkbeautysalon.online`
2. Keep WhatsApp as a separate contact channel unless owner approves it as primary phone.
3. Keep a private listing inventory outside the repo with account owner, login owner, recovery owner, and listing URL.
4. Do not copy staff names, certifications, awards, product brands, or medical-style claims into listings until the owner confirms evidence.

Status:

- Website source has consistent phone and address for visible pages.
- `siteConfig.social.googleBusinessProfile` is empty; add it only after the GBP URL is verified and owner-approved.
- Existing source data contains staff, qualifications, awards, and product brand claims that need evidence before external promotion.

## Phase 2: Technical Crawl And Indexing

Goal: make key URLs easy to crawl, index, and understand.

Actions:

1. Keep `https://silkbeautysalon.online/sitemap.xml` live and submitted.
2. Keep `robots.txt` allowing public pages.
3. Confirm all priority pages return 200 and self-canonicalize.
4. Confirm hreflang alternates exist for all six locales.
5. Monitor stale snippets after recrawl.

Status:

- Live sitemap is available and includes localized routes.
- Live robots allows crawl.
- Canonical/hreflang behavior was verified after the release.
- No code change needed in this pass.

## Phase 3: Google Search Console

Goal: give Google an official verified owner signal and recrawl control.

Owner/account steps:

1. Add a Domain property for `silkbeautysalon.online`.
2. Prefer DNS verification when owner has Hostinger DNS access.
3. If HTML meta verification is chosen, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Hostinger; do not commit the token.
4. Submit `https://silkbeautysalon.online/sitemap.xml` in the Sitemaps report.
5. Use URL Inspection and Request Indexing for:
   - `/en`
   - `/en/book`
   - `/en/beauty-salon-batumi`
   - `/en/botox-batumi`
   - `/en/skin-treatment-batumi`
   - `/en/lip-fillers-batumi`
   - `/en/acne-treatment-batumi`
   - `/en/nails-batumi`
   - `/en/lashes-brows-batumi`
6. Review Page indexing weekly until stale snippets clear.
7. Review Performance queries monthly for target service intents.

Notes:

- Google says sitemap submission is a hint, not a guarantee, but Search Console gives processing and crawl error visibility.
- Search Console can submit sitemaps, inspect URLs, and show how Google sees pages.

## Phase 4: Google Business Profile And Maps

Goal: make the salon eligible and accurate in Google Maps/local pack.

Owner/account steps:

1. Search Google Maps and Google Search for `Silk Beauty Salon Batumi`.
2. If a profile exists, request/claim ownership.
3. If no correct profile exists, create one.
4. Verify using the method Google offers.
5. Use only confirmed facts:
   - Primary category: Beauty salon
   - Secondary categories only if accurate and available, such as Skin care clinic, Nail salon, Eyelash salon, Facial spa
   - Main phone: `+995 577 34 57 67`
   - Website: `https://silkbeautysalon.online`
   - Appointment URL: `https://silkbeautysalon.online/en/book`
   - Address: Zurab Gorgiladze 63, Batumi, Adjara 6010, Georgia
   - Hours: match website hours
6. Add real salon photos only:
   - Exterior/signage
   - Reception/interior
   - Treatment room
   - Team only if owner/staff approve
   - No fake before/after photos
7. Add services with concise descriptions, avoiding guaranteed outcomes.
8. After the verified GBP URL exists, add it to `siteConfig.social.googleBusinessProfile` in a separate approved code task.

Notes:

- Google requires verification before editing business info and interacting with customers.
- Verification methods are determined by Google and may include phone/SMS, email, video, live call, or mail.

## Phase 5: Bing Webmaster Tools And Bing Places

Goal: establish Bing Search and Bing Maps visibility.

Owner/account steps:

1. Add and verify `https://silkbeautysalon.online` in Bing Webmaster Tools.
2. If possible, import the verified Google Search Console property.
3. Submit `https://silkbeautysalon.online/sitemap.xml`.
4. Submit priority URLs after major releases.
5. Claim or create the business listing in Bing Places for Business.
6. Keep Bing Places NAP aligned with website and Google Business Profile.

Notes:

- Microsoft directs business owners to Bing Places for Business for Bing Maps listing edits.
- Bing URL submission accepts one URL per line after selecting a verified site.

## Phase 6: Multilingual Local SEO Architecture

Goal: capture high-intent searches in six languages without thin doorway pages.

Current mapped priorities:

- Beauty salon Batumi: `/{locale}/beauty-salon-batumi`
- Botox Batumi: `/{locale}/botox-batumi`
- Dermal fillers Batumi: `/{locale}/dermal-fillers-batumi`
- Lip fillers Batumi: `/{locale}/lip-fillers-batumi`
- Skin treatments Batumi: `/{locale}/skin-treatment-batumi`
- Acne treatment Batumi: `/{locale}/acne-treatment-batumi`
- Nails Batumi: `/{locale}/nails-batumi`
- Lashes and brows Batumi: `/{locale}/lashes-brows-batumi`
- Microneedling Batumi: map to `/{locale}/treatments/skinpen-microneedling`
- Chemical peel Batumi: map to `/{locale}/treatments/is-clinical-fire-ice-peel`
- Prices Batumi: `/{locale}/pricelist`

Follow-up:

- Native review needed for Georgian, Russian, Turkish, Arabic, and Hebrew copy before heavy promotion.
- Track language-specific impressions separately in Search Console.

## Phase 7: Local Citations And NAP Cleanup

Goal: improve local entity confidence beyond the website.

Priority citation targets:

1. Google Business Profile
2. Bing Places
3. Apple Maps / Apple Business Connect
4. Facebook page
5. Instagram profile
6. Salonly
7. Georgian directories
8. Batumi tourism/expat/wedding directories
9. Map platforms used locally, including Yandex Maps where appropriate

Rules:

- Use visible NAP phone unless owner approves otherwise.
- Keep a private citation log, not in the repo.
- Do not create duplicate listings.
- Do not use unverified awards, staff, or medical claims.

Known citation issue:

- Salonly appears publicly and should be owner-reviewed for service/category accuracy.

## Phase 8: Reviews, Photos, And Reputation

Goal: earn compliant trust signals.

Actions:

1. Ask real clients after completed appointments.
2. Never buy reviews.
3. Never review-gate unhappy clients.
4. Do not add review schema unless the review source and implementation are compliant and owner-approved.
5. Reply to reviews with privacy-safe language:
   - Thank the client.
   - Mention broad service category only if the client did.
   - Do not reveal treatment details, medical history, pricing, or personal data.
6. Upload real photos monthly.

Current status:

- Website has testimonial credibility UI, but this does not authorize aggregate rating schema.

## Phase 9: AI Search Readiness

Goal: make the business easy for AI search systems to identify, cite, and summarize.

Actions:

1. Keep crawlable HTML pages with clear headings and factual local context.
2. Keep schema accurate and aligned with visible page content.
3. Keep NAP consistent across website and public listings.
4. Use real expertise signals, but only with evidence.
5. Publish useful, specific content instead of generic AI-generated pages.
6. Maintain FAQ content that answers real booking, location, timing, aftercare, and pricing questions.
7. Do not create `llms.txt` or special AI-only markup unless there is a separate reason; Google says special AI markup is not needed for its generative AI features.

## Phase 10: Measurement, Cadence, And Approval Gates

Weekly:

- Check Search Console Page indexing.
- Inspect stale-snippet URLs until old phone/keyword snippets clear.
- Check Google Business Profile status, calls, website clicks, direction requests, and messages.
- Check Bing Webmaster crawl/index status.

Monthly:

- Export Search Console queries for the target intents.
- Record top organic landing pages.
- Check local pack visibility manually from Batumi context.
- Review GBP photos, services, Q&A, and reviews.
- Refresh one useful content asset if there is a real client question to answer.

Quarterly:

- Audit citations for NAP consistency.
- Review competitor pages and GBP categories.
- Review native-language performance.
- Review unverified claims and either confirm evidence or remove from public-facing promotion.

Approval gates:

- Owner approval required before changing public listings.
- Owner approval required before using WhatsApp as primary public listing phone.
- Owner approval required before adding staff/certification/award/product claims to GBP, Bing Places, citations, or schema.
- Owner approval required before adding `geo` coordinates, review markup, or aggregate rating schema.
- Owner approval required before paid ads or any budgeted promotion.

## Immediate Next Actions

P0:

1. Verify Google Search Console ownership.
2. Submit sitemap in Search Console.
3. Request indexing for stale-snippet URLs.
4. Claim or create Google Business Profile.
5. Confirm GBP main phone should be `+995 577 34 57 67`.
6. Confirm whether WhatsApp `+995 577 28 68 55` should appear on GBP as an additional contact channel only.

P1:

1. Claim Bing Webmaster Tools and Bing Places.
2. Review Salonly listing facts and update if owner-controlled.
3. Prepare real photo set for GBP/Bing/Apple/Salonly.
4. Native-review the non-English SEO pages before external promotion.

P2:

1. Build a private citation inventory.
2. Start monthly content and review workflow.
3. Review existing source claims for staff, qualifications, awards, and product brands before reuse in external profiles.

## References

- Google Search Central: Build and submit a sitemap.
- Google Search Console: submit sitemaps, inspect URLs, monitor indexing.
- Google Search Central: establish business details with Google.
- Google Business Profile Help: verify your business.
- Microsoft Support: use Bing Places for Business to manage Bing Maps listings.
- Bing Webmaster Tools: URL submission for verified sites.
- Google Search Central: optimizing for generative AI search.
