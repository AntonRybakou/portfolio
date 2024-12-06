"use client"
import { ThemeProvider } from "@/components/providers/theme-provider"
import type { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
