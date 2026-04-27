import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Vidish Urja's mission for sustainable, reliable, and cost-effective clean energy development.",
};

export default function MissionPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Our Mission"
        title="Deliver sustainable, reliable, and cost-effective clean energy"
        description="We build dependable renewable infrastructure that balances technical quality, operational performance, and long-term economic value for communities, businesses, and institutions."
      />
      <section className="mt-10 rounded-2xl border border-border bg-background-soft/70 p-8">
        <p className="leading-relaxed text-muted">
          Our mission is to execute projects responsibly, maintain high standards
          of engineering and safety, and create future-ready energy ecosystems
          that support India&apos;s growth.
        </p>
      </section>
    </div>
  );
}
