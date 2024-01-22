import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Vitaly Sivkov</title>
      </Head>
      <body>
        <SpeedInsights />
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
