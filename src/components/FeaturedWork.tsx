import * as React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Container } from "~/components/utils/Container";

export function FeaturedWork() {
  return (
    <Container
      id="work"
      as="section"
      className="flex flex-col items-center gap-5 py-10 md:pt-60 md:pb-0"
    >
      <h2 className="text-white text-4xl font-bold font-title">
        Featured Work
      </h2>
      <ShowcaseItem
        className="bg-[#FFF0F0] text-[#1D0B00]"
        bgImage="/portfolio/amie/showcase-bg@3x.jpg"
      >
        <Image
          src="/portfolio/amie/logo.svg"
          width="90"
          height="27"
          alt="Amie"
        />
        <p>
          Amie is a Calendar application for managing your events, which is
          quite nice and joyful. <br />
          <br />
          One of the best projects I ever worked on. I wish them only success,
          and hope to see them someday again.
        </p>
      </ShowcaseItem>

      <ShowcaseItem
        className="bg-[#493D30] text-[#F0EBE8]"
        bgImage="/portfolio/carient/showcase-bg@3x.jpg"
      >
        <Image
          src="/portfolio/carient/logo.svg"
          width="204"
          height="18"
          alt="Carient"
        />
        <p>
          Amie is a Calendar application for managing your events, which is
          quite nice and joyful. <br />
          <br />
          One of the best projects I ever worked on. I wish them only success,
          and hope to see them someday again.
        </p>
      </ShowcaseItem>

      <ShowcaseItem
        className="bg-[#282832] text-[#F0EBE8]"
        bgImage="/portfolio/livejam/showcase-bg@3x.jpg"
      >
        <Image
          src="/portfolio/livejam/logo.png"
          width="125"
          height="58"
          alt=""
        />
        <p>
          Amie is a Calendar application for managing your events, which is
          quite nice and joyful. <br />
          <br />
          One of the best projects I ever worked on. I wish them only success,
          and hope to see them someday again.
        </p>
      </ShowcaseItem>
    </Container>
  );
}

function ShowcaseItem({
  className,
  children,
  bgImage,
}: {
  className?: string;
  children?: React.ReactNode;
  bgImage: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col md:h-[300px] w-full md:flex-row items-center justify-between rounded-xl overflow-hidden relative select-none",
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
            alt="Showcase Image"
            fill
          />
        </div>
      </div>
    </div>
  );
}
