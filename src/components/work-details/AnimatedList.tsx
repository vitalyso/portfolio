import * as React from "react";
import { cn } from "~/lib/utils";
import { m } from "framer-motion";

const LIST_ANIMATION_DELAY = 0.5;

export function AnimatedList({
  title,
  items,
  baseDelay = 0,
  className,
}: {
  title: string;
  items: string[];
  baseDelay?: number;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid w-full grid-cols-2 md:block md:w-40 px-0 py-4",
        className,
      )}
    >
      <AnimatedListItem
        className="font-black text-xl mb-1 font-title"
        delay={LIST_ANIMATION_DELAY + baseDelay + (items.length + 1) * 0.1}
      >
        {title}
      </AnimatedListItem>
      <li className="md:hidden"></li>
      {items.map((item, index) => (
        <AnimatedListItem
          key={item}
          className="text-neutral-400"
          delay={
            LIST_ANIMATION_DELAY + baseDelay + (items.length - index) * 0.1
          }
        >
          {item}
        </AnimatedListItem>
      ))}
    </ul>
  );
}

function AnimatedListItem({
  children,
  className,
  delay = 0,
}: {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.li
      className={className}
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay,
        duration: 0.5,
      }}
    >
      {children}
    </m.li>
  );
}
