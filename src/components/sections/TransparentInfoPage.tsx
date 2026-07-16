import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

type Props = {
  homeLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  external?: boolean;
  bookLabel: string;
};

export function TransparentInfoPage({
  homeLabel,
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  external = false,
  bookLabel,
}: Props) {
  const primaryAction = external ? (
    <a href={primaryHref} target="_blank" rel="noopener noreferrer">{primaryLabel}</a>
  ) : (
    <a href={primaryHref}>{primaryLabel}</a>
  );

  return (
    <>
      <section className="bg-[#f7f2eb] pt-[170px] md:pt-[188px]">
        <div className="container-custom py-16 md:py-20">
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">{homeLabel}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">{title}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">{eyebrow}</p>
            <h1 className="localized-hero-heading mb-6 font-sans font-light text-[#241f1b]">{title}</h1>
            <p className="text-lg leading-8 text-stone-700 md:text-xl">{description}</p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row">
            <Button asChild className="btn-gold">{primaryAction}</Button>
            <Button asChild variant="outline" className="rounded-md"><Link href="/book">{bookLabel}</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
