import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getCurrentMonthName() {
  return new Date().toLocaleString("en-GB", { month: "long" });
}
