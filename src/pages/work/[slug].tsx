"use client";

import Link from "next/link";
import { m } from "framer-motion";

export default function Work() {
  return (
    <m.main
      className="flex flex-col min-h-screen items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
      }}
    >
      <Link className="mb-2.5" href="/">
        Home
      </Link>
      <h1 className="font-black text-5xl">WORK</h1>
    </m.main>
  );
}
