import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import MarqueeSection from "@/components/MarqueeSection";
import PersonalitySection from "@/components/PersonalitySection";
import AvailabilitySection from "@/components/AvailabilitySection";
import ContactSection from "@/components/ContactSection";

const skills = [
  "Physical Fitness & Body Control",
  "Camera Confidence",
  "Adaptive Posing",
  "Professional Work Ethic",
];

const hobbies = [
  "Gym & Fitness",
  "Knowledge Sharing",
  "Fashion Trends",
  "Lifestyle Exploration",
];

const interests = [
  "Fitness Modeling",
  "Lifestyle Modeling",
  "Streetwear Modeling",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <MarqueeSection items={skills} label="Skills" />
      <PersonalitySection />
      <MarqueeSection items={interests} label="Modeling Interests" />
      <MarqueeSection items={hobbies} label="Hobbies & Interests" />
      <AvailabilitySection />
      <ContactSection />
    </main>
  );
};

export default Index;
