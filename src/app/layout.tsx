import { Nunito } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/shared/components/layout/footer'
import { NavHeader } from '@/shared/components/layout/nav-header'
import { Providers } from '@/shared/components/providers/providers'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-dvh">
            <NavHeader />
            <main className="flex-1 flex flex-col mx-auto max-w-(--breakpoint-lg) w-full z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
