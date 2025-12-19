'use client'

import { useEffect, useState } from 'react'
import { SkillsList } from '@/app/skills/_components/skills-list'
import IconCloud from '@/components/ui/icon-cloud'
import { SKILLS } from '@/constants/skills'

export const SkillsInnerPage = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const skills = SKILLS.map((skill) => skill.icon)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full order-2 md:order-1">
        <IconCloud iconSlugs={skills} />
      </div>

      <div className="w-full flex flex-col p-8 md:p-4 justify-center order-1 md:order-2">
        <SkillsList />
      </div>
    </div>
  )
}
