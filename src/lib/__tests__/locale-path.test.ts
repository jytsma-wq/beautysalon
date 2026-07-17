import { describe, expect, it } from 'vitest';
import { getLocalizedPathname } from '@/lib/locale-path';

describe('getLocalizedPathname', () => {
  it('adds the requested locale to locale-free paths', () => {
    expect(getLocalizedPathname('/accessibility', 'tr')).toBe('/tr/accessibility');
    expect(getLocalizedPathname('/', 'ka')).toBe('/ka');
  });

  it('replaces an existing locale instead of nesting locale segments', () => {
    expect(getLocalizedPathname('/ka/accessibility', 'en')).toBe('/en/accessibility');
    expect(getLocalizedPathname('ru/pricelist', 'he')).toBe('/he/pricelist');
    expect(getLocalizedPathname('/ar', 'tr')).toBe('/tr');
  });
});
