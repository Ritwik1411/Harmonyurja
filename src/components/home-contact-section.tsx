import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { company } from "@/lib/site-data";

export function HomeContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background-soft"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Start a conversation—EPC, IPP, or partnership
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Share your land parcel, offtake intent, or financing stage. Our team
            responds with a structured next step—technical review, site diligence,
            or meeting with leadership.
          </p>

          <ul className="mt-10 space-y-5 text-sm text-muted">
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-navy/15 bg-navy/5 text-navy">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                  Address
                </span>
                <span className="text-base text-foreground">{company.address}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                  Phone
                </span>
                <a
                  className="text-base text-foreground hover:text-primary"
                  href={`tel:+91${company.phoneRaw}`}
                >
                  {company.phone}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-navy/15 bg-navy/5 text-navy">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                  Email
                </span>
                <a
                  className="text-base text-foreground hover:text-primary"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <ContactForm />
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
}
