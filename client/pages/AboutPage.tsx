/**
 * About Page Component
 * 
 * Provides detailed information about the Express SSR application,
 * its architecture, technologies used, and features.
 * 
 * Features:
 * - Application overview and architecture
 * - Technology stack details
 * - Performance and security highlights
 * - Development workflow information
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Server, 
  Code, 
  Palette, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Smartphone
} from 'lucide-react'

/**
 * About Page Component
 * 
 * Detailed information about the application architecture,
 * technologies, and features.
 * 
 * @returns {JSX.Element} The about page component
 */
const AboutPage: React.FC = () => {
  const technologies = [
    { name: 'React 19', description: 'Latest React with concurrent features' },
    { name: 'TypeScript', description: 'Full type safety across the stack' },
    { name: 'Express.js', description: 'Fast, unopinionated web framework' },
    { name: 'Vite', description: 'Next generation build tool' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Shadcn/ui', description: '22+ beautiful, accessible components' }
  ]

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Server-Side Rendering',
      description: 'Pre-rendered HTML for faster initial loads and better SEO'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Hot Module Replacement',
      description: 'Instant updates during development without losing state'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Type Safety',
      description: 'End-to-end TypeScript for fewer runtime errors'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'SEO Optimized',
      description: 'Server-rendered content for better search engine visibility'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach with Tailwind CSS utilities'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'REST API',
      description: 'Built-in API routes with validation and error handling'
    }
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            About This Application
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Express SSR App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, production-ready template for building server-side rendered 
            React applications with Express.js, TypeScript, and modern tooling.
          </p>
        </div>

        {/* Architecture Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Architecture Overview
            </CardTitle>
            <CardDescription>
              How this application is structured and organized
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Client-Side</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React 19 with TypeScript</li>
                  <li>• React Router for navigation</li>
                  <li>• Shadcn/ui component library</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Vite for bundling and HMR</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Server-Side</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Express.js web server</li>
                  <li>• Server-side rendering (SSR)</li>
                  <li>• RESTful API endpoints</li>
                  <li>• TypeScript compilation</li>
                  <li>• Static file serving</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Technology Stack
            </CardTitle>
            <CardDescription>
              Modern technologies powering this application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="flex-1">
                    <h4 className="font-semibold">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Key Features
            </CardTitle>
            <CardDescription>
              What makes this application special
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Development Info */}
        <Card>
          <CardHeader>
            <CardTitle>Development Information</CardTitle>
            <CardDescription>
              Details about the development setup and workflow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Project Structure</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>├── client/          # React frontend code</div>
                <div>├── server/          # Express backend code</div>
                <div>├── shared/          # Shared utilities</div>
                <div>└── dist/            # Built files</div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Available Scripts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-sm">npm run dev</code>
                  <p className="text-sm text-muted-foreground mt-1">Start development server</p>
                </div>
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-sm">npm run build</code>
                  <p className="text-sm text-muted-foreground mt-1">Build for production</p>
                </div>
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-sm">npm run start</code>
                  <p className="text-sm text-muted-foreground mt-1">Start production server</p>
                </div>
                <div>
                  <code className="bg-muted px-2 py-1 rounded text-sm">npm run preview</code>
                  <p className="text-sm text-muted-foreground mt-1">Build and preview</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage