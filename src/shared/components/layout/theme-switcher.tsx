'use client'

import { Monitor, Moon02Icon, Sun } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTheme } from 'next-themes'
import { Toggle } from '@/shared/shadcn/toggle'
import { ToggleGroup } from '@/shared/shadcn/toggle-group'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <ToggleGroup
      multiple={false}
      defaultValue={[theme]}
      value={[theme]}
      onValueChange={(value) => {
        if (value) setTheme(value[0])
      }}
      className="border rounded-full p-1 w-fit text-muted-foreground gap-2"
    >
      <Toggle
        value="light"
        aria-label="Light mode"
        className="rounded-full border-none p-2"
      >
        <HugeiconsIcon icon={Sun} className='size-5' />
      </Toggle>
      <Toggle
        value="system"
        aria-label="System mode"
        className="rounded-full border-none p-2"
      >
        <HugeiconsIcon icon={Monitor} className='size-5' />
      </Toggle>
      <Toggle
        value="dark"
        aria-label="Dark mode"
        className="rounded-full border-none p-2"
      >
        <HugeiconsIcon icon={Moon02Icon} className='size-5' />
      </Toggle>
    </ToggleGroup>
  )
}
