/**
 * API Routes Module
 * 
 * This module defines all API endpoints for the Express SSR application.
 * All routes defined here will be mounted under the `/api` prefix.
 * 
 * Available endpoints:
 * - GET  /api/health - Health check and server status
 * - GET  /api/users  - Retrieve all users
 * - POST /api/users  - Create a new user
 * 
 * Features:
 * - RESTful API design
 * - Input validation
 * - Error handling
 * - JSON responses
 * - TypeScript support
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import { Router, Request, Response } from 'express'

const router = Router()

/**
 * User interface for type safety
 * Defines the structure of user objects used throughout the API
 */
interface User {
  id: number
  name: string
  email: string
  createdAt?: string
}

/**
 * Mock database for demonstration purposes
 * In a real application, this would be replaced with a database connection
 */
const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
]

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

/**
 * Get All Users
 * 
 * Retrieves a list of all users from the system.
 * In a production app, this would include pagination, filtering, and sorting.
 * 
 * @route GET /api/users
 * @returns {User[]} Array of user objects
 */
router.get('/users', (_req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: mockUsers,
      count: mockUsers.length
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users'
    })
  }
})

/**
 * Create New User
 * 
 * Creates a new user with the provided name and email.
 * Validates input data and returns the created user.
 * 
 * @route POST /api/users
 * @param {string} name - User's full name (required)
 * @param {string} email - User's email address (required)
 * @returns {User} The created user object
 */
router.post('/users', (req: Request, res: Response) => {
  try {
    const { name, email } = req.body
    
    // Input validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Name is required and must be a non-empty string'
      })
    }
    
    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Valid email address is required'
      })
    }
    
    // Check if email already exists
    const existingUser = mockUsers.find(user => user.email.toLowerCase() === email.toLowerCase())
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'User with this email already exists'
      })
    }
    
    // Create new user object
    const newUser: User = {
      id: Date.now(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      createdAt: new Date().toISOString()
    }
    
    // Add to mock database
    mockUsers.push(newUser)
    
    // Return success response
    res.status(201).json({
      success: true,
      data: newUser,
      message: 'User created successfully'
    })
    
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error while creating user'
    })
  }
})

/**
 * Email validation helper function
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default router