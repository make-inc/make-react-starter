import React from 'react'
import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">make.inc</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navigation