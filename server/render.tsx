/**
 * Server-Side Rendering (SSR) Module with React Router
 * 
 * This module handles the server-side rendering of React components with
 * React Router support. It uses StaticRouter to render the correct route
 * on the server based on the request URL.
 * 
 * The client will then "hydrate" this server-rendered HTML with BrowserRouter,
 * making it interactive without requiring a full page reload.
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../client/App'

/**
 * Renders the React application to an HTML string with routing
 * 
 * This function performs server-side rendering of the main App component
 * with React Router's StaticRouter. It renders the correct route content
 * based on the provided URL path.
 * 
 * Benefits of SSR with routing:
 * - Faster initial page load (content visible before JS loads)
 * - Better SEO (search engines can crawl the specific route content)
 * - Proper URL-based rendering on the server
 * - Seamless hydration with client-side routing
 * 
 * @param {string} location - The URL path to render (e.g., "/about", "/components")
 * @returns {string} HTML string representation of the React app at the given route
 * 
 * @example
 * ```typescript
 * import { render } from './render'
 * 
 * // Render home page
 * const homeHtml = render('/')
 * 
 * // Render about page
 * const aboutHtml = render('/about')
 * 
 * // Render 404 for unknown routes
 * const notFoundHtml = render('/unknown-route')
 * ```
 */
export function render(location: string = '/'): string {
  try {
    // Render the App component with StaticRouter for SSR
    // StaticRouter provides the current location to the routing system
    const htmlString = renderToString(
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    )
    
    // Log successful render in development for debugging
    if (process.env.NODE_ENV !== 'production') {
      console.log(`✅ SSR render completed successfully for route: ${location}`)
    }
    
    return htmlString
  } catch (error) {
    // Log rendering errors for debugging
    console.error(`❌ SSR render failed for route: ${location}`, error)
    
    // Return a basic error fallback HTML that works without routing
    return `
      <div class="min-h-screen flex items-center justify-center bg-background">
        <div class="text-center">
          <h1 class="text-xl text-destructive mb-2">Rendering Error</h1>
          <p class="text-muted-foreground">Failed to render route: ${location}</p>
        </div>
      </div>
    `
  }
}