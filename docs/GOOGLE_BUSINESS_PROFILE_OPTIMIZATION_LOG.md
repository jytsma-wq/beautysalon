# Google Business Profile Optimization Log

Date: 2026-07-04
Phase: 2 - Google Business Profile optimization
Branch: `codex/visibility-readiness-audit`
Mode: read-only planning and documentation

## Safety Rules Applied

- No Google Business Profile edits were published.
- No public business data was changed.
- No fake reviews, fake photos, keyword-stuffed business names, unsupported medical claims, or guaranteed-result claims were created.
- No credentials, account data, verification tokens, private dashboard data, or screenshots were stored.
- Public data changes remain blocked until owner approval and verified GBP access are available.

## Phase 3 Execution Update - 2026-07-04 14:05 Asia/Tbilisi

This update attempted the Google Business Profile audit and safe optimization plan from the current environment.

Result: verified Google Business Profile Manager access is not available in this workspace. No profile was opened in an owner dashboard, no fields were edited, no categories/services were changed, no photos were uploaded, no reviews were requested or replied to, no Q&A was published, and no GBP posts were created.

What was completed:

- Public search checks for Silk Beauty Salon / Zurab Gorgiladze 63 / Batumi.
- Website source-of-truth comparison using `src/data/site-config.ts`, `src/data/booking-treatments.ts`, and treatment collection data.
- Review of existing GBP-safe category, description, service, photo, review, Q&A, and post-calendar plan.
- Current state capture updated with unavailable fields clearly marked.

Public sources checked:

- Official website and booking/contact pages.
- Public search results for a Google Business Profile.
- Public Salonly listing/search snippets for Silk Beauty Salon in Batumi.

### Current GBP State Capture

| GBP field | Current captured state | Source / confidence | Action |
| --- | --- | --- | --- |
| Business name | Not confirmed inside GBP | No verified GBP Manager access. Website source: `Silk Beauty Salon`. | Keep as `Silk Beauty Salon`; do not add keywords. |
| Primary category | Not confirmed | Requires GBP dashboard. | Recommended primary: `Beauty salon`. |
| Secondary categories | Not confirmed | Requires GBP dashboard. | See category recommendation below; use only accurate categories. |
| Address | Not confirmed inside GBP | Website source: Zurab Gorgiladze 63, Batumi, Georgia. Public Salonly citation also shows Zurab Gorgiladze street 63. | Confirm GBP pin/address before publishing. |
| Phone | Not confirmed inside GBP | Website source: `+995 577 34 57 67`. Public Salonly snippets show `577345767`, which matches the main phone digits. | Use main phone as primary NAP phone. |
| WhatsApp | Not confirmed inside GBP | Website source: `+995 577 28 68 55`, separate WhatsApp channel. | Do not replace primary phone with WhatsApp unless owner approves. |
| Website URL | Not confirmed inside GBP | Website source: `https://silkbeautysalon.online`. | Add/confirm exact canonical website URL after access. |
| Booking URL / appointment link | Not confirmed inside GBP | Recommended English booking URL: `https://silkbeautysalon.online/en/book`. | Add only after owner approves. |
| Opening hours | Not confirmed inside GBP | Website source: Mon-Sat `10:00 - 22:00`, Sun `11:00 - 22:00`. | Owner must confirm real operating hours before GBP edit. |
| Business description | Not confirmed | Requires GBP dashboard. Draft below. | Publish only after owner approval. |
| Services | Not confirmed | Requires GBP dashboard. Website supports injectables, fillers, skin, nails, lashes/brows, and selected hair/hair-extension data. | Add only active, owner-confirmed services. |
| Products | Not confirmed | Requires GBP dashboard. Product retail inventory not owner-confirmed. | Do not add products yet. |
| Photos | Not confirmed | Requires GBP dashboard. | Upload only real owner-approved photos. |
| Reviews count | Not confirmed for GBP | No confirmed GBP profile/dashboard. Salonly is a separate platform and not the Google review baseline. | Record after verified GBP access. |
| Average rating | Not confirmed for GBP | No confirmed GBP profile/dashboard. Public Salonly result shows a platform rating, but it is not GBP. | Record after verified GBP access. |
| Review languages | Not confirmed | Requires GBP reviews access. | Record after verified GBP access. |
| Recent reviews | Not confirmed | Requires GBP reviews access. | Record after verified GBP access. |
| Unanswered reviews | Not confirmed | Requires GBP dashboard. | Record and reply after owner approval. |
| Q&A | Not confirmed | Requires GBP public profile/dashboard. | Publish only approved Q&A. |
| Social links | Not confirmed inside GBP | Website source lists Instagram, Facebook, TikTok. | Add/confirm only real active profiles. |
| Profile completeness issues | Unknown inside GBP | Dashboard not available. Public setup is incomplete from this environment because GBP ownership/profile URL is unconfirmed. | Owner must provide/confirm access before public changes. |

### Website Source Comparison

| Field | Website source-of-truth | GBP status | Mismatch / risk |
| --- | --- | --- | --- |
| Name | `Silk Beauty Salon` | Not confirmed | Do not use keyword-stuffed name variants. |
| Address | Zurab Gorgiladze 63, Batumi, Georgia | Not confirmed | GBP pin must be checked against real entrance. |
| Main phone | `+995 577 34 57 67` | Not confirmed | Must be primary public phone unless owner approves another primary phone. |
| WhatsApp | `+995 577 28 68 55` | Not confirmed | Separate channel; do not use as primary NAP phone by accident. |
| Website | `https://silkbeautysalon.online` | Not confirmed | Use canonical HTTPS URL. |
| Booking URL | `https://silkbeautysalon.online/en/book` | Not confirmed | Recommended appointment link. |
| Hours | Mon-Sat `10:00 - 22:00`; Sun `11:00 - 22:00` | Not confirmed | Owner must confirm real-world hours. |
| Services | Botox/anti-wrinkle, dermal fillers, lip fillers, skin treatments, acne, microneedling, peels, nails, lashes/brows, selected hair services in source data | Not confirmed | Only add active, owner-approved services; avoid unsupported medical claims. |
| Prices | Website and booking data contain starting prices for many services | Not confirmed | Publish prices on GBP only if owner approves that GBP should mirror website/booking prices. |

### Public Citation Notes

- Public search did not surface a confirmed Google Business Profile URL that could be audited from this environment.
- Public Salonly results show `Silk Beauty Salon`, Batumi, Zurab Gorgiladze street 63, phone `577345767`, and 3 professionals.
- Salonly text emphasizes hair extensions, Botoxibio hair curling, and nanoplastics. That may not align with the current SEO/service priority mix. Treat it as a citation/service-description review item, not as GBP data.
- Do not use Salonly rating/review data as a Google review baseline.

### Current Review Audit Status

| Review item | Current status |
| --- | --- |
| GBP review count | Not confirmed |
| GBP average rating | Not confirmed |
| Review languages | Not confirmed |
| Recent reviews | Not confirmed |
| Unanswered reviews | Not confirmed |
| Common service mentions | Not confirmed |
| Complaints/themes | Not confirmed |

Action after access: export or manually record review count, rating, recent review themes, unanswered reviews, language mix, and service mentions. Do not reveal private treatment details in replies.

## Access And Current GBP State

Direct Google Business Profile Manager access was not available in this session. Public search did not surface a confirmed editable Silk Beauty Salon Google Business Profile URL. A Google Business Profile sign-in page was reachable, but no verified owner dashboard could be inspected.

Because verified GBP access was unavailable, the current state below is intentionally conservative:

| GBP field | Current state captured | Confidence / note |
| --- | --- | --- |
| Business name | Not confirmed inside GBP | Website source-of-truth: `Silk Beauty Salon`. |
| Categories | Not confirmed | Must be checked in verified GBP dashboard. |
| Address | Not confirmed inside GBP | Website source-of-truth: Zurab Gorgiladze 63, Batumi, Adjara 6000, Georgia. |
| Phone | Not confirmed inside GBP | Website source-of-truth main phone: `+995 577 34 57 67`. |
| Website | Not confirmed inside GBP | Source-of-truth website: `https://silkbeautysalon.online`. |
| Booking URL | Not confirmed inside GBP | Recommended English URL: `https://silkbeautysalon.online/en/book`. Localized booking routes can be used only if GBP supports language-specific links. |
| Opening hours | Not confirmed inside GBP | Website source: Mon-Sat `10:00 - 22:00`, Sun `11:00 - 22:00`; owner must confirm before GBP edit. |
| Business description | Not confirmed | Draft recommendation below. |
| Services | Not confirmed | Recommended service structure below, based on website data. |
| Products | Not confirmed | Do not add products unless owner has real retail products and approved images/prices. |
| Photos | Not confirmed | Use only owner-approved real photos. Shot list below. |
| Reviews count / average rating | Not confirmed | Do not report or use rating claims until confirmed in GBP. |
| Questions and answers | Not confirmed | Recommended Q&A below for owner approval. |
| Social links | Not confirmed inside GBP | Website source includes Instagram, Facebook, TikTok; GBP social-link availability varies by region/category. |
| Appointment / booking link | Not confirmed | Recommended: `https://silkbeautysalon.online/en/book`. |
| Languages / multilingual notes | Not confirmed inside GBP | Website supports EN, KA, RU, TR, AR, HE. Staff language claims need owner confirmation. |

Public search note: Salonly has a Silk Beauty Salon citation at Zurab Gorgiladze street 63, but that is not the Google Business Profile and should not be treated as authoritative without owner review.

## Changes Made

None.

## Recommended But Not Made

All items below require verified GBP access and owner approval before publishing.

1. Confirm or claim the correct Silk Beauty Salon profile.
2. Keep the business name as `Silk Beauty Salon`; do not add keywords to the business name.
3. Set or confirm the primary category as `Beauty salon`.
4. Add only accurate secondary categories that are available in the GBP UI and match real services.
5. Confirm NAP, website, booking URL, hours, and WhatsApp behavior.
6. Add natural business description below.
7. Add service groups and services below.
8. Upload real owner-approved photos from the shot list.
9. Add owner-approved Q&A entries.
10. Start a compliant review request workflow using the templates below.
11. Publish a 12-week GBP post plan using real photos and no phone stuffing in post text.

## Category Recommendation

Google advises representing the real-world business accurately and choosing the fewest categories needed to describe the core business.

Recommended category structure:

| Priority | Category | Recommendation | Approval / accuracy note |
| --- | --- | --- | --- |
| Primary | Beauty salon | Recommended primary category. | Matches real-world brand and broad service mix. |
| Secondary | Skin care clinic | Recommended if available in GBP and accurate for actual skin consultation/treatment offering. | Owner should confirm regulatory/medical wording comfort. |
| Secondary | Nail salon | Recommended if nail services are actively offered. | Website supports nails/manicure/pedicure intent. |
| Secondary | Eyelash salon | Recommended if lash services are actively offered. | Website supports lash services. |
| Secondary | Facial spa | Optional if available and accurate. | Use only if facial/skin-care appointments are a core service. |
| Secondary | Hair removal service | Owner-confirmation required. | Website source includes intimate laser hair removal; do not add if not actively offered or if owner does not want it public. |
| Secondary | Medical spa / aesthetic clinic | Hold pending owner/legal confirmation. | Can imply regulated medical/aesthetic positioning; use only if accurate, allowed, and owner-approved. |

Do not fill all possible category slots. Category stuffing can dilute relevance and increase suspension/review risk.

## Business Description Draft

Draft for GBP `From the business` description:

> Silk Beauty Salon is a beauty and aesthetic salon in Batumi, Georgia, located on Zurab Gorgiladze Street. We offer consultation-led Botox and anti-wrinkle appointments, dermal and lip filler planning, skin treatments, acne-care consultations, microneedling, chemical peels, nails, lashes and brows. The salon welcomes local clients, international visitors and tourists, with online booking and WhatsApp contact available. Every appointment focuses on suitability, hygiene, clear aftercare and a natural, personal approach.

Publishing notes:

- Keep under GBP's 750-character description limit.
- Do not include URLs, phone numbers, HTML, discount language, exaggerated superlatives, or guaranteed outcomes.
- If owner wants to mention staff languages, confirm real spoken languages first. The website is multilingual, but website-language support is not the same as spoken staff coverage.

## Recommended GBP Services

No services were added or edited. The following list is a prepared service plan based on current website source data.

Use starting prices only if the owner confirms that website prices may be mirrored in GBP. If price certainty is lower, omit GBP prices and link users to the price list.

Service-link verification: the recommended English service links in this plan returned HTTP 200 on the live website during this audit.

### Injectables / Botox

| Service | Suggested description | Website price candidate | Duration candidate | Suggested link |
| --- | --- | --- | --- | --- |
| Botox / anti-wrinkle injections | Consultation-led anti-wrinkle injections for lines such as forehead lines, frown lines and crow's feet, with suitability and aftercare discussed before treatment. | From GEL 200 / booking option GEL 300 for forehead lines | 15-30 min | `/en/botox-batumi` |
| Masseter Botox | Jaw-muscle consultation for facial contouring or clenching concerns, with treatment suitability assessed in person. | From GEL 250 | 20-30 min | `/en/treatments/masseter-botox` |
| Hyperhidrosis Botox | Consultation for excessive sweating treatment using targeted injections where appropriate. | From GEL 400 | 30-45 min | `/en/treatments/hyperhidrosis` |

### Dermal Fillers

| Service | Suggested description | Website price candidate | Duration candidate | Suggested link |
| --- | --- | --- | --- | --- |
| Dermal fillers | Facial filler consultation for volume, balance and contour planning, with treatment areas chosen after assessment. | Varies by area | 30-60 min | `/en/dermal-fillers-batumi` |
| Lip fillers | Lip filler consultation for shape, definition and volume planning with aftercare guidance. | From GEL 250 / booking option GEL 350 for Russian Technique 1ml | 30-45 min | `/en/lip-fillers-batumi` |
| Cheek fillers | Filler planning for cheek volume and mid-face contour after consultation. | From GEL 300 / booking option GEL 380 for 1ml | 30-45 min | `/en/treatments/cheek-fillers` |
| Chin fillers | Chin filler planning for facial balance and profile support. | From GEL 300 | 30-45 min | `/en/treatments/chin-fillers` |
| Jawline fillers | Jawline contour consultation using dermal filler where suitable. | From GEL 350 / booking option GEL 700 for 2ml | 45-60 min | `/en/treatments/jaw-fillers` |
| Nasolabial fold fillers | Consultation for softening smile-line folds using dermal filler where appropriate. | From GEL 250 | 30-45 min | `/en/treatments/nasolabial-folds` |

### Skin / Acne / Peels / Microneedling

| Service | Suggested description | Website price candidate | Duration candidate | Suggested link |
| --- | --- | --- | --- | --- |
| Skin consultation | Skin-focused consultation to review concerns, timing, suitability and possible treatment paths. | Confirm owner-approved consultation price before publishing | Confirm | `/en/skin-treatment-batumi` |
| Skin analysis | Skin analysis appointment using consultation and, where available, diagnostic imaging to guide a treatment plan. | From GEL 50 for Observe Skin Scanner | 30 min | `/en/treatments/observe-skin-scanner` |
| Acne treatment consultation | Consultation-led planning for acne-prone skin, acne marks, texture and skin-care timing. | Confirm before publishing | Confirm | `/en/acne-treatment-batumi` |
| Acne scar treatment consultation | Consultation for acne-scar/texture options such as microneedling, peels or device-led care where suitable. | Confirm before publishing | Confirm | `/en/acne-treatment-batumi` |
| Microneedling | Microneedling appointment for texture and acne-mark concerns after suitability review. | From GEL 250 | 45-60 min / booking option 75 min | `/en/treatments/skinpen-microneedling` |
| Chemical peel | Professional peel selected after skin assessment and timing review. | From GEL 150 | 30-45 min | `/en/treatments/obagi-blue-radiance-peel` |
| Fire & Ice Peel | Professional iS Clinical Fire & Ice Peel appointment for skin texture and radiance, subject to suitability. | From GEL 200 | 45-60 min | `/en/treatments/is-clinical-fire-ice-peel` |
| Facial treatment | Facial/skin-care appointment planned around skin goals, sensitivity and timing. | Confirm before publishing | Confirm | `/en/skin-treatment-batumi` |

### Nails

| Service | Suggested description | Website price candidate | Duration candidate | Suggested link |
| --- | --- | --- | --- | --- |
| Manicure | Nail shaping, cuticle care and polished finish for hands. | From GEL 60 / booking gel manicure GEL 55 | 45-75 min / booking 60 min | `/en/nails-batumi` |
| Pedicure | Foot and nail-care appointment with clean shaping and refined finish. | Confirm before publishing | Confirm | `/en/nails-batumi` |
| Gel nails | Longer-wear gel nail finish with shaping and aftercare guidance. | Booking gel manicure GEL 55 | 60 min | `/en/nails-batumi` |
| Nail art | Nail art and finishing details, planned by design complexity. | Booking option GEL 90 | 90 min | `/en/nails-batumi` |

### Lashes And Brows

| Service | Suggested description | Website price candidate | Duration candidate | Suggested link |
| --- | --- | --- | --- | --- |
| Lash extensions | Lash styling for fuller definition, selected around natural lashes and desired finish. | Russian volume lashes GEL 180 | 150 min | `/en/lashes-brows-batumi` |
| Lash lift | Lash lift and tint service to shape and define natural lashes. | GEL 80 | 60 min | `/en/lashes-brows-batumi` |
| Brow lamination | Brow lamination service to shape and set brow direction. | GEL 90 | 60 min | `/en/lashes-brows-batumi` |
| Eyebrow shaping | Brow shaping appointment for clean structure and a natural finish. | Confirm before publishing | Confirm | `/en/lashes-brows-batumi` |

## Products

Recommended current action: do not add GBP products yet.

Reason: source data mentions product brands in older content, but product availability, retail stock, imagery, pricing, and brand-use permission are not owner-confirmed for GBP. If the salon sells real retail products, create a separate owner-approved product inventory first.

## Photo Audit And Shot List

Current GBP photo state could not be inspected without verified GBP access.

Required owner-approved real-photo shot list:

1. Exterior building / entrance from the street.
2. Salon reception and waiting area.
3. Treatment room with clean setup.
4. Clean tools/setup, without exposing client private data.
5. Staff portraits, only with staff approval.
6. Nail work, using real work and client consent where needed.
7. Lashes/brows work, using real work and client consent where needed.
8. Skincare products/devices, only if products/devices are real and owner-approved.
9. Before/after photos only with written client consent and compliant handling.
10. Certificates/licenses only if real, current, and owner-approved.

Photo rules:

- No stock images.
- No heavily filtered or misleading images.
- No treatment-room images that expose client medical/private information.
- No before/after results unless written consent and claim review are complete.

## Review Acquisition Plan

Status: prepared only; nothing was sent or published.

Rules:

- Ask only real clients after real visits.
- Do not offer incentives, discounts, gifts, or pressure.
- Do not ask only happy clients.
- Do not ask clients to use specific keywords, service names, or ratings.
- Do not ask staff to hit a review quota.
- Do not ask clients to write while still on premises under pressure.

Operational workflow:

1. After appointment completion, send one polite review request by SMS, WhatsApp, or email if the client has consented to that communication channel.
2. Use the same neutral request regardless of whether feedback was positive, neutral, or negative.
3. Include the official GBP review link only after the profile is confirmed.
4. Keep a private operations log of request date/channel, not review content.
5. Escalate negative/private feedback to the owner privately, but do not review-gate.

### Multilingual Review Request Templates

Replace `[review link]` only after the verified GBP review URL is available.

English:

> Thank you for visiting Silk Beauty Salon in Batumi. If you would like to share your experience, we would appreciate an honest Google review in your own words: [review link]. There is no incentive or obligation, and all feedback is welcome.

Georgian:

> მადლობა, რომ ეწვიეთ Silk Beauty Salon-ს ბათუმში. თუ გსურთ თქვენი გამოცდილების გაზიარება, მადლობელი ვიქნებით გულწრფელი Google შეფასებისთვის თქვენი სიტყვებით: [review link]. ეს არ არის სავალდებულო და არ ახლავს რაიმე წახალისება; ყველა უკუკავშირი მისაღებია.

Russian:

> Спасибо, что посетили Silk Beauty Salon в Батуми. Если вы хотите поделиться своим опытом, мы будем благодарны за честный отзыв в Google своими словами: [review link]. Это не обязательно, мы не предлагаем вознаграждение, и нам важна любая обратная связь.

Turkish:

> Batum’daki Silk Beauty Salon’u ziyaret ettiğiniz için teşekkür ederiz. Deneyiminizi paylaşmak isterseniz, Google’da kendi sözlerinizle dürüst bir yorum bırakmanız bizi mutlu eder: [review link]. Herhangi bir zorunluluk veya teşvik yoktur; tüm geri bildirimler değerlidir.

Arabic:

> شكراً لزيارتك Silk Beauty Salon في باتومي. إذا رغبتِ/رغبت في مشاركة تجربتك، يسعدنا ترك تقييم صادق على Google بكلماتك الخاصة: [review link]. لا يوجد أي التزام أو حافز مقابل التقييم، وكل الآراء مرحب بها.

Hebrew:

> תודה שביקרת ב-Silk Beauty Salon בבטומי. אם תרצה/תרצי לשתף את החוויה שלך, נשמח לביקורת כנה ב-Google במילים שלך: [review link]. אין חובה ואין תמריץ להשארת ביקורת; כל משוב מתקבל בברכה.

## Review Reply Templates

Use only when replying to actual public reviews. Do not reveal private treatment details unless the reviewer already made them public.

Positive review:

> Thank you for your kind review. We are glad you had a good experience at Silk Beauty Salon in Batumi and appreciate you taking the time to share it.

Neutral review:

> Thank you for your feedback. We appreciate you visiting Silk Beauty Salon and will use your comments to keep improving the client experience.

Negative review:

> Thank you for sharing your feedback. We are sorry your experience did not meet expectations. Please contact us directly so we can understand what happened and review it with care.

Review mentioning Botox/fillers:

> Thank you for your review. We are glad the consultation and aftercare information were helpful. We always aim for careful planning and clear guidance for aesthetic appointments.

Review mentioning nails/lashes:

> Thank you for your kind feedback. We are happy you enjoyed your nail/lash appointment and appreciate you sharing your experience with Silk Beauty Salon.

Tourist review:

> Thank you for visiting us while in Batumi. We appreciate your review and are glad the booking and salon experience were helpful during your trip.

Multilingual client review:

> Thank you for your review. We are glad communication felt comfortable and that your visit to Silk Beauty Salon in Batumi went smoothly.

## Recommended GBP Q&A

Do not publish Q&A until the owner confirms profile access and facts.

| Question | Draft answer | Approval note |
| --- | --- | --- |
| Do you offer Botox in Batumi? | Yes. Silk Beauty Salon offers consultation-led Botox and anti-wrinkle appointments in Batumi. Suitability, expected timing and aftercare are discussed before treatment. | Avoid guaranteed results. |
| Do you offer lip fillers? | Yes. Lip filler consultations are available for clients who want to discuss shape, definition and volume planning. Final treatment choice depends on in-person consultation. | Keep consultation-led. |
| Can tourists book appointments? | Yes. Local clients and visitors to Batumi can book online or contact the salon before arrival to plan timing around travel. | Confirm if any travel-specific constraints apply. |
| Do you speak English/Russian/Georgian/Turkish/Arabic/Hebrew? | The website is available in English, Georgian, Russian, Turkish, Arabic and Hebrew. Staff spoken languages should be confirmed directly when booking. | Do not claim spoken Arabic/Hebrew unless owner confirms. |
| Where is the salon located? | Silk Beauty Salon is located at Zurab Gorgiladze 63, Batumi, Georgia. | Confirm address matches GBP pin. |
| Can I book by WhatsApp? | WhatsApp contact is available for booking questions. The website also has online booking. | WhatsApp number is separate from main phone. |
| Are prices available online? | Yes. Starting prices are available on the website price list. Final price depends on consultation, treatment area and suitability. | Link to `/en/pricelist` where supported. |
| Do you offer acne treatment consultations? | Yes. The salon offers consultation-led planning for acne-prone skin, acne marks, texture and skin-care options. | Avoid medical cure claims. |
| Do you offer nails and lashes? | Yes. Nail services and lash/brow appointments are listed on the website and can be booked online where available. | Confirm active service availability before publishing. |

## 12-Week GBP Post Calendar

Use real owner-approved photos. Do not include phone numbers inside post text; attach a GBP call button if needed. Use booking or learn-more buttons where supported.

| Week | Topic | Draft post | Suggested CTA |
| --- | --- | --- | --- |
| 1 | Botox consultations in Batumi | Thinking about anti-wrinkle treatment in Batumi? Silk Beauty Salon offers consultation-led Botox appointments with suitability review, timing guidance and aftercare discussion before treatment. | Book |
| 2 | Lip fillers / natural-looking planning | Lip filler planning should start with shape, balance and personal goals. Book a consultation at Silk Beauty Salon in Batumi to discuss options and aftercare. | Book |
| 3 | Skin treatments and acne-prone skin | Acne-prone skin and texture concerns need a careful plan. Our skin consultations can review peels, microneedling and skin-care timing based on suitability. | Learn more |
| 4 | Nails / manicure / pedicure | Book a clean, polished nail appointment in Batumi for manicure, pedicure, gel finish or nail art planning. | Book |
| 5 | Lashes and brows | Lash and brow appointments can help define the eye area with a natural finish. Ask about lash lift, lash styling and brow lamination options. | Book |
| 6 | Visit Us / location in Batumi | Visit Silk Beauty Salon at Zurab Gorgiladze 63 in Batumi, close to the city centre and easy to reach by taxi or on foot. | Directions |
| 7 | Prices / starting prices | Starting prices for popular treatments are available online, with final recommendations confirmed after consultation. | Learn more |
| 8 | Skin analysis / consultation | A skin consultation helps match treatment timing, sensitivity and goals before choosing peels, microneedling or other skin appointments. | Book |
| 9 | Tourists and multilingual booking | Visiting Batumi? Silk Beauty Salon welcomes local and international clients. Plan your appointment timing before travel, events or photos. | Book |
| 10 | Aftercare and consultation safety | Good treatment planning includes aftercare. During consultation, we review timing, suitability and what to avoid after your appointment. | Learn more |
| 11 | Before/after policy with consent | Real treatment photos should protect client privacy. Before/after images are shared only when appropriate consent and review are complete. | Learn more |
| 12 | Seasonal beauty appointments | Plan beauty appointments ahead of holidays, weddings and travel dates so there is enough time for consultation and aftercare. | Book |

## Owner Approvals Needed

1. Confirm or claim the correct Google Business Profile.
2. Approve main profile NAP:
   - Name: Silk Beauty Salon
   - Address: Zurab Gorgiladze 63, Batumi, Georgia
   - Main phone: `+995 577 34 57 67`
   - Website: `https://silkbeautysalon.online`
3. Confirm WhatsApp `+995 577 28 68 55` should remain separate from the primary phone.
4. Confirm opening hours match real operations.
5. Approve primary/secondary category selection.
6. Approve business description.
7. Approve services, durations and whether prices should be published on GBP.
8. Confirm active service availability, especially hair removal, medical spa/aesthetic clinic wording, pedicure, eyebrow shaping and any product/device claims.
9. Approve all photos before upload.
10. Approve Q&A before publishing.
11. Approve review request process and channels.
12. Approve post calendar and images.

## Next Review Date

Next scheduled GBP optimization review: 2026-08-04.

At that review, check:

- Profile ownership and verification status.
- Category and service publication status.
- Photo count and quality.
- Reviews count/rating and unanswered reviews.
- Q&A accuracy.
- Post cadence.
- GBP Insights if owner grants access.
- Whether any user-suggested Google edits need approval/rejection.

## References

- Google Business Profile guidelines: https://support.google.com/business/answer/3038177
- Google Business Profile editing help: https://support.google.com/business/answer/3039617
- Google Business Profile photos/videos/posts policy: https://support.google.com/business/answer/7213077
- Google Maps prohibited and restricted content policy: https://support.google.com/contributionpolicy/answer/7400114
