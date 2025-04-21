import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/bangkok-temple-sunset.png")',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 to-black/80 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Centered GAIN image with glow */}
        <div className="mt-24 mb-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.05s' }}>
          <div
            className="rounded-2xl shadow-2xl overflow-hidden bg-white/0 p-1 border border-[#ff719a80]"
            style={{
              boxShadow: '0 0 80px 8px #FF719A22, 0 0 28px 6px #F7941D33'
            }}
          >
            <img
              src="/lovable-uploads/24ad330a-25fb-4e27-93bc-fbe3e8e58501.png"
              alt="GAIN 2025 Event Image"
              className="w-[520px] max-w-[94vw] h-auto drop-shadow-md"
              style={{
                filter: 'drop-shadow(0 0 44px #F9731655) drop-shadow(0 0 10px #FF719A44)'
              }}
            />
          </div>
        </div>
        
        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CountdownTimer />
        </div>
        
        <Button 
          onClick={() => scrollToSection('agenda')}
          size="lg"
          className="bg-gradient-to-r from-[#F7941D] to-[#FF719A] hover:from-[#FF719A] hover:to-[#F7941D] text-white font-bold text-lg px-8 shadow-xl animate-fade-in"
          style={{ animationDelay: '0.7s', borderRadius: 12 }}
        >
          See Agenda
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
