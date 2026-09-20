import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <ScrollReveal className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            About us
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            India&apos;s energy transition, engineered for outcomes
          </h2>
        </ScrollReveal>
        <div className="space-y-6 lg:col-span-7">
          <ScrollReveal delay={0.06}>
            <p className="text-lg leading-relaxed text-muted">
              Harmony Urja is a renewable energy company focused on{" "}
              <span className="text-foreground">
                development, EPC, and IPP solar
              </span>{" "}
              across India. We develop, build, own, and operate solar power plants
              with an execution-first culture—where safety, performance ratio, and
              stakeholder alignment define success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Utility-scale solar",
                "Rooftop solar",
                "Hybrid renewable projects",
                "Bankable project structuring",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-background-elevated/50 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <p className="border-l-2 border-primary/70 pl-5 text-base leading-relaxed text-muted">
              <span className="font-semibold text-foreground">Mission focus:</span>{" "}
              accelerate India&apos;s energy transition with reliable, measurable
              clean power—pairing advanced PV technology with disciplined delivery.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
