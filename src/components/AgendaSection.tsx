import React, { useState } from 'react';
import { agendaData } from './agenda/agendaData';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section
      id="agenda"
      className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto container px-4"
    >
      <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-4 md:p-8 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white text-center">Agenda</h2>
        
        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {agendaData.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`px-4 md:px-6 py-2 text-sm md:text-base rounded-lg transition-colors ${
                activeDay === day.id
                  ? 'bg-netcore-blue text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white'
              }`}
            >
              {day.title}
            </button>
          ))}
        </div>

        {/* Agenda Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          {agendaData.map((day) => (
            <div
              key={day.id}
              className={`${activeDay === day.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-netcore-lightGray/90 py-3 md:py-4 px-4 md:px-6">
                <h3 className="text-lg md:text-xl font-semibold text-netcore-blue">{day.date}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {day.events.map((event, index) => (
                  <div key={index} className="p-4 md:p-6 hover:bg-white/80 transition-colors">
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-start">
                      <div className="w-full md:w-1/3 font-medium text-gray-500 text-sm md:text-base">
                        {event.time}
                      </div>
                      <div className="w-full md:w-2/3">
                        <h4 className="text-base md:text-lg font-semibold mb-1 text-netcore-blue">
                          {event.title}
                        </h4>
                        {event.description && (
                          <p className="text-sm md:text-base text-gray-600">
                            {event.description}
                          </p>
                        )}
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
