"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card.jsx"
import { Sprout, Shield, TrendingUp, CloudRain, Droplets, BarChart3 } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"

const icons = [Sprout, Shield, TrendingUp, CloudRain, Droplets, BarChart3]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{t.features.heading}</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{t.features.subheading}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.features.list.map((feature, index) => {
            const Icon = icons[index]
            return (
              <Card key={index} className="relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
