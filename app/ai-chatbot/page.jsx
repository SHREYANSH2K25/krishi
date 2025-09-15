"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function AIChatbot() {
  const searchParams = useSearchParams()
  const imageData = searchParams.get("image")
  const [result, setResult] = useState("Analyzing...")

  useEffect(() => {
    if (imageData) {
      setTimeout(() => {
        setResult("Detected early-stage leaf blight. Suggested action: Use organic fungicide.")
      }, 2000)
    }
  }, [imageData])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Crop Analysis</h1>
      {imageData && <img src={imageData} alt="Captured crop" className="w-64 rounded shadow mb-4" />}
      <p className="text-lg">{result}</p>
    </div>
  )
}
