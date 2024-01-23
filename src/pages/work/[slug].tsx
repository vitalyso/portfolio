import Link from "next/link";
import { m } from "framer-motion";
import { IconCornerArrow } from "~/components/icons/IconCornerArrow";
import * as React from "react";

const data = {
  url: "https://amie.so",
  title: "Amie",
  content:
    "Boys migas charcoal 90's you normcore. Chillwave pin farm-to-table\nvice put. Pack yes carry aesthetic migas ugh. Listicle beer lo-fi\ntile pabst microdosing bottle. Gastropub slow-carb scenester\ncoloring hot affogato quinoa sustainable selfies lomo.\n\nBoys migas charcoal 90's you normcore. Chillwave pin farm-to-table\nvice put. Pack yes carry aesthetic migas ugh. Listicle beer lo-fi\ntile pabst microdosing bottle. Gastropub slow-carb scenester\ncoloring hot affogato quinoa sustainable selfies lomo.",
  skills: ["React", "Electron", "Node", "Tailwind", "Framer Motion", "Next.js"],
  scope: ["Frontend", "Backend", "Electron", "CI/CD", "DevOps", "Code Review"],
  details: ["2021-2023"],
  screenshots: [
    "/portfolio/livejam/1.png",
    "/portfolio/livejam/2.png",
    "/portfolio/livejam/3.png",
    "/portfolio/livejam/4.png",
  ],
};

const LIST_ANIMATION_DELAY = 0.5;

export default function Work() {
  return (
    <m.div
      className="flex w-full min-h-screen"
      exit={{
        y: 20,
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <m.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.75,
        }}
        className="w-1/2 max-w-[50%] py-20 px-10"
      >
        <div className="sticky top-40 max-w-screen-sm ml-auto">
          <Link className="text-primary-500 relative hover:underline" href="/">
            ← Back
          </Link>

          <h1 className="font-black text-5xl leading-normal">{data.title}</h1>
          <p className="font-light whitespace-pre-line">{data.content}</p>

          <div className="flex pt-5 font-light">
            <ul className="border-t-4 border-primary-500 w-40 px-5 pt-4">
              <AnimatedListItem
                className="font-bold text-xl mb-1 font-title -ml-1"
                index={-1}
              >
                Skills
              </AnimatedListItem>
              {data.skills.map((item, index) => (
                <AnimatedListItem key={item} index={index}>
                  {item}
                </AnimatedListItem>
              ))}
            </ul>

            <ul className="border-t-2 px-5 border-primary-600 w-40 pt-4">
              <AnimatedListItem
                className="font-bold text-xl mb-1 font-title -ml-1"
                index={-1}
                baseDelay={0.2}
              >
                Scope
              </AnimatedListItem>
              {data.scope.map((item, index) => (
                <AnimatedListItem baseDelay={0.2} key={item} index={index}>
                  {item}
                </AnimatedListItem>
              ))}
            </ul>

            <ul className="border-t px-5 border-primary-700 w-40 pt-4">
              <AnimatedListItem
                className="font-bold text-xl mb-1 font-title -ml-1"
                baseDelay={0.4}
                index={-1}
              >
                Timeframe
              </AnimatedListItem>
              {data.details.map((item, index) => (
                <AnimatedListItem baseDelay={0.4} key={item} index={index}>
                  {item}
                </AnimatedListItem>
              ))}
            </ul>
          </div>

          {data.url && (
            <m.a
              className="inline-flex items-center gap-1 mt-10 text-xl text-primary-500 font-bold hover:underline"
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
          )}
        </div>
      </m.div>
      <div className="w-1/2 max-w-[50%] flex flex-col gap-5 p-5 relative">
        {data.screenshots.map((src) => (
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px 0px 0px", amount: "some" }}
            transition={{ duration: 0.75 }}
            variants={{
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
            }}
            key={src}
            className="relative w-full"
          >
            <img
              className="object-contain rounded-xl"
              src={src}
              alt="Screenshot"
            />
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

function AnimatedListItem({
  children,
  index,
  className,
  baseDelay = 0,
}: {
  baseDelay?: number;
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <m.li
      className={className}
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay:
          LIST_ANIMATION_DELAY + baseDelay + (data.skills.length - index) * 0.1,
        duration: 0.5,
      }}
    >
      {children}
    </m.li>
  );
}
