# AI Search Readiness And Query Tracking

Date: 2026-07-04
Live check time: 2026-07-04 10:30-11:10 Asia/Tbilisi / 06:30-07:10 UTC
Phase: 6 - AI-search readiness audit
Branch: `codex/visibility-readiness-audit`
Mode: live public audit plus recommendations; no content or code changes

## Safety Rules Applied

- No AI-only content, hidden text, fake citations, fake credentials, or doorway pages were created.
- No `llms.txt`, Markdown mirror, AI-specific file, or special AI markup was added.
- No structured data changes were made.
- No fake reviews, fake photos, fake staff, fake certifications, awards, or guaranteed outcomes were added.
- No public listings, DNS, analytics, Hostinger settings, or production code were changed.

## Guidance Baseline

Google's current guidance for generative AI features is still people-first SEO:

- Make pages crawlable and indexable.
- Publish helpful, original, accurate content for users.
- Keep normal Search controls such as `robots.txt`, `noindex`, snippets, and structured data accurate.
- Special AI files such as `llms.txt`, AI text files, or AI-only markup are not required for Google Search or its generative AI features.
- Do not create spam or content designed to manipulate AI answers.

Conclusion for Silk Beauty Salon:

- Do not add `llms.txt` right now.
- Do not add AI-only content blocks.
- Improve AI readiness through clearer visible answers, verified business profiles, native-language review, citations, and consistent local entity data.

## Pages Audited

Live pages checked:

| Page | Status | H1 | Sitemap | Canonical | JSON-LD | Keyword-stuff block |
| --- | ---: | --- | --- | --- | --- | --- |
| `/en` | 200 | 1 H1 | Yes | Self | `BeautySalon` | No |
| `/en/beauty-salon-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `FAQPage` | No |
| `/en/botox-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/dermal-fillers-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/lip-fillers-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/skin-treatment-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/acne-treatment-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/nails-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/lashes-brows-batumi` | 200 | 1 H1 | Yes | Self | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | No |
| `/en/pricelist` | 200 | 1 H1 | Yes | Missing on live | None | No |
| `/en/book` | 200 | 1 H1 | Yes | Self | None | No |
| `/en/international-clients` | 200 | 1 H1 | Yes | Self | None | No |

Important canonical note:

- `/en/pricelist` is useful for answerability and pricing, but live production still lacks canonical/hreflang metadata.
- A local branch fix already exists in this audit branch (`4baa40c fix(seo): add pricelist canonical metadata`).
- Do not heavily promote or request indexing for the pricelist until that fix is approved, deployed, and verified live.

## Answerability Audit

| Real user question | Current answerability | Best current source page(s) | Finding |
| --- | --- | --- | --- |
| Where is Silk Beauty Salon located? | Strong | `/en`, `/en/beauty-salon-batumi`, footer, Visit Us | Address `Zurab Gorgiladze 63, Batumi` is visible and repeated. |
| What services does Silk Beauty Salon offer? | Strong | `/en`, `/en/treatments`, `/en/beauty-salon-batumi` | Injectables, fillers, skin, laser, nails, lashes/brows, consultations are visible. |
| Does Silk Beauty Salon offer Botox in Batumi? | Strong | `/en/botox-batumi` | Clear H1, intro, Botox options, booking, FAQ, prices/links. |
| Does Silk Beauty Salon offer dermal fillers? | Strong | `/en/dermal-fillers-batumi` | Clear page with filler treatment options and consultation framing. |
| Does Silk Beauty Salon offer lip fillers? | Strong | `/en/lip-fillers-batumi` | Clear local page with price/booking/FAQ signals. |
| Does Silk Beauty Salon offer acne treatment consultations? | Strong | `/en/acne-treatment-batumi`, `/en/skin-treatment-batumi` | Consultation-led acne and post-acne options are visible. |
| Does Silk Beauty Salon offer nails? | Strong | `/en/nails-batumi`, `/en/pricelist` | Nail page and price list cover the service. |
| Does Silk Beauty Salon offer lashes and brows? | Strong | `/en/lashes-brows-batumi` | Lash/brow service page is clear. |
| Are prices available? | Strong, with metadata caveat | `/en`, `/en/pricelist`, service pages | Prices are visible and linked. Pricelist canonical/hreflang still needs live fix. |
| Can tourists book? | Strong | `/en/international-clients`, local SEO pages | Tourist/international booking and planning language is present. |
| What languages are supported? | Medium | Header language switcher, localized pages | Six locales are visible. Add a concise visible sentence on relevant pages once owner approves wording. |
| How can clients book? | Strong | `/en/book`, CTAs, service pages | Online booking, phone, email, and CTA links are visible. |
| Is WhatsApp available? | Strong | Header/footer/sticky CTA | WhatsApp is visible. Keep separate WhatsApp number documented and owner-approved. |
| What should clients know before Botox/fillers? | Strong | `/en/botox-batumi`, `/en/dermal-fillers-batumi`, `/en/lip-fillers-batumi` | Consultation, suitability, timing, contraindication, and aftercare themes are visible. |
| What should clients know before skin treatments? | Strong | `/en/skin-treatment-batumi`, `/en/acne-treatment-batumi` | Skin analysis, timing, treatment choice, and aftercare themes are visible. |
| What aftercare/preparation is needed? | Medium-strong | Service pages, treatment detail pages | Aftercare is visible on many pages, but AI citation would benefit from clearer "Before you book" and "Aftercare basics" subsections. |

## AI Citation Readiness Checklist

| Check | Status | Notes |
| --- | --- | --- |
| Every priority page has one clear H1 | Pass | Live sampled pages have exactly one H1. |
| Every page has a concise summary near the top | Mostly pass | Local SEO pages have strong intros. Homepage top text is strong visually, but crawled text begins with navigation before the hero summary. |
| Prices are visible or linked | Pass with caveat | Prices are visible on homepage/service pages and linked to pricelist; pricelist metadata needs live fix. |
| Address is visible | Pass | Address is repeated in header/footer/Visit Us/local page sections. |
| Booking method is visible | Pass | Online booking, phone, email, and CTA links are visible. |
| WhatsApp is visible | Pass | WhatsApp CTA/link is visible. |
| Related pages are internally linked | Pass | Local SEO pages link to related treatment categories, booking, pricelist, and service pages. |
| No visible keyword-stuffing sections | Pass | The old `Search phrases this page answers` block was not found on sampled live pages. |
| Structured data is valid | Pass with warning | Phase 5 found parseable JSON-LD and no review/rating markup; low-risk `inLanguage` warning remains. |
| Sitemap includes the page | Pass | All sampled priority pages are in sitemap. |
| Canonical is correct | Mostly pass | All sampled pages except live `/en/pricelist` self-canonicalize. |
| Content is unique enough | Mostly pass | Local pages have unique service intent, but repeated template sections should be watched. |
| Images have descriptive alt text | Pass | Sampled pages had `img` tags with `alt`; no missing alt attributes detected. |
| External entity corroboration exists | Weak-medium | Salonly, social profiles, and some public mentions exist, but verified GBP/Bing/Apple/citations are still incomplete. |
| AI/local pack visibility is measurable | Weak | Google Search Console, GBP, Bing Webmaster, and AI Overview/AI Mode visibility are not yet account-verified. |

## Content Recommendations

These are people-first content recommendations only. They should be implemented incrementally, in existing design, and only after owner review.

### Homepage

Add or strengthen one concise visible paragraph near the top:

> Silk Beauty Salon is a multilingual beauty and aesthetic salon in central Batumi, Georgia, offering consultation-led Botox, dermal fillers, lip fillers, skin treatments, acne and texture consultations, nails, lashes, brows, and online booking for local and international clients.

Why:

- Helps AI systems and snippets summarize the business quickly.
- Reinforces services, location, and multilingual/tourist fit without keyword stuffing.

### Service Lists

Keep a compact visible service list on `/en/beauty-salon-batumi` and homepage:

- Botox and anti-wrinkle consultations.
- Dermal fillers and lip filler planning.
- Skin treatments, peels, microneedling, acne/post-acne consultations.
- Nail services.
- Lash and brow services.
- Booking, phone, email, and WhatsApp support.

Why:

- AI systems often extract direct lists for recommendation answers.
- The current site already has these services; this is a clarity improvement, not a new claim.

### Price Snippets

For each service-intent page, keep a short price cue:

- "Starting prices are shown below and in the full pricelist. Final treatment cost is confirmed after consultation."

Why:

- Supports price-intent queries without overpromising.
- Keeps pricing linked to the central pricelist.

### "Who This Is For"

Add short visible sections to service pages:

- Botox: people considering expression-line softening, masseter consultation, sweating consultation, or event/travel timing.
- Fillers/lip fillers: people seeking natural-looking balance, volume, contour, or asymmetry consultation.
- Skin/acne: people with breakouts, texture, acne marks, pores, pigmentation, or skin quality goals.
- Nails/lashes/brows: people needing maintenance, travel/event grooming, or beauty finishing appointments in Batumi.

Why:

- Helps AI and human readers match intent to service.
- Avoids medical promises.

### "Before You Book"

Add concise visible reminders:

- Start with consultation if unsure.
- Share recent treatments, allergies, pregnancy/breastfeeding status where relevant, medication, skin sensitivity, and travel/event timing.
- Avoid unsupported claims about suitability; practitioner confirms during consultation.

Why:

- Strong for AI answers such as "what should I know before Botox/fillers?"
- People-first and safety-oriented.

### "Aftercare Basics"

Add or consolidate short aftercare basics per service group:

- Botox/fillers: follow practitioner aftercare, avoid pressure/rubbing where advised, plan around swelling/downtime, ask before exercise/sauna/travel.
- Skin treatments: sunscreen, avoid harsh actives when advised, follow downtime guidance, avoid picking/irritation.
- Nails/lashes/brows: follow care instructions for product longevity and eye/nail health.

Why:

- Useful for AI summaries and user confidence.
- Must stay general unless practitioner-approved treatment-specific aftercare is confirmed.

### "Visit Us In Batumi"

Keep the Visit Us section and add concise nearby context only if true:

- "Located at Zurab Gorgiladze 63 in central Batumi."
- "Clients can book online before arriving."
- "Get Directions opens Google Maps."

Why:

- Helps local AI and map-linked search experiences.

### "Languages And Tourist Appointments"

Add a visible statement after owner approval:

> Appointments and website information are available in English, Georgian, Russian, Turkish, Arabic, and Hebrew. International clients can book online before arriving in Batumi.

Why:

- The six-language structure exists, but a direct visible sentence would make the answer easier to cite.
- This should be owner-confirmed for actual appointment communication, not just website translation.

## Query Tracking

Important limitations:

- Google AI Overview / AI Mode citation visibility was not available in this environment.
- Google local pack and Business Profile visibility require an interactive Google session and location/device context.
- Public web-search sampling was performed with accessible public tools and DuckDuckGo HTML results. Results can vary by location, language, personalization, and time.
- Organic positions below are therefore directional monitoring notes, not official Search Console rankings.

### English

| Query | Silk organic visibility in public sample | Local pack / GBP | AI Overview / AI Mode | Competitors or sources seen | Content gap |
| --- | --- | --- | --- | --- | --- |
| `where to get Botox in Batumi` | Not in top 10 DuckDuckGo sample | Not available | Not available | Academy of Cosmetology, Madloba, LAKmousse, Facebook | Build authority/citations for Botox page; strengthen GBP service and Q&A. |
| `lip fillers Batumi price` | Not in top 10 DuckDuckGo sample | Not available | Not available | LAKmousse, Instagram, Academy of Cosmetology | Pricelist canonical fix must go live; add visible price snippet to lip filler page. |
| `acne treatment Batumi` | Not in top 10 DuckDuckGo sample | Not available | Not available | LAKmousse, Dr Keti Kavtaradze, 100doc, Rogo | More external citations and local acne-specific authority needed. |
| `beauty salon Batumi nails lashes` | Not in top 10 DuckDuckGo sample | Not available | Not available | LAKmousse, Heaven Nails, Mriya, Madloba | Strengthen nails/lashes pages and external directory presence. |
| `English speaking beauty salon Batumi` | Not in top 10 DuckDuckGo sample | Not available | Not available | Madloba, LAKmousse, Mriya, Tripadvisor | Add owner-approved visible language-support sentence. |

Additional public web-search note:

- A broader public web-search sample for Batumi beauty/aesthetic intents showed Silk pages can appear, including the homepage and `/en/beauty-salon-batumi`, but LAKmousse, Salonly, Tripadvisor, 100doc, Yandex Maps, Instagram, and Facebook frequently appear around the same intents.

### Georgian

| Query | Silk organic visibility in public sample | Local pack / GBP | AI Overview / AI Mode | Competitors or sources seen | Content gap |
| --- | --- | --- | --- | --- | --- |
| `ბოტოქსი ბათუმი` | Not in top 10 DuckDuckGo sample | Not available | Not available | 100doc, Facebook, Locate.ge, NTD Clinic | Native Georgian copy/citations and GBP service relevance needed. |
| `ტუჩის ფილერი ბათუმი` | Not in top 10 DuckDuckGo sample | Not available | Not available | Richters, Aversi, Facebook, Hotsale | Native Georgian lip filler content and local citations needed. |
| `აკნეს მკურნალობა ბათუმი` | Not visible in first sampled result set | Not available | Not available | Locate.ge, Facebook, Mobilmed, Kani.ge | Native Georgian acne page review and citation work. |
| `მანიკური ბათუმი` | Not visible in first sampled result set | Not available | Not available | Locate.ge, Madloba, Facebook, Instagram, Mriya | Georgian nails page needs external citation support. |

### Russian

| Query | Silk organic visibility in public sample | Local pack / GBP | AI Overview / AI Mode | Competitors or sources seen | Content gap |
| --- | --- | --- | --- | --- | --- |
| `ботокс Батуми` | Not visible in public samples reviewed | Not available | Not available | Instagram cosmetologists, LAKmousse, Academy of Cosmetology, Facebook, Yandex Maps | Russian Botox page needs authority/citations and GBP/Bing/Yandex consistency. |
| `филлеры губ Батуми` | Not visible in public samples reviewed | Not available | Not available | LAKmousse, Instagram, Threads, Russian cosmetology pages | Russian lip filler page needs citation links and visible price clarity. |
| `лечение акне Батуми` | Not visible in public samples reviewed | Not available | Not available | Locate.ge, LAKmousse, LuxeElen, Dikidi, Facebook | Russian acne page needs stronger entity/citation footprint. |
| `маникюр Батуми` | Not visible in public samples reviewed | Not available | Not available | Yandex Maps, Heaven Nails, Instagram, Dikidi, LAKmousse | Russian nail visibility depends heavily on map/directory platforms. |

### Turkish

| Query | Silk organic visibility in public sample | Local pack / GBP | AI Overview / AI Mode | Competitors or sources seen | Content gap |
| --- | --- | --- | --- | --- | --- |
| `Batum botoks` | Not visible in public samples reviewed | Not available | Not available | Instagram/TikTok, generic Botox medical pages, LAKmousse | Turkish Botox page needs native review and local citation support. |
| `Batum dudak dolgusu` | Not visible in public samples reviewed | Not available | Not available | Instagram/TikTok, Turkish filler education pages, Facebook | Add owner-approved language/tourist wording and external citations. |
| `Batum akne tedavisi` | Not visible in public samples reviewed | Not available | Not available | Generic Turkish acne articles, Instagram | Turkish acne page needs native review and more local relevance signals. |
| `Batum manikür` | Not visible in public samples reviewed | Not available | Not available | Instagram, Cybo, Tripadvisor, Heaven Nails | Turkish nails page needs citations and local listing alignment. |

### Arabic

| Query | Silk organic visibility in public sample | Local pack / GBP | AI Overview / AI Mode | Competitors or sources seen | Content gap |
| --- | --- | --- | --- | --- | --- |
| `بوتوكس باتومي` | Not in top 10 DuckDuckGo sample | Not available | Not available | Booking.com/travel pages, Arabic Botox education pages | Arabic page likely needs native review and stronger local entity signals. |
| `فيلر الشفاه باتومي` | Not in top 10 DuckDuckGo sample | Not available | Not available | Rama Clinics, Amazon, Star Smile, Yatabeb | Arabic local intent is weakly served; citation/entity reinforcement needed. |
| `علاج حب الشباب باتومي` | Not in top 10 DuckDuckGo sample | Not available | Not available | Altibbi, Vezeeta, Tebcan, Mayo Clinic | Arabic acne page needs local signals and native review. |
| `مانيكير باتومي` | Not in top 10 DuckDuckGo sample | Not available | Not available | Batumi travel pages, Amazon, tourism sites | Arabic nail service page needs local citation support. |

### Hebrew

| Query | Silk organic visibility in public sample | Local pack / GBP | AI Overview / AI Mode | Competitors or sources seen | Content gap |
| --- | --- | --- | --- | --- | --- |
| `בוטוקס בטומי` | Not in top 10 DuckDuckGo sample | Not available | Not available | Mako, Facebook groups, Estheticare, travel pages | Hebrew Botox page needs local entity/citation support. |
| `מילוי שפתיים בטומי` | Not in top 10 DuckDuckGo sample | Not available | Not available | Facebook, Estheticare, BeautyFace | Hebrew lip filler page needs citations and native review. |
| `טיפול באקנה בטומי` | Not in top 10 DuckDuckGo sample | Not available | Not available | Altman, Israeli health sites, travel pages | Hebrew acne page needs local relevance and citation support. |
| `מניקור בטומי` | Not in top 10 DuckDuckGo sample | Not available | Not available | Facebook groups, Lametayel, Batumi travel sites | Hebrew nails page needs listing/citation reinforcement. |

## Competitor And Source Notes

Recurring competitors and source surfaces:

- LAKmousse: strong service pages, prices, multilingual presence, Tripadvisor/Yandex footprint.
- Academy of Cosmetology: strong Botox/injection pages.
- Heaven Nails: strong nail/lash/brow relevance.
- Mriya: beauty salon presence.
- 100doc.ge: doctor/clinic directory visibility.
- Madloba.info: Georgian business/directory visibility.
- Locate.ge: Georgian/Russian service directory visibility.
- Yandex Maps: strong Russian/local category visibility.
- Instagram/Facebook/TikTok: common for service discovery in Russian, Turkish, Hebrew, and Georgian samples.
- Salonly: public Silk Beauty Salon citation exists and can support entity recognition if owner-verified.

Silk's site now has better first-party page architecture than before, but the search samples show competitors have stronger external discovery signals for many service-intent searches.

## Priority Improvement Plan

### P0 - Access And Measurement

1. Verify Google Search Console and submit sitemap.
2. Verify Google Business Profile and confirm the live GBP URL.
3. Verify Bing Webmaster Tools and submit sitemap.
4. Set up a private monthly rank/visibility sheet for the query list above.
5. Record Google local pack and AI Overview/AI Mode manually with date, location, device, language, and account state.

### P1 - Entity And Local Citations

1. Complete GBP profile with accurate categories, services, photos, hours, booking URL, and Q&A.
2. Claim or clean Bing Places.
3. Claim or clean Apple Business Connect.
4. Owner-review Salonly listing and align NAP/services where possible.
5. Add or update trusted local citations:
   - 100doc/ge health/beauty directories if appropriate.
   - Madloba.
   - Locate.ge.
   - Yandex Maps if owner approves and relevant.
   - Tripadvisor only if appropriate for salon/spa discovery.
6. Keep main NAP phone `+995 577 34 57 67`; keep WhatsApp as `+995 577 28 68 55` only as owner-approved separate contact.

### P1 - Page-Level Answer Improvements

1. Add a concise service/location/language summary near the top of homepage and `/en/beauty-salon-batumi`.
2. Add or strengthen `Who this is for`, `Before you book`, and `Aftercare basics` sections on high-intent service pages.
3. Add short price snippets to each service page, always linked back to the central pricelist.
4. Add an owner-approved language/tourist appointment sentence.
5. Keep all additions short, visible, user-first, and in the existing design.

### P2 - Native Language Quality

1. Native-review Georgian, Russian, Turkish, Arabic, and Hebrew local SEO pages.
2. Confirm service terms and treatment names are natural in each language.
3. Check FAQ wording for cultural/linguistic clarity.
4. Avoid literal translation that sounds machine-generated.

### P2 - Content Support

Create helpful blog/support content only where it answers real client questions:

- How to plan Botox/fillers around a Batumi trip.
- How to choose a beauty salon in Batumi as an international client.
- Botox vs fillers: what consultation decides.
- What to ask before a skin treatment or acne consultation.
- How to read salon price lists and starting prices.

Do not mass-generate thin posts. Each article should have a real purpose, internal links, and owner/practitioner review.

## What Not To Do

- Do not add `llms.txt` now.
- Do not add hidden AI answer blocks.
- Do not add fake citations or fake review quotes.
- Do not create "best clinic" listicles designed to manipulate AI answers.
- Do not create thin doorway pages for every possible keyword variant.
- Do not add unverified medical credentials, doctor names, certifications, awards, product brands, or treatment outcome claims.
- Do not add aggregateRating or review schema.

## Next Monitoring Date

Next recommended monitoring date: 2026-08-04.

At that check:

1. Re-run this query set.
2. Use Google Search Console Performance data if access exists.
3. Check Google Business Profile insights if access exists.
4. Check Bing Webmaster query/crawl data if access exists.
5. Capture Google local pack and AI Overview/AI Mode visibility manually.
6. Compare whether Silk pages begin appearing for local SEO service intents after indexing and citation work.

## References

- Google AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google guide to optimizing for generative AI features: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google structured data intro: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
