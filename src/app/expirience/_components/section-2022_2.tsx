import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Section2022_2 = () => {
  return (
    <Card className="p-6">
      <p>
        <b>Company:</b> Soft Group Solutions,{' '}
        <Button asChild variant="link" className="p-0 text-base">
          <Link href="https://softgroupsolution.com/" target="_blank">
            https://softgroupsolution.com/
          </Link>
        </Button>
      </p>
      <p>
        <b>Period:</b> Sep-2022 – Mar-2023
      </p>
      <p>
        <b>Project description:</b> A school management plaform for accounting,
        attendance tracking and communication with parents via SMS reminders
      </p>
      <p>
        <b>Role:</b> Frontend Developer (junior)
      </p>
      <p>
        <b>Responsibilities:</b>
      </p>
      <ul className="ml-6 list-disc [&>li]:mt-1">
        <li>
          Designed and implemented reusable, modular components to ensure
          consistency and efficiency across the application, collaborating
          closely with design teams to align with UI/UX standards
        </li>
        <li>
          Developed and optimized basic layouts, ensure seamless functionality
          across devices
        </li>
      </ul>
      <p>
        <b>Technologies and tools:</b> React, JavaScript, TypeScript,
        TailwindCSS, Jira, GitHub
      </p>
    </Card>
  )
}
