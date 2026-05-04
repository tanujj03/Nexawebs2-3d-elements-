"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../ui/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export function Reveal({ className, children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 12 }
      }
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

