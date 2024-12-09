import { Nunito } from 'next/font/google'
import './globals.css'
import { NavHeader } from '@/components/layout/nav-header'
import { Providers } from '@/components/providers/providers'

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
          <div className="flex flex-col min-h-screen">
            <NavHeader />
            <main className="flex-1 flex flex-col mx-auto max-w-screen-lg w-full">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
