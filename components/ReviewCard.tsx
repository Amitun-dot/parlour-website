'use client';

import { Star } from 'lucide-react';
import type { Review } from '@/lib/supabase';

export default function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.created_at).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="group relative rounded-2xl bg-card border border-border/50 p-6 shadow-luxe transition-all duration-500 hover:shadow-luxe-lg hover:-translate-y-1">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < review.rating
                ? 'fill-primary text-primary'
                : 'fill-muted text-muted'
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
        &ldquo;{review.description}&rdquo;
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
        <div>
          <p className="font-serif-display text-base font-semibold text-foreground">
            {review.customer_name}
          </p>
          <p className="text-xs text-primary font-medium">{review.service}</p>
        </div>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
}
