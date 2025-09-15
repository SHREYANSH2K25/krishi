"use client"

import React from "react"

export function Button({ children, onClick, className, variant, size }) {
  let base = "rounded px-4 py-2 font-medium transition-colors"
  let style = variant === "outline" ? "border border-primary text-primary hover:bg-primary/10" : "bg-primary text-primary-foreground hover:bg-primary/90"
  let sz = size === "lg" ? "px-6 py-3 text-lg" : size === "sm" ? "px-3 py-1 text-sm" : size === "icon" ? "p-2" : ""

  return (
    <button className={`${base} ${style} ${sz} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
