import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "textarea",
  type: "registry:block",
  title: "Textarea",
  description: "Displays a form textarea or a component that looks like a textarea.",
  files: [
    {
      path: "ui/textarea.tsx",
      type: "registry:ui",
    },
  ],
}

function TextareaExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <Textarea placeholder="Disabled" disabled />
    </div>
  )
}

export default function TextareaPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <TextareaExample />
    </ComponentPageLayout>
  )
}
