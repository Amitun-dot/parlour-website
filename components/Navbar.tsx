'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Menu, X, CalendarHeart } from 'lucide-react';

import {
businessConfig,
whatsappLink,
defaultWhatsAppMessage,
logoImage,
} from '@/lib/business-config';

const navLinks = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Reviews', href: '#reviews' },
{ label: 'Contact', href: '#contact' },
];

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 40);


window.addEventListener('scroll', onScroll, { passive: true });

return () => window.removeEventListener('scroll', onScroll);


}, []);

useEffect(() => {
if (mobileOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = '';
}


return () => {
  document.body.style.overflow = '';
};


}, [mobileOpen]);

return (
<header
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-luxe py-2' : 'bg-transparent py-4'
      }`}
> <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
{/* Logo */}
<Link
href="#home"
className="group flex min-w-0 items-center gap-2 sm:gap-3"
onClick={() => setMobileOpen(false)}
> <img
         src={logoImage}
         alt="Puja Makeovers & Spa logo"
         width={48}
         height={48}
         className="h-14 w-14 flex-shrink-0 rounded-full object-contain transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
       />


      <div className="min-w-0 whitespace-nowrap leading-none">
        <span className="font-serif-display text-base font-bold text-foreground sm:text-lg md:text-xl">
          Puja Makeovers &amp; Spa
        </span>
      </div>
    </Link>

    {/* Desktop nav */}
    <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="relative text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>

    {/* Book Appointment + Mobile toggle */}
    <div className="flex flex-shrink-0 items-center gap-3">
      <a
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-luxe-lg sm:inline-flex"
      >
        <CalendarHeart className="h-4 w-4" />
        Book Appointment
      </a>

      <button
        className="p-2 text-foreground lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
    </div>
  </nav>

  {/* Mobile menu */}
  <div
    className={`overflow-hidden transition-all duration-500 lg:hidden ${
      mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <div className="glass mx-4 mt-2 rounded-2xl p-6 shadow-luxe-lg">
      <ul className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMobileOpen(false)}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-luxe"
      >
        <CalendarHeart className="h-4 w-4" />
        Book Appointment
      </a>
    </div>
  </div>
</header>


);
}
