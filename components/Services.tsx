'use client';

import { useState } from 'react';
import { CalendarHeart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  services,
  serviceCategories,
  bookServiceWhatsApp,
  type ServiceItem,
} from '@/lib/business-config';

const categoryIcons: Record<string, string> = {
  All: '✦',
  Makeup: '💄',
  Hair: '✂',
  'Skin & Beauty': '🌸',
  Nails: '💅',
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<'All' | ServiceItem['category']>('All');

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-gradient-to-b from-background to-[hsl(35,30%,93%)]">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Our Services
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Premium Beauty Services
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From bridal makeup to spa treatments, explore our full range of services
            crafted to make you look and feel your best.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-luxe'
                  : 'bg-card text-foreground/70 border border-border hover:border-primary/30 hover:text-primary'
              }`}
            >
              <span className="mr-1.5">{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Service grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, i) => (
            <div
              key={service.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-luxe transition-all duration-500 hover:shadow-luxe-lg hover:-translate-y-1"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <p className="mt-3 text-sm font-medium text-primary">
                  Contact for pricing
                </p>
                <a
                  href={bookServiceWhatsApp(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <CalendarHeart className="h-4 w-4" />
                  Book Service
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More services note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Don&apos;t see what you&apos;re looking for? We offer more services —{' '}
          <a
            href="#contact"
            className="font-semibold text-primary hover:underline"
          >
            contact us
          </a>{' '}
          to find out more.
        </p>
      </div>
    </section>
  );
}
