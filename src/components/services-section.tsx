import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceCard } from "@/components/service-card";
import { coreServices } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      aria-labelledby="services-heading"
    >
      <ScrollReveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Services
        </p>
        <h2
          id="services-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          Integrated platforms from electrons to grid
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Strategic capabilities spanning solar generation, flexible storage,
          enabling infrastructure, and emerging hydrogen pathways—each engineered
          for India&apos;s evolving power markets.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {coreServices.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.06}>
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
