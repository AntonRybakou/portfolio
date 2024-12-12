'use client'
import IconCloud from '@/components/ui/icon-cloud'
import { SKILLS } from '@/constants/skills'
import { useEffect, useState } from 'react'

export const InnerPage = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <p>Skills</p>
      <IconCloud iconSlugs={SKILLS} />
    </div>
  )
}
