import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { cn } from "~/lib/utils";
import { Container } from "~/components/utils/Container";

export function FeaturedWork() {
  const ref = React.useRef(null);
  return (
    <Container
      id="work"
      as="section"
      className="flex flex-col items-center gap-5 py-10 md:pt-60 md:pb-0"
    >
      <h2 ref={ref} className="text-white text-4xl font-bold font-title">
        Featured Work
      </h2>
      <ShowcaseItem
        index={1}
        slug="amie"
        className="bg-[#FFF0F0] text-[#1D0B00]"
        bgImage="/portfolio/amie/showcase-bg.webp"
      >
        <Image
          src="/portfolio/amie/logo.svg"
          width="90"
          height="27"
          alt="Amie"
        />
        <p>
          Amie is a joyful productivity application that combines calendar,
          todos and many more. Words can't convey it, you need to see this
          beauty with your own eyes.
          <br />
        </p>
      </ShowcaseItem>

      <ShowcaseItem
        index={2}
        slug="carient"
        className="bg-[#493D30] text-[#F0EBE8]"
        bgImage="/portfolio/carient/showcase-bg.webp"
      >
        <Image
          src="/portfolio/carient/logo.svg"
          width="204"
          height="18"
          alt="Carient"
        />
        <p>
          Custom e-commerce solution for selling personalized skincare products
          via subscription-based model
        </p>
      </ShowcaseItem>

      <ShowcaseItem
        index={3}
        slug="livejam"
        className="bg-[#282832] text-[#F0EBE8]"
        bgImage="/portfolio/livejam/showcase-bg.webp"
      >
        <Image
          src="/portfolio/livejam/logo.png"
          width="125"
          height="58"
          alt=""
        />
        <p>
          LiveJam is a music player based on YouTube API and their embedded
          player. Think it like Spotify with a video player. <br />
          <br />
        </p>
      </ShowcaseItem>
    </Container>
  );
}

function ShowcaseItem({
  className,
  children,
  bgImage,
  slug,
  index,
}: {
  className?: string;
  children?: React.ReactNode;
  bgImage: string;
  slug: string;
  index: number;
}) {
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
              alt="Showcase Image"
              fill
            />
          </div>
        </div>
      </Link>
    </m.div>
  );
}
