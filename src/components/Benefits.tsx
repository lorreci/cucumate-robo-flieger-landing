import { TrendingUp, Shield, Leaf, Target, Zap, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Economic Survival",
    description: "Stay competitive against cheap imports while maintaining profitability with lower harvesting costs.",
    stat: "40%",
    statLabel: "Cost Reduction",
  },
  {
    icon: Shield,
    title: "Zero Labor Stress",
    description: "Eliminate recruitment, housing, insurance, and contract bureaucracy. Focus on farming.",
    stat: "0",
    statLabel: "Seasonal Workers Needed",
  },
  {
    icon: Leaf,
    title: "Regional Production Secured",
    description: "Keep German cucumber farming alive and meet the 84% consumer demand for regional products.",
    stat: "100%",
    statLabel: "Regional",
  },
  {
    icon: Target,
    title: "Predictable Yields",
    description: "Reliable harvesting regardless of weather, labor availability, or market conditions.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: Zap,
    title: "Maximum Productivity",
    description: "Harvest more cucumbers faster with AI-powered efficiency and night harvesting capability.",
    stat: "3x",
    statLabel: "Productivity Boost",
  },
  {
    icon: Award,
    title: "Decent Work Standards",
    description: "Align with UN SDG 8 by eliminating physically destructive labor and creating tech jobs.",
    stat: "SDG 8",
    statLabel: "Certified",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent-foreground">
            Business Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Transform Your Farm's Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From struggling with labor shortages to leading the automation revolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-4">
                <div className="text-4xl font-bold text-primary mb-1">{benefit.stat}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{benefit.statLabel}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">€14-15</div>
              <div className="text-lg font-medium mb-2">Rising Minimum Wage</div>
              <div className="text-muted-foreground">Manual harvest becomes unviable</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">28%</div>
              <div className="text-lg font-medium mb-2">Seasonal Workforce</div>
              <div className="text-muted-foreground">No longer available for harvest</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">84%</div>
              <div className="text-lg font-medium mb-2">Consumer Demand</div>
              <div className="text-muted-foreground">Want regional products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
