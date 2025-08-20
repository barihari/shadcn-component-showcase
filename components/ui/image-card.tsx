import * as React from "react"
import { cn } from "@/lib/utils"

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  subtitle: string
  imageAlt?: string
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({ className, image, title, subtitle, imageAlt, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
          className,
        )}
        {...props}
      >
        {/* Flush image at the top */}
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>

        {/* Content section with title and subtitle */}
        <div className="p-6 space-y-2">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
      </div>
    )
  },
)

ImageCard.displayName = "ImageCard"

export { ImageCard }
