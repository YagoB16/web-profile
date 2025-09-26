import { cn } from "@/lib/utils"

interface SkeletonProps extends React.ComponentProps<"div"> {
  variant?: 'default' | 'card' | 'text' | 'avatar' | 'image' | 'subtle'
}

function Skeleton({ className, variant = 'default', ...props }: SkeletonProps) {
  const baseClasses = "rounded-md relative overflow-hidden"

  const variantClasses = {
    default: "skeleton-card",
    card: "skeleton-card",
    text: "skeleton-text",
    avatar: "skeleton-avatar",
    image: "skeleton-image",
    subtle: "skeleton-subtle"
  }

  return (
    <div
      data-slot="skeleton"
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
