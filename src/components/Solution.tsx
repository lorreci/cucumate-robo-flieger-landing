import { CheckCircle, Brain, Eye, Clock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotImage from "@/assets/robot-picking.jpg";

const features = [
  {
    icon: Brain,
    title: "AI Vision System",
    description: "Solves the occlusion problem - finds cucumbers hidden under leaves with multi-spectral vision.",
  },
  {
    icon: Eye,
    title: "Selective Picking",
    description: "Harvests only ripe cucumbers without damage, ensuring perfect quality every time.",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Works day and night, in any weather, maximizing productivity and harvest windows.",
  },
  {
    icon: Smartphone,
    title: "Mobile Dashboard",
    description: "Monitor and control your fleet from anywhere with real-time data and maintenance alerts.",
  },
];

const Solution = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Meet Robo-Flieger
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Cucumate is an AI-driven harvesting solution that lowers costs, eliminates inhumane work, and secures the regional cucumber industry for the future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img 
              src={robotImage} 
              alt="Robo-Flieger autonomous cucumber harvesting robot" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Robo-Flieger</h3>
              <p className="text-primary-foreground/90">Your autonomous harvesting partner</p>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Makes Robo-Flieger Different</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Full independence from seasonal labor",
                "Lower cost per kilogram harvested",
                "Increased productivity and yield",
                "Consistent quality with less damage",
                "Reliable, predictable harvesting",
                "Transform into modern, future-proof farming",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button size="lg" className="gradient-accent text-lg px-8 py-6 hover:scale-105 transition-transform">
                Request a Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
