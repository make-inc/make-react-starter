/**
 * 404 Not Found Page
 * 
 * A user-friendly error page displayed when users navigate to
 * routes that don't exist in the application.
 * 
 * Features:
 * - Clear error messaging
 * - Navigation back to main areas
 * - Helpful suggestions
 * - Responsive design
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  MapPin,
  AlertTriangle
} from 'lucide-react'

/**
 * 404 Not Found Page Component
 * 
 * Displayed when users navigate to non-existent routes.
 * Provides helpful navigation options and suggestions.
 * 
 * @returns {JSX.Element} The 404 error page component
 */
const NotFoundPage: React.FC = () => {
  const suggestions = [
    {
      title: 'Home Page',
      description: 'Return to the main landing page',
      link: '/',
      icon: <Home className="h-5 w-5" />
    },
    {
      title: 'Component Gallery',
      description: 'Explore all available UI components',
      link: '/components',
      icon: <Search className="h-5 w-5" />
    },
    {
      title: 'API Demo',
      description: 'Test the REST API endpoints',
      link: '/api-demo',
      icon: <MapPin className="h-5 w-5" />
    },
    {
      title: 'About',
      description: 'Learn about this application',
      link: '/about',
      icon: <AlertTriangle className="h-5 w-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Code Display */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle>Maybe you're looking for:</CardTitle>
            <CardDescription>
              Here are some popular pages you might want to visit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion, index) => (
                <Link 
                  key={index}
                  to={suggestion.link}
                  className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {suggestion.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">
                        {suggestion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {suggestion.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            If you believe this is an error, please check the URL or contact support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage