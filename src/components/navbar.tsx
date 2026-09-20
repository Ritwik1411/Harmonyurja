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
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Logo />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex lg:gap-8" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-primary ${
                  isActive ? "text-primary" : "text-navy"
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
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(79,143,23,0.55)] transition hover:bg-primary-strong lg:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="rounded-lg border border-border p-2 text-foreground lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-md px-2 py-2.5 text-sm font-medium ${
                    isActive ? "text-primary" : "text-navy"
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
