import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
          alt="Solar farm at golden hour"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-24 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Vidish Urja Private Limited
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Powering India&apos;s Clean Energy Future
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Renewable energy development, EPC, and infrastructure solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-white hover:border-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
