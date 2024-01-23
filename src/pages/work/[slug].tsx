import Link from "next/link";
import { m } from "framer-motion";
import { IconCornerArrow } from "~/components/icons/IconCornerArrow";

const screenshots = [
  "/portfolio/livejam/1.png",
  "/portfolio/livejam/2.png",
  "/portfolio/livejam/3.png",
  "/portfolio/livejam/4.png",
];

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

          <h1 className="font-black text-5xl leading-normal">Amie</h1>

          <p className="font-light">
            Boys migas charcoal 90's you normcore. Chillwave pin farm-to-table
            vice put. Pack yes carry aesthetic migas ugh. Listicle beer lo-fi
            tile pabst microdosing bottle. Gastropub slow-carb scenester
            coloring hot affogato quinoa sustainable selfies lomo.
            <br />
            <br />
            Boys migas charcoal 90's you normcore. Chillwave pin farm-to-table
            vice put. Pack yes carry aesthetic migas ugh. Listicle beer lo-fi
            tile pabst microdosing bottle. Gastropub slow-carb scenester
            coloring hot affogato quinoa sustainable selfies lomo.
          </p>

          <div className="flex pt-5 font-light">
            <ul className="border-t-4 border-primary-500 w-40 px-5 pt-4">
              <li className="font-bold text-xl mb-1 font-title -ml-1">
                Skills
              </li>
              <li>React</li>
              <li>Electron</li>
              <li>Node</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
              <li>Next.js</li>
            </ul>

            <ul className="border-t-2 px-5 border-primary-600 w-40 pt-4">
              <li className="font-bold text-xl mb-1 font-title -ml-1">Scope</li>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Electron</li>
              <li>CI/CD</li>
              <li>DevOps</li>
              <li>Code Reviews</li>
            </ul>

            <ul className="border-t px-5 border-primary-700 w-40 pt-4">
              <li className="font-bold text-xl mb-1 font-title -ml-1">
                Details
              </li>
              <li>2021-2023</li>
            </ul>
          </div>

          <a
            className="inline-flex items-center gap-1 mt-10 text-xl text-primary-500 font-bold hover:underline"
            target="_blank"
            href="#"
          >
            Open project <IconCornerArrow className="w-5 h-5 stroke-1" />
          </a>
        </div>
      </m.div>
      <div className="w-1/2 max-w-[50%] flex flex-col gap-5 p-5 relative">
        {screenshots.map((src, index) => (
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px 0px 0px", amount: "some" }}
            transition={{ duration: 0.5, delay: 0.1 + (index - 1) * 0.2 }}
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
