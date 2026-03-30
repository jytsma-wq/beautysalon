import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/constants';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  // Match all routes except Next.js internals, static files, and API routes
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)'],
};
