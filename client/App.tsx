import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from '@/components/Navigation'

const HomePage = React.lazy(() => import('./pages/home'))
const NotFoundPage = React.lazy(() => import('./pages/not-found'))

const LoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      Loading...
    </div>
  </div>
)

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App