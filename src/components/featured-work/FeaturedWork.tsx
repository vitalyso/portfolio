import * as React from "react";
import Image from "next/image";
import { Container } from "~/components/utils/Container";
import { ShowcaseItem } from "./ShowcaseItem";

export function FeaturedWork() {
  const ref = React.useRef(null);
  return (
    <Container
      id="work"
      as="section"
      className="flex flex-col items-center gap-5 py-10 md:pt-60 md:pb-0 md:mt-10"
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
        <p className="leading-[1.25]">
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
          player. Think it like Spotify with videos. <br />
          <br />
        </p>
      </ShowcaseItem>
    </Container>
  );
}
