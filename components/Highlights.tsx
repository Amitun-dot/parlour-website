'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Gem, Brush, Scissors, Flower2, Heart } from 'lucide-react';

const highlights = [
  { icon: Gem, title: 'Bridal Makeup', desc: 'Flawless looks for your special day' },
  { icon: Brush, title: 'Party Makeup', desc: 'Glamorous styles for every celebration' },
  { icon: Scissors, title: 'Hair & Styling', desc: 'Cuts, colour, smoothing and more' },
  { icon: Flower2, title: 'Skin & Beauty', desc: 'Facials, spa and glow treatments' },
  { icon: Heart, title: 'Premium Care', desc: 'Personalised service with attention to detail' },
];

export default function Highlights() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-16 sm:py-20">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-luxe transition-all duration-500 hover:shadow-luxe-lg hover:-translate-y-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                <item.icon className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-serif-display text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
