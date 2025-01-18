import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Section2022 = () => {
  return (
    <Card className="p-6">
      <p>
        <b>Company:</b> IT Incubator,{' '}
        <Button asChild variant="link" className="p-0 text-base">
          <Link href="https://it-incubator.io/" target="_blank">
            https://it-incubator.io/
          </Link>
        </Button>
      </p>
      <p>
        <b>Period:</b> Mar-2022 – Sep-2022
      </p>
      <p>
        <b>Project description:</b> ToDo app, SocialNetwork app, a platform for
        creating personalized flashcard decks to boost knowledge retention and
        learning efficiency
      </p>
      <p>
        <b>Role:</b> Frontend Developer (intern)
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
