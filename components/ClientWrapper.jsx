"use client"

import { Suspense } from "react"
import { LanguageProvider } from "../context/LanguageContext.jsx"

export default function ClientWrapper({ children }) {
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </LanguageProvider>
  )
}
