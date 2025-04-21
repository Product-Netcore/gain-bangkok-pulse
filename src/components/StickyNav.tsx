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
      const sections = ['hero', 'agenda', 'bangkok-guide', 'top-attractions', 'travel-checklist', 'code-of-conduct'];
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
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('hero')}
              className={`p-2 rounded-full transition-colors ${
                activeSection === 'hero'
                  ? 'bg-netcore-blue text-white'
                  : 'text-gray-300 hover:bg-white/20'
              }`}
            >
              <Home className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('agenda')}
              className={`p-2 rounded-full transition-colors ${
                activeSection === 'agenda'
                  ? 'bg-netcore-blue text-white'
                  : 'text-gray-300 hover:bg-white/20'
              }`}
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('bangkok-guide')}
              className={`p-2 rounded-full transition-colors ${
                activeSection === 'bangkok-guide'
                  ? 'bg-netcore-blue text-white'
                  : 'text-gray-300 hover:bg-white/20'
              }`}
            >
              <MapPin className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('top-attractions')}
              className={`p-2 rounded-full transition-colors ${
                activeSection === 'top-attractions'
                  ? 'bg-netcore-blue text-white'
                  : 'text-gray-300 hover:bg-white/20'
              }`}
            >
              <MapPin className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('travel-checklist')}
              className={`p-2 rounded-full transition-colors ${
                activeSection === 'travel-checklist'
                  ? 'bg-netcore-blue text-white'
                  : 'text-gray-300 hover:bg-white/20'
              }`}
            >
              <ListChecks className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('code-of-conduct')}
              className={`p-2 rounded-full transition-colors ${
                activeSection === 'code-of-conduct'
                  ? 'bg-netcore-blue text-white'
                  : 'text-gray-300 hover:bg-white/20'
              }`}
            >
              <Scroll className="w-5 h-5" />
            </button>
          </div>
        </div>
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