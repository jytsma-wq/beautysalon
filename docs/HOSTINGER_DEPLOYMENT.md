# Hostinger Deployment Runbook

This project is ready for Hostinger managed Node.js hosting. The public domain is not live until Hostinger serves this app instead of the parked-domain page.

## Current Production Target

- Domain: `silkbeautysalon.online`
- Repository: `https://github.com/jytsma-wq/beautysalon`
- Branch: `main`
- Runtime: Node.js 20 or newer
- Build command: `npm ci && npm run build`
- Start command: `npm run start -- -p $PORT`
- App entrypoint: `.next/standalone/server.js`
- Android APK download: `https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk`
- ZIP fallback package: `https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon-hostinger.zip`

## Required Hostinger Environment Variables

Set these in the Hostinger Node.js app environment before starting the app:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://silkbeautysalon.online
NEXT_PUBLIC_ANDROID_APK_URL=https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk
DATABASE_URL=mysql://<database-user>:<database-password>@<database-host>:3306/<database-name>
DIRECT_DATABASE_URL=mysql://<database-user>:<database-password>@<database-host>:3306/<database-name>
BOOKING_DATABASE_ENABLED=1
# Optional but recommended fallback path if MySQL is temporarily unavailable:
# BOOKING_STORAGE_DIR=/home/<hostinger-user>/silk-booking-storage
CONTACT_EMAIL=info@silkbeautysalon.online
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@silkbeautysalon.online
SMTP_PASSWORD=<hostinger-mailbox-password>
SMTP_FROM=info@silkbeautysalon.online
API_SECRET_KEY=<secure-random-secret-at-least-32-characters>
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
9. Set the start command to `npm run start -- -p $PORT`.
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

Create a Hostinger MySQL database in hPanel, then use its credentials for both `DATABASE_URL` and `DIRECT_DATABASE_URL`.
Set `BOOKING_DATABASE_ENABLED=1` so the internal booking system uses MySQL in production. If this is omitted or set to any value other than `1`, the app deliberately uses the local booking fallback store instead.

For extra resilience, create a writable private directory on Hostinger and set `BOOKING_STORAGE_DIR` to it. The app writes `bookings.json` there only when MySQL is disabled or temporarily unavailable.

After the production database URL is set, run Prisma migrations once:

```bash
npm run db:migrate
```

This creates the application tables and applies the booking slot uniqueness constraint used by the internal booking system.

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

## Database-Backed Verification

After migrations and environment variables are applied, verify:

```bash
curl -I https://silkbeautysalon.online/api/health/db
curl -I "https://silkbeautysalon.online/api/bookings?date=2026-06-13"
```

Expected results:

- `/api/health/db` returns HTTP 200 when MySQL is reachable.
- `/api/bookings?date=...` returns HTTP 200 JSON with `bookedSlots`.
