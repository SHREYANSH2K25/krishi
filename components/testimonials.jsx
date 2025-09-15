"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card.jsx"
import { Button } from "./ui/button.jsx"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Organic Farm Owner",
    location: "California, USA",
    content: "CropAdvisor has revolutionized how I manage my 200-acre organic farm. The AI-powered pest detection caught early blight before I even noticed it, saving my entire tomato crop.",
    rating: 5,
    avatar: "👩‍🌾",
  },
  {
    name: "Miguel Rodriguez",
    role: "Corn & Soybean Farmer",
    location: "Iowa, USA",
    content: "The market price predictions have been incredibly accurate. I increased my profits by 23% last season by timing my sales based on CropAdvisor's recommendations.",
    rating: 5,
    avatar: "👨‍🌾",
  },
  {
    name: "David Chen",
    role: "Sustainable Agriculture Consultant",
    location: "Ontario, Canada",
    content: "I recommend CropAdvisor to all my clients. The crop rotation suggestions have helped them improve soil health while maintaining high yields. It's a game-changer.",
    rating: 5,
    avatar: "👨‍💼",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{t.testimonials.heading}</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{t.testimonials.subheading}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Card className="border-0 bg-card shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="mb-6 flex justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-card-foreground mb-8 text-pretty">"{testimonials[currentIndex].content}"</blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-3xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-left">
                  <div className="font-semibold text-card-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent"><ChevronLeft className="h-4 w-4" /></Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`} />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
