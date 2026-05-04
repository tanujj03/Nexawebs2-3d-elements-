import { Reveal } from "../motion/Reveal";
import { Section } from "../ui/Section";

const steps = [
  {
    k: "DISCOVER",
    title: "Signal, not noise",
    desc: "We clarify narrative, audience, and the one action the site must drive.",
  },
  {
    k: "DESIGN",
    title: "Luxury minimal UI",
    desc: "We design a refined system: grid, type, surfaces, and cinematic pacing.",
  },
  {
    k: "BUILD",
    title: "Production engineering",
    desc: "Next.js performance, responsive polish, and motion that feels expensive.",
  },
  {
    k: "LAUNCH",
    title: "Measure + iterate",
    desc: "Analytics, SEO, and continuous refinement — without breaking the aesthetic.",
  },
];

export function Process() {
  return (
    <Section id="process" size="wide">
      <div className="relative">
        <div
          data-parallax="40"
          className="pointer-events-none absolute -top-20 left-[-70px] h-72 w-72 rounded-[42%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.92),rgba(255,255,255,.18)_38%,rgba(32,182,255,.10)_74%,transparent)] opacity-55 shadow-premium ring-soft "
        />
        <div
          data-light
          className="pointer-events-none absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,196,99,.12),transparent_62%)] blur-2xl"
        />
      </div>

      <div data-reveal>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
              PROCESS
            </div>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
              Scroll‑paced storytelling, built with precision.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-700/80">
            We work in tight loops. Every detail is intentional: motion, spacing,
            contrast, and performance.
          </p>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
        {steps.map((s, i) => (
          <div
            key={s.k}
            data-reveal
          >
            <div className="chrome-border glass group rounded-[36px] p-10 ring-soft shadow-premium transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,.12),0_8px_32px_rgba(0,0,0,.08)] hover:ring-[0.5px] hover:ring-white/20 h-full flex flex-col justify-start">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
                    {s.k}
                  </div>
                  <div className="mt-3 font-[var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-zinc-950">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-700/80">
                    {s.desc}
                  </p>
                </div>
                <div
                  data-parallax="22"
                  className="mt-1 h-11 w-11 shrink-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,.85),rgba(255,255,255,.14),rgba(255,196,99,.12))] ring-soft shadow-premium transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

