import { companyStats } from "@/lib/site-data";

export function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {companyStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-border bg-background-soft/70 p-6"
          >
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
