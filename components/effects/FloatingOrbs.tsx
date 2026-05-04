"use client";

import { cn } from "../ui/cn";

type Props = {
  className?: string;
};

export function FloatingOrbs({ className }: Props) {

  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        data-orb="o1"
        className={cn(
          "absolute -top-10 right-[10%] h-56 w-56 rounded-[40%]",
          "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.9),rgba(255,255,255,.25)_40%,rgba(124,86,255,.12)_70%,transparent)]",
          "shadow-premium ring-soft ",
          "opacity-70",
        )}
      />
      <div
        data-orb="o2"
        className={cn(
          "absolute top-16 left-[6%] h-72 w-72 rounded-[44%]",
          "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.95),rgba(255,255,255,.22)_40%,rgba(32,182,255,.14)_70%,transparent)]",
          "shadow-premium ring-soft ",
          "opacity-60",
        )}
      />
      <div
        data-orb="o3"
        className={cn(
          "absolute bottom-20 right-[18%] h-44 w-44 rounded-[36%]",
          "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.9),rgba(255,255,255,.2)_42%,rgba(255,196,99,.14)_72%,transparent)]",
          "shadow-premium ring-soft ",
          "opacity-60",
        )}
      />
      <div
        data-orb="o4"
        className={cn(
          "absolute bottom-6 left-[22%] h-36 w-60 rounded-[999px]",
          "bg-[linear-gradient(135deg,rgba(255,255,255,.6),rgba(255,255,255,.15),rgba(124,86,255,.10))]",
          "shadow-premium ring-soft ",
          "opacity-55",
        )}
      />
    </div>
  );
}

