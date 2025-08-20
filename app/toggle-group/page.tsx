import { ComponentPageLayout } from "@/components/component-page-layout"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

// Added meta export for toggle-group component
export const meta = {
  name: "toggle-group",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-toggle-group"],
  registryDependencies: ["toggle"],
  files: [
    {
      path: "ui/toggle-group.tsx",
      type: "registry:ui",
    },
  ],
}

export default function ToggleGroupPage() {
  return (
    <ComponentPageLayout
      meta={meta}
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
    >
      <div className="space-y-4">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        <ToggleGroup type="single">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </ComponentPageLayout>
  )
}
