import { ComponentPageLayout } from "@/components/component-page-layout"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

// Added meta export for tooltip component
export const meta = {
  name: "tooltip",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-tooltip"],
  files: [
    {
      path: "ui/tooltip.tsx",
      type: "registry:ui",
    },
  ],
}

export default function TooltipPage() {
  return (
    <ComponentPageLayout
      meta={meta}
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    >
      <div className="space-y-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </ComponentPageLayout>
  )
}
