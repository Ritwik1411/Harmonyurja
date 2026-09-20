"use client";

import {
  BatteryCharging,
  Cable,
  Cpu,
  Droplets,
  Gauge,
  LineChart,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { ServiceItem } from "@/types";

const icons = {
  BatteryCharging,
  Cable,
  Cpu,
  Droplets,
  Gauge,
  LineChart,
  Sun,
};

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sun;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-[0_12px_40px_-28px_rgba(6,25,58,0.12)] transition hover:border-primary/40 hover:shadow-[0_16px_48px_-24px_rgba(79,143,23,0.22)]"
    >
      <div
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition group-hover:bg-primary/10"
        aria-hidden
      />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition group-hover:border-primary/45 group-hover:bg-primary/15">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </motion.article>
  );
}
