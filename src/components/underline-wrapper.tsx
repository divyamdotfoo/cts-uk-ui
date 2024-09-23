"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";
export function Underline({
  children,
  color,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  color: string;
  delay?: number;
  className?: string;
}) {
  const elRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView && elRef.current) {
      const ann = annotate(elRef.current, {
        type: "underline",
        strokeWidth: 5,
        color: color,
      });
      setTimeout(() => {
        ann.show();
      }, delay);
    }
  }, [isInView]);

  return (
    <span className={className} ref={elRef}>
      {children}
    </span>
  );
}
