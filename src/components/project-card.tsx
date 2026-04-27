import Image from "next/image";
import Link from "next/link";

export function ProjectCard() {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-background-soft/70">
      <div className="relative h-72">
        <Image
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80"
          alt="Large utility scale solar project"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-8">
        <h3 className="text-2xl font-semibold text-white">Project Portfolio</h3>
        <p className="text-muted">
          Vidish Urja is executing a growing pipeline of renewable energy and
          infrastructure projects with a focus on quality delivery and long-term
          operating performance.
        </p>
        <Link
          href="/projects"
          className="inline-block rounded-full border border-border px-5 py-2 text-sm font-semibold text-white hover:border-primary"
        >
          View Portfolio
        </Link>
      </div>
    </article>
  );
}
