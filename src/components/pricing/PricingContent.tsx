import Image from 'next/image';
import Link from 'next/link';
import { Check, Play } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  BOOKING_PROCESS,
  DECOR_PACKAGE,
  FREE_ADD_ONS,
  HOLIDAY_PREMIUM,
  INCLUDED_IN_RENTAL,
  PRICING_INTRO,
  PRICING_POLICIES,
  VENUE_PACKAGES,
} from '@/lib/pricing';

export default function PricingContent() {
  return (
    <>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            {PRICING_INTRO.lead} {PRICING_INTRO.kings} {PRICING_INTRO.bethel}
          </p>
          <p className="mt-6 font-serif text-2xl text-foreground sm:text-3xl">
            {PRICING_INTRO.close}
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {VENUE_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              id={pkg.id}
              className={`flex scroll-mt-28 flex-col border p-6 sm:p-8 ${
                pkg.highlighted
                  ? 'border-[#C5A572] bg-[#F7F3ED] shadow-lg shadow-[#C5A572]/10'
                  : 'border-border bg-card'
              }`}
            >
              {pkg.highlighted ? (
                <span className="mb-4 self-start bg-[#C5A572] px-3 py-1 text-[10px] tracking-[0.2em] text-black uppercase">
                  Most Popular
                </span>
              ) : null}

              <a
                href={pkg.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mb-6 block aspect-video overflow-hidden rounded-sm border border-border"
              >
                <Image
                  src={pkg.videoPoster}
                  alt={`${pkg.name} video tour`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/40">
                    <Play size={16} className="ml-0.5 fill-white" />
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase">
                    Watch Video Tour
                  </span>
                </span>
              </a>

              <p className="text-[10px] tracking-[0.3em] text-[#C5A572] uppercase">
                {pkg.capacity}
              </p>
              <h2 className="font-serif mt-2 text-3xl text-foreground">{pkg.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {pkg.description}
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                  Pricing
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {pkg.rates.map((rate) => (
                    <li
                      key={rate.label}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-foreground/65">
                        {rate.label}
                        {rate.note ? (
                          <span className="block text-xs text-foreground/40">
                            {rate.note}
                          </span>
                        ) : null}
                      </span>
                      <span className="font-serif text-lg text-foreground">
                        {rate.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                  Duration
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {pkg.duration.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex-1">
                <p className="text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                  Perfect For
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {pkg.perfectFor.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex justify-center bg-[#C5A572] px-6 py-3 text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#D4B888]"
              >
                Inquire About {pkg.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-[10px] tracking-[0.35em] text-[#C5A572] uppercase">
            What’s Included
          </p>
          <h2 className="font-serif mb-12 text-center text-3xl text-foreground sm:text-4xl">
            Included in Your Rental
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {INCLUDED_IN_RENTAL.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-foreground/70">
                <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0e0c08] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-[10px] tracking-[0.35em] text-[#C5A572] uppercase">
            Complimentary
          </p>
          <h2 className="font-serif mb-12 text-center text-3xl text-white sm:text-4xl">
            Free Add-Ons
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FREE_ADD_ONS.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-white/70">
                <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-[10px] tracking-[0.35em] text-[#C5A572] uppercase">
            Optional Styling
          </p>
          <h2 className="font-serif mb-4 text-center text-3xl text-foreground sm:text-4xl">
            Signature Décor Package
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-foreground/65">
            {DECOR_PACKAGE.description}
          </p>
          <div className="border border-border bg-card p-8 sm:p-10">
            <p className="font-serif text-5xl text-[#C5A572]">{DECOR_PACKAGE.price}</p>
            <p className="mt-1 text-xs tracking-[0.2em] text-foreground/50 uppercase">
              {DECOR_PACKAGE.unit}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DECOR_PACKAGE.includes.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-foreground/70">
                  <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-border pt-6 text-sm text-foreground/55">
              {DECOR_PACKAGE.example} Décor is separate from the venue rental.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-[10px] tracking-[0.35em] text-[#C5A572] uppercase">
            Booking
          </p>
          <h2 className="font-serif mb-12 text-center text-3xl text-foreground sm:text-4xl">
            Our Process
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {BOOKING_PROCESS.map((step, index) => (
              <div key={step.title} className="border border-border p-6">
                <p className="font-serif text-3xl text-[#C5A572]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif mt-4 text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-serif mb-5 text-2xl text-foreground">
                Payment & rescheduling
              </h3>
              <ul className="flex flex-col gap-3">
                {PRICING_POLICIES.map((note) => (
                  <li key={note} className="flex gap-2.5 text-sm text-foreground/65">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif mb-5 text-2xl text-foreground">
                {HOLIDAY_PREMIUM.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/65">
                {HOLIDAY_PREMIUM.intro}
              </p>
              <ul className="mb-4 flex flex-col gap-2">
                {HOLIDAY_PREMIUM.dates.map((date) => (
                  <li key={date} className="flex gap-2.5 text-sm text-foreground/70">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#C5A572]" />
                    {date}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-foreground/55">
                {HOLIDAY_PREMIUM.close}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
