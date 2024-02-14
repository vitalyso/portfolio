import * as React from "react";
import { m } from "framer-motion";
import Link from "next/link";
import { cn } from "~/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  children?: React.ReactNode;
  bgImage: string;
  slug: string;
  index: number;
}

export function ShowcaseItem({
  className,
  children,
  bgImage,
  slug,
  index,
}: Props) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px 0px 0px", amount: "some" }}
      transition={{ duration: 0.5, delay: 0.1 + (index - 1) * 0.2 }}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
        },
        hidden: {
          y: 20,
          opacity: 0,
          scale: 1.1,
        },
      }}
    >
      <Link
        scroll={false}
        passHref
        href={`/work/${slug}`}
        className={cn(
          "group flex flex-col md:h-[300px] w-full md:flex-row items-center justify-between rounded-xl overflow-hidden relative select-none hover:scale-105 transition transition-all duration-500",
          className
        )}
      >
        <div className="max-w-[400px] font-sm px-5 md:px-10 pt-7 pb-5 md:py-5 relative z-10 flex flex-col gap-4 font-light">
          {children}
        </div>
        <div className="h-52 w-full md:w-1/2 md:h-full">
          <div className="h-full w-full md:h-[512px] md:w-[512px] md:rotate-12 md:-top-10 md:right-0 md:group-hover:-right-5 relative  md:scale-110 group-hover:rotate-0 md:group-hover:scale-[0.85] transition-all duration-500">
            <Image
              className="object-cover object-right-top"
              src={bgImage}
              width={512}
              height={512}
              quality={100}
              alt="Showcase Image"
            />
          </div>
        </div>
      </Link>
    </m.div>
  );
}
