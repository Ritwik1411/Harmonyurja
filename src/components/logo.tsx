import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "nav" | "footer" | "hero";
};

const sizes = {
  nav: { width: 180, height: 72, className: "h-12 w-auto md:h-14" },
  footer: { width: 220, height: 88, className: "h-16 w-auto md:h-[4.5rem]" },
  hero: { width: 280, height: 112, className: "h-20 w-auto md:h-24" },
};

export function Logo({ className, size = "nav" }: LogoProps) {
  const config = sizes[size];

  return (
    <Image
      src="/harmony-urja-logo.png"
      alt="Harmony Urja Pvt Ltd — Energizing a Sustainable Tomorrow"
      width={config.width}
      height={config.height}
      className={`object-contain ${config.className} ${className ?? ""}`}
      priority={size === "nav"}
    />
  );
}
