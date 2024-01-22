import * as React from "react";
import { domAnimation, LazyMotion } from "framer-motion";

export function Motion({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
