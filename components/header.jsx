"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button.jsx"
import { useLanguage } from "../context/LanguageContext.jsx"

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
]

export default function Header() {
  const { language, changeLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState("login") // "login" or "signup"

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) setTheme(storedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
    document.documentElement.style.transition = "background 0.3s, color 0.3s"
  }, [theme])

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")
  const openAuthModal = (mode) => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }
  const closeAuthModal = () => setShowAuthModal(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold text-primary">🌱 Krishi Yantra</div>

        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.testimonials}</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors" aria-label="Toggle theme">
            {theme === "light" ? <span role="img">🌙</span> : <span role="img">☀️</span>}
          </button>

          <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-sm transition-colors">
            {LANGUAGES.map((lang) => <option key={lang.code} value={lang.code}>{lang.label}</option>)}
          </select>

          {/* Login / Signup buttons */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => openAuthModal("login")} className="px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition">Login</button>
            <button onClick={() => openAuthModal("signup")} className="px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">Signup</button>
          </div>

          <div className="md:hidden">
            <Button size="icon" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖️" : "☰"}</Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.testimonials}</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</a>

            {/* Login / Signup buttons for mobile */}
            <div className="flex gap-2 mt-2">
              <button onClick={() => openAuthModal("login")} className="px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition">Login</button>
              <button onClick={() => openAuthModal("signup")} className="px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">Signup</button>
            </div>
          </nav>
        </div>
      )}

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg w-80 shadow-lg relative">
            <button onClick={closeAuthModal} className="absolute top-2 right-2 text-muted-foreground hover:text-primary transition">✖️</button>
            <h2 className="text-xl font-bold mb-4">{authMode === "login" ? "Login" : "Signup"}</h2>

            <form className="flex flex-col gap-3">
              {authMode === "signup" && (
                <input type="text" placeholder="Full Name" className="p-2 border rounded border-border focus:outline-none focus:ring-2 focus:ring-primary" />
              )}
              <input type="email" placeholder="Email" className="p-2 border rounded border-border focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="password" placeholder="Password" className="p-2 border rounded border-border focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition">
                {authMode === "login" ? "Login" : "Signup"}
              </button>
            </form>

            <p className="mt-3 text-sm text-muted-foreground text-center">
              {authMode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button className="text-primary font-semibold" onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}>
                {authMode === "login" ? "Signup" : "Login"}
              </button>
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
