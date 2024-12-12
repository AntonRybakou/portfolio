import { ThemeSwitcher } from '@/components/layout/theme-switcher'

export const Footer = () => {
  return (
    <footer className="w-full h-14 my-4">
      <div className="max-w-screen-lg mx-auto flex h-14 items-center justify-between px-4 lg:px-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anton Rybakou
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
