'use client'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
