"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";
import { RoughAnnotationType } from "rough-notation/lib/model";
export function Underline({
  children,
  color,
  type,
  iterations,
  strokeWidth,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  color: string;
  strokeWidth?: number;
  iterations?: number;
  type?: RoughAnnotationType;
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
        type: type ?? "underline",
        strokeWidth: strokeWidth ?? 5,
        color: color,
        iterations: iterations ?? 2,
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
