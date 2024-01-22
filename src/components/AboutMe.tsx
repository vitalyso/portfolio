import { RadialGradiendBg } from "~/components/RadialGradiendBg";
import { NavButton } from "~/components/NavButton";
import Image from "next/image";

export function AboutMe() {
  return (
    <section
      id="about"
      className="relative md:overflow-y-hidden py-10 px-5 md:pt-60 md:pb-0"
    >
      <RadialGradiendBg />

      <div className="mx-auto max-w-[620px] pb-5 flex flex-col items-center relative">
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

        <h1 className="text-center text-white text-3xl my-5 md:text-5xl font-black font-hero leading-tight">
          I{" "}
          <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
            build
          </span>{" "}
          complex <br className="hidden md:inline" />
          modern <span className="text-primary-500">apps</span> while
          <br className="hidden md:inline" /> keeping it{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent">
            simple
          </span>
        </h1>

        <p className="md:my-5 text-center text-white/90 text-base font-light">
          A freelance software developer with 12+ years in crafting high quality
          modern apps. Specializing in frontend for the last 8 years, I
          seamlessly blend it with backend expertise. Committed to constant
          growth, I'm always exploring the latest in tech to ensure your
          project's success. Excited to hear about your project – let's make
          things happen together! 🚀
        </p>

        <NavButton anchor="contact" size="lg" className="mt-5 w-full md:w-auto">
          Let's chat
        </NavButton>
      </div>
    </section>
  );
}
