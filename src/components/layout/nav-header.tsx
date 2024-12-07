'use client'
import { ThemeSwitcher } from '@/components/layout/theme-switcher'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 dark:border-border">
      <div className="max-w-screen-lg mx-auto flex h-14 items-center justify-between px-4 lg:px-0">
        <div />
        <nav>
          <ul className="flex gap-8 items-center">
            <li>
              <Button asChild variant="link" className="p-0 text-lg">
                <Link href={'/'}>About</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-0 text-lg">
                <Link href={'/skills'}>Skills</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-0 text-lg">
                <Link href={'/expirience'}>Expirience</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
