# Database Documentation

Silk Beauty Salon uses MySQL through Prisma. Production is intended to use a Hostinger MySQL database managed from hPanel.

## Required Environment Variables

Set these values in `.env.local` for development and in the Hostinger app environment for production:

```env
DATABASE_URL="mysql://user:password@host:3306/silkbeauty"
DIRECT_DATABASE_URL="mysql://user:password@host:3306/silkbeauty"
```

`DATABASE_URL` is used by the app. `DIRECT_DATABASE_URL` is used by Prisma migrations.

## Local Setup

1. Install MySQL 8 or use a managed MySQL database.
2. Create the database:

```bash
mysql -u root -p -e "CREATE DATABASE silkbeauty CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

3. Add the connection strings to `.env.local`.
4. Generate the Prisma client and run migrations:

```bash
npm run db:generate
npm run db:migrate:dev
```

## Production Setup

Use the production database connection string provided by the hosting/database provider. In Hostinger, add the values as app environment variables before deploying:

```env
DATABASE_URL="mysql://..."
DIRECT_DATABASE_URL="mysql://..."
```

Run migrations during deployment or manually from a trusted environment:

```bash
npm run db:migrate
```

## Backup and Restore

Use Hostinger hPanel backups for production MySQL. If you add custom database backup tooling, test it against the active MySQL target before scheduling it.

## Health Checks

Use these endpoints after deployment:

- `/api/health` for a lightweight application health check.
- `/api/health/db` for database connectivity and table checks.

## Useful Commands

```bash
npm run db:generate
npm run db:migrate:dev
npm run db:migrate
npm run db:studio
npx prisma migrate status
npx prisma validate
```
