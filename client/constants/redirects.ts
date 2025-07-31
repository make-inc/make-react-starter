/**
 * Redirect Paths Constants
 * 
 * This file contains all redirect path constants used throughout the application.
 * Using constants instead of hardcoded strings provides:
 * - Type safety and autocompletion
 * - Centralized path management
 * - Easy refactoring when paths change
 * - Consistent routing across the application
 * 
 * @example
 * ```tsx
 * import { RedirectPaths } from '@/constants/redirects'
 * 
 * // In components
 * <Link to={RedirectPaths.toHome}>Go Home</Link>
 * 
 * // In programmatic navigation
 * navigate(RedirectPaths.toHome)
 */

/**
 * RedirectPaths object containing all application redirect paths
 * 
 * Each property represents a specific route or redirect destination
 * in the application. Use these constants instead of hardcoded strings
 * to ensure consistency and enable easy maintenance.
 */
export const RedirectPaths = {
  /**
   * Redirect to the home/landing page
   * 
   * This is the main entry point of the application where users
   * land when they first visit the site or when redirected from
   * other parts of the application.
   * 
   * @example
   * ```tsx
   * // In route definitions
   * <Route path={RedirectPaths.toHome} element={<HomePage />} />
   * 
   * // In navigation
   * <Link to={RedirectPaths.toHome}>Home</Link>
   * 
   * // In programmatic navigation
   * navigate(RedirectPaths.toHome)
   * ```
   */
  toHome: '/',
} as const

/**
 * Type definition for RedirectPaths values
 * 
 * This type ensures type safety when working with redirect paths
 * and provides autocompletion for valid path values.
 * 
 * @example
 * ```tsx
 * function navigateToPath(path: RedirectPathValue) {
 *   navigate(path)
 * }
 * 
 * navigateToPath(RedirectPaths.toHome) // ✅ Valid
 * navigateToPath('/invalid') // ❌ Type error
 * ```
 */
export type RedirectPathValue = typeof RedirectPaths[keyof typeof RedirectPaths]

/**
 * Default export for convenient importing
 * 
 * @example
 * ```tsx
 * import RedirectPaths from '@/constants/redirects'
 * // or
 * import { RedirectPaths } from '@/constants/redirects'
 * ```
 */
export default RedirectPaths