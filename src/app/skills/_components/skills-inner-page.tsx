'use client'
import IconCloud from '@/components/ui/icon-cloud'
import { useEffect, useState } from 'react'
import { SkillsList } from '@/app/skills/_components/skills-list'
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
    <div className="grid grid-cols-2 gap-4">
      <div className="w-full">
        <IconCloud iconSlugs={skills} />
      </div>

      <div className="w-full flex flex-col justify-center">
        <SkillsList />
      </div>
    </div>
  )
}
