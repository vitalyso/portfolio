import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
        <script
          defer
          src="/stats/script.js"
          data-website-id="56322ae3-bb07-4025-b953-dc01b2bfdaa0"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
