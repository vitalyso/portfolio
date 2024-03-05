import { PortfolioItem } from "~/types";
import { Container } from "~/components/utils/Container";
import Image from "next/image";
import Link from "next/link";

interface Props {
  items: PortfolioItem[];
}

function sortByOrder(a: PortfolioItem, b: PortfolioItem) {
  return a.order - b.order;
}

export function WorkList({ items }: Props) {
  return (
    <Container className="pt-10 md:pt-40">
      <h1 className="text-4xl font-bold font-title mb-4">Works</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {items.sort(sortByOrder).map((item) => (
          <WorkListItem key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
}

function WorkListItem({ data }: { data: PortfolioItem }) {
  return (
    <Link
      passHref
      href={`/work/${data.id}`}
      className="bg-white/10 p-5 rounded-xl h-60 relative overflow-hidden  hover:scale-110 transition duration-500 hover:grayscale-0 group ease-out"
    >
      <div className="absolute inset-0">
        <Image
          src={data.cover ?? data.images[0]}
          alt={data.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h1 className="absolute w-full -bottom-20 left-0 opacity-0 p-2 text-xl font-bold text-center bg-black/70 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-out">
        {data.title}
      </h1>
    </Link>
  );
}
