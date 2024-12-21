'use client'
import { badgeVariants } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import IconCloud from '@/components/ui/icon-cloud'
import { SKILLS } from '@/constants/skills'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const SkillsInnerPage = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const skills = SKILLS.map((skill) => skill.icon)

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="w-full">
        <IconCloud iconSlugs={skills} />
      </div>

      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-wrap gap-4 items-start justify-start">
          {SKILLS.map((skill) => {
            return (
              <Button asChild key={skill.title} variant="link">
                <Link
                  key={skill.title}
                  className={cn(
                    'gap-1 cursor-pointer',
                    badgeVariants({ variant: 'outline' }),
                  )}
                  href={skill.href}
                  target="_blank"
                >
                  <Image
                    src={`/icons/${skill.icon}.svg`}
                    alt={`${skill.title} icon`}
                    width={24}
                    height={24}
                    className={cn(
                      theme === 'light'
                        ? 'brightness-0'
                        : 'brightness-0 invert',
                    )}
                  />
                  {skill.title}
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
