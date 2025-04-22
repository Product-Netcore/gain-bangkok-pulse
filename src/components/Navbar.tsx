import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Netcore Logo */}
            <div className="h-10 mr-2 flex items-center">
              <img
                src="/lovable-uploads/3d5638c8-2742-44b1-b38f-1ba035ff42d8.png"
                alt="Netcore Logo"
                className="h-10 w-auto object-contain"
                style={{ 
                  maxHeight: 40,
                  filter: scrolled ? 'none' : 'drop-shadow(0 0 10px rgba(255, 113, 154, 0.7))'
                }}
              />
              <div className="text-netcore-blue font-bold text-xl ml-2">
                <span className={scrolled ? "text-netcore-blue" : "text-white"}>NETCORE</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
              className={cn(
                "text-sm font-medium",
                scrolled ? "text-netcore-blue hover:text-netcore-darkBlue" : "text-white hover:text-netcore-lightGray"
              )}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('agenda')}
              className={cn(
                "text-sm font-medium",
                scrolled ? "text-netcore-blue hover:text-netcore-darkBlue" : "text-white hover:text-netcore-lightGray"
              )}
            >
              Agenda
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('guide')}
              className={cn(
                "text-sm font-medium",
                scrolled ? "text-netcore-blue hover:text-netcore-darkBlue" : "text-white hover:text-netcore-lightGray"
              )}
            >
              Bangkok Guide
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('checklist')}
              className={cn(
                "text-sm font-medium flex items-center space-x-1",
                scrolled ? "text-netcore-blue hover:text-netcore-darkBlue" : "text-white hover:text-netcore-lightGray"
              )}
            >
              <span>🧳</span>
              <span>Travel Checklist</span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('conduct')}
              className={cn(
                "text-sm font-medium",
                scrolled ? "text-netcore-blue hover:text-netcore-darkBlue" : "text-white hover:text-netcore-lightGray"
              )}
            >
              Code of Conduct
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className={cn(
                "p-2",
                scrolled ? "text-netcore-blue" : "text-white"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
