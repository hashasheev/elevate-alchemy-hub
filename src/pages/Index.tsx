import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
