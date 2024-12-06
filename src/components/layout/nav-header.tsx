"use client"
import { ThemeSwitcher } from "@/components/layout/theme-switcher"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 dark:border-border">
      <div className="flex h-14 items-center justify-between px-4">
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
