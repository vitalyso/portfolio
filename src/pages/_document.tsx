import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OpenPanelComponent } from "@openpanel/nextjs";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
        {process.env.NODE_ENV === "production" && (
          <OpenPanelComponent
            clientId="0984658d-9408-4a44-a78b-2c5825e4d0c9"
            trackScreenViews={true}
            trackOutgoingLinks={true}
          />
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
