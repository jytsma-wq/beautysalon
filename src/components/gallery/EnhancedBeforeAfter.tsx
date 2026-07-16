'use client';

import { useTranslations } from 'next-intl';

interface EnhancedBeforeAfterProps {
  locale?: string;
  showFilters?: boolean;
  maxItems?: number;
}

export function EnhancedBeforeAfter(_props: EnhancedBeforeAfterProps) {
  const t = useTranslations('beforeAfterPage');

  return (
    <div className="border border-stone-200 bg-white px-6 py-16 text-center md:px-12">
      <h2 className="font-serif text-3xl font-light text-stone-900">
        {t('comingSoon')}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
        {t('galleryDescription')}
      </p>
    </div>
  );
}
