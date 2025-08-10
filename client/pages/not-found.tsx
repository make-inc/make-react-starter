/**
 * @fileoverview NotFoundPage component - 404 error page for handling non-existent routes
 *
 * This component displays a user-friendly 404 error page when users navigate to
 * routes that don't exist in the application. It includes:
 * - Large "404" visual indicator
 * - Clear error message explaining the issue
 * - Navigation button to return to the home page
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

/**
 * NotFoundPage Component
 *
 * Renders a 404 error page with a clean, centered layout that includes:
 * - A large "404" number display
 * - "Page Not Found" heading
 * - Descriptive error message
 * - Home navigation button with icon
 *
 * The component uses Tailwind CSS for styling and provides a responsive
 * design that works across different screen sizes.
 *
 * @returns {JSX.Element} The rendered 404 error page
 *
 * @example
 * ```tsx
 * // Used in router configuration for catch-all routes
 * <Route path="*" element={<NotFoundPage />} />
 * ```
 */
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-8xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>

        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
