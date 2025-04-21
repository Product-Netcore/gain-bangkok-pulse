import React, { useState, useEffect } from 'react';
import { Home, Calendar, MapPin, ListChecks, Scroll, ChevronUp } from 'lucide-react';

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setIsVisible(window.scrollY > 300);

      // Update active section
      const sections = ['hero', 'agenda', 'top-attractions', 'travel-checklist', 'code-of-conduct'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="flex justify-center space-x-4 md:space-x-8">
        <button
          onClick={() => scrollToSection('hero')}
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === 'hero'
              ? 'bg-netcore-blue text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('agenda')}
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === 'agenda'
              ? 'bg-netcore-blue text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Agenda
        </button>
        <button
          onClick={() => scrollToSection('top-attractions')}
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === 'top-attractions'
              ? 'bg-netcore-blue text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Attractions
        </button>
        <button
          onClick={() => scrollToSection('travel-checklist')}
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === 'travel-checklist'
              ? 'bg-netcore-blue text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Travel Checklist
        </button>
        <button
          onClick={() => scrollToSection('code-of-conduct')}
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === 'code-of-conduct'
              ? 'bg-netcore-blue text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Code of Conduct
        </button>
      </nav>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-netcore-blue text-white p-3 rounded-full shadow-lg hover:bg-netcore-blue/90 transition-colors z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default StickyNav; 