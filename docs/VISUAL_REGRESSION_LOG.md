# Visual Regression Log

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
