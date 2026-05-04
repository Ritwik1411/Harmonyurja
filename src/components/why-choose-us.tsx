"use client";

import {
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { whyChooseUs } from "@/lib/site-data";
const icons = {
  Layers,
  TrendingUp,
  Cpu,
  ShieldCheck,
};

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      aria-labelledby="why-heading"
    >
      <ScrollReveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Why Harmony Urja
        </p>
        <h2
          id="why-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Built like an infrastructure company. Run like a power asset owner.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          We combine project finance discipline with field execution—so investors,
          off-takers, and communities see predictable outcomes, not promises.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {whyChooseUs.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons] ?? Layers;
          return (
            <ScrollReveal key={item.title} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="h-full rounded-2xl border border-border bg-gradient-to-br from-background-elevated/90 to-background-soft/70 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
