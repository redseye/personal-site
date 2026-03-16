"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 20,
  duration = 0.6,
}: FadeInProps) {
  const initial: Record<string, number> = { opacity: 0 };
  const animate: Record<string, number> = { opacity: 1 };

  switch (direction) {
    case "up": initial.y = distance; animate.y = 0; break;
    case "down": initial.y = -distance; animate.y = 0; break;
    case "left": initial.x = distance; animate.x = 0; break;
    case "right": initial.x = -distance; animate.x = 0; break;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
