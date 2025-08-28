import { Smartphone, Zap, Shield, Globe } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Built for Africa",
      description: "Mobile-first design with M-Pesa integration and local payment methods"
    },
    {
      icon: Zap,
      title: "Simple & Fast",
      description: "Book in under 2 minutes. No complicated forms or endless waiting"
    },
    {
      icon: Shield,
      title: "Real-time Availability",
      description: "No double bookings. See exact availability and book instantly"
    },
    {
      icon: Smartphone,
      title: "Free to List",
      description: "Facility owners list for free during our MVP phase"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">BookaPlay?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another booking app. We're built specifically for African sports communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-lg">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;