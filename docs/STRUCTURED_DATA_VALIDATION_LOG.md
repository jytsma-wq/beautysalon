# Structured Data Validation Log

Date: 2026-07-04
Live check time: 2026-07-04 10:15-10:25 Asia/Tbilisi / 06:15-06:25 UTC
Phase: 5 - Structured data validation
Branch: `codex/visibility-readiness-audit`
Mode: live public validation plus documentation; no code changes

## Safety Rules Applied

- No structured data was added, removed, or edited.
- No fake reviews, fake ratings, fake photos, certifications, staff claims, awards, or treatment outcomes were added.
- No `aggregateRating` or `review` markup was added.
- No medical claims were added.
- No services were added to markup.
- No deployment, dependency update, or production setting change was performed.

## Validation Standards Used

This audit used the following compliance frame:

- Google structured data must represent visible page content and must not be misleading or hidden from users.
- Google recommends JSON-LD as a supported structured data format.
- Google does not guarantee rich result display even when markup validates.
- For LocalBusiness, Google states `aggregateRating` is only recommended for sites that capture reviews about other local businesses.
- Self-serving `Review` and `AggregateRating` markup for `LocalBusiness`, `Organization`, and subtypes remains a risk and should not be added for Silk Beauty Salon without confirmed compliant third-party review data and explicit owner approval.

## Tools And Methods

| Tool / method | Status | Result |
| --- | --- | --- |
| Manual live JSON-LD parse | Completed | All sampled `application/ld+json` scripts parsed as valid JSON. |
| Live hidden-content alignment spot check | Completed | FAQ questions and service names in JSON-LD were found in visible page text after HTML entity decoding. |
| Microdata/RDFa scan | Completed | No `itemscope`, `itemtype`, or RDFa `typeof` structured data was found on sampled pages; the site uses JSON-LD only. |
| Schema Markup Validator | Partially completed | Homepage and `/en/botox-batumi` were exercised through the public UI with Playwright. No validator errors were observed. A non-critical warning appears for `inLanguage` on `BeautySalon`. |
| Google Rich Results Test | Attempted, not completed | The public tool loaded but returned `Something went wrong` / `Log in and try again` in this environment. Owner-side interactive rerun is required. |

## Homepage JSON-LD

URL tested: `https://silkbeautysalon.online/en`

| Field | Live result |
| --- | --- |
| JSON-LD scripts | 1 |
| Parse errors | None |
| Primary type | `BeautySalon` |
| LocalBusiness-compatible type | Yes. `BeautySalon` is a specific local business subtype. |
| Name | `Silk Beauty Salon` |
| URL | `https://silkbeautysalon.online/en` |
| `@id` | `https://silkbeautysalon.online/#beautysalon` |
| Address | `Zurab Gorgiladze 63`, Batumi, Adjara, `6010`, Georgia |
| Phone | `+995 577 34 57 67` |
| Email | `info@silkbeautysalon.online` |
| Opening hours | 7 `OpeningHoursSpecification` entries |
| Price range | `GEL $$` |
| Images/logo | Present |
| Map link | Present as no-key Google Maps search URL |
| Booking action | Present as `ReserveAction` to `/en/book` |
| `sameAs` | Instagram, Facebook, TikTok links already used by the site |
| `geo` | Not present |
| `aggregateRating` | Not present |
| `review` | Not present |

Homepage conclusion:

- The homepage `BeautySalon` schema is parseable and contains the expected core business fields.
- It does not include fake review or aggregate rating markup.
- The public Schema Markup Validator reported `0 ERRORS` and `1 WARNING` for the homepage. The warning was: `inLanguage` is not recognized by Schema.org for `BeautySalon`.
- Recommended follow-up: consider removing `inLanguage` from `BeautySalon` JSON-LD or moving language context to a `WebPage`/`WebSite` entity in a separate technical cleanup. This is a warning, not a production blocker.

## URL Coverage And Structured Data Types

| URL | HTTP | JSON-LD scripts | Types found | Parse errors | `aggregateRating` | `review` |
| --- | ---: | ---: | --- | --- | --- | --- |
| `/en` | 200 | 1 | `BeautySalon` | None | No | No |
| `/en/beauty-salon-batumi` | 200 | 3 | `BeautySalon`, `BreadcrumbList`, `FAQPage` | None | No | No |
| `/en/botox-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/en/dermal-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/en/lip-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/en/skin-treatment-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/en/acne-treatment-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/en/nails-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/en/lashes-brows-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/ka/beauty-salon-batumi` | 200 | 3 | `BeautySalon`, `BreadcrumbList`, `FAQPage` | None | No | No |
| `/ka/botox-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/ka/lip-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/ru/beauty-salon-batumi` | 200 | 3 | `BeautySalon`, `BreadcrumbList`, `FAQPage` | None | No | No |
| `/ru/botox-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/ru/lip-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/tr/botox-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/tr/lip-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/ar/botox-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/ar/lip-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/he/botox-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |
| `/he/lip-fillers-batumi` | 200 | 4 | `BeautySalon`, `BreadcrumbList`, `Service`, `FAQPage` | None | No | No |

The requested localized sample coverage was met:

- Georgian: `/ka/botox-batumi`, `/ka/lip-fillers-batumi`
- Russian: `/ru/botox-batumi`, `/ru/lip-fillers-batumi`
- Arabic: `/ar/botox-batumi`, `/ar/lip-fillers-batumi`
- Hebrew: `/he/botox-batumi`, `/he/lip-fillers-batumi`

Turkish was also sampled as an extra check.

## BreadcrumbList Validation

Status: implemented on local SEO pages and beauty salon page.

Findings:

- `BreadcrumbList` JSON-LD parsed successfully on sampled pages.
- Breadcrumb markup was not present on the homepage, which is acceptable.
- No breadcrumb parse errors were found.

## Service Structured Data Validation

Status: implemented on service-intent local SEO pages.

Findings:

- `Service` JSON-LD parsed successfully on all sampled service-intent pages.
- Service names and offer catalog service names were present in visible page text after HTML entity decoding.
- No invisible service markup was found in the sampled pages.
- No unsupported guarantees, fake outcomes, or review/rating fields were found in the service JSON-LD.

## FAQ Structured Data Validation

Status: implemented on local SEO pages where visible FAQ sections exist.

Findings:

- `FAQPage` JSON-LD parsed successfully on sampled pages.
- FAQ question text in JSON-LD was found in visible page text after HTML entity decoding.
- No hidden FAQ-only markup was found in the sampled pages.
- FAQ answers should still receive native-language review before aggressive promotion, especially Georgian, Turkish, Arabic, Hebrew, and Russian.

## Validator Findings

### Schema Markup Validator

Tested:

- `https://silkbeautysalon.online/en`
- `https://silkbeautysalon.online/en/botox-batumi`

Results observed:

- Homepage: `0 ERRORS`, `1 WARNING`, `BeautySalon` item.
- Botox page: validator output showed `0 ERRORS`, `1 WARNING`, `4 ITEMS` overall, with `BeautySalon`, `BreadcrumbList`, `Service`, and `FAQPage` detected.
- The observed warning is the same low-risk `inLanguage` warning on the `BeautySalon` item.
- `BreadcrumbList`, `Service`, and `FAQPage` items did not show critical errors in the observed validator output.

Limitation:

- The Schema Markup Validator UI output is not a stable machine-readable API. These results were captured from the live UI text. Re-run interactively if a formal screenshot/report is needed outside the repository.

### Google Rich Results Test

Tested target:

- `https://silkbeautysalon.online/en`

Result:

- The tool loaded, but the headless session returned `Something went wrong` and `Log in and try again`.
- No Rich Results Test pass/fail result was available from this environment.

Required follow-up:

1. Sign in to the owner-approved Google account.
2. Open `https://search.google.com/test/rich-results`.
3. Test:
   - `https://silkbeautysalon.online/en`
   - `https://silkbeautysalon.online/en/botox-batumi`
   - `https://silkbeautysalon.online/en/lip-fillers-batumi`
   - `https://silkbeautysalon.online/en/acne-treatment-batumi`
4. Save only non-secret pass/fail findings. Do not commit account screenshots or private Search Console data.

## Errors

No JSON parse errors were found on the sampled live URLs.

No `aggregateRating` or `review` properties were found on sampled live URLs.

No Microdata/RDFa structured data conflicts were found on sampled live URLs.

## Warnings

| Warning | Severity | Affected item | Recommendation |
| --- | --- | --- | --- |
| `inLanguage` is not recognized by Schema.org for `BeautySalon` in Schema Markup Validator | Low | `BeautySalon` JSON-LD | Remove `inLanguage` from the `BeautySalon` entity or introduce a separate `WebPage`/`WebSite` entity if language-level schema is needed. |
| Rich Results Test could not complete in this environment | Medium process gap | Google Rich Results Test validation | Re-run interactively with owner-approved Google account access. |
| Native-language review is still needed for multilingual FAQ/service copy | Medium content quality | Non-English local SEO pages | Have a native speaker verify translations before heavy promotion. |

## Fixes Required

No urgent structured data fix is required based on live JSON parseability and review/rating compliance.

Recommended non-urgent technical cleanup:

1. Remove or relocate `inLanguage` from the `BeautySalon` JSON-LD to eliminate the Schema Markup Validator warning.
2. Re-run Schema Markup Validator and Google Rich Results Test after that cleanup.
3. Keep `aggregateRating` and self-serving review markup excluded.

Recommended content review:

1. Native-language review of FAQ and service copy in Georgian, Russian, Turkish, Arabic, and Hebrew.
2. Confirm that any branded product/treatment names remain accurate and owner-approved before using them in external listings or expanded schema.

## Owner Approvals Required

Owner approval is required before:

1. Adding any `aggregateRating` or `review` markup.
2. Adding third-party review data to schema.
3. Adding new service schema for services not already visible and actually offered.
4. Adding medical, licensing, practitioner, certification, award, or guaranteed-outcome claims.
5. Adding verified geo coordinates if not already owner-confirmed.
6. Publishing validator screenshots or Search Console data outside private owner-controlled channels.

Owner approval is not required for a narrow future technical cleanup that removes the `inLanguage` warning without changing visible content, but it should still be reviewed and tested before production release.

## Conclusion

The live structured data is currently safe from a compliance perspective:

- JSON-LD parses on all sampled pages.
- Homepage `BeautySalon` schema contains the expected business fields.
- Local SEO pages include parseable `BreadcrumbList`, `Service`, and `FAQPage` where appropriate.
- FAQ and Service markup aligns with visible page content on sampled routes.
- No fake reviews, `aggregateRating`, or self-serving review markup were found.

Main remaining actions are validator-process follow-ups, not emergency fixes:

1. Re-run Google Rich Results Test interactively after owner Google login.
2. Consider removing `inLanguage` from `BeautySalon` JSON-LD.
3. Continue blocking review/rating schema unless compliant third-party data and owner approval exist.

## References

- Google structured data general guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google review rich result update on self-serving reviews: https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/
