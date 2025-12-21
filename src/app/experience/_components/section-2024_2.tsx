import Link from 'next/link'
import { Card } from '@/shared/shadcn/card'

export const Section2024_2 = () => {
  return (
    <Card className="p-6">
      <p>
        <b>Company:</b> Security Lab,{' '}
        <Link href="https://securitylab.by/" target="_blank">
          https://securitylab.by/
        </Link>
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
        TailwindCSS, shadcn/ui, RadixUI, i18next, RTK Query, Tanstack Router /
        Querry / Tables, React-hook-form, Zod, GitLab, Jira,
      </p>
    </Card>
  )
}
