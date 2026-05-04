"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
