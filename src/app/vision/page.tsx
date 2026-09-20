import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { company, leadership } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "CMD Vision",
  description: `Vision of ${leadership.name}, ${leadership.title} of ${company.legalName}—building trusted solar IPP & EPC for India's energy transition.`,
};

export default function VisionPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="CMD Vision"
        title="Leadership that puts performance, integrity, and India first"
        description={`${leadership.name} steers ${company.legalName} as ${leadership.title}—with the Harmony Urja brand identity at the centre of how we present ourselves to partners, lenders, and communities.`}
      />

      <section className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_-36px_rgba(6,25,58,0.18)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative flex min-h-[320px] items-center justify-center bg-background-soft p-8 lg:p-12">
            <Image
              src={leadership.photo}
              alt={`${leadership.name}, ${leadership.title}`}
              width={520}
              height={520}
              className="h-72 w-72 rounded-full object-cover object-top md:h-80 md:w-80"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Chairperson & Managing Director
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              {leadership.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-navy">{company.legalName}</p>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 text-lg leading-relaxed text-muted">
              “{leadership.quote}”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <article className="rounded-2xl border border-border bg-white p-8 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-semibold text-foreground">Our vision</h2>
          <p className="mt-4 leading-relaxed text-muted">{leadership.vision}</p>
          <p className="mt-4 leading-relaxed text-muted">{leadership.bio}</p>
          <p className="mt-4 leading-relaxed text-muted">
            Harmony Urja develops, builds, owns, and operates solar power plants
            across India. We stay true to our registered identity—{company.legalName}
            —and to our brand promise: {company.slogan}.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-navy p-8 text-white">
          <h2 className="text-xl font-semibold text-primary">Registered office</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {company.address}
          </p>
          <p className="mt-6 text-sm">
            <a className="text-primary hover:text-white" href={`tel:+91${company.phoneRaw}`}>
              {company.phone}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a className="text-white/80 hover:text-primary" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">How we work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {leadership.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
        >
          Speak with our team
        </Link>
        <Link
          href="/about"
          className="inline-flex rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:border-primary hover:text-primary"
        >
          About Harmony Urja
        </Link>
      </div>
    </div>
  );
}
