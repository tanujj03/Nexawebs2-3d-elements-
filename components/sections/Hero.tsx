"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { VideoMockup } from "../ui/VideoMockup";
import { Spotlight } from "../effects/Spotlight";
import { FloatingOrbs } from "../effects/FloatingOrbs";
import { Particles } from "../effects/Particles";

export function Hero() {

  return (
    <section id="top" className="relative w-full overflow-hidden">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 px-5 pt-6 sm:px-8 sm:pt-8">
        <div className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between">
          <a
            href="#top"
            className="chrome-border glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold tracking-[-0.02em] text-zinc-950 ring-soft shadow-premium transition-all duration-300 ease-out hover:opacity-90 hover:scale-105"
          >
            <img 
              src="/logo.png" 
              alt="Nexawebs" 
              className="h-12 w-auto object-contain"
            />
            Nexawebs
          </a>
          <nav className="pointer-events-auto hidden items-center gap-8 text-sm text-zinc-900/70 md:flex">
            <a
              className="relative py-2 transition-colors hover:text-zinc-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,rgba(126,87,255,.0),rgba(126,87,255,.55),rgba(32,182,255,.35),rgba(126,87,255,.0))] after:transition-transform after:duration-500 hover:after:scale-x-100"
              href="#services"
            >
              Services
            </a>
            <a
              className="relative py-2 transition-colors hover:text-zinc-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,rgba(126,87,255,.0),rgba(126,87,255,.55),rgba(32,182,255,.35),rgba(126,87,255,.0))] after:transition-transform after:duration-500 hover:after:scale-x-100"
              href="#showcase"
            >
              Showcase
            </a>
            <a
              className="relative py-2 transition-colors hover:text-zinc-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,rgba(126,87,255,.0),rgba(126,87,255,.55),rgba(32,182,255,.35),rgba(126,87,255,.0))] after:transition-transform after:duration-500 hover:after:scale-x-100"
              href="#process"
            >
              Process
            </a>
            <a
              className="relative py-2 transition-colors hover:text-zinc-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,rgba(126,87,255,.0),rgba(126,87,255,.55),rgba(32,182,255,.35),rgba(126,87,255,.0))] after:transition-transform after:duration-500 hover:after:scale-x-100"
              href="#testimonials"
            >
              Clients
            </a>
          </nav>
          <div className="pointer-events-auto flex items-center gap-3">
            <Button variant="secondary" href="#showcase">
              View work
            </Button>
            <Button href="#cta">Book a call</Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[100svh] w-full">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Spotlight className="opacity-80" />
          <Particles className="opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(1400px_900px_at_50%_-240px,rgba(255,255,255,.98),transparent_64%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.65),rgba(255,255,255,.40)_35%,rgba(255,255,255,.20)_70%,rgba(255,255,255,.10))]" />
        </div>

        <div className="absolute inset-0 -z-10">
          <FloatingOrbs className="opacity-95" />
          {/* chrome ring sculptures */}
          <div className="absolute right-[-180px] top-[18%] h-[520px] w-[520px] rounded-full bg-[conic-gradient(from_180deg,rgba(255,255,255,.78),rgba(255,255,255,.10),rgba(255,255,255,.70))] blur-[0.2px] opacity-55 shadow-premium ring-soft" />
          <div className="absolute right-[-120px] top-[24%] h-[380px] w-[380px] rounded-full bg-[conic-gradient(from_210deg,rgba(255,255,255,.68),rgba(255,255,255,.06),rgba(255,255,255,.62))] opacity-45 shadow-premium ring-soft" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(252,252,253,1))]" />
        </div>

        <div className="mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 items-end gap-14 px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:grid-cols-12 lg:items-center lg:pb-28">
          <div className="lg:col-span-7">
            <p
              data-hero-fade
              className="chrome-border glass mb-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-zinc-900/70 ring-soft"
            >
              PREMIUM AI WEB STUDIO
              <span className="h-1 w-1 rounded-full bg-zinc-900/30" />
              CINEMATIC • MINIMAL • FAST
            </p>

            <h1
              data-hero-fade
              className="text-balance font-[var(--font-display)] text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-zinc-950 sm:text-7xl lg:text-[92px]"
            >
              A luxury digital presence,
              <span className="block bg-[linear-gradient(135deg,rgba(7,8,11,1),rgba(7,8,11,.55),rgba(7,8,11,1))] bg-clip-text text-transparent">
                engineered like the future.
              </span>
            </h1>

            <p
              data-hero-fade
              className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-900/70 sm:text-xl"
            >
              Award‑level composition, pearl‑bright materials, and atmospheric 3D depth —
              built in Next.js with performance budgets and cinematic motion.
            </p>

            <div
              data-hero-fade
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="#cta" className="w-full sm:w-auto px-8 py-4 text-base">
                Start a project
              </Button>
              <Button
                variant="secondary"
                href="#services"
                className="w-full sm:w-auto px-8 py-4 text-base"
              >
                See capabilities
              </Button>
            </div>

            <div data-hero-fade className="mt-8 flex items-center gap-5 text-xs text-zinc-900/55">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.95),rgba(32,182,255,.45))]" />
                Response within 24h
              </div>
              <div className="h-4 w-px bg-zinc-900/15" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.95),rgba(124,86,255,.45))]" />
                Typical kickoff 7–10 days
              </div>
            </div>
          </div>

          <VideoMockup videoSrc="/video.mp4" className="lg:col-span-5" />
        </div>
      </section>
    </section>
  );
}

