import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";
import problemImage from "@/assets/problem-labor.jpg";

const problems = [
  {
    icon: Users,
    title: "Severe Labor Shortage",
    description: "7% workforce decline with 28% seasonal workers no longer available. Finding harvest workers has become nearly impossible.",
  },
  {
    icon: AlertTriangle,
    title: "Inhumane Working Conditions",
    description: "Current 'Gurkenflieger' harvesting is physically destructive work with exploitative conditions and no insurance.",
  },
  {
    icon: DollarSign,
    title: "Rising Labor Costs",
    description: "Minimum wage increasing from €12.82 to €14-15, making manual harvest economically unviable.",
  },
  {
    icon: TrendingDown,
    title: "Cheap Imports Threaten Survival",
    description: "Turkey and India undercut prices while 84% of consumers want regional products. German farms are closing.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-sm font-medium text-destructive">
            The Crisis
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            German Cucumber Farming Is Facing Collapse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Without immediate automation, regional cucumber production will disappear within the next few years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={problemImage} 
              alt="Agricultural labor shortage crisis" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-balance">
              "I want to be a farmer, not a travel agent or HR manager. If I don't find people to pick these cucumbers, my farm dies."
            </blockquote>
            <div className="pt-4">
              <div className="font-semibold text-lg">Herbert Mühlbauer</div>
              <div className="text-muted-foreground">3rd Generation Gherkin Farmer, Lower Bavaria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
