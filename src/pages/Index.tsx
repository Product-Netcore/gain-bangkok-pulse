import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AgendaSection from '@/components/AgendaSection';
import TopAttractionsSection from '@/components/TopAttractionsSection';
import TravelChecklistSection from '@/components/TravelChecklistSection';
import CodeOfConductSection from '@/components/CodeOfConductSection';
import Footer from '@/components/Footer';
import StickyNav from '@/components/StickyNav';
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
            'radial-gradient(circle at 60% 32%, rgba(254,113,154,0.05) 0%, rgba(20,63,147,0.25) 80%, rgba(26,31,44,0.95) 100%)',
        }}
      />
      {/* Bangkok Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bangkok-temple-sunset.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
          style={{
            filter: 'blur(3px) brightness(0.35) saturate(1.2)',
          }}
          draggable={false}
          aria-hidden
        />
        {/* Additional overlay for better text contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#181426]/40 via-transparent to-[#181426]/60"
          aria-hidden
        />
      </div>
      {/* Main Page Content */}
      <div className="relative z-10 space-y-6">
        <Navbar />
        <main>
          <HeroSection />
          <AgendaSection />
          <TopAttractionsSection />
          <TravelChecklistSection />
          <CodeOfConductSection />
        </main>
        <Footer />
      </div>
      <StickyNav />
    </div>
  );
};

export default Index;
