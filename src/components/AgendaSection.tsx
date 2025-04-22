import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { agendaData } from './agenda/agendaData';
import { Calendar, Clock, Users, Coffee, Utensils, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState('day1');

  useEffect(() => {
    const today = new Date();
    const eventStartDate = new Date('2025-04-24');
    const day2Date = new Date('2025-04-25');
    const day3Date = new Date('2025-04-26');

    // If today is before the event, show Day 1
    if (today < eventStartDate) {
      setActiveDay('day1');
    }
    // If today is Day 2
    else if (today >= day2Date && today < day3Date) {
      setActiveDay('day2');
    }
    // If today is Day 3 or after
    else if (today >= day3Date) {
      setActiveDay('day3');
    }
    // If today is Day 1
    else {
      setActiveDay('day1');
    }
  }, []);

  const handleSwipe = (direction: 'left' | 'right') => {
    const currentIndex = agendaData.findIndex(day => day.id === activeDay);
    if (direction === 'left' && currentIndex < agendaData.length - 1) {
      setActiveDay(agendaData[currentIndex + 1].id);
    } else if (direction === 'right' && currentIndex > 0) {
      setActiveDay(agendaData[currentIndex - 1].id);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true
  });

  const getEventIcon = (title: string) => {
    if (title.toLowerCase().includes('breakfast') || title.toLowerCase().includes('lunch') || title.toLowerCase().includes('dinner')) {
      return <Utensils className="w-5 h-5 text-netcore-blue" />;
    }
    if (title.toLowerCase().includes('coffee')) {
      return <Coffee className="w-5 h-5 text-netcore-blue" />;
    }
    if (title.toLowerCase().includes('team') || title.toLowerCase().includes('group')) {
      return <Users className="w-5 h-5 text-netcore-blue" />;
    }
    if (title.toLowerCase().includes('award')) {
      return <Award className="w-5 h-5 text-netcore-blue" />;
    }
    return <Calendar className="w-5 h-5 text-netcore-blue" />;
  };

  return (
    <section
      id="agenda"
      className="pt-16 md:pt-20 pb-12 md:pb-16 max-w-7xl mx-auto container px-4"
    >
      <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-4 md:p-6 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white text-center">Conference Agenda</h2>
        
        {/* Day Selector */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
          <button
            onClick={() => handleSwipe('right')}
            className="p-2 text-white hover:text-netcore-accent transition-colors"
            aria-label="Previous day"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {agendaData.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-3 md:px-5 py-1.5 text-sm md:text-base rounded-lg transition-all duration-300 ${
                  activeDay === day.id
                    ? 'bg-netcore-blue text-white shadow-lg transform scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {day.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleSwipe('left')}
            className="p-2 text-white hover:text-netcore-accent transition-colors"
            aria-label="Next day"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Agenda Content */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
          {...swipeHandlers}
        >
          {agendaData.map((day) => (
            <div
              key={day.id}
              className={`${activeDay === day.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-netcore-lightGray/90 py-2 md:py-3 px-4 md:px-5">
                <h3 className="text-lg md:text-xl font-semibold text-netcore-blue">{day.date}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {day.events.map((event, index) => (
                  <div 
                    key={index} 
                    className="p-3 md:p-4 hover:bg-white/80 transition-colors duration-300"
                  >
                    <div className="flex flex-col space-y-1.5 md:space-y-0 md:flex-row md:items-center">
                      <div className="flex items-center space-x-2 w-full md:w-1/4 min-w-[200px]">
                        <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-medium text-gray-500 text-sm md:text-base whitespace-nowrap">
                          {event.time}
                        </span>
                      </div>
                      <div className="w-full md:w-3/4">
                        <div className="flex items-center space-x-2">
                          {getEventIcon(event.title)}
                          <div className="flex-grow">
                            <h4 className="text-base md:text-lg font-semibold text-netcore-blue">
                              {event.title}
                            </h4>
                            {event.description && (
                              <p className="text-sm md:text-base text-gray-600 mt-1">
                                {event.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
