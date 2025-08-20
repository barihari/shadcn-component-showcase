import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "input",
  type: "registry:block",
  title: "Input",
  description: "Displays a form input field or a component that looks like an input field.",
  files: [
    {
      path: "ui/input.tsx",
      type: "registry:ui",
    },
  ],
}

function InputExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <Input placeholder="Disabled" disabled />
      <Input placeholder="With file" type="file" />
    </div>
  )
}

export default function InputPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <InputExample />
    </ComponentPageLayout>
  )
}
