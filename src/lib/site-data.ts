import { NavItem, ProjectInfoItem, ServiceItem, StatItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Vision", href: "/vision" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

export const companyStats: StatItem[] = [
  { label: "Solar PV Project", value: "5 MW" },
  { label: "DC Capacity", value: "6.5 MWp" },
  { label: "Annual Generation", value: "9,841 MWh" },
  { label: "Performance Ratio", value: "85.2%" },
];

export const services: ServiceItem[] = [
  {
    title: "Renewable Energy Development",
    description:
      "End-to-end development of utility-scale and distributed clean energy assets from land assessment to commissioning.",
    icon: "Sun",
  },
  {
    title: "EPC & Engineering Services",
    description:
      "Turnkey EPC delivery with detailed engineering, procurement, quality assurance, and project execution discipline.",
    icon: "HardHat",
  },
  {
    title: "Operations & Maintenance",
    description:
      "Performance-oriented preventive and predictive O&M programs to maximize uptime, yield, and asset lifecycle value.",
    icon: "Settings",
  },
  {
    title: "Decentralized Energy Solutions",
    description:
      "Microgrids and distributed systems designed for resilient power supply in commercial, rural, and remote environments.",
    icon: "Network",
  },
  {
    title: "Energy Storage Systems",
    description:
      "Battery storage integration for peak shaving, backup reliability, and improved grid balancing with smart controls.",
    icon: "BatteryCharging",
  },
  {
    title: "EV Charging Infrastructure",
    description:
      "Scalable EV charging networks for fleet and public use with power management and future-ready interoperability.",
    icon: "CarFront",
  },
  {
    title: "Manufacturing & Supply Chain",
    description:
      "Strategic sourcing, partner manufacturing, and robust supply planning to de-risk project timelines and costs.",
    icon: "Factory",
  },
  {
    title: "Bio-energy & Waste-to-energy",
    description:
      "Waste valorization and bio-energy pathways that convert organic residues into useful, lower-carbon power resources.",
    icon: "Recycle",
  },
  {
    title: "Consultancy & Training",
    description:
      "Technical advisory, feasibility studies, and workforce training programs aligned to modern clean energy standards.",
    icon: "GraduationCap",
  },
  {
    title: "Agri & Sustainability Businesses",
    description:
      "Agri-linked sustainable initiatives including solarization support, water-energy optimization, and circular practices.",
    icon: "Leaf",
  },
];

export const projectHighlights: ProjectInfoItem[] = [
  { label: "Project Portfolio", value: "Utility + C&I + Decentralized" },
  { label: "Focus Areas", value: "Solar, Storage, EV Infrastructure" },
  { label: "Delivery Model", value: "Development, EPC, O&M" },
  { label: "Execution Footprint", value: "Pan-India" },
  { label: "Approach", value: "Performance-led engineering" },
  { label: "Standards", value: "Safety, quality, compliance" },
  { label: "Engagement", value: "Client-specific project structuring" },
];
