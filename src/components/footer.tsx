import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-soft/70">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/company-logo.png"
              alt="Vidish Urja logo"
              width={40}
              height={40}
              className="rounded-full border border-border/60 bg-white object-cover"
            />
            <h3 className="text-lg font-semibold text-white">
              Vidish Urja Private Limited
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Renewable energy development, EPC, and infrastructure execution
            partner supporting India&apos;s clean energy transformation.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted md:justify-self-end md:text-right">
          <p>Email: info@vidishurja.com</p>
          <p>Location: India</p>
          <Link href="/contact" className="inline-block text-primary hover:text-white">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Vidish Urja Private Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
