import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const carouselSource = readFileSync(
  resolve(__dirname, '../GaldermaHomeCarousels.tsx'),
  'utf8'
);
const homepageDataSource = readFileSync(resolve(process.cwd(), 'src/data/homepage.ts'), 'utf8');

describe('ClinicalHeroCarousel image loading', () => {
  it('preloads only the first homepage hero slide image', () => {
    expect(carouselSource).toContain('preload={index === 0}');
    expect(carouselSource).not.toContain('priority={index === 0}');
  });

  it('keeps non-active hero carousel images lazy and lower priority', () => {
    expect(carouselSource).toContain("loading={index === 0 ? 'eager' : 'lazy'}");
    expect(carouselSource).toContain("fetchPriority={index === 0 ? 'high' : 'low'}");
  });

  it('uses a responsive sizes value that matches the rendered hero image slot', () => {
    expect(carouselSource).toContain('sizes="(max-width: 1023px) 100vw, 50vw"');
  });

  it('keeps homepage hero source images capped to a practical upstream width', () => {
    expect(homepageDataSource).toContain('w=1920&q=85');
    expect(homepageDataSource).not.toContain('w=2200&q=85');
  });
});
