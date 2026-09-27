'use client';

import { CalendarHeart, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { bridalImage, whatsappLink } from '@/lib/business-config';

const bridalServices = [
  'Bridal Makeup',
  'Ring Ceremony Makeup',
  'Reception Makeup',
  'Bridal Hair Styling',
  'Pre-Bridal Skin Care',
];

export default function BridalSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Dark luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,14%,10%)] via-[hsl(20,14%,8%)] to-[hsl(20,14%,6%)]" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[hsl(12,45%,58%,0.12)] blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[hsl(40,55%,70%,0.08)] blur-3xl" />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* REPLACE BRIDAL IMAGE */}
              <img
                src={bridalImage}
                alt="Bridal makeup by Puja Makeovers & Spa"
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-luxe-lg"
                loading="lazy"
              />
              <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/20 -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(40,55%,70%)] mb-3">
              Featured Bridal
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(40,50%,95%)] leading-tight">
              Your Special Day
              <br />
              Deserves a Special Look
            </h2>
            <p className="mt-6 text-base text-[hsl(40,30%,75%)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your wedding is a once-in-a-lifetime moment. Our bridal specialists
              create timeless, radiant looks that photograph beautifully and last
              from the first ritual to the last dance.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bridalServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3.5 w-3.5 text-[hsl(40,55%,70%)]" />
                  </div>
                  <span className="text-sm font-medium text-[hsl(40,50%,90%)]">{service}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                'Hi Puja Makeovers & Spa, I would like to book a bridal appointment. Please share the available dates and timings.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-all duration-300 hover:shadow-luxe-lg hover:scale-105"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Bridal Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
