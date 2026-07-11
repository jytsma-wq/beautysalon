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

const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'fallback-beauty-salon-batumi-guide',
    title: 'Beauty Salon in Batumi: How to Choose Safe, Professional Care',
    slug: 'beauty-salon-batumi-guide',
    excerpt:
      'A practical guide to choosing a beauty salon in Batumi, including consultation quality, hygiene, local convenience, and what to ask before booking.',
    image: '/images/hero-poster.jpg',
    category: 'Local Beauty Guide',
    author: 'Nana Gviniashvili',
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
      <p>Trustworthy salons make it easy to identify who provides care, where the salon is located, how to contact the team, and which services are suitable for your concern. A strong local beauty salon page should include a street address, phone number, email address, opening hours, practitioner names, treatment information, and booking instructions.</p>
      <p>Silk Beauty Salon is located at Zurab Gorgiladze 63 in Batumi, Georgia. Clients can book online, call the salon, or email info@silkbeautysalon.online. The team includes Georgian, English, Russian, and Turkish-speaking practitioners, which helps local and international clients understand the plan before treatment begins.</p>

      <h2>Check the treatment information before booking</h2>
      <p>Before choosing a salon, read the treatment page rather than booking from the service name alone. A helpful treatment page should explain what the treatment is for, how long it takes, what results may look like, common downtime, and aftercare. You can start with the <a href="/en/treatments">Silk Beauty Salon treatment menu</a>, then compare individual treatments such as skin quality treatments, anti-wrinkle treatments, fillers, lashes, nails, and hair care.</p>
      <p>If the information feels vague, ask for more detail. A professional salon should be comfortable explaining when a treatment is appropriate and when a different option would be safer or more useful.</p>

      <h2>Ask these questions before your appointment</h2>
      <ul>
        <li>Who will perform my treatment, and what is their training area?</li>
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
    image: '/images/natia-tsiklauri.jpg',
    category: 'Skin Care',
    author: 'Natia Tsiklauri',
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
    image: '/images/nana-gviniashvili.jpg',
    category: 'Injectables Safety',
    author: 'Nana Gviniashvili',
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
      <p>At Silk Beauty Salon, injectable consultations focus on natural-looking results, facial balance, and conservative planning. The team explains treatment options in Georgian, English, and Russian so clients understand the plan before proceeding. You can learn more on the <a href="/en/botox-batumi">Botox in Batumi page</a>, compare the wider <a href="/en/treatments">treatments page</a>, or <a href="/en/book">book a consultation</a>.</p>

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
