import * as React from "react";
import {m, MotionProps} from "framer-motion";
import {useIsMobile} from "~/hooks/useMediaQuery";
import {cn} from "~/lib/utils";
import Image from "next/image";

export function Screenshots({
                              className,
                              images,
                            }: {
  className?: string;
  images: string[];
}) {
  const isMobile = useIsMobile();
  return (
    <div
      key={String(isMobile)}
      className={cn("flex flex-col gap-5", className)}
    >
      {images.map((src, index) => (
        <div key={src} className="relative w-full">
          <ScreenshotItem
            src={src}
            priority={index < 2}
          />
        </div>
      ))}
    </div>
  );
}

function ScreenshotItem({src, priority}: { src: string, priority?: boolean }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <Image
      src={src}
      alt="Screenshot"
      priority={priority}
      placeholder="blur"
      className={cn("object-contain rounded-xl transition-all transition-opacity opacity-0 scale-90 duration-500", { "opacity-100 scale-100": loaded })}
      onLoad={() => setLoaded(true)}
    />
  )
}
