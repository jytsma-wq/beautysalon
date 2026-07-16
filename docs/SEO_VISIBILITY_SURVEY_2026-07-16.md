# SEO Visibility Survey - 2026-07-16

Date and time: 2026-07-16 14:34 Asia/Tbilisi

Business: Silk Beauty Salon, Batumi, Georgia

Canonical website: `https://silkbeautysalon.online`

## Scope And Method

This is a point-in-time public web-index survey of important branded, service, price, and multilingual queries. It answers whether the current SEO strategy is producing discoverability signals and which gaps remain.

The returned order below is not a guaranteed Google rank. Search position changes by engine, location, language, device, personalization, and time. The in-app Google/Maps browser connection was unavailable during this pass, so exact Google organic positions, local-pack positions, Google Business Profile visibility, and AI Overview citations were not claimed. Those require a controlled browser recheck from Batumi.

No ads, paid tools, bulk submissions, public profile edits, code changes, or production changes were made.

The survey itself was read-only. A separate local implementation was subsequently prepared on `codex/seo-trust-and-entity-cleanup`; it is documented in `docs/SEO_TRUST_AND_INDEX_QUALITY_AUDIT.md` and is not live.

## Executive Verdict

The strategy is **partially working**.

- Branded discovery is strong: Silk was returned first for the branded Batumi query, with another first-party page immediately following it.
- Dermal-filler discovery is the strongest non-brand result: the dedicated page was returned first for `dermal fillers Batumi`.
- Botox discovery is inconsistent: Silk was prominent for `Botox injections Batumi` and `anti wrinkle injections Batumi`, but absent from the sampled results for the exact head term `Botox Batumi` and `Botox price Batumi`.
- Lip-filler discovery exists, but the search sample selected the homepage and dermal-fillers page instead of the dedicated lip-fillers page.
- Skin and microneedling have partial visibility. Acne treatment, chemical peel, nails, and lashes remain weak or absent.
- Georgian and Russian samples surfaced a competing or related `silkbeauty.ge` domain more often than the canonical `.online` site. Ownership and intended use of that domain must be confirmed before any consolidation action.
- The next constraint is mainly local prominence, real-world trust, citations, reviews, photos, and entity consistency. Adding more near-duplicate keyword pages is not recommended.

## English Query Sample

| Query | Silk result in sample | Approximate returned order | First-party page selected | Interpretation |
| --- | --- | ---: | --- | --- |
| `Silk Beauty Salon Batumi` | Yes | 1 and 2 | `/en/beauty-salon-batumi`, `/en` | Strong branded visibility |
| `beauty salon Batumi` | Yes | About 11 | `/en` | Discoverable, but generic category authority is weak |
| `Botox Batumi` | No | Not in first 20+ sampled results | None | Important head-term gap |
| `Botox injections Batumi` | Yes | About 4 | `/en/botox-batumi` | Dedicated page is understood for a close variant |
| `anti wrinkle injections Batumi` | Yes | About 2 | `/en` | Strong close-variant signal, but homepage is selected |
| `Botox price Batumi` | No | Not in first 20+ sampled results | None | Price intent and hair-Botox ambiguity remain gaps |
| `dermal fillers Batumi` | Yes | 1 and 2 | `/en/dermal-fillers-batumi`, `/en` | Strongest non-brand result |
| `lip fillers Batumi` | Yes | 1 and 2 | `/en`, `/en/dermal-fillers-batumi` | Visibility exists, but dedicated lip page was not selected |
| `skin treatment Batumi` | Yes | About 5 and 12 | `/en`, `/en/beauty-salon-batumi` | Partial; dedicated skin page was not selected |
| `acne treatment Batumi` | No | Not in first 20+ sampled results | None | Important service gap |
| `beauty salon prices Batumi` | Yes | About 9 | `/en` | Partial price-intent visibility |
| `nails Batumi` | No | Not in first 20+ sampled results | None | Weak category visibility |
| `lashes Batumi` | No | Not in sampled results | None | Weak category visibility |
| `English speaking beauty salon Batumi` | Yes | About 7 | `/en/beauty-salon-batumi` | Relevant tourist/language signal exists |
| `microneedling Batumi` | Yes | About 5 | `/en` | Partial visibility; dedicated treatment URL was not selected |
| `chemical peel Batumi` | No | Not in sampled results | None | Service gap |

## Multilingual Query Sample

| Language | Query | Silk result in sample | Page/domain selected | Interpretation |
| --- | --- | --- | --- | --- |
| Georgian | `ბოტოქსი ბათუმში` | Canonical `.online` absent | `silkbeauty.ge/services` appeared about 3 | The canonical domain is not winning this query; domain/entity classification is urgent |
| Georgian | `ტუჩის ფილერი ბათუმში` | Canonical `.online` absent | `silkbeauty.ge/services` appeared about 2 | Same entity/domain issue |
| Turkish | `Batum'da botoks` | Absent | None | SoloMed, BeautyLips/Yandex, LAKmousse, and clinics dominated |
| Turkish | `Batum'da dudak dolgusu` | Absent | None | Results drifted toward Turkey/Bodrum; local Batumi relevance is weak |
| Russian | `ботокс Батуми` | Absent | None | Sakura, InfoBatumi, LAKmousse, and SoloMed dominated |
| Russian | `филлеры губ Батуми` | Yes | English `/en/dermal-fillers-batumi`, about 10 | Google-like discovery selected English instead of Russian localized content |
| Arabic | `بوتوكس باتومي` | Absent | None | Results were mostly general Arabic medical sources |
| Hebrew | `בוטוקס בטומי` | Absent | None | Results were mostly Israeli/general Botox sources |

The Georgian and Turkish query-alignment copy is live, but indexing and ranking lag behind content publication. Native review remains required for public non-English service/profile copy before further edits.

## Competitor And Result Patterns

- **SoloMed** repeatedly appears for Botox, injections, and price intent.
- **LAKmousse** has broad service coverage, many service-specific pages, and visible price information.
- **Studio Anastasia** is strong for the generic beauty-salon category.
- **Sakura**, **InfoBatumi**, **BeautyLips**, and medical/doctor directories appear for injectable and skin queries.
- **Heaven Nails**, **Make Me Lashes**, Yandex category pages, and specialist listings dominate nails/lashes discovery.
- Directory visibility from Yandex, Madloba, Salonly, and similar local surfaces remains material in Batumi search results.

Silk should not copy competitor content or create thin pages to match their page counts. The useful gap is verified entity authority: complete profiles, accurate citations, real photos, real reviews, supported practitioner information, and clear first-party service/pricing information.

## Live Origin And Index-Lag Check

Direct no-cache origin checks returned HTTP 200 for `/en`, `/en/botox-batumi`, `/en/dermal-fillers-batumi`, and `/en/skin-treatment-batumi`. Current origin HTML used postal code `6010`.

Some public index snapshots still reflected older text, including postal code `6000` and older trust sections. This is consistent with crawler/snippet lag, not the current direct origin response. The current branch contains an un-deployed cleanup of unverified testimonials and stock-photo before/after content. Until that cleanup receives explicit release approval and search engines recrawl, older indexed trust signals can remain visible.

## Priority Actions

### P0 - Protect Trust And Entity Accuracy

1. Release the already-tested trust cleanup only after explicit owner approval; do not mix it with unrelated work.
2. Confirm practitioner identity, qualifications, injectable-treatment authority, certificates, and any product-brand claims with documentary evidence before publishing them.
3. Determine whether `silkbeauty.ge` belongs to the same business, a former site, or another business. Do not redirect, change DNS, or claim it without owner confirmation and a backup plan.

### P1 - Build Local Prominence

1. Complete Google Business Profile with the approved services, accurate category data, 10 real current salon photos, and a compliant honest-review workflow.
2. Obtain genuine reviews consistently without incentives, review gating, or treatment-detail disclosure.
3. Correct and complete trusted local citations: Google/Maps, Bing Places, Yandex, Salonly, Madloba, InfoBatumi, and relevant professional directories where the business facts are supported.
4. Use Search Console to inspect and selectively request recrawls for canonical dedicated Botox, lip-fillers, skin, acne, nails, and lashes pages after approved releases. Do not bulk-submit the sitemap inventory.

### P2 - Improve Existing Pages, Not Page Count

1. Use Search Console query/page data to understand why the homepage is selected instead of dedicated lip, skin, and microneedling pages; strengthen only relevant internal links and unique page value.
2. Clarify Botox price intent on the existing Botox/pricelist paths only when the owner confirms accurate current pricing and scope. Avoid hair-Botox ambiguity.
3. Native-review Georgian, Russian, Turkish, Arabic, and Hebrew public copy and keep consultation-led, non-promissory wording.
4. Add only real, consented, service-relevant imagery and practitioner evidence.

## Monitoring Dates

- Short recheck: 2026-07-23, after account-side Google/Maps access and any approved trust release.
- Monthly comparison: 2026-08-16, using the same query set and location/device notes.
- Track organic results, local-pack visibility, GBP appearance, indexed URL, and conversion separately. A page being indexed is not proof of ranking or bookings.

## Safety Record

- No ranking guarantee is made.
- No website code or production content was changed during the survey. A later local branch candidate narrows the search surface and removes unverified rendered claims, but it has not been pushed or deployed.
- No Google Business Profile, Search Console, Bing, citation, ad, billing, DNS, or Hostinger action was taken.
- No fake reviews, fake credentials, unsupported medical claims, or paid links were proposed.
