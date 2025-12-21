'use client'
import Link from 'next/link'

export const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/40 dark:border-border">
      <div className="max-w-(--breakpoint-lg) mx-auto flex h-14 items-center justify-center px-4 lg:px-0">
        <nav>
          <ul className="flex gap-10 items-center">
            <li>
              <Link href={'/'} className="p-0 md:text-lg">
                About
              </Link>
            </li>
            <li>
              <Link href={'/skills'} className="p-0 md:text-lg">
                Skills
              </Link>
            </li>
            <li>
              <Link href={'/experience'} className="p-0 md:text-lg">
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
