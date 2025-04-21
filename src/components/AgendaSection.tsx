import React, { useState } from 'react';
import { agendaData } from './agenda/agendaData';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section
      id="agenda"
      className="pt-16 pb-12 max-w-7xl mx-auto container px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-netcore-blue text-center">Agenda</h2>
      
      {/* Day Selector */}
      <div className="flex justify-center mb-8 space-x-4">
        {agendaData.map((day) => (
          <button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeDay === day.id
                ? 'bg-netcore-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {day.title}
          </button>
        ))}
      </div>

      {/* Agenda Content */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {agendaData.map((day) => (
          <div
            key={day.id}
            className={`${activeDay === day.id ? 'block' : 'hidden'}`}
          >
            <div className="bg-netcore-lightGray py-4 px-6">
              <h3 className="text-xl font-semibold text-netcore-blue">{day.date}</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {day.events.map((event, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:w-1/3 font-medium text-gray-500 mb-2 md:mb-0">
                      {event.time}
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-semibold mb-1 text-netcore-blue">
                        {event.title}
                      </h4>
                      {event.description && (
                        <p className="text-gray-600">
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
    </section>
  );
};

export default AgendaSection;
