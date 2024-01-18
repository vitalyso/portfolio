import Image from "next/image";
import { cn } from "~/lib/utils";

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="w-full max-w-screen-lg mx-auto flex flex-col items-center gap-5 pt-40"
    >
      <h2 className="text-white text-4xl font-bold font-title">
        Featured Work
      </h2>
      <ShowcaseItem
        className="bg-[#fafafc] text-[#1D0B00]"
        bgImage="/portfolio/amie/showcase-bg.jpg"
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
        bgImage="/portfolio/carient/showcase-bg.jpg"
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
        bgImage="/portfolio/livejam/showcase-bg.jpg"
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
    </section>
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
        "flex flex-col h-[300px] w-full md:flex-row items-center justify-between rounded-xl overflow-hidden shadow-lg relative select-none",
        className
      )}
    >
      <div className="max-w-[400px] font-sm px-10 py-5 relative z-10 flex flex-col gap-4 font-light">
        {children}
      </div>
      <Image
        className="object-contain object-right-top"
        src={bgImage}
        alt="Showcase Image"
        quality={100}
        fill
      />
    </div>
  );
}
