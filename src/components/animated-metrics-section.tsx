"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { metrics } from "@/lib/site-data";
import type { MetricItem } from "@/types";

function formatNumber(n: number, decimals: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(n);
}

function AnimatedMetricCard({ metric }: { metric: MetricItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(0);
  const decimals = metric.decimals ?? 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1600;
    const start = performance.now();
    const from = 0;
    const to = metric.value;

    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(from + (to - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(to);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [visible, metric.value]);

  const text =
    decimals > 0
      ? formatNumber(display, decimals)
      : formatNumber(Math.round(display), 0);

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background-elevated/90 to-background-soft/80 p-7 shadow-[0_0_0_1px_rgba(56,189,248,0.06)]"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/15"
        aria-hidden
      />
      <p className="font-mono text-3xl font-semibold tracking-tight text-white md:text-4xl">
        <span className="text-accent">{metric.prefix}</span>
        {text}
        <span className="text-primary">{metric.suffix}</span>
      </p>
      <p className="mt-3 text-sm leading-snug text-muted">{metric.label}</p>
    </article>
  );
}

export function AnimatedMetricsSection() {
  return (
    <section
      id="metrics"
      className="relative border-y border-border/80 bg-background-soft/40"
      aria-labelledby="metrics-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Impact at scale
          </p>
          <h2
            id="metrics-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            Performance you can measure
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Live counters snapshot operational momentum across megawatts delivered,
            executed projects, avoided emissions, and annual generation from our
            flagship Sitamarhi asset.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.06}>
              <AnimatedMetricCard metric={metric} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
