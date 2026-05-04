import { Section } from "../ui/Section";

export function Footer() {
  return (
    <Section className="py-12">
      <footer className="flex flex-col gap-6 rounded-3xl bg-white/40 p-7 ring-soft  sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Nexawebs" 
            className="h-10 w-auto object-contain"
          />
          <div>
            <div className="text-sm font-semibold tracking-[-0.02em] text-zinc-950">
              Nexawebs
            </div>
            <div className="text-xs text-zinc-700/70">
              Premium AI Web Agency
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-800/80">
          <a className="hover:text-zinc-950" href="#services">
            Services
          </a>
          <a className="hover:text-zinc-950" href="#showcase">
            Showcase
          </a>
          <a className="hover:text-zinc-950" href="#process">
            Process
          </a>
          <a className="hover:text-zinc-950" href="#cta">
            Contact
          </a>
        </div>

        <div className="text-xs text-zinc-700/65">
          © {new Date().getFullYear()} Nexawebs. All rights reserved.
        </div>
      </footer>
    </Section>
  );
}

