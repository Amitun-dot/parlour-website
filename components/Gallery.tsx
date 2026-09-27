'use client';

import { useState, useCallback, useEffect } from 'react';

import { X, ZoomIn } from 'lucide-react';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

import { galleryImages } from '@/lib/business-config';

export default function Gallery() {
const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

const closeLightbox = useCallback(() => setLightboxIndex(null), []);

useEffect(() => {
if (lightboxIndex === null) return;


const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }

  if (e.key === 'ArrowRight') {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryImages.length
    );
  }

  if (e.key === 'ArrowLeft') {
    setLightboxIndex((i) =>
      i === null
        ? null
        : (i - 1 + galleryImages.length) % galleryImages.length
    );
  }
};

document.addEventListener('keydown', onKey);
document.body.style.overflow = 'hidden';

return () => {
  document.removeEventListener('keydown', onKey);
  document.body.style.overflow = '';
};


}, [lightboxIndex, closeLightbox]);

return ( <section id="gallery" className="relative py-20 sm:py-28">
<div
ref={ref}
className={`reveal ${
          isVisible ? 'is-visible' : ''
        } mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
>
{/* Header */} <div className="text-center max-w-2xl mx-auto"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
Gallery </p>


      <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
        Our Work
      </h2>

      <p className="mt-4 text-base text-muted-foreground">
        A glimpse into the transformations and moments created at Puja
        Makeovers &amp; Spa.
      </p>
    </div>

    {/* Masonry Gallery */}
    <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
      {galleryImages.map((image, i) => (
        <button
          key={`${image.src}-${i}`}
          onClick={() => setLightboxIndex(i)}
          className="group relative block w-full overflow-hidden rounded-2xl shadow-luxe transition-all duration-500 hover:shadow-luxe-lg"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-end opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <ZoomIn className="h-4 w-4 text-white" />
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>

  {/* Lightbox */}
  {lightboxIndex !== null && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
      onClick={closeLightbox}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        onClick={closeLightbox}
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Previous */}
      {galleryImages.length > 1 && (
        <button
          className="absolute left-4 sm:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();

            setLightboxIndex((i) =>
              i === null
                ? null
                : (i - 1 + galleryImages.length) %
                  galleryImages.length
            );
          }}
          aria-label="Previous image"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Main Image */}
      <img
        src={galleryImages[lightboxIndex].src}
        alt={galleryImages[lightboxIndex].alt}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {galleryImages.length > 1 && (
        <button
          className="absolute right-4 sm:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();

            setLightboxIndex((i) =>
              i === null
                ? null
                : (i + 1) % galleryImages.length
            );
          }}
          aria-label="Next image"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Counter */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/80">
        {lightboxIndex + 1} / {galleryImages.length}
      </p>
    </div>
  )}
</section>


);
}
