import { Badge } from "@/components/ui/badge"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "badge",
  type: "registry:block",
  title: "Badge",
  description: "Displays a badge or a component that looks like a badge.",
  files: [
    {
      path: "ui/badge.tsx",
      type: "registry:ui",
    },
  ],
  dependencies: ["@radix-ui/react-slot"],
}

function BadgeExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

export default function BadgePage() {
  return (
    <ComponentPageLayout meta={meta}>
      <BadgeExample />
    </ComponentPageLayout>
  )
}
