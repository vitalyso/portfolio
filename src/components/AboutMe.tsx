import { RadialGradiendBg } from "~/components/RadialGradiendBg";
import { NavButton } from "~/components/NavButton";
import Image from "next/image";

export function AboutMe() {
  return (
    <section
      id="about"
      className="relative md:overflow-y-hidden py-10 px-5 md:pt-80 md:pb-0"
    >
      <RadialGradiendBg />

      <div className="mx-auto max-w-[740px] pb-5 flex flex-col items-center relative">
        <Image
          className="w-36 h-36 rounded-full"
          src="/me.webp"
          alt="Vitaly"
          width="150"
          height="150"
        />

        <div className="text-white text-base md:text-2xl mt-3 font-hero leading-loose">
          Hi, I’m Vitaly
        </div>

        <h1 className="text-center text-white text-xl my-5 md:text-5xl font-semibold font-hero leading-tight">
          I build complex modern apps while keeping it simple
        </h1>

        <p className="my-4 text-center text-white/90 text-base font-light">
          A software developer with 12+ years in crafting high quality modern
          apps. Specializing in frontend for 8 years, I seamlessly blend it with
          backend expertise. Committed to constant growth, I'm always exploring
          the latest in tech to ensure your project's success. Excited to hear
          about your project – let's make things happen together! 🚀
        </p>

        <NavButton anchor="contact" size="lg" className="w-full md:w-auto">
          Let's chat
        </NavButton>
      </div>
    </section>
  );
}
