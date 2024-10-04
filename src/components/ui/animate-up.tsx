"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export function AnimateUp({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay ?? 0.2 }}
    >
      {children}
    </motion.div>
  );
}
