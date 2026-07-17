# Visual Regression Log

## 2026-07-16 - Complete production-preview audit

Scope:
- All `184` URLs emitted by the local production sitemap, `432` same-origin links, representative desktop/mobile/RTL routes, primary navigation, forms, consent, conversion controls, schema, and hero loading behavior.
- Narrow fixes to support-page metadata, locale-switcher path construction, and centralized support contact email output.
- Existing visual design, section order, six-locale structure, booking flow, analytics behavior, email-sending behavior, dependencies, and public production were not intentionally changed.

Browser verification:
- Local production preview: `http://127.0.0.1:4314/en`.
- Sitemap crawl: all `184` URLs returned HTTP `200`; every page had a title, description, expected canonical, index policy, and one visible H1; `432` same-origin links produced no broken targets.
- Desktop/mobile route sample: `28` renders covering all locale roots, booking, treatment, pricing, contact, Botox, skin, salon-space rental, chair rental, and app-download pages had no broken visible images, console errors, page errors, framework overlays, or horizontal overflow.
- RTL: Arabic and Hebrew roots retained `dir="rtl"` and had no horizontal overflow.
- Navigation: desktop Treatments, Skin Conditions, and More menus worked; mobile menu opened/closed and retained Salon Space Rental, Chair Rental, Download App, and Booking; the language switcher exposed six correct locale-root links.
- Conversion: booking form and time slots rendered; contact form fetched CSRF and enforced required fields; sticky mobile Book/WhatsApp bar appeared after the hero and hid on protected/form areas and behind cookie consent; Visit Us retained real address text, lazy map iframe, directions, phone, and approved WhatsApp links.
- Consent/API: reject persisted non-analytics consent. With safe non-secret preview environment placeholders, missing CSRF returned `403` and valid CSRF plus invalid input returned `400` for newsletter, contact, and booking endpoints.
- SEO/performance: homepage BeautySalon JSON-LD parsed with phone `+995 577 34 57 67`, postal code `6010`, and no review/aggregate-rating markup; the first hero image remained eager/high priority while inactive slides remained lazy/low priority.
- Accessibility: Axe reported zero WCAG A/AA violations on nine representative English and RTL routes.

Fixes verified:
- FAQ, accessibility, privacy, and terms pages now emit self-canonical, `en/ka/ru/tr/ar/he` hreflang, and `x-default` metadata.
- Language switching on support pages no longer creates nested paths such as `/ka/ka/accessibility`.
- Accessibility and terms contact links now use the shared `info@silkbeautysalon.online` value.

Remaining local-preview limitation:
- Production email/database delivery cannot be exercised without production secrets and live data services. This audit used invalid payloads only and did not send email, create bookings, or alter customer records.

## 2026-07-12 - Chair rental page and More navigation

Scope:
- New localized `/{locale}/chair-rental-batumi` page.
- Download App and Chair Rental are grouped under More on desktop and mobile; the core Treatments, Skin Conditions, Price List, Offers, and International Clients navigation remains unchanged.
- Chair Rental is also available from the footer information links and localized sitemap.

Expected visual result:
- The desktop More control opens a compact existing-style dropdown with secondary links, including Salon Space Rental, Chair Rental, and Download App.
- The mobile full-screen menu lists Chair Rental and Download App in its existing More section rather than the primary service list.
- The chair-rental page uses the established stone/white palette, typography, borders, button styling, shared contact data, and localized WhatsApp enquiry flow.
- No unconfirmed price, equipment, capacity, employment, licensing, or professional-result claims are displayed.
- The treatment-focused sticky mobile booking bar remains hidden on the chair-rental page.

Browser verification:
- Local production preview: `http://127.0.0.1:4312/en/chair-rental-batumi`.
- Desktop `/en` at 1280x720: H1, canonical, seven hreflang entries, venue cross-link, and WhatsApp chair-rental enquiry rendered; no console errors, framework overlay, or horizontal overflow.
- Desktop More: click opened the localized `More links` navigation with About, Salon Space Rental, Chair Rental, Download App, Contact, FAQ, and Blog links.
- Mobile `/en` at 390x844: full-screen menu opened and its More section contained Chair Rental and Download App; no console errors or horizontal overflow.
- Mobile `/ar`: document direction was `rtl`, localized chair-rental H1 and canonical rendered, and there were no console errors, framework overlay, or horizontal overflow.
- Route smoke check: all six localized chair-rental routes, `/en/download`, and `/en/venue-rental-batumi` returned HTTP 200.
- Sitemap check: all six canonical localized chair-rental URLs were present.
- Remaining content risk: Georgian, Russian, Turkish, Arabic, and Hebrew chair-rental copy requires native-language review before any production release.

## 2026-07-12 - Salon space rental menu and page

Scope:
- New localized `/{locale}/venue-rental-batumi` page plus existing-style desktop utility navigation, mobile More-menu, footer, and sitemap links.
- The established treatment menu, header styling, footer styling, booking flow, analytics, email behavior, contact data, and existing page layouts were not intentionally changed.

Expected visual result:
- Salon Space Rental appears as a secondary navigation option without restructuring the primary treatment menu.
- The page uses the existing stone/white palette, serif headings, compact uppercase labels, thin borders, 6px-or-smaller corner treatment, and existing button styles.
- Content covers professional meetings, diploma/training sessions, and seminars/workshops without displaying unconfirmed price, capacity, equipment, or certification claims.
- The rental inquiry uses the existing WhatsApp number with a localized prefilled message and offers the existing contact page as an alternative.
- The treatment-focused sticky mobile booking bar stays hidden on this rental page.

Browser verification:
- Local production preview: `http://127.0.0.1:4312/en/venue-rental-batumi`.
- Desktop `/en`: localized title/H1, canonical and seven hreflang links, loaded hero asset, correct WhatsApp inquiry, no framework overlay, no console warnings/errors, and no horizontal overflow.
- Mobile `/en` at 390x844: layout remained contained, mobile menu opened and closed, Venue Rental appeared in the More menu, all six locale links were present, and the treatment sticky CTA remained absent.
- Mobile `/ar` and `/he`: document direction was `rtl`, localized H1/content rendered, no framework overlay, no console warnings/errors, and no horizontal overflow.
- Locale smoke check: `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he` venue-rental routes returned HTTP 200 from the production preview.
- Sitemap check: all six canonical localized venue-rental URLs were present.
- Remaining content risk: Georgian, Russian, Turkish, Arabic, and Hebrew rental copy requires native-language review before any production release.

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
- Desktop `/en`: Visit Us rendered with `Silk Beauty Salon`, `Zurab Gorgiladze 63`, `Batumi, 6010, Georgia`, shared hours, directions link, phone link, WhatsApp link, lazy iframe, no framework overlay, no console warnings/errors, and no horizontal overflow.
- Directions URL: `https://www.google.com/maps/dir/?api=1&destination=Zurab+Gorgiladze+63%2C+Batumi%2C+Georgia&travelmode=driving`.
- Map iframe: `https://www.google.com/maps?q=Zurab+Gorgiladze+63%2C+Batumi%2C+Georgia&output=embed`, `loading="lazy"`, and localized title text.
- Mobile `/en`: Visit Us rendered correctly, no console warnings/errors, no framework overlay, and no horizontal overflow.
- Mobile menu: existing menu opened successfully and retained the `/en/book` booking link.
- Language switcher: dropdown exposed all six locale links for `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he`.
- Sticky mobile CTA: visible before the Visit Us section with `/en/book` and `https://wa.me/995577286855`, then hidden while the Visit Us section was in view.
- RTL mobile `/ar`: page direction was `rtl`; Visit Us rendered with localized Arabic text, real address text, lazy iframe title, no console warnings/errors, and no horizontal overflow.
- Locale smoke check: `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he` returned HTTP 200 from the local production preview.

## 2026-07-03 - Hero LCP image optimization

Scope:
- Homepage hero image loading behavior only.
- Hero layout, copy, crop intent, colors, typography, header, footer, mobile menu, booking CTA, WhatsApp CTA, sticky mobile CTA, routes, analytics, and email behavior were not intentionally changed.

Expected visual result:
- The homepage hero remains visually unchanged while the first hero slide image receives explicit preload/eager/high-priority loading hints.
- Non-active carousel images stay lazy-loaded with low fetch priority.
- The responsive image candidate is smaller on desktop because the `sizes` value now matches the actual 50% hero image column.

Browser verification:
- Local production preview used: `http://127.0.0.1:3003`.
- Desktop `/en` at 1366px: hero image rendered from the same Unsplash photo with upstream `w=1920`, selected Next image width `w=750`, `loading="eager"`, `fetchpriority="high"`, no console errors, no page errors, and no horizontal overflow.
- Mobile `/en` at 390px: hero image rendered from the same Unsplash photo with upstream `w=1920`, selected Next image width `w=1200`, `loading="eager"`, `fetchpriority="high"`, no console errors, no page errors, and no horizontal overflow.
- Mobile menu: existing menu opened successfully and retained the `/en/book` booking link.
- Language switcher: dropdown exposed all six locale links for `/en`, `/ka`, `/ru`, `/tr`, `/ar`, and `/he`.
- Booking CTA and sticky mobile CTA: `/en/book` link remained present and the sticky mobile Book Now action appeared after scroll.
- WhatsApp CTA: sticky mobile WhatsApp link remained `https://wa.me/995577286855`.
- RTL mobile `/ar`: page direction was `rtl`; hero image rendered with the same loading behavior, no console errors, no page errors, and no horizontal overflow.
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
