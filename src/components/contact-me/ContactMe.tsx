import { m } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { SocialMedia } from "./SocialMedia";

export function ContactMe() {
  const leftProps = getAnimationProps(true);
  const rightProps = getAnimationProps(false);

  return (
    <section
      id="contact"
      className="w-full max-w-screen-lg mx-auto pt-10 pb-5 px-5 md:pt-40 md:pb-0 grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden"
    >
      <m.div
        {...leftProps}
        className="md:pr-4 flex flex-col gap-2.5 select-none"
      >
        <h2 className="text-white text-4xl font-bold font-title">
          Let's work together
        </h2>
        <p className="font-light text-neutral-200 leading-[1.25] text-lg">
          Senior full-stack developer (React & Node.js) with 10+ years
          experience. I write maintainable code and understand the tradeoffs
          between shipping fast and building right.
          <br />
          <br />
          Looking for help with a new feature, refactoring a messy codebase, or
          building something from scratch? I work independently and think beyond
          the implementation.
          <br />
          <br />
          Reach out with your project details and timeline - I typically respond
          within 24 hours.
        </p>
        <div className="hidden md:flex flex-col gap-4 pt-2">
          <div className="border-b border-white/15 max-w-60" />
          <SocialMedia />
        </div>
      </m.div>
      <m.div {...rightProps}>
        <ContactForm />
        <SocialMedia className="md:hidden w-full justify-center mt-[60px]" />
      </m.div>
    </section>
  );
}

function getAnimationProps(left: boolean) {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.6 },
    variants: {
      visible: {
        x: 0,
        opacity: 1,
        scale: 1,
      },
      hidden: {
        x: left ? -40 : 40,
        opacity: 0,
        scale: 1,
      },
    },
  };
}
