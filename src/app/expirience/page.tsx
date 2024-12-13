import { ExpirienceTimeline } from '@/app/expirience/_components/expirience-timeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expirience - Anton Rybakou',
  description: 'Work expirience',
}

export default function Expirience() {
  return <ExpirienceTimeline />
}
