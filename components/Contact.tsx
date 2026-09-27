'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  businessConfig,
  contactFormServices,
} from '@/lib/business-config';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.mobile.trim() || !form.message.trim()) {
      setError('Please fill in your name, mobile number, and message.');
      return;
    }

    setSubmitting(true);

    try {
      // ------------------------------------------------------------
      // CONTACT FORM EMAIL DELIVERY
      // ------------------------------------------------------------
      // The contact form needs an email service to actually send
      // messages. Choose ONE of the following:
      //
      // === Option A: EmailJS ===
      // 1. npm install @emailjs/browser
      // 2. Set these in lib/business-config.ts:
      //    PUJA_EMAILJS_SERVICE_ID, PUJA_EMAILJS_TEMPLATE_ID,
      //    PUJA_EMAILJS_PUBLIC_KEY
      // 3. Replace the fetch logic below with emailjs.send(...)
      //
      // === Option B: Formspree ===
      // 1. Set PUJA_FORMSPREE_URL in lib/business-config.ts
      // 2. The code below already posts to Formspree if configured.
      //
      // === Option C: WhatsApp fallback (no email service) ===
      // If no email service is configured, the form opens WhatsApp
      // with the message pre-filled — so the customer still reaches
      // the business instantly.
      // ------------------------------------------------------------

      const formspreeUrl = businessConfig.PUJA_FORMSPREE_URL;

      if (formspreeUrl) {
        const res = await fetch(formspreeUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Form submission failed');
      } else {
        // Fallback: open WhatsApp with the message
        const waMessage = `Hi Puja Makeovers & Spa, my name is ${form.name}.\nMobile: ${form.mobile}\nEmail: ${form.email || 'N/A'}\nService: ${form.service || 'N/A'}\nMessage: ${form.message}`;
        const waUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }

      setSuccess(true);
      setForm({ name: '', mobile: '', email: '', service: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('Something went wrong. Please call or WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Have a question or want to book an appointment? Send us a message and
            we&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-card border border-border/50 p-6 shadow-luxe">
              <h3 className="font-serif-display text-xl font-bold text-foreground mb-4">
                {businessConfig.name}
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {businessConfig.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${businessConfig.phone}`}
                      className="text-sm text-primary hover:underline mt-0.5 block"
                    >
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    {businessConfig.PUJA_BUSINESS_EMAIL ? (
                      <a
                        href={`mailto:${businessConfig.PUJA_BUSINESS_EMAIL}`}
                        className="text-sm text-primary hover:underline mt-0.5 block"
                      >
                        {businessConfig.PUJA_BUSINESS_EMAIL}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {/* REPLACE: Add email in lib/business-config.ts → PUJA_BUSINESS_EMAIL */}
                        Email coming soon
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl bg-card border border-border/50 p-6 sm:p-8 shadow-luxe">
            <h3 className="font-serif-display text-xl font-bold text-foreground mb-4">
              Send a Message
            </h3>

            {success && (
              <div className="mb-4 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <p>Thank you! Your message has been sent.</p>
              </div>
            )}

            {error && (
              <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-mobile" className="block text-sm font-medium text-foreground mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    id="contact-mobile"
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your mobile number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-foreground mb-1.5">
                    Select Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    {contactFormServices.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="flex min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-all duration-300 hover:shadow-luxe-lg hover:scale-[1.02] disabled:opacity-60 disabled:pointer-events-none"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
