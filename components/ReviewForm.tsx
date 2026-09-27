'use client';

import { useState } from 'react';

import { Star, Send, CheckCircle2, Loader2 } from 'lucide-react';

import { supabase } from '@/lib/supabase';

import { contactFormServices } from '@/lib/business-config';

export default function ReviewForm({
onSubmitted,
}: {
onSubmitted: () => void;
}) {
const [name, setName] = useState('');
const [service, setService] = useState('');
const [rating, setRating] = useState(0);
const [hoverRating, setHoverRating] = useState(0);
const [description, setDescription] = useState('');
const [submitting, setSubmitting] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setError('');


// Client-side validation
if (!name.trim()) {
  setError('Please enter your name.');
  return;
}

if (!service) {
  setError('Please select a service.');
  return;
}

if (rating < 1 || rating > 5) {
  setError('Please select a rating from 1 to 5 stars.');
  return;
}

if (!description.trim()) {
  setError('Please write a short review.');
  return;
}

setSubmitting(true);

try {
  const { error: insertError } = await supabase.from('reviews').insert({
    customer_name: name.trim(),
    service,
    rating,
    description: description.trim(),
  });

  if (insertError) {
    throw insertError;
  }

  setSuccess(true);

  setName('');
  setService('');
  setRating(0);
  setHoverRating(0);
  setDescription('');

  onSubmitted();

  setTimeout(() => setSuccess(false), 5000);
} catch (err) {
  console.error('Review submission error:', err);
  setError('Something went wrong. Please try again later.');
} finally {
  setSubmitting(false);
}


};

return ( <div className="rounded-2xl bg-card border border-border/50 p-6 sm:p-8 shadow-luxe"> <h3 className="font-serif-display text-2xl font-bold text-foreground">
Leave a Review </h3>


  <p className="mt-2 text-sm text-muted-foreground">
    Share your experience with Puja Makeovers &amp; Spa. Your review will
    appear immediately after submission.
  </p>

  {success && (
    <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />

      <p>
        Thank you! Your review has been submitted and is now visible on
        our website.
      </p>
    </div>
  )}

  {error && (
    <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
      {error}
    </div>
  )}

  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
    {/* Name */}
    <div>
      <label
        htmlFor="review-name"
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        Your Name
      </label>

      <input
        id="review-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        placeholder="Enter your name"
        required
      />
    </div>

    {/* Service */}
    <div>
      <label
        htmlFor="review-service"
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        Service
      </label>

      <select
        id="review-service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        required
      >
        <option value="">Select a service</option>

        {contactFormServices.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>

    {/* Rating */}
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        Rating
      </label>

      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => {
          const starValue = i + 1;

          return (
            <button
              key={i}
              type="button"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-transform hover:scale-125"
              aria-label={`Rate ${starValue} star${
                starValue > 1 ? 's' : ''
              }`}
            >
              <Star
                className={`h-8 w-8 transition-colors ${
                  starValue <= (hoverRating || rating)
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted'
                }`}
              />
            </button>
          );
        })}

        {rating > 0 && (
          <span className="ml-2 text-sm text-muted-foreground">
            {rating} / 5
          </span>
        )}
      </div>
    </div>

    {/* Description */}
    <div>
      <label
        htmlFor="review-desc"
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        Your Review
      </label>

      <textarea
        id="review-desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={1000}
        rows={4}
        className="flex min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
        placeholder="Tell us about your experience..."
        required
      />

      <p className="mt-1 text-xs text-muted-foreground text-right">
        {description.length}/1000
      </p>
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={submitting}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-all duration-300 hover:shadow-luxe-lg hover:scale-[1.02] disabled:opacity-60 disabled:pointer-events-none"
    >
      {submitting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          <Send className="h-4 w-4" />
          Submit Review
        </>
      )}
    </button>
  </form>
</div>


);
}
