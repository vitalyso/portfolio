import { IconGitHub } from "~/components/icons/IconGitHub";
import { IconLinkedIn } from "~/components/icons/IconLinkedIn";
import { IconTwitter } from "~/components/icons/IconTwitter";
import { IconMail } from "~/components/icons/IconMail";
import { ContactForm } from "~/components/ContactForm";

export function ContactMe() {
  return (
    <section className="w-full max-w-screen-lg mx-auto pt-40 grid grid-cols-2 gap-5">
      <div className="w-[400px] flex flex-col gap-2.5">
        <h2 className="text-white text-4xl font-bold font-title">
          Let’s build something fantastic together
        </h2>
        <p className="font-light">
          Hey there! 🚀 Exciting times ahead! I'm thrilled that you've dropped
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

        <div className="flex gap-4 mt-2">
          <a
            className="hover:text-primary-500"
            href="https://github.com/sivkoff"
            target="_blank"
          >
            <IconGitHub className="h-4 w-4" />
          </a>
          <a
            className="hover:text-primary-500"
            href="https://twitter.com/vitaly_so"
            target="_blank"
          >
            <IconTwitter className="h-4 w-4" />
          </a>
          <a
            className="hover:text-primary-500"
            href="https://www.linkedin.com/in/vitalyso"
            target="_blank"
          >
            <IconLinkedIn className="h-4 w-4" />
          </a>
          <a className="hover:text-primary-500" href="mailto:">
            <IconMail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
