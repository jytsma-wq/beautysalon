import HeroSlider from '@/components/sections/HeroSlider';
import TrustSignals from '@/components/sections/TrustSignals';
import CategoriesGrid from '@/components/sections/CategoriesGrid';
import FeaturedTreatments from '@/components/sections/FeaturedTreatments';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';
import ProductBrands from '@/components/sections/ProductBrands';
import TeamSection from '@/components/sections/TeamSection';
import Testimonials from '@/components/sections/Testimonials';
import LookbookMarquee from '@/components/sections/LookbookMarquee';
import FlashDeals from '@/components/sections/FlashDeals';
import GiftCards from '@/components/sections/GiftCards';
import TreatmentBundles from '@/components/sections/TreatmentBundles';
import LoyaltyProgram from '@/components/sections/LoyaltyProgram';
import AestheticQuiz from '@/components/interactive/AestheticQuiz';
import VipJourney from '@/components/interactive/VipJourney';
import VirtualConsultation from '@/components/interactive/VirtualConsultation';
import SkinAnalysis from '@/components/interactive/SkinAnalysis';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider locale={locale} />
      
      {/* Flash Deals - Limited Time Offers */}
      <FlashDeals locale={locale} />
      
      {/* Trust Signals */}
      <TrustSignals />
      
      {/* Treatment Categories */}
      <CategoriesGrid locale={locale} />
      
      {/* Virtual Consultation CTA */}
      <VirtualConsultation locale={locale} />
      
      {/* Before/After Gallery */}
      <BeforeAfterGallery locale={locale} />
      
      {/* Featured Treatments */}
      <FeaturedTreatments locale={locale} />
      
      {/* Treatment Bundles - Save More */}
      <TreatmentBundles locale={locale} />
      
      {/* Product Brands */}
      <ProductBrands locale={locale} />
      
      {/* AI Skin Analysis */}
      <SkinAnalysis locale={locale} />
      
      {/* Team Section */}
      <TeamSection locale={locale} />
      
      {/* Testimonials */}
      <Testimonials locale={locale} />
      
      {/* Gift Cards */}
      <GiftCards locale={locale} />
      
      {/* Loyalty Program */}
      <LoyaltyProgram locale={locale} />
      
      {/* Lookbook */}
      <LookbookMarquee />
      
      {/* Interactive Quiz */}
      <AestheticQuiz locale={locale} />
      
      {/* VIP Journey */}
      <VipJourney locale={locale} />
    </>
  );
}
