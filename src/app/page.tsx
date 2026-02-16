import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Opening } from "@/components/Opening";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Opening />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
