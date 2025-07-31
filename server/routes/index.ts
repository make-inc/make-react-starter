/**
 * Route Registration Module
 * 
 * This module provides a centralized way to register all API routes.
 * It automatically handles both development (with HMR) and production modes.
 * 
 * To add new routes, simply import and register them in the registerRoutes function.
 * This approach keeps app.ts clean and makes route management easier.
 */

import { Express } from 'express'
import apiRoutes from './api.js'

/**
 * Register all API routes
 * 
 * This function handles route registration for both development and production.
 * Uses standard imports - tsx handles hot reload automatically.
 * 
 * @param app - Express application instance
 */
export async function registerRoutes(app: Express) {
  app.use('/api', apiRoutes)
  
  // Add more route registrations here as needed
  // app.use('/auth', authRoutes)
}