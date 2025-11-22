import { Heart, Briefcase, TrendingUp, Sprout } from "lucide-react";

const impacts = [
  {
    icon: Heart,
    sdg: "SDG 8.8",
    title: "Decent Work",
    description: "Eliminates physically destructive 'Gurkenflieger' manual labor that causes long-term health damage.",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    icon: Briefcase,
    sdg: "SDG 8.5",
    title: "Productive Employment",
    description: "Creates new skilled tech jobs in robot operation, maintenance, and agricultural technology management.",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: TrendingUp,
    sdg: "SDG 8.1 / 8.2",
    title: "Economic Growth",
    description: "Makes German farms competitive again, securing regional food production and rural economies.",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: Sprout,
    sdg: "Sustainable Future",
    title: "Agricultural Resilience",
    description: "Ensures food security through climate-resilient precision harvesting technology.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
  },
];

const SDGImpact = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Building a Better Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Cucumate directly supports UN Sustainable Development Goal 8: Decent Work and Economic Growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl ${impact.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <impact.icon className={`w-8 h-8 ${impact.color}`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">{impact.sdg}</div>
                  <h3 className="text-2xl font-bold mb-3">{impact.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">From Exploitation to Innovation</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Traditional cucumber harvesting relies on seasonal workers in exploitative conditions: 
                  low wages, no insurance, inadequate housing, and backbreaking physical labor.
                </p>
                <p>
                  Cucumate transforms this reality by eliminating the need for inhumane work, 
                  creating modern tech jobs, and making farming economically sustainable.
                </p>
                <p className="font-semibold text-foreground pt-2">
                  This isn't just automation — it's a movement toward dignified agricultural work 
                  and thriving rural communities.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/30">
                  <span className="text-5xl font-bold text-primary">8</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">UN SDG 8</h4>
                  <p className="text-lg text-muted-foreground">Decent Work and Economic Growth</p>
                </div>
                <div className="flex justify-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Aligned</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Sub-Goals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGImpact;
