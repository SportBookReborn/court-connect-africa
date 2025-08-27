import { AlertCircle, Clock, Phone, CreditCard } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Phone,
      title: "Spending hours calling to check availability?",
      description: "No one answers, or they put you on hold forever"
    },
    {
      icon: Clock,
      title: "No clear pricing or real-time booking?",
      description: "Prices change, slots get taken while you're deciding"
    },
    {
      icon: AlertCircle,
      title: "Facility owners missing bookings?",
      description: "Manual systems lead to double bookings and lost revenue"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tired of Wasting Time 
            <br />
            <span className="text-primary">Booking Sports Facilities?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We know the struggle. That's why we built SportBook to solve these everyday frustrations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-smooth border border-border/50"
            >
              <div className="bg-destructive/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;