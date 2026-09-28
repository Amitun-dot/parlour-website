
import './globals.css';

import type { Metadata } from 'next';

import { Inter, Playfair_Display } from 'next/font/google';

import { businessConfig } from '@/lib/business-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pujamakeovers.vercel.app'),

  title:
    'Puja Makeovers & Spa | Bridal Makeup, Hair, Skin & Beauty Services',

  description:
    'Premium bridal makeup, party makeup, hair styling, skin care and beauty services at Puja Makeovers & Spa, Sector 10, Judges Colony. Book your appointment today.',

  keywords: [
    'bridal makeup',
    'party makeup',
    'hair services',
    'skin care',
    'beauty salon',
    'spa',
    'Puja Makeovers & Spa',
    'Sector 10',
    'Judges Colony',
    'makeup artist',
  ],

  verification: {
    google: 'cxqRCelX5B9T_IIwqWeSM6xdfMQLM5zb_bL1VzFKK7I',
  },

  openGraph: {
    title:
      'Puja Makeovers & Spa | Bridal Makeup, Hair, Skin & Beauty Services',

    description:
      'Premium bridal makeup, party makeup, hair styling, skin care and beauty services at Puja Makeovers & Spa, Sector 10, Judges Colony.',

    type: 'website',

    images: [
      {
        url: '/images/puja-makeovers-logo.png',
        alt: 'Puja Makeovers & Spa',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Puja Makeovers & Spa | Bridal Makeup, Hair, Skin & Beauty Services',

    description:
      'Premium bridal makeup, party makeup, hair styling, skin care and beauty services at Puja Makeovers & Spa.',

    images: ['/images/puja-makeovers-logo.png'],
  },

  /* Browser favicon and Apple touch icon */
  icons: {
    icon: [
      {
        url: '/images/puja-makeovers-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/images/puja-makeovers-logo.png',
  },

  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',

    name: businessConfig.name,

    telephone: businessConfig.phoneInternational,

    address: {
      '@type': 'PostalAddress',

      streetAddress:
        'Plot No 2F-610, Sector 10, inside of the LaCafe, Judges Colony',

      addressLocality: 'Sector 10',

      addressCountry: 'IN',
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}

