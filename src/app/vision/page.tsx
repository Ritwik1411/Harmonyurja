import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Vidish Urja's vision to support India's energy transition through renewable innovation and execution excellence.",
};

export default function VisionPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Our Vision"
        title="Contribute to India&apos;s energy transition at scale"
        description="We envision a cleaner and more resilient energy future where innovation, infrastructure, and sustainability work together to power national progress."
      />
      <section className="mt-10 rounded-2xl border border-border bg-background-soft/70 p-8">
        <p className="leading-relaxed text-muted">
          Our vision is to become a trusted long-term partner in clean energy by
          delivering high-impact projects, enabling new technologies, and
          supporting responsible development across regions.
        </p>
      </section>
    </div>
  );
}
