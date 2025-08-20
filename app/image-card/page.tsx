"use client"

import { ImageCard } from "@/components/ui/image-card"
import { ComponentPageLayout } from "@/components/component-page-layout"

export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "image-card",
  type: "registry:block",
  title: "Image Card",
  description: "A card component with a flush image at the top and title/subtitle content.",
  files: [
    {
      path: "ui/image-card.tsx",
      type: "registry:ui",
    },
  ],
  dependencies: [],
}

function ImageCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
      <ImageCard
        image="/modern-office.png"
        title="Modern Workspace"
        subtitle="Create productive environments for your team"
      />
      <ImageCard
        image="/serene-mountain-valley.png"
        title="Nature Retreat"
        subtitle="Escape to serene natural settings"
      />
      <ImageCard 
        image="/tech-startup-office.png" 
        title="Innovation Hub" 
        subtitle="Where ideas come to life" 
      />
    </div>
  )
}

export default function ImageCardPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <ImageCardExample />
    </ComponentPageLayout>
  )
}
