import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Harmony Urja for solar IPP & EPC, BESS, power infrastructure, and partnership opportunities across India.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your site, load, or investment thesis"
          description="We respond with a clear next step—technical intake, diligence outline, or leadership conversation—matched to your stage."
        />
        <div className="rounded-2xl border border-border bg-background-elevated/70 p-7 text-sm text-muted">
          <p className="text-base font-semibold text-white">{company.legalName}</p>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a className="text-foreground hover:text-primary" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <a className="text-foreground hover:text-primary" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
