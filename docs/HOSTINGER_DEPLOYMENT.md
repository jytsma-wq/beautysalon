# Hostinger Deployment Runbook

This project is ready for Hostinger managed Node.js hosting. The public domain is not live until Hostinger serves this app instead of the parked-domain page.

## Current Production Target

- Domain: `silkbeautysalon.online`
- Repository: `https://github.com/jytsma-wq/beautysalon`
- Branch: `main`
- Runtime: Node.js 20 or newer
- Build command: `npm ci && npm run build`
- Start command: `npm run start`
- App entrypoint: `.next/standalone/server.js`
- Android APK download: `https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk`
- ZIP fallback package: `https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon-hostinger.zip`

## Required Hostinger Environment Variables

Set these in the Hostinger Node.js app environment before starting the app:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://silkbeautysalon.online
NEXT_PUBLIC_ANDROID_APK_URL=https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk
DATABASE_URL=<production-postgres-url>
DIRECT_DATABASE_URL=<production-postgres-direct-url>
CONTACT_EMAIL=info@silkbeautysalon.online
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@silkbeautysalon.online
SMTP_PASSWORD=<hostinger-mailbox-password>
SMTP_FROM=Silk Beauty Salon <info@silkbeautysalon.online>
```

## Deploy From GitHub

1. Open Hostinger hPanel.
2. Go to Websites.
3. Add a Node.js Web App, or open the existing Node.js app if one already exists.
4. Choose Import Git Repository.
5. Select `jytsma-wq/beautysalon`.
6. Select branch `main`.
7. Use Node.js 20 or newer.
8. Set the build command to `npm ci && npm run build`.
9. Set the start command to `npm run start`.
10. Add the environment variables above.
11. Deploy.
12. Connect `silkbeautysalon.online` and `www.silkbeautysalon.online` to the Node.js app.

## Deploy From ZIP Fallback

If Hostinger cannot access GitHub while GitHub Actions are locked, upload the prepared ZIP package from GitHub Releases instead. The ZIP is not committed to the repository.

1. In hPanel, choose the Node.js Web App file-upload or ZIP-upload deployment path.
2. Download `silk-beauty-salon-hostinger.zip` from `https://github.com/jytsma-wq/beautysalon/releases/tag/mobile-artifacts-2026-06-12`.
3. Upload that ZIP package to Hostinger.
4. Use the same Node.js version, build command, start command, and environment variables listed above.
5. Deploy and connect the domain to the Node.js app.

## Database Migration

After the production database URL is set, run Prisma migrations once:

```bash
npm run db:migrate
```

This applies the booking slot uniqueness constraint used by the internal booking system.

## Verification

Run these checks after Hostinger reports the app is deployed and the domain is connected:

```bash
curl -I https://silkbeautysalon.online/api/health
curl -I https://silkbeautysalon.online/en/download
curl -I https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk
```

Expected results:

- `/api/health` returns HTTP 200 JSON.
- `/en/download` returns HTTP 200 HTML for the Silk download page.
- The GitHub Release APK returns HTTP 200 with `Content-Type: application/vnd.android.package-archive` or `application/octet-stream`.
- The page title must not be `Parked Domain name on Hostinger DNS system`.

## Current External Blocker

Final production cutover still requires manual action in Hostinger hPanel: connect `silkbeautysalon.online` to this Node.js app and deploy either from `jytsma-wq/beautysalon` branch `main` or from the release ZIP. If GitHub Actions show `The job was not started because your account is locked due to a billing issue`, this is a GitHub account state and not an application-code failure; unlock billing or use Hostinger's GitHub import/ZIP fallback from hPanel.
