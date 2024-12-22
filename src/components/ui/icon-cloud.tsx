'use client'

import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import {
  Cloud,
  type ICloud,
  type SimpleIcon,
  fetchSimpleIcons,
  renderSimpleIcon,
} from 'react-icon-cloud'

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: true,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const minContrastRatio = 0

  return renderSimpleIcon({
    icon,
    bgHex: '#0000',
    fallbackHex: theme === 'dark' ? '#ffffff' : '#000000',
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'light'),
    )
  }, [data, theme])

  return (
    // @ts-ignore
    <div className="dark:invert">
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  )
}
