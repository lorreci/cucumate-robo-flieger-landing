import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-robot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent-foreground">
                Solving Agriculture's Labor Crisis
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground text-balance">
              Autonomous Cucumber Harvesting
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance max-w-2xl">
              AI-powered robots that harvest cucumbers autonomously — reducing costs, eliminating inhumane labor, and securing regional farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-accent text-lg px-8 py-6 hover:scale-105 transition-transform">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                See How It Works
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/80">Autonomous</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/30"></div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/80">Operation</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/30"></div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground">Zero</div>
                <div className="text-sm text-primary-foreground/80">Labor Stress</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Cucumate autonomous harvesting robot in cucumber field" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
