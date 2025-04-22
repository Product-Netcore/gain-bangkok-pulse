import React from 'react';

export type AgendaEventType = {
  time: string;
  title: string;
  description: string;
  speaker?: string;
};

const AgendaEvent = ({ event, index }: { event: AgendaEventType; index: number }) => {
  return (
    <div 
      key={index} 
      className="p-3 md:p-4 hover:bg-white/80 transition-colors duration-300"
    >
      <div className="flex flex-col space-y-1.5 md:space-y-0 md:flex-row md:items-start">
        <div className="flex items-center space-x-2 w-full md:w-1/4">
          <span className="font-medium text-gray-500 text-sm md:text-base">
            {event.time}
          </span>
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex items-start space-x-2">
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-0.5 text-netcore-blue">
                {event.title}
              </h4>
              {event.speaker && (
                <p className="text-sm text-gray-600 italic">
                  Speaker: {event.speaker}
                </p>
              )}
              {event.description && (
                <p className="text-sm md:text-base text-gray-600">
                  {event.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaEvent;
