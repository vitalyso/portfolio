import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { RadialGradiendBg } from "~/components/RadialGradiendBg";

export function AboutMe() {
  return (
    <section id="about" className="relative overflow-y-hidden pt-80">
      <RadialGradiendBg />

      <div className="mx-auto max-w-[740px] flex flex-col items-center relative">
        <Avatar className="w-36 h-36">
          <AvatarImage src="/me.jpg" alt="Vitaly" />
        </Avatar>

        <div className="text-white text-2xl font-hero leading-loose">
          Hi, I’m Vitaly
        </div>

        <h1 className="text-center text-white text-5xl font-semibold font-hero leading-tight">
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

        <Button size="lg">Let's chat</Button>
      </div>
    </section>
  );
}
