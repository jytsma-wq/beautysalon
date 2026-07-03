# Visual Regression Log

## 2026-07-03 - Visit Us map section

Scope:
- Homepage Visit Us section and the sticky mobile CTA safe-zone behavior around that section.
- Header, footer, mobile menu, language switcher, booking CTA, WhatsApp CTA, analytics, routing, email, hero image behavior, and existing content sections were not intentionally changed.

Expected visual result:
- A lightweight Visit Us section appears after the specialist CTA and before the journal area.
- The section uses the existing stone/white palette, uppercase eyebrow labels, thin borders, icon style, and button treatment.
- The address is rendered as real text, with opening hours from shared site configuration.
- Google Maps is embedded through a lazy iframe without API keys; the primary directions action links to Google Maps navigation.
- On mobile, the sticky CTA hides while the Visit Us section is in view so it does not cover the map or contact actions.

Browser verification:
- Local production preview used: `http://127.0.0.1:3003`.
- Browser path: in-app Browser opened the preview; its DOM snapshot API failed, so verification used the Browser read-only evaluate/log APIs for DOM, console, and interaction checks.
- Desktop `/en`: Visit Us rendered with `Silk Beauty Salon`, `Zurab Gorgiladze 63`, `Batumi, 6000, Georgia`, shared hours, directions link, phone link, WhatsApp link, lazy iframe, no framework overlay, no console warnings/errors, and no horizontal overflow.
- Directions URL: `https://www.google.com/maps/dir/?api=1&destination=Zurab+Gorgiladze+63%2C+Batumi%2C+Georgia&travelmode=driving`.
- Map iframe: `https://www.google.com/maps?q=Zurab+Gorgiladze+63%2C+Batumi%2C+Georgia&output=embed`, `loading="lazy"`, and localized title text.
- Mobile `/en`: Visit Us rendered correctly, no console warnings/errors, no framework overlay, and no horizontal overflow.
- Mobile menu: existing menu opened successfully and retained the `/en/book` booking link.
- Language switcher: dropdown exposed all six locale links for `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he`.
- Sticky mobile CTA: visible before the Visit Us section with `/en/book` and `https://wa.me/995577286855`, then hidden while the Visit Us section was in view.
- RTL mobile `/ar`: page direction was `rtl`; Visit Us rendered with localized Arabic text, real address text, lazy iframe title, no console warnings/errors, and no horizontal overflow.
- Locale smoke check: `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he` returned HTTP 200 from the local production preview.

## 2026-07-03 - Mobile sticky CTA

Scope:
- Existing `StickyMobileBookingBar` behavior only.
- Header, footer, desktop layout, mobile menu, language switcher, analytics, routing, email, and page content were not intentionally changed.

Expected visual result:
- Mobile-only sticky bottom bar remains hidden at the top of the page and appears after the visitor scrolls past the hero section.
- The bar uses the existing stone/white palette, rounded 6px card styling, uppercase compact button text, and existing icon style.
- Bar contains two actions: localized Book Now and WhatsApp.
- Bar hides when the consent banner is visible, hides on booking/contact form routes, and hides when the footer enters view.
- Desktop and tablet widths do not show the sticky mobile bar.

Browser verification:
- Local production preview used: `http://127.0.0.1:3003`.
- Mobile `/en` top: sticky bar hidden, header controls present, no console errors, and no horizontal overflow.
- Mobile `/en` after scroll and after rejecting local cookie consent: sticky bar appeared with `/en/book` and `https://wa.me/995577286855`, no console errors, and no horizontal overflow.
- Mobile `/en/book`: booking embed present, sticky bar hidden to avoid form overlap, no console errors, and no horizontal overflow.
- Mobile `/en/contact-us`: contact form present, sticky bar hidden to avoid form overlap, no console errors, and no horizontal overflow.
- Mobile `/en/treatments`: sticky bar appeared after scroll with `/en/book` and WhatsApp links, no console errors, and no horizontal overflow.
- Mobile menu: existing menu opened and closed successfully, no horizontal overflow.
- Language switcher: dropdown opened and exposed all six route-localized language links for `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he`.
- RTL mobile `/ar`: page direction was `rtl`; sticky bar appeared after scroll with localized Arabic labels, `/ar/book`, WhatsApp link, no console errors, and no horizontal overflow.
- Desktop `/en` at 1366px: sticky bar absent after scroll, header/footer present, no console errors, and no horizontal overflow.

## 2026-07-03 - Testimonial credibility update

Scope:
- Homepage testimonial carousel only.
- Header, footer, mobile menu, booking CTA, WhatsApp CTA, language switcher, routes, analytics, and email behavior were not intentionally changed.

Expected visual result:
- Testimonial cards keep the existing border, white background, stone palette, star rating, quote scale, and carousel controls.
- The testimonial footer now includes a small circular avatar slot.
- Existing testimonials use neutral initials fallback because no approved client photo URLs are present.
- Treatment context displays only from existing testimonial role data where already available.
- No review dates display until approved source dates are added.

Browser verification:
- Local production preview used: `http://127.0.0.1:3001`.
- Desktop `/en`: testimonial carousel rendered with 6 cards, 6 initials fallback avatar slots, localized carousel controls, no console errors, and no horizontal overflow.
- Mobile `/en`: testimonial carousel rendered with initials fallback avatars, no console errors, and no horizontal overflow.
- Mobile menu: existing checkbox/label menu opened successfully; menu links remained visible and no horizontal overflow appeared.
- Language switcher: dropdown exposed all six locale links: `/en`, `/ka`, `/ru`, `/tr`, `/ar`, `/he`.
- Booking CTA and WhatsApp CTA links were present in the rendered page.
- RTL `/ar`: page direction was `rtl`, testimonial carousel rendered with 6 initials fallback avatar slots, localized Arabic carousel controls, no console errors, and no horizontal overflow.
