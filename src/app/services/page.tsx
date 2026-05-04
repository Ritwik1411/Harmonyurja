import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar IPP & EPC, BESS, power infrastructure, green hydrogen pathways, hybrid solar, and performance operations from Harmony Urja.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Capability depth across generation, flexibility, and infrastructure"
        description="Four strategic pillars anchor our offering—extended services cover rooftops, hybrids, operations analytics, and structured financing support."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}
