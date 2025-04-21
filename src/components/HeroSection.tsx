
import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';

// Use a futuristic glowing effect around the logo and a dark gradient for bg
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
      className="relative min-h-screen flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, rgba(234,172,232,0.13) 0%, rgba(20,63,147,1) 80%, #1A1F2C 100%)'
      }}
    >
      {/* Futuristic Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 40%, rgba(246,219,245,0.07) 0%, transparent 70%)'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* GAIN Logo (from user's image) */}
          <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <div className="rounded-xl shadow-xl overflow-hidden bg-white/0 p-0.5"
                 style={{
                   boxShadow: '0 0 32px 4px #FF719A33, 0 0 12px 3px #F7941D66'
                 }}>
                <img
                  src="/lovable-uploads/cf338919-f04f-44bc-8a3e-da8d815fc5c0.png"
                  alt="GAIN 2025 Logo"
                  className="w-[370px] max-w-[90vw] h-auto drop-shadow-xl"
                  style={{
                    filter: 'drop-shadow(0 0 40px #F97316CC)'
                  }}
                />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in" style={{ animationDelay: '0.15s', letterSpacing: '-1px' }}>
            Netcore Sales Conference 2025
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-[#FFB55F] mb-10 animate-fade-in" style={{ animationDelay: '0.22s' }}>
            Fueling Growth. Forging Connections.
          </h2>
          
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
      </div>
    </section>
  );
};

export default HeroSection;
