import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import About from "../components/layout/About";
import Benefits from "@/components/layout/Benefits";
import Services from "../components/layout/Services";
import HowItWorks from "../components/layout/HowItWorks";
import Diagnostics from "@/components/layout/Diagnostics";
import FAQ from "../components/layout/FAQ";
import CallToAction from "../components/layout/CallToAction";
import InstagramFeed from "@/components/layout/InstagramFeed";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <HowItWorks />
      <Diagnostics />
      <FAQ />
      <InstagramFeed />
      <CallToAction />
      <Footer />
    </main>
  );
}
