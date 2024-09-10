import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center h-fit rounded-md border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-white shadow",
        bigger:
          "h-fit px-4 py-1 text-base font-semibold border-primary border-2 bg-tranparent text-primary",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground ",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow ",
        outline: "text-foreground border-primary bg-transparent shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },

  } 
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
