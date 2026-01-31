import About from "@/components/About";
import Contact from "@/components/Contact";
import Doctors from "@/components/Doctors";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
    </>
  );
}
