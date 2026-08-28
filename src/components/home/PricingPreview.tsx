'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VENUE_PACKAGES } from '@/lib/pricing';

export default function PricingPreview() {
  return (
    <section className="py-24 bg-[#0e0c08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C5A572] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            All-Inclusive Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl"
          >
            Venue Packages
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VENUE_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative flex flex-col border p-7 ${
                pkg.highlighted
                  ? 'border-[#C5A572] bg-[#161410]'
                  : 'border-white/10 bg-[#161410]'
              }`}
            >
              {pkg.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A572] px-4 py-1 text-[10px] tracking-[0.2em] uppercase text-black">
                  Most Popular
                </span>
              ) : null}
              <p className="text-[#C5A572] text-[10px] tracking-[0.3em] uppercase">
                {pkg.capacity}
              </p>
              <p className="font-serif text-2xl text-white mt-2">{pkg.name}</p>
              <p className="font-serif text-4xl text-white mt-3">{pkg.price}</p>
              <p className="text-white/45 text-xs tracking-[0.12em] uppercase mt-1">
                {pkg.priceNote}
              </p>
              <p className="text-white/55 text-sm leading-relaxed mt-4 mb-6">
                {pkg.description}
              </p>
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {pkg.rates.map((rate) => (
                  <li
                    key={rate.label}
                    className="flex items-baseline justify-between gap-3 text-sm text-white/65"
                  >
                    <span>
                      {rate.label}
                      {rate.note ? (
                        <span className="block text-[11px] text-white/40">
                          {rate.note}
                        </span>
                      ) : null}
                    </span>
                    <span className="text-white">{rate.price}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/pricing#${pkg.id}`}
                className="inline-flex items-center gap-2 text-[#C5A572] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
              >
                View Details <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex px-8 py-3.5 border border-[#C5A572] text-[#C5A572] text-xs tracking-[0.2em] uppercase hover:bg-[#C5A572] hover:text-black transition-colors duration-200"
          >
            See Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
