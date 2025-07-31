/**
 * Client-Side Entry Point
 * 
 * This file serves as the entry point for the client-side React application.
 * It renders the React app directly in the browser for optimal performance
 * and simplicity.
 */

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

/**
 * Initialize the React application on the client side
 * 
 * This function renders the React application in the browser.
 * No server-side rendering complexity - just clean client-side React.
 */
function initializeApp() {
  const container = document.getElementById('root')
  
  if (!container) {
    console.error('❌ Root container not found. Make sure there is a <div id="root"></div> in your HTML.')
    return
  }
  
  try {
    const root = createRoot(container)
    root.render(
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <App />
      </BrowserRouter>
    )
  } catch (error) {
    console.error('❌ Failed to initialize React application:', error)
  }
}

initializeApp()

/**
 * Hot Module Replacement (HMR) for development
 * 
 * This enables hot reloading of React components during development,
 * allowing you to see changes instantly without losing application state.
 */
if (process.env.NODE_ENV === 'development' && import.meta.hot) {
  import.meta.hot.accept()
  
  import.meta.hot.accept('./App', () => {
    console.log('🔥 Hot reloading App component')
  })
}