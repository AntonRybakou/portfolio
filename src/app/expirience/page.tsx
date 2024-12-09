import { ExpirienceTimeline } from '@/app/expirience/_components/expirience-timeline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expirience - Anton Rybakou',
  description: 'Page with expirience timeline',
}

export default function Expirience() {
  return <ExpirienceTimeline />
}
