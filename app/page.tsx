import ScrollObserver from "@/components/ScrollObserver";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import {
  Stats,
  Founder,
  Process,
  Roles,
  Features,
  Pricing,
  Testimonials,
  Footer
} from "@/components/StaticSections";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Founder />
        <Process />
        <Roles />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
