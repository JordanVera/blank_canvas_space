import type { Metadata } from 'next';
import Image from 'next/image';
import PricingContent from '@/components/pricing/PricingContent';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Pricing | ${COMPANY.name}`,
  description:
    "King's Court from $2,000, Bethel Ballroom from $5,000, or both spaces from $6,000. Day-of-week venue pricing, décor packages, and video tours in Houston, TX.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-06.jpg"
          alt="The Blank Canvas Space venue packages"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#C5A572] text-[10px] tracking-[0.4em] uppercase mb-4">
            All-Inclusive Packages
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Pricing</h1>
        </div>
      </section>

      <PricingContent />
    </>
  );
}
