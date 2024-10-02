import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (z: string | undefined | null) =>
  z && z.length > 0 ? z[0].toUpperCase() + z.slice(1) : z;
