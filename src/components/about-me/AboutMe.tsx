import Image from "next/image";
import { m } from "framer-motion";
import { NavButton } from "~/components/NavButton";

const ANIMATION_DURATION = 0.75;

export function AboutMe() {
  return (
    <section id="about" className="py-10 px-5 md:pt-[280px] md:pb-0">
      <div className="mx-auto max-w-[550px] pb-5 flex flex-col items-center relative">
        <m.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: ANIMATION_DURATION,
          }}
        >
          <Image
            className="w-32 h-32 rounded-full"
            src="/me.webp"
            alt="Vitaly"
            width="128"
            height="128"
          />
        </m.div>

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
          <span className="bg-gradient-to-b from-primary-300 to-primary-600 bg-clip-text text-transparent">
            product
          </span>{" "}
          engineer
        </m.h1>

        <m.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.3 }}
          className="md:my-5 text-center text-neutral-200 leading-[1.25] font-light text-lg"
        >
          Senior full-stack developer (React & Node.js) focused on product
          engineering. I solve technical problems and balance shipping fast with
          building right. 10+ years building maintainable products.
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
