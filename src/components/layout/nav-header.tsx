'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/40 dark:border-border">
      <div className="max-w-(--breakpoint-lg) mx-auto flex h-14 items-center justify-center px-4 lg:px-0">
        <nav>
          <ul className="flex gap-10 items-center">
            <li>
              <Button asChild variant="link" className="p-0 md:text-lg">
                <Link href={'/'}>About</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-0 md:text-lg">
                <Link href={'/skills'}>Skills</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-0 md:text-lg">
                <Link href={'/experience'}>Experience</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
