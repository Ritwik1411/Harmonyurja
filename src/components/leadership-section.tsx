import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { leadership } from "@/lib/site-data";

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="border-y border-border bg-background-soft"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center lg:px-8">
        <ScrollReveal className="flex justify-center lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-full border border-primary/30"
              aria-hidden
            />
            <Image
              src={leadership.photo}
              alt={`${leadership.name}, ${leadership.title} of Harmony Urja Pvt Ltd`}
              width={420}
              height={420}
              className="h-64 w-64 rounded-full object-cover object-top shadow-[0_24px_60px_-28px_rgba(6,25,58,0.35)] md:h-80 md:w-80"
              priority={false}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Leadership
          </p>
          <h2
            id="leadership-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {leadership.name}
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
            {leadership.title}
          </p>
          <blockquote className="mt-6 border-l-2 border-primary pl-5 text-lg leading-relaxed text-muted">
            “{leadership.quote}”
          </blockquote>
          <p className="mt-6 leading-relaxed text-muted">{leadership.bio}</p>
          <Link
            href="/vision"
            className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
          >
            Read CMD Vision
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
