"use client"

import { useState } from "react"
import { Button } from "./ui/button.jsx"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold text-primary">🌱 Krishi Yantra</div>

        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <Button size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖️" : "☰"}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
