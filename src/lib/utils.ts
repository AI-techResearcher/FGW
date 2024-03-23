import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// for merging style tailwind css
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
