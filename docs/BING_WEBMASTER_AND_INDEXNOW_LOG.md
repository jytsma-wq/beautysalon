# Bing Webmaster And IndexNow Log

Date: 2026-07-04
Live check time: 2026-07-04 10:09 Asia/Tbilisi / 06:09 UTC
Phase: 4 - Bing Webmaster Tools and IndexNow
Branch: `codex/visibility-readiness-audit`
Mode: public technical audit plus owner-side setup plan; no Bing account changes

## Phase 4 Execution Update - 2026-07-04 14:07 Asia/Tbilisi

This update attempted the Bing Webmaster Tools setup phase from the current environment.

Result: account-side Bing execution is blocked because no verified Bing Webmaster Tools connector, API session, or authenticated browser session was available. No Bing property was added or verified, no verification method was changed, no sitemap was submitted, no priority URLs were submitted, and no Bing SEO/crawl reports were reviewed.

What was completed instead:

- Rechecked the public sitemap and robots.txt.
- Rechecked the requested priority Bing URL set for HTTP status, sitemap inclusion, noindex, canonical, and hreflang signals.
- Re-scanned the repo for Bing verification files, `msvalidate.01`, IndexNow key files, IndexNow routes/helpers/jobs, and `api.indexnow.org` usage.
- Updated the IndexNow recommendation without implementing it.

### Current Verification Status

| Item | Status | Evidence / note |
| --- | --- | --- |
| Bing Webmaster Tools access | Not confirmed / unavailable | No callable Bing Webmaster tool or verified dashboard session was available. |
| Site property `https://silkbeautysalon.online` | Not confirmed | Requires Bing Webmaster Tools access. |
| Site verification | Not performed | No owner-approved verification method was executed. |
| Verification codes exposed | No | No Bing verification token, XML file content, DNS value, or account detail was read or committed. |
| Sitemap submitted in Bing | No | Requires verified Bing property. |
| Priority URLs submitted in Bing | No | Requires verified Bing property. |
| SEO/crawl/index reports reviewed | No | Requires verified Bing property. |

### Current Public Sitemap And Robots Status

| Check | Result |
| --- | --- |
| `https://silkbeautysalon.online/sitemap.xml` HTTP | 200 |
| Sitemap `<loc>` count | 516 |
| `https://silkbeautysalon.online/robots.txt` HTTP | 200 |
| Robots references sitemap | Yes |
| Robots blocks all crawling | No |

### Current Priority URL Submission Readiness

This table is based on public live checks, not private Bing Webmaster Tools data.

| Priority URL | HTTP | In sitemap | Noindex | Canonical | Hreflang | Bing action after verified access |
| --- | ---: | --- | --- | --- | ---: | --- |
| `https://silkbeautysalon.online/en` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/botox-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/dermal-fillers-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/skin-treatment-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/nails-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |
| `https://silkbeautysalon.online/en/pricelist` | 200 | Yes | No | Missing | 0 | Hold. Do not manually submit until canonical/hreflang is live. |
| `https://silkbeautysalon.online/en/book` | 200 | Yes | No | Self | 7 | Submit after sitemap if needed. |

### Current Crawl / Indexing Findings

Private Bing crawl/indexing findings are unavailable until the site is verified in Bing Webmaster Tools.

| Report area | Current status |
| --- | --- |
| Sitemaps report | Pending Bing access |
| URL Inspection | Pending Bing access |
| Indexing status | Pending Bing access |
| Crawl errors | Pending Bing access |
| SEO reports | Pending Bing access |
| Backlinks | Pending Bing access |
| Keyword/search performance | Pending Bing access |

### Current IndexNow Check

Current implementation status: not implemented.

Evidence from repo scan:

- No IndexNow key file found.
- No IndexNow API submission code found.
- No `api.indexnow.org` usage found.
- No IndexNow route/helper/job found.
- No Bing verification XML file found.
- No `msvalidate.01` value found in source.

Recommendation remains unchanged: do not implement IndexNow yet. Consider it later as a separate owner-approved code task after Bing Webmaster Tools is verified and the sitemap/URL submission baseline is stable.

## Safety Rules Applied

- No Bing Webmaster Tools property was created or modified in this session.
- No Bing verification token, `msvalidate.01` meta value, XML verification file, DNS record, or account detail was committed.
- No sitemap was submitted to Bing because verified Bing Webmaster Tools access was not available.
- No individual URLs were submitted to Bing because verified Bing Webmaster Tools access was not available.
- No IndexNow key was generated, stored, committed, or uploaded.
- No IndexNow route, key file, dependency, job, or submission code was added.
- No unfinished, non-canonical, or questionable URL was submitted.

## Access And Verification Status

| Item | Status | Evidence / notes | Next action |
| --- | --- | --- | --- |
| Bing Webmaster Tools access | Not available / not confirmed | No connected Bing Webmaster account tool or verified dashboard session was available in this environment. | Owner must sign in to Bing Webmaster Tools and confirm access. |
| Site property for `https://silkbeautysalon.online` | Not confirmed | No account-side property list was available. | Add or import the site after owner login. |
| Site verification | Not performed | Repo and live checks found no committed Bing verification token or IndexNow key material. | Prefer importing the verified Google Search Console property if available, or use an owner-approved verification method. |
| Sitemap submission | Not performed | Sitemap is publicly healthy, but Bing account access was not available. | Submit `https://silkbeautysalon.online/sitemap.xml` after verification. |
| URL submission | Not performed | Manual URL submission requires a verified Bing property. | Submit only canonical-ready priority URLs after verification. |
| Bing crawl/indexing reports | Not reviewed | Reports require Bing Webmaster Tools access. | Review indexing, crawl errors, SEO reports, backlinks, and keyword/search performance after verification. |

Recommended verification order:

1. Sign in to Bing Webmaster Tools with the owner-approved Microsoft account.
2. Import the verified Google Search Console property if Search Console is already verified and owner-approved.
3. If import is not available, choose one owner-approved verification method:
   - DNS record through Hostinger DNS.
   - XML verification file.
   - HTML meta tag.
4. Do not commit token values or screenshots that expose account details.

Official Bing guidance states that Bing Webmaster Tools can import verified sites and sitemaps from Google Search Console, avoiding duplicate manual verification when the Google property is already verified.

## Public Site Readiness For Bing

Checked public endpoints:

| URL | HTTP | Finding |
| --- | ---: | --- |
| `https://silkbeautysalon.online/sitemap.xml` | 200 | Public XML sitemap available. |
| `https://silkbeautysalon.online/robots.txt` | 200 | Allows crawling and references `https://silkbeautysalon.online/sitemap.xml`. |

`robots.txt` public signal:

```txt
User-Agent: *
Allow: /

Host: https://silkbeautysalon.online
Sitemap: https://silkbeautysalon.online/sitemap.xml
```

Repo checks:

- No existing Bing verification meta tag was found in source.
- No Bing verification XML file was found in source.
- No `msvalidate.01` token was found in source.
- No IndexNow key file or IndexNow implementation was found in source.

## Priority URL Submission Readiness

This table is based on public live checks, not private Bing Webmaster Tools reports.

| Priority URL | HTTP | In sitemap | Live canonical | Live hreflang | Submit manually now? | Notes |
| --- | ---: | --- | --- | --- | --- | --- |
| `https://silkbeautysalon.online/en` | 200 | Yes | Self | 7 alternates | Yes | Homepage is ready. |
| `https://silkbeautysalon.online/en/botox-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/dermal-fillers-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/lip-fillers-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/skin-treatment-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/acne-treatment-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/nails-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/lashes-brows-batumi` | 200 | Yes | Self | 7 alternates | Yes | Ready. |
| `https://silkbeautysalon.online/en/pricelist` | 200 | Yes | Missing on live | Missing on live | No | Do not manually submit until the local pricelist canonical/hreflang fix is deployed and verified live. |
| `https://silkbeautysalon.online/en/book` | 200 | Yes | Self | 7 alternates | Yes | Ready. |

Submission rule:

- Submit the sitemap first.
- Use manual URL submission only for high-priority canonical URLs after major releases or fixes.
- Do not spam repeated submissions.
- Do not submit `/en/pricelist` until the canonical/hreflang fix from this branch is live.

## Bing Reports To Review After Access

After the site is verified, review and record:

| Bing area | What to check | Current status |
| --- | --- | --- |
| Sitemaps | Sitemap fetch status, discovered URLs, processing errors. | Pending account access. |
| URL Inspection | Index status for homepage and priority service pages. | Pending account access. |
| Indexing status | Indexed/not indexed pages and reasons. | Pending account access. |
| Crawl errors | 4xx, 5xx, redirects, blocked resources, timeout patterns. | Pending account access. |
| SEO reports | Missing titles/descriptions, multiple H1, image alt warnings, canonical issues. | Pending account access. |
| Backlinks | Existing referring domains and anchor text. | Pending account access. |
| Keyword/search performance | Queries for Batumi beauty/aesthetic service intents. | Pending account access. |

## IndexNow Status

Current implementation status: not implemented.

Evidence:

- No IndexNow route, helper, scheduled job, API submission code, or key file was found in the repo.
- No public IndexNow key file was identified from repo file names.
- No `api.indexnow.org` usage was found in source.

## IndexNow Recommendation

Recommendation: add IndexNow later as a separate owner-approved implementation after Bing Webmaster Tools is verified and the current Search Console/Bing setup is stable.

Reasoning:

- The site is a custom Next.js site, not a CMS where IndexNow is automatically enabled.
- The site has release-driven updates, multilingual local SEO pages, and occasional SEO fixes, so notifying participating search engines about changed URLs can be useful.
- It is not urgent because the sitemap and robots file are already healthy, and manual Bing URL submission can cover major releases.
- It must be implemented carefully because IndexNow requires a key file proving host ownership, and that key must not be exposed in commits, logs, or public reports beyond the required public key-file mechanism.

Important limits from official documentation:

- IndexNow notifies participating search engines of changed URLs; it does not guarantee indexing.
- The key file must prove ownership of the host.
- Submissions should be for URLs that are added, updated, or deleted after IndexNow is adopted, not old unchanged URLs.
- Excessive submission can return `429 Too Many Requests`.

## Separate IndexNow Implementation Plan

Do not execute this plan without explicit owner approval.

1. Confirm Bing Webmaster Tools is verified for `https://silkbeautysalon.online`.
2. Generate a dedicated IndexNow key.
3. Store the key outside git, for example as a Hostinger environment variable such as `INDEXNOW_KEY`.
4. Serve the required UTF-8 key file from the site root:
   - Preferred URL pattern: `https://silkbeautysalon.online/<INDEXNOW_KEY>.txt`
   - File body: the key only.
5. Avoid committing the real key or generated key file to the repo.
6. Add a small server-only submission helper that sends canonical changed URLs to `https://api.indexnow.org/indexnow`.
7. Submit only canonical URLs from `https://silkbeautysalon.online`.
8. Include `host`, `key`, `keyLocation`, and `urlList` in bulk POST submissions.
9. Rate-limit submissions and avoid repeated submission of unchanged pages.
10. Log only non-secret metadata:
    - count of URLs submitted
    - status code
    - non-sensitive error category
    - timestamp
11. Do not log the IndexNow key, key file contents, or account data.
12. Add tests for:
    - key file route disabled when env var is missing
    - key file route returns plain text when configured
    - submission payload contains only canonical URLs
    - no duplicate URLs in submission payload
    - failure status codes are handled without crashing the app
13. Run full verification before any production merge.

## Owner Approvals Needed

1. Owner approval to sign in to or connect Bing Webmaster Tools.
2. Owner approval for the Bing verification method if the site is not imported from Google Search Console.
3. Owner approval before adding any DNS TXT record, HTML verification file, or verification meta tag.
4. Owner approval before submitting priority URLs manually.
5. Owner approval before creating or exposing an IndexNow key file.
6. Owner approval before implementing automated IndexNow submissions.
7. Owner approval before adding or editing Bing Places listing data.

## Next Action

1. Confirm owner access to Bing Webmaster Tools.
2. Verify `https://silkbeautysalon.online`, preferably by importing the verified Google Search Console property if available.
3. Submit `https://silkbeautysalon.online/sitemap.xml`.
4. Submit the canonical-ready priority URLs listed above, excluding `/en/pricelist` until the local metadata fix is live.
5. Review Bing crawl/indexing/SEO reports after Bing has processed the sitemap.
6. Decide separately whether to implement IndexNow.

## References

- Bing Webmaster Tools IndexNow setup: https://www.bing.com/indexnow/getstarted
- IndexNow protocol documentation: https://www.indexnow.org/documentation
- Bing Webmaster Tools import from Google Search Console: https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools
