import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import OwnerSection from '@/components/OwnerSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OwnerSection />
      <WhyChooseSection />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;