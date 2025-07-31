/**
 * Vite Configuration Module
 * 
 * This module provides unified Vite setup for both development and production modes.
 * It handles development server with HMR and production static file serving.
 * 
 * Features:
 * - Development: Enhanced Vite dev server with custom logger and cache busting
 * - Production: Static file serving with SPA fallback
 * - Error handling: Custom logger with process exit on critical errors
 * - Cache busting: Template versioning for reliable reloads
 * 
 * Note: This file is responsible for setting up the Vite server and should not be modified unless necessary.
 */

import express, { type Express } from 'express'
import fs from 'fs'
import path from 'path'
import { createServer as createViteServer, createLogger } from 'vite'
import { type Server } from 'http'
import { nanoid } from 'nanoid'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const viteLogger = createLogger()

export function log(message: string, source = 'express') {
  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })

  console.log(`${formattedTime} [${source}] ${message}`)
}

/**
 * Setup Vite development server with enhanced configuration
 * 
 * @param app - Express application instance
 * @param server - HTTP server instance for HMR
 */
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  }

  const vite = await createViteServer({
    configFile: path.resolve(__dirname, '../vite.config.ts'),
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options)
        process.exit(1)
      },
    },
    server: serverOptions,
    appType: 'custom',
  })

  app.use(vite.middlewares)
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      const clientTemplate = path.resolve(__dirname, '..', 'client', 'index.html')

      // Always reload the index.html file from disk in case it changes
      let template = await fs.promises.readFile(clientTemplate, 'utf-8')
      
      // Add cache busting to prevent stale module loading
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      )
      
      const page = await vite.transformIndexHtml(url, template)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(page)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })

  log('⚡ Vite development server configured with HMR')
}

/**
 * Setup static file serving for production
 * 
 * @param app - Express application instance
 */
export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, '../dist/client')

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    )
  }

  app.use(express.static(distPath))

  // Fall through to index.html if the file doesn't exist (SPA routing)
  app.use('*', (_req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'))
  })

  log(`📁 Static files served from: ${distPath}`)
}