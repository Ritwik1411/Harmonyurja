type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
