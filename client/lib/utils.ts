/**
 * Utility Functions Library
 * 
 * This module contains common utility functions used throughout the application.
 * It provides helper functions for CSS class manipulation, string processing,
 * and other common operations.
 * 
 * Key utilities:
 * - cn: CSS class name merging and conflict resolution
 * - Additional utilities can be added here as needed
 * 
 * Dependencies:
 * - clsx: For conditional class name construction
 * - tailwind-merge: For Tailwind CSS class conflict resolution
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
 * 
 * This is essential for Shadcn/ui components where you need to:
 * - Merge default component styles with custom overrides
 * - Handle conditional styling based on props
 * - Resolve Tailwind class conflicts (e.g., 'p-4' overrides 'p-2')
 * 
 * @param {...ClassValue[]} inputs - Class values to merge (strings, objects, arrays)
 * @returns {string} Merged and deduplicated class string
 * 
 * @example
 * ```typescript
 * // Basic usage
 * cn('px-4', 'py-2', 'bg-blue-500')
 * // Returns: "px-4 py-2 bg-blue-500"
 * 
 * // Conditional classes
 * cn('base-class', { 'active-class': isActive, 'disabled-class': isDisabled })
 * // Returns: "base-class active-class" (if isActive=true, isDisabled=false)
 * 
 * // Tailwind conflict resolution
 * cn('p-4', 'p-2') 
 * // Returns: "p-2" (later class wins)
 * 
 * // Component styling with overrides
 * cn('bg-primary text-white px-4 py-2', className, {
 *   'opacity-50': disabled,
 *   'hover:bg-primary/90': !disabled
 * })
 * ```
 * 
 * @example
 * // Real-world component usage
 * ```tsx
 * interface ButtonProps {
 *   variant?: 'default' | 'secondary'
 *   size?: 'sm' | 'md' | 'lg'
 *   disabled?: boolean
 *   className?: string
 * }
 * 
 * function Button({ variant = 'default', size = 'md', disabled, className, ...props }: ButtonProps) {
 *   return (
 *     <button
 *       className={cn(
 *         // Base styles
 *         'rounded font-medium transition-colors',
 *         // Variant styles
 *         {
 *           'bg-primary text-white': variant === 'default',
 *           'bg-secondary text-secondary-foreground': variant === 'secondary',
 *         },
 *         // Size styles
 *         {
 *           'px-3 py-1 text-sm': size === 'sm',
 *           'px-4 py-2': size === 'md',
 *           'px-6 py-3 text-lg': size === 'lg',
 *         },
 *         // State styles
 *         {
 *           'opacity-50 cursor-not-allowed': disabled,
 *           'hover:opacity-90': !disabled,
 *         },
 *         // Allow custom overrides
 *         className
 *       )}
 *       disabled={disabled}
 *       {...props}
 *     />
 *   )
 * }
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}