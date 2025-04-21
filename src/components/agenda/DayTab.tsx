
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import AgendaEvent, { AgendaEventType } from './AgendaEvent';

export type DayType = {
  id: string;
  date: string;
  title: string;
  events: AgendaEventType[];
};

const DayTab = ({ day }: { day: DayType }) => {
  return (
    <TabsContent
      value={day.id}
      className="animate-fade-in"
    >
      <div className="rounded-lg overflow-hidden border border-gray-100 shadow-md bg-white/90 backdrop-blur-sm">
        <div className="bg-netcore-lightGray py-4 px-6">
          <h3 className="text-xl font-semibold text-netcore-blue">{day.date}</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {day.events.map((event, eventIndex) => (
            <AgendaEvent key={eventIndex} event={event} index={eventIndex} />
          ))}
        </div>
      </div>
    </TabsContent>
  );
};

export default DayTab;
