import { useEffect, useState } from 'react';

type UrgencyLevel = 'high' | 'medium' | 'low' | 'normal';

type TimeBlockProps = {
  value: number;
  label: string;
  urgencyLevel: UrgencyLevel;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
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

  const [isEventStarted, setIsEventStarted] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState<UrgencyLevel>('normal');

  useEffect(() => {
    // Conference start date: April 24, 2025
    const conferenceDate = new Date('2025-04-24T00:00:00').getTime();
    const conferenceEndDate = new Date('2025-04-26T23:59:59').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;
      const eventDistance = conferenceEndDate - now;
      
      // Check if event has started
      if (distance < 0 && eventDistance > 0) {
        setIsEventStarted(true);
        // Calculate time since event started
        const timeElapsed = Math.abs(distance);
        const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
        
        setTimeLeft(prev => {
          const newAnimating = {
            days: prev.days !== days,
            hours: prev.hours !== hours,
            minutes: prev.minutes !== minutes,
            seconds: prev.seconds !== seconds
          };
          
          if (Object.values(newAnimating).some(v => v)) {
            setIsAnimating(newAnimating);
            setTimeout(() => setIsAnimating({
              days: false,
              hours: false,
              minutes: false,
              seconds: false
            }), 300);
          }
          
          return { days, hours, minutes, seconds };
        });
      } else if (distance > 0) {
        // Calculate countdown
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update urgency level based on remaining time
        if (days <= 1) setUrgencyLevel('high');
        else if (days <= 3) setUrgencyLevel('medium');
        else if (days <= 7) setUrgencyLevel('low');
        else setUrgencyLevel('normal');
        
        setTimeLeft(prev => {
          const newAnimating = {
            days: prev.days !== days,
            hours: prev.hours !== hours,
            minutes: prev.minutes !== minutes,
            seconds: prev.seconds !== seconds
          };
          
          if (Object.values(newAnimating).some(v => v)) {
            setIsAnimating(newAnimating);
            setTimeout(() => setIsAnimating({
              days: false,
              hours: false,
              minutes: false,
              seconds: false
            }), 300);
          }
          
          return { days, hours, minutes, seconds };
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Get dynamic colors based on urgency
  const getUrgencyColor = (urgencyLevel: UrgencyLevel): string => {
    switch (urgencyLevel) {
      case 'high': return 'bg-gradient-to-br from-red-600 to-red-800';
      case 'medium': return 'bg-gradient-to-br from-yellow-600 to-yellow-800';
      case 'low': return 'bg-gradient-to-br from-green-600 to-green-800';
      default: return 'bg-gradient-to-br from-blue-600 to-blue-800';
    }
  };

  // Get pulse animation class based on urgency
  const getPulseClass = (urgencyLevel: UrgencyLevel): string => {
    switch (urgencyLevel) {
      case 'high': return 'animate-pulse-fast';
      case 'medium': return 'animate-pulse-slow';
      case 'low': return 'animate-pulse-slow';
      default: return '';
    }
  };

  const TimeBlock = ({ value, label, urgencyLevel }: TimeBlockProps) => {
    const pulseClass = getPulseClass(urgencyLevel);
    const bgColor = getUrgencyColor(urgencyLevel);
    
    return (
      <div className={`flex flex-col items-center p-4 rounded-lg ${bgColor} transition-all duration-300 animate-fade-in ${pulseClass}`}>
        <span className="text-4xl font-bold mb-1 transition-all duration-300">
          {value}
        </span>
        <span className="text-sm opacity-80">{label}</span>
      </div>
    );
  };

  const getUrgencyLevel = (timeLeft: TimeLeft): UrgencyLevel => {
    const totalHours = timeLeft.days * 24 + timeLeft.hours;
    
    if (totalHours <= 24) return 'high';
    if (totalHours <= 72) return 'medium';
    if (totalHours <= 168) return 'low';
    return 'normal';
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in text-white" style={{ animationDelay: '0.3s' }}>
          {isEventStarted ? "Event in Progress" : "Time Until Event"}
        </h3>
        <div className="flex space-x-4 md:space-x-6 animate-fade-in justify-center" style={{ animationDelay: '0.6s' }}>
          <TimeBlock value={timeLeft.days} label="Days" urgencyLevel={getUrgencyLevel(timeLeft)} />
          <TimeBlock value={timeLeft.hours} label="Hours" urgencyLevel={getUrgencyLevel(timeLeft)} />
          <TimeBlock value={timeLeft.minutes} label="Minutes" urgencyLevel={getUrgencyLevel(timeLeft)} />
          <TimeBlock value={timeLeft.seconds} label="Seconds" urgencyLevel={getUrgencyLevel(timeLeft)} />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
