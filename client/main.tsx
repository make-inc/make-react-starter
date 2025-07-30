/**
 * Client-Side Entry Point
 * 
 * This file serves as the entry point for the client-side React application.
 * It handles the hydration of server-rendered HTML, making it interactive
 * in the browser without requiring a full page reload.
 * 
 * Hydration Process:
 * 1. Server renders React components to HTML
 * 2. HTML is sent to the browser and displayed immediately
 * 3. This script loads and "hydrates" the static HTML
 * 4. The HTML becomes interactive with React's event handlers
 */

import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

/**
 * Initialize the React application on the client side
 * 
 * This function hydrates the server-rendered HTML with React,
 * making the application interactive in the browser.
 * 
 * Hydration vs Render:
 * - hydrateRoot: Used when HTML is pre-rendered on the server
 * - createRoot: Used for client-only rendering
 * 
 * Error Handling:
 * - Catches hydration mismatches in development
 * - Provides fallback rendering in case of errors
 */
async function initializeApp() {
  // Get the root container element where React will hydrate
  const container = document.getElementById('root')
  
  if (!container) {
    console.error('❌ Root container not found. Make sure there is a <div id="root"></div> in your HTML.')
    return
  }
  
  try {
    // Hydrate the server-rendered HTML with React Router
    // This makes the static HTML interactive with routing
    hydrateRoot(
      container, 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // Log successful hydration in development
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ React application hydrated successfully')
      console.log('🔥 Hot Module Replacement is active')
      console.log('🎨 Tailwind CSS is loaded and active')
    }
    
  } catch (error) {
    console.error('❌ Failed to hydrate React application:', error)
    
    // In case hydration fails, try to render the app normally
    // This provides a fallback for hydration mismatches
    try {
      const { createRoot } = await import('react-dom/client')
      const root = createRoot(container)
      root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
      console.warn('⚠️ Fell back to client-side rendering due to hydration error')
    } catch (fallbackError) {
      console.error('❌ Both hydration and fallback rendering failed:', fallbackError)
    }
  }
}

// Initialize the application
initializeApp()

/**
 * Hot Module Replacement (HMR) for development
 * 
 * This enables hot reloading of React components during development,
 * allowing you to see changes instantly without losing application state.
 */
if (process.env.NODE_ENV === 'development' && import.meta.hot) {
  // Accept hot updates for this module
  import.meta.hot.accept()
  
  // Accept hot updates for the App component
  import.meta.hot.accept('./App', () => {
    console.log('🔥 Hot reloading App component')
  })
}