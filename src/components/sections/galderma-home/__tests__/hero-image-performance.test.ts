import { existsSync, readFileSync } from 'node:fs';
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
    expect(carouselSource).toContain('sizes="100vw"');
  });

  it('serves homepage images from versioned local assets', () => {
    const imagePaths = homepageDataSource.match(/"(\/images\/home\/[^\"]+\.webp)"/g) ?? [];

    expect(homepageDataSource).not.toContain('images.unsplash.com');
    expect(imagePaths.length).toBeGreaterThan(0);

    for (const quotedPath of imagePaths) {
      const imagePath = quotedPath.slice(1, -1);
      expect(existsSync(resolve(process.cwd(), 'public', imagePath.slice(1)))).toBe(true);
    }
  });
});
