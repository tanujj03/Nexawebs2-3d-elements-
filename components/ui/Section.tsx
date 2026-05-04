import type { PropsWithChildren } from "react";
import { cn } from "./cn";

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  bleed?: boolean;
  size?: "default" | "wide";
}>;

export function Section({
  id,
  className,
  children,
  bleed = false,
  size = "default",
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-5 sm:px-8",
        "py-24 sm:py-32 lg:py-40",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          bleed ? "max-w-none" : size === "wide" ? "max-w-7xl" : "max-w-6xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}

