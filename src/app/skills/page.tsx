import { SkillsInnerPage } from '@/app/skills/_components/skills-inner-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - Anton Rybakou',
  description: 'Page with list of tools and technologies',
}

export default function SkillsPage() {
  return <SkillsInnerPage />
}
