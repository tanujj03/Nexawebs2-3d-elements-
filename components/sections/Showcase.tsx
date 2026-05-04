import { Reveal } from "../motion/Reveal";
import { Section } from "../ui/Section";

const work = [
  {
    title: "Aurora — AI Product Launch",
    tags: ["Brand + Website", "Motion", "Performance"],
  },
  {
    title: "Chromia — Studio Portfolio",
    tags: ["Design system", "CMS-ready", "SEO"],
  },
  {
    title: "Lumen — Luxury E‑commerce",
    tags: ["Conversion", "3D feel", "Speed"],
  },
];

export function Showcase() {
  return (
    <Section id="showcase" size="wide">
      <div className="relative">
        <div
          data-light
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(126,87,255,.14),transparent_62%)] blur-2xl"
        />
        <div
          data-parallax="45"
          className="pointer-events-none absolute top-14 right-[-80px] h-60 w-60 rounded-[44%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.92),rgba(255,255,255,.18)_38%,rgba(255,196,99,.10)_74%,transparent)] opacity-65 shadow-premium ring-soft "
        />
      </div>

      <div data-reveal>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
              SHOWCASE
            </div>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
              Composition that wins attention — softly.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-700/80 lg:col-span-5 lg:justify-self-end">
            We build scenes, not sections — depth, pacing, and premium material
            design tuned to feel expensive.
          </p>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
        {work.map((w, i) => (
          <div
            key={w.title}
            data-reveal
            className="lg:col-span-4"
          >
            <div className="chrome-border glass group relative overflow-hidden rounded-[36px] p-10 ring-soft shadow-premium transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,.12),0_8px_32px_rgba(0,0,0,.08)] hover:ring-[0.5px] hover:ring-white/20 h-full flex flex-col justify-start">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.85),rgba(124,86,255,.20),transparent_70%)] blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-[var(--font-display)] text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                    {w.title}
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,.8),rgba(255,255,255,.16),rgba(126,87,255,.10))] ring-soft transition-transform duration-300 ease-out group-hover:scale-110" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/55 px-3 py-1 text-xs font-medium text-zinc-800/75 ring-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 h-48 w-full rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,.7),rgba(255,255,255,.22),rgba(32,182,255,.12))] ring-soft shadow-premium">
                  <div
                    data-parallax="28"
                    className="h-full w-full rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.85),transparent_60%)] opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

