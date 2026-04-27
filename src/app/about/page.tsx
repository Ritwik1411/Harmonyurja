import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vidish Urja's mission, vision, and clean energy development philosophy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="About Us"
        title="A clean energy and infrastructure company built for execution"
        description="Vidish Urja is a renewable energy and infrastructure development company focused on solar power projects, execution, ownership, and operation."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-background-soft/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Deliver sustainable, reliable, and cost-effective clean energy.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-background-soft/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Vision</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Contribute meaningfully to India&apos;s energy transition.
          </p>
        </article>
      </section>
    </div>
  );
}
