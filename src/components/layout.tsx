'use client'

import { ThemeToggle } from './theme-toggle'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="flex flex-1 items-center justify-between">
            <nav className="flex items-center space-x-6">
              <span className="font-semibold">Dashboard</span>
            </nav>
            <nav className="flex items-center">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-6">
        {children}
      </main>
    </div>
  )
}
