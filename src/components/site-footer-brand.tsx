"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const VIEWBOX_WIDTH = 1410;

/**
 * Footer logotype — same interaction/layout as chanhdai.com
 * (half-cropped mark + mouse-follow gradient fill).
 */
export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion();

  const gradientX1Raw = useMotionValue(0.5);
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    );
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    gradientX1Raw.set(0.5);
  };

  return (
    <div className="relative screen-line-bottom after:z-[1] after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Jahangir"
          >
            {/* Block grid wordmark — same crop/scale treatment as chanhdai */}
            <text
              x="705"
              y="210"
              textAnchor="middle"
              lengthAdjust="spacingAndGlyphs"
              textLength="1340"
              fill="url(#paint0_linear_1145_73)"
              style={{
                fontFamily:
                  "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
                fontSize: "220px",
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              JAHANGIR
            </text>

            <text
              x="705"
              y="210"
              textAnchor="middle"
              lengthAdjust="spacingAndGlyphs"
              textLength="1340"
              className="fill-none stroke-foreground/10"
              strokeWidth="2"
              style={{
                fontFamily:
                  "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
                fontSize: "220px",
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              JAHANGIR
            </text>

            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="705"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
