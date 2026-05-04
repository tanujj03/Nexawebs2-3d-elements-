"use client";

import { useEffect, useRef } from "react";
import { cn } from "../ui/cn";

type Props = { className?: string };

export function GlobalAtmosphere({ className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--lux-x", `${x}%`);
        el.style.setProperty("--lux-y", `${y}%`);
      });
    };

    el.style.setProperty("--lux-x", "55%");
    el.style.setProperty("--lux-y", "22%");
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10", className)}
    >
      {/* pearl gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_820px_at_50%_-220px,rgba(255,255,255,.95),transparent_62%),radial-gradient(900px_680px_at_15%_25%,rgba(32,182,255,.12),transparent_56%),radial-gradient(900px_680px_at_92%_35%,rgba(126,87,255,.12),transparent_56%),radial-gradient(850px_520px_at_55%_72%,rgba(255,196,99,.10),transparent_58%)]" />

      {/* reactive spotlight */}
      <div className="absolute inset-0 opacity-60 mix-blend-soft-light">
        <div className="absolute inset-0 bg-[radial-gradient(900px_560px_at_var(--lux-x,_55%)_var(--lux-y,_22%),rgba(255,255,255,.85),rgba(255,255,255,.16)_35%,transparent_62%)]" />
      </div>

      {/* subtle grid + scan */}
      <div className="absolute inset-0 opacity-[0.14] mix-blend-multiply">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,15,.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,15,.10)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,15,.08),transparent)] [background-size:100%_220px] animate-[luxScan_12s_linear_infinite]" />
      </div>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_40%,rgba(10,10,15,.08)_78%,rgba(10,10,15,.12))] opacity-60" />
    </div>
  );
}

