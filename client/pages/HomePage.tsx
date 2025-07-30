/**
 * Home Page Component
 * 
 * The main landing page of the Express SSR application.
 * Showcases the application's key features and provides navigation
 * to other sections of the app.
 * 
 * Features:
 * - Welcome message and app overview
 * - Feature highlights grid
 * - Quick navigation to demo pages
 * - Responsive design
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Palette, Code, Server } from 'lucide-react'

/**
 * Home Page Component
 * 
 * The main landing page that introduces users to the application
 * and provides navigation to key features and demo pages.
 * 
 * @returns {JSX.Element} The home page component
 */
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Express SSR App
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to your
            <span className="text-primary block">SSR Express App!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern, full-stack server-side rendered application built with 
            React, TypeScript, Express, Tailwind CSS, and Shadcn/ui components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/components">
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/api-demo">View API Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built with Modern Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-2" />
                <CardTitle>SSR Ready</CardTitle>
                <CardDescription>
                  Server-side rendering for optimal performance and SEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fast initial load</li>
                  <li>• SEO optimized</li>
                  <li>• Better UX</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Beautiful UI</CardTitle>
                <CardDescription>
                  Tailwind CSS + Shadcn/ui for stunning interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 22+ Components</li>
                  <li>• Dark mode ready</li>
                  <li>• Accessible</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  Full type safety across the entire stack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Type-safe APIs</li>
                  <li>• Better DX</li>
                  <li>• Fewer bugs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Fast Development</CardTitle>
                <CardDescription>
                  Hot reload, fast builds, and modern tooling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vite powered</li>
                  <li>• HMR enabled</li>
                  <li>• Express backend</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore the App</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Component Gallery</CardTitle>
                <CardDescription>
                  Browse all available Shadcn/ui components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/components">View Components</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>API Demonstration</CardTitle>
                <CardDescription>
                  Test the REST API endpoints and see responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/api-demo">Try API</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>About This App</CardTitle>
                <CardDescription>
                  Learn about the architecture and technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage