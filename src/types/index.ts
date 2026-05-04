export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectInfoItem = {
  label: string;
  value: string;
};

export type MetricItem = {
  label: string;
  /** Target number shown after counting up */
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
};

export type WhyUsItem = {
  title: string;
  description: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "twitter" | "youtube";
};
