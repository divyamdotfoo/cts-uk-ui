import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {} from "next/font/google";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
