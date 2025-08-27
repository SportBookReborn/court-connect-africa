import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, Check } from "lucide-react";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"user" | "owner">("user");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
    console.log("Signup data:", { email, name, role });
    
    setSubmitted(true);
    toast({
      title: "Success!",
      description: "You're on the early access list. We'll notify you when SportBook launches!",
    });
  };

  if (submitted) {
    return (
      <section id="signup" className="py-20 bg-gradient-to-br from-success/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-success/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-success" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              You're In! 🎉
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Welcome to the SportBook early access list. We'll send you updates and notify you 
              when we launch in Nairobi and beyond.
            </p>
            
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <p className="text-muted-foreground">
                Follow us on social media for updates and behind-the-scenes content as we build 
                the future of sports facility booking in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Launching Soon in 
            <br />
            <span className="text-primary">Nairobi and Beyond</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Be the first to book — and get exclusive early access.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setRole("user")}
                className={`px-6 py-3 rounded-xl font-semibold transition-smooth ${
                  role === "user" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                I'm a Player
              </button>
              
              <button
                type="button"
                onClick={() => setRole("owner")}
                className={`px-6 py-3 rounded-xl font-semibold transition-smooth ${
                  role === "owner" 
                    ? "bg-secondary text-secondary-foreground shadow-md" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                I'm a Facility Owner
              </button>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
            >
              Get Early Access
            </Button>

            <p className="text-sm text-muted-foreground">
              We'll never spam. Unsubscribe anytime. 
              <br />
              Privacy policy coming soon.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;