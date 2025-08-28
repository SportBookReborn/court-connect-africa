import { Search, Calendar, CreditCard } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Facilities",
      description: "See available pitches, courts, and gyms near you — with photos, prices, and locations.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Calendar,
      title: "Check Availability",
      description: "Real-time calendar shows open time slots. No more guesswork.",
      gradient: "from-secondary to-orange-400"
    },
    {
      icon: CreditCard,
      title: "Book & Pay Instantly",
      description: "Secure checkout via M-Pesa, card, or mobile money. Confirmation in seconds.",
      gradient: "from-success to-green-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary">BookaPlay</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to book your perfect sports facility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-xl transition-smooth border border-border/50 group-hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-secondary rotate-45 transform"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;