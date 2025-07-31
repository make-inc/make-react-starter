/**
 * Development Server with Hot Module Replacement (HMR)
 * 
 * This file creates a development server that combines Express with Vite's
 * development server capabilities. It provides hot module replacement,
 * fast refresh, and server-side rendering in development mode.
 * 
 * Features:
 * - Vite middleware integration for HMR
 * - Server-side rendering with live reload
 * - API routes with hot reload
 * - TypeScript compilation on-the-fly
 * - CSS hot reload with Tailwind
 * 
 * Usage: npm run dev
 */

import { createServer } from 'vite'
import { fileURLToPath } from 'url'
import express from 'express'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Creates and configures the development server
 * 
 * This function sets up a development environment that combines:
 * - Express server for API routes and SSR
 * - Vite development server for fast HMR and asset processing
 * - TypeScript compilation and hot reload
 */
async function createDevServer() {
  const app = express()
  
  /**
   * Create Vite server in middleware mode
   * This allows us to use Vite's development features while
   * maintaining control over the Express server setup
   */
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  
  /**
   * Use Vite's middleware for handling static files and HMR
   * This enables hot module replacement and fast refresh
   */
  app.use(vite.middlewares)
  
  // Configure Express middleware for API requests
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  /**
   * Load and mount API routes using Vite's SSR module loading
   * This ensures API routes are also hot-reloaded during development
   */
  const { default: apiRoutes } = await vite.ssrLoadModule('/server/routes/api.ts')
  app.use('/api', apiRoutes)
  
  /**
   * Development SPA handler
   * 
   * This handler serves the HTML template for all routes,
   * allowing React Router to handle client-side routing with HMR.
   */
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    
    try {
      /**
       * Load HTML template from client directory
       */
      let template = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf-8')
      
      /**
       * Apply Vite HTML transforms
       * This injects HMR client code, handles import maps,
       * and processes any HTML transformations
       */
      template = await vite.transformIndexHtml(url, template)
      
      // Send the HTML template - React will render on the client
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    } catch (e) {
      /**
       * Fix stack traces for better error reporting in development
       * Vite provides source map support for better debugging experience
       */
      vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })
  
  const PORT = process.env.PORT || 3000
  
  /**
   * Start the development server
   * Provides detailed logging for development debugging
   */
  app.listen(PORT, () => {
    console.log('🔥 Development server started!')
    console.log(`🚀 Server running on http://localhost:${PORT}`)
    console.log(`🔗 API routes available at http://localhost:${PORT}/api`)
    console.log('⚡ Hot Module Replacement (HMR) enabled')
    console.log('🎨 Tailwind CSS with hot reload active')
    console.log('📦 TypeScript compilation on-the-fly')
  })
}

/**
 * Initialize the development server
 * Catches and logs any startup errors
 */
createDevServer().catch((error) => {
  console.error('❌ Failed to start development server:', error)
  process.exit(1)
})