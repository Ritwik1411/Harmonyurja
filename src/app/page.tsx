import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsSection } from "@/components/stats-section";
import { services } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero with primary positioning and CTAs */}
      <HeroSection />

      {/* About preview for quick company context */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Building resilient clean energy infrastructure for India"
          description="Vidish Urja develops, executes, owns, and operates renewable energy and infrastructure assets with a clear focus on reliability, performance, and long-term value creation."
        />
      </section>

      {/* Services overview cards on homepage */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Integrated capabilities across the energy value chain"
          description="From project development and EPC to O&M, storage, and sustainability-linked services."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* Company performance statistics */}
      <StatsSection />

      {/* Featured project section */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          eyebrow="Featured Project"
          title="Execution-focused clean energy portfolio"
          description="A curated view of our ongoing and upcoming renewable and infrastructure initiatives across India."
        />
        <div className="mt-10">
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
