import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-gray-600 pb-1 md:pb-1.5 xl:pb-2 flex text-[14px] 2xl:text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ",
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(),
    className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
