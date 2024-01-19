import * as React from "react";
import { cn } from "~/lib/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = "section",
  className,
  children,
  ...props
}: Props) {
  return (
    <Component
      {...props}
      className={cn("w-full px-5 mx-auto max-w-screen-lg", className)}
    >
      {children}
    </Component>
  );
}
