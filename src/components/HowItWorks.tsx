import { Cpu, Camera, Hand, Navigation, Cloud, Wrench } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "AI Vision Detection",
    description: "Multi-spectral cameras scan the field and identify ripe cucumbers, even those hidden under dense foliage.",
    number: "01",
  },
  {
    icon: Cpu,
    title: "Smart Path Planning",
    description: "Advanced algorithms calculate optimal harvesting routes, maximizing efficiency and minimizing field damage.",
    number: "02",
  },
  {
    icon: Hand,
    title: "Gentle Harvesting",
    description: "Dual robotic arms with AI-controlled grip delicately harvest cucumbers without bruising or damage.",
    number: "03",
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation",
    description: "GPS and terrain mapping enable safe navigation through muddy fields in any weather condition.",
    number: "04",
  },
  {
    icon: Cloud,
    title: "Real-Time Monitoring",
    description: "Cloud dashboard provides live data on harvest progress, yield statistics, and robot performance.",
    number: "05",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "AI monitors system health and alerts you before issues occur, ensuring maximum uptime.",
    number: "06",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            How Robo-Flieger Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Advanced AI and robotics technology working seamlessly to harvest your cucumbers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'hsl(135 45% 35%)', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(135 45% 35%)', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Ready to Revolutionize Your Harvest?</h3>
            <p className="text-xl text-primary-foreground/90">
              Join the future of autonomous farming. Book a demo and see Robo-Flieger in action on your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
                Schedule Field Demo
              </button>
              <button className="px-8 py-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground rounded-lg font-semibold text-lg transition-all border border-primary-foreground/30">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
