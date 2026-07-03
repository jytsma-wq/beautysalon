# LocalBusiness BeautySalon Schema Validation

## Scope

The localized homepage renders one `application/ld+json` script for Silk Beauty Salon using Schema.org `BeautySalon`.

Data source:
- Business name, legal name, address, phone, email, opening hours, social links, logo, and site URL come from `src/data/site-config.ts`.
- Locale homepage and booking URLs are generated from the existing locale routing helpers.

Compliance notes:
- `aggregateRating` is intentionally excluded.
- `review` markup is intentionally excluded.
- `geo` coordinates are intentionally excluded until verified coordinates are stored in a shared business data source and approved.
- Empty social links, null values, and undefined values are removed before serialization.

## Browser/DOM Check

1. Open a localized homepage such as `https://silkbeautysalon.online/en`.
2. Open DevTools Elements or View Source.
3. Search for `application/ld+json`.
4. Confirm there is one homepage LocalBusiness/BeautySalon script.
5. Copy the script contents and confirm it parses as JSON.
6. Confirm there is no `aggregateRating`, `review`, or unverified `geo` field.

## Google Rich Results Test

1. Open `https://search.google.com/test/rich-results`.
2. Test the deployed localized homepage URL.
3. Review detected structured data and warnings.
4. Confirm the page still renders normally and no visible content changed.

## Schema Markup Validator

1. Open `https://validator.schema.org/`.
2. Test the deployed localized homepage URL or paste the JSON-LD block.
3. Confirm the `BeautySalon` entity parses.
4. Confirm required business fields are present:
   - `name`
   - `url`
   - `address`
   - `telephone`
   - `email`
   - `openingHoursSpecification`
   - `priceRange`
   - `sameAs`
5. Confirm localized route URLs point to the matching locale homepage and booking page.

## Owner Approval Notes

Production deployment still requires owner approval. Add `geo` coordinates or review/rating markup only after explicit owner approval and compliant source verification.
