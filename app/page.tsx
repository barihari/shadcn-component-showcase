"use client"

import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

export const dynamic = "force-dynamic"

// This is served from the registry
export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "button",
  type: "registry:block",
  title: "Button",
  description: "Displays a button or a component that looks like a button.",
  files: [
    {
      // put your source file at this location in components folder
      path: "ui/button.tsx",
      type: "registry:ui",
      // content: we compile your source file into the content property on deploy
    },
  ],
  dependencies: ["@radix-ui/react-slot"],
}

// This is just for visual display within v0
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

export default function HomePage() {

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto space-y-6 text-sm">
        <p className="text-muted-foreground">
          Deploy to Vercel and set a subdomain to use for your
          shadcn registry.
        </p>

        {/* Moved registry endpoints section to the top */}
        <div className="space-y-3">
          <p className="font-medium">Registry Endpoints:</p>
          <div className="space-y-2 text-muted-foreground pl-4">
            <p>
              • <code className="bg-muted px-1 rounded">/registry</code> - Lists all available components
            </p>
            <p>
              • <code className="bg-muted px-1 rounded">/registry/items/{"{name}"}</code> - Returns component
              configuration
            </p>
          </div>
          {/* Minimal terminal-style install command */}
          <div className="text-muted-foreground pl-4">
            <p className="font-medium mb-2">Sample install command:</p>
            <div className="bg-muted rounded p-3 text-black font-mono text-sm relative group overflow-x-scroll whitespace-nowrap">
              <span>npx shadcn@latest add https://shadcn-v0.vercel.app/registry/items/button</span>
            </div>
          </div>
        </div>

        {/* Editing Components section */}
        <div className="space-y-3">
          <p className="font-medium">Editing Components:</p>
          <div className="space-y-2 text-muted-foreground pl-4">
            <p>Just ask v0 to make changes to your components.</p>
            <p>Shadcn component source files are hidden by default in v0 but it will reveal them as it edits them.</p>
          </div>
        </div>

        {/* Enhanced component creation instructions */}
        <div className="space-y-3">
          <p className="font-medium">Creating Components:</p>
          <div className="space-y-2 text-muted-foreground pl-4">
            <p>
              1. Create a new file at{" "}
              <code className="bg-muted px-1 rounded">/app/{"{component-name}"}/page.tsx</code>
            </p>
            <p>
              2. Export a <code className="bg-muted px-1 rounded">meta</code> object that describes your component
            </p>
            <p>
              3. Create the actual source file in the location specified by your meta export and ensure there's a
              source file at that location (the registry will serve this file)
            </p>
            {/* Added build.ts requirement */}
            <p className="font-medium text-orange-700">
              4. Add your new component to <code className="bg-muted px-1 rounded">build.ts</code> so it gets
              compiled into the registry
            </p>
          </div>
        </div>

        {/* Example component structure */}
        <div className="space-y-2">
          <p className="font-medium">Example component structure:</p>
          <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
            {`import { Button } from "@/components/ui/button"
import { ComponentPageLayout } from "@/components/component-page-layout"

export const dynamic = "force-dynamic"

// This is served from the registry
export const meta = {
$schema: "https://ui.shadcn.com/schema/registry-item.json",
name: "button",
type: "registry:block",
title: "Button",
description: "Displays a button or a component that looks like a button.",
files: [
  {
    // put your source file at this location in components folder
    path: "ui/button.tsx",
    type: "registry:ui",
    // content: we compile your source file into the content property on deploy
  },
],
dependencies: ["@radix-ui/react-slot"],
}

// This is just for visual display within v0
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
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
