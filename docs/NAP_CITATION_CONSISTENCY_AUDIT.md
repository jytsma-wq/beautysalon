# NAP Citation Consistency Audit

Date: 2026-07-04
Phase: 8 - Citations and NAP consistency
Branch: `codex/visibility-readiness-audit`
Mode: public citation audit and correction plan only; no third-party listing edits

## Safety Rules Applied

- No public listings were created, claimed, edited, merged, deleted, or corrected.
- No DNS, Hostinger, Google, Bing, social, booking-platform, billing, ownership, or production settings were changed.
- No fake listings, reviews, photos, credentials, staff claims, awards, or treatment claims were created.
- No paid links, suspicious directories, automated citation submission, or mass directory work was performed.
- Public search snippets are treated as approximate because snippets can be stale or personalized.
- Any third-party edits require owner approval and confirmed account access first.

## Phase 6 Execution Update - 2026-07-05 09:55 Asia/Tbilisi

This update refreshes the public NAP/citation audit after the Phase 5 visibility baseline. It uses public search results, directly accessible public pages, and the website source-of-truth in `src/data/site-config.ts`.

No public listings were edited, created, claimed, merged, deleted, or submitted. No money was spent.

### Fresh Source-Of-Truth Confirmation

| Field | Expected value | Current confidence |
| --- | --- | --- |
| Business name | `Silk Beauty Salon` | Confirmed in website config and live first-party pages. |
| Address | `Zurab Gorgiladze 63, Batumi, Georgia` | Confirmed in website config, live first-party pages, Salonly, Facebook snippets, and `silkbeauty.ge`. |
| Main phone | `+995 577 34 57 67` | Confirmed in website config and live first-party pages. This should remain the primary NAP phone. |
| WhatsApp | `+995 577 28 68 55` | Confirmed in website config and public Facebook snippets as a separate contact channel. Do not replace the main NAP phone with this unless owner explicitly approves. |
| Website | `https://silkbeautysalon.online` | Current canonical website for this project. |
| Alternative public site | `https://www.silkbeauty.ge/` | Publicly live and appears to describe the same salon/location. Owner must confirm its role before profile/GBP website-link changes. |
| Booking URL | `https://silkbeautysalon.online/en/book` | Current project booking route. `silkbeauty.ge` also links to BeautyBook; owner must choose the official booking path per platform. |
| Email | `info@silkbeautysalon.online` | Confirmed on live first-party pages. |
| Opening hours | Mon-Sat `10:00 - 22:00`; Sun `11:00 - 22:00` | Confirmed in website config and live first-party pages; still should be real-world owner-confirmed before third-party edits. |

### Public Listing Audit Table

| Platform | Current data observed | Expected data | Mismatch / risk | Correction needed | Owner approval required | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Google Business Profile | Not confirmed from public results or editable account view in this phase. | Exact NAP, primary category `Beauty salon`, website, booking URL, hours, services, photos, reviews, Q&A. | Highest local-search gap if unclaimed, incomplete, duplicated, or pointing to the wrong website/phone. | Owner/admin opens GBP Manager, confirms correct profile/pin, records current data, and approves any edits before publishing. | Yes | P0 |
| Google Maps | No confirmed public Google Maps listing URL for Silk Beauty Salon was captured in this phase. | Map pin at Zurab Gorgiladze 63 with main phone, website, hours, photos, and directions. | If missing/unclaimed, local-pack visibility will remain weak. If duplicate exists, creating another listing would be harmful. | Search Maps from owner account and Batumi/location context; claim/correct only after duplicate check. | Yes | P0 |
| First-party website | Live pages show correct address, main phone, email, hours, services, booking links, and WhatsApp CTA. | Keep as canonical citation hub. | Public search snippets still show stale old phone for some pages even though live visible HTML is corrected. | Use Search Console URL Inspection/reindexing for affected canonical URLs; continue monitoring snippets. | GSC access needed | P1 |
| Google search snippets | Fresh public search still showed old `+995 599 123 456` snippets for `/en`, `/en/book`, and `/en/beauty-salon-batumi`; the opened/live page body shows `+995 577 34 57 67`. | Snippets should eventually match live source-of-truth. | Stale snippet pollution can confuse users and search entity data. | Request recrawl after Search Console checks; do not change live source unless old number reappears in current source. | Yes for GSC actions | P1 |
| Salonly | Public Salonly profile exists at `salonly.ge/en/salons/16`; search/public page shows `Silk Beauty Salon`, `Zurab Gorgiladze street 63, Batumi`, `5.0`, `3 Professionals`, and worker/service pages. Search snippets show services including hair extensions/nanoplastics and phone digits matching `577345767`. | Main phone `+995 577 34 57 67`, correct active services, real staff/professionals, hours, photos, website/booking handoff if supported. | Identity/address/phone digits mostly align, but service mix may be hair-heavy or stale compared with current SEO/service priorities; website/booking/hours not fully public-verifiable. | Owner/admin checks Salonly dashboard for phone formatting, services, professionals, prices, hours, photos, reviews, and website/booking link. | Yes | P0 |
| BeautyBook | Public search found BeautyBook mentions tied to SilkBeauty.Salon and a `beautybook.ge/salons/616` reference; `silkbeauty.ge` links to BeautyBook for online booking. | If active, exact NAP, current services, current prices, real photos, and clear booking flow. | Booking-source ambiguity: website booking route, Salonly, BeautyBook, and `silkbeauty.ge` may split users unless owner defines the canonical booking path. | Owner/admin opens BeautyBook profile directly, confirms active status, NAP, services, photos, prices, and whether BeautyBook should remain the public booking path. | Yes | P0 |
| Facebook | Public Facebook snippets for `SilkBeauty.Salon | Batumi` show Batumi/Gorgiladze 63 plus both `577 34 57 67` and `577 28 68 55`; website config links to `facebook.com/silkbeautybatumi/`, while public search also surfaces a page-ID URL. | One canonical Facebook page with business name, address, main phone, separate WhatsApp if supported, website, booking link, hours, services, and real photos. | Page/handle ambiguity plus phone-role ambiguity: some posts use the WhatsApp number as the contact number. | Owner confirms canonical Facebook page and updates About/pinned contact details with primary NAP phone plus WhatsApp as separate channel. | Yes | P0 |
| Instagram | Website config links to `instagram.com/silkbeauty_batumi/`; `silkbeauty.ge` also links to Instagram. Public search did not expose full current bio/NAP. | Official handle with business name, Batumi location, website/booking link, contact buttons, and service highlights. | Cannot verify profile NAP publicly; many unrelated Silk Beauty profiles exist globally. | Owner/admin checks bio, link-in-bio, contact buttons, location tag, highlights, and whether it points to `silkbeautysalon.online`, `silkbeauty.ge`, BeautyBook, or Salonly. | Yes | P1 |
| TikTok | Website config links to `tiktok.com/@silkbeautybatumi`; public search did not confirm full profile data. | Consistent official handle/name, Batumi context, link/booking path if supported, no unsupported claims. | Activity/profile quality not confirmed. | Owner confirms whether TikTok is official/active and whether it should remain linked. | Yes | P2 |
| `silkbeauty.ge` | Public site is live and appears to describe the same salon at Gorgiladze 63 with phone `577 34 57 67`, WhatsApp, Instagram/Facebook links, BeautyBook booking, Georgian content, staff names, services, and claims. | One clearly owner-approved website strategy: either this is an official supporting Georgian site, a legacy site, or it should redirect/canonicalize to the main site later. | P0 source-of-truth risk: two public websites can split authority, confuse GBP website choice, and create service/staff/claim inconsistency. | Owner confirms ownership, purpose, CMS/admin, booking role, claims, service list, and whether it should be linked, redirected, canonicalized, or left as separate. | Yes | P0 |
| Bing Places | Not confirmed in this phase. | Same NAP as GBP/website with exact website/booking URL, hours, categories, services, photos. | Bing/local AI entity confidence may remain weak. | Verify/claim after owner-approved Bing access; do not add duplicate. | Yes | P1 |
| Apple Maps / Apple Business Connect | Not confirmed in this phase. | Exact NAP, category, hours, website, photos, directions. | Tourist/iPhone discovery gap. | Owner-approved Apple Business Connect check/claim after Google NAP is finalized. | Yes | P1 |
| Yandex Maps | Search samples did not find a Silk listing, while competitor Yandex listings for Batumi beauty salons were visible. | Exact NAP, hours, Russian/Georgian category, website/booking link, photos. | Russian-speaking discovery gap. | Check Yandex Maps directly; claim/add only if no duplicate exists and owner approves. | Yes | P1 |
| 2GIS | No confirmed Silk listing found in public samples. | Exact NAP, map pin, hours, services, website/contact links. | Russian/local map-discovery gap. | Check 2GIS directly and add/claim only after duplicate review. | Yes | P2 |
| Madloba | Madloba beauty-salon category is visible with competitors including LAKmousse and others; Silk was not found in sampled visible listings. | If listed, exact NAP, website, services, category, photos. | Relevant Georgian/local directory opportunity, not a confirmed mismatch. | Evaluate and add/claim only if platform quality is acceptable and owner approves. | Yes | P1 |
| InfoBatumi | Beauty salon category visible with competitors such as LAKmousse, Tamarisia, Nail Sector, Diamond, ArtInMotion; Silk not found in sampled visible list. | If listed, exact NAP, website, phone, category, photos. | Local/tourism directory opportunity, lower priority than GBP/Salonly/Facebook/BeautyBook. | Evaluate after P0 platforms. | Yes | P2 |
| Tripadvisor | Batumi hair/nail salon category shows competitors such as LAKmousse, Mriya, Black Panther; Silk not found. | Only list if category fit and owner wants tourist-facing discovery. | Optional tourism opportunity; review-policy compliance matters. | Evaluate after core NAP cleanup; no fake travel reviews. | Yes | P3 |
| Other same-name entities | Public results show unrelated Silk Beauty Salon/Spa entities in South Africa, Austin, and other markets. | Silk Beauty Salon Batumi entity should be distinguishable by city, address, website, and Georgian phone. | Brand ambiguity can dilute search entity confidence. | Keep citations consistently tied to Batumi, Georgia, Zurab Gorgiladze 63, and the canonical website. | No public edit unless owner controls listing | P2 |

### Fresh Mismatch Summary

P0:

- Google Business Profile / Google Maps profile still needs owner-account confirmation.
- `silkbeauty.ge` is a live alternate public site for the same location and must be resolved as official/supporting/legacy before major public profile edits.
- Salonly and BeautyBook appear active or relevant but need dashboard verification for NAP, booking, services, staff, prices, photos, and review data.
- Facebook canonical page and phone-role handling need owner confirmation.

P1:

- Google snippets still show stale old phone `+995 599 123 456` for some first-party pages even though live page content shows the correct number.
- Bing Places, Apple Maps, Yandex Maps, and Madloba remain unconfirmed/missing opportunities.
- Instagram official profile data is not fully public-verifiable.

P2/P3:

- TikTok, 2GIS, InfoBatumi, Tripadvisor, and other directory opportunities should wait until core sources are consistent.
- Unrelated same-name Silk Beauty businesses appear globally; citation consistency should make the Batumi entity unambiguous.

### Correction Plan - Current Order

1. Owner confirms `silkbeautysalon.online` versus `silkbeauty.ge` role and the official booking path for public profiles.
2. Owner confirms Google Business Profile/Maps profile exists, is owned, and has no duplicates.
3. Correct/complete GBP first: name, address, main phone, separate WhatsApp, website, booking URL, categories, services, hours, photos, Q&A.
4. Verify Salonly and BeautyBook dashboards; correct only owner-controlled data.
5. Confirm Facebook canonical page and pin/update an exact NAP/contact post.
6. Confirm Instagram/TikTok profiles and link destinations.
7. Claim or correct Bing Places, Apple Maps, and Yandex Maps only after source-of-truth decisions are final.
8. Add or correct Madloba, 2GIS, InfoBatumi, and Tripadvisor only if platform quality is acceptable and owner approves.
9. Use Search Console to request recrawl for pages whose snippets still show the old phone.
10. Recheck public snippets and citation consistency on 2026-08-04.

## Phase 6 Execution Update - 2026-07-04 14:15 Asia/Tbilisi

This update rechecked public citation signals for Silk Beauty Salon across Google-visible search results, Salonly, Facebook, Instagram/TikTok search visibility, Georgian local directories, beauty booking platforms, and tourism/expat-style directories.

No listings were created, claimed, edited, merged, deleted, or corrected.

### Current Source-Of-Truth Confirmation

Live website source and `src/data/site-config.ts` confirm:

| Field | Expected value |
| --- | --- |
| Business name | `Silk Beauty Salon` |
| Address | `Zurab Gorgiladze 63, Batumi, Georgia` |
| Main phone | `+995 577 34 57 67` |
| WhatsApp | `+995 577 28 68 55` |
| Website | `https://silkbeautysalon.online` |
| Booking URL | `https://silkbeautysalon.online/en/book` |
| Email | `info@silkbeautysalon.online` |
| Hours | Mon-Sat `10:00 - 22:00`; Sun `11:00 - 22:00` |

Live raw HTML checks for `/en`, `/en/book`, and `/en/beauty-salon-batumi` found:

- Main phone present.
- WhatsApp present on `/en`.
- Old placeholder phone `+995 599 123 456` not present in raw live HTML.

However, public search snippets still show the old placeholder phone for some Silk pages. Treat this as a stale-snippet/crawl-cache issue unless future live-source checks find the number again.

### Current Public Listing Findings

| Platform | Current public data observed | Expected data | Mismatch / risk | Correction needed | Owner approval required | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Google Business Profile | Not confirmed. Public search did not expose a clearly confirmed editable GBP profile URL for Silk Beauty Salon. | Exact NAP, primary category `Beauty salon`, website, booking URL, hours, services, photos, reviews. | GBP/profile ownership remains the largest local visibility gap. | Owner signs in, confirms/claims correct profile, records current data before edits. | Yes | P0 |
| Google Maps | Not confirmed from this environment. | Real map pin for Zurab Gorgiladze 63 with primary phone and website. | Missing or unclaimed map profile can weaken local-pack visibility. | Confirm from Google Maps/GBP dashboard; avoid creating duplicate listing. | Yes | P0 |
| Google Search snippets | Public snippets still show `+995 599 123 456` for some Silk pages, while live HTML checks show the correct main phone and no old placeholder. | Snippets should eventually show `+995 577 34 57 67`. | Stale snippets can confuse users and external entity systems. | After Search Console access, inspect affected canonical URLs and request recrawl. | Yes for GSC access | P1 |
| Bing Places | Not confirmed; no Bing Webmaster/Bing Places access available. | Same NAP as GBP/website. | Bing/local AI systems may have weak entity confidence. | Verify/claim after owner-approved Bing access. | Yes | P1 |
| Salonly | Public listing observed at `salonly.ge/en/salons/16`: `Silk Beauty Salon`, `Zurab Gorgiladze street 63, Batumi`, rating `5.0`, `3 Professionals`; search snippets show services such as hair extensions, Botoxibio hair curling, nanoplastics, and phone digits `577345767`. | Primary phone `+995 577 34 57 67`, website, booking URL, current active services, hours, real photos. | Name/address/phone digits appear aligned, but service mix may be hair-heavy or stale compared with current website SEO priorities. Website/booking/hours not confirmed publicly. | Owner/admin verifies phone formatting, website link, booking handoff, active services, staff/professionals, hours, photos, and reviews. | Yes | P0 |
| Facebook | Public Facebook result for `SilkBeauty.Salon | Batumi` observed. Snippets show address cues for Gorgiladze 63, main phone `577 34 57 67`, WhatsApp `577 28 68 55`, and recent posts. Website source links to `facebook.com/silkbeautybatumi`, while public search also surfaces `facebook.com/people/SilkBeautySalon/61576489505786/`. | One canonical Facebook page/handle with exact NAP, website, booking link, hours, services, and contact buttons. | Possible canonical page/handle ambiguity; some posts emphasize WhatsApp as the phone. | Owner confirms the official Facebook page, primary phone, WhatsApp channel, website/booking links, hours, and pinned contact post. | Yes | P0 |
| Instagram | Website source links `instagram.com/silkbeauty_batumi/`; public search did not reliably expose full profile NAP. Many unrelated Silk/beauty profiles appear. | Official handle with name, Batumi location, website/booking link, contact buttons, and service highlights. | Official profile data not fully verifiable publicly; handle consistency matters. | Owner/admin confirms bio, link-in-bio, contact buttons, location tag, category, and highlights. | Yes | P1 |
| TikTok | Website source links `tiktok.com/@silkbeautybatumi`; public search did not confirm full active profile data. | Consistent handle/name, Batumi context, link or booking path if supported. | Profile could be inactive, incomplete, or not visible to search tools. | Owner confirms whether TikTok is active and whether website should continue linking it. | Yes | P2 |
| BeautyBook | Public search snippets show BeautyBook/Facebook mentions involving `SilkBeauty.Salon`; direct listing data was not fully verified. | If active, exact NAP, services, prices, photos, booking flow, and current phone. | Possible old/stale phone risk from snippets around BeautyBook ecosystem, but not confirmed as current listing data. | Owner/admin checks BeautyBook salon profile directly and corrects only after verifying exact current data. | Yes | P0 |
| Georgian local directories - InfoBatumi | InfoBatumi beauty-salon category is visible, but Silk was not confirmed in the public category sample. Competitors such as LAKmousse and Nail Sector appear. | Silk listing with exact NAP and website if owner approves. | Opportunity gap, not confirmed mismatch. | Evaluate quality and add/claim only if no duplicate and platform is reputable. | Yes | P2 |
| Georgian local directories - Yell.ge | Yell.ge beauty salon category appears, but Silk was not confirmed in sampled result. | Exact NAP if listed. | Opportunity gap; directory quality should be evaluated before adding. | Review manually before any submission. | Yes | P3 |
| Georgian local directories - Madloba | Madloba beauty salon pages appear for competitors; Silk not confirmed in public samples. | Exact NAP, website, category, photos if listed. | Opportunity gap; Madloba appears relevant for Batumi local discovery. | Consider after GBP/Salonly/Facebook corrections. | Yes | P1 |
| Yandex Maps | Competitor beauty salon listings are strong on Yandex, but Silk was not confirmed in sampled public results. | Exact NAP, categories, hours, photos, website/booking link. | Russian-language local discovery gap. | Owner-approved Yandex Maps check/claim after duplicate review. | Yes | P1 |
| Tripadvisor | Batumi hair/nail salon category shows competitors such as LAKmousse and Mriya; Silk not confirmed. | Only list if category fit and owner wants tourism visibility. | Opportunity gap, not urgent. | Evaluate after core citations; no fake travel reviews. | Yes | P3 |
| Other booking platforms | Global unrelated `Silk Beauty Salon` listings appear outside Georgia, including South Africa/UK/Fresha/Trustpilot examples. No confirmed Batumi booking-platform profile beyond Salonly/possible BeautyBook. | Avoid creating unnecessary duplicate booking profiles. | Similar-name entities can confuse brand/entity search. | Do not create accounts unless operationally useful and owner-approved. | Yes | P3 |

### Current Mismatch Summary

P0:

- GBP/Google Maps profile is still unconfirmed.
- Salonly needs owner/admin review for service mix, website, booking link, hours, photos, and review details.
- Facebook canonical page/handle and primary phone/WhatsApp display need owner confirmation.
- BeautyBook needs direct owner/admin verification because public snippets are inconclusive.

P1:

- Public search snippets still show the old placeholder phone for some first-party pages despite live HTML being corrected.
- Bing Places, Apple Maps, Yandex Maps, and Madloba are not confirmed and may be missing citation opportunities.

P2/P3:

- Instagram/TikTok metadata cannot be fully confirmed publicly.
- InfoBatumi, Yell.ge, 2GIS, Tripadvisor, and additional booking platforms are opportunity checks, not urgent corrections.

## NAP Source Of Truth

Use this as the expected public citation baseline unless the owner explicitly approves a different value.

| Field | Expected value | Notes |
| --- | --- | --- |
| Business name | `Silk Beauty Salon` | Do not add keywords to the name on GBP, Bing Places, maps, or directories. |
| Address | `Zurab Gorgiladze 63, Batumi, Georgia` | Website also uses `Batumi, Adjara 6000, Georgia`; directory formatting can vary. |
| Main phone | `+995 577 34 57 67` | Primary NAP phone for listings. |
| WhatsApp | `+995 577 28 68 55` | Owner-approved separate WhatsApp channel. Do not make it the main listing phone without explicit approval. |
| Website | `https://silkbeautysalon.online` | Use canonical host with HTTPS. |
| Booking URL | `https://silkbeautysalon.online/en/book` | Use localized booking links only when the platform supports language-specific URLs cleanly. |
| Email | `info@silkbeautysalon.online` | Publish only where useful and owner-approved. |
| Opening hours | Mon-Sat `10:00 - 22:00`; Sun `11:00 - 22:00` | Confirm real-world hours before editing third-party platforms. |
| Core categories | Beauty salon; optional Skin care clinic, Nail salon, Eyelash salon, Facial spa | Use only categories that are available and accurate on each platform. |
| Languages | Website supports EN, KA, RU, TR, AR, HE | Do not claim spoken staff languages beyond owner-confirmed facts. |

## Public Citation Summary

| Platform | Current public data observed | Expected data | Mismatch / risk | Action needed | Owner approval needed | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Google Business Profile Manager | Not available in this session; no verified editable profile inspected. | Exact NAP, website, booking URL, hours, categories, services, photos. | GBP ownership/profile URL is still not confirmed. This is the highest-value local visibility gap. | Owner signs in, confirms or claims the correct profile, verifies NAP, categories, services, hours, photos, and review link. | Yes | P0 |
| Google Maps public listing | No confirmed public Silk Beauty Salon Google Maps profile URL was found from public search in this environment. | Public map listing for the real salon at Zurab Gorgiladze 63 with main phone and website. | If no listing exists, local-pack visibility will be weak. If a listing exists but is unclaimed, public edits can introduce wrong data. | Search Google Maps from an owner-controlled account/location, confirm exact profile, claim or correct only after approval. | Yes | P0 |
| Google Search snippets for Silk website | Some public snippets for Silk pages still show old placeholder phone `+995 599 123 456`, while live page text observed in prior audits uses `+995 577 34 57 67`. | Search snippets should eventually reflect the live main phone and correct booking/location text. | Stale snippets can confuse users and pollute perceived NAP consistency even after the live website is fixed. | After Search Console access exists, inspect affected URLs and request reindexing for canonical pages. Continue monitoring until snippets refresh. | Search Console access approval needed | P1 |
| Salonly profile | Public Salonly listing shows `Silk Beauty Salon`, `Zurab Gorgiladze street 63, Batumi`, `5.0`, `1 reviews`, `3` professionals, price range `₾80 - ₾1600`, and services such as Biorevitalization, Mesobotox, and Eye mesotherapy. Service-filter snippets show phone `577345767`. | Main NAP phone should be `+995 577 34 57 67`; website and booking link should point to Silk website where Salonly allows it; services should reflect active owner-approved offerings. | Main identity/address appear aligned. Need owner/admin check for phone formatting, website link, booking behavior, full services, hours, photos, and whether any old/stale Salonly snippets show wrong phone data. | Log in to Salonly/partner profile, confirm phone, website, services, categories, staff, hours, photos, reviews, and booking handoff. | Yes | P0 |
| Salonly possible duplicate/ambiguous listings | Search snippets also show a separate `Silk Beauty` in Telavi and occasional phone ambiguity around `551611115`. | Batumi listing should be distinct from unrelated Silk listings. | Similar names can confuse search engines and users. Do not remove anything unless ownership/relationship is confirmed. | Confirm whether any non-Batumi `Silk Beauty` listing is unrelated. If unrelated, leave it alone; if duplicate/wrong, request correction through Salonly. | Yes | P2 |
| Facebook page | Public snippets show `SilkBeauty.Salon | Batumi`, page ID URL, about/post snippets with `+995 577 286 855`, posts mentioning `577 34 57 67`, `577 28 68 55`, and `Zurab Gorgiladze 63`. Source code links to `https://www.facebook.com/silkbeautybatumi/`, while search surfaces a page-style URL under `SilkBeautySalon/61576489505786`. | Canonical Facebook page should use business name, address, main phone, WhatsApp as separate channel if supported, website, booking URL, hours, categories, and real photos. | Possible handle/page URL mismatch and primary-phone ambiguity. The `+995 577 286 855` number is the WhatsApp number, not the main NAP phone. | Confirm canonical Facebook page/handle, update About details with primary NAP phone and website/booking links, and keep WhatsApp as a separate contact channel where Facebook supports it. | Yes | P0 |
| Instagram | Website source links to `https://www.instagram.com/silkbeauty_batumi/`. Public search did not reliably expose a full official profile NAP panel; snippets around Instagram posts mention Silk Beauty Batumi and Gorgiladze 63 via related content. | Bio should clearly show Silk Beauty Salon, Batumi, Zurab Gorgiladze 63, booking link or Link-in-bio to website, and WhatsApp/contact behavior. | Official profile data could not be verified publicly. There are many unrelated `Silk Beauty` profiles worldwide, so exact handle consistency matters. | Owner/admin should verify official handle, bio, website link, contact buttons, category, highlights, and location tag. | Yes | P1 |
| TikTok | Website source links to `https://www.tiktok.com/@silkbeautybatumi`; public search did not reliably confirm active official profile details. | Official TikTok should use consistent handle/name, Batumi location context, website or booking link if supported, and no unsupported claims. | Not confirmed; risk of an empty, wrong, or unclaimed handle. | Owner/admin verifies whether TikTok is active and updates profile metadata if used. If inactive, consider whether site should keep linking it in a separate approved code/content task. | Yes | P2 |
| LinkedIn | No confirmed Batumi Silk Beauty Salon LinkedIn profile found. Public results showed unrelated Silk Beauty Salon entities outside Georgia. | Optional only if owner wants a professional/business profile. | Low direct local-search value for salon services; unrelated results can confuse generic brand searches. | Do not create unless owner wants it. If created, use exact NAP and avoid unverified employer/staff claims. | Yes | P3 |
| BeautyBook / beautybook.ge | Public Facebook/Instagram snippets show BeautyBook.ge mentions involving SilkBeauty.Salon and one public snippet references `beautybook.ge/salons/616`. Some BeautyBook-related snippets include `599 123 456`, but public snippets do not prove whether that is BeautyBook's contact, a post artifact, or Silk-specific data. | Any BeautyBook listing for Silk should use exact NAP, main phone, website/booking link, active services, real photos, and hours. | Potential stale/ambiguous phone risk. Because BeautyBook is a relevant Georgian beauty booking platform, this should be verified directly. | Owner/admin opens BeautyBook salon profile, confirms NAP, phone, booking flow, service list, photos, reviews, and whether the old placeholder appears anywhere tied to Silk. | Yes | P0 |
| Google/Bing/AI-visible website citations | Live website source-of-truth is strong and prior technical audits found correct main phone, WhatsApp separation, address, hours, JSON-LD, sitemap, and robots. | Keep website as primary canonical citation. | Search snippets can lag behind live content. External profiles may not yet corroborate the website strongly enough. | Continue using the website as the citation hub; reindex affected pages after GSC access; keep NAP stable. | No public edit until Search Console access | P1 |
| Bing Places | Not confirmed. Bing Webmaster Tools access was not available in Phase 4. | Bing Places listing should mirror GBP NAP, website, booking URL, hours, categories, services, and photos. | Bing and AI systems that rely on Bing indexes may have weak local entity data. | Owner verifies/claims Bing Places after GBP/source-of-truth is confirmed; submit consistent NAP and photos. | Yes | P1 |
| Apple Maps / Apple Business Connect | Not confirmed from public search in this audit. | Apple Maps should show exact NAP, website, hours, category, photos, and directions. | Apple Maps is important for tourists and iPhone navigation; missing or stale listings reduce direction requests. | Owner-approved Apple Business Connect check/claim. | Yes | P1 |
| Yandex Maps | Public search did not reveal a confirmed Silk Beauty Salon Batumi Yandex Maps listing. Competitors have strong Yandex presence. | Yandex listing should use exact NAP, website, hours, beauty salon categories, services, photos, and WhatsApp if supported. | Important for Russian-language search and map discovery. Missing listing is a competitive gap. | Search in Yandex Maps from Georgia/Russian interface, claim/add only if owner approves and no duplicate exists. | Yes | P1 |
| 2GIS | Public search did not reveal a confirmed Silk Beauty Salon Batumi 2GIS listing; competitor listings were visible in Batumi. | 2GIS listing should use exact NAP, website, hours, categories, services, photos, and messenger links where supported. | 2GIS can matter for local map/directory discovery in Russian-speaking audiences. | Check 2GIS Batumi directly, claim or add only after owner approval and duplicate review. | Yes | P2 |
| Madloba.info | No confirmed Silk listing was found during public search. Madloba appears strongly for Batumi beauty/aesthetic categories. | If listed, exact NAP, website, phone, hours, category, services, and real photos. | Directory opportunity; not a confirmed mismatch. | Evaluate whether Silk is already listed. If absent and owner approves, submit/claim a factual profile. | Yes | P1 |
| Locate.ge | No confirmed Silk listing was found during public search. Locate appears for Georgian/Russian local service categories. | If listed, exact NAP, website, phone, categories, and service descriptions. | Directory opportunity for Georgian/Russian discovery. | Evaluate listing availability and quality before creating/claiming. | Yes | P2 |
| InfoBatumi | No confirmed Silk listing was found. InfoBatumi appears for Batumi beauty salon category pages. | Exact NAP, website, phone, hours, categories, photos. | Tourism/local directory opportunity; not urgent until GBP/Salonly/Facebook are corrected. | Review listing options and quality; avoid low-value or duplicate submissions. | Yes | P2 |
| Tripadvisor | No confirmed Silk listing found. Competitors such as LAKmousse appear on Tripadvisor. | Only create/list if the salon genuinely fits Tripadvisor's attraction/spa/wellness listing rules and owner wants tourist-facing discovery. | Could help tourists, but category fit and review-policy compliance matter. | Evaluate after GBP and core citations are correct. Do not solicit fake travel reviews. | Yes | P3 |
| Instagram/Facebook groups and posts | Public posts/groups mention Silk and beauty services in Batumi. Some snippets include phone/address references. | Public posts should use exact name, address, main phone, WhatsApp, website/booking link where appropriate. | Old one-off posts can continue showing stale or partial data; not always editable if posted by third parties. | For owner-controlled posts, update pinned/featured contact posts. For third-party posts, avoid aggressive correction unless the data is materially wrong and the platform allows polite owner correction. | Yes for public edits | P2 |
| Other Georgian local directories | Not exhaustively checked. | Exact NAP and no unsupported claims. | Citation footprint appears thin beyond Salonly/BeautyBook/social. | Build a short approved citation list before adding any profile. Avoid spammy directories. | Yes | P2 |
| Beauty booking platforms beyond Salonly/BeautyBook | No confirmed Silk profiles found in Booksy/Fresha/Goldie for Batumi; public results with similar names were unrelated foreign businesses. | Only list on platforms actually used by the salon. | Similar global `Silk Beauty` entities can confuse search. | Do not create accounts unless operationally useful and owner-approved. | Yes | P3 |

## Platform-Specific Correction Plan

### P0 - Fix First

1. **Google Business Profile / Google Maps**
   - Confirm whether the correct Silk Beauty Salon profile exists.
   - If it exists, claim/verify it through the owner account.
   - If it does not exist, create one only after owner approval and only with exact NAP.
   - Use primary phone `+995 577 34 57 67`.
   - Use website `https://silkbeautysalon.online`.
   - Use booking URL `https://silkbeautysalon.online/en/book`.
   - Confirm real-world hours before publishing.
   - Upload only owner-approved real photos.

2. **Salonly**
   - Confirm exact Batumi profile and partner/admin access.
   - Check phone field, website field, booking URL, services, price range, staff/professional count, hours, photos, and reviews.
   - Confirm whether `577345767` is stored as the phone and displayed with Georgian country code.
   - Investigate any stale snippets or separate listings that could create confusion.

3. **Facebook**
   - Confirm the canonical page/handle because source links and public search result URLs differ.
   - Set primary phone to `+995 577 34 57 67` unless owner wants the WhatsApp number as the visible Facebook phone.
   - Add or confirm WhatsApp `+995 577 28 68 55` separately where supported.
   - Add website and booking link.
   - Add address and hours.
   - Pin one current contact/location post using exact NAP.

4. **BeautyBook**
   - Confirm whether `beautybook.ge/salons/616` is an active Silk profile.
   - Check whether old placeholder `599 123 456` appears in any Silk-specific listing, post, or booking flow.
   - Correct only after owner/admin access and approval.

### P1 - Important Next

1. **Instagram**
   - Confirm official handle `@silkbeauty_batumi`.
   - Update bio/contact buttons/link-in-bio to point to the website or booking route.
   - Add address/location cue and WhatsApp clarity.
   - Add highlights for services, prices, visit/location, reviews, and booking using real content.

2. **Bing Places**
   - Verify or claim after Bing Webmaster access is available.
   - Mirror GBP NAP and categories.

3. **Apple Maps**
   - Check Apple Business Connect and confirm pin accuracy.
   - This matters for tourists using iPhone navigation.

4. **Yandex Maps**
   - Check for an existing listing in Russian/Georgian context.
   - Add/claim only once duplicates are ruled out.

5. **Madloba.info**
   - Evaluate listing quality and category fit.
   - Create/claim only if owner approves and the listing can include exact NAP and website.

6. **Google stale snippets**
   - Use Search Console URL Inspection after access exists.
   - Request indexing for pages where snippets still show `+995 599 123 456`.

### P2 - Useful After Core Cleanup

1. **2GIS**
   - Good candidate for Russian-speaking map discovery.
   - Verify duplicates first.

2. **Locate.ge**
   - Relevant for Georgian/Russian service discovery.
   - Add only if the platform profile quality is acceptable.

3. **InfoBatumi**
   - Tourism/local directory opportunity.
   - Lower priority than GBP, Salonly, Facebook, Instagram, Yandex.

4. **Owner-controlled Facebook group posts**
   - Update/pin current contact information where the owner controls the post.
   - Do not chase every old third-party mention.

### P3 - Optional / Low Priority

1. **LinkedIn**
   - Only if owner wants a professional company profile.

2. **Tripadvisor**
   - Evaluate rules/category fit first.
   - Useful only if the salon actively wants tourist/spa discovery and can manage reviews compliantly.

3. **Additional booking platforms**
   - Use only if operationally helpful.
   - Avoid creating profiles that duplicate the website/Salonly booking workflow without a clear reason.

## Service And Category Consistency Checklist

Use this when editing any approved citation:

- Beauty salon
- Aesthetic salon / skin care clinic only where accurate and allowed by the platform
- Botox / anti-wrinkle consultation-led appointments
- Dermal fillers and lip fillers
- Skin treatments, acne consultation, microneedling, chemical peels
- Nails / manicure / pedicure
- Lashes / brows
- Online booking
- Tourist/international clients only as factual service support, not keyword stuffing
- Languages: website in EN, KA, RU, TR, AR, HE; staff spoken languages must be owner-confirmed

Avoid:

- Fake review claims.
- Aggregate ratings unless platform-native and accurate.
- Keyword-stuffed business names.
- Medical-license, doctor, certification, award, or product-brand claims unless owner provides evidence.
- Guaranteed outcomes or before/after claims without consent and compliance review.

## Photo And Review Opportunities

Photo opportunities for approved listings:

1. Exterior entrance showing clients how to find Zurab Gorgiladze 63.
2. Reception/waiting area.
3. Clean treatment room.
4. Nail/lash/brow setup.
5. Skin consultation/treatment setup without private client data.
6. Staff portraits with written consent.
7. Real work examples only with client consent.
8. Street/location context for tourists.

Review opportunities:

- Use the Phase 2 GBP review templates after GBP review link exists.
- Request reviews only from real clients after real appointments.
- Do not incentivize reviews.
- Do not review-gate.
- Ask for honest feedback, not keywords or star ratings.
- Keep a private operational log of review requests, not public review manipulation.

## Login And Access Requirements

Do not store passwords, 2FA codes, recovery codes, private dashboard screenshots, verification tokens, or account identifiers in this repo.

Access needed:

- Google Business Profile Manager owner/admin access.
- Google Search Console owner/delegated access.
- Bing Places and Bing Webmaster Tools access.
- Facebook Page admin access.
- Instagram Business/Creator account access.
- TikTok account access if active.
- Salonly partner/admin access.
- BeautyBook salon/admin access.
- Apple Business Connect access.
- Yandex Business / Yandex Maps organization access if owner approves.
- 2GIS business-owner access if owner approves.
- Madloba/Locate/InfoBatumi account or editor access if owner approves.

## Immediate Owner Approval List

Before public edits, owner should approve:

1. Main citation NAP:
   - `Silk Beauty Salon`
   - `Zurab Gorgiladze 63, Batumi, Georgia`
   - `+995 577 34 57 67`
   - `https://silkbeautysalon.online`
2. WhatsApp treatment:
   - Keep `+995 577 28 68 55` as separate WhatsApp channel.
   - Do not use it as main phone unless explicitly approved.
3. Real-world opening hours.
4. Correct Facebook canonical page/handle.
5. Correct Instagram canonical handle.
6. Whether BeautyBook and Salonly should be treated as active booking channels.
7. Whether website booking should be the primary booking link on external profiles.
8. Approved real photos for external listings.
9. Approved service list/categories for each platform.

## Next Review Date

Next citation consistency review: 2026-08-04.

At that review:

- Re-check public search snippets for old placeholder phone.
- Re-check Salonly and BeautyBook after owner-admin review.
- Confirm GBP/Maps profile status.
- Confirm Bing Places/Apple/Yandex/2GIS status.
- Record which profiles were claimed or corrected, without exposing login details.

## References

- Silk website: `https://silkbeautysalon.online`
- Silk booking page: `https://silkbeautysalon.online/en/book`
- Salonly Silk profile: `https://salonly.ge/en/salons/16`
- Salonly homepage/search listings: `https://salonly.ge/en`
- Facebook public result surfaced as: `https://www.facebook.com/people/SilkBeautySalon/61576489505786/`
- Facebook source link in website config: `https://www.facebook.com/silkbeautybatumi/`
- Instagram source link in website config: `https://www.instagram.com/silkbeauty_batumi/`
- TikTok source link in website config: `https://www.tiktok.com/@silkbeautybatumi`
- Google Business Profile guidelines: `https://support.google.com/business/answer/3038177`
- Bing Places: `https://www.bingplaces.com/`
- Apple Business Connect: `https://businessconnect.apple.com/`
