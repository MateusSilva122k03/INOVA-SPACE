import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-[#7f00ff] text-white hover:bg-[#6d0ccd] shadow-lg shadow-[#7f00ff]/20 border-0 transition-all active:scale-[0.97]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-white/10 bg-transparent text-zinc-300 hover:bg-white/5 hover:border-[#7f00ff]/30 hover:text-white transition-all",
        secondary: "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/5 transition-all text-sm font-medium",
        ghost: "hover:bg-white/5 hover:text-white text-zinc-500 transition-colors",
        link: "text-[#7f00ff] underline-offset-4 hover:underline",

        // Premium / Linear Variants
        premium: "bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all",

        glow: "bg-[#7f00ff]/5 text-[#7f00ff] border border-[#7f00ff]/10 hover:bg-[#7f00ff]/10 hover:border-[#7f00ff]/30 transition-all",
        glass: "bg-white/5 backdrop-blur-md border border-white/5 text-zinc-300 hover:bg-white/10 hover:border-[#7f00ff]/20 hover:text-white transition-all",

        subtle: "bg-transparent text-zinc-400 hover:text-white border border-transparent hover:bg-white/5",
      },
      size: {
        default: "h-9 px-4 py-2", // Smaller, 36px height is standard
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8 text-sm", // 40px
        xl: "h-12 rounded-lg px-8 text-base", // 48px
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
