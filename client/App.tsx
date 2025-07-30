/**
 * Main Application Component
 * 
 * This is the root React component for the Express SSR application.
 * It now includes React Router for client-side navigation while
 * maintaining server-side rendering compatibility.
 * 
 * Features:
 * - React Router DOM integration
 * - Server-side rendering compatible
 * - Responsive navigation
 * - Route-based page rendering
 * - Error boundaries for routes
 * 
 * Technologies showcased:
 * - React 19 with TypeScript
 * - React Router DOM for navigation
 * - Tailwind CSS utility classes
 * - Shadcn/ui components
 * - Responsive design patterns
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from '@/components/Navigation'

// Lazy load page components for code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ComponentsPage = React.lazy(() => import('./pages/ComponentsPage'))
const ApiDemoPage = React.lazy(() => import('./pages/ApiDemoPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

/**
 * Loading fallback component
 * Displayed while lazy-loaded components are being fetched
 */
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      Loading...
    </div>
  </div>
)

/**
 * Main App Component
 * 
 * The root component that sets up routing and renders the entire application.
 * This component is rendered both on the server (SSR) and client (hydration).
 * 
 * Layout structure:
 * - Navigation: Sticky header with route navigation
 * - Main: Dynamic content based on current route
 * - Error Boundaries: Graceful error handling
 * 
 * @returns {JSX.Element} The complete application UI with routing
 * 
 * @example
 * ```tsx
 * // Server-side with StaticRouter
 * import { StaticRouter } from 'react-router-dom/server'
 * const html = renderToString(
 *   <StaticRouter location={req.url}>
 *     <App />
 *   </StaticRouter>
 * )
 * 
 * // Client-side with BrowserRouter
 * import { BrowserRouter } from 'react-router-dom'
 * hydrateRoot(container, 
 *   <BrowserRouter>
 *     <App />
 *   </BrowserRouter>
 * )
 * ```
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Global Navigation */}
      <Navigation />
      
      {/* Main Application Content */}
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* Components Gallery */}
            <Route path="/components" element={<ComponentsPage />} />
            
            {/* API Demo */}
            <Route path="/api-demo" element={<ApiDemoPage />} />
            
            {/* 404 Page - Must be last */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App