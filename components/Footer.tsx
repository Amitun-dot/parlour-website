'use client';

import Link from 'next/link';

import {
Phone,
Mail,
Instagram,
MessageCircle,
MapPin,
} from 'lucide-react';

import {
businessConfig,
whatsappLink,
floatingWhatsAppMessage,
} from '@/lib/business-config';

const quickLinks = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Reviews', href: '#reviews' },
{ label: 'Contact', href: '#contact' },
];

const serviceLinks = [
'Bridal Makeup',
'Party Makeup',
'Hair',
'Skin',
'Nails',
];

export default function Footer() {
return ( <footer className="relative bg-[hsl(20,14%,8%)] text-[hsl(40,40%,85%)]"> <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">


      {/* Brand */}
      <div className="lg:col-span-1">
        <div className="mb-4 flex items-center gap-3">

          {/* REAL PUJA MAKEOVERS & SPA LOGO */}
          <img
            src="/images/puja-makeovers-logo.png"
            alt="Puja Makeovers & Spa Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="font-serif-display text-lg font-bold text-[hsl(40,50%,95%)]">
              Puja Makeovers
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-[hsl(40,55%,70%)]">
              &amp; Spa
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[hsl(40,30%,70%)]">
          Premium bridal makeup, party makeup, hair, skin and beauty
          services. Where elegance meets expertise.
        </p>

        {/* Social icons */}
        <div className="mt-6 flex items-center gap-3">

          {/* WhatsApp */}
          <a
            href={whatsappLink(floatingWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-white"
          >
            <MessageCircle className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a
            href={businessConfig.PUJA_INSTAGRAM_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors ${
              businessConfig.PUJA_INSTAGRAM_URL
                ? 'hover:bg-primary hover:text-white'
                : 'cursor-not-allowed opacity-50'
            }`}
            onClick={(e) => {
              if (!businessConfig.PUJA_INSTAGRAM_URL) {
                e.preventDefault();
              }
            }}
          >
            <Instagram className="h-5 w-5" />
          </a>

          {/* Email */}
          <a
            href={
              businessConfig.PUJA_BUSINESS_EMAIL
                ? `mailto:${businessConfig.PUJA_BUSINESS_EMAIL}`
                : '#'
            }
            aria-label="Email"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors ${
              businessConfig.PUJA_BUSINESS_EMAIL
                ? 'hover:bg-primary hover:text-white'
                : 'cursor-not-allowed opacity-50'
            }`}
            onClick={(e) => {
              if (!businessConfig.PUJA_BUSINESS_EMAIL) {
                e.preventDefault();
              }
            }}
          >
            <Mail className="h-5 w-5" />
          </a>

          {/* Phone */}
          <a
            href={`tel:${businessConfig.phone}`}
            aria-label="Phone"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-white"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="mb-4 font-serif-display text-base font-semibold text-[hsl(40,50%,95%)]">
          Quick Links
        </h3>

        <ul className="space-y-2.5">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[hsl(40,30%,70%)] transition-colors hover:text-[hsl(40,55%,70%)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="mb-4 font-serif-display text-base font-semibold text-[hsl(40,50%,95%)]">
          Services
        </h3>

        <ul className="space-y-2.5">
          {serviceLinks.map((service) => (
            <li key={service}>
              <Link
                href="#services"
                className="text-sm text-[hsl(40,30%,70%)] transition-colors hover:text-[hsl(40,55%,70%)]"
              >
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-4 font-serif-display text-base font-semibold text-[hsl(40,50%,95%)]">
          Contact
        </h3>

        <div className="space-y-3">

          {/* Phone */}
          <a
            href={`tel:${businessConfig.phone}`}
            className="flex items-center gap-2 text-sm text-[hsl(40,30%,70%)] transition-colors hover:text-[hsl(40,55%,70%)]"
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            {businessConfig.phone}
          </a>

          {/* Address */}
          <p className="flex items-start gap-2 text-sm text-[hsl(40,30%,70%)]">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
            {businessConfig.address}
          </p>

          {/* Email */}
          {businessConfig.PUJA_BUSINESS_EMAIL ? (
            <a
              href={`mailto:${businessConfig.PUJA_BUSINESS_EMAIL}`}
              className="flex items-center gap-2 text-sm text-[hsl(40,30%,70%)] transition-colors hover:text-[hsl(40,55%,70%)]"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              {businessConfig.PUJA_BUSINESS_EMAIL}
            </a>
          ) : (
            <p className="flex items-center gap-2 text-sm text-[hsl(40,30%,50%)]">
              <Mail className="h-4 w-4 flex-shrink-0" />

              {/* REPLACE: Add real business email in business-config.ts */}
              Email coming soon
            </p>
          )}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">

      <p className="text-xs text-[hsl(40,30%,60%)]">
        &copy; 2026 Puja Makeovers &amp; Spa. All rights reserved.
      </p>

      <p className="text-xs text-[hsl(40,30%,60%)]">
        Designed by Amit
      </p>
    </div>
  </div>
</footer>


);
}
