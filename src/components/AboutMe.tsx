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

        <h1 className="text-center text-white text-xl md:text-5xl font-semibold font-hero leading-tight">
          I build complex modern apps while keeping it simple
        </h1>

        <p className="my-4 text-center text-white/90 text-base font-light">
          Crafting modern apps with a hint of simplicity is my thing. With solid
          12+ years in professional software development, I've mastered the
          skill of creating detailed web-based applications. While I've been
          immersed in frontend development for the past 8 years, I'm also no
          stranger to the backend scene when it comes calling.
          <br />
          <br />I believe in continual growth, constantly exploring the latest
          approaches, best practices, and cutting-edge technologies. Your
          project is my focus, and I'm dedicated to making it a success. Ready
          to dive in? Share a bit about your project below, and let's make
          things happen together! 🚀
        </p>

        <NavButton anchor="contact" size="lg" className="w-full md:w-auto">
          Let's chat
        </NavButton>
      </div>
    </section>
  );
}
