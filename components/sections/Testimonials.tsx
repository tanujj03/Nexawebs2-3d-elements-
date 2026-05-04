import { Reveal } from "../motion/Reveal";
import { Section } from "../ui/Section";

const quotes = [
  {
    name: "Founder, Luxury SaaS",
    quote:
      "It feels cinematic without being loud. The site loads instantly and the motion is unbelievably refined.",
  },
  {
    name: "Head of Brand, Studio",
    quote:
      "The glass/chrome depth and typography look premium on every screen. We finally have a presence that matches our product.",
  },
  {
    name: "Product Lead, AI Startup",
    quote:
      "Their process is calm and precise. Every pixel has intent — and it shipped faster than expected.",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" size="wide">
      <div className="relative">
        <div
          data-light
          className="pointer-events-none absolute -top-28 left-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(32,182,255,.12),transparent_62%)] blur-2xl"
        />
        <div
          data-parallax="40"
          className="pointer-events-none absolute -bottom-24 right-[-70px] h-56 w-80 rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,.74),rgba(255,255,255,.16),rgba(126,87,255,.10))] opacity-65 shadow-premium ring-soft "
        />
      </div>

      <div data-reveal>
        <div>
          <div className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
            TESTIMONIALS
          </div>
          <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
            Crafted for teams that demand taste.
          </h2>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {quotes.map((q, i) => (
          <div
            key={q.name}
            data-reveal
          >
            <figure className="chrome-border glass group rounded-[36px] p-10 ring-soft shadow-premium transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,.12),0_8px_32px_rgba(0,0,0,.08)] hover:ring-[0.5px] hover:ring-white/20 h-full flex flex-col justify-start">
              <div className="text-sm leading-7 text-zinc-700/85">
                "{q.quote}"
              </div>
              <figcaption className="mt-5 text-xs font-semibold tracking-[0.18em] text-zinc-500">
                {q.name}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </Section>
  );
}

