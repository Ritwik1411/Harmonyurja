import {
  MetricItem,
  NavItem,
  ProjectInfoItem,
  ServiceItem,
  SocialLink,
  WhyUsItem,
} from "@/types";

export const siteUrl = "https://www.harmonyurja.com";

export const company = {
  shortName: "Harmony Urja",
  legalName: "Harmony Urja Pvt Ltd",
  tagline: "Clean Energy. Smarter Tomorrow.",
  email: "contact@harmonyurja.com",
  phone: "+91 124 518 4200",
  address: "Gurugram, Haryana, India",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/harmony-urja",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://twitter.com/harmonyurja",
    icon: "twitter",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@harmonyurja",
    icon: "youtube",
  },
];

/** Homepage hero services — four strategic pillars */
export const coreServices: ServiceItem[] = [
  {
    title: "Solar Power (IPP & EPC)",
    description:
      "Utility-scale and distributed solar from greenfield development through turnkey EPC, grid integration, and long-term asset performance.",
    icon: "Sun",
  },
  {
    title: "BESS Solutions",
    description:
      "Battery energy storage for peak shifting, renewable firming, and grid stability—designed around safety, controls, and lifecycle economics.",
    icon: "BatteryCharging",
  },
  {
    title: "Power Infrastructure",
    description:
      "Substations, evacuation, and balance-of-system engineering executed for reliability, compliance, and predictable commissioning milestones.",
    icon: "Cable",
  },
  {
    title: "Green Hydrogen",
    description:
      "Emerging pathways aligned with India’s hydrogen mission—pairing renewable electrons with efficient electrolysis and offtake planning.",
    icon: "Droplets",
  },
];

/** Extended offerings on /services */
export const services: ServiceItem[] = [
  ...coreServices,
  {
    title: "Hybrid & Rooftop Solar",
    description:
      "Rooftop and hybrid configurations for C&I and public infrastructure with optimized yield and O&M visibility.",
    icon: "Sun",
  },
  {
    title: "Operations & Performance",
    description:
      "Monitoring, preventive maintenance, and analytics to sustain PR, availability, and investor-grade reporting.",
    icon: "Gauge",
  },
  {
    title: "Project Finance Advisory",
    description:
      "Structured documentation support across PPAs, lenders, and execution milestones for bankable projects.",
    icon: "LineChart",
  },
];

export const whyChooseUs: WhyUsItem[] = [
  {
    title: "End-to-end EPC + IPP",
    description:
      "Ownership mindset across development, engineering, procurement, construction, and operations—one accountable partner.",
    icon: "Layers",
  },
  {
    title: "Strong financial viability",
    description:
      "Disciplined techno-commercial modelling with transparent yields, IRR targets, and realistic sensitivity views.",
    icon: "TrendingUp",
  },
  {
    title: "Advanced solar technology",
    description:
      "High-performance arrays including bifacial modules, optimized trackers, and rigorous resource assessment.",
    icon: "Cpu",
  },
  {
    title: "Reliable execution",
    description:
      "Safety-led site governance, quality assurance, and milestone tracking aligned to stakeholders and regulators.",
    icon: "ShieldCheck",
  },
];

export const metrics: MetricItem[] = [
  {
    label: "MW Installed & Committed",
    value: 5,
    suffix: "+ MW",
    decimals: 0,
  },
  {
    label: "Projects Delivered / Active",
    value: 12,
    suffix: "+",
    decimals: 0,
  },
  {
    label: "CO₂ Offset (annual, indicative)",
    value: 8000,
    suffix: "+ tonnes",
    decimals: 0,
    prefix: "",
  },
  {
    label: "Annual Generation (Sitamarhi)",
    value: 9841,
    suffix: " MWh",
    decimals: 0,
  },
];

export const sitamarhiProject = {
  name: "Sitamarhi Solar Power Plant",
  capacityAc: "5 MW AC",
  capacityDc: "6.5 MWp DC",
  location: "Sitamarhi, Bihar",
  annualGen: "9,841 MWh",
  cuf: "~22.4%",
  pr: "~85%",
  irr: "~17.2%",
  payback: "~4.2 years",
};

export const projectHighlights: ProjectInfoItem[] = [
  { label: "Technology", value: "High-efficiency PV + bifacial-ready design" },
  { label: "Interconnection", value: "Grid-compliant evacuation architecture" },
  { label: "Generation profile", value: "Optimized for resource & availability" },
  { label: "Performance assurance", value: "Monitoring, O&M, and PR governance" },
];
