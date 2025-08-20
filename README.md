# Shadcn Component Registry

A custom shadcn/ui component registry with dynamic build system and live component previews. [Using shadcn/v0 registry](https://v0.app/community/shadcn-v0-registry-tSXOjooGIga) by @jacobparis 

## Overview

This registry provides a scalable, developer-friendly approach to distributing custom shadcn/ui components while maintaining full CLI compatibility with the official shadcn toolchain.

## Features

- **Dynamic Build System**: Automatic component metadata extraction and registry generation
- **Live Component Previews**: Interactive showcase pages for each component
- **Vercel Blob Integration**: Scalable cloud storage for component distribution
- **CLI Compatible**: Works seamlessly with `npx shadcn@latest add`
- **Automatic Deployment**: GitHub integration with Vercel for continuous deployment

## Registry Architecture

### Key Differences from Official Registry

**Official shadcn/ui Registry:**
- Uses static `registry.json` files
- Components stored in `registry/new-york/` directory structure
- Relies on `shadcn build` command for compilation
- Serves components as static files under `public/r/[name].json`
- Follows the standard [registry-template-v4](https://github.com/shadcn-ui/registry-template-v4) approach

**This Custom Registry:**
- Dynamic build system using `build.ts` with TypeScript compilation
- Components stored in standard `components/ui/` directory
- Live showcase pages at `/[component-name]` routes
- Vercel Blob storage integration for scalable component distribution
- Automatic metadata extraction from component page exports

### Similarities with Official Registry

Both registries maintain:
- CLI compatibility with `npx shadcn@latest add [registry-url] [component]`
- Standard registry schema following `https://ui.shadcn.com/schema/registry-item.json`
- Component metadata structure with name, description, files, and dependencies
- File type definitions (`registry:ui`, `registry:hook`, etc.)
- Dependency management for both npm packages and registry components

## Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Vercel account for deployment

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/barihari/shadcn-component-showcase.git
   cd shadcn-component-showcase
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Vercel Blob Storage**
   - Deploy to Vercel
   - Enable Blob storage in your Vercel project dashboard
   - Environment variables are automatically configured

4. **Deploy**
   ```bash
   git push origin main
   ```

## Usage

### Installing Components from Registry

```bash
# Install a specific component
npx shadcn@latest add https://shadcn-showcase-eight.vercel.app/registry [component-name]

# Example: Install the image-card component
npx shadcn@latest add https://shadcn-showcase-eight.vercel.app/registry image-card

# Install button component
npx shadcn@latest add https://shadcn-showcase-eight.vercel.app/registry button
```

### Viewing Component Previews

Visit the live registry at: `https://shadcn-showcase-eight.vercel.app`

Individual component previews:
- `https://shadcn-showcase-eight.vercel.app/button`
- `https://shadcn-showcase-eight.vercel.app/image-card`
- `https://shadcn-showcase-eight.vercel.app/[component-name]`

## Development

### Adding New Components

1. **Create the component file**
   ```bash
   # Create component in components/ui/
   touch components/ui/my-component.tsx
   ```

2. **Create the showcase page**
   ```bash
   # Create showcase page
   mkdir app/my-component
   touch app/my-component/page.tsx
   ```

3. **Component structure**
   ```typescript
   // components/ui/my-component.tsx
   import * as React from "react"
   import { cn } from "@/lib/utils"

   const MyComponent = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div
       ref={ref}
       className={cn("base-styles", className)}
       {...props}
     />
   ))
   MyComponent.displayName = "MyComponent"

   export { MyComponent }
   ```

4. **Showcase page structure**
   ```typescript
   // app/my-component/page.tsx
   import { MyComponent } from "@/components/ui/my-component"
   import { ComponentPageLayout } from "@/components/component-page-layout"

   export const dynamic = "force-dynamic"

   export const meta = {
     $schema: "https://ui.shadcn.com/schema/registry-item.json",
     name: "my-component",
     type: "registry:block",
     title: "My Component",
     description: "A custom component description",
     files: [
       {
         path: "ui/my-component.tsx",
         type: "registry:ui",
       },
     ],
     dependencies: [], // Add npm dependencies here
   }

   function MyComponentExample() {
     return (
       <MyComponent>
         Example content
       </MyComponent>
     )
   }

   export default function MyComponentPage() {
     return (
       <ComponentPageLayout meta={meta}>
         <MyComponentExample />
       </ComponentPageLayout>
     )
   }
   ```

5. **Update build script**
   ```typescript
   // Add to build.ts imports section
   import * as myComponentModule from "./app/my-component/page.tsx"

   // Add to modules array
   const modules = [
     // ... existing modules ...
     { name: "my-component", module: myComponentModule },
   ]
   ```

6. **Deploy changes**
   ```bash
   git add .
   git commit -m "Add my-component to registry"
   git push origin main
   ```

### Component Metadata Schema

```typescript
export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "component-name",           // Required: kebab-case component name
  type: "registry:block",           // Required: registry type
  title: "Component Title",         // Required: display title
  description: "Description",       // Required: component description
  files: [                          // Required: component files
    {
      path: "ui/component-name.tsx", // Path relative to components/
      type: "registry:ui",            // File type
    },
  ],
  dependencies: ["npm-package"],    // Optional: npm dependencies
}
```

## Project Structure

```
shadcn-component-showcase/
├── app/                          # Next.js app directory
│   ├── [component]/             # Component showcase pages
│   │   └── page.tsx            # Individual component demos
│   ├── registry/               # Registry API routes
│   └── layout.tsx              # Root layout
├── components/
│   ├── ui/                     # Registry components
│   └── component-page-layout.tsx # Showcase layout
├── build.ts                    # Dynamic registry builder
├── vercel.json                 # Vercel configuration
└── README.md
```

## Advantages

### Enhanced Developer Experience
- **Live Component Previews**: Each component has a dedicated showcase page
- **Consistent Layout**: Uses `ComponentPageLayout` for standardized component documentation
- **Real-time Examples**: Interactive component demonstrations with multiple variants

### Scalable Architecture
- **Vercel Blob Storage**: Components are stored in cloud storage rather than static files
- **Dynamic Generation**: Registry data is built programmatically from component metadata
- **Automatic Deployment**: Changes deploy automatically via Vercel's GitHub integration

### Flexible Component Management
- **Metadata-Driven**: Component information is defined in each page's `meta` export
- **File System Integration**: Automatically reads component source code from the filesystem
- **Version Control**: Uses `VERCEL_DEPLOYMENT_ID` for component versioning

## Potential Considerations

### Dependency Management
- **Consideration**: Updates to shadcn/ui base components may require manual updates
- **Mitigation**: Pin dependency versions and test registry compatibility regularly

### Schema Evolution
- **Consideration**: Changes to the official registry schema could affect CLI compatibility
- **Mitigation**: Monitor schema updates at `https://ui.shadcn.com/schema/registry-item.json`

### Build System Maintenance
- **Consideration**: Custom `build.ts` system requires ongoing maintenance
- **Mitigation**: Well-documented build process and modular architecture

### Vercel Blob Dependency
- **Consideration**: Reliance on Vercel-specific infrastructure
- **Mitigation**: Blob storage can be replaced with other cloud storage solutions if needed

## API Endpoints

- **Registry Index**: `https://shadcn-showcase-eight.vercel.app/registry`
- **Individual Components**: `https://shadcn-showcase-eight.vercel.app/registry/items/[component-name]`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Add your component following the development guidelines
4. Commit changes: `git commit -m "Add new component"`
5. Push to branch: `git push origin feature/new-component`
6. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue in the GitHub repository
- Check existing component implementations for examples
- Review the component metadata schema documentation
```
