import { Footer } from "../components/sections/Footer";
import { FinalCta } from "../components/sections/FinalCta";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
import { Showcase } from "../components/sections/Showcase";
import { Testimonials } from "../components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
