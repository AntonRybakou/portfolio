import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Section2023 = () => {
  return (
    <Card className="p-6">
      <p>
        <b>Company:</b> Humandev IP Limited,{' '}
        <Button asChild variant="link" className="p-0 text-base">
          <Link href="https://seymo.ai/" target="_blank">
            https://seymo.ai/
          </Link>
        </Button>
      </p>
      <p>
        <b>Period:</b> Mar-2023 – Dec-2023
      </p>
      <p>
        <b>Project description:</b> A comprehensive platform for educators to
        create, assign, and grade student tests efficiently. The platform
        includes tools for automated answer recognition from scanned documents
        and photos, PDF generation for test distribution, and detailed reporting
        for performance analysis
      </p>
      <p>
        <b>Role:</b> Frontend Developer (project lead)
      </p>
      <p>
        <b>Responsibilities:</b>
      </p>
      <ul className="ml-6 list-disc [&>li]:mt-1">
        <li>
          Managed the development team by creating and assigning tasks,
          monitoring progress, and ensuring deadlines were met
        </li>
        <li>
          Architected the web application, defining its structure and ensuring
          scalability and maintainability
        </li>
        <li>
          Designed and developed intuitive UX/UI, translating design concepts
          into functional, responsive code
        </li>
        <li>
          Contributed to the architecture of the database and APIs, optimizing
          data flow and system integration
        </li>
      </ul>
      <p>
        <b>Technologies and tools:</b> TypeScript, React, Next.js, TailwindCSS,
        Zustand, SWR, React-hook-form, Zod, YouTrack, GitHub
      </p>
    </Card>
  )
}
