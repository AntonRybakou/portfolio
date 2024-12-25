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
        <li>
          Build scalable and maintainable web applications according to the
          requirements
        </li>
        <li>
          Collaborate with cross-functional teams to deliver high-quality
          software solutions
        </li>
      </ul>
      <p>
        <b>Technologies and tools:</b> React, Vite, Next.js, TypeScript,
        TailwindCSS, shadcn/ui, RadixUI, i18next, Tanstack Router / Querry /
        Tables, React-hook-form, Zod, GitLab, Jira,
      </p>
    </Card>
  )
}
