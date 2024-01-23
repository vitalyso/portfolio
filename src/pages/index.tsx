import { m } from "framer-motion";
import { Header } from "~/components/Header";
import { AboutMe } from "~/components/AboutMe";
import { FeaturedWork } from "~/components/FeaturedWork";
import { HappyClients } from "~/components/HappyClients";
import { ContactMe } from "~/components/ContactMe";
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
      <Header />
      <AboutMe />
      <FeaturedWork />
      <HappyClients />
      <ContactMe />
      <Footer />
    </m.div>
  );
}
