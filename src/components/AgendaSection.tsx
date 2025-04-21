
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const days = [
    {
      id: "day1",
      date: "April 24, 2025",
      title: "Day 1",
      events: [
        {
          time: "Throughout the day",
          title: "Group Airport Pick-ups",
          description: "Arranged post arrival at Suvarnabhumi International Airport"
        },
        {
          time: "12:00 PM - 4:00 PM",
          title: "Hotel Check-in",
          description: "Conference venue hotel"
        },
        {
          time: "7:00 PM - 10:00 PM",
          title: "Welcome Dinner & Team Bonding",
          description: "Networking event with fun activities"
        }
      ]
    },
    {
      id: "day2",
      date: "April 25, 2025",
      title: "Day 2",
      events: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Opening Keynote: Strategy & Vision",
          description: "Keynote by CEO and leadership team"
        },
        {
          time: "10:45 AM - 12:30 PM",
          title: "Go-to-Market Sessions",
          description: "Breakout sessions by region"
        },
        {
          time: "12:30 PM - 2:00 PM",
          title: "Networking Lunch",
          description: "Regional teams dine together"
        },
        {
          time: "2:00 PM - 5:00 PM",
          title: "Strategy Workshops",
          description: "Interactive team sessions"
        },
        {
          time: "7:00 PM - 11:00 PM",
          title: "Awards Night & Gala Dinner",
          description: "Celebration of achievements"
        }
      ]
    },
    {
      id: "day3",
      date: "April 26, 2025",
      title: "Day 3",
      events: [
        {
          time: "9:00 AM - 12:00 PM",
          title: "Free Morning for Leader Side-Meetings",
          description: "Optional meetings or free time to explore Bangkok"
        },
        {
          time: "Throughout the day",
          title: "Return Airport Transfers",
          description: "Dynamic group-wise timing based on flight schedules"
        }
      ]
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-netcore-blue text-center mb-12 animate-on-scroll">
          Conference Agenda
        </h2>
        
        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {days.map((day) => (
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
          
          {days.map((day, dayIndex) => (
            <TabsContent 
              key={day.id} 
              value={day.id}
              className="animate-fade-in"
            >
              <div className="rounded-lg overflow-hidden border border-gray-100 shadow-md">
                <div className="bg-netcore-lightGray py-4 px-6">
                  <h3 className="text-xl font-semibold text-netcore-blue">{day.date}</h3>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className="p-6 animate-on-scroll"
                      style={{ animationDelay: `${eventIndex * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start">
                        <div className="md:w-1/3 font-medium text-gray-500 mb-2 md:mb-0">
                          {event.time}
                        </div>
                        <div className="md:w-2/3">
                          <h4 className="text-lg font-semibold text-netcore-blue mb-1">
                            {event.title}
                          </h4>
                          <p className="text-gray-600">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AgendaSection;
