"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-primary">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-white ${
                  isActive ? "text-white" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_36px_-16px_rgba(34,197,94,0.65)] transition hover:bg-primary-strong md:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="rounded-lg border border-border/80 p-2 text-white md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-border bg-background/95 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-2 py-2.5 text-sm ${
                    isActive ? "text-white" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
