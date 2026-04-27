import {
  BatteryCharging,
  CarFront,
  Factory,
  GraduationCap,
  HardHat,
  Leaf,
  Network,
  Recycle,
  Settings,
  Sun,
} from "lucide-react";
import { ServiceItem } from "@/types";

const icons = {
  BatteryCharging,
  CarFront,
  Factory,
  GraduationCap,
  HardHat,
  Leaf,
  Network,
  Recycle,
  Settings,
  Sun,
};

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sun;

  return (
    <article className="rounded-2xl border border-border bg-background-soft/60 p-6 transition hover:-translate-y-1 hover:border-primary/60">
      <Icon className="mb-4 h-8 w-8 text-primary" />
      <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{service.description}</p>
    </article>
  );
}
