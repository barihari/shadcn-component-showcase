import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from "lucide-react"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "alert",
  type: "registry:block",
  title: "Alert",
  description: "Displays a callout for user attention.",
  files: [
    {
      path: "ui/alert.tsx",
      type: "registry:ui",
    },
  ],
}

function AlertExample() {
  return (
    <div className="space-y-4 max-w-lg">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </div>
  )
}

export default function AlertPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <AlertExample />
    </ComponentPageLayout>
  )
}
