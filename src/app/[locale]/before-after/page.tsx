import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { buildSeoMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'beforeAfterPage' });

  return buildSeoMetadata({
    locale,
    path: '/before-after',
    title: locale === 'en' ? 'Treatment Case Studies' : t('comingSoon'),
    description: t('galleryDescription'),
    noIndex: true,
  });
}

export default async function BeforeAfterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'beforeAfterPage' });

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Magazine Chapter Header */}
      <header className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Chapter marker */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-stone-300" />
            <span className="text-xs tracking-[0.4em] uppercase text-stone-400">
              {t('comingSoon')}
            </span>
          </div>

          {/* Magazine Headline */}
          <h1 className="localized-hero-heading mb-8 max-w-4xl font-serif font-light text-stone-900">
            {t('comingSoon')}
          </h1>

          {/* Intro text */}
          <p className="text-lg md:text-xl leading-relaxed text-stone-600 max-w-2xl">
            {t('galleryDescription')}
          </p>
        </div>
      </header>

      {/* Magazine-style CTA Section */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-stone-300" />
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">{t('bookNow')}</span>
            <div className="w-12 h-px bg-stone-300" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-6">
            {t('bookNow')}
          </h2>
          <p className="text-stone-500 mb-10 max-w-xl mx-auto leading-relaxed">
            {t('galleryDescription')}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-3 px-10 py-4 bg-stone-900 text-stone-50 text-sm uppercase tracking-widest hover:bg-[#b5453a] transition-colors duration-300"
          >
            {t('bookNow')}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
