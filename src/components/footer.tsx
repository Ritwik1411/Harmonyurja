import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, footerLinks, socialLinks } from "@/lib/site-data";

function SocialIcon({ icon }: { icon: "linkedin" | "twitter" | "youtube" }) {
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    );
  }
  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 lg:grid-cols-12 lg:px-8">
        <div className="space-y-5 lg:col-span-5">
          <Link href="/" className="inline-block rounded-lg bg-white px-4 py-3">
            <Logo size="footer" />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            {company.slogan}. We develop, build, own, and operate solar and
            complementary clean energy assets across India—with governance,
            transparency, and performance at the core.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Registered office
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>{company.address}</li>
              <li>
                <a
                  className="transition hover:text-primary"
                  href={`tel:+91${company.phoneRaw}`}
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-primary"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:border-primary hover:bg-primary/20 hover:text-white"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-center text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>{company.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
