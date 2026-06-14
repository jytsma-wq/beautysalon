import { describe, expect, it } from 'vitest';
import {
  getHtmlCacheControl,
  shouldBypassLocaleRedirect,
} from '../performance-routing';

describe('performance routing helpers', () => {
  it('serves the root homepage directly instead of redirecting to a locale', () => {
    expect(shouldBypassLocaleRedirect('/')).toBe(true);
    expect(shouldBypassLocaleRedirect('/en')).toBe(false);
  });

  it('adds shared-cache headers to public HTML pages only', () => {
    expect(getHtmlCacheControl('/en', 'GET')).toContain('s-maxage=3600');
    expect(getHtmlCacheControl('/en/dermal-fillers-batumi', 'HEAD')).toContain('stale-while-revalidate=86400');
    expect(getHtmlCacheControl('/en/dashboard', 'GET')).toContain('no-store');
    expect(getHtmlCacheControl('/api/health', 'GET')).toBeNull();
    expect(getHtmlCacheControl('/en', 'POST')).toBeNull();
  });
});
