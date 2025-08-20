import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "switch",
  type: "registry:block",
  title: "Switch",
  description: "A control that allows the user to toggle between checked and not checked.",
  files: [
    {
      path: "ui/switch.tsx",
      type: "registry:ui",
    },
  ],
}

function SwitchExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  )
}

export default function SwitchPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <SwitchExample />
    </ComponentPageLayout>
  )
}
