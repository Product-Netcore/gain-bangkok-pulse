
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import DayTab from './agenda/DayTab';
import { agendaData } from './agenda/agendaData';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <section id="agenda" className="py-20 relative z-[3]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/90 via-white/85 to-[#e6e6f3ee] -z-10 rounded-2xl shadow-xl border border-white/80 mx-2" />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-netcore-blue text-center mb-12 animate-on-scroll">
          Conference Agenda
        </h2>
        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {agendaData.map((day) => (
              <TabsTrigger
                key={day.id}
                value={day.id}
                className={cn(
                  "data-[state=active]:bg-netcore-blue data-[state=active]:text-white",
                  "transition-all duration-300"
                )}
              >
                {day.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {agendaData.map((day) => (
            <DayTab key={day.id} day={day} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AgendaSection;
