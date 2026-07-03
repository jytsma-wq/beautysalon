# Newsletter CSRF Staging Validation

Date: 2026-07-03

Branch: `fix/newsletter-csrf-staging-validation`

Base production commit: `9132559e778da5bc777cf341510b5ef25a8711c1`

Production status at branch start:

- `https://silkbeautysalon.online/en` returned 200.
- `https://silkbeautysalon.online/api/health` returned 200.
- The footer "Join Our World" newsletter form still returned `403 {"error":"Invalid CSRF token"}`.

No production deployment or push to `main` was performed for this branch.

## Root Cause

The footer newsletter form in `src/components/layout/GaldermaFooter.tsx` read a CSRF token from:

```ts
document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? ''
```

In production, `src/app/layout.tsx` only renders that meta tag when an `X-CSRF-Token` request header exists. The current middleware does not mint or forward a CSRF token to normal page requests, so the meta token is normally absent.

The footer then posted to `/api/newsletter` with an empty `X-CSRF-Token`. The newsletter route correctly called `verifyCsrfToken(request)` and rejected the missing/invalid token with 403.

## Fix Direction

This branch uses the safer client-side token flow:

1. The footer fetches `/api/csrf` immediately before newsletter submission.
2. That route returns `{ token }` and sets the matching `csrf-token` cookie.
3. The footer posts to `/api/newsletter` with:
   - `credentials: 'same-origin'`
   - `X-CSRF-Token: token`
   - JSON body containing `_csrf: token`
   - the current locale

The newsletter API remains strict. No same-origin no-token bypass was added.

## Files Changed

- `src/components/layout/GaldermaFooter.tsx`
- `src/lib/csrf-client.ts`
- `src/components/layout/__tests__/GaldermaFooter.test.tsx`
- `src/app/api/__tests__/newsletter.test.ts`
- `docs/NEWSLETTER_CSRF_STAGING_VALIDATION.md`
- `docs/CHANGELOG.md`

## Why This Avoids The Weaker Bypass

Commit `4562ac3` allowed same-origin JSON requests without a verified CSRF token to continue. That fixed the symptom but weakened the route-level CSRF contract.

This branch keeps `/api/newsletter` unchanged:

- Missing token remains 403.
- Same-origin no-token requests remain 403.
- Header/body token without the matching cookie remains 403 through `verifyCsrfToken`.
- Valid cookie + token reaches normal validation/processing.

## Local Test Coverage

Added footer coverage:

- With no CSRF meta tag, footer submission first calls `/api/csrf`.
- The newsletter POST includes the fresh token in `X-CSRF-Token`.
- The newsletter POST includes `_csrf` in the JSON body.
- The newsletter POST includes `credentials: 'same-origin'`.
- The current locale is included in the newsletter payload.

Added newsletter API coverage:

- Missing CSRF token returns 403.
- Same-origin no-token request returns 403.
- Token-without-cookie verification failure returns 403.
- Valid CSRF verification reaches normal email validation for an invalid email and returns 400, not 403.

## Staging Or Preview Validation Commands

Use a staging or preview URL only. Do not run these against production until staging passes and the owner explicitly approves production validation.

Set:

```bash
BASE="https://<staging-or-preview-host>"
```

Fetch a CSRF token and cookie:

```bash
curl -sS -D /tmp/csrf.headers -c /tmp/cookies.txt \
  "$BASE/api/csrf" \
  -o /tmp/csrf.json

TOKEN="$(node -pe "JSON.parse(require('fs').readFileSync('/tmp/csrf.json','utf8')).token")"
```

Expected: `/tmp/csrf.json` contains a non-empty `token`, and `/tmp/cookies.txt` contains `csrf-token`.

Valid cookie + header/body token with intentionally invalid email:

```bash
curl -sS -i -b /tmp/cookies.txt \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: $TOKEN" \
  --data "{\"email\":\"not-an-email\",\"_csrf\":\"$TOKEN\",\"locale\":\"en\"}" \
  "$BASE/api/newsletter"
```

Expected: `400` with `Invalid email`, not `403`. This avoids creating a subscriber or sending email.

No cookie/token:

```bash
curl -sS -i \
  -H "Content-Type: application/json" \
  --data '{"email":"not-an-email","locale":"en"}' \
  "$BASE/api/newsletter"
```

Expected: `403` with `Invalid CSRF token`.

Token but no cookie:

```bash
curl -sS -i \
  -H "Content-Type: application/json" \
  -H "X-CSRF-Token: $TOKEN" \
  --data "{\"email\":\"not-an-email\",\"_csrf\":\"$TOKEN\",\"locale\":\"en\"}" \
  "$BASE/api/newsletter"
```

Expected: `403` with `Invalid CSRF token`.

## Hostinger 503 Investigation

Read-only Hostinger deployment overview was available in the in-app browser.

Deployment overview findings:

- `9132559e` (`Revert "fix(forms): allow same-origin newsletter fallback"`) showed `Completed` and `Current`.
- `4562ac37` (`fix(forms): allow same-origin newsletter fallback`) showed `Completed`.
- `39a8ce5a` (`Revert "Reapply "fix(forms): refresh csrf for newsletter signup""`) showed `Completed`.
- `079c6a40` (`Reapply "fix(forms): refresh csrf for newsletter signup"`) showed `Completed`.
- `549cfbcb` (`Revert "fix(forms): refresh csrf for newsletter signup"`) showed `Completed`.

The overview did not expose build/runtime error text. The Hostinger runtime logs page loaded in the browser, but the readable DOM text was empty in this environment, so detailed runtime errors could not be confirmed from here.

No evidence was available from the readable Hostinger UI for:

- Node version mismatch
- npm install failure
- Next build failure
- memory/SIGKILL/OOM
- missing `.next/standalone/server.js`
- Prisma generation/runtime errors
- missing environment variables
- port binding failure
- process restart loop
- Sentry build/plugin errors

This does not prove those issues were absent; it only means the accessible UI did not expose the needed details.

## Manual Hostinger Operator Checklist

Before any production deployment, check Hostinger manually for the failed or unstable commits:

- `bc9ad6c73d6203c273ce84c914c8de52e6b3f799`
- `079c6a405fae77394c749c565a93eba32d5b1b3b`
- `4562ac3757483439fc8c7e1d09c114fb8f25e81e`
- `9132559e778da5bc777cf341510b5ef25a8711c1`

For each deployment, inspect:

- Build log exit code.
- Node version used by Hostinger.
- Install command and whether a missing lockfile affected the install.
- Build command and whether `scripts/hostinger-build.cjs` completed.
- Whether `.next/standalone/server.js` exists after build.
- Runtime log immediately after deploy.
- Any process restart loop.
- Memory/OOM/SIGKILL messages.
- Prisma generation/runtime messages.
- Missing `DATABASE_URL`, SMTP, or other required env var errors.
- Sentry plugin/build messages.
- Port binding or startup command errors.

## PR Summary Draft

Title:

`fix(forms): submit newsletter with fresh CSRF token`

Body:

### Root Cause

The footer newsletter form depended on a missing `<meta name="csrf-token">` and submitted an empty token to `/api/newsletter`, causing the strict newsletter route to return 403.

### Files Changed

- `src/components/layout/GaldermaFooter.tsx`
- `src/lib/csrf-client.ts`
- `src/components/layout/__tests__/GaldermaFooter.test.tsx`
- `src/app/api/__tests__/newsletter.test.ts`
- `docs/NEWSLETTER_CSRF_STAGING_VALIDATION.md`
- `docs/CHANGELOG.md`

### Security Posture

This keeps `/api/newsletter` strict and avoids the earlier same-origin no-token bypass. The client now fetches a fresh cookie-bound token from `/api/csrf` immediately before submitting the newsletter form.

### Test Results

Final local verification results on 2026-07-03:

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm test` passed: 43 test files passed, 1 skipped; 332 tests passed, 12 skipped.
- `npm run validate:i18n` passed. Existing Georgian extra-key note remains: 9 extra keys, no missing keys.
- `npm run build` passed. Next.js generated 513 static pages and completed standalone build output.

### Staging Validation

Run the curl commands in this document against a staging/preview host only. Production deploy should wait until staging/preview validation passes.

### Hostinger 503 Findings

Hostinger deployment overview showed the relevant commits as `Completed`, but detailed runtime logs were not readable from this environment. Manual Hostinger runtime log inspection is still required before production deployment.

### Production Deployment Warning

Do not deploy this branch to production until staging/preview validation passes and the owner explicitly approves the production release.
