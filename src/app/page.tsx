import { Header } from "~/components/Header";
import { AboutMe } from "~/components/AboutMe";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <AboutMe />
    </main>
  );
}
