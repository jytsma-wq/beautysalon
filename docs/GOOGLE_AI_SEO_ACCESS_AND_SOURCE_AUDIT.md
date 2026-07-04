# Google / AI SEO Access And Source Audit

Date: 2026-07-04
Time zone: Asia/Tbilisi
Branch: `codex/visibility-readiness-audit`
Audit mode: read-only

## Scope

Phase 1 confirms the available account surfaces, production source, live website state, and source-of-truth business facts for Silk Beauty Salon before any Google Business Profile, Search Console, Bing, citation, or AI-search work changes public data.

No public listings, DNS, analytics settings, Hostinger settings, production code, dependencies, or deployment settings were changed during this audit.

## Accounts And Tools Checked

| Account/tool | Access status in this session | Evidence / note | Action needed |
| --- | --- | --- | --- |
| Google Business Profile Manager | Not available / not confirmed | No connected GBP tool or verified GBP dashboard session was available. `siteConfig.social.googleBusinessProfile` is currently empty. | Owner must confirm account access, profile ownership, and the live GBP URL before listing edits. |
| Google Search Console | Not available / not confirmed | No connected Search Console tool or verified Search Console session was available. The app supports `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, but the live homepage did not expose a `google-site-verification` meta tag during this audit. | Owner must add/verify the property, preferably as a Domain property. Do not commit verification tokens. |
| Google Analytics | Account access not available / live tag not detected | Code supports `NEXT_PUBLIC_GA_MEASUREMENT_ID`, but no public GA4 ID pattern was found in the live `/en` HTML. | Confirm whether GA4 is configured in Hostinger env and whether consent behavior is approved. |
| Google Tag Manager | Account access not available / live tag not detected | Code supports `NEXT_PUBLIC_GTM_ID`, but no public GTM ID pattern was found in the live `/en` HTML. | Choose either direct GA4 or GTM-managed GA4 before enabling tracking to avoid duplicate pageviews. |
| Bing Webmaster Tools | Not available / not confirmed | No connected Bing Webmaster tool or verified account session was available. | Owner must verify access before submitting sitemap or URL inspection requests. |
| Hostinger dashboard | Browser-visible, read-only access partially confirmed | The in-app browser had an open Hostinger deployments page for `silkbeautysalon.online`. Detailed DOM extraction timed out, so deployment details were not changed or reconfigured. | Use hPanel only for verification unless owner explicitly approves a setting change. |
| GitHub repository | Available via Git remote | `origin` is `https://github.com/jytsma-wq/beautysalon.git`; `git ls-remote origin refs/heads/main` returned `665cdf8020c5bf43d58e1068abf5c6fe9df9ea8c`. The GitHub CLI is not installed in this environment. | Use normal GitHub review flow for branch/PR work. Do not push `main` without explicit owner approval. |
| Website production URL | Available | Public route checks against `https://silkbeautysalon.online` succeeded. | Continue using public checks for live SEO QA. |

## Production Source

| Item | Finding |
| --- | --- |
| GitHub repo | `https://github.com/jytsma-wq/beautysalon.git` |
| Production branch candidate | `main` / `origin/main` |
| Current `origin/main` | `665cdf8020c5bf43d58e1068abf5c6fe9df9ea8c` |
| Local `main` | `665cdf8020c5bf43d58e1068abf5c6fe9df9ea8c` |
| Current audit branch | `codex/visibility-readiness-audit` |
| Current audit commit before this doc | `60136e6 docs(seo): add online visibility readiness plan` |
| Hostinger source | Repository docs state Hostinger should use repository `jytsma-wq/beautysalon` and branch `main`. |
| Hostinger build evidence | `docs/DEVOPS.md` says to connect the GitHub repo, use branch `main`, install with `npm install`, build with `npm run build`, and start with `npm start`. `docs/HOSTINGER_DEPLOYMENT.md` also lists branch `main`, with a noted build-command inconsistency of `npm ci && npm run build`. |
| Latest live commit | Not publicly available from the live HTML. No checked commit SHA marker such as `665cdf8`, `60136e6`, `90409c3`, `0f13a58`, or `9132559` was found in the live `/en` HTML. |

Conclusion: production is documented to build from GitHub `origin/main`. The exact live commit cannot be independently proven from public page source because no release marker is exposed.

## Live Website State

Checked on 2026-07-04 from the local audit environment.

| URL | Result |
| --- | --- |
| `https://silkbeautysalon.online/en` | HTTP 200, `text/html; charset=utf-8` |
| `https://silkbeautysalon.online/ka` | HTTP 200, `text/html; charset=utf-8` |
| `https://silkbeautysalon.online/ru` | HTTP 200, `text/html; charset=utf-8` |
| `https://silkbeautysalon.online/tr` | HTTP 200, `text/html; charset=utf-8` |
| `https://silkbeautysalon.online/ar` | HTTP 200, `text/html; charset=utf-8` |
| `https://silkbeautysalon.online/he` | HTTP 200, `text/html; charset=utf-8` |
| `https://silkbeautysalon.online/sitemap.xml` | HTTP 200, `application/xml`, 516 `<loc>` entries |
| `https://silkbeautysalon.online/robots.txt` | HTTP 200, `text/plain`, references `https://silkbeautysalon.online/sitemap.xml` |

Additional route checks:

- `/en/book`: HTTP 200.
- `/en/contact-us`: HTTP 200.
- `/en/beauty-salon-batumi`: HTTP 200.
- `/en/lip-fillers-batumi`: HTTP 200.
- `/en/acne-treatment-batumi`: HTTP 200.
- `/en/nails-batumi`: HTTP 200.
- `/en/lashes-brows-batumi`: HTTP 200.

Sitemap checks:

- Locale roots `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he` are present.
- `/en/book` is present.
- Local SEO routes for lip fillers are present across all six locales.
- `robots.txt` allows crawling and references the sitemap.

Homepage source checks:

- Visible main phone is present.
- WhatsApp contact is present.
- Old placeholder phone `+995 599 123 456` was not found in live `/en` HTML.
- Booking link is present.
- Address text `Zurab Gorgiladze 63` is present.
- One JSON-LD script was found and parsed successfully.
- JSON-LD includes `BeautySalon`, the main phone, and opening-hours data.
- Homepage JSON-LD does not include `aggregateRating` or `review` markup.

## NAP Source Of Truth

Primary source in code: `src/data/site-config.ts`.

| Field | Source-of-truth value | Status |
| --- | --- | --- |
| Business name | Silk Beauty Salon | Confirmed in `siteConfig.name`. |
| Legal/display variant | Silk Beauty Salon Batumi | Present in `siteConfig.legalName`; use only where appropriate. |
| Address | Zurab Gorgiladze 63, Batumi, Georgia | Confirmed in source and live page text. |
| Postal/local detail | Batumi, Adjara 6000, Georgia | Present in `siteConfig.contact`. |
| Main visible phone | `+995 577 34 57 67` | Confirmed in source, messages, live homepage, and JSON-LD. Use as primary NAP phone for listings unless owner approves otherwise. |
| WhatsApp | `+995 577 28 68 55` | Confirmed in source and live homepage. Owner previously corrected this number, so it is treated as owner-approved as a separate WhatsApp channel. Do not make it the primary NAP/listing phone without explicit approval. |
| Website | `https://silkbeautysalon.online` | Confirmed in `siteConfig.url` and production checks. |
| Email | `info@silkbeautysalon.online` | Confirmed in `siteConfig.contact.email`. |
| Booking URL | `https://silkbeautysalon.online/en/book` | English booking route returns HTTP 200. Localized booking routes exist through the locale routing pattern, but should be smoke-tested before publishing localized listing URLs. |
| Opening hours | Monday-Saturday `10:00 - 22:00`; Sunday `11:00 - 22:00` | Confirmed in `siteConfig.businessHours`, footer/contact usage, and JSON-LD. GBP hours were not account-verified in this session. |

## Phone / WhatsApp Consistency Status

Status: mostly consistent, with intentional channel separation.

- Public NAP phone: `+995 577 34 57 67`.
- WhatsApp channel: `+995 577 28 68 55`.
- The WhatsApp number is documented as intentionally different in `docs/MULTILINGUAL_SEO_TOPIC_MAP.md`.
- The live homepage includes both channels.
- The old placeholder `+995 599 123 456` was not found in live `/en` HTML during this audit.
- Public listings should use the main visible phone as the primary phone unless owner explicitly approves a different primary listing number.

## Opening Hours Status

Website source:

- Monday: `10:00 - 22:00`
- Tuesday: `10:00 - 22:00`
- Wednesday: `10:00 - 22:00`
- Thursday: `10:00 - 22:00`
- Friday: `10:00 - 22:00`
- Saturday: `10:00 - 22:00`
- Sunday: `11:00 - 22:00`

Google Business Profile status:

- Not verified in this session because GBP Manager access was not available.
- Do not change or publish GBP hours until the owner confirms the active listing and the current real-world hours.

## Risks

1. Google Business Profile ownership and public profile URL are not confirmed.
2. Google Search Console property access is not confirmed, and the live site currently does not expose a Search Console verification meta tag.
3. Bing Webmaster Tools and Bing Places access are not confirmed.
4. Live production does not expose a commit/release marker, so future live-build verification depends on Hostinger/GitHub dashboard visibility.
5. `docs/DEVOPS.md` and `docs/HOSTINGER_DEPLOYMENT.md` disagree on the install/build command (`npm install` vs `npm ci`). Because the repo intentionally has no `package-lock.json`, `npm ci` would be risky unless Hostinger has a different artifact workflow.
6. `siteConfig` contains staff, qualifications, awards, product-brand, and practitioner claims. Do not copy those into Google/Bing/citation profiles unless the owner confirms evidence.
7. Public search snippets may lag behind the live site and can show stale phone/text until Google recrawls affected URLs.
8. Analytics account configuration is not confirmed. Enabling both direct GA4 and GTM-managed GA4 without coordination can create duplicate pageviews.

## Owner Approvals Required

Before changing public data, get explicit owner approval for:

1. Claiming or editing Google Business Profile.
2. Claiming or editing Bing Places.
3. Publishing primary phone and WhatsApp behavior on external listings.
4. Publishing opening hours on GBP/Bing/citations.
5. Publishing staff names, certifications, qualifications, awards, product brands, or medical/aesthetic claims.
6. Uploading owner-provided photos to GBP/Bing/citations.
7. Requesting or responding to public reviews.
8. Enabling GA4, GTM, ads pixels, or any new tracking IDs.
9. Adding Search Console verification tokens to Hostinger environment variables.
10. Any production deployment or Hostinger setting change.

## Immediate Phase 1 Follow-Ups

1. Owner to confirm whether an existing Google Business Profile exists and who owns it.
2. Owner to confirm the GBP public URL after access is verified.
3. Owner to confirm Google Search Console access or approve verification setup.
4. Owner to confirm Bing Webmaster Tools / Bing Places access.
5. Owner to confirm real-world opening hours match the website.
6. Owner to confirm whether the WhatsApp number should remain a separate channel only.
7. Add a future public release marker only as a separate approved code task.
