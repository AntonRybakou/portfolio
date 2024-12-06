"use client"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { Menu } from "lucide-react"
import Link from "next/link"

export const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          className="inline md:hidden"
          tabIndex={-1}
        >
          <Menu />
        </Button>
        <div className="flex gap-2 items-center">
          <Button asChild variant="link">
            <Link href={"/"}>Main</Link>
          </Button>
          <Button asChild variant="link">
            <Link href={"/expirience"}>Expirience</Link>
          </Button>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
