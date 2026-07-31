import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Locale } from '@/i18n';

const fontRoots = {
  cormorantGaramond: '@fontsource/cormorant-garamond',
  notoSansArabic: '@fontsource/noto-sans-arabic',
  notoSansGeorgian: '@fontsource/noto-sans-georgian',
  notoSansHebrew: '@fontsource/noto-sans-hebrew',
};

const fontFiles: Record<Locale, { root: string; regular: string; bold: string }> = {
  en: {
    root: fontRoots.cormorantGaramond,
    regular: 'cormorant-garamond-latin-400-normal.woff2',
    bold: 'cormorant-garamond-latin-700-normal.woff2',
  },
  tr: {
    root: fontRoots.cormorantGaramond,
    regular: 'cormorant-garamond-latin-ext-400-normal.woff2',
    bold: 'cormorant-garamond-latin-ext-700-normal.woff2',
  },
  ru: {
    root: fontRoots.cormorantGaramond,
    regular: 'cormorant-garamond-cyrillic-400-normal.woff2',
    bold: 'cormorant-garamond-cyrillic-700-normal.woff2',
  },
  ka: {
    root: fontRoots.notoSansGeorgian,
    regular: 'noto-sans-georgian-georgian-400-normal.woff2',
    bold: 'noto-sans-georgian-georgian-700-normal.woff2',
  },
  ar: {
    root: fontRoots.notoSansArabic,
    regular: 'noto-sans-arabic-arabic-400-normal.woff2',
    bold: 'noto-sans-arabic-arabic-700-normal.woff2',
  },
  he: {
    root: fontRoots.notoSansHebrew,
    regular: 'noto-sans-hebrew-hebrew-400-normal.woff2',
    bold: 'noto-sans-hebrew-hebrew-700-normal.woff2',
  },
};

async function readFont(root: string, filename: string): Promise<ArrayBuffer> {
  const font = await readFile(join(process.cwd(), 'node_modules', root, 'files', filename));
  return font.buffer.slice(font.byteOffset, font.byteOffset + font.byteLength) as ArrayBuffer;
}

export async function getOpenGraphFonts(locale: Locale) {
  const files = fontFiles[locale];
  const [regular, bold] = await Promise.all([
    readFont(files.root, files.regular),
    readFont(files.root, files.bold),
  ]);

  return [
    { name: 'OpenGraphFont', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'OpenGraphFont', data: bold, weight: 700 as const, style: 'normal' as const },
  ];
}
