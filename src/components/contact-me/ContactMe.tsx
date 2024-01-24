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
        className="md:w-[400px] flex flex-col gap-2.5 select-none"
      >
        <h2 className="text-white text-4xl font-bold font-title">
          Let’s build something fantastic together
        </h2>
        <p className="font-light text-white/90">
          Hey there! 🙋🏻‍♂️ Exciting times ahead! I'm thrilled that you've dropped
          by. Whether you've got a groundbreaking idea or just a spark of
          inspiration, I'm here to turn it into something extraordinary. Let's
          kick off this digital adventure together!
          <br />
          <br />
          Share a few details, like your name, email, and spill the beans on
          your project dreams. The more you tell me, the better I can tailor our
          collaboration. I can't wait to dive in, code, and create magic! Ready
          when you are. Let's build something fantastic! 🌟
        </p>
        <SocialMedia className="hidden md:flex" />
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
