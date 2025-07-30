/**
 * Button Component - Shadcn/ui Compatible
 * 
 * A flexible, accessible button component built with Tailwind CSS and CVA.
 * This component follows the Shadcn/ui design system patterns and provides
 * multiple variants and sizes for different use cases.
 * 
 * Features:
 * - Multiple visual variants (default, destructive, outline, etc.)
 * - Various sizes (small, default, large, icon)
 * - Full accessibility support (ARIA, keyboard navigation)
 * - TypeScript support with proper prop types
 * - Custom class override support
 * - Forward ref support for advanced use cases
 * 
 * Technologies used:
 * - React forwardRef for ref forwarding
 * - Class Variance Authority (CVA) for variant management
 * - Tailwind CSS for styling
 * - Custom utility function for class merging
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button variant styles using Class Variance Authority (CVA)
 * 
 * CVA allows us to define component variants in a type-safe way
 * with automatic TypeScript inference for props.
 * 
 * Base styles: Applied to all button variants
 * Variants: Different visual styles for different use cases
 * Sizes: Different button sizes for different contexts
 */
const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      /**
       * Visual variants for different button purposes
       */
      variant: {
        // Primary action button
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Dangerous/destructive actions (delete, remove, etc.)
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Secondary button with border
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // Secondary button with background
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Minimal button for subtle actions
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Link-style button for navigation
        link: "text-primary underline-offset-4 hover:underline",
      },
      /**
       * Size variants for different contexts
       */
      size: {
        // Standard button size
        default: "h-10 px-4 py-2",
        // Smaller button for compact layouts
        sm: "h-9 rounded-md px-3",
        // Larger button for emphasis
        lg: "h-11 rounded-md px-8",
        // Square button for icons only
        icon: "h-10 w-10",
      },
    },
    // Default variant and size when not specified
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button component props interface
 * 
 * Extends standard HTML button attributes and adds variant props
 * from CVA for type safety and autocomplete support.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as a child component (for advanced composition)
   * Note: This prop is prepared for future Slot component integration
   */
  asChild?: boolean
}

/**
 * Button Component
 * 
 * A versatile button component that supports multiple variants and sizes.
 * Built with accessibility in mind and follows modern React patterns.
 * 
 * @param variant - Visual style variant
 * @param size - Button size
 * @param className - Additional CSS classes to merge
 * @param asChild - Render as child component (future feature)
 * @param ref - Forward ref to the button element
 * @param props - All other HTML button attributes
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 * 
 * // With variant and size
 * <Button variant="outline" size="lg">Large outline button</Button>
 * 
 * // With click handler
 * <Button onClick={() => console.log('Clicked!')}>
 *   Submit Form
 * </Button>
 * 
 * // Destructive action
 * <Button variant="destructive" size="sm">
 *   Delete Item
 * </Button>
 * 
 * // Custom styling
 * <Button className="w-full mt-4">
 *   Full-width button
 * </Button>
 * 
 * // Icon button
 * <Button variant="ghost" size="icon">
 *   <TrashIcon className="h-4 w-4" />
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Future: Implement asChild functionality with Slot component
    // const Comp = asChild ? Slot : "button"
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

// Set display name for React DevTools
Button.displayName = "Button"

export { Button, buttonVariants }