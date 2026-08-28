import Hero from '@/components/home/Hero';
import VideoSection from '@/components/home/VideoSection';
import Welcome from '@/components/home/Welcome';
import PricingPreview from '@/components/home/PricingPreview';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaStrip from '@/components/home/CtaStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Welcome />
      <PricingPreview />
      <GalleryTeaser />
      <TestimonialsSection />
      <CtaStrip />
    </>
  );
}
