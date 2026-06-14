import type { Metadata } from 'next';
import LocaleLayout from './[locale]/layout';
import HomePage, { generateMetadata as generateLocaleHomeMetadata } from './[locale]/page';

const rootParams = Promise.resolve({ locale: 'en' });

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleHomeMetadata({ params: rootParams });
}

export default function RootPage() {
  return (
    <LocaleLayout params={rootParams}>
      <HomePage params={rootParams} />
    </LocaleLayout>
  );
}
