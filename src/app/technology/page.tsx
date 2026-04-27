import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

const technologyItems = [
  {
    title: "Solar PV Systems",
    description:
      "High-efficiency utility and distributed PV architectures engineered for optimal land use and output reliability.",
  },
  {
    title: "Bifacial Modules",
    description:
      "Advanced bifacial N-type module integration for improved energy capture through front and rear irradiance utilization.",
  },
  {
    title: "SCADA Monitoring",
    description:
      "Real-time performance and fault analytics through SCADA-backed monitoring, reporting, and remote diagnostics.",
  },
  {
    title: "Grid Integration",
    description:
      "Grid-compliant interconnection strategies with protection systems and control logic designed for power quality stability.",
  },
  {
    title: "Energy Storage",
    description:
      "Battery energy storage system design for peak management, backup support, and renewable output firming.",
  },
];

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Learn about the technology stack behind Vidish Urja's high-performance renewable energy projects.",
};

export default function TechnologyPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Technology"
        title="Engineering choices built for long-term energy performance"
        description="Our technology approach blends proven solar architecture with digital monitoring and storage-ready infrastructure."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {technologyItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-background-soft/70 p-8"
          >
            <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
