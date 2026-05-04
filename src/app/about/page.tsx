import { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Harmony Urja is a renewable energy company delivering utility-scale solar, IPP & EPC execution, and enabling infrastructure for India's energy transition.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="About Us"
        title="Disciplined execution for India's clean power stack"
        description={`${company.legalName} partners with investors, industry, and communities to deliver measurable renewable outcomes—from structured development to reliable operations.`}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <ScrollReveal className="rounded-2xl border border-border bg-background-elevated/70 p-8 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-white">Who we are</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Harmony Urja is a renewable energy company focused on development,
            EPC, and IPP solar—developing, building, owning, and operating solar
            power plants across India. Our teams blend structured engineering with
            stakeholder alignment so projects move from concept to commissioning
            with clarity on timelines, performance, and compliance.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We serve utility-scale programs, rooftop and hybrid configurations,
            and emerging opportunities in storage and green hydrogen—always with a
            bias toward bankable design and transparent reporting.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06} className="rounded-2xl border border-border bg-gradient-to-b from-background-soft/90 to-background/80 p-8">
          <h2 className="text-xl font-semibold text-white">Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Accelerate India&apos;s energy transition with dependable solar and
            complementary clean infrastructure—anchored in safety, performance
            ratio, and investor-grade discipline.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-white">Focus</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Utility-scale solar</li>
            <li>Rooftop & hybrid solar</li>
            <li>BESS enablement</li>
            <li>Power infrastructure delivery</li>
          </ul>
        </ScrollReveal>
      </div>
    </div>
  );
}
