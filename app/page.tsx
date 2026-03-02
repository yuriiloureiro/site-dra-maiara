import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import About from "../components/layout/About";
import Services from "../components/layout/Services";
import HowItWorks from "../components/layout/HowItWorks";
import FAQ from "../components/layout/FAQ";
import CallToAction from "../components/layout/CallToAction";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
