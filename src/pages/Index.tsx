import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import SDGImpact from "@/components/SDGImpact";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <SDGImpact />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
