import { Container } from "~/components/utils/Container";
import { ClientFeedback } from "./ClientFeedback";

const clients = [
  {
    avatar: "/clients/bruce.webp",
    name: "Bruce Pomeroy",
    company: "Pomeroy Digital, Inc.",
    // language=TEXT
    feedback:
      "Even though we have quite a complex codebase, Vitaly was able to figure it out and make excellent progress almost immediately. He left each area of the code that he touched, in a much cleaner and more organized state than he found it. He added unit tests where we had none before and took our code another level. Even though I was quite familiar with the codebase, I still find the areas that Vitaly has worked on much easier to understand than they were before. \n\nHe made the effort to understand the specific business logic and unique challenges of our business domain as well as the code. He took a lot of care and was able to implement some substantial features and refactorings, while ensuring that they worked nicely with the rest of the project architecture and didn't introduce new issues. I would certainly recommend Vitaly as a very proficient JavaScript developer and architect.",
  },
  {
    avatar: "/clients/dennis.webp",
    name: "Dennis Mueller",
    company: "Amie, CEO",
    feedback:
      "Vitaly is a great engineer, who knows his craft. He'll work hard with you on building something that lasts. We feel very fortunate to work with him on a daily basis.\n" +
      "\n" +
      "He's quick to learn anything and will do a great job with whatever you have him work on. He did/does some of the most fundamental work in our product. And he'll leave everything he touches in a better spot (with written tests etc).\n" +
      "\n" +
      "On top of that he's an awesome person and a nice addition to any team. You'll enjoy every minute you spend with Vitaly.",
  },
  {
    avatar: "/clients/ash.webp",
    name: "Ash Sheikh",
    company: "NextHQ",
    feedback:
      "Vitaly is very skilled and reliable. He's able to understand the goals of the business, ask right questions and work with existing codebases. His frontend skills are great which is rare for someone who's also good with backend. I really appreciate working with him.",
  },
  {
    avatar: "/clients/liccy.webp",
    name: "Liccy Fuentes",
    company: "InkSkill, CEO",
    feedback:
      "Vitaly is a top tier developer, reliable, flexible and very committed to what he does. Always keeping his mind on the game, even when under pressure he's able to keep team morale up and deliver without altering the quality of his output. I've been humbled to work with such a bright mind as his, his determination and focus allowed the team to provide over the top results when the odds were all against us.",
  },
  {
    avatar: "/clients/braden.webp",
    name: "Braden Ericson",
    company: "Sparrow Charts, Founder",
    feedback:
      "As an engineer by trade, I am very conscious of the engineering freelancers I hire - they need to be self-reliant, good at what they do, flexible, and ultimately able to deliver. On top of that, I need to be able to read their code, understand what’s going on, and collaborate with the individual on the same codebase. This has made hiring online a challenge, as many candidates struggle with the collaboration and the code quality I expect from a freelance partner. Vitaly is the only freelancer I can confidently recommend to anyone seeking help with their engineering work.\n" +
      "\n" +
      "I was referred to Vitaly by a friend, who I quote, said, “he is the real deal. hire him.” Just coming off of a bad contract online, I was skeptical, but decided to take my friend’s advice and reach out.\n" +
      "\n" +
      "Vitaly gave an incredibly accurate timeline estimation, delivered under budget, and has been consistently available to make tweaks or fix odd bugs that have shown up after completion; even with a full workload from other clients.   If I had the money, I’d pay him whatever he wanted and keep him full-time, but I’m not there yet. So writing this recommendation is the least I can do. If you’re thinking about hiring Vitaly, do it. You will not be disappointed. He IS the real deal.",
  },
  {
    avatar: "/clients/denis.webp",
    name: "Denis Frolov",
    company: "Songsterr, CEO",
    feedback: "Vitaly is an outstanding freelancer. Hire him if you can.",
  },
];

export function HappyClients() {
  return (
    <Container
      id="feedback"
      as="section"
      className="py-10 md:pt-40 md:pb-0 flex flex-col items-center gap-5 overflow-hidden"
    >
      <h2 className="text-white text-4xl font-bold font-title">
        Happy Clients
      </h2>

      <div className="flow-root">
        <div className="columns-1 md:columns-2">
          {clients.map((client, index) => (
            <div className="pt-5" key={client.avatar}>
              <ClientFeedback index={index} {...client} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
