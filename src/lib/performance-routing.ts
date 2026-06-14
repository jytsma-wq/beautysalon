const PUBLIC_HTML_CACHE_CONTROL = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';
const PRIVATE_HTML_CACHE_CONTROL = 'private, no-store, no-cache, max-age=0, must-revalidate';

export function shouldBypassLocaleRedirect(pathname: string): boolean {
  return pathname === '/';
}

function isDashboardPath(pathname: string): boolean {
  return /^\/(?:en|ka|ru|tr|ar|he)\/dashboard(?:\/|$)/.test(pathname);
}

export function getHtmlCacheControl(pathname: string, method: string): string | null {
  if (method !== 'GET' && method !== 'HEAD') {
    return null;
  }

  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.includes('.')) {
    return null;
  }

  if (isDashboardPath(pathname)) {
    return PRIVATE_HTML_CACHE_CONTROL;
  }

  return PUBLIC_HTML_CACHE_CONTROL;
}
