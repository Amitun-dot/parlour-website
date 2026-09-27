'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { aboutImage } from '@/lib/business-config';

const features = [
  'Bridal beauty',
  'Party makeup',
  'Hair care',
  'Skin care',
  'Nail care',
  'Hair treatments',
  'Personalized beauty services',
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* REPLACE WITH PUJA MAKEOVERS & SPA ABOUT IMAGE */}
              <img
                src={aboutImage}
                alt="Puja Makeovers & Spa salon interior"
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-luxe-lg"
                loading="lazy"
              />
              {/* 3D depth frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/15 -z-10 translate-x-4 translate-y-4" />
              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl px-6 py-4 shadow-luxe-lg">
                <p className="font-serif-display text-3xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              About Us
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              About Puja Makeovers &amp; Spa
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              At Puja Makeovers &amp; Spa, we believe everyone deserves to look and
              feel their best. Whether it&apos;s your wedding day, a celebration, a
              ceremony, or simply everyday beauty care, our experienced team is
              dedicated to bringing out your natural radiance.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              From bridal transformations to relaxing spa treatments, every service
              is personalised to you. We use premium products and proven techniques to
              deliver results you&apos;ll love.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-luxe"
            >
              Discover Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
