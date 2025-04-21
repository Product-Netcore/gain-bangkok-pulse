
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
    <div className="relative min-h-screen bg-[#181426] overflow-x-hidden">
      {/* Glowing animated gradient background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none animate-background-glow"
        style={{
          background:
            'radial-gradient(circle at 60% 32%, rgba(254,113,154,0.16) 0%, rgba(20,63,147,0.60) 80%, #1A1F2C 100%)',
        }}
      />
      {/* GAIN BG Image */}
      <img
        src="/lovable-uploads/1d53dffe-e733-4b42-933f-8b53d313245e.png"
        alt=""
        className="fixed top-[-7vw] left-1/2 z-0 pointer-events-none max-w-none opacity-10 blur-0 scale-[1.6] -translate-x-1/2 select-none"
        style={{
          width: '120vw',
          minWidth: 1200,
          maxWidth: 1800,
          filter:
            'blur(2px) drop-shadow(0 0 160px #FF719A88) brightness(1.08) saturate(1.1)',
        }}
        draggable={false}
        aria-hidden
      />
      {/* Main Page Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AgendaSection />
        <BangkokGuideSection />
        <TravelChecklistSection />
        <CodeOfConductSection />
        <AcknowledgmentSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

