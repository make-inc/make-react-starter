/**
 * @fileoverview Main App component - Root application component with routing and navigation
 *
 * This is the main application component that sets up the overall structure including:
 * - Global navigation component
 * - React Router configuration with routes
 * - Suspense wrapper for lazy loading components
 * - Loading fallback UI for route transitions
 * - Main layout structure with background styling
 */

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home";
import NotFoundPage from "@/pages/not-found";

/**
 * LoadingFallback Component
 *
 * Displays a loading spinner and text while route components are being loaded.
 * Used as a fallback UI for the Suspense boundary around route components.
 *
 * Features:
 * - Animated spinning loader using CSS animations
 * - Centered layout taking full screen height
 * - Consistent styling with the app's design system
 *
 * @returns {JSX.Element} Loading UI with spinner and text
 */
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      Loading...
    </div>
  </div>
);

/**
 * App Component
 *
 * The root application component that provides the main structure and routing
 * for the entire application. This component sets up:
 *
 * Architecture:
 * - Global navigation bar at the top
 * - Main content area with route-based rendering
 * - Suspense boundary for code splitting and lazy loading
 * - Error boundary via catch-all route to 404 page
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
