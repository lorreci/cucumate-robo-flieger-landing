import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI vision system work in dense foliage?",
    answer: "Our multi-spectral AI vision uses advanced computer learning to detect cucumbers even when they're hidden under leaves. The system combines thermal, RGB, and depth sensing to achieve over 95% detection accuracy in all field conditions.",
  },
  {
    question: "What's the cost compared to manual labor?",
    answer: "With rising minimum wages (€14-15/hour), manual harvesting costs are skyrocketing. Robo-Flieger reduces harvesting costs by approximately 40% over a 5-year period, with predictable operational expenses and no recruitment or housing costs.",
  },
  {
    question: "Can the robot work in muddy or uneven fields?",
    answer: "Yes. Robo-Flieger is specifically designed for challenging agricultural conditions. Advanced terrain mapping and all-terrain navigation systems allow it to operate safely in muddy fields, slopes, and varying soil conditions.",
  },
  {
    question: "How reliable is the robot? What about downtime?",
    answer: "The system includes predictive maintenance AI that monitors component health and alerts you before issues occur. Average uptime exceeds 95%, and we provide comprehensive maintenance support and spare parts logistics.",
  },
  {
    question: "Do I need technical expertise to operate it?",
    answer: "No technical background is needed. The mobile dashboard is designed for farmers, not engineers. Basic operation training takes just 2-3 hours, and our support team is always available.",
  },
  {
    question: "What about night harvesting?",
    answer: "Robo-Flieger is equipped with advanced lighting and thermal vision, enabling 24/7 operation. Night harvesting can significantly increase your productive hours and optimize harvest timing for quality.",
  },
  {
    question: "How does financing work?",
    answer: "We offer flexible leasing options designed for farm cash flows, with seasonal payment structures. This eliminates large upfront investment and allows you to scale gradually.",
  },
  {
    question: "Will this eliminate all jobs on my farm?",
    answer: "No. Robo-Flieger eliminates backbreaking manual harvesting work, but it creates new roles in robot operation, maintenance, and precision agriculture management. You're upgrading work quality, not eliminating people.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Your Questions Answered
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Everything you need to know about autonomous cucumber harvesting
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <button className="px-8 py-4 gradient-accent text-accent-foreground rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              Talk to a Cucumate Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
