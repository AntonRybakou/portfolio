import type { Metadata } from 'next'
import { ExperienceTimeline } from '@/app/experience/_components/experience-timeline'

export const metadata: Metadata = {
  title: 'Experience - Anton Rybakou',
  description: 'Work experience',
}

export default function Experience() {
  return <ExperienceTimeline />
}
