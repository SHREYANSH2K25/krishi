"use client"

import React from "react"

export function Card({ children, className }) {
  return (
    <div className={`rounded-lg shadow p-4 bg-white ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
}

export function CardDescription({ children, className }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
}

export function CardContent({ children, className }) {
  return <div className={`p-2 ${className}`}>{children}</div>
}
