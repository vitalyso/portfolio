import { Header } from "~/components/Header";
import { AboutMe } from "~/components/AboutMe";
import { FeaturedWork } from "~/components/FeaturedWork";
import { HappyClients } from "~/components/HappyClients";
import { ContactMe } from "~/components/ContactMe";
import { Footer } from "~/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:pb-20">
      <Header />
      <AboutMe />
      <FeaturedWork />
      <HappyClients />
      <ContactMe />
      <Footer />
    </main>
  );
}
