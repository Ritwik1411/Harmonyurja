type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="hu-gradient" x1="10" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="hu-sun" x1="24" y1="8" x2="40" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86efac" stopOpacity="0.9" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="14" fill="#071022" stroke="url(#hu-gradient)" strokeWidth="1.5" />
      <path
        d="M14 34V14h5.2l5.8 14 5.8-14H36v20h-4v-11l-6 12h-4l-6-12v11H14z"
        fill="url(#hu-gradient)"
      />
      <circle cx="38" cy="12" r="4" fill="url(#hu-sun)" opacity="0.85" />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
  wordmarkClassName,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      {showWordmark ? (
        <span
          className={
            wordmarkClassName ??
            "flex flex-col leading-tight text-white"
          }
        >
          <span className="text-base font-semibold tracking-tight md:text-lg">
            Harmony Urja
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted md:text-xs">
            Pvt Ltd
          </span>
        </span>
      ) : null}
    </span>
  );
}
