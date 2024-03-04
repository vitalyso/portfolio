import * as React from "react";
import { useWindowSize } from "react-use";
import { m } from "framer-motion";
import { LogoDocker } from "~/components/logos/LogoDocker";
import { LogoPostgres } from "~/components/logos/LogoPostgres";
import { LogoGraphql } from "~/components/logos/LogoGraphql";
import { LogoElectron } from "~/components/logos/LogoElectron";
import { LogoMobx } from "~/components/logos/LogoMobx";
import { LogoNext } from "~/components/logos/LogoNext";

const logos = [
  <LogoDocker />,
  <LogoPostgres />,
  <LogoGraphql />,
  <LogoElectron />,
  <LogoMobx />,
  <LogoNext />,
  <LogoDocker />,
  <LogoPostgres />,
  <LogoGraphql />,
  <LogoElectron />,
  <LogoMobx />,
  <LogoNext />,
];

export function LogosAnimation() {
  const numLogos = 11;
  const distance = 420;
  const initialDistance = 1000;

  const { width, height } = useWindowSize();
  const center = [width / 2, height / 2];

  if (typeof window === "undefined") {
    return <></>;
  }

  const angle = 360 - 90;
  const dangle = 360 / numLogos;
  const points = Array.from({ length: numLogos }).map((_, i) => {
    const a = (angle + dangle * i) * (Math.PI / 180);
    const x = Math.cos(a) * distance + center[0] - 16;
    const y = Math.sin(a) * distance + center[1] - 16;
    const initialX = Math.cos(a) * initialDistance + center[0] - 24;
    const initialY = Math.sin(a) * initialDistance + center[1] - 24;
    const rotation = Math.atan2(y - center[1], x - center[0]) * (90 / Math.PI);

    return { x, y, initialX, initialY, rotation };
  });

  console.log(center);
  console.log(points);

  return (
    <div>
      <m.div
        className="absolute origin-center inset-0 z-20 flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {points.map((point, i) => {
          return (
            <m.div
              className="absolute"
              initial={{ left: point.initialX, top: point.initialY }}
              animate={{ left: point.x, top: point.y }}
              transition={{ duration: 1, delay: 0.8 }}
              key={point.y}
              style={{
                left: point.x,
                top: point.y,
              }}
            >
              <m.div
                className="w-8 h-8"
                initial={{ rotate: 360 }}
                animate={{ rotate: 0 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {logos[i]}
              </m.div>
            </m.div>
          );
        })}
      </m.div>
    </div>
  );
}

function LogoAnimation({ children }: { children: React.ReactNode }) {
  return (
    <m.div
    // initial={{ y: 20, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // transition={{ duration: 0.75, delay: 0.3 }}
    >
      {children}
    </m.div>
  );
}
