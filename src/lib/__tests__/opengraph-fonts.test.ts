import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import { getOpenGraphFonts } from '@/lib/opengraph-fonts';

describe('Open Graph fonts', () => {
  it('loads regular and bold glyph coverage for every locale', async () => {
    for (const locale of locales) {
      const fonts = await getOpenGraphFonts(locale);

      expect(fonts).toHaveLength(2);
      expect(fonts.map((font) => font.weight)).toEqual([400, 700]);
      expect(fonts.every((font) => font.data.byteLength > 1_000)).toBe(true);
    }
  });
});
