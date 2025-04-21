
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
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
      }}>
        <div className="absolute inset-0 bg-netcore-blue/60 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* GAIN Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-block py-2 px-5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <span className="text-3xl md:text-4xl font-bold text-white">GAIN</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Netcore Sales Conference 2025
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block">Fueling Growth.</span> 
            <span className="inline-block ml-2">Forging Connections.</span>
          </h2>
          
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CountdownTimer />
          </div>
          
          <Button 
            onClick={() => scrollToSection('agenda')}
            size="lg"
            className="bg-netcore-accent hover:bg-netcore-lightAccent text-white font-medium px-8 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
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
