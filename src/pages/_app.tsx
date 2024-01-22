import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Montserrat, Mukta_Mahee } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "~/lib/utils";
import { Motion } from "~/components/utils/Motion";

const heroFont = Montserrat({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hero",
});

const bodyFont = Mukta_Mahee({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const titleFont = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Vitaly Sivkov",
  description: "Software Engineer",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={cn(
        "flex flex-col min-h-screen",
        heroFont.variable,
        bodyFont.variable,
        titleFont.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
