
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isAnimating, setIsAnimating] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  useEffect(() => {
    // Conference start date: April 24, 2025
    const conferenceDate = new Date('2025-04-24T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft(prev => {
        // Check which values changed to trigger animations
        const newAnimating = {
          days: prev.days !== days,
          hours: prev.hours !== hours,
          minutes: prev.minutes !== minutes,
          seconds: prev.seconds !== seconds
        };
        
        // If any value changed, set its animation flag
        if (newAnimating.days || newAnimating.hours || 
            newAnimating.minutes || newAnimating.seconds) {
          setIsAnimating(newAnimating);
          
          // Reset animation flags after animation completes
          setTimeout(() => {
            setIsAnimating({
              days: false,
              hours: false,
              minutes: false,
              seconds: false
            });
          }, 1000);
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label, isAnimating }: { value: number, label: string, isAnimating: boolean }) => (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden w-16 h-20 md:w-20 md:h-24 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white border-opacity-20">
        <span className={`text-3xl md:text-4xl font-bold text-white ${isAnimating ? 'animate-count-down' : ''}`}>
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-white mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-white text-xl md:text-2xl mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>Event begins in:</h3>
      <div className="flex space-x-4 md:space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <TimeBlock value={timeLeft.days} label="Days" isAnimating={isAnimating.days} />
        <TimeBlock value={timeLeft.hours} label="Hours" isAnimating={isAnimating.hours} />
        <TimeBlock value={timeLeft.minutes} label="Minutes" isAnimating={isAnimating.minutes} />
        <TimeBlock value={timeLeft.seconds} label="Seconds" isAnimating={isAnimating.seconds} />
      </div>
    </div>
  );
};

export default CountdownTimer;
