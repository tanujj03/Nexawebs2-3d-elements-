"use client";

import { cn } from "../ui/cn";

type Props = {
  className?: string;
};

export function Spotlight({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0",
        "bg-[radial-gradient(900px_520px_at_50%_15%,rgba(255,255,255,.85),rgba(124,86,255,.20)_30%,transparent_60%)]",
        "opacity-60 mix-blend-soft-light",
        className,
      )}
    />
  );
}

