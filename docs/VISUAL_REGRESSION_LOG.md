# Visual Regression Log

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
