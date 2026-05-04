"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { cn } from "../ui/cn";

export function FinalCta() {
  return (
    <Section id="cta" className="pb-32" size="wide">
      <div
        data-reveal
        className="chrome-border glass relative overflow-hidden rounded-[48px] p-9 ring-soft shadow-[0_70px_240px_rgba(0,0,0,.18),0_22px_90px_rgba(0,0,0,.10)]  sm:p-14"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            data-light
            className="absolute -top-40 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,86,255,.18),transparent_60%)] blur-2xl"
          />
          <div
            data-parallax="30"
            className="absolute -bottom-60 left-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(32,182,255,.14),transparent_60%)] blur-2xl"
          />
          <div
            data-parallax="22"
            className="absolute right-[-120px] top-[-80px] h-56 w-56 rounded-[40%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.92),rgba(255,255,255,.18)_38%,rgba(255,196,99,.10)_74%,transparent)] opacity-65 shadow-premium ring-soft "
          />
        </div>

        <div className="relative">
          <div className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
            READY
          </div>
          <h2 className="mt-5 max-w-4xl text-balance font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
            Make your next launch feel cinematic, premium, and alive.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-700/80">
            Send a short brief and we’ll reply with timelines, a mood direction,
            and a precise scope — strategy, design, and engineering.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#" className="w-full sm:w-auto px-8 py-4 text-base">
              Book a private call
            </Button>
            <Button
              variant="secondary"
              href="#"
              className="w-full sm:w-auto px-8 py-4 text-base"
            >
              Request a proposal
            </Button>

            <motion.div
              className={cn(
                "mt-2 text-xs text-zinc-700/70 sm:mt-0 sm:pl-2",
                "flex items-center gap-2",
              )}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="h-1 w-1 rounded-full bg-zinc-800/30" />
              No pressure. Clear scope. Premium delivery.
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

