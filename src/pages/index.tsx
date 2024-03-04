import Head from "next/head";
import { m } from "framer-motion";
import { Header } from "~/components/Header";
import { AboutMe } from "~/components/about-me/AboutMe";
import { FeaturedWork } from "~/components/featured-work/FeaturedWork";
import { HappyClients } from "~/components/happy-clients/HappyClients";
import { ContactMe } from "~/components/contact-me/ContactMe";
import { Footer } from "~/components/Footer";
import { MetaTags } from "~/components/MetaTags";

export default function Home() {
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
      <Header />
      <AboutMe />
      <FeaturedWork />
      <HappyClients />
      <ContactMe />
      <Footer />
    </m.div>
  );
}
