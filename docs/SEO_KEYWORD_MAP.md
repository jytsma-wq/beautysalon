# Multilingual Target Keyword Matrix

Date: 2026-07-04
Branch: `codex/visibility-readiness-audit`
Mode: SEO planning and monitoring map only; no visible content changes; no keyword stuffing

## Purpose

This document turns the owner-provided multilingual keyword list into a practical search-monitoring and page-mapping matrix for Silk Beauty Salon.

Use it for:

- Google Search Console query grouping.
- Bing Webmaster Tools query grouping.
- Manual rank checks.
- Google Business Profile service/category planning.
- Citation/profile service consistency.
- Content gap review.

Do not use it for:

- Keyword-stuffing visible pages.
- Creating thin doorway pages.
- Adding unsupported medical/clinic claims.
- Asking clients to mention keywords in reviews.
- Changing the public business name.

## Source Of Truth

| Field | Value |
| --- | --- |
| Business | Silk Beauty Salon |
| Website | `https://silkbeautysalon.online` |
| Address | Zurab Gorgiladze 63, Batumi, Georgia |
| Main phone | `+995 577 34 57 67` |
| WhatsApp | `+995 577 28 68 55` |
| Locales | English, Georgian, Russian, Turkish, Arabic, Hebrew |

## Mapping Rules

- Map multiple query variants to one strong, useful page instead of creating separate pages for every phrase.
- Use localized URLs where the site supports them: `/{locale}/...`.
- Use service pages for specific treatments and the pricelist for price-intent queries.
- Map microneedling and chemical-peel intent to existing treatment pages to avoid thin pages.
- Treat `best`, `clinic`, `doctor`, `certified`, and other high-claim wording carefully. Do not publish superiority or medical/legal claims unless owner-approved and evidence-backed.
- Treat language queries as user intent, not proof of spoken staff coverage. Website language support is confirmed; spoken language coverage still needs owner confirmation before public listing claims.

## Canonical Intent Map

| Intent group | English examples | Canonical target pattern | Notes |
| --- | --- | --- | --- |
| Beauty salon / broad local | beauty salon Batumi; best beauty salon Batumi | `/{locale}/beauty-salon-batumi` plus `/{locale}` | Do not claim "best" in copy unless backed by compliant third-party evidence. |
| Aesthetic salon / clinic | aesthetic salon Batumi; aesthetic clinic Batumi | `/{locale}/beauty-salon-batumi`, `/{locale}/treatments` | "Clinic" wording needs owner/legal comfort before external listing use. |
| Botox / anti-wrinkle | Botox Batumi; Botox injections Batumi; anti wrinkle injections Batumi | `/{locale}/botox-batumi` | Main injectable local landing page. |
| Masseter Botox | masseter Botox Batumi | `/{locale}/treatments/masseter-botox` | Specific treatment page. |
| Botox price | Botox price Batumi | `/{locale}/pricelist`, supported by `/{locale}/botox-batumi` | Track price queries separately; final price depends on consultation. |
| Dermal fillers | dermal fillers Batumi; fillers Batumi | `/{locale}/dermal-fillers-batumi` | Category-level filler intent. |
| Lip fillers | lip fillers Batumi; lip augmentation Batumi | `/{locale}/lip-fillers-batumi` | Specific high-intent filler page. |
| Skin treatments / skin care | skin treatments Batumi; skin care Batumi | `/{locale}/skin-treatment-batumi` | General skin-care intent. |
| Acne / acne scars | acne treatment Batumi; acne scar treatment Batumi | `/{locale}/acne-treatment-batumi` | Keep consultation-led; avoid cure claims. |
| Microneedling | microneedling Batumi | `/{locale}/treatments/skinpen-microneedling` | Existing treatment page, not a separate thin local page. |
| Chemical peel | chemical peel Batumi | `/{locale}/treatments/is-clinical-fire-ice-peel` plus `/{locale}/skin-treatment-batumi` | Existing treatment page. |
| Nails / nail salon | nails Batumi; nail salon Batumi | `/{locale}/nails-batumi` | Main nail local page. |
| Manicure / pedicure | manicure Batumi; pedicure Batumi | `/{locale}/nails-batumi`, supporting treatment/category pages | Do not create separate doorway pages unless there is enough unique content. |
| Lashes | lashes Batumi; lash extensions Batumi; lash lift Batumi | `/{locale}/lashes-brows-batumi` | Main lash/brow local page. |
| Brows | brow lamination Batumi | `/{locale}/lashes-brows-batumi` | Same page as lashes unless future content justifies split. |
| Prices | beauty salon prices Batumi | `/{locale}/pricelist` | Price-comparison intent. |
| English/Russian speaking | English speaking beauty salon Batumi; Russian speaking beauty salon Batumi | `/{locale}/beauty-salon-batumi`, `/{locale}/international-clients` | Confirm spoken languages before GBP/citation claims. |
| Tourist intent | beauty salon for tourists Batumi | `/{locale}/beauty-salon-batumi`, `/{locale}/international-clients`, `/{locale}/book` | Keep factual and practical. |

## English Query Set

| Query | Intent group | Target URL | Priority | Notes |
| --- | --- | --- | --- | --- |
| beauty salon Batumi | Beauty salon / broad local | `/en/beauty-salon-batumi` | High | Primary local business query. |
| best beauty salon Batumi | Beauty salon / broad local | `/en/beauty-salon-batumi` | Medium | Monitor only; do not claim "best". |
| aesthetic salon Batumi | Aesthetic salon / clinic | `/en/beauty-salon-batumi` | High | Also supports homepage/treatments. |
| aesthetic clinic Batumi | Aesthetic salon / clinic | `/en/beauty-salon-batumi` | Medium | Use "clinic" carefully. |
| Botox Batumi | Botox / anti-wrinkle | `/en/botox-batumi` | High | Primary injectable query. |
| Botox injections Batumi | Botox / anti-wrinkle | `/en/botox-batumi` | High | Same landing page. |
| anti wrinkle injections Batumi | Botox / anti-wrinkle | `/en/botox-batumi` | High | Same landing page. |
| masseter Botox Batumi | Masseter Botox | `/en/treatments/masseter-botox` | Medium | Specific treatment intent. |
| Botox price Batumi | Botox price | `/en/pricelist` | High | Also monitor `/en/botox-batumi`. |
| dermal fillers Batumi | Dermal fillers | `/en/dermal-fillers-batumi` | High | Category page. |
| fillers Batumi | Dermal fillers | `/en/dermal-fillers-batumi` | High | Broader filler query. |
| lip fillers Batumi | Lip fillers | `/en/lip-fillers-batumi` | High | Specific high-intent page. |
| lip augmentation Batumi | Lip fillers | `/en/lip-fillers-batumi` | Medium | Synonym. |
| skin treatments Batumi | Skin treatments / skin care | `/en/skin-treatment-batumi` | High | Skin category page. |
| skin care Batumi | Skin treatments / skin care | `/en/skin-treatment-batumi` | High | Broader skin care query. |
| acne treatment Batumi | Acne / acne scars | `/en/acne-treatment-batumi` | High | Condition-led page. |
| acne scar treatment Batumi | Acne / acne scars | `/en/acne-treatment-batumi` | High | Also monitor SkinPen treatment page. |
| microneedling Batumi | Microneedling | `/en/treatments/skinpen-microneedling` | Medium | Existing treatment page. |
| chemical peel Batumi | Chemical peel | `/en/treatments/is-clinical-fire-ice-peel` | Medium | Existing treatment page. |
| nails Batumi | Nails / nail salon | `/en/nails-batumi` | Medium | Local nail page. |
| nail salon Batumi | Nails / nail salon | `/en/nails-batumi` | Medium | Same page. |
| manicure Batumi | Manicure / pedicure | `/en/nails-batumi` | Medium | Same page. |
| pedicure Batumi | Manicure / pedicure | `/en/nails-batumi` | Medium | Same page. |
| lashes Batumi | Lashes | `/en/lashes-brows-batumi` | Medium | Local lash/brow page. |
| lash extensions Batumi | Lashes | `/en/lashes-brows-batumi` | Medium | Same page. |
| lash lift Batumi | Lashes | `/en/lashes-brows-batumi` | Medium | Same page. |
| brow lamination Batumi | Brows | `/en/lashes-brows-batumi` | Medium | Same page. |
| beauty salon prices Batumi | Prices | `/en/pricelist` | High | Price-comparison query. |
| English speaking beauty salon Batumi | English/Russian speaking | `/en/beauty-salon-batumi` | Medium | Confirm spoken support before public profile claims. |
| Russian speaking beauty salon Batumi | English/Russian speaking | `/en/beauty-salon-batumi` | Medium | Confirm spoken support before public profile claims. |
| beauty salon for tourists Batumi | Tourist intent | `/en/beauty-salon-batumi` | Medium | Also monitor `/en/international-clients`. |

## Georgian Query Set

| Query | Intent group | Target URL | Priority | Notes |
| --- | --- | --- | --- | --- |
| სილამაზის სალონი ბათუმი | Beauty salon / broad local | `/ka/beauty-salon-batumi` | High | Primary Georgian local query. |
| საუკეთესო სილამაზის სალონი ბათუმში | Beauty salon / broad local | `/ka/beauty-salon-batumi` | Medium | Monitor only; do not claim "best". |
| ესთეტიკური სალონი ბათუმი | Aesthetic salon / clinic | `/ka/beauty-salon-batumi` | High | Broad aesthetic intent. |
| ბოტოქსი ბათუმი | Botox / anti-wrinkle | `/ka/botox-batumi` | High | Primary Botox query. |
| ბოტოქსის ინექციები ბათუმში | Botox / anti-wrinkle | `/ka/botox-batumi` | High | Same landing page. |
| ტუჩის ფილერი ბათუმი | Lip fillers | `/ka/lip-fillers-batumi` | High | High-intent filler page. |
| ფილერები ბათუმი | Dermal fillers | `/ka/dermal-fillers-batumi` | High | Filler category. |
| კანის მოვლა ბათუმი | Skin treatments / skin care | `/ka/skin-treatment-batumi` | High | Skin care query. |
| კანის მკურნალობა ბათუმი | Skin treatments / skin care | `/ka/skin-treatment-batumi` | High | Skin treatment query. |
| აკნეს მკურნალობა ბათუმი | Acne / acne scars | `/ka/acne-treatment-batumi` | High | Condition-led page. |
| აკნეს ნაწიბურების მკურნალობა ბათუმი | Acne / acne scars | `/ka/acne-treatment-batumi` | High | Also monitor SkinPen page. |
| მიკრონიდლინგი ბათუმი | Microneedling | `/ka/treatments/skinpen-microneedling` | Medium | Existing treatment page. |
| ქიმიური პილინგი ბათუმი | Chemical peel | `/ka/treatments/is-clinical-fire-ice-peel` | Medium | Existing treatment page. |
| ფრჩხილები ბათუმი | Nails / nail salon | `/ka/nails-batumi` | Medium | Nail page. |
| მანიკური ბათუმი | Manicure / pedicure | `/ka/nails-batumi` | Medium | Same page. |
| პედიკური ბათუმი | Manicure / pedicure | `/ka/nails-batumi` | Medium | Same page. |
| წამწამების დაგრძელება ბათუმი | Lashes | `/ka/lashes-brows-batumi` | Medium | Lash/brow page. |
| წარბების ლამინაცია ბათუმი | Brows | `/ka/lashes-brows-batumi` | Medium | Same page. |
| სილამაზის სალონის ფასები ბათუმი | Prices | `/ka/pricelist` | High | Price query. |

## Russian Query Set

| Query | Intent group | Target URL | Priority | Notes |
| --- | --- | --- | --- | --- |
| салон красоты Батуми | Beauty salon / broad local | `/ru/beauty-salon-batumi` | High | Primary Russian local query. |
| лучший салон красоты Батуми | Beauty salon / broad local | `/ru/beauty-salon-batumi` | Medium | Monitor only; do not claim "best". |
| эстетическая клиника Батуми | Aesthetic salon / clinic | `/ru/beauty-salon-batumi` | Medium | Use clinic wording carefully. |
| косметолог Батуми | Aesthetic salon / clinic | `/ru/beauty-salon-batumi` | High | Practitioner/service discovery query; owner should confirm wording. |
| ботокс Батуми | Botox / anti-wrinkle | `/ru/botox-batumi` | High | Primary Botox query. |
| инъекции ботокса Батуми | Botox / anti-wrinkle | `/ru/botox-batumi` | High | Same landing page. |
| ботокс цена Батуми | Botox price | `/ru/pricelist` | High | Also monitor `/ru/botox-batumi`. |
| филлеры Батуми | Dermal fillers | `/ru/dermal-fillers-batumi` | High | Filler category. |
| филлеры губ Батуми | Lip fillers | `/ru/lip-fillers-batumi` | High | Lip filler page. |
| увеличение губ Батуми | Lip fillers | `/ru/lip-fillers-batumi` | High | Same page. |
| контурная пластика Батуми | Dermal fillers | `/ru/dermal-fillers-batumi` | Medium | Use conservative, consultation-led wording. |
| уход за кожей Батуми | Skin treatments / skin care | `/ru/skin-treatment-batumi` | High | Skin care query. |
| лечение кожи Батуми | Skin treatments / skin care | `/ru/skin-treatment-batumi` | Medium | Avoid cure claims. |
| лечение акне Батуми | Acne / acne scars | `/ru/acne-treatment-batumi` | High | Acne page. |
| лечение постакне Батуми | Acne / acne scars | `/ru/acne-treatment-batumi` | High | Same page. |
| микронидлинг Батуми | Microneedling | `/ru/treatments/skinpen-microneedling` | Medium | Existing treatment page. |
| химический пилинг Батуми | Chemical peel | `/ru/treatments/is-clinical-fire-ice-peel` | Medium | Existing treatment page. |
| ногти Батуми | Nails / nail salon | `/ru/nails-batumi` | Medium | Nail page. |
| маникюр Батуми | Manicure / pedicure | `/ru/nails-batumi` | Medium | Same page. |
| педикюр Батуми | Manicure / pedicure | `/ru/nails-batumi` | Medium | Same page. |
| наращивание ресниц Батуми | Lashes | `/ru/lashes-brows-batumi` | Medium | Lash/brow page. |
| ламинирование бровей Батуми | Brows | `/ru/lashes-brows-batumi` | Medium | Same page. |
| цены салон красоты Батуми | Prices | `/ru/pricelist` | High | Price query. |

## Turkish Query Set

| Query | Intent group | Target URL | Priority | Notes |
| --- | --- | --- | --- | --- |
| Batum güzellik salonu | Beauty salon / broad local | `/tr/beauty-salon-batumi` | High | Primary Turkish local query. |
| Batum estetik salonu | Aesthetic salon / clinic | `/tr/beauty-salon-batumi` | High | Broad aesthetic query. |
| Batum botoks | Botox / anti-wrinkle | `/tr/botox-batumi` | High | Botox page. |
| Batum botoks fiyatları | Botox price | `/tr/pricelist` | High | Also monitor `/tr/botox-batumi`. |
| Batum dolgu | Dermal fillers | `/tr/dermal-fillers-batumi` | High | Filler category. |
| Batum dudak dolgusu | Lip fillers | `/tr/lip-fillers-batumi` | High | Lip filler page. |
| dudak büyütme Batum | Lip fillers | `/tr/lip-fillers-batumi` | Medium | Synonym. |
| Batum cilt bakımı | Skin treatments / skin care | `/tr/skin-treatment-batumi` | High | Skin care page. |
| Batum cilt tedavisi | Skin treatments / skin care | `/tr/skin-treatment-batumi` | High | Skin treatment page. |
| Batum akne tedavisi | Acne / acne scars | `/tr/acne-treatment-batumi` | High | Acne page. |
| akne izi tedavisi Batum | Acne / acne scars | `/tr/acne-treatment-batumi` | High | Also monitor SkinPen page. |
| mikro iğneleme Batum | Microneedling | `/tr/treatments/skinpen-microneedling` | Medium | Existing treatment page. |
| kimyasal peeling Batum | Chemical peel | `/tr/treatments/is-clinical-fire-ice-peel` | Medium | Existing treatment page. |
| Batum tırnak | Nails / nail salon | `/tr/nails-batumi` | Medium | Nail page. |
| manikür Batum | Manicure / pedicure | `/tr/nails-batumi` | Medium | Same page. |
| pedikür Batum | Manicure / pedicure | `/tr/nails-batumi` | Medium | Same page. |
| Batum kirpik uzatma | Lashes | `/tr/lashes-brows-batumi` | Medium | Lash/brow page. |
| kirpik lifting Batum | Lashes | `/tr/lashes-brows-batumi` | Medium | Same page. |
| kaş laminasyonu Batum | Brows | `/tr/lashes-brows-batumi` | Medium | Same page. |
| Batum güzellik salonu fiyatları | Prices | `/tr/pricelist` | High | Price query. |

## Arabic Query Set

| Query | Intent group | Target URL | Priority | Notes |
| --- | --- | --- | --- | --- |
| صالون تجميل باتومي | Beauty salon / broad local | `/ar/beauty-salon-batumi` | High | Primary Arabic local query. |
| أفضل صالون تجميل في باتومي | Beauty salon / broad local | `/ar/beauty-salon-batumi` | Medium | Monitor only; do not claim "best". |
| عيادة تجميل باتومي | Aesthetic salon / clinic | `/ar/beauty-salon-batumi` | Medium | Use clinic wording carefully. |
| بوتوكس باتومي | Botox / anti-wrinkle | `/ar/botox-batumi` | High | Botox page. |
| حقن بوتوكس باتومي | Botox / anti-wrinkle | `/ar/botox-batumi` | High | Same page. |
| أسعار البوتوكس باتومي | Botox price | `/ar/pricelist` | High | Also monitor `/ar/botox-batumi`. |
| فيلر باتومي | Dermal fillers | `/ar/dermal-fillers-batumi` | High | Filler category. |
| فيلر الشفاه باتومي | Lip fillers | `/ar/lip-fillers-batumi` | High | Lip filler page. |
| تكبير الشفاه باتومي | Lip fillers | `/ar/lip-fillers-batumi` | Medium | Same page. |
| علاج البشرة باتومي | Skin treatments / skin care | `/ar/skin-treatment-batumi` | High | Skin page. |
| العناية بالبشرة باتومي | Skin treatments / skin care | `/ar/skin-treatment-batumi` | High | Same page. |
| علاج حب الشباب باتومي | Acne / acne scars | `/ar/acne-treatment-batumi` | High | Acne page. |
| علاج آثار حب الشباب باتومي | Acne / acne scars | `/ar/acne-treatment-batumi` | High | Also monitor SkinPen page. |
| ميكرونيدلينغ باتومي | Microneedling | `/ar/treatments/skinpen-microneedling` | Medium | Existing treatment page. |
| تقشير كيميائي باتومي | Chemical peel | `/ar/treatments/is-clinical-fire-ice-peel` | Medium | Existing treatment page. |
| أظافر باتومي | Nails / nail salon | `/ar/nails-batumi` | Medium | Nail page. |
| مانيكير باتومي | Manicure / pedicure | `/ar/nails-batumi` | Medium | Same page. |
| باديكير باتومي | Manicure / pedicure | `/ar/nails-batumi` | Medium | Same page. |
| تركيب رموش باتومي | Lashes | `/ar/lashes-brows-batumi` | Medium | Lash/brow page. |
| رفع الرموش باتومي | Lashes | `/ar/lashes-brows-batumi` | Medium | Same page. |
| تصفيح الحواجب باتومي | Brows | `/ar/lashes-brows-batumi` | Medium | Same page. |
| أسعار صالون تجميل باتومي | Prices | `/ar/pricelist` | High | Price query. |

## Hebrew Query Set

| Query | Intent group | Target URL | Priority | Notes |
| --- | --- | --- | --- | --- |
| מכון יופי בטומי | Beauty salon / broad local | `/he/beauty-salon-batumi` | High | Primary Hebrew local query. |
| סלון יופי בטומי | Beauty salon / broad local | `/he/beauty-salon-batumi` | High | Alternate broad query. |
| קליניקה אסתטית בטומי | Aesthetic salon / clinic | `/he/beauty-salon-batumi` | Medium | Use clinic wording carefully. |
| בוטוקס בטומי | Botox / anti-wrinkle | `/he/botox-batumi` | High | Botox page. |
| הזרקות בוטוקס בטומי | Botox / anti-wrinkle | `/he/botox-batumi` | High | Same page. |
| מחירי בוטוקס בטומי | Botox price | `/he/pricelist` | High | Also monitor `/he/botox-batumi`. |
| פילרים בטומי | Dermal fillers | `/he/dermal-fillers-batumi` | High | Filler category. |
| מילוי שפתיים בטומי | Lip fillers | `/he/lip-fillers-batumi` | High | Lip filler page. |
| עיבוי שפתיים בטומי | Lip fillers | `/he/lip-fillers-batumi` | Medium | Same page. |
| טיפולי עור בטומי | Skin treatments / skin care | `/he/skin-treatment-batumi` | High | Skin page. |
| טיפול פנים בטומי | Skin treatments / skin care | `/he/skin-treatment-batumi` | Medium | Facial/skin intent. |
| טיפול באקנה בטומי | Acne / acne scars | `/he/acne-treatment-batumi` | High | Acne page. |
| טיפול בצלקות אקנה בטומי | Acne / acne scars | `/he/acne-treatment-batumi` | High | Also monitor SkinPen page. |
| מיקרונידלינג בטומי | Microneedling | `/he/treatments/skinpen-microneedling` | Medium | Existing treatment page. |
| פילינג כימי בטומי | Chemical peel | `/he/treatments/is-clinical-fire-ice-peel` | Medium | Existing treatment page. |
| ציפורניים בטומי | Nails / nail salon | `/he/nails-batumi` | Medium | Nail page. |
| מניקור בטומי | Manicure / pedicure | `/he/nails-batumi` | Medium | Same page. |
| פדיקור בטומי | Manicure / pedicure | `/he/nails-batumi` | Medium | Same page. |
| הארכת ריסים בטומי | Lashes | `/he/lashes-brows-batumi` | Medium | Lash/brow page. |
| הרמת ריסים בטומי | Lashes | `/he/lashes-brows-batumi` | Medium | Same page. |
| למינציה לגבות בטומי | Brows | `/he/lashes-brows-batumi` | Medium | Same page. |
| מחירי מכון יופי בטומי | Prices | `/he/pricelist` | High | Price query. |

## Native Review Notes

- English is operationally usable.
- Georgian, Russian, Turkish, Arabic, and Hebrew should receive native review before being used in paid ads, GBP services, printed materials, or high-visibility profile copy.
- Query wording can differ from polished page copy. Do not force exact search phrases into visible content if they sound unnatural.
- Arabic and Hebrew should be checked in RTL contexts during any future visible-content implementation.

## Monitoring Use

For each monthly report, record:

- Organic position, if manually checked.
- Whether a local pack appears.
- Whether Silk appears in the local pack.
- Top competitors above Silk.
- Whether the target URL receives impressions/clicks in Search Console.
- Whether Google selected the intended canonical.
- Whether the page is indexed.

## Sitemap Verification

On 2026-07-04, the mapped target URL patterns in this document were checked against the live sitemap at `https://silkbeautysalon.online/sitemap.xml`.

Result:

- Locale/path combinations checked: `84`
- Missing from live sitemap: `0`
- Checked locales: `en`, `ka`, `ru`, `tr`, `ar`, `he`
- Checked route groups: local beauty salon, Botox, dermal fillers, lip fillers, skin treatment, acne treatment, nails, lashes/brows, pricelist, international clients, booking, masseter Botox, SkinPen microneedling, and Fire & Ice Peel.

## Follow-Up Opportunities

1. Add these exact queries to a private rank-tracking or spreadsheet system after Search Console access exists.
2. Use this matrix to group GSC queries by intent and language.
3. Use this matrix to check GBP/Bing/Yandex service-category coverage.
4. Use this matrix for content gap review, not automatic page creation.
5. Consider additional page work only when a query group has enough unique user need and the existing mapped page cannot answer it well.
