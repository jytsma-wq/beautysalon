# Production Live Mismatch Audit

Date: 2026-07-03 11:00 +04:00

Production URL checked: `https://silkbeautysalon.online`

Expected local integration branch: `integration/conversion-seo-performance`

Expected local head commit: `029cc66ef13ac150b756181b82023acd16bfad53`

Expected head subject: `docs(integration): verify conversion seo performance branch`

## Scope

This is an investigation-only audit. No deployment, dependency update, application code change, content change, or stash cleanup was performed.

The live QA immediately before this audit found that the production site is healthy at route level, but does not fully match the expected integration branch.

## Local Git State

- Repository root: `F:/OneDrive/Documents/integration Silk beauty salon/output/production-source/beautysalon`
- Current local branch: `integration/conversion-seo-performance`
- Current local head: `029cc66`
- Local working tree status before documentation: clean
- `stash@{0}` exists and was not dropped:
  - `stash@{0}: On conversion/visit-us-map: wip: visit us map section`

## Branch And Commit Checks

Confirmed:

- `integration/conversion-seo-performance` exists locally.
- Commit `029cc66` exists locally.
- Commit `029cc66` is contained by local `integration/conversion-seo-performance`.
- Commit `029cc66` is not contained by local `main`.
- Commit `029cc66` is not contained by `origin/main`.

Production branch candidates found locally:

- `main`: `38cc074` (`Fix localized condition slugs`)
- `origin/main`: `e57b8f6` (`fix(mail): support encoded smtp password`)

No local or tracked branch named `master`, `production`, or `hostinger` exists.

Remote configuration:

- Remote: `origin`
- URL: `https://github.com/jytsma-wq/beautysalon.git`
- Remote HEAD: `main`
- Tracked remote branch: `origin/main`

Remote visibility check:

- `origin/main` exists at `e57b8f6`.
- No remote branch named `integration/conversion-seo-performance` was found.
- The expected integration commit `029cc66` was not found on the remote by `git ls-remote`.

## Production Branch Candidate

The strongest production branch candidate is `origin/main`.

Reasons:

- `docs/DEVOPS.md` says to use repository `https://github.com/jytsma-wq/beautysalon` and branch `main`.
- `docs/HOSTINGER_DEPLOYMENT.md` lists current production branch as `main`.
- Git remote HEAD is `main`.
- Hostinger live behavior matches `origin/main` more closely than the integration branch.

## Integration Versus Production Candidate

Command basis:

- `git log --oneline --no-merges origin/main..integration/conversion-seo-performance`
- `git log --oneline --no-merges integration/conversion-seo-performance..origin/main`

Commits present in integration but missing from `origin/main`:

- `e99cd1d` - `feat(home): add popular treatment prices section`
- `44ebfe5` - `docs(i18n): audit translation coverage`
- `cd5ed5f` - `feat(testimonials): add credibility metadata fallbacks`
- `c510215` - `feat(seo): add compliant beautysalon json-ld`
- `7575a12` - `feat(conversion): add mobile sticky cta`
- `a592f0b` - `feat(conversion): add visit us map section`
- `dee7138` - `perf(hero): tune homepage LCP image loading`
- `029cc66` - `docs(integration): verify conversion seo performance branch`

Notes:

- The standalone hero branch commit is `6604a01`, but the integration branch contains the hero work as `dee7138`.
- `origin/main` is an ancestor of the integration branch.

Commits present in `origin/main` but missing from integration:

- None found.

Conclusion:

- The integration branch has not been merged into the production branch candidate `origin/main`.

## File-Level Evidence

`origin/main` contains markers matching the live site:

- Older sticky mobile CTA with `Book + phone + WhatsApp`.
- Hero image sizing at `(max-width: 1024px) 100vw, 55vw`.
- Homepage LocalBusiness/BeautySalon JSON-LD exists.
- No dedicated `VisitUsSection` component in the homepage tree.
- No homepage `Popular treatments & starting prices` translation section.

`integration/conversion-seo-performance` contains markers missing from live:

- `src/components/sections/VisitUsSection.tsx`
- `data-sticky-mobile-cta-safe-zone="true"`
- `messages/*` homepage `popularTreatments` copy
- `fetchPriority={index === 0 ? 'high' : 'low'}`
- `src/lib/location-links.ts`
- Visit Us tests and sticky CTA tests

## Hostinger Deployment Configuration Found In Repo

Sources inspected:

- `docs/DEVOPS.md`
- `docs/HOSTINGER_DEPLOYMENT.md`
- `.github/workflows/ci.yml`
- `package.json`
- `scripts/hostinger-build.cjs`
- `next.config.ts`

Documented deployment target:

- Provider: Hostinger managed Node.js app
- Domain: `silkbeautysalon.online`
- Repository: `https://github.com/jytsma-wq/beautysalon`
- Branch: `main`
- Project root: repository root
- Node version: Node.js 20 or newer
- Build command in `docs/DEVOPS.md`: `npm run build`
- Build command in `docs/HOSTINGER_DEPLOYMENT.md`: `npm ci && npm run build`
- Start command in `docs/DEVOPS.md`: `npm start`
- Start command in `docs/HOSTINGER_DEPLOYMENT.md`: `npm run start -- -p $PORT`
- Output directory in `docs/HOSTINGER_DEPLOYMENT.md`: `.next`
- Next.js output mode in `next.config.ts`: `standalone`
- Actual package build script: `node scripts/hostinger-build.cjs`
- Actual package start script: `node .next/standalone/server.js`

Important configuration note:

- This checkout does not include `package-lock.json`.
- Therefore a literal `npm ci && npm run build` command would fail in this checkout unless Hostinger has a lockfile from another source or uses a different install/build command.
- Because the live app is running, Hostinger is likely using `npm install`/`npm run build`, a cached dependency install, or a manually uploaded artifact. This does not explain the feature mismatch by itself; branch/source mismatch remains the primary cause.

## Live Production Fingerprints

Public checks performed:

- `https://silkbeautysalon.online/en`
- `https://silkbeautysalon.online/api/health`
- `https://silkbeautysalon.online/api/health/db`
- `https://silkbeautysalon.online/api/v1/health`
- `https://silkbeautysalon.online/sitemap.xml`

Observed live headers:

- `platform: hostinger`
- `panel: hpanel`
- `server: hcdn`
- `x-hcdn-cache-status: DYNAMIC`
- Homepage cache control: `public, max-age=0, s-maxage=60, must-revalidate`

Observed live health data:

- `/api/health` returns `status: ok`.
- `/api/health/db` returns database-backed booking health as `healthy`.
- `/api/v1/health` exposes package version `0.2.0`, but not a commit SHA.

Observed live sitemap fingerprint:

- `lastmod` around `2026-07-03T06:41Z`

Interpretation:

- Hostinger is serving a recent build.
- The live response is dynamic through Hostinger CDN, not an obviously stale long-lived static cache.
- The recent build still lacks integration-only source markers, so CDN/browser cache is unlikely to be the root cause.

## Public Release Marker Check

No reliable public commit SHA, branch name, build ID, or release marker was found.

Existing public marker:

- `/api/v1/health` exposes package version `0.2.0`.

Limitation:

- Package version is not enough to distinguish `origin/main` from `integration/conversion-seo-performance`, because both can share the same package version.

Minimal safe future marker proposal:

- Set `NEXT_PUBLIC_APP_VERSION` during controlled builds to a non-secret value such as `029cc66` or `2026-07-03.029cc66`.
- Surface it in `/api/v1/health` and optionally a non-visible `<meta name="app-version" content="...">`.
- Do not expose secrets, environment details, database names, server usernames, or private paths.
- Prefer a short public Git SHA over a full deployment log.

## Live Findings Mapped To Branch Evidence

The live findings align with `origin/main` or a build very close to it:

- Live missing homepage pricing section: matches `origin/main`.
- Live missing dedicated Visit Us/map section: matches `origin/main`.
- Live sticky CTA is older `Book + phone + WhatsApp`: matches `origin/main`.
- Live testimonial update is only partial: matches older homepage code more closely than integration.
- Live hero LCP work is only partial: matches `origin/main` hero sizing more closely than integration.
- Live BeautySalon JSON-LD exists: already present before the full integration branch.
- Live SEO-heavy `Search phrases this page answers` still appears on local SEO pages: not removed by the integration branch.
- Live WhatsApp uses `995577286855`: matches shared `siteConfig.contact.whatsappPhone`, while visible phone uses `+995 577 34 57 67`.
- Old placeholder `+995 599 123 456` exists in Arabic serialized translation data, but was not visible in rendered route text after excluding script payloads.

## Likely Root Cause

The live Hostinger app is not built from local commit `029cc66`.

Most likely cause:

1. Hostinger is configured to deploy GitHub branch `main`.
2. GitHub `main` is currently `e57b8f6`.
3. The expected integration branch and commit are local-only and not available on GitHub.
4. Therefore Hostinger cannot build `029cc66` through its documented GitHub deployment path.

Secondary possibilities:

- A manual ZIP/artifact upload was used instead of GitHub, but the uploaded artifact appears to match `origin/main`-era code, not `029cc66`.
- Hostinger deployment cache may have reused dependencies/build artifacts, but this is not the primary issue because server-rendered HTML lacks integration-only components.
- Hostinger CDN is serving dynamic responses with short shared cache, so stale CDN cache is not the likely root cause.
- A different project root or output directory is possible only if hPanel settings differ from docs, but the live Next.js app structure, API routes, and headers are consistent with this repository.

## Exact Next Action To Make Live Match Integration

No deployment was performed during this audit.

To make live match integration in a later controlled action:

1. Keep `stash@{0}` until explicitly resolved.
2. Preserve the production source and Hostinger backup first.
3. Merge `integration/conversion-seo-performance` into the actual production branch `main` locally.
4. Reconcile the production-only mail commit already on `origin/main` if needed. In the current local graph, `origin/main` is already an ancestor of integration, so no production commits are missing from integration.
5. Push the reviewed production branch to GitHub `main`, or explicitly configure Hostinger to build a reviewed branch that contains `029cc66`.
6. Trigger Hostinger only with explicit owner approval.
7. Verify a public release marker after deployment so the live build can be tied back to a specific commit.

## Stash Status

`stash@{0}` should still be kept.

Reason:

- Live production does not yet match the integration branch.
- The stash may still be needed as an independent recovery reference for Visit Us work until the integration branch is actually reflected in production or superseded by a verified commit.

## Investigation Conclusion

The mismatch is a source/build selection problem, not a route-health problem.

The live site is healthy, but it appears to be built from `origin/main` at or near `e57b8f6`, while the expected integrated work lives only on local `integration/conversion-seo-performance` at `029cc66`.

No deployment should be attempted until the owner explicitly approves which branch or commit Hostinger should serve.
