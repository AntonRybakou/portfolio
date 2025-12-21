import Image from 'next/image'
import Link from 'next/link'
import { SKILLS } from '@/constants/skills'
import { cn } from '@/shared/lib/utils'
import { badgeVariants } from '@/shared/shadcn/badge'

export const SkillsList = () => {
  return (
    <div className="flex flex-wrap gap-4 items-start justify-start">
      {SKILLS.map((skill) => (
        <Link
          key={skill.title}
          className={cn(
            'gap-1 cursor-pointer no-underline flex items-center',
            badgeVariants({ variant: 'link' }),
            'h-fit'
          )}
          href={skill.href}
          passHref={true}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`/icons/${skill.icon}.svg`}
            alt={`${skill.title} icon`}
            width={24}
            height={24}
            className="dark:invert"
          />
          <span>{skill.title}</span>
        </Link>
      ))
      }
    </div >
  )
}
