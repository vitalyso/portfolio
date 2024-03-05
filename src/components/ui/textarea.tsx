import * as React from "react";

import { cn } from "~/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-40 w-full rounded-lg bg-background-light/90 ring-1 ring-white/10 px-3 py-2 shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-inner focus-visible:shadow-primary-100/10 disabled:cursor-not-allowed disabled:opacity-50 transition duration-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
