import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Section2024_2 = () => {
  return (
    <Card className="p-6">
      <p>
        <b>Company:</b> Security Lab,{' '}
        <Button asChild variant="link" className="p-0 text-base">
          <Link href="https://securitylab.by/" target="_blank">
            https://securitylab.by/
          </Link>
        </Button>
      </p>
      <p>
        <b>Period:</b> Dec-2024 – present
      </p>
      <p>
        <b>Project description:</b> NDA
      </p>
      <p>
        <b>Role:</b> Frontend Developer (middle)
      </p>
      <p>
        <b>Responsibilities:</b>
      </p>
      <ul className="ml-6 list-disc [&>li]:mt-1">
        <li>Front-end stuff</li>
      </ul>
      <p>
        <b>Technologies and tools:</b> TypeScript, React, Next.js, TailwindCSS,
        shadcn/ui, RadixUI, i18next, Zustand, SWR, Tanstack Querry, Tanstack
        Tables, Recharts, React-hook-form, Zod, YouTrack, GitHub
      </p>
    </Card>
  )
}
