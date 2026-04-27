import { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { projectHighlights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Overview of Vidish Urja's renewable energy and infrastructure project portfolio.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Project Showcase"
        title="Renewable Energy Project Portfolio"
        description="A high-level view of current and upcoming project engagements. Detailed project disclosures are shared based on client and regulatory requirements."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-2xl border border-border">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80"
            alt="Solar panels across open land"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl border border-border">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80"
            alt="Renewable infrastructure and grid lines"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <section className="rounded-2xl border border-border bg-background-soft/70 p-8">
        <h2 className="text-2xl font-semibold text-white">Portfolio Highlights</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projectHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-background/60 p-4"
            >
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-border bg-background-soft/70">
        <h2 className="border-b border-border px-6 py-4 text-2xl font-semibold text-white">
          Capability Snapshot
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <tbody>
              {projectHighlights.map((item) => (
                <tr key={item.label} className="border-b border-border/70">
                  <th className="px-6 py-4 font-medium text-muted">{item.label}</th>
                  <td className="px-6 py-4 text-white">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
