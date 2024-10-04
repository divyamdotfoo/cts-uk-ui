import { cn } from "@/lib/utils";
import React from "react";

export function SeparatorInline({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full flex items-center gap-4">
      <span className={cn("w-full h-[2px] bg-gray-200", className)}></span>
      <span className=" text-nowrap">{children}</span>
      <span className={cn("w-full h-[2px] bg-gray-200", className)}></span>
    </div>
  );
}
