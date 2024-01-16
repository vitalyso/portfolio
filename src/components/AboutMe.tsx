import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { RadialGradiendBg } from "~/components/RadialGradiendBg";

export function AboutMe() {
  return (
    <section className="relative overflow-y-hidden">
      <RadialGradiendBg />

      <div className="mx-auto max-w-[740px] min-h-[800px] flex flex-col items-center justify-center relative">
        <Avatar className="w-36 h-36">
          <AvatarImage src="/me.jpg" alt="Vitaly" />
        </Avatar>

        <div className="text-white text-2xl font-hero leading-loose">
          Hi, I’m Vitaly
        </div>

        <h1 className="text-center text-white text-5xl font-semibold font-hero leading-tight">
          I build complex modern apps while keeping it simple
        </h1>

        <div className="my-4 text-center text-white text-base font-light">
          I’m a freelance software developer with over 10 years of experience in
          building complex web-based applications. For the last 8 years, I've
          been focusing on the frontend side development and architecture, but I
          can still do backend work as needed. I continuously improve my skills,
          learn new approaches, best practices and technologies, so you can be
          sure I will do my best to make your project successful.
        </div>

        <Button
          size="lg"
          className="rounded-full hover:shadow-lg hover:shadow-primary-500/50"
        >
          Hire me
        </Button>
      </div>
    </section>
  );
}
