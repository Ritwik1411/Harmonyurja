import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Vidish Urja for renewable energy development, EPC services, and infrastructure solutions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build your next clean energy project"
          description="Share your project brief and our team will reach out with a tailored solution."
        />
        <div className="rounded-2xl border border-border bg-background-soft/70 p-6 text-sm text-muted">
          <p className="mb-2 text-base font-semibold text-white">
            Vidish Urja Private Limited
          </p>
          <p>Email: info@vidishurja.com</p>
          <p>Location: India</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
