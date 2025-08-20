import { Button } from "@/components/ui/button"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "button",
  type: "registry:block",
  title: "Button",
  description: "Displays a button or a component that looks like a button.",
  files: [
    {
      path: "ui/button.tsx",
      type: "registry:ui",
    },
  ],
  dependencies: ["@radix-ui/react-slot"],
}

function ButtonExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

export default function ButtonPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <ButtonExample />
    </ComponentPageLayout>
  )
}
