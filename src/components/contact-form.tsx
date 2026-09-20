"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-[0_12px_40px_-24px_rgba(6,25,58,0.14)]">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-border bg-background-soft px-4 py-3 text-foreground outline-none ring-primary/30 placeholder:text-muted focus:ring-2"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-background-soft px-4 py-3 text-foreground outline-none ring-primary/30 placeholder:text-muted focus:ring-2"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-border bg-background-soft px-4 py-3 text-foreground outline-none ring-primary/30 placeholder:text-muted focus:ring-2"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-border bg-background-soft px-4 py-3 text-foreground outline-none ring-primary/30 placeholder:text-muted focus:ring-2"
            placeholder="Tell us about your project or requirement."
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
        >
          Send Message
        </button>
      </form>
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-primary">
          Thank you. We&apos;ll get back to you shortly.
        </p>
      ) : null}
    </div>
  );
}
