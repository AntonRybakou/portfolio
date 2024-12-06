"use client"
import { type TTimelineItem, Timeline } from "@/components/ui/timeline"
import React from "react"

export const ExpirienceTimeline = () => {
  const data = {
    title: "Changelog from my journey",
    description:
      "There are many things I have learned and experienced over the years.",
    data: [
      {
        date: "2024",
        content: (
          <div>
            <h3>Humandev IP Limited</h3>
            <div className="w-full h-96 border flex items-center justify-center">
              Content
            </div>
          </div>
        ),
      },
      {
        date: "2023",
        content: (
          <div>
            <h3>Humandev IP Limited</h3>
            <div className="w-full h-96 border flex items-center justify-center">
              Content
            </div>
          </div>
        ),
      },
      {
        date: "2022",
        content: (
          <div>
            <h3>Soft Group Solutions</h3>
            <div className="w-full h-96 border flex items-center justify-center">
              Content
            </div>
          </div>
        ),
      },
      {
        date: "2022",
        content: (
          <div>
            <h3>IT-incubator</h3>
            <div className="w-full h-96 border flex items-center justify-center">
              Content
            </div>
          </div>
        ),
      },
    ],
  }

  return (
    <div className="w-full">
      <Timeline
        title={data.title}
        description={data.description}
        data={data.data}
      />
    </div>
  )
}
