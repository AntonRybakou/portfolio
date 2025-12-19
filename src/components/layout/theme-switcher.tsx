'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ToggleGroup
      size="sm"
      type="single"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value)
      }}
      className="border rounded-full p-1 w-fit text-muted-foreground gap-2"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light mode"
        className="rounded-full border-none p-2"
      >
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="System mode"
        className="rounded-full border-none p-2"
      >
        <Monitor />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Dark mode"
        className="rounded-full border-none p-2"
      >
        <Moon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
