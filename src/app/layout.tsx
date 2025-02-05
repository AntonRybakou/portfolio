import { Nunito } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/layout/footer'
import { NavHeader } from '@/components/layout/nav-header'
import { Providers } from '@/components/providers/providers'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
          <div className="flex flex-col min-h-[100dvh]">
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
