/**
 * Navigation Component
 * 
 * Main navigation header for the Express SSR application.
 * Provides routing between different pages with active state indication.
 * 
 * Features:
 * - Responsive navigation menu
 * - Active link highlighting
 * - Mobile-friendly hamburger menu
 * - Accessibility support
 * 
 * @author Express SSR App
 * @version 1.0.0
 */

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  Home, 
  Palette, 
  Server, 
  Info,
  Code2
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Navigation item interface
 */
interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
  description?: string
}

/**
 * Navigation Component
 * 
 * Responsive navigation header with active state management
 * and mobile menu support.
 * 
 * @returns {JSX.Element} The navigation component
 */
const Navigation: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  // Navigation items configuration
  const navItems: NavItem[] = [
    {
      href: '/',
      label: 'Home',
      icon: <Home className="h-4 w-4" />,
      description: 'Main landing page'
    },
    {
      href: '/components',
      label: 'Components',
      icon: <Palette className="h-4 w-4" />,
      description: 'UI component gallery'
    },
    {
      href: '/api-demo',
      label: 'API Demo',
      icon: <Server className="h-4 w-4" />,
      description: 'REST API demonstration'
    },
    {
      href: '/about',
      label: 'About',
      icon: <Info className="h-4 w-4" />,
      description: 'Application information'
    }
  ]

  /**
   * Check if a nav item is currently active
   */
  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  /**
   * Handle mobile menu item click
   */
  const handleMobileItemClick = () => {
    setIsOpen(false)
  }

  /**
   * Navigation link component
   */
  const NavLink: React.FC<{ item: NavItem; onClick?: () => void }> = ({ item, onClick }) => (
    <Link
      to={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isActive(item.href)
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground"
      )}
    >
      {item.icon}
      {item.label}
      {isActive(item.href) && (
        <Badge variant="secondary" className="ml-auto text-xs">
          Current
        </Badge>
      )}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground">Express SSR</span>
              <Badge variant="secondary" className="ml-2 text-xs">
                v1.0.0
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-8">
                  {/* Mobile Brand */}
                  <div className="flex items-center gap-2 pb-4 border-b">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                      <Code2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground">Express SSR App</span>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        v1.0.0
                      </Badge>
                    </div>
                  </div>

                  {/* Mobile Navigation Items */}
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        <NavLink item={item} onClick={handleMobileItemClick} />
                        {item.description && (
                          <p className="text-xs text-muted-foreground ml-9 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile Footer */}
                  <div className="mt-auto pt-4 border-t">
                    <div className="text-xs text-muted-foreground">
                      <p>Built with React, TypeScript, Express</p>
                      <p>Styled with Tailwind CSS & Shadcn/ui</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation