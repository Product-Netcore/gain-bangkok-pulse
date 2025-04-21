
import React from 'react';

export type AgendaEventType = {
  time: string;
  title: string;
  description?: string; // Changed from required to optional
};

const AgendaEvent = ({ event, index }: { event: AgendaEventType; index: number }) => {
  // Determine if this is a special event (contains emoji)
  const isSpecialEvent = event.title.match(/[^\u0000-\u007F]/); // Check for non-ASCII characters (emojis)
  
  return (
    <div
      className="p-6 animate-on-scroll"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/3 font-medium text-gray-500 mb-2 md:mb-0">
          {event.time}
        </div>
        <div className="md:w-2/3">
          <h4 className={`text-lg font-semibold mb-1 ${isSpecialEvent ? 'text-netcore-pink' : 'text-netcore-blue'}`}>
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
  );
};

export default AgendaEvent;
