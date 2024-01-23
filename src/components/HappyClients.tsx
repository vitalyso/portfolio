import { m } from "framer-motion";
import { Container } from "~/components/utils/Container";

const clients = [
  {
    avatar: "/clients/bruce.webp",
    name: "Bruce Pomeroy",
    company: "Pomeroy Digital, Inc.",
    feedback:
      "Even though we have quite a complex codebase, Vitaly was able to figure it out and make excellent progress almost immediately. I would certainly recommend Vitaly as a very proficient JavaScript developer and architect.",
  },
  {
    avatar: "/clients/dennis.webp",
    name: "Dennis Mueller",
    company: "Amie, CEO",
    feedback:
      "Vitaly is a great engineer, who knows his craft. He'll work hard with you on building something that lasts. We feel very fortunate to work with him on a daily basis. He's quick to learn anything and will do a great job with whatever you have him work on.",
  },
  {
    avatar: "/clients/braden.webp",
    name: "Braden Ericson",
    company: "Sparrow Charts, Founder",
    feedback:
      "Vitaly is the only freelancer I can confidently recommend to anyone seeking help with their engineering work. If I had the money, I’d pay him whatever he wanted and keep him full-time, but I’m not there yet.",
  },
  {
    avatar: "/clients/ash.webp",
    name: "Ash Sheikh",
    company: "NextHQ, Designer",
    feedback:
      "Vitaly is very skilled and reliable. He's able to understand the goals of the business, ask right questions and work with existing codebases. His frontend skills are great which is rare for someone who's also good with backend. I really appreciate working with him.",
  },
  {
    avatar: "/clients/liccy.webp",
    name: "Liccy Fuentes",
    company: "InkSkill, CEO",
    feedback:
      "Vitaly is a top tier developer, reliable, flexible and very committed to what he does. Always keeping his mind on the game, even when under pressure he's able to keep team morale up and deliver without altering the quality of his output.",
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
      className="py-10 md:pt-40 md:pb-0 flex flex-col items-center gap-5"
    >
      <h2 className="text-white text-4xl font-bold font-title">
        Happy Clients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {clients.map((client, index) => (
          <ClientFeedback key={client.avatar} index={index} {...client} />
        ))}
      </div>
    </Container>
  );
}

function ClientFeedback({ avatar, name, company, feedback, index }: any) {
  const isEven = index % 2 === 0;
  const row = Math.floor(index / 2);

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + (row - 1) * 0.2 }}
      variants={{
        visible: {
          x: 0,
          opacity: 1,
          scale: 1,
        },
        hidden: {
          x: isEven ? -40 : 40,
          opacity: 0,
          scale: 1.1,
        },
      }}
      className="p-5 rounded-xl bg-white/10 select-none"
    >
      <div className="flex gap-2.5">
        <img className="w-10 h-10 rounded-full" src={avatar} alt={name} />
        <div className="flex-col justify-start items-start inline-flex">
          <div className="text-white text-base font-semibold leading-tight">
            {name}
          </div>
          <div className="text-white text-opacity-70 text-base font-light leading-tight">
            {company}
          </div>
        </div>
      </div>
      <div className="mt-3 font-light text-sm">“{feedback}”</div>
    </m.div>
  );
}
