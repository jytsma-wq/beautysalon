import {
  appointmentPolicies,
  treatmentPlanningKnowledge,
} from '@/data/client-service-knowledge';
import {
  productKnowledgeEntries,
  unresolvedSalonProductAreas,
} from '@/data/product-knowledge';
import {
  salonProductInventory,
  salonProductVerificationFields,
} from '@/data/salon-product-inventory';

const isPlaceholderBuild =
  process.env.SKIP_ENV_VALIDATION === '1' &&
  process.env.DATABASE_URL?.includes('build:build@localhost');

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  locale: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  sourceUrls?: string[];
}

export interface BlogPostSummary {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  createdAt: Date;
}

const appointmentGuideTreatments = [
  ['anti-wrinkle', 'Anti-wrinkle injections'],
  ['masseter-botox', 'Masseter treatment'],
  ['hyperhidrosis', 'Excessive-sweating treatment'],
  ['lip-fillers', 'Lip fillers'],
  ['skinpen-microneedling', 'SkinPen microneedling'],
  ['is-clinical-fire-ice-peel', 'iS Clinical Fire & Ice'],
  ['nails', 'Nail services'],
  ['lashes', 'Lash services'],
] as const;

function buildAppointmentGuideContent(): string {
  const treatmentSections = appointmentGuideTreatments
    .map(([slug, title]) => {
      const knowledge = treatmentPlanningKnowledge[slug];

      return `
        <h2 id="${slug}">${title}</h2>
        <p><a href="/en/treatments/${slug}">View the current service page</a> for the published starting price and appointment duration.</p>
        <dl>
          <dt><strong>Expected results</strong></dt>
          <dd>${knowledge.results}</dd>
          <dt><strong>Downtime and social planning</strong></dt>
          <dd>${knowledge.downtime}</dd>
          <dt><strong>Sessions</strong></dt>
          <dd>${knowledge.sessions}</dd>
          <dt><strong>Preparation</strong></dt>
          <dd>${knowledge.preparation}</dd>
          <dt><strong>Comfort</strong></dt>
          <dd>${knowledge.comfort}</dd>
          <dt><strong>Safety boundary</strong></dt>
          <dd>${knowledge.safety}</dd>
        </dl>
      `;
    })
    .join('\n');

  return `
    <p>This guide collects the practical questions clients most often ask before requesting an appointment at Silk Beauty Salon: price, duration, expected result, downtime, number of sessions, preparation, comfort, aftercare, and when a human must answer.</p>

    <h2>First: a booking request is not yet a confirmed appointment</h2>
    <p>The online form sends a preferred treatment, date, and time to the salon. The team aims to confirm the request within ${appointmentPolicies.bookingRequestConfirmationHours} hours. Do not make travel or event plans around the requested time until the salon confirms it.</p>
    <ul>
      <li><strong>Cancellation:</strong> contact the salon at least ${appointmentPolicies.cancellationNoticeHours} hours before the appointment.</li>
      <li><strong>Rescheduling:</strong> contact the salon at least ${appointmentPolicies.rescheduleNoticeHours} hours before the appointment.</li>
      <li><strong>Not sure what to choose:</strong> select “Consultation / Not sure what to book” in the booking form.</li>
      <li><strong>Price:</strong> a “from” price is a starting point, not a final quote. The salon must confirm the exact service and price.</li>
    </ul>

    <h2>What the website can answer—and what it cannot</h2>
    <p>The eight services below have an owner-supported customer journey and structured planning information. Other treatment names may still be visible on older website pages, but their availability and details have not yet been approved for automated answers. For those services, ask the salon to confirm availability, price, duration, preparation, suitability, and aftercare.</p>
    <p>The website and future chatbot can explain published service information and help prepare a booking request. They cannot diagnose a condition, decide whether an injectable or skin treatment is safe for an individual, identify a complication, prescribe aftercare for unexpected symptoms, or guarantee a result.</p>

    ${treatmentSections}

    <h2>Questions that always go to a person</h2>
    <ul>
      <li>“Am I suitable?” or “Is this safe with my condition or medicine?”</li>
      <li>Questions involving pregnancy, breastfeeding, allergies, active infection, recent procedures, or a previous reaction.</li>
      <li>Unexpected, worsening, or urgent symptoms during or after treatment.</li>
      <li>Requests for a diagnosis, exact product or dose, guaranteed result, or individual medical advice.</li>
      <li>Any service whose availability or details have not yet been verified on the website.</li>
    </ul>

    <h2>How to request the right appointment</h2>
    <p>Use the <a href="/en/book">online booking form</a> and select the consultation option when you are unsure. In the notes, describe your goal, important dates, previous treatments, and the amount of downtime you can accept. You can also use the <a href="/en/contact-us">contact page</a> to call, email, or reach the salon on WhatsApp.</p>

    <h2>Manufacturer information used for the skin-treatment sections</h2>
    <ul>
      <li><a href="https://www.skinpen.com/the-treatment" target="_blank" rel="noopener noreferrer">SkinPen: the treatment</a></li>
      <li><a href="https://www.skinpen.com/faqs/" target="_blank" rel="noopener noreferrer">SkinPen: frequently asked questions</a></li>
      <li><a href="https://www.isclinical.com/pages/fire-and-ice" target="_blank" rel="noopener noreferrer">iS Clinical: Fire & Ice</a></li>
    </ul>
  `;
}

function buildProductLibraryContent(): string {
  const inventoryRows = salonProductInventory
    .map(
      (item) => `
        <tr>
          <td>${item.area}</td>
          <td>${item.product}</td>
          <td>${item.referenceBrands.length > 0 ? item.referenceBrands.join('; ') : 'No reference brand selected'}</td>
          <td>${item.exactSalonBrand ?? 'Staff confirmation required'}</td>
          <td>${item.usedFor}</td>
        </tr>
      `
    )
    .join('');
  const productSections = productKnowledgeEntries
    .map(
      (entry) => `
        <h2 id="${entry.id}">${entry.title}</h2>
        <p><strong>Relevant services:</strong> ${entry.relevantTreatmentSlugs.join(', ')}</p>
        <p><strong>Documented brand examples:</strong> ${entry.brandExamples.join('; ')}</p>
        <p><strong>What it contains:</strong> ${entry.activeIngredientOrComponents}</p>
        <p><strong>Role in treatment:</strong> ${entry.role}</p>
        <p><strong>How it works:</strong> ${entry.mechanism}</p>
        <p><strong>Authorization boundary:</strong> ${entry.authorizationBoundary}</p>
        <p><strong>What Silk can currently say:</strong> ${entry.clientSafeAnswer}</p>
        <h3>Evidence Silk must keep before naming the product as its own</h3>
        <ul>${entry.salonEvidenceNeeded.map((item) => `<li>${item}</li>`).join('')}</ul>
        <h3>Official sources</h3>
        <ul>${entry.sourceUrls
          .map(
            (url) =>
              `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a></li>`
          )
          .join('')}</ul>
      `
    )
    .join('\n');

  return `
    <p>Clients often use “Botox” or “filler” as if each were one universal product. They are not. Trade names, active preparations, potency units, ingredients, approved uses, storage, and professional requirements can differ. This library explains the product categories behind Silk’s verified treatment pages and records what still needs proof from the salon.</p>

    <h2>Important: research is not proof of Silk’s inventory</h2>
    <p>A manufacturer page or foreign regulator can prove that a product exists and explain its official mechanism in that market. It cannot prove that Silk Beauty Salon bought it, stores it correctly, may lawfully use it in Georgia, or uses it for your appointment. Georgian law provides for a departmental registry of pharmaceutical products granted market authorization; the exact product still needs to be checked against that registry and the salon’s records.</p>
    <p>Until that evidence is supplied, the chatbot will say “exact brand to be confirmed by the salon.” It will never convert toxin units, provide a dilution recipe, select a medicine, recommend self-application, diagnose a complication, or promise that a product is suitable.</p>

    <h2>Product map by verified treatment</h2>
    <ul>
      <li><a href="/en/treatments/anti-wrinkle">Anti-wrinkle injections</a>, <a href="/en/treatments/masseter-botox">masseter treatment</a>, and <a href="/en/treatments/hyperhidrosis">hyperhidrosis treatment</a>: botulinum-toxin product plus product-specific preparation and optional comfort measures; exact brand not yet supplied by Silk.</li>
      <li><a href="/en/treatments/lip-fillers">Lip fillers</a>: an exact hyaluronic-acid filler variant and clinical safety protocol; exact brand not yet supplied by Silk.</li>
      <li><a href="/en/treatments/skinpen-microneedling">SkinPen microneedling</a>: published branded device service, but current model, cartridge, hydrogel, and inventory records still require verification.</li>
      <li><a href="/en/treatments/is-clinical-fire-ice-peel">iS Clinical Fire & Ice</a>: published branded protocol, but current authentic stock, formulas, and professional protocol still require verification.</li>
    </ul>

    <h2>Complete salon product and brand inventory</h2>
    <p>This is the master collection list for the staff review. A name in “reference brands” is an official-source example or a published service name—not a claim that Silk uses it. The “Silk brand” column stays unconfirmed until staff inspect the actual product and evidence.</p>
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Product</th>
            <th>Reference brands or names</th>
            <th>Silk brand</th>
            <th>Used for</th>
          </tr>
        </thead>
        <tbody>${inventoryRows}</tbody>
      </table>
    </div>

    <h2>What staff must record for every item</h2>
    <ol>${salonProductVerificationFields.map((field) => `<li>${field}</li>`).join('')}</ol>

    ${productSections}

    <h2>Nails and lashes: inventory still required</h2>
    <p>The website supports nail and lash booking journeys, but the exact product systems are not documented yet. Before the chatbot answers brand, ingredient, allergy, removal, patch-test, or aftercare questions, Silk needs to supply:</p>
    <ul>${unresolvedSalonProductAreas
      .map((area) => `<li><strong>${area.treatmentSlug}:</strong> ${area.needed}</li>`)
      .join('')}</ul>

    <h2>Georgia verification</h2>
    <p>For prescription medicines and injectable products, Silk’s clinical lead should verify the current Georgian market status and local scope-of-practice requirements, then sign off the product record. Foreign FDA, UK, or manufacturer information is evidence about that specific market only.</p>
    <ul>
      <li><a href="https://matsne.gov.ge/en/document/view/29836" target="_blank" rel="noopener noreferrer">Law of Georgia on Medicines and Pharmaceutical Activities</a></li>
      <li><a href="https://ehealth.moh.gov.ge/Hmis/Portal/List.aspx" target="_blank" rel="noopener noreferrer">Georgia health information portal, including pharmaceutical modules</a></li>
    </ul>
  `;
}

const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'fallback-silk-beauty-salon-appointment-guide',
    title: 'Silk Beauty Salon Appointment Guide: Price, Timing, Preparation and Recovery',
    slug: 'silk-beauty-salon-appointment-guide',
    excerpt:
      'The practical answers to check before booking: starting prices, appointment length, results, downtime, sessions, preparation, safety, and the 48-hour cancellation policy.',
    image: '/images/hero-poster.jpg',
    category: 'Appointment Guide',
    author: 'Silk Beauty Salon editorial team',
    readTime: '14 min read',
    locale: 'en',
    published: true,
    createdAt: new Date('2026-07-22T10:00:00.000Z'),
    updatedAt: new Date('2026-07-22T10:00:00.000Z'),
    sourceUrls: [
      'https://www.skinpen.com/the-treatment',
      'https://www.skinpen.com/faqs/',
      'https://www.isclinical.com/pages/fire-and-ice',
    ],
    content: buildAppointmentGuideContent(),
  },
  {
    id: 'fallback-products-medicines-fillers-botulinum-toxin-library',
    title: 'Product Library: Botulinum Toxin, Fillers, Numbing Products and Treatment Materials',
    slug: 'products-medicines-fillers-botulinum-toxin-library',
    excerpt:
      'What Botox-type products, hyaluronic-acid fillers, numbing medicines, SkinPen materials, and Fire & Ice products do—and which exact brands Silk still needs to verify.',
    image: '/images/hero-poster.jpg',
    category: 'Product Library',
    author: 'Silk Beauty Salon editorial team',
    readTime: '16 min read',
    locale: 'en',
    published: true,
    createdAt: new Date('2026-07-22T11:00:00.000Z'),
    updatedAt: new Date('2026-07-22T11:00:00.000Z'),
    sourceUrls: [
      ...new Set(productKnowledgeEntries.flatMap((entry) => entry.sourceUrls)),
      'https://matsne.gov.ge/en/document/view/29836',
    ],
    content: buildProductLibraryContent(),
  },
  {
    id: 'fallback-beauty-salon-batumi-guide',
    title: 'Beauty Salon in Batumi: How to Choose Safe, Professional Care',
    slug: 'beauty-salon-batumi-guide',
    excerpt:
      'A practical guide to choosing a beauty salon in Batumi, including consultation quality, hygiene, local convenience, and what to ask before booking.',
    image: '/images/hero-poster.jpg',
    category: 'Local Beauty Guide',
    author: 'Silk Beauty Salon editorial team',
    readTime: '7 min read',
    locale: 'en',
    published: true,
    createdAt: new Date('2026-06-08T10:00:00.000Z'),
    updatedAt: new Date('2026-06-13T10:00:00.000Z'),
    sourceUrls: ['https://www.aad.org/public/everyday-care/skin-care-basics'],
    content: `
      <p>Searching for a beauty salon in Batumi should lead to more than a price list. Good salon care starts with a clear consultation, realistic advice, clean treatment rooms, and a practitioner who can explain what will happen before, during, and after your appointment.</p>

      <h2>Start with consultation quality</h2>
      <p>A useful consultation should cover your goals, skin history, allergies, recent treatments, medications, travel plans, and the amount of downtime you can accept. At Silk Beauty Salon, consultations are designed to match treatment choice with real life: work schedules, beach time, events, and the humid Black Sea climate in Batumi.</p>
      <p>For first-time clients, a consultation is also where expectations are set. Natural-looking results usually come from conservative planning, careful timing, and aftercare that the client can realistically follow. If you are comparing salons, ask how the practitioner decides whether to recommend an injectable, peel, laser treatment, skin analysis, or no treatment at all.</p>

      <h2>Look for visible trust signals</h2>
      <p>Trustworthy salons make it easy to identify where the salon is located, how to contact the business, what services are described, and how booking works. A useful local beauty salon page should include a street address, phone number, email address, opening hours, service information, and booking instructions.</p>
      <p>Silk Beauty Salon is located at Zurab Gorgiladze 63 in Batumi, Georgia. Clients can book online, call the salon, use WhatsApp, or email info@silkbeautysalon.online. The website is available in six languages; clients should confirm their preferred spoken language when booking.</p>

      <h2>Check the treatment information before booking</h2>
      <p>Before choosing a salon, read the treatment page rather than booking from the service name alone. A helpful treatment page should explain what the treatment is for, how long it takes, what results may look like, common downtime, and aftercare. You can start with the <a href="/en/treatments">Silk Beauty Salon treatment menu</a>, then compare individual treatments such as skin quality treatments, anti-wrinkle treatments, fillers, lashes, nails, and hair care.</p>
      <p>If the information feels vague, ask for more detail. A professional salon should be comfortable explaining when a treatment is appropriate and when a different option would be safer or more useful.</p>

      <h2>Ask these questions before your appointment</h2>
      <ul>
        <li>Who will perform my treatment, and what information can the salon provide about the service?</li>
        <li>What result is realistic for my skin, face shape, or beauty goal?</li>
        <li>What should I avoid before and after the appointment?</li>
        <li>How much downtime should I plan for?</li>
        <li>What should I do if I have a concern after treatment?</li>
      </ul>

      <h2>Why local context matters in Batumi</h2>
      <p>Batumi clients often combine beauty appointments with work, travel, beach days, weddings, or tourism. That makes timing important. Some treatments are easy to schedule before a normal day; others may need several days away from direct sun, heat, intense exercise, or makeup. A local salon should help you plan around climate, travel, and social commitments.</p>
      <p>For appointments at Silk Beauty Salon, use the <a href="/en/book">online booking page</a> or contact the team through the <a href="/en/contact-us">contact page</a>. If you are visiting from outside Georgia, the <a href="/en/international-clients">international clients page</a> explains how to plan treatment around your stay.</p>

      <h2>Sources and further reading</h2>
      <ul>
        <li><a href="https://www.aad.org/public/everyday-care/skin-care-basics" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: skin care basics</a></li>
      </ul>
    `,
  },
  {
    id: 'fallback-skin-care-batumi-seasonal-guide',
    title: 'Skin Care in Batumi: Seasonal Planning Before and After Your Appointment',
    slug: 'skin-care-batumi-seasonal-guide',
    excerpt:
      'How to plan a skin-care appointment in Batumi around humidity, sun exposure, travel, makeup, and aftercare, with practical guidance from the Silk team.',
    image: '/images/hero-poster.jpg',
    category: 'Skin Care',
    author: 'Silk Beauty Salon editorial team',
    readTime: '8 min read',
    locale: 'en',
    published: true,
    createdAt: new Date('2026-06-09T10:00:00.000Z'),
    updatedAt: new Date('2026-06-13T10:00:00.000Z'),
    sourceUrls: [
      'https://www.aad.org/public/everyday-care/skin-care-basics',
      'https://www.aad.org/media/stats-sunscreen',
    ],
    content: `
      <p>Skin-care appointments in Batumi should be planned around your skin condition, timeline, and aftercare. The right plan is not the most aggressive one; it is the one matched to your skin, climate exposure, and schedule.</p>

      <h2>How Batumi weather affects skin planning</h2>
      <p>Batumi's coastal climate can feel humid, sunny, windy, and rainy within the same week. This matters for skin care. Humidity can make oily or congestion-prone skin feel heavier, while sun exposure can increase sensitivity after exfoliation or active treatments. A skin-care plan should consider what your skin is doing today, not only what treatment name you saw online.</p>
      <p>If you are planning a skin-care appointment before a wedding, photoshoot, travel day, or beach weekend, tell your practitioner. Gentler hydration and barrier-support routines are often easier to schedule close to an event, while stronger exfoliating treatments may need more recovery time.</p>

      <h2>What to do before a skin-care appointment</h2>
      <ul>
        <li>Pause strong exfoliating products if your skin is already irritated.</li>
        <li>Tell your practitioner about recent peels, laser treatments, injectables, acne medication, or skin reactions.</li>
        <li>Avoid arriving with a sunburn or active irritation unless the appointment is specifically for calming care.</li>
        <li>Bring the names of products you use at home, especially retinoids, acids, or prescription creams.</li>
      </ul>

      <h2>What good aftercare looks like</h2>
      <p>After an in-clinic skin treatment, the skin barrier deserves a simple routine. In many cases, that means gentle cleansing, moisturizer, and sun protection. The American Academy of Dermatology explains that basic skin care can affect appearance, and its sunscreen guidance recommends broad-spectrum protection with SPF 30 or higher. After in-clinic exfoliation or active treatments, your practitioner may adjust this guidance for your specific skin.</p>
      <p>For several days after stronger treatments, it is usually sensible to avoid unnecessary heat, harsh scrubs, direct sun exposure, and layering too many active products. The goal is to let the skin recover calmly rather than chasing faster results at home.</p>

      <h2>Which skin treatment should you choose?</h2>
      <p>There is no universal best skin treatment. Dry or travel-stressed skin may need hydration and barrier support. Congested skin may need careful planning. Sensitive skin may need calming care. Dull or uneven skin may benefit from a planned course rather than a single aggressive session.</p>
      <p>Silk Beauty Salon offers skin analysis and treatment planning at the salon in Batumi. Browse <a href="/en/treatments">skin care treatments</a>, then <a href="/en/book">book a consultation</a> if you want help choosing the right option.</p>

      <h2>When to delay your skin treatment</h2>
      <p>Delay treatment if you have a fresh sunburn, unexplained rash, active infection, or a recent procedure that has not healed. If you are unsure, contact the salon before arriving. A good practitioner would rather reschedule than treat skin that is not ready.</p>

      <h2>Sources and further reading</h2>
      <ul>
        <li><a href="https://www.aad.org/public/everyday-care/skin-care-basics" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: skin care basics</a></li>
        <li><a href="https://www.aad.org/media/stats-sunscreen" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: sunscreen FAQs</a></li>
      </ul>
    `,
  },
  {
    id: 'fallback-botox-fillers-batumi-consultation-guide',
    title: 'Botox and Fillers in Batumi: Consultation, Safety, and Aftercare',
    slug: 'botox-fillers-batumi-consultation-guide',
    excerpt:
      'A client-focused guide to Botox and dermal filler consultations in Batumi, including planning questions, aftercare, and safety signals.',
    image: '/images/hero-poster.jpg',
    category: 'Injectables Safety',
    author: 'Silk Beauty Salon editorial team',
    readTime: '9 min read',
    locale: 'en',
    published: true,
    createdAt: new Date('2026-06-10T10:00:00.000Z'),
    updatedAt: new Date('2026-06-13T10:00:00.000Z'),
    sourceUrls: [
      'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers',
      'https://www.fda.gov/consumers/consumer-updates/dermal-filler-dos-and-donts-wrinkles-lips-and-more',
      'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/upper-facial-lines-developing-botulinum-toxin-drug-products',
    ],
    content: `
      <p>Botox and dermal fillers are popular with local and international clients in Batumi, but they should never be treated like a casual beauty add-on. Good injectable work starts with assessment, medical history, anatomy, product choice, conservative planning, and aftercare.</p>

      <h2>Botox and fillers are not the same treatment</h2>
      <p>Anti-wrinkle injections are commonly used to soften selected expression lines by relaxing targeted muscles for a temporary period. Dermal fillers are different: they are injected to restore or enhance volume, shape, or contour in selected areas. Because the goals, anatomy, risks, and aftercare are different, the consultation should be different too.</p>
      <p>If you are unsure what you need, do not book only by treatment name. Book a consultation and describe the change you want to see. A responsible plan might recommend skin analysis, a skin booster, anti-wrinkle treatment, filler, staged treatment, or no procedure.</p>

      <h2>What a proper injectable consultation should cover</h2>
      <ul>
        <li>Your medical history, allergies, pregnancy status, prior injectable treatments, and recent dental or facial procedures.</li>
        <li>Your facial movement, symmetry, volume, skin quality, and natural proportions.</li>
        <li>The product category, expected duration, realistic limits, and possible side effects.</li>
        <li>Aftercare instructions, follow-up timing, and when to contact the salon urgently.</li>
      </ul>

      <h2>Safety signals to look for</h2>
      <p>Regulatory sources such as the FDA explain that dermal fillers are medical devices and warn against buying fillers directly for self-injection or using products of unclear origin. A client should know who is performing the treatment, what product category is being used, and how aftercare will be handled.</p>
      <p>For botulinum toxin products, safety begins with appropriate product sourcing, correct dilution and placement, and a practitioner who understands facial anatomy. Treatments should be tailored to the individual rather than copied from a trend photo.</p>

      <h2>Aftercare and timing</h2>
      <p>Aftercare depends on the treatment and your individual plan. In general, clients should avoid unnecessary pressure on the treated area, follow practitioner instructions about exercise and heat exposure, and report unusual symptoms promptly. Swelling or small bruises can happen after injections, so avoid scheduling treatment immediately before an important event unless your practitioner agrees the timing is reasonable.</p>
      <p>International clients visiting Batumi should leave enough time for review before traveling onward. The <a href="/en/international-clients">international clients guide</a> explains how to plan aesthetic appointments around a stay in Georgia.</p>

      <h2>How Silk approaches injectables</h2>
      <p>At Silk Beauty Salon, injectable appointments begin with consultation and planning. The website is available in six languages; confirm your preferred spoken language directly when booking. You can learn more on the <a href="/en/botox-batumi">Botox in Batumi page</a>, compare the wider <a href="/en/treatments">treatments page</a>, or <a href="/en/book">book a consultation</a>.</p>

      <h2>Sources and further reading</h2>
      <ul>
        <li><a href="https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers" target="_blank" rel="noopener noreferrer">FDA: dermal fillers</a></li>
        <li><a href="https://www.fda.gov/consumers/consumer-updates/dermal-filler-dos-and-donts-wrinkles-lips-and-more" target="_blank" rel="noopener noreferrer">FDA: dermal filler do's and don'ts</a></li>
        <li><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/upper-facial-lines-developing-botulinum-toxin-drug-products" target="_blank" rel="noopener noreferrer">FDA: botulinum toxin products for upper facial lines</a></li>
      </ul>
    `,
  },
];

function getFallbackPosts(locale: string): BlogPost[] {
  return fallbackBlogPosts.map((post) => ({ ...post, locale }));
}

function toSummary(post: BlogPost): BlogPostSummary {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    image: post.image,
    category: post.category,
    author: post.author,
    readTime: post.readTime,
    createdAt: post.createdAt,
  };
}

function mergeSummaries(
  primaryPosts: BlogPostSummary[],
  fallbackPosts: BlogPostSummary[]
): BlogPostSummary[] {
  const seen = new Set(primaryPosts.map((post) => post.slug));
  return [...primaryPosts, ...fallbackPosts.filter((post) => !seen.has(post.slug))];
}

export function getFallbackBlogSlugs(): string[] {
  return fallbackBlogPosts.map((post) => post.slug);
}

/**
 * Fetch all published blog posts for a given locale
 */
export async function getBlogPosts(locale: string): Promise<BlogPostSummary[]> {
  const fallbackSummaries = getFallbackPosts(locale).map(toSummary);

  if (isPlaceholderBuild) {
    return fallbackSummaries;
  }

  try {
    const { db } = await import('@/lib/db');
    const posts = await db.blogPost.findMany({
      where: {
        locale,
        published: true,
      },
      select: {
        title: true,
        slug: true,
        excerpt: true,
        image: true,
        category: true,
        author: true,
        readTime: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return mergeSummaries(posts, fallbackSummaries);
  } catch {
    return fallbackSummaries;
  }
}

/**
 * Fetch a single blog post by slug and locale
 */
export async function getBlogPostBySlug(
  slug: string,
  locale: string
): Promise<BlogPost | null> {
  const fallbackPost = getFallbackPosts(locale).find((post) => post.slug === slug) || null;

  if (fallbackPost || isPlaceholderBuild) {
    return fallbackPost;
  }

  try {
    const { db } = await import('@/lib/db');
    const post = await db.blogPost.findFirst({
      where: {
        slug,
        locale,
      },
    });

    return post || fallbackPost;
  } catch {
    return fallbackPost;
  }
}

/**
 * Fetch all blog post slugs for static generation
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  const fallbackSlugs = getFallbackBlogSlugs();

  if (isPlaceholderBuild) {
    return fallbackSlugs;
  }

  try {
    const { db } = await import('@/lib/db');
    const posts = await db.blogPost.findMany({
      where: {
        published: true,
      },
      select: {
        slug: true,
      },
    });
    return Array.from(new Set([...posts.map((post: { slug: string }) => post.slug), ...fallbackSlugs]));
  } catch {
    return fallbackSlugs;
  }
}

/**
 * Fetch related blog posts (excluding the current one)
 */
export async function getRelatedBlogPosts(
  currentSlug: string,
  locale: string,
  limit: number = 3
): Promise<BlogPostSummary[]> {
  const fallbackSummaries = getFallbackPosts(locale)
    .filter((post) => post.slug !== currentSlug)
    .map(toSummary)
    .slice(0, limit);

  if (isPlaceholderBuild) {
    return fallbackSummaries;
  }

  try {
    const { db } = await import('@/lib/db');
    const posts = await db.blogPost.findMany({
      where: {
        locale,
        published: true,
        slug: {
          not: currentSlug,
        },
      },
      select: {
        title: true,
        slug: true,
        excerpt: true,
        image: true,
        category: true,
        author: true,
        readTime: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
    });

    return mergeSummaries(posts, fallbackSummaries).slice(0, limit);
  } catch {
    return fallbackSummaries;
  }
}
