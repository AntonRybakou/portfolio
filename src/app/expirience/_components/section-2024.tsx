import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Section2024 = () => {
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
        <b>Period:</b> Dec-2023 – present
      </p>
      <p>
        <b>Project description:</b> A school management plaform for accounting,
        attendance tracking and communication with parents via SMS reminders
      </p>
      <p>
        <b>Role:</b> Frontend Developer (middle)
      </p>
      <p>
        <b>Responsibilities:</b>
      </p>
      <ul className="ml-6 list-disc [&>li]:mt-1">
        <li>
          Architected and developed a scalable web application from scratch,
          adhering to modern techniques like FSD and DRY principles
        </li>
        <li>
          Designed and developed the user interface for the school management
          platform, ensuring a seamless and intuitive user experience
        </li>
        <li>
          Implemented responsive design principles and optimized the platform
          for mobile devices.
        </li>
        <li>
          Developed and maintained the backend functionality, including data
          storage, retrieval, and processing
        </li>
        <li>
          Collaborated with stakeholders to gather requirements and deliver
          actionable solutions
        </li>
        <li>
          Performed testing and debugging to ensure high-quality standards and
          maintainable code
        </li>
        <li>
          Reviewed code for quality, performance, and adherence to best
          practices, promoting team collaboration
        </li>
        <li>
          Ensured responsiveness and cross-browser compatibility for optimal
          performance across devices
        </li>
        <li>Optimized large datasets for efficient display and interaction</li>
      </ul>
      <p>
        <b>Technologies and tools:</b> TypeScript, React, Next.js, TailwindCSS,
        shadcn/ui, RadixUI, i18next, Zustand, SWR, Tanstack Querry, Tanstack
        Tables, Recharts, React-hook-form, Zod, YouTrack, GitHub
      </p>
    </Card>
  )
}
