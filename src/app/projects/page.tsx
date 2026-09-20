import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { projectHighlights, sitamarhiProject } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Harmony Urja's Sitamarhi 5 MW solar reference plant and portfolio approach to utility-scale renewable delivery.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-14 px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="Where engineering meets measurable yield"
        description="Representative disclosures below illustrate execution discipline on our Sitamarhi asset—additional opportunities are shared under NDA and regulatory context."
      />

      <section className="overflow-hidden rounded-3xl border border-border bg-background-soft/50">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=85"
              alt="Wide view of solar panels in the landscape"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/35 to-transparent lg:bg-gradient-to-t lg:from-background lg:via-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Featured project
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              {sitamarhiProject.name}
            </h2>
            <p className="mt-4 text-muted">
              A utility-scale solar installation in Bihar demonstrating structured
              development, quality-led EPC delivery, and robust operating metrics.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">AC capacity</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.capacityAc}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">DC capacity</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.capacityDc}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">Annual generation</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.annualGen}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">Location</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.location}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">CUF</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.cuf}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">PR</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.pr}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">IRR (indicative)</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.irr}</dd>
              </div>
              <div className="rounded-xl border border-border bg-background-elevated/70 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted">Payback</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{sitamarhiProject.payback}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-10 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
            >
              Discuss a similar project
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-background-elevated/60 p-8">
        <h2 className="text-2xl font-semibold text-foreground">Delivery snapshot</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-background/60 p-4"
            >
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-1 text-base font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
