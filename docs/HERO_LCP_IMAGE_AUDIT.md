# Hero LCP Image Audit

Date: 2026-07-03
Branch: `performance/hero-lcp-images`

## Scope

This audit covers the localized homepage hero rendered by `ClinicalHeroCarousel`.

No hero layout, crop, copy, colors, typography, routing, analytics, email, or language behavior was intentionally changed.

## LCP Element Identified

The measured LCP element is the first homepage hero slide image:

- Component: `src/components/sections/galderma-home/GaldermaHomeCarousels.tsx`
- Source data: `src/data/homepage.ts`
- Image: `photo-1512290923902-8a9f81dc236c`
- Element: `<img class="object-cover">`

## Before Measurement

Environment:

- Local production build from the clean base commit.
- URL: `http://127.0.0.1:3003/en`
- Tool: Playwright Chromium with `PerformanceObserver` for `largest-contentful-paint`.
- Runs: three per viewport.
- Lighthouse: unavailable locally because `npm run test:lighthouse` failed with `lhci` not installed. No dependency was added.

Results:

| Viewport | LCP runs | Median LCP | LCP image URL behavior | LCP transfer |
| --- | ---: | ---: | --- | ---: |
| Desktop 1366x900 | 980 ms, 120 ms, 156 ms | 156 ms | upstream `w=2200`, rendered `w=828&q=75` | 350,139 bytes |
| Mobile 390x844 DPR 3 | 776 ms, 112 ms, 152 ms | 152 ms | upstream `w=2200`, rendered `w=1200&q=75` | 350,139 bytes |

Baseline observations:

- The LCP image was already preloaded through the deprecated Next `priority` prop.
- The LCP image had no explicit `loading` or `fetchpriority` attributes in the rendered DOM.
- Non-active hero slides were lazy, but had no explicit low fetch priority.
- Desktop `sizes` overstated the rendered image column as `55vw`; the actual large-screen column is 50%.
- CLS was `0` in all measured runs.

## Changes Made

- Replaced deprecated `priority={index === 0}` with `preload={index === 0}` for the first hero image.
- Set the first hero image to `loading="eager"` and `fetchpriority="high"`.
- Set non-active hero carousel images to `loading="lazy"` and `fetchpriority="low"`.
- Tightened the hero `sizes` value from `55vw` to the actual desktop column width of `50vw`.
- Reduced homepage hero upstream source URLs from `w=2200` to `w=1920`; this keeps the same images and crop while reducing optimizer input size.
- Added a focused regression test for hero image loading behavior and source sizing.

Files changed:

- `src/components/sections/galderma-home/GaldermaHomeCarousels.tsx`
- `src/data/homepage.ts`
- `src/components/sections/galderma-home/__tests__/hero-image-performance.test.ts`
- `docs/HERO_LCP_IMAGE_AUDIT.md`
- `docs/CHANGELOG.md`
- `docs/VISUAL_REGRESSION_LOG.md`

## After Measurement

Environment:

- Local production build after the changes.
- URL: `http://127.0.0.1:3003/en`
- Tool: same Playwright Chromium `PerformanceObserver` script.
- Runs: three per viewport.

Results:

| Viewport | LCP runs | Median LCP | LCP image URL behavior | LCP transfer |
| --- | ---: | ---: | --- | ---: |
| Desktop 1366x900 | 876 ms, 128 ms, 124 ms | 128 ms | upstream `w=1920`, rendered `w=750&q=75` | 279,154 bytes |
| Mobile 390x844 DPR 3 | 596 ms, 152 ms, 108 ms | 152 ms | upstream `w=1920`, rendered `w=1200&q=75` | 279,154 bytes |

Measured impact:

- Desktop median LCP improved from 156 ms to 128 ms in local lab runs.
- Mobile median LCP was unchanged at 152 ms in local lab runs.
- LCP image transfer dropped from 350,139 bytes to 279,154 bytes in the measured local run, about 20% lower.
- CLS stayed `0` in all measured runs.
- Horizontal overflow stayed `0` in all measured runs.

## Limitations

- These are local lab measurements, not live field data or PageSpeed Insights data.
- The first run includes local Next image optimizer warm-up effects; later runs are warmer.
- The local environment is much faster than production user networks, so absolute LCP values should not be treated as real-user performance.
- Lighthouse CI could not run because `lhci` is not installed and dependencies were intentionally not changed.

## Manual Validation Steps

For staging or production:

1. Deploy to staging or controlled live environment.
2. Open Google PageSpeed Insights for `https://silkbeautysalon.online/en`.
3. Run Chrome DevTools Performance on mobile emulation and inspect the LCP event.
4. Confirm the LCP element is still the first homepage hero image.
5. Confirm the hero image request uses the expected responsive width and does not create layout shift.
6. Confirm no visual crop, copy, header, mobile menu, language switcher, booking CTA, WhatsApp CTA, or sticky mobile CTA regression.
