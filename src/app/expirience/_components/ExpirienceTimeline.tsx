"use client"
import { Timeline } from "@/components/ui/timeline"
import React from "react"

export const ExpirienceTimeline = () => {
  const data = [
    {
      title: "2024",
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
      title: "2023",
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
      title: "2022",
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
      title: "2022",
      content: (
        <div>
          <h3>IT-incubator</h3>
          <div className="w-full h-96 border flex items-center justify-center">
            Content
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
