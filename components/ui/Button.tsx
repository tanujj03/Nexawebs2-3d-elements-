import type { ComponentProps } from "react";
import { cn } from "./cn";

type Props = ComponentProps<"a"> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: Props) {
  const base =
    [
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full",
      "px-6 py-3.5 text-sm font-semibold tracking-[-0.01em]",
      "transition-all duration-300 ease-out will-change-transform focus:outline-none",
      "focus-visible:ring-2 focus-visible:ring-violet-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
      "hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,.15),0_8px_24px_rgba(0,0,0,.10)] active:translate-y-0",
    ].join(" ");

  const styles =
    variant === "primary"
      ? [
          "text-zinc-950 shadow-premium transition-colors duration-300 group-hover:text-white",
          "bg-[linear-gradient(180deg,rgba(255,255,255,.78),rgba(255,255,255,.56))]",
          "",
          "ring-soft",
          "",
        ].join(" ")
      : [
          "text-zinc-950 transition-colors duration-300 group-hover:text-white",
          "bg-white/40 ",
          "ring-soft",
        ].join(" ");

  return (
    <a className={cn(base, styles, className)} {...props}>
      {/* Background fill animation */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-full transition-transform duration-300 ease-out",
          variant === "primary"
            ? "bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600"
            : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900",
          "-translate-x-full group-hover:translate-x-0",
        )}
      />
      
      {/* glow accent */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-10 rounded-full blur-2xl opacity-0 transition-opacity duration-300",
          variant === "primary"
            ? "bg-[radial-gradient(circle_at_30%_20%,rgba(126,87,255,.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(32,182,255,.22),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_30%_20%,rgba(255,196,99,.22),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(126,87,255,.18),transparent_55%)]",
          "group-hover:opacity-100",
        )}
      />
      
      {/* chrome rim */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          "bg-[linear-gradient(135deg,rgba(255,255,255,.75),rgba(255,255,255,.10),rgba(255,255,255,.55))]",
          "opacity-60",
          "mix-blend-overlay",
        )}
      />
      
      {/* sheen */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -left-1/2 top-0 h-full w-[140%]",
          "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent)]",
          "opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-45",
          "translate-x-[-35%] group-hover:translate-x-[35%] transition-transform duration-700",
        )}
      />
      
      <span className="relative z-10">{props.children}</span>
    </a>
  );
}

