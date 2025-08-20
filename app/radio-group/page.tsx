import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "radio-group",
  type: "registry:block",
  title: "Radio Group",
  description:
    "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  files: [
    {
      path: "ui/radio-group.tsx",
      type: "registry:ui",
    },
  ],
}

function RadioGroupExample() {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-medium">Choose your plan</Label>
        <RadioGroup defaultValue="comfortable" className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default" />
            <Label htmlFor="default">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="comfortable" />
            <Label htmlFor="comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="compact" />
            <Label htmlFor="compact">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default function RadioGroupPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <RadioGroupExample />
    </ComponentPageLayout>
  )
}
