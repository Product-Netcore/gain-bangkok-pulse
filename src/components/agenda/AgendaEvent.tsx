
import React from 'react';

export type AgendaEventType = {
  time: string;
  title: string;
  description: string;
};

const AgendaEvent = ({ event, index }: { event: AgendaEventType; index: number }) => {
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
          <h4 className="text-lg font-semibold text-netcore-blue mb-1">
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
