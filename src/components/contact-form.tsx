"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-border bg-background-soft/70 p-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none ring-primary/40 placeholder:text-muted focus:ring-2"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none ring-primary/40 placeholder:text-muted focus:ring-2"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none ring-primary/40 placeholder:text-muted focus:ring-2"
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
        <p className="mt-4 text-sm text-primary">
          Thank you. We&apos;ll get back to you shortly.
        </p>
      ) : null}
    </div>
  );
}
