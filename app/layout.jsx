import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import ClientWrapper from "../components/ClientWrapper.jsx"

export const metadata = {
  title: "CropAdvisor - AI-powered Decisions for Smarter Farming",
  description: "Comprehensive Crop Advisory Platform with AI-powered insights for modern agriculture",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  )
}
