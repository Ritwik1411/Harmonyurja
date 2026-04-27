import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Vidish Urja's detailed renewable energy, EPC, O&M, storage, and sustainability services.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Comprehensive offerings for modern energy systems"
        description="Structured solutions across renewable development, engineering, operations, storage, EV infrastructure, and sustainable growth businesses."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}
