import * as React from "react";
import { cn } from "~/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-primary-300 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white shadow hover:bg-primary-500/90",
        outline:
          "border border-2 font-bold border-primary-500 bg-transparent text-primary-500 shadow-sm hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "md:h-10 h-11 px-5 text-lg md:text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
