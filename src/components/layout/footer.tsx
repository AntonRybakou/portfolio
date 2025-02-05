import { ThemeSwitcher } from '@/components/layout/theme-switcher'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="w-full h-14 my-4 z-10">
      <div className="max-w-(--breakpoint-lg) mx-auto flex h-14 items-center justify-between px-4 lg:px-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anton Rybakou
        </p>
        <div className="flex flex-row items gap-4">
          <Link
            href="https://github.com/AntonRybakou/"
            className="text-sm text-muted-foreground"
            target="_blank"
          >
            <Image
              src="/icons/github.svg"
              alt="Github"
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>

          <Link
            href="https://linkedin.com/in/antonrybakov"
            className="text-sm text-muted-foreground"
            target="_blank"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>

          <Link
            href="https://t.me/untosha"
            className="text-sm text-muted-foreground"
            target="_blank"
          >
            <Image
              src="/icons/telegram.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>

          <Link
            href="mailto:anton.rybakou@gmail.com"
            className="text-sm text-muted-foreground"
            target="_blank"
          >
            <Image
              src="/icons/gmail.svg"
              alt="Gmail"
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
