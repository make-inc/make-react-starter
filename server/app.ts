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
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { registerRoutes } from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isDev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

async function createServer() {
  const app = express()
  
  // Configure Express middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  if (isDev) {
    // Development mode with Vite integration
    const { createServer: createViteServer } = await import('vite')
    
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    
    app.use(vite.middlewares)
    
    // Register all routes
    await registerRoutes(app)
    
    // Development SPA handler with HMR
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl
      
      try {
        let template = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
      } catch (e) {
        vite.ssrFixStacktrace(e as Error)
        next(e)
      }
    })
  } else {
    // Production mode with static serving
    app.use(express.static(path.join(__dirname, '../dist/client')))
    
    // Register all routes
    await registerRoutes(app)
    
    // Production SPA handler
    app.get('*', (_req, res) => {
      try {
        const indexPath = path.join(__dirname, '../dist/client/index.html')
        const html = fs.readFileSync(indexPath, 'utf-8')
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
      } catch (e) {
        console.error('Static file serving error:', e)
        res.status(500).end('Internal Server Error')
      }
    })
  }

  app.listen(PORT, () => {
    if (isDev) {
      console.log('🔥 Development server started!')
      console.log(`🚀 Server running on http://localhost:${PORT}`)
      console.log(`🔗 API routes available at http://localhost:${PORT}/api`)
      console.log('⚡ Hot Module Replacement (HMR) enabled')
      console.log('🎨 Tailwind CSS with hot reload active')
      console.log('📦 TypeScript compilation on-the-fly')
    } else {
      console.log(`🚀 Production server running on http://localhost:${PORT}`)
      console.log(`📁 Serving static files from: ${path.join(__dirname, '../dist/client')}`)
      console.log(`🔗 API routes available at: http://localhost:${PORT}/api`)
    }
  })

  return app
}

createServer().catch((error) => {
  console.error(`❌ Failed to start ${isDev ? 'development' : 'production'} server:`, error)
  process.exit(1)
})

export default createServer