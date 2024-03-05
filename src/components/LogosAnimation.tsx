import * as React from "react";
import { useWindowSize } from "react-use";
import { m, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export function LogosAnimation() {
  const { width, height } = useWindowSize();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [1, 0], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const points = useMemo(() => generatePoints(width, height, 200), []);

  return (
    <div>
      <m.div
        className="-z-10 fixed origin-center inset-0 flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        style={{ y, scale }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          // repeatType: "reverse",
          duration: 300,
          ease: "linear",
        }}
      >
        {points.map((point, i) => {
          return (
            <m.div
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 1, delay: 0.8 }}
              transition={{
                delay: 0.8 + (1.1 - i * 0.1),
                duration: 1,
                // type: "spring",
                // damping: 7,
                // mass: 0.3,
                // stiffness: 50,
              }}
              key={point.y}
              style={{
                left: point.x,
                top: point.y,
              }}
            >
              <m.div
                className="bg-primary-500 rounded-full"
                style={{
                  width: point.size,
                  height: point.size,
                  opacity: point.opacity,
                }}
              />
            </m.div>
          );
        })}
      </m.div>
    </div>
  );
}

function generatePoints(width: number, height: number, numPoints: number) {
  const screenParts = 6;
  const partWidth = width / screenParts;
  const pointsPerPart = numPoints / screenParts;
  const points = [];
  const pointSize = 8;

  // create points for each part
  for (let i = 0; i < screenParts; i++) {
    const partX = partWidth * i;
    const partY = height;

    for (let j = 0; j < pointsPerPart; j++) {
      const x = partX + Math.random() * partWidth;
      const y = partY * Math.random();
      const size = Math.random() * pointSize;

      // opacity depends on size, the bigger the size, the more transparent
      const opacity = (size / pointSize) * 0.8;

      points.push({ x, y, size, opacity });
    }
  }

  return points;
}
