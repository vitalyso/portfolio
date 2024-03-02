import Head from "next/head";
import { m } from "framer-motion";
import { Header } from "~/components/Header";
import { AboutMe } from "~/components/about-me/AboutMe";
import { FeaturedWork } from "~/components/featured-work/FeaturedWork";
import { HappyClients } from "~/components/happy-clients/HappyClients";
import { ContactMe } from "~/components/contact-me/ContactMe";
import { Footer } from "~/components/Footer";

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
        <title>👨🏻‍💻Vitaly Sivkov | Software developer</title>
        <meta
          name="description"
          content="Helping you to build and scale your product"
        />

        <meta property="og:url" content="https://vitaly.so" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="👨🏻‍💻Vitaly Sivkov | Software developer"
        />
        <meta
          property="og:description"
          content="Helping you to build and scale your product"
        />
        <meta property="og:image" content="/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vitaly.so" />
        <meta property="twitter:url" content="https://vitaly.so" />
        <meta
          name="twitter:title"
          content="👨🏻‍💻Vitaly Sivkov | Software developer"
        />
        <meta
          name="twitter:description"
          content="Helping you to build and scale your product"
        />
        <meta name="twitter:image" content="/og.png" />
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
