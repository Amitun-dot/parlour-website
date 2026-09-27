export const businessConfig = {
name: 'Puja Makeovers & Spa',

// Phone (India) — used for tel: links and WhatsApp
phone: '8327724953',
phoneInternational: '+91 8327724953',
whatsappNumber: '918327724953',

// Address
address:
'Plot No 2F-610, Sector 10, inside of the LaCafe, Judges Colony',

// ------------------------------------------------------------
// EMAIL
// ------------------------------------------------------------
PUJA_BUSINESS_EMAIL: 'pujaganguly7416@gmail.com',


// ------------------------------------------------------------
// INSTAGRAM
// ------------------------------------------------------------
PUJA_INSTAGRAM_URL: 'https://www.instagram.com/puja.ganguly.3975',

// ------------------------------------------------------------
// GOOGLE MAPS
// ------------------------------------------------------------
PUJA_GOOGLE_MAPS_URL: 'https://www.google.com/maps/search/?api=1&query=20.483800,85.821897',


// ------------------------------------------------------------
// CONTACT FORM
// ------------------------------------------------------------
PUJA_EMAILJS_SERVICE_ID: '',
PUJA_EMAILJS_TEMPLATE_ID: '',
PUJA_EMAILJS_PUBLIC_KEY: '',
PUJA_FORMSPREE_URL: '',
};


// ------------------------------------------------------------
// WHATSAPP HELPERS
// ------------------------------------------------------------

export function whatsappLink(message: string): string {
return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const defaultWhatsAppMessage =
'Hi Puja Makeovers & Spa, I would like to book an appointment. Please share the available dates and timings.';

export const floatingWhatsAppMessage =
'Hi Puja Makeovers & Spa, I would like to know more about your services and book an appointment.';

export function bookServiceWhatsApp(serviceName: string): string {
return whatsappLink(
`Hi Puja Makeovers & Spa, I would like to book ${serviceName}. Please share the available dates and timings.`
);
}

// ------------------------------------------------------------
// MAIN WEBSITE IMAGES
// ------------------------------------------------------------

export const logoImage = '/images/puja-makeovers-logo.png';

export const heroImage =
'/images/puja-image.jpeg';

export const aboutImage = '/images/puja-about.jpg';

export const bridalImage =
'https://images.pexels.com/photos/30825617/pexels-photo-30825617.jpeg?auto=compress&cs=tinysrgb&w=1000';

// ------------------------------------------------------------
// SERVICE IMAGES
// ONE DIFFERENT IMAGE FOR EACH SERVICE
// Files are inside: public/services/
// ------------------------------------------------------------

export const serviceImages = {
partyMakeup: '/services/party-makeup.jpg',
ringCeremonyMakeup: '/services/ring-ceremony-makeup.jpg',
bridalMakeup: '/services/bridal-makeup.jpg',
eventMakeup: '/services/event-makeup.jpg',
customMakeupPackages: '/services/custom-makeup-packages.jpg',

haircut: '/services/haircut.jpg',
hairColour: '/services/hair-colour.jpg',
hairSmoothing: '/services/hair-smoothing.jpg',
botoxTreatment: '/services/botox-treatment.jpg',
nanoplastyTreatment: '/services/nanoplasty-treatment.jpg',
keratinTreatment: '/services/keratin-treatment.jpg',
hairSpa: '/services/hair-spa.jpg',
hairStyling: '/services/hair-styling.jpg',

facial: '/services/facial.jpg',
skinCare: '/services/skin-care.jpg',
bridalSkinPreparation: '/services/bridal-skin-preparation.jpg',
preBridalGlowTreatments: '/services/pre-bridal-glow-treatments.jpg',
spaTreatments: '/services/spa-treatments.jpg',
moreBeautyServices: '/services/more-beauty-services.jpg',

manicure: '/services/manicure.jpg',
pedicure: '/services/pedicure.jpg',
};

// ------------------------------------------------------------
// GALLERY IMAGES
// These will be replaced with the client's real gallery photos.
// ------------------------------------------------------------


export const galleryImages = [
  {
    src: '/gallery/IMG_001.jpg',
    alt: 'Puja Makeovers & Spa gallery image 1',
  },
  {
    src: '/gallery/IMG_002.jpg',
    alt: 'Puja Makeovers & Spa gallery image 2',
  },
  {
    src: '/gallery/IMG_003.jpg',
    alt: 'Puja Makeovers & Spa gallery image 3',
  },

{
  src: 'https://images.pexels.com/photos/29370687/pexels-photo-29370687.jpeg?auto=compress&cs=tinysrgb&w=800',
  alt: 'Bridal portrait in traditional attire',
},

  {
    src: '/gallery/IMG_004.jpg',
    alt: 'Puja Makeovers & Spa gallery image 4',
  },
  {
    src: '/gallery/IMG_005.jpg',
    alt: 'Puja Makeovers & Spa gallery image 5',
  },
  {
    src: '/gallery/IMG_006.jpg',
    alt: 'Puja Makeovers & Spa gallery image 6',
  },
  {
    src: '/gallery/IMG_007.jpg',
    alt: 'Puja Makeovers & Spa gallery image 7',
  },
  {
    src: '/gallery/IMG_008.jpg',
    alt: 'Puja Makeovers & Spa gallery image 8',
  },
  {
    src: '/gallery/IMG_009.jpg',
    alt: 'Puja Makeovers & Spa gallery image 9',
  },
  {
    src: '/gallery/IMG_010.jpg',
    alt: 'Puja Makeovers & Spa gallery image 10',
  },
  {
    src: '/gallery/IMG_011.jpg',
    alt: 'Puja Makeovers & Spa gallery image 11',
  },
];



// ------------------------------------------------------------
// SERVICES DATA
// ------------------------------------------------------------

export type ServiceCategory =
| 'Makeup'
| 'Hair'
| 'Skin & Beauty'
| 'Nails';

export interface ServiceItem {
name: string;
category: ServiceCategory;
description: string;
image: string;
}

export const services: ServiceItem[] = [
// ============================================================
// MAKEUP
// ============================================================

{
name: 'Party Makeup',
category: 'Makeup',
description:
'Glamorous party looks tailored to your outfit and occasion.',
image: serviceImages.partyMakeup,
},
{
name: 'Ring Ceremony Makeup',
category: 'Makeup',
description:
'Soft, radiant makeup for your ring ceremony celebrations.',
image: serviceImages.ringCeremonyMakeup,
},
{
name: 'Bridal Makeup',
category: 'Makeup',
description:
'Complete bridal transformation with premium products and techniques.',
image: serviceImages.bridalMakeup,
},
{
name: 'Event Makeup',
category: 'Makeup',
description:
'Camera-ready makeup for special events and celebrations.',
image: serviceImages.eventMakeup,
},
{
name: 'Custom Makeup Packages',
category: 'Makeup',
description:
'Personalised makeup packages for multiple events and family members.',
image: serviceImages.customMakeupPackages,
},

// ============================================================
// HAIR
// ============================================================

{
name: 'Haircut',
category: 'Hair',
description:
'Precision cuts and styling by experienced professionals.',
image: serviceImages.haircut,
},
{
name: 'Hair Colour',
category: 'Hair',
description:
'Global colour, highlights, balayage and fashion colours.',
image: serviceImages.hairColour,
},
{
name: 'Hair Smoothing',
category: 'Hair',
description:
'Frizz-free, silky smooth hair with lasting results.',
image: serviceImages.hairSmoothing,
},
{
name: 'Botox Treatment',
category: 'Hair',
description:
'Deep-conditioning hair botox to restore shine and strength.',
image: serviceImages.botoxTreatment,
},
{
name: 'Nanoplasty Treatment',
category: 'Hair',
description:
'Advanced nanoplasty for perfectly straight, healthy hair.',
image: serviceImages.nanoplastyTreatment,
},
{
name: 'Keratin Treatment',
category: 'Hair',
description:
'Professional keratin treatment for smooth, manageable hair.',
image: serviceImages.keratinTreatment,
},
{
name: 'Hair Spa',
category: 'Hair',
description:
'Relaxing hair spa rituals to nourish and rejuvenate your scalp.',
image: serviceImages.hairSpa,
},
{
name: 'Hair Styling',
category: 'Hair',
description:
'Blow-dry, curls, updos and occasion styling for every event.',
image: serviceImages.hairStyling,
},

// ============================================================
// SKIN & BEAUTY
// ============================================================

{
name: 'Facial',
category: 'Skin & Beauty',
description:
'Customised facials for deep cleansing, hydration and glow.',
image: serviceImages.facial,
},
{
name: 'Skin Care',
category: 'Skin & Beauty',
description:
'Personalised skin care treatments for healthy, radiant skin.',
image: serviceImages.skinCare,
},
{
name: 'Bridal Skin Preparation',
category: 'Skin & Beauty',
description:
'Pre-bridal skin prep sessions for a flawless wedding-day glow.',
image: serviceImages.bridalSkinPreparation,
},
{
name: 'Pre-Bridal Glow Treatments',
category: 'Skin & Beauty',
description:
'Multi-session glow treatments to prepare your skin for the big day.',
image: serviceImages.preBridalGlowTreatments,
},
{
name: 'Spa Treatments',
category: 'Skin & Beauty',
description:
'Relaxing spa therapies to refresh body and mind.',
image: serviceImages.spaTreatments,
},
{
name: 'More Beauty Services',
category: 'Skin & Beauty',
description:
'Additional beauty services tailored to your needs.',
image: serviceImages.moreBeautyServices,
},

// ============================================================
// NAILS
// ============================================================

{
name: 'Manicure',
category: 'Nails',
description:
'Nail care and grooming for healthy, beautiful hands.',
image: serviceImages.manicure,
},
{
name: 'Pedicure',
category: 'Nails',
description:
'Relaxing pedicure treatments for soft, well-groomed feet.',
image: serviceImages.pedicure,
},
];

// ------------------------------------------------------------
// SERVICE CATEGORIES
// ------------------------------------------------------------

export const serviceCategories: (
| 'All'
| ServiceCategory
)[] = ['All', 'Makeup', 'Hair', 'Skin & Beauty', 'Nails'];

// ------------------------------------------------------------
// SERVICES FOR CONTACT FORM DROPDOWN
// ------------------------------------------------------------

export const contactFormServices = [
'Bridal Makeup',
'Party Makeup',
'Ring Ceremony Makeup',
'Event Makeup',
'Custom Makeup Packages',
'Haircut',
'Hair Colour',
'Hair Smoothing',
'Botox Treatment',
'Nanoplasty Treatment',
'Keratin Treatment',
'Hair Spa',
'Hair Styling',
'Facial',
'Skin Care',
'Bridal Skin Preparation',
'Pre-Bridal Glow Treatments',
'Spa Treatments',
'More Beauty Services',
'Manicure',
'Pedicure',
'Other',
];
