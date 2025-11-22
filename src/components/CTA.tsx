import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent-foreground mb-6">
                Get Started
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Secure Your Farm's Future?
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Join the farmers who are already transforming their operations with autonomous harvesting. 
                Book a demo and see Robo-Flieger work on your field.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+49 (0) 123 456 7890</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 8:00-18:00 CET</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@cucumate.de</p>
                  <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Munich, Bavaria</p>
                  <p className="text-sm text-muted-foreground">Serving farms across Germany</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Trusted by farmers in:</p>
              <div className="flex flex-wrap gap-4">
                {["Bavaria", "Baden-Württemberg", "Lower Saxony", "North Rhine-Westphalia"].map((region, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <Input 
                    id="firstName"
                    placeholder="Herbert" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <Input 
                    id="lastName"
                    placeholder="Mühlbauer" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="herbert@farm.de" 
                  required 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+49 ..." 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="farmSize" className="block text-sm font-medium mb-2">
                  Farm Size (hectares)
                </label>
                <Input 
                  id="farmSize"
                  type="number"
                  placeholder="50" 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your farm and harvesting challenges..."
                  rows={4}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-accent text-lg py-6 hover:scale-[1.02] transition-transform"
              >
                Book Your Field Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
