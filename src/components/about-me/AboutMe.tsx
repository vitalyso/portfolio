import Image from "next/image";
import { m } from "framer-motion";
import { NavButton } from "~/components/NavButton";
import { RadialGradientBg } from "./RadialGradientBg";

const ANIMATION_DURATION = 0.75;

export function AboutMe() {
  return (
    <section
      id="about"
      className="relative md:overflow-y-hidden py-10 px-5 md:pt-60 md:pb-0"
    >
      <RadialGradientBg />

      <div className="mx-auto max-w-[620px] pb-5 flex flex-col items-center relative">
        <m.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: ANIMATION_DURATION,
          }}
        >
          <Image
            className="w-36 h-36 rounded-full"
            src="/me.webp"
            alt="Vitaly"
            width="150"
            height="150"
          />
        </m.div>

        <m.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.1 }}
          className="text-white text-base md:text-2xl mt-3 font-hero leading-loose"
        >
          Hi, I’m Vitaly
        </m.div>

        <m.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
          className="text-center text-white text-3xl mt-5 md:text-5xl font-black font-hero leading-tight"
        >
          {/* From idea to launch to growth */}
          Helping you to <br className="md:hidden" />
          <span className="bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-transparent">
            build
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-transparent">
            scale
          </span>{" "}
          <br className="md:hidden" />
          your{" "}
          <span className="bg-gradient-to-b from-primary-300 to-primary-500 bg-clip-text text-transparent">
            product
          </span>
        </m.h1>

        <m.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.3 }}
          className="md:my-5 text-center text-white/90 font-light text-lg"
        >
          A freelance software developer with 12+ years in crafting high quality
          modern apps. Specializing in frontend for the last 8 years, I
          seamlessly blend it with backend expertise. Committed to constant
          growth, I'm always exploring the latest in tech to ensure your
          project's success. Excited to hear about your project – let's make
          things happen together! 🚀
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
            Let's chat
          </NavButton>
        </m.div>
      </div>
    </section>
  );
}
