import { Reveal } from "../motion/Reveal";
import { Section } from "../ui/Section";

const services = [
  {
    title: "AI Web Strategy",
    desc: "Narrative, positioning, IA, and conversion architecture for premium launches.",
  },
  {
    title: "Luxury UI Systems",
    desc: "Minimal, high-contrast typography, glass surfaces, and motion-ready components.",
  },
  {
    title: "Next.js Engineering",
    desc: "App Router, SEO, performance budgets, analytics, and production-grade delivery.",
  },
  {
    title: "Cinematic Motion",
    desc: "Scroll choreography, parallax depth, and restrained micro-interactions.",
  },
];

export function Services() {
  return (
    <Section id="services" className="pt-8 sm:pt-10" size="wide">
      <div className="relative">
        <div
          data-parallax="55"
          className="pointer-events-none absolute -top-24 right-[-40px] h-64 w-64 rounded-[40%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.9),rgba(255,255,255,.18)_38%,rgba(126,87,255,.10)_74%,transparent)] opacity-75 shadow-premium ring-soft "
        />
        <div
          data-parallax="35"
          className="pointer-events-none absolute -bottom-24 left-[-60px] h-56 w-80 rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,.72),rgba(255,255,255,.14),rgba(32,182,255,.10))] opacity-60 shadow-premium ring-soft "
        />
      </div>

      <Reveal>
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
              SERVICES
            </div>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
              Luxury craft. Future‑proof engineering.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-700/80">
            We combine brand-level craft with product-grade engineering — so the
            site feels cinematic, but still ships fast and scales cleanly.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={0.05 * i}>
            <div className="chrome-border glass group rounded-[34px] p-10 ring-soft shadow-premium transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,.12),0_8px_32px_rgba(0,0,0,.08)] hover:ring-[0.5px] hover:ring-white/20 h-full flex flex-col justify-start">
              <div className="flex items-center justify-between">
                <div className="font-[var(--font-display)] text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                  {s.title}
                </div>
                <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,.8),rgba(255,255,255,.18),rgba(32,182,255,.12))] ring-soft transition-transform duration-300 ease-out group-hover:scale-110" />
              </div>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-700/80">
                {s.desc}
              </p>
              <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(10,10,15,.12),transparent)] opacity-80" />
              <div className="mt-5 text-xs font-semibold tracking-[0.18em] text-zinc-500">
                AI + MOTION + PERFORMANCE
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

