"use client"

import { Button } from "./ui/button.jsx"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-accent"></span>
            <span className="text-card-foreground">Powered by Advanced AI Technology</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            AI-powered Decisions for <span className="text-primary">Smarter Farming</span>
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            Transform your agricultural operations with intelligent crop planning, pest management, and market insights.
            Make data-driven decisions that maximize yield and profitability.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 py-3">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by 10,000+ farmers worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">🌾 FarmCorp</div>
              <div className="text-2xl font-bold text-muted-foreground">🚜 AgriTech</div>
              <div className="text-2xl font-bold text-muted-foreground">🌱 GreenFields</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[800px] w-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
