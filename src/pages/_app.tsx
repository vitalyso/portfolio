import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Montserrat, Mukta_Mahee } from "next/font/google";
import { Motion } from "~/components/utils/Motion";
import { cn } from "~/lib/utils";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { useEffect } from "react";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

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

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: "2025-11-30",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    });
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Motion>
        <main
          className={cn(
            "flex flex-col min-h-screen",
            heroFont.variable,
            bodyFont.variable,
            titleFont.variable,
          )}
        >
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </main>
      </Motion>
    </PostHogProvider>
  );
}
