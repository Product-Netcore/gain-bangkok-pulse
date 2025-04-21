
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DayTab from './agenda/DayTab';
import { agendaData } from './agenda/agendaData';

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      className="pt-16 pb-12 max-w-7xl mx-auto container px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-netcore-blue text-center">Agenda</h2>
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="w-full flex justify-center mb-6">
          {agendaData.map((day) => (
            <TabsTrigger
              key={day.id}
              value={day.id}
              className="text-lg px-6 py-3"
            >
              {day.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {agendaData.map((day) => (
          <DayTab key={day.id} day={day} />
        ))}
      </Tabs>
    </section>
  );
};

export default AgendaSection;
