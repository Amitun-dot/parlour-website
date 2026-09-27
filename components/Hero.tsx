
'use client';

import { CalendarHeart, Sparkles, ArrowRight } from 'lucide-react';

import {
  whatsappLink,
  defaultWhatsAppMessage,
  heroImage,
} from '@/lib/business-config';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex items-center overflow-hidden pt-20 pb-8 lg:pt-20 lg:pb-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,44%,96%)] via-[hsl(40,50%,98%)] to-[hsl(35,30%,92%)]" />

      {/* Decorative floating elements */}
      <div className="absolute top-32 right-10 w-64 h-64 rounded-full bg-[hsl(12,45%,58%,0.08)] blur-3xl animate-float-slow" />

      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[hsl(40,55%,70%,0.1)] blur-3xl animate-float-medium" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary mb-6 animate-[fadeIn_0.8s_ease-out]">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Bridal &amp; Beauty Studio
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground text-balance">
            Beauty. Elegance.
            <br />
            <span className="text-gradient-gold">Confidence.</span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Premium bridal, party, skin, hair and beauty services designed to
            make every occasion unforgettable. Where artistry meets care, and
            every look is crafted to perfection.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-all duration-300 hover:shadow-luxe-lg hover:scale-105"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card/50 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary/5 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
            <div>
              <p className="font-serif-display text-3xl font-bold text-primary">
                100+
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Happy Brides
              </p>
            </div>

            <div className="h-12 w-px bg-border" />

            <div>
              <p className="font-serif-display text-3xl font-bold text-primary">
                25+
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Services
              </p>
            </div>

            <div className="h-12 w-px bg-border" />

            <div>
              <p className="font-serif-display text-3xl font-bold text-primary">
                5★
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Rated Care
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none lg:max-h-[78vh]">
            {/* Hero image */}
            <img
              src={heroImage}
              alt="Premium bridal makeup by Puja Makeovers & Spa"
              className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-luxe-lg"
              loading="eager"
            />

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block glass rounded-2xl p-4 shadow-luxe-lg max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Bridal Specialist
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Premium care
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/15 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

