"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-navy">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85"
          alt="Solar photovoltaic plant at sunrise"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(79,143,23,0.22),transparent_55%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-10 px-6 pb-24 pt-28 lg:min-h-[85vh] lg:px-8 lg:pb-32 lg:pt-36">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-primary"
        >
          {company.legalName}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.08]"
        >
          Powering a Sustainable Future with Solar Innovation
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          {company.slogan}. Clean energy solutions across India—utility solar,
          storage, and next-gen infrastructure for enterprises, utilities, and
          communities.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_50px_-18px_rgba(79,143,23,0.5)] transition hover:bg-primary-strong"
            >
              Get a Quote
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-primary hover:bg-primary/20"
            >
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-6 border-t border-white/15 pt-10 text-sm"
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-white/60">Focus</p>
            <p className="mt-1 font-medium text-white">Solar · BESS · Hydrogen</p>
          </div>
          <div className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden />
          <div>
            <p className="text-xs uppercase tracking-wide text-white/60">Model</p>
            <p className="mt-1 font-medium text-white">IPP · EPC · Development</p>
          </div>
          <div className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden />
          <div>
            <p className="text-xs uppercase tracking-wide text-white/60">Office</p>
          <p className="mt-1 font-medium text-white">Sector 31, Gurugram</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
