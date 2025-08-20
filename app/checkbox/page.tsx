import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "checkbox",
  type: "registry:block",
  title: "Checkbox",
  description: "A control that allows the user to toggle between checked and not checked.",
  files: [
    {
      path: "ui/checkbox.tsx",
      type: "registry:ui",
    },
  ],
  dependencies: ["@radix-ui/react-checkbox"],
}

function CheckboxExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Send me marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled checkbox</Label>
      </div>
    </div>
  )
}

export default function CheckboxPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <CheckboxExample />
    </ComponentPageLayout>
  )
}
