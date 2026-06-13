# Organic SEO Roadmap

This document tracks the parts of the Silk6 SEO goal that are outside normal code deployment: Search Console access, Google Business Profile ownership, local citations, reviews, outreach, and monthly ranking checks.

## Implemented in the codebase

- Canonical metadata and hreflang alternates are generated through `src/lib/seo.ts`.
- `BeautySalon` JSON-LD is rendered on the homepage with address, phone, email, opening hours, founder, staff, map link, and social profiles.
- The global sitemap includes localized static pages, treatment pages, condition pages, category pages, and fallback blog articles.
- The blog now has code-owned expert articles for Batumi beauty salon, facials, skin care, Botox, fillers, safety, and aftercare.
- The About page exposes ownership, legal name, address, phone, email, opening hours, standards, team bios, languages, and qualifications.
- Media hosts used by the site have preconnect and DNS-prefetch hints in the root layout.
- A dedicated `beauty-salon-batumi` landing page targets the main local query with unique local content, service links, NAP, hours, FAQ schema, breadcrumb schema, and Local Business schema.
- Search Console HTML meta verification is supported with the optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` Hostinger environment variable.

## Owner tasks

1. Google Search Console
   - Add `https://silkbeautysalon.online` as a Domain property.
   - Verify DNS ownership in the domain registrar or Hostinger DNS.
   - If using the HTML meta tag method instead, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Hostinger to the token from Search Console, redeploy, then click Verify.
   - Submit `https://silkbeautysalon.online/sitemap.xml`.
   - Check Indexing > Pages weekly until every main page is indexed.
   - Check Experience > Core Web Vitals monthly.

2. Google Business Profile
   - Claim or create the Silk Beauty Salon profile.
   - Use the exact NAP from the site:
     - Name: Silk Beauty Salon
     - Address: Zurab Gorgiladze 63, Batumi, Adjara 6000, Georgia
     - Phone: +995 577 34 57 67
     - Email: info@silkbeautysalon.online
   - Add the website URL, business hours, service categories, photos, and appointment URL.
   - After the profile URL is live, add it to `siteConfig.social.googleBusinessProfile`.

3. Local citations
   - Keep the same NAP on tourism directories, Georgian business directories, Facebook, Instagram, Apple Maps, Bing Places, and relevant Batumi directories.
   - Record every listing URL and login owner in a private operations document.
   - Review citations quarterly for duplicate or outdated phone/address data.

4. Review process
   - Ask real clients for reviews after completed appointments.
   - Never buy reviews or review-gate unhappy clients.
   - Reply to reviews with service-specific but privacy-safe language.

## Content plan

Publish or refresh one useful article per month. Each article should answer a real client question, include local Batumi context, link to the relevant treatment and booking pages, and cite authoritative sources when medical-aesthetic safety or skin-care guidance is discussed.

Priority topics:

- Best beauty salon in Batumi for tourists: what to book before a trip.
- Facial aftercare in humid weather.
- Botox consultation checklist for first-time clients.
- Dermal filler safety questions to ask before treatment.
- Skin care routine before a wedding or event in Batumi.
- Nail and lash appointment planning for visitors.
- How to choose between a facial, peel, skin booster, and injectable.

## Legitimate backlink plan

Target three to five relevant placements per quarter:

- Batumi tourism blogs or hotel concierge guides.
- Georgian beauty, wellness, and lifestyle publications.
- Expat and travel guides for Georgia.
- Wedding planners, photographers, and event venues in Batumi.
- Supplier or training partner profile pages where the relationship is real.

Outreach rules:

- Pitch useful local content, not link swaps.
- Avoid paid link networks, private blog networks, automated guest-post farms, and irrelevant directories.
- Keep anchor text natural, such as `Silk Beauty Salon in Batumi`, `beauty salon in Batumi`, or the article title.

## Monthly measurement

Track these manually or in Search Console:

- Indexed pages count.
- Clicks and impressions for `beauty salon Batumi`, `facials Batumi`, `Botox Batumi`, `dermal fillers Batumi`, and brand queries.
- Top landing pages by organic traffic.
- Core Web Vitals status.
- New referring domains and the quality of each link.
- Calls, booking form submissions, and email inquiries from organic visitors.

## Reference standards

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google localized versions and hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google canonical URL guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google helpful content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Core Web Vitals thresholds: https://web.dev/articles/defining-core-web-vitals-thresholds
