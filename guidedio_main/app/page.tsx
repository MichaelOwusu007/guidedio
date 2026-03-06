import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistForm from "@/components/WaitlistForm";
import FutureVision from "@/components/FutureVision"; 
import Timeline from "@/components/Timeline";
//import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import CollaborationSection from "@/components/CollaborationSection";
import Footer from "@/components/Footer";
import ConfettiEffect from "@/components/ConfettiEffect";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <WaitlistForm />
      <FutureVision />
      <Timeline />
      {/* <SocialProof /> */}
      <FinalCTA />
      <ConfettiEffect />
      <CollaborationSection />
      <Footer />
    </div>
  );
};

export default Index;
