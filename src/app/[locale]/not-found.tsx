import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function NotFound() {
  const t = await getTranslations('notFoundPage');

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
          {t('title')}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#241f1b] px-6 text-sm font-medium text-white transition-colors hover:bg-[#8d6f58]"
          >
            {t('home')}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#d9cec1] px-6 text-sm font-medium text-[#241f1b] transition-colors hover:bg-[#f3ece3]"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </div>
  );
}
