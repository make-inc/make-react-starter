/**
 * Utility Functions Library
 * 
 * This module contains common utility functions used throughout the application.
 * It provides helper functions for CSS class manipulation, string processing,
 * and other common operations.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Class Name Utility Function
 * 
 * Combines and merges CSS class names intelligently, handling:
 * - Conditional class names with clsx
 * - Tailwind CSS class conflicts with tailwind-merge
 * - Clean deduplication and conflict resolution
 * @param {...ClassValue[]} inputs - Class values to merge (strings, objects, arrays)
 * @returns {string} Merged and deduplicated class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}