import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase text-bold",
  {
    variants: {
      variant: {
       primary:"bg-sky-400 text-white border-b-4 border-sky-500 active:border-b-2",
       primaryOutline:"text-sky-400 border-b-4 border-slate-100 active:border-b-2",
       secondary:"bg-lime-400 text-white border-b-4 border-lime-500 active:border-b-2",
       secondaryOutline:"text-lime-400 border-b-4 border-slate-100 active:border-b-2",
       tertiary:"text-white bg-red-400 border-b-4 border-red-500 active:border-b-2",
       tertiaryOutline:"text-red-400 border-b-4 border-slate-100 active:border-b-2",
       ghost:"bg-zinc-400 border-b-4 border-zinc-500 text-white active:border-b-2",
       ghostOutline:"text-zinc-400 border-b-4 border-slate-400 active:bg-slate-100 border-b-2"

      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
