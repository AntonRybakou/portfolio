import { ThemeSwitcher } from '@/components/layout/theme-switcher'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="w-full h-14 my-4">
      <div className="max-w-screen-lg mx-auto flex h-14 items-center justify-between px-4 lg:px-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anton Rybakou
        </p>
        <div className="flex flex-row items gap-2">
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
              className="dark:invert hover:brightness-0 hover:invert-[.45] hover:sepia hover:saturate-[600%] hover:hue-rotate-[350deg] transition-all duration-300"
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
              className="dark:invert hover:brightness-0 hover:invert-[.45] hover:sepia hover:saturate-[600%] hover:hue-rotate-[350deg] transition-all duration-300"
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
              className="dark:invert hover:brightness-0 hover:invert-[.45] hover:sepia hover:saturate-[600%] hover:hue-rotate-[350deg] transition-all duration-300"
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
              className="dark:invert hover:brightness-0 hover:invert-[.45] hover:sepia hover:saturate-[600%] hover:hue-rotate-[350deg] transition-all duration-300"
            />
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
