'use client';

import { MapPin, Phone, Navigation } from 'lucide-react';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

import { businessConfig } from '@/lib/business-config';

export default function Location() {
const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

const directionsUrl = businessConfig.PUJA_GOOGLE_MAPS_URL;

const mapEmbedUrl =
'https://www.google.com/maps?q=20.483800,85.821897&z=17&output=embed';

return ( <section className="relative bg-gradient-to-b from-background to-[hsl(35,30%,93%)] py-20 sm:py-28">
<div
ref={ref}
className={`reveal ${
          isVisible ? 'is-visible' : ''
        } mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
> <div className="mx-auto max-w-2xl text-center"> <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
Visit Us </p>


      <h2 className="font-serif-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        Visit Puja Makeovers &amp; Spa
      </h2>
    </div>

    <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
      {/* Info card */}
      <div className="flex flex-col justify-center rounded-2xl border border-border/50 bg-card p-8 shadow-luxe">
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Address
              </h3>

              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                {businessConfig.address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Phone
              </h3>

              <a
                href={`tel:${businessConfig.phone}`}
                className="mt-1 block text-base text-primary hover:underline"
              >
                {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Get Directions */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-all duration-300 hover:scale-105 hover:shadow-luxe-lg"
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </a>
      </div>

      {/* Map */}
      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border/50 shadow-luxe-lg">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '320px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Puja Makeovers & Spa location"
        />
      </div>
    </div>
  </div>
</section>


);
}
