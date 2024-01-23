import { m } from "framer-motion";

interface Props {
  avatar: string;
  name: string;
  company: string;
  feedback: string;
  index: number;
}

export function ClientFeedback({
  avatar,
  name,
  company,
  feedback,
  index,
}: Props) {
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
