/**
 * Universal Express Server for Development and Production
 * 
 * This file configures an Express server that automatically adapts to both
 * development and production environments. It provides hot module replacement
 * in development and optimized static serving in production.
 * 
 * Features:
 * - Development: Vite integration, HMR, live reload
 * - Production: Static file serving, optimized builds
 * - Universal: API routes, SPA routing, TypeScript support
 * 
 * Note: This file is responsible for setting up the server and should not be modified unless necessary.
 */

import express from 'express'
import { createServer as createHttpServer } from 'http'
import { registerRoutes } from './routes/index.js'
import { setupVite, serveStatic, log } from './vite.js'

const isDev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

async function createServer() {
  const app = express()
  const server = createHttpServer(app)
  
  // Configure Express middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Register all API routes
  await registerRoutes(app)

  if (isDev) {
    // Development mode with enhanced Vite integration
    await setupVite(app, server)
  } else {
    // Production mode with static file serving
    serveStatic(app)
  }

  server.listen(PORT, () => {
    if (isDev) {
      log('🔥 Development server started!')
      log(`🚀 Server running on http://localhost:${PORT}`)
      log(`🔗 API routes available at http://localhost:${PORT}/api`)
      log('🎨 Tailwind CSS with hot reload active')
      log('📦 TypeScript compilation on-the-fly')
    } else {
      log(`🚀 Production server running on http://localhost:${PORT}`)
      log(`🔗 API routes available at http://localhost:${PORT}/api`)
    }
  })

  return { app, server }
}

createServer().catch((error) => {
  console.error(`❌ Failed to start ${isDev ? 'development' : 'production'} server:`, error)
  process.exit(1)
})

export default createServer