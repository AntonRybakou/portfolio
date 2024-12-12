import { InnerPage } from '@/app/skills/_components/inner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - Anton Rybakou',
  description: 'Page with list of tools and technologies',
}

export default function SkillsPage() {
  return (
    <div>
      <InnerPage />
    </div>
  )
}
