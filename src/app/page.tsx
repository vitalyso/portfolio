import { Header } from "~/components/Header";
import { AboutMe } from "~/components/AboutMe";
import { FeaturedWork } from "~/components/FeaturedWork";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-20">
      <Header />
      <AboutMe />
      <FeaturedWork />
    </main>
  );
}
