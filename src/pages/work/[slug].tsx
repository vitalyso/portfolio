import * as React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { IconCornerArrow } from "~/components/icons/IconCornerArrow";
import { SocialMedia } from "~/components/contact-me/SocialMedia";
import { Screenshots } from "~/components/work-details/Screenshots";
import { AnimatedList } from "~/components/work-details/AnimatedList";
import { useIsMobile } from "~/hooks/useMediaQuery";

const data = {
  url: "https://amie.so",
  title: "Amie",
  content:
    "Boys migas charcoal 90's you normcore. Chillwave pin farm-to-table vice put. Pack yes carry aesthetic migas ugh. Listicle beer lo-fi tile pabst microdosing bottle. Gastropub slow-carb scenester coloring hot affogato quinoa sustainable selfies lomo.\n\nBoys migas charcoal 90's you normcore. Chillwave pin farm-to-table vice put. Pack yes carry aesthetic migas ugh. Listicle beer lo-fi tile pabst microdosing bottle. Gastropub slow-carb scenester coloring hot affogato quinoa sustainable selfies lomo.",
  skills: ["React", "Electron", "Node", "Tailwind", "Framer Motion", "Next.js"],
  scope: ["Frontend", "Backend", "Electron", "CI/CD", "DevOps", "Code Review"],
  details: ["2021 - 2023"],
  screenshots: [
    "/portfolio/livejam/1.png",
    "/portfolio/livejam/2.png",
    "/portfolio/livejam/3.png",
    "/portfolio/livejam/4.png",
  ],
};

export default function Work() {
  const isMobile = useIsMobile();
  const variants = isMobile
    ? {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
      };

  return (
    <m.div
      key={String(isMobile)}
      className="flex flex-col md:flex-row w-full min-h-screen"
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <m.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.75 }}
        className="py-10 px-5 md:w-1/2 md:max-w-[50%] md:py-20 md:px-10"
      >
        <div className="md:sticky md:top-40 max-w-screen-sm mx-auto">
          <div className="flex items-center justify-between">
            <Link
              className="text-primary-500 relative hover:underline"
              href="/#work"
            >
              ← Back
            </Link>
          </div>

          <h1 className="font-hero font-semibold text-5xl leading-normal">
            {data.title}
          </h1>

          <Screenshots
            className="max-w-100vw md:hidden mb-10"
            images={data.screenshots}
          />

          <p className="font-light whitespace-pre-line">{data.content}</p>

          <div className="flex flex-col md:flex-row pt-5 font-light">
            <AnimatedList
              className="border-t-4 border-primary-500"
              title="Core tools"
              items={data.skills}
              baseDelay={0}
            />
            <AnimatedList
              className="border-t-2 border-primary-600"
              title="Scope"
              items={data.scope}
              baseDelay={0.2}
            />
            <AnimatedList
              className="border-t border-primary-700"
              title="Timeframe"
              items={data.details}
              baseDelay={0.4}
            />
          </div>

          {data.url && (
            <div className="text-center md:text-left">
              <m.a
                className="inline-flex text-lg items-center gap-1 mt-6 text-primary-500 font-bold hover:underline"
                target="_blank"
                href={data.url}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 2,
                }}
              >
                Open project <IconCornerArrow className="w-5 h-5 stroke-1" />
              </m.a>
            </div>
          )}

          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 2.2,
            }}
            className="mt-32 flex flex-col items-center md:items-start"
          >
            <h1 className="font-title font-black text-2xl leading-normal">
              Got an idea?{" "}
              <Link
                className="text-primary-500 hover:underline"
                href={`/#contact`}
              >
                Let's talk.
              </Link>
            </h1>
            <SocialMedia />
          </m.div>
        </div>
      </m.div>
      <Screenshots
        className="hidden md:flex md:w-1/2 md:max-w-[50%] md:p-5"
        images={data.screenshots}
      />
    </m.div>
  );
}
