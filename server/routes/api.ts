/**
 * API Routes Module
 * 
 * This module defines all API endpoints for the application.
 * All routes defined here will be mounted under the `/api` prefix.
 * 
 * Available endpoints:
 * - GET  /api/health - Health check and server status
 */

import { Router, Request, Response } from 'express'

const router = Router()

/**
 * Health Check Endpoint
 * 
 * Provides server health status and basic system information.
 * Useful for monitoring, load balancers, and debugging.
 * 
 * @route GET /api/health
 * @returns {Object} Health status information
 * 
 * @example
 * GET /api/health
 * Response: {
 *   "status": "ok",
 *   "timestamp": "2023-12-07T10:30:00.000Z",
 *   "env": "development"
 * }
 */
router.get('/health', (_req: Request, res: Response) => {
  const healthData = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  }
  
  res.json(healthData)
})

export default router