"use client"

import { Button } from "./ui/button.jsx"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border bg-card px-4 py-2 text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-accent"></span>
            <span className="text-card-foreground">{t.hero.badge}</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            {t.hero.heading.split(" ")[0]} <span className="text-primary">{t.hero.heading.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            {t.hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 py-3">{t.hero.getStarted}<ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent"><Play className="mr-2 h-4 w-4" />{t.hero.watchDemo}</Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">{t.hero.trusted}</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">🌾 FarmCorp</div>
              <div className="text-2xl font-bold text-muted-foreground">🚜 AgriTech</div>
              <div className="text-2xl font-bold text-muted-foreground">🌱 GreenFields</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
