import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Calendar, BarChart } from "lucide-react";

const OwnerSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Calendar,
      text: "Accept online bookings 24/7"
    },
    {
      icon: CheckCircle,
      text: "Confirm/cancel bookings easily"
    },
    {
      icon: DollarSign,
      text: "Get paid faster (M-Pesa & card supported)"
    },
    {
      icon: BarChart,
      text: "Track revenue and analytics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Are You a <br />
              <span className="text-primary">Facility Owner?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              List your court, pitch, or gym and start receiving bookings online. 
              Manage everything from your dashboard.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-success/10 rounded-full p-2">
                    <feature.icon className="w-5 h-5 text-success" />
                  </div>
                  <span className="text-foreground font-medium text-lg">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              variant="success" 
              size="lg" 
              onClick={scrollToSignup}
              className="group"
            >
              List Your Facility - Coming Soon
              <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-hero">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">Today's Bookings</div>
                  <div className="text-white/80 text-sm">+25%</div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-white text-sm">Basketball Court A</span>
                    <span className="text-success font-semibold">KSh 2,500</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-white text-sm">Football Pitch</span>
                    <span className="text-success font-semibold">KSh 4,000</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-white text-sm">Tennis Court 1</span>
                    <span className="text-success font-semibold">KSh 1,800</span>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total Revenue</span>
                    <span className="text-success font-bold text-lg">KSh 8,300</span>
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

export default OwnerSection;