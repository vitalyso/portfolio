import Head from "next/head";
import { m } from "framer-motion";
import { Header } from "~/components/Header";
import { ContactMe } from "~/components/contact-me/ContactMe";
import { Footer } from "~/components/Footer";
import { MetaTags } from "~/components/MetaTags";
import { requestPortfolioList } from "~/lib/request-portfolio";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { PortfolioItem } from "~/types";
import { WorkList } from "~/components/work-list/WorkList";

export default function WorkPage(
  props: InferGetServerSidePropsType<typeof getStaticProps>,
) {
  return (
    <m.div
      exit={{
        opacity: 0,
        scale: 1.1,
        y: 40,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Head>
        <title>👨🏻‍💻Vitaly Sivkov | Full-stack developer</title>
        <MetaTags />
      </Head>

      <Header initial="work" spy={false} />
      <WorkList items={props.data} />
      <ContactMe />
      <Footer />
    </m.div>
  );
}

type Data = PortfolioItem[];

export const getStaticProps = (async (ctx) => {
  try {
    const data = await requestPortfolioList();
    return { props: { data } };
  } catch (e) {
    return { notFound: true };
  }
}) satisfies GetServerSideProps<{ data: Data }>;
