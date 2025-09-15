"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card.jsx"
import { Sprout, Shield, TrendingUp, CloudRain, Droplets, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Sprout,
    title: "Crop Plan",
    description:
      "AI-driven crop planning and rotation recommendations based on soil conditions, weather patterns, and market demand.",
    benefits: ["Optimize planting schedules", "Maximize land utilization", "Reduce resource waste"],
  },
  {
    icon: Shield,
    title: "Pest Guard",
    description:
      "Advanced pest and disease detection using computer vision and machine learning for early intervention.",
    benefits: ["Early threat detection", "Targeted treatment plans", "Reduce crop losses"],
  },
  {
    icon: TrendingUp,
    title: "Market Prices",
    description: "Real-time market analysis and price forecasting to help you make informed selling decisions.",
    benefits: ["Price trend analysis", "Optimal selling timing", "Maximize profit margins"],
  },
  {
    icon: CloudRain,
    title: "Weather Insights",
    description:
      "Hyperlocal weather forecasting and climate risk assessment to protect your crops from extreme conditions.",
    benefits: ["7-day precision forecasts", "Storm alerts & warnings", "Climate adaptation strategies"],
  },
  {
    icon: Droplets,
    title: "Irrigation Management",
    description:
      "Smart water management system that optimizes irrigation schedules based on soil moisture and weather data.",
    benefits: ["Water usage optimization", "Automated scheduling", "Drought risk mitigation"],
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description: "Comprehensive yield prediction and performance tracking to maximize your harvest potential.",
    benefits: ["Harvest forecasting", "Performance benchmarking", "ROI optimization"],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need for modern farming
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our comprehensive platform combines cutting-edge AI with agricultural expertise to deliver actionable insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
