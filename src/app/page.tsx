import { Header } from "~/components/Header";
import { RadialGradiendBg } from "~/components/RadialGradiendBg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <RadialGradiendBg />
      <Header />
    </main>
  );
}
