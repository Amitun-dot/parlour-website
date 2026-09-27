'use client';

import { CalendarHeart, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { whatsappLink, defaultWhatsAppMessage, floatingWhatsAppMessage } from '@/lib/business-config';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(12,45%,58%)] via-[hsl(20,40%,50%)] to-[hsl(20,14%,10%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[hsl(40,55%,70%,0.15)] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[hsl(12,60%,65%,0.1)] blur-3xl" />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center`}
      >
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(40,50%,98%)] leading-tight">
          Ready for Your Next Look?
        </h2>
        <p className="mt-6 text-base sm:text-lg text-[hsl(40,40%,85%)] leading-relaxed max-w-2xl mx-auto">
          Whether it&apos;s your wedding day, a celebration, or simply some
          well-deserved self-care, Puja Makeovers &amp; Spa is here for you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(40,50%,98%)] px-8 py-3.5 text-sm font-semibold text-[hsl(20,14%,10%)] shadow-luxe-lg transition-all duration-300 hover:scale-105"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Appointment
          </a>
          <a
            href={whatsappLink(floatingWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[hsl(40,50%,98%)] px-8 py-3.5 text-sm font-semibold text-[hsl(40,50%,98%)] transition-all duration-300 hover:bg-[hsl(40,50%,98%)] hover:text-[hsl(20,14%,10%)]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
