import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AgendaSection from '@/components/AgendaSection';
import BangkokGuideSection from '@/components/BangkokGuideSection';
import TravelChecklistSection from '@/components/TravelChecklistSection';
import CodeOfConductSection from '@/components/CodeOfConductSection';
import AcknowledgmentSection from '@/components/AcknowledgmentSection';
import Footer from '@/components/Footer';
import { setupAnimationObserver } from '@/utils/animationObserver';

const Index = () => {
  useEffect(() => {
    const observer = setupAnimationObserver();
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#181426]">
      <Navbar />
      <HeroSection />
      <AgendaSection />
      <BangkokGuideSection />
      <TravelChecklistSection />
      <CodeOfConductSection />
      <AcknowledgmentSection />
      <Footer />
    </div>
  );
};

export default Index;
