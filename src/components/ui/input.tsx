import * as React from "react";

import { cn } from "~/lib/utils";

// className="w-full bg-white/10 rounded-md h-10 px-4 py-1.5 items-center flex outline-0 focus:ring-1 focus:ring-primary-500 focus:ring-opacity-50"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg bg-background-light/90 ring-1 ring-white/10 px-3 py-1.5 shadow-sm transition duration-300 file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-inner focus-visible:shadow-primary-100/10 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
