'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, MessageSquare } from 'lucide-react';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { supabase, type Review } from '@/lib/supabase';

import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

export default function Reviews() {
const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

const [reviews, setReviews] = useState<Review[]>([]);
const [loading, setLoading] = useState(true);
const [showForm, setShowForm] = useState(false);

const fetchReviews = useCallback(async () => {
setLoading(true);


try {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('rating', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  setReviews((data as Review[]) || []);
} catch (error) {
  console.error('Failed to load reviews:', error);
  setReviews([]);
} finally {
  setLoading(false);
}


}, []);

useEffect(() => {
fetchReviews();
}, [fetchReviews]);

const handleReviewSubmitted = async () => {
await fetchReviews();
setShowForm(false);
};

const avgRating =
reviews.length > 0
? reviews.reduce((sum, review) => sum + review.rating, 0) /
reviews.length
: 0;

return ( <section
   id="reviews"
   className="relative bg-gradient-to-b from-[hsl(35,30%,93%)] to-background py-20 sm:py-28"
 >
<div
ref={ref}
className={`reveal ${
          isVisible ? 'is-visible' : ''
        } mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
>
{/* Header */} <div className="mx-auto max-w-2xl text-center"> <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
Testimonials </p>


      <h2 className="font-serif-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        What Our Clients Say
      </h2>

      {/* Aggregate Rating */}
      {reviews.length > 0 && (
        <div className="mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border border-border/50 bg-card px-8 py-5 shadow-luxe">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${
                  i < Math.round(avgRating)
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>

          <p className="font-serif-display text-2xl font-bold text-foreground">
            {avgRating.toFixed(1)}
          </p>

          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Average Rating · {reviews.length}{' '}
            {reviews.length === 1 ? 'Review' : 'Reviews'}
          </p>
        </div>
      )}
    </div>

    {/* Reviews */}
    {loading ? (
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-56 animate-pulse rounded-2xl border border-border/50 bg-card"
          />
        ))}
      </div>
    ) : reviews.length === 0 ? (
      <p className="mt-12 text-center text-muted-foreground">
        No reviews yet. Be the first to share your experience!
      </p>
    ) : (
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    )}

    {/* Write Review Button */}
    <div className="mt-10 text-center">
      <button
        type="button"
        onClick={() => setShowForm((previous) => !previous)}
        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-luxe"
      >
        <MessageSquare className="h-4 w-4" />
        {showForm ? 'Close Form' : 'Write a Review'}
      </button>
    </div>

    {/* Review Form */}
    {showForm && (
      <div className="mx-auto mt-8 max-w-xl">
        <ReviewForm onSubmitted={handleReviewSubmitted} />
      </div>
    )}
  </div>
</section>


);
}
