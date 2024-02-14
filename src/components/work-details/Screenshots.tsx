import * as React from "react";
import { m, MotionProps } from "framer-motion";
import { useIsMobile } from "~/hooks/useMediaQuery";
import { cn } from "~/lib/utils";
import Image from "next/image";

const desktopProps: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    hidden: {
      y: 20,
      x: 20,
      opacity: 0,
      scale: 1.1,
    },
  },
};

const mobileProps: MotionProps = {};

export function Screenshots({
  className,
  images,
}: {
  className?: string;
  images: string[];
}) {
  const isMobile = useIsMobile();
  const props = isMobile ? mobileProps : desktopProps;

  return (
    <div
      key={String(isMobile)}
      className={cn("flex flex-col gap-5", className)}
    >
      {images.map((src, index) => (
        <m.div {...props} key={src} className="relative w-full">
          <Image
            src={src}
            priority={index < 2}
            placeholder="blur"
            className="object-contain rounded-xl"
            alt="Screenshot"
          />
        </m.div>
      ))}
    </div>
  );
}
