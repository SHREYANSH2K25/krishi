"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { TRANSLATIONS } from "./i18n.js"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const storedLang = localStorage.getItem("language")
    if (storedLang) setLanguage(storedLang)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const changeLanguage = (lang) => setLanguage(lang)
  const t = TRANSLATIONS[language]

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
