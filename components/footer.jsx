"use client"

import { Button } from "./ui/button.jsx"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "../context/LanguageContext.jsx"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">🌱</span>
              </div>
              <span className="text-xl font-bold text-primary">CropAdvisor</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">{t.footer.about}</p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="h-8 w-8"><Facebook className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="h-8 w-8"><Twitter className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="h-8 w-8"><Instagram className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="h-8 w-8"><Linkedin className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-card-foreground">{t.footer.quick}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.testimonials}</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-card-foreground">{t.footer.contact}</h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground"><Mail className="h-4 w-4" /><span>info@cropadvisor.com</span></div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground"><Phone className="h-4 w-4" /><span>+91 9876543210</span></div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /><span>123 Green Lane, Farmville</span></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-card-foreground">{t.footer.newsletter}</h3>
            <p className="text-sm text-muted-foreground text-pretty">{t.footer.newsletterDesc}</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="w-full rounded-lg border px-4 py-2 text-sm" />
              <Button size="sm">{t.footer.subscribe}</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">&copy; 2025 CropAdvisor. All rights reserved.</div>
      </div>
    </footer>
  )
}
