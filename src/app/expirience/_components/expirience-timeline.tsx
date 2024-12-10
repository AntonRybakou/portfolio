'use client'
import { Section2022 } from '@/app/expirience/_components/section-2022'
import { Section2022_2 } from '@/app/expirience/_components/section-2022_2'
import { Section2023 } from '@/app/expirience/_components/section-2023'
import { Section2024 } from '@/app/expirience/_components/section-2024'
import { Timeline } from '@/components/ui/timeline'
import React from 'react'

export const ExpirienceTimeline = () => {
  const data = {
    title: 'Changelog of my journey',
    description:
      'There are many things I have learned and experienced over the years. Here is the latest.',
    data: [
      {
        date: '2024',
        content: <Section2024 />,
      },
      {
        date: '2023',
        content: <Section2023 />,
      },
      {
        date: '2022',
        content: <Section2022_2 />,
      },
      {
        date: '2022',
        content: <Section2022 />,
      },
    ],
  }

  return (
    <Timeline
      title={data.title}
      description={data.description}
      data={data.data}
    />
  )
}
