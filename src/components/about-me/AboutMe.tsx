import Image from "next/image";
import { m } from "framer-motion";
import { NavButton } from "~/components/NavButton";

const ANIMATION_DURATION = 0.75;

export function AboutMe() {
  return (
    <section id="about" className="py-10 px-5 md:pt-80 md:pb-0">
      <div className="mx-auto max-w-[620px] pb-5 flex flex-col items-center relative">
        <m.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.1 }}
          className="text-white text-base md:text-2xl mt-3 font-hero leading-loose"
        >
          hi, i’m vitaly
        </m.div>

        <m.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
          className="text-center text-white text-3xl my-5 md:mb-0 md:text-5xl font-black font-hero leading-tight"
        >
          {/* From idea to launch to growth */}i build{" "}
          <span className="bg-gradient-to-b from-primary-300 to-primary-600 bg-clip-text text-transparent">
            high-quality
          </span>{" "}
          web apps
        </m.h1>

        <m.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.3 }}
          className="md:my-5 text-center text-white/90 font-light text-lg"
        >
          software developer with over 12 years of experience crafting
          high-quality, modern apps. for the past 8 years i specialized in
          react.js and node.js, but am always exploring other areas to enrich my
          skill set.
        </m.p>

        <m.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 1.2 }}
        >
          <NavButton
            anchor="contact"
            size="lg"
            className="mt-5 w-full md:w-auto"
          >
            let's chat
          </NavButton>
        </m.div>
      </div>
    </section>
  );
}
