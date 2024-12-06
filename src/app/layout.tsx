import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { NavHeader } from "@/components/layout/nav-header"
import { Providers } from "@/components/providers/providers"
import { ThemeProvider } from "@/components/providers/theme-provider"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Anton Rybakou",
  description: "Curriculum Vitae",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
