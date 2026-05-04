"use client";

import { cn } from "../ui/cn";

type Props = {
  className?: string;
  density?: number;
};

export function Particles({ className }: Props) {
  return (
    <div className={cn("absolute inset-0 opacity-30", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
    </div>
  );
}

