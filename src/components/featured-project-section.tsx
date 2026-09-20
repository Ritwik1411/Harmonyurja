"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { sitamarhiProject } from "@/lib/site-data";

const stats = [
  { label: "AC capacity", value: sitamarhiProject.capacityAc },
  { label: "DC capacity", value: sitamarhiProject.capacityDc },
  { label: "Location", value: sitamarhiProject.location },
  { label: "Annual generation", value: sitamarhiProject.annualGen },
  { label: "CUF", value: sitamarhiProject.cuf },
  { label: "PR", value: sitamarhiProject.pr },
  { label: "IRR (indicative)", value: sitamarhiProject.irr },
  { label: "Payback", value: sitamarhiProject.payback },
];

export function FeaturedProjectSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-border bg-background-soft"
      aria-labelledby="project-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,143,23,0.12),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Featured case study
            </p>
            <h2
              id="project-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              {sitamarhiProject.name}
            </h2>
            <p className="mt-4 flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              <span>Utility-scale solar in Bihar—optimized generation profile</span>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A reference execution demonstrating structured development, EPC
              delivery, and plant-level performance parameters aligned with
              investor-grade expectations.
            </p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(79,143,23,0.5)] transition hover:bg-primary-strong"
              >
                View project detail
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_24px_80px_-32px_rgba(6,25,58,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85"
                alt="Solar PV installation across open terrain"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-xs text-muted">
                Representative project imagery for illustrative purposes.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.04}>
              <div className="rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {s.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{s.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
