/**
 * API Demo Page
 * 
 * Interactive demonstration of the REST API endpoints available
 * in the Express SSR application. Allows users to test API calls
 * and see real responses.
 * 
 * Features:
 * - Live API endpoint testing
 * - Response visualization
 * - Form-based API interactions
 * - Error handling demonstration
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Server, 
  Users, 
  Plus, 
  Activity,
  AlertCircle,
  CheckCircle2,
  Loader2
} from 'lucide-react'

/**
 * Interface for API response data
 */
interface ApiResponse {
  success?: boolean
  data?: any
  error?: string
  message?: string
  count?: number
}

/**
 * Interface for user data
 */
interface User {
  id: number
  name: string
  email: string
  createdAt?: string
}

/**
 * API Demo Page Component
 * 
 * Interactive page for testing and demonstrating the API endpoints
 * 
 * @returns {JSX.Element} The API demo page component
 */
const ApiDemoPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [healthData, setHealthData] = useState<any>(null)
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  // Form state for creating new users
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  /**
   * Generic API call handler with loading and error states
   */
  const handleApiCall = async (
    endpoint: string, 
    method: 'GET' | 'POST' = 'GET', 
    body?: any,
    key: string = endpoint
  ) => {
    setLoading(prev => ({ ...prev, [key]: true }))
    setError(null)
    setSuccess(null)

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      if (body) {
        options.body = JSON.stringify(body)
      }

      const response = await fetch(`/api${endpoint}`, options)
      const data: ApiResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`)
      }

      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }))
    }
  }

  /**
   * Fetch health check data
   */
  const fetchHealthCheck = async () => {
    try {
      const data = await handleApiCall('/health', 'GET', undefined, 'health')
      setHealthData(data)
      setSuccess('Health check successful!')
    } catch (err) {
      console.error('Health check failed:', err)
    }
  }

  /**
   * Fetch all users
   */
  const fetchUsers = async () => {
    try {
      const data = await handleApiCall('/users', 'GET', undefined, 'users')
      if (data.data) {
        setUsers(data.data)
        setSuccess(`Fetched ${data.count || data.data.length} users successfully!`)
      }
    } catch (err) {
      console.error('Failed to fetch users:', err)
    }
  }

  /**
   * Create a new user
   */
  const createUser = async () => {
    if (!newUser.name.trim() || !newUser.email.trim()) {
      setError('Please fill in both name and email fields')
      return
    }

    try {
      const data = await handleApiCall('/users', 'POST', newUser, 'createUser')
      if (data.data) {
        setUsers(prev => [...prev, data.data])
        setNewUser({ name: '', email: '' })
        setSuccess('User created successfully!')
      }
    } catch (err) {
      console.error('Failed to create user:', err)
    }
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Server className="w-3 h-3 mr-1" />
            API Demo
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            REST API Demonstration
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test the API endpoints and see real responses. This demonstrates 
            the full-stack capabilities of the Express SSR application.
          </p>
        </div>

        {/* Status Messages */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="health" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="health">Health Check</TabsTrigger>
            <TabsTrigger value="users">View Users</TabsTrigger>
            <TabsTrigger value="create">Create User</TabsTrigger>
          </TabsList>

          {/* Health Check Tab */}
          <TabsContent value="health">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Server Health Check
                </CardTitle>
                <CardDescription>
                  Test the server health endpoint to see system information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={fetchHealthCheck}
                  disabled={loading.health}
                  className="w-full sm:w-auto"
                >
                  {loading.health ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <Activity className="mr-2 h-4 w-4" />
                      Check Server Health
                    </>
                  )}
                </Button>

                {healthData && (
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Response:</h4>
                    <pre className="text-sm overflow-auto">
                      {JSON.stringify(healthData, null, 2)}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Fetch and display all users from the API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={fetchUsers}
                  disabled={loading.users}
                  className="w-full sm:w-auto"
                >
                  {loading.users ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Users className="mr-2 h-4 w-4" />
                      Fetch Users
                    </>
                  )}
                </Button>

                {users.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold">Users ({users.length}):</h4>
                    <div className="grid gap-3">
                      {users.map((user) => (
                        <div key={user.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium">{user.name}</h5>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                              {user.createdAt && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  Created: {new Date(user.createdAt).toLocaleString()}
                                </p>
                              )}
                            </div>
                            <Badge variant="outline">ID: {user.id}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create User Tab */}
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Create New User
                </CardTitle>
                <CardDescription>
                  Add a new user via the POST /api/users endpoint
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={newUser.name}
                      onChange={(e) => setNewUser(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={newUser.email}
                      onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <Button 
                  onClick={createUser}
                  disabled={loading.createUser || !newUser.name.trim() || !newUser.email.trim()}
                  className="w-full sm:w-auto"
                >
                  {loading.createUser ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Create User
                    </>
                  )}
                </Button>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Request Body:</h4>
                  <pre className="text-sm">
                    {JSON.stringify(newUser, null, 2)}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* API Documentation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Available Endpoints</CardTitle>
            <CardDescription>
              Documentation for all available API endpoints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">GET</Badge>
                  <code className="text-sm">/api/health</code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Returns server health status and system information
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">GET</Badge>
                  <code className="text-sm">/api/users</code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Retrieves all users with success response format
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">POST</Badge>
                  <code className="text-sm">/api/users</code>
                </div>
                <p className="text-sm text-muted-foreground">
                  Creates a new user with name and email validation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ApiDemoPage