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
        <p>
          Tousled tilde semiotics fam prism art. Party a pok master pbr&b
          hammock. Cardigan banjo paleo cleanse ramps. Cleanse tacos you tofu
          four put street 3-moon vinegar. Gentrify street austin poke gochujang
          boys organic umami.
          <br />
          <br />
          Drinking 90's wayfarers adaptogen mumblecore. Try-hard bruh baby yes
          chia plant plaid. Slow-carb bird intelligentsia pug coloring. Probably
          sartorial disrupt fanny chillwave copper. Health vinegar street art
          kickstarter.
        </p>

        <div className="flex gap-4">
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
